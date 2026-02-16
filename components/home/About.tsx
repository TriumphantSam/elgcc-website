export default function About() {
    return (
        <section id="about" className="py-20 bg-dark">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="relative h-[500px] rounded-2xl overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
                        <div className="absolute inset-0 bg-dark-lighter flex items-center justify-center">
                            {/* Placeholder - replace with actual church image */}
                            <div className="text-center">
                                <svg
                                    className="w-24 h-24 mx-auto text-primary/30 mb-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                                <p className="text-white/40 text-sm">Church Image Placeholder</p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-white">ABOUT </span>
                            <span className="gradient-text">ELGCC</span>
                        </h2>

                        <div className="space-y-4 text-white/70 leading-relaxed">
                            <p>
                                Welcome to ELGCC - Eternal Life Global Community Church, a vibrant community of believers committed to experiencing God&apos;s presence,
                                growing in His word, and impacting our world with the gospel of Jesus Christ.
                            </p>

                            <p>
                                We are a place where prayer is our foundation, the power of God is demonstrated,
                                and every person discovers their divine purpose. Our mission is to create an environment
                                where lives are transformed, families are strengthened, and destinies are fulfilled.
                            </p>

                            <p>
                                Whether you&apos;re seeking spiritual growth, community, or answers to life&apos;s questions,
                                ELGCC is a place where you belong. Join us as we journey together in faith, hope, and love.
                            </p>
                        </div>

                        {/* Stats or Features */}
                        <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/10">
                            <div>
                                <h3 className="text-3xl font-bold text-primary mb-1">10+</h3>
                                <p className="text-white/60 text-sm">Years of Ministry</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-primary mb-1">500+</h3>
                                <p className="text-white/60 text-sm">Members</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-primary mb-1">50+</h3>
                                <p className="text-white/60 text-sm">Ministries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
