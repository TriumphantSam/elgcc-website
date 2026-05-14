import Link from 'next/link';
import { findRegistrationForPayment } from '@/lib/tos2026/payments';
import { formatPrice } from '@/lib/tos2026/pricing';
import '../tos2026.css';

export const dynamic = 'force-dynamic';

interface PaymentResultPageProps {
  searchParams: {
    status?: string;
    registrationId?: string;
    message?: string;
  };
}

export default async function PaymentResultPage({ searchParams }: PaymentResultPageProps) {
  const isSuccess = searchParams.status === 'success';
  const registrationId = searchParams.registrationId;
  const registration = isSuccess && registrationId
    ? await findRegistrationForPayment(registrationId)
    : null;
  const isGroupRegistration = registration?.registrationType === 'group' || (registration?.attendees.length || 0) > 1;
  const contactLabel = isGroupRegistration ? 'Coordinator' : 'Registrant';

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="container-custom max-w-2xl mx-auto">
        <div className="tos-card rounded-2xl p-8 md:p-12 text-center">
          <div className="text-6xl mb-6">{isSuccess ? '✅' : '⚠️'}</div>
          <h1 className="text-3xl font-black text-slate-900 mb-3">
            {isSuccess ? 'Payment Confirmed' : 'Payment Not Confirmed'}
          </h1>
          <p className="text-slate-500 mb-6">
            {isSuccess
              ? searchParams.message || 'Thank you. Your Training of the Spirit 2026 registration payment has been confirmed.'
              : searchParams.message || 'We could not confirm this payment. If money was deducted, please contact the ELGCC admin team with your payment reference.'}
          </p>

          {(registration || registrationId) && (
            <div className="bg-slate-50 rounded-xl p-5 mb-6 text-left space-y-3">
              <div className="flex justify-between gap-4 border-b border-slate-200 pb-3">
                <span className="text-slate-500 text-sm">Registration ID</span>
                <span className="text-[#D4A843] font-mono font-bold text-sm text-right">{registrationId}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-slate-500 text-sm">Payment Status</span>
                <span className="font-bold text-green-700 text-sm text-right">
                  {isSuccess ? 'Confirmed' : 'Not Confirmed'}
                </span>
              </div>

              {registration && (
                <>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-500 text-sm">Payment Reference</span>
                    <span className="font-mono text-slate-800 text-sm text-right">
                      {registration.paymentReference || 'N/A'}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-500 text-sm">Total Amount Paid</span>
                    <span className="font-bold text-slate-900 text-sm text-right">
                      {formatPrice(registration.totalAmount)}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-500 text-sm">{contactLabel}</span>
                    <span className="font-semibold text-slate-900 text-sm text-right">
                      {registration.coordinator.fullName}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-500 text-sm">Number of Attendees</span>
                    <span className="font-semibold text-slate-900 text-sm text-right">
                      {registration.attendees.length}
                    </span>
                  </div>
                </>
              )}
            </div>
          )}

          {isSuccess && (
            <p className="text-slate-500 text-sm mb-6">
              A confirmation email has been sent to the {contactLabel.toLowerCase()}. For corrections, email eternallifegcc@gmail.com.
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/register/tos2026" className="tos-btn-secondary inline-flex w-auto px-8">
              Back to Registration
            </Link>
            <Link href="/" className="tos-btn-primary inline-flex w-auto px-8">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
