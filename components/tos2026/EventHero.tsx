'use client';

export default function EventHero() {
  return (
    <div className="tos-hero-bg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#D4A843]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#6B7F4C]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4A843]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative container-custom py-20 md:py-28 text-center">
        {/* Flame icon */}
        <div className="mb-6">
          <span className="tos-flame-icon text-5xl md:text-6xl">🔥</span>
        </div>

        {/* Event name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 tos-fade-in">
          <span className="text-slate-900">TRAINING OF</span>
          <br />
          <span className="bg-gradient-to-r from-[#D4A843] via-[#F0D78C] to-[#D4A843] bg-clip-text text-transparent">
            THE SPIRIT
          </span>
          <br />
          <span className="text-slate-600 text-3xl md:text-5xl lg:text-6xl font-bold">
            2026
          </span>
        </h1>

        {/* Date & venue */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-8 tos-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-2 text-[#D4A843]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-bold text-lg">August 3 – 8, 2026</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-200" />
          <div className="flex items-center gap-2 text-slate-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-semibold">Venue — Coming Soon</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8 tos-fade-in" style={{ animationDelay: '0.3s' }}>
          An annual spiritual empowerment conference by Eternal Life Global Community Church.
          Register yourself or your church group below.
        </p>

        {/* Scroll indicator */}
        <div className="tos-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="inline-flex items-center gap-2 text-slate-400 text-sm">
            <span>Scroll to register</span>
            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
