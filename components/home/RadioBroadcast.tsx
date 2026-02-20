import React from 'react';

export default function RadioBroadcast() {
    return (
        <section className="py-24 bg-dark relative overflow-hidden">
            {/* Background Map Graphic (subtle radio waves motif) */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none flex items-center justify-center">
                <div className="w-[800px] h-[800px] rounded-full border border-primary absolute animate-[ping_10s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                <div className="w-[600px] h-[600px] rounded-full border border-primary absolute animate-[ping_8s_cubic-bezier(0,0,0.2,1)_infinite] delay-75"></div>
                <div className="w-[400px] h-[400px] rounded-full border border-primary absolute animate-[ping_6s_cubic-bezier(0,0,0.2,1)_infinite] delay-150"></div>
                <div className="w-[200px] h-[200px] rounded-full border border-primary absolute animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] delay-300"></div>
            </div>

            <div className="container-custom relative z-10 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Visual Side */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50"></div>
                        <div className="bg-dark-lighter border border-white/10 rounded-3xl p-8 md:p-12 relative shadow-2xl overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 transition-transform group-hover:scale-150 duration-700"></div>

                            <div className="flex items-center gap-4 mb-8">
                                <span className="flex h-3 w-3 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                                </span>
                                <span className="text-red-500 font-bold tracking-widest uppercase text-sm">On Air</span>
                            </div>

                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                Tune in to <br />
                                <span className="text-primary">Splash FM</span> (105.5)
                            </h3>

                            <div className="bg-dark/50 p-6 rounded-2xl border border-white/5 inline-block w-full backdrop-blur-sm mt-6">
                                <p className="text-white/60 uppercase tracking-widest text-xs font-bold mb-2">Schedule</p>
                                <p className="text-2xl font-bold text-white tracking-wide">Every Sunday</p>
                                <p className="text-primary-light font-medium text-lg mt-1">7:50 PM - 8:00 PM <span className="text-white/40 text-sm ml-1">(GMT+1)</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-8 border border-primary/20">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-white">Radio </span>
                            <span className="gradient-text">Broadcast</span>
                        </h2>

                        <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg">
                            Join our 10 minutes broadcast of the Gospel of Christ every week.
                            If you are outside Ibadan or Nigeria, you can listen securely online at the same time through our partner platforms.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="http://radio.garden/listen/splash-fm-105-5/-Nbn1nmT"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex border border-white/10 hover:border-primary/50 items-center justify-center gap-3 bg-dark-lighter px-8 py-4 rounded-xl text-white font-bold transition-all hover:-translate-y-1 shadow-lg hover:shadow-primary/20"
                            >
                                <svg className="w-6 h-6 text-[#A5BB71] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                                </svg>
                                Listen on Radio Garden
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
