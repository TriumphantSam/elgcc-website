import { NextRequest, NextResponse } from 'next/server';
import {
  getRegistrationIdFromTransaction,
  isSuccessfulFlutterwaveTransaction,
  isTosFlutterwaveTransaction,
  verifyFlutterwaveTransaction,
} from '@/lib/tos2026/flutterwave';
import {
  markFlutterwaveRegistrationFailed,
  markFlutterwaveRegistrationPaid,
  markVerifiedFlutterwavePaymentWithoutRegistration,
} from '@/lib/tos2026/payments';

function paymentResultUrl(req: NextRequest, status: string, registrationId?: string, message?: string) {
  const url = new URL('/register/tos2026/payment', req.nextUrl.origin);
  url.searchParams.set('status', status);

  if (registrationId) {
    url.searchParams.set('registrationId', registrationId);
  }

  if (message) {
    url.searchParams.set('message', message);
  }

  return url;
}

export async function GET(req: NextRequest) {
  const transactionId = req.nextUrl.searchParams.get('transaction_id');

  if (!transactionId) {
    return NextResponse.redirect(paymentResultUrl(req, 'failed', undefined, 'Missing transaction reference.'));
  }

  try {
    const transaction = await verifyFlutterwaveTransaction(transactionId);
    const registrationId = getRegistrationIdFromTransaction(transaction);

    if (!isTosFlutterwaveTransaction(transaction)) {
      return NextResponse.redirect(paymentResultUrl(req, 'failed', registrationId, 'This payment does not belong to TOS 2026.'));
    }

    if (isSuccessfulFlutterwaveTransaction(transaction)) {
      try {
        const registration = await markFlutterwaveRegistrationPaid(transaction);
        return NextResponse.redirect(paymentResultUrl(req, 'success', registration.registrationId));
      } catch (error) {
        const missingRegistration =
          error instanceof Error && error.message.includes('No TOS registration found');

        if (!missingRegistration) {
          throw error;
        }

        const fallbackPayment = await markVerifiedFlutterwavePaymentWithoutRegistration(transaction);
        return NextResponse.redirect(
          paymentResultUrl(
            req,
            'success',
            fallbackPayment.registrationId,
            'Payment was confirmed. The admin team should reconcile this registration in Google Sheets.'
          )
        );
      }
    }

    await markFlutterwaveRegistrationFailed(transaction);
    return NextResponse.redirect(paymentResultUrl(req, 'failed', registrationId, 'Payment was not successful.'));
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to verify payment.';
    return NextResponse.redirect(paymentResultUrl(req, 'failed', undefined, message));
  }
}
