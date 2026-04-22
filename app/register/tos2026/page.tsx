'use client';

import EventHero from '@/components/tos2026/EventHero';
import RegistrationForm from '@/components/tos2026/RegistrationForm';

export default function TOS2026Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F1A0A] via-[#1A1A1A] to-[#0A0A0A]">
      <EventHero />
      <RegistrationForm />
      {/* Spacer for mobile bottom bar */}
      <div className="h-24 lg:hidden" />
    </div>
  );
}
