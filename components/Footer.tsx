import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark-lighter border-t border-primary/10">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About */}
                    <div>
                        <div className="bg-primary-light rounded-lg inline-block mb-4 overflow-hidden">
                            <img
                                src="/images/elgcc-logo1.png"
                                alt="ELGCC"
                                className="h-24 w-auto"
                            />
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed font-medium">
                            A local church where the Word is taught and the things of the Spirit given free course
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-white/60 hover:text-primary text-sm transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="text-white/60 hover:text-primary text-sm transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/teachings" className="text-white/60 hover:text-primary text-sm transition-colors">
                                    Teachings
                                </Link>
                            </li>
                            <li>
                                <Link href="/programmes" className="text-white/60 hover:text-primary text-sm transition-colors">
                                    Programmes
                                </Link>
                            </li>
                            <li>
                                <Link href="/partnership" className="text-white/60 hover:text-primary text-sm transition-colors">
                                    Partnership
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-white/60 hover:text-primary text-sm transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-white/60 text-sm">
                            <li>Email: Eternal_life_gcc@yahoo.com</li>
                            <li>Phone: 08180080017, 07066696914</li>
                            <li>Address: No 105, Topmost Floor, Mouka Foam Building beside Sterling Bank, Abayomi, Iwo Road, Ibadan, Oyo State, Nigeria</li>
                        </ul>
                    </div>

                    {/* Partnership Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Partner With Us</h4>
                        <div className="space-y-2 text-white/60 text-sm bg-dark/50 p-4 rounded-lg border border-white/5">
                            <p className="font-medium text-white/80">ETERNAL LIFE GLOBAL COMMUNITY CHURCH</p>
                            <p className="font-bold text-primary-light text-xl tracking-wider my-1">2047592656</p>
                            <p className="text-white/60 uppercase text-xs">FIRST BANK</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary/10 mt-8 pt-8 text-center">
                    <p className="text-white/40 text-sm">
                        © {currentYear} ELGCC - Eternal Life Global Community Church. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
