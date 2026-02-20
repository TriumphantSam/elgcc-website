import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Partner With Us | ELGCC',
    description: 'Partner with Eternal Life Global Community Church to spread the gospel of Jesus Christ.',
};

export default function PartnershipPage() {
    return (
        <div className="min-h-screen bg-dark pt-20 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

            {/* Header Hero Section */}
            <div className="relative z-10 py-20 lg:py-32 border-b border-primary/10">
                <div className="container-custom text-center max-w-4xl mx-auto">
                    <span className="inline-block px-4 py-1 bg-primary/20 text-primary-light font-bold text-sm tracking-widest uppercase rounded-full mb-6 border border-primary/20">
                        Give & Support
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter text-white">
                        Partner <span className="text-primary italic">With Us</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-3xl mx-auto">
                        Your continual support helps us to teach the Word and give the things of the Spirit free course across the globe.
                    </p>
                </div>
            </div>

            {/* Main Content - Account Details */}
            <div className="relative z-10 container-custom py-24 max-w-4xl mx-auto">
                <div className="bg-dark-lighter border border-white/5 shadow-2xl rounded-3xl p-8 md:p-16 relative overflow-hidden text-center group transition-all duration-500 hover:border-primary/30">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="w-20 h-20 mx-auto bg-primary/10 flex items-center justify-center rounded-2xl mb-8 border border-primary/20 shadow-[0_0_30px_rgba(165,187,113,0.15)]">
                        <svg className="w-10 h-10 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>

                    <h2 className="text-2xl font-bold uppercase tracking-widest text-white mb-2">Partnership Account</h2>
                    <p className="text-white/60 mb-12 uppercase tracking-wide text-sm font-medium">Direct Bank Transfer</p>

                    <div className="space-y-8 max-w-lg mx-auto bg-dark/50 p-8 rounded-2xl border border-white/5 shadow-inner">
                        <div>
                            <p className="text-primary-light text-sm font-bold uppercase tracking-wider mb-2">Bank Name</p>
                            <p className="text-2xl md:text-3xl font-bold text-white tracking-wide">First Bank</p>
                        </div>

                        <div className="h-px w-full bg-white/5"></div>

                        <div>
                            <p className="text-primary-light text-sm font-bold uppercase tracking-wider mb-2">Account Name</p>
                            <p className="text-lg md:text-xl font-medium text-white tracking-wide leading-relaxed">
                                ETERNAL LIFE GLOBAL<br />COMMUNITY CHURCH
                            </p>
                        </div>

                        <div className="h-px w-full bg-white/5"></div>

                        <div>
                            <p className="text-primary-light text-sm font-bold uppercase tracking-wider mb-2">Account Number</p>
                            <div className="flex items-center justify-center gap-4">
                                <p className="text-4xl md:text-5xl font-mono font-bold text-white tracking-widest">
                                    2047592656
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Information / Contact */}
                <div className="mt-20 text-center bg-primary/5 border border-primary/20 rounded-2xl p-10 backdrop-blur-sm relative overflow-hidden">
                    {/* Soft glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-3xl rounded-full opacity-50 pointer-events-none"></div>

                    <h3 className="text-xl font-bold text-white mb-4 relative z-10">Have questions regarding your giving?</h3>
                    <p className="text-white/70 mb-8 max-w-xl mx-auto relative z-10">
                        If you need further assistance or wish to notify us about your partnership, please feel free to reach out to our administration team.
                    </p>
                    <a
                        href="mailto:Eternal_life_gcc@yahoo.com"
                        className="inline-flex items-center gap-2 bg-dark/80 text-white border border-white/10 font-bold px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all relative z-10 uppercase tracking-widest text-sm shadow-xl"
                    >
                        Contact Administration
                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Footer Decorative element */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mt-12"></div>
        </div>
    );
}
