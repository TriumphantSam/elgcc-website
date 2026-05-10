import Link from 'next/link';
import '../tos2026.css';

interface PaymentResultPageProps {
  searchParams: {
    status?: string;
    registrationId?: string;
    message?: string;
  };
}

export default function PaymentResultPage({ searchParams }: PaymentResultPageProps) {
  const isSuccess = searchParams.status === 'success';
  const registrationId = searchParams.registrationId;

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

          {registrationId && (
            <div className="bg-slate-50 rounded-xl p-5 mb-6 text-left">
              <div className="flex justify-between gap-4">
                <span className="text-slate-500 text-sm">Registration ID</span>
                <span className="text-[#D4A843] font-mono font-bold text-sm text-right">
                  {registrationId}
                </span>
              </div>
            </div>
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
