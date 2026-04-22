import type { Metadata } from 'next';
import './tos2026.css';

export const metadata: Metadata = {
  title: 'Training of the Spirit 2026 — Register Now | ELGCC',
  description:
    'Register for Training of the Spirit 2026, August 3–8. An annual spiritual empowerment conference by Eternal Life Global Community Church. Register individuals or church groups.',
  keywords: [
    'Training of the Spirit',
    'TOS 2026',
    'ELGCC',
    'church conference',
    'spiritual empowerment',
    'registration',
  ],
  openGraph: {
    title: 'Training of the Spirit 2026 — Register Now',
    description:
      'Register for Training of the Spirit 2026, August 3–8. Spiritual empowerment conference by ELGCC.',
    type: 'website',
  },
};

export default function TOS2026Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
