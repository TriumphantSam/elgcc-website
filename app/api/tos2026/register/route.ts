import { NextRequest, NextResponse } from 'next/server';
import { generateRegistrationId, calculatePriceBreakdown } from '@/lib/tos2026/pricing';
import { Attendee, CoordinatorInfo, Registration } from '@/lib/tos2026/types';

import { appendToGoogleSheet } from '@/lib/tos2026/sheets';
import { sendConfirmationEmail } from '@/lib/tos2026/email';
import { saveLocalRegistration, getLocalRegistrations } from '@/lib/tos2026/registrations';
import {
  createFlutterwavePaymentLink,
  getFlutterwaveTxRef,
  isFlutterwaveConfigured,
} from '@/lib/tos2026/flutterwave';

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
    const flutterwaveConfigured = isFlutterwaveConfigured();
    const paymentReference = flutterwaveConfigured ? getFlutterwaveTxRef(registrationId) : '';

    // Build registration record
    const registration: Registration = {
      registrationId,
      coordinator,
      attendees,
      totalAmount: total,
      paymentStatus: 'pending',
      paymentReference,
      paymentProvider: flutterwaveConfigured ? 'flutterwave' : undefined,
      registeredAt: new Date().toISOString(),
    };

    // Save to local file (fallback storage)
    try {
      saveLocalRegistration(registration);
    } catch (fsError) {
      // On Vercel, filesystem is read-only — log and continue
      console.log('File storage unavailable (expected on Vercel):', fsError);
    }

    // Sync to Google Sheets (if credentials are set)
    await appendToGoogleSheet(registration);

    if (flutterwaveConfigured) {
      const { paymentLink, txRef } = await createFlutterwavePaymentLink(
        { ...registration, paymentReference },
        req.nextUrl.origin
      );

      return NextResponse.json({
        success: true,
        registrationId,
        total,
        paymentReference: txRef,
        paymentLink,
        message: 'Registration recorded. Redirecting to Flutterwave for payment.',
      });
    }

    // Placeholder mode: record registration and notify without online payment.
    await sendConfirmationEmail(registration);

    return NextResponse.json({
      success: true,
      registrationId,
      total,
      paymentLink: null,
      message: 'Registration recorded. Online payment is not configured yet.',
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
    const data = getLocalRegistrations();
    return NextResponse.json({ success: true, registrations: data });
  } catch {
    return NextResponse.json({ success: true, registrations: [] });
  }
}
