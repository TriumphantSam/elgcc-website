import { isFlutterwaveConfigured } from './flutterwave';
import { getGoogleSheetsDiagnostics } from './sheets';

export type TosHealthCheck = {
  ok: boolean;
  checkedAt: string;
  checks: {
    flutterwaveConfigured: boolean;
    googleSheetsConnected: boolean;
    googleSheetsWritable: boolean;
    forwardSecretPresent: boolean;
    registrationPaymentRequired: boolean;
  };
  googleSheets: Awaited<ReturnType<typeof getGoogleSheetsDiagnostics>>;
  problems: string[];
};

export async function getTosHealthCheck(): Promise<TosHealthCheck> {
  const googleSheets = await getGoogleSheetsDiagnostics();
  const checks = {
    flutterwaveConfigured: isFlutterwaveConfigured(),
    googleSheetsConnected: googleSheets.connected,
    googleSheetsWritable: googleSheets.connected && googleSheets.registrationsSheetFound && !googleSheets.error,
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

  if (!checks.forwardSecretPresent) {
    problems.push('ELGCC forwarded webhook secret is missing.');
  }

  return {
    ok: problems.length === 0,
    checkedAt: new Date().toISOString(),
    checks,
    googleSheets,
    problems,
  };
}
