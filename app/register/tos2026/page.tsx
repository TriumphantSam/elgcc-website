'use client';

import EventHero from '@/components/tos2026/EventHero';
import RegistrationForm from '@/components/tos2026/RegistrationForm';

export default function TOS2026Page() {
  return (
    <div className="min-h-screen bg-slate-50">
      <EventHero />
      <RegistrationForm />
      {/* Spacer for mobile bottom bar */}
      <div className="h-24 lg:hidden" />
    </div>
  );
}
