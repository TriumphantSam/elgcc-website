import { NextRequest, NextResponse } from 'next/server';
import {
  getTransactionIdFromWebhookPayload,
  isSuccessfulFlutterwaveTransaction,
  isTosFlutterwaveTransaction,
  verifyFlutterwaveTransaction,
} from '@/lib/tos2026/flutterwave';
import {
  markFlutterwaveRegistrationFailed,
  markFlutterwaveRegistrationPaid,
} from '@/lib/tos2026/payments';

function isAuthorizedForwardedWebhook(req: NextRequest) {
  const forwardSecret = process.env.ELGCC_FORWARD_SECRET;
  const providedSecret = req.headers.get('x-elgcc-webhook-secret');

  if (forwardSecret && providedSecret === forwardSecret) {
    return true;
  }

  const legacyFlutterwaveSecret = process.env.FLUTTERWAVE_WEBHOOK_SECRET;
  const legacyHash = req.headers.get('verif-hash');

  return Boolean(legacyFlutterwaveSecret && legacyHash === legacyFlutterwaveSecret);
}

export async function POST(req: NextRequest) {
  if (!isAuthorizedForwardedWebhook(req)) {
    return NextResponse.json({ success: false, error: 'Unauthorized webhook' }, { status: 401 });
  }

  try {
    const payload = await req.json();
    const transactionId = getTransactionIdFromWebhookPayload(payload);

    if (!transactionId) {
      return NextResponse.json({ success: true, ignored: true, reason: 'No transaction ID' });
    }

    const transaction = await verifyFlutterwaveTransaction(transactionId);

    if (!isTosFlutterwaveTransaction(transaction)) {
      return NextResponse.json({ success: true, ignored: true, reason: 'Not a TOS 2026 payment' });
    }

    if (isSuccessfulFlutterwaveTransaction(transaction)) {
      const registration = await markFlutterwaveRegistrationPaid(transaction);
      return NextResponse.json({
        success: true,
        registrationId: registration.registrationId,
        paymentStatus: registration.paymentStatus,
      });
    }

    const registrationId = await markFlutterwaveRegistrationFailed(transaction);
    return NextResponse.json({
      success: true,
      registrationId,
      paymentStatus: 'failed',
    });
  } catch (error) {
    console.error('TOS Flutterwave webhook error:', error);
    return NextResponse.json(
      { success: false, error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
