# TOS 2026 Flutterwave Forwarding

Flutterwave should keep sending account-level webhooks to the existing TriumphantHQ webhook if Digital Forge still needs payment notifications.

The ELGCC site now has its own receiving endpoint:

```text
https://eternallifegcc.com/api/tos2026/flutterwave/webhook
```

## Environment Variables

Add these to the ELGCC Vercel project:

```text
FLUTTERWAVE_SECRET_KEY=your_flutterwave_secret_key
FLUTTERWAVE_CURRENCY=NGN
NEXT_PUBLIC_SITE_URL=https://eternallifegcc.com
ELGCC_FORWARD_SECRET=choose-a-long-random-secret
FLUTTERWAVE_TITLE=ELGCC Training of the Spirit 2026
FLUTTERWAVE_DESCRIPTION=TOS 2026 Registration Payment
FLUTTERWAVE_LOGO_URL=https://eternallifegcc.com/images/elgcc-logo.png
```

Add the same forward secret to the TriumphantHQ project:

```text
ELGCC_FORWARD_SECRET=the-same-long-random-secret
ELGCC_FORWARD_URL=https://eternallifegcc.com/api/tos2026/flutterwave/webhook
```

## TriumphantHQ Forwarder Snippet

In the existing TriumphantHQ Flutterwave webhook route, after the webhook payload has been verified as a real Flutterwave request, add this logic before returning `200`:

```ts
const payload = await req.json();
const data = payload?.data || {};

const isElgccPayment =
  String(data.tx_ref || '').startsWith('TOS26-') ||
  data.meta?.source === 'elgcc_tos2026';

if (isElgccPayment) {
  await fetch(process.env.ELGCC_FORWARD_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-elgcc-webhook-secret': process.env.ELGCC_FORWARD_SECRET!,
    },
    body: JSON.stringify(payload),
  });
}
```

Keep the Flutterwave dashboard webhook URL pointed at TriumphantHQ:

```text
https://triumphanthq.com/api/digital-forge/flutterwave/...
```

## How The ELGCC Site Identifies TOS Payments

When the registration API creates a Flutterwave payment, it marks the payment with:

```ts
tx_ref: "TOS26-..."
meta: {
  source: "elgcc_tos2026",
  registrationId: "TOS26-..."
}
```

The ELGCC webhook only processes payments with that marker. Other Flutterwave events are ignored.
