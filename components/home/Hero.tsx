import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark z-0">
                {/* Decorative elements */}
                <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="container-custom relative z-10 text-center pt-20">
                <div className="max-w-4xl mx-auto">
                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <span className="block text-white">UNVEILING THE FATHER</span>
                        <span className="block gradient-text">IN THE FACE OF THE SON,</span>
                        <span className="block gradient-text">JESUS CHRIST</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                        Join us as we worship together, grow in faith, and transform lives through the power of God&apos;s word.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="#programmes" className="btn-primary">
                            FELLOWSHIP WITH US
                        </Link>
                        <Link href="/teachings" className="btn-secondary">
                            LISTEN TO TEACHINGS
                        </Link>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="mt-16 animate-bounce">
                        <svg
                            className="w-6 h-6 mx-auto text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
