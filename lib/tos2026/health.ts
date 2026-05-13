import { isFlutterwaveConfigured } from './flutterwave';
import { getEmailDiagnostics } from './email';
import { getGoogleSheetsDiagnostics } from './sheets';

export type TosHealthCheck = {
  ok: boolean;
  checkedAt: string;
  checks: {
    flutterwaveConfigured: boolean;
    googleSheetsConnected: boolean;
    googleSheetsWritable: boolean;
    emailConnected: boolean;
    forwardSecretPresent: boolean;
    registrationPaymentRequired: boolean;
  };
  googleSheets: Awaited<ReturnType<typeof getGoogleSheetsDiagnostics>>;
  email: Awaited<ReturnType<typeof getEmailDiagnostics>>;
  problems: string[];
};

export async function getTosHealthCheck(): Promise<TosHealthCheck> {
  const [googleSheets, email] = await Promise.all([
    getGoogleSheetsDiagnostics(),
    getEmailDiagnostics(),
  ]);
  const checks = {
    flutterwaveConfigured: isFlutterwaveConfigured(),
    googleSheetsConnected: googleSheets.connected,
    googleSheetsWritable: googleSheets.connected && googleSheets.registrationsSheetFound && !googleSheets.error,
    emailConnected: email.connected,
    forwardSecretPresent: Boolean(process.env.ELGCC_FORWARD_SECRET),
    registrationPaymentRequired: process.env.TOS_REQUIRE_FLUTTERWAVE_PAYMENT !== '0',
  };

  const problems: string[] = [];

  if (!checks.flutterwaveConfigured) {
    problems.push('Flutterwave secret key is missing.');
  }

  if (!checks.googleSheetsConnected) {
    problems.push(`Google Sheets is not connected${googleSheets.error ? `: ${googleSheets.error}` : '.'}`);
  }

  if (!checks.googleSheetsWritable) {
    problems.push('The Registrations sheet is not ready for writes.');
  }

  if (!checks.emailConnected) {
    problems.push(`Confirmation email is not connected${email.error ? `: ${email.error}` : '.'}`);
  }

  if (!checks.forwardSecretPresent) {
    problems.push('ELGCC forwarded webhook secret is missing.');
  }

  return {
    ok: problems.length === 0,
    checkedAt: new Date().toISOString(),
    checks,
    googleSheets,
    email,
    problems,
  };
}
