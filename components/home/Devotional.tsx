import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Devotional() {
    return (
        <section className="py-24 bg-dark-lighter relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

            <div className="container-custom relative z-10 max-w-6xl mx-auto">
                <div className="bg-dark border border-white/5 shadow-2xl rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden">
                    {/* Inner subtle gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                        {/* Content Side */}
                        <div className="order-2 lg:order-1">
                            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary-light font-bold text-sm tracking-widest uppercase rounded-full mb-6 border border-primary/20 shadow-inner">
                                New Release
                            </span>

                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white tracking-tight">
                                Awaken the <span className="text-primary italic">Dawn</span><br />
                                <span className="text-3xl md:text-4xl text-white/50 font-normal mt-2 block">Devotional</span>
                            </h2>

                            <p className="text-white/70 text-lg leading-relaxed mb-8">
                                <span className="font-semibold text-white/90">...seeking the Lord early, daily and always.</span><br /><br />
                                Grab your copy of our multi-year devotional by Stephen Tijesuni Oyagbile.
                                Designed to guide your daily spiritual growth and deepen your walk with God.
                            </p>

                            <div className="bg-dark-lighter p-6 rounded-2xl border border-white/5 mb-8 text-white/80">
                                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                                    <span className="uppercase tracking-widest text-xs font-bold text-primary-light">Price</span>
                                    <span className="text-2xl font-bold text-white">₦8,000</span>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm"><span className="font-medium text-white">Available on:</span> Selar, Amazon, Kobo</p>
                                    <p className="text-sm"><span className="font-medium text-white">Enquiries:</span> 08060042098, 07066696914</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/locations"
                                    className="inline-flex items-center justify-center gap-2 bg-primary text-dark font-bold px-8 py-4 rounded-xl hover:bg-primary-light transition-all tracking-widest uppercase text-sm shadow-[0_0_20px_rgba(165,187,113,0.3)] hover:shadow-[0_0_30px_rgba(165,187,113,0.5)]"
                                >
                                    Find a Pickup Location
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </Link>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 bg-dark-lighter text-white border border-white/10 font-bold px-8 py-4 rounded-xl hover:bg-white/5 hover:border-white/20 transition-all tracking-widest uppercase text-sm"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>

                        {/* Image/Visual Side */}
                        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                            {/* Decorative glow behind book */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#fbc2eb]/10 to-[#a6c1ee]/10 blur-3xl rounded-full z-0"></div>

                            <div className="relative z-10 w-full max-w-[400px] aspect-[4/5] bg-dark-lighter border border-white/10 rounded-2xl shadow-2xl flex flex-col items-center justify-center overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/80 z-10 pointer-events-none"></div>

                                <div className="text-center px-8 relative z-20">
                                    <h3 className="text-3xl font-bold text-white mb-2 font-serif group-hover:scale-105 transition-transform duration-500">Awaken the Dawn</h3>
                                    <p className="text-primary-light/80 italic text-sm mb-6">Stephen Tijesuni Oyagbile</p>
                                    <span className="inline-block px-4 py-2 bg-red-600 text-white font-bold rounded-full transform rotate-3 shadow-xl">
                                        ₦8,000
                                    </span>
                                </div>

                                {/* Abstract book motif background */}
                                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtbDItMiAydjRIMzZ6bS0yaDR2NEgzNHYtNHptLTIwaC00djRoNHYtNHptNC00aC00djRoNHYtNHptMC0xMGgtNHY0aDR2LTR6bS00IDRoNHY0aC00di00em0tNCAyaTR2NGgtNHYtNHptNCAyaTR2NGgtNHYtNHptNC00aDR2NGgtNHYtNHptMTIgMTZoNHY0aC00di00em00IDJoNHY0aC00di00em0tMjAgOGg0djRoLTR2LTR6bS00IDJoNHY0aC00di00em0tNCAyaTR2NGgtNHYtNHptOC00aDR2NGgtNHYtNHptNCAyaDR2NGgtNHYtNHptMTIgMTZoNHY0aC00di00em00IDJoNHY0aC00di00em0tMjAgOGg0djRoLTR2LTR6bS00IDJoNHY0aC00di00eiIgZmlsbD0iI2ZmZmZmZiIvPjwvZz48L3N2Zz4=')]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
