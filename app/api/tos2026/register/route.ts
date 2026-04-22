import { NextRequest, NextResponse } from 'next/server';
import { generateRegistrationId, calculatePriceBreakdown } from '@/lib/tos2026/pricing';
import { Attendee, CoordinatorInfo, Registration } from '@/lib/tos2026/types';
import fs from 'fs';
import path from 'path';

import { appendToGoogleSheet } from '@/lib/tos2026/sheets';
import { sendConfirmationEmail } from '@/lib/tos2026/email';

// Simple file-based storage (will be replaced by Google Sheets)
const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'tos2026-registrations.json');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, '[]', 'utf-8');
  }
}

function saveRegistration(reg: Registration) {
  ensureDataDir();
  const existing = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  existing.push(reg);
  fs.writeFileSync(DATA_FILE, JSON.stringify(existing, null, 2), 'utf-8');
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { coordinator, attendees } = body as {
      coordinator: CoordinatorInfo;
      attendees: Attendee[];
    };

    // Validate coordinator
    if (
      !coordinator?.fullName?.trim() ||
      !coordinator?.phoneNumber?.trim() ||
      !coordinator?.emailAddress?.trim() ||
      !coordinator?.churchName?.trim()
    ) {
      return NextResponse.json(
        { success: false, error: 'Missing coordinator information' },
        { status: 400 }
      );
    }

    // Validate attendees
    if (!attendees || attendees.length === 0) {
      return NextResponse.json(
        { success: false, error: 'At least one attendee is required' },
        { status: 400 }
      );
    }

    for (const att of attendees) {
      if (!att.fullName?.trim() || !att.gender || !att.category || !att.region) {
        return NextResponse.json(
          { success: false, error: `Incomplete information for attendee: ${att.fullName || 'Unknown'}` },
          { status: 400 }
        );
      }
    }

    // Calculate total
    const { total } = calculatePriceBreakdown(attendees);
    const registrationId = generateRegistrationId();

    // Build registration record
    const registration: Registration = {
      registrationId,
      coordinator,
      attendees,
      totalAmount: total,
      paymentStatus: 'pending',
      paymentReference: '',
      registeredAt: new Date().toISOString(),
    };

    // Save to local file (fallback storage)
    try {
      saveRegistration(registration);
    } catch (fsError) {
      // On Vercel, filesystem is read-only — log and continue
      console.log('File storage unavailable (expected on Vercel):', fsError);
    }

    // Sync to Google Sheets (if credentials are set)
    await appendToGoogleSheet(registration);

    // Send confirmation email (if credentials are set)
    await sendConfirmationEmail(registration);

    // TODO: Integrate Flutterwave when API keys are available
    // For now, check if keys exist
    const flutterwavePublicKey = process.env.FLUTTERWAVE_PUBLIC_KEY;
    if (flutterwavePublicKey && flutterwavePublicKey !== 'PLACEHOLDER') {
      // In the future, generate a Flutterwave payment link here
      // const paymentLink = await createFlutterwavePaymentLink(registration);
      // return NextResponse.json({ success: true, registrationId, paymentLink });
    }

    // Placeholder mode: return success without payment
    return NextResponse.json({
      success: true,
      registrationId,
      total,
      paymentLink: null, // null = placeholder mode (no Flutterwave yet)
      message: 'Registration recorded. Payment integration pending.',
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint for admin to view registrations
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const password = searchParams.get('password');

  const adminPassword = process.env.TOS_ADMIN_PASSWORD || 'tos2026admin';
  if (password !== adminPassword) {
    return NextResponse.json(
      { success: false, error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    ensureDataDir();
    const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    return NextResponse.json({ success: true, registrations: data });
  } catch {
    return NextResponse.json({ success: true, registrations: [] });
  }
}
