import { NextRequest, NextResponse } from 'next/server';
import { sendAdminAlertEmail } from '@/lib/tos2026/email';
import { getTosHealthCheck } from '@/lib/tos2026/health';

function getAuthMode(req: NextRequest) {
  const adminPassword = process.env.TOS_ADMIN_PASSWORD || 'tos2026admin';
  const password = req.nextUrl.searchParams.get('password');

  if (password === adminPassword) {
    return 'admin';
  }

  const cronSecret = process.env.CRON_SECRET;
  const authHeader = req.headers.get('authorization');

  if (cronSecret && authHeader === `Bearer ${cronSecret}`) {
    return 'cron';
  }

  return null;
}

export async function GET(req: NextRequest) {
  const authMode = getAuthMode(req);

  if (!authMode) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const health = await getTosHealthCheck();
  const shouldNotify = authMode === 'cron' || req.nextUrl.searchParams.get('notify') === '1';
  let alertSent = false;

  if (!health.ok && shouldNotify) {
    alertSent = await sendAdminAlertEmail(
      'ELGCC TOS 2026 registration health check failed',
      [
        'The TOS 2026 registration system health check failed.',
        '',
        `Checked at: ${health.checkedAt}`,
        `Problems: ${health.problems.join('; ')}`,
        '',
        `Google Sheet: ${health.googleSheets.sheetTitle || 'not available'}`,
        `Rows detected: ${health.googleSheets.rowCount ?? 'not available'}`,
      ].join('\n')
    );
  }

  return NextResponse.json(
    {
      success: health.ok,
      alertSent,
      health,
    },
    { status: health.ok ? 200 : 503 }
  );
}
