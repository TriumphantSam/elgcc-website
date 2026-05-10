import { NextRequest, NextResponse } from 'next/server';
import { generateRegistrationId } from '@/lib/tos2026/pricing';
import { createFlutterwavePaymentLink, getSiteUrl, isFlutterwaveConfigured } from '@/lib/tos2026/flutterwave';
import { getGoogleSheetsDiagnostics } from '@/lib/tos2026/sheets';
import { Registration } from '@/lib/tos2026/types';

function isAuthorized(req: NextRequest) {
  const password = req.nextUrl.searchParams.get('password');
  const adminPassword = process.env.TOS_ADMIN_PASSWORD || 'tos2026admin';
  return password === adminPassword;
}

function maskPresence(value: string | undefined) {
  if (!value) {
    return { present: false, preview: '' };
  }

  return {
    present: true,
    preview: `${value.slice(0, 8)}...${value.slice(-4)}`,
  };
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const googleSheets = await getGoogleSheetsDiagnostics();
  const siteUrl = getSiteUrl(req.nextUrl.origin);
  const diagnostics = {
    nodeEnv: process.env.NODE_ENV,
    siteUrl,
    flutterwaveConfigured: isFlutterwaveConfigured(),
    secretKey: maskPresence(process.env.FLUTTERWAVE_SECRET_KEY),
    currency: process.env.FLUTTERWAVE_CURRENCY || 'NGN',
    title: process.env.FLUTTERWAVE_TITLE || 'ELGCC Training of the Spirit 2026',
    forwardSecretPresent: Boolean(process.env.ELGCC_FORWARD_SECRET),
    requireFlutterwavePayment: process.env.TOS_REQUIRE_FLUTTERWAVE_PAYMENT !== '0',
    googleSheets,
  };

  if (req.nextUrl.searchParams.get('createLink') !== '1') {
    return NextResponse.json({ success: true, diagnostics });
  }

  if (!isFlutterwaveConfigured()) {
    return NextResponse.json({
      success: false,
      diagnostics,
      error: 'FLUTTERWAVE_SECRET_KEY is not available to this deployment.',
    });
  }

  const registrationId = generateRegistrationId();
  const registration: Registration = {
    registrationId,
    coordinator: {
      fullName: 'ELGCC Payment Diagnostics',
      phoneNumber: '08000000000',
      emailAddress: 'diagnostics@example.com',
      churchName: 'ELGCC',
    },
    attendees: [
      {
        id: 'diagnostics',
        fullName: 'ELGCC Payment Diagnostics',
        gender: 'Male',
        category: 'child',
        phoneNumber: '08000000000',
        emailAddress: 'diagnostics@example.com',
        region: 'Southern Nigeria',
        localChurch: 'ELGCC',
        medicalConditions: '',
      },
    ],
    totalAmount: 100,
    paymentStatus: 'pending',
    paymentReference: registrationId,
    paymentProvider: 'flutterwave',
    registeredAt: new Date().toISOString(),
  };

  try {
    const payment = await createFlutterwavePaymentLink(registration, req.nextUrl.origin);
    return NextResponse.json({
      success: true,
      diagnostics,
      flutterwaveLinkCreated: true,
      paymentLinkHost: new URL(payment.paymentLink).hostname,
      txRef: payment.txRef,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        diagnostics,
        flutterwaveLinkCreated: false,
        error: error instanceof Error ? error.message : 'Unable to create Flutterwave payment link.',
      },
      { status: 502 }
    );
  }
}
