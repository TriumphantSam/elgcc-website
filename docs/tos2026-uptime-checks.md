# TOS 2026 Uptime Checks

This site includes a daily production health check for the TOS 2026 registration flow.

## What It Checks

- Flutterwave secret key is present.
- Google Sheets can be reached.
- The `Registrations` tab is available and writable.
- The forwarded Flutterwave webhook secret is present.
- Online payment is still required.

## Manual Check

Open this URL:

```text
https://eternallifegcc.com/api/tos2026/health?password=YOUR_ADMIN_PASSWORD
```

If everything is working, it returns `success: true`.

## Daily Automatic Check

Vercel calls this endpoint once daily at 8:00 AM Nigeria time:

```text
/api/tos2026/health
```

For the automatic check to run securely, add this environment variable in Vercel:

```text
CRON_SECRET
```

Use a long random value. The exact value does not need to be remembered after saving it in Vercel.

## Alert Email

If a daily check fails, the site sends an alert email when these environment variables are set:

```text
EMAIL_USER
EMAIL_PASS
TOS_ALERT_EMAIL
```

`TOS_ALERT_EMAIL` should be the admin address that should receive failure notices. If it is not set, alerts go to `EMAIL_USER`.
