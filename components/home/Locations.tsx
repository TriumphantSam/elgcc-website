import Link from 'next/link';

export default function Locations() {
    return (
        <section className="py-20 bg-dark">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                        {/* Map Icon */}
                        <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide uppercase">
                        VISIT ANY OF OUR CHURCHES
                    </h2>
                </div>

                {/* Locations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center max-w-6xl mx-auto mb-16">
                    {/* Lagos */}
                    <div className="p-6 rounded-xl bg-dark-lighter border border-white/5 hover:border-primary/30 transition-colors">
                        <div className="flex items-center justify-center gap-2 mb-4 text-primary">
                            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            <h3 className="text-xl font-bold uppercase tracking-wider text-white">LAGOS</h3>
                        </div>
                        <p className="text-white/70 text-sm max-w-sm mx-auto leading-relaxed">
                            5 Ladipo Banjo, off Mobil Junction, Oke-ira, Ogba, Lagos
                        </p>
                    </div>

                    {/* Ibadan */}
                    <div className="p-6 rounded-xl bg-dark-lighter border border-white/5 hover:border-primary/30 transition-colors">
                        <div className="flex items-center justify-center gap-2 mb-4 text-primary">
                            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            <h3 className="text-xl font-bold uppercase tracking-wider text-white">IBADAN</h3>
                        </div>
                        <p className="text-white/70 text-sm max-w-sm mx-auto leading-relaxed">
                            No 105, Top floor, Mouka Foam Building, Opp. Polaris Bank, Abayomi Bus Stop, Iwo Road
                        </p>
                    </div>

                    {/* Jos / Plateau */}
                    <div className="p-6 rounded-xl bg-dark-lighter border border-white/5 hover:border-primary/30 transition-colors">
                        <div className="flex items-center justify-center gap-2 mb-4 text-primary">
                            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            <h3 className="text-xl font-bold uppercase tracking-wider text-white">JOS</h3>
                        </div>
                        <p className="text-white/70 text-sm max-w-sm mx-auto leading-relaxed">
                            Summit international college, Tudun Wada, Jos, Plateau State.
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <Link
                        href="/locations"
                        className="btn-primary"
                    >
                        Click Here For More Locations
                    </Link>
                </div>
            </div>
        </section>
    );
}
