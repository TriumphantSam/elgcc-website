import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark-lighter border-t border-primary/10">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">
                            <span className="text-white">ELG</span>
                            <span className="text-primary">CC</span>
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Eternal Life Global Community Church - A place of prayer, power, and purpose. Join us as we grow together in faith and community.
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
                                <Link href="#programmes" className="text-white/60 hover:text-primary text-sm transition-colors">
                                    Programmes
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-white/60 text-sm">
                            <li>Email: info@elgcc.church</li>
                            <li>Phone: +234 XXX XXX XXXX</li>
                            <li>Address: No 105, Topmost Floor, Mouka Foam Building beside Sterling Bank, Abayomi, Iwo Road, Ibadan, Oyo State, Nigeria</li>
                        </ul>
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
