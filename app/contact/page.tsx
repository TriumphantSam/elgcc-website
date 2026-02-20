'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission - replace with actual API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });

            setTimeout(() => setSubmitStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-dark pt-20">
            <section className="py-20 bg-dark-lighter min-h-[calc(100vh-80px)] flex items-center">
                <div className="container-custom w-full max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">
                                    <span className="text-white">Contact </span>
                                    <span className="text-primary italic">Us</span>
                                </h1>

                                <p className="text-white/70 text-lg leading-relaxed max-w-lg">
                                    We&apos;d love to hear from you! Whether you have questions, need prayer,
                                    or want to learn more about ELGCC, feel free to reach out.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {/* Address */}
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                                        <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold tracking-wide uppercase text-sm mb-2">Address</h3>
                                        <p className="text-white/70 leading-relaxed max-w-xs">No 105, Topmost Floor, Mouka Foam Building beside Sterling Bank, Abayomi, Iwo Road, Ibadan, Oyo State, Nigeria</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                                        <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold tracking-wide uppercase text-sm mb-2">Email</h3>
                                        <p className="text-white/70 font-medium">Eternal_life_gcc@yahoo.com</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-5">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                                        <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold tracking-wide uppercase text-sm mb-2">Phone</h3>
                                        <div className="text-white/70 flex flex-col gap-1 font-medium">
                                            <span>08180080017</span>
                                            <span>07066696914</span>
                                            <span>09013591955</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-dark p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group hover:border-primary/20 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Send us a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div>
                                    <label htmlFor="name" className="block text-white/80 mb-2 text-sm font-bold tracking-wide uppercase">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 bg-dark-lighter border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-white/80 mb-2 text-sm font-bold tracking-wide uppercase">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 bg-dark-lighter border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-white/80 mb-2 text-sm font-bold tracking-wide uppercase">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 bg-dark-lighter border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="0800 000 0000"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-white/80 mb-2 text-sm font-bold tracking-wide uppercase">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-5 py-4 bg-dark-lighter border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-lg font-bold tracking-widest uppercase py-4 rounded-xl shadow-[0_0_20px_rgba(165,187,113,0.3)]"
                                >
                                    {isSubmitting ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}
                                </button>

                                {submitStatus === 'success' && (
                                    <div className="bg-primary/20 border border-primary/50 text-white rounded-xl p-4 text-center">
                                        <p className="font-bold flex items-center justify-center gap-2">
                                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            Message Sent!
                                        </p>
                                        <p className="text-white/80 text-sm mt-1">We will get back to you shortly.</p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
