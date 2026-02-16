export default function About() {
    return (
        <section id="about" className="py-20 bg-dark">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="relative h-[500px] rounded-2xl overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
                        <div className="absolute inset-0 bg-dark-lighter flex items-center justify-center p-2">
                            <img
                                src="/images/elgcc-logo-nobg.png"
                                alt="ELGCC - Eternal Life Global Community Church"
                                className="w-[90%] h-[90%] object-contain"
                            />
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
                    </div>
                </div>
            </div>
        </section>
    );
}
