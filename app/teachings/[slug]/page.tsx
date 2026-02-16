'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

// Sample sermon data - replace with actual data
const sermonData: Record<string, any> = {
    jesus: {
        title: 'JESUS - THE WAY, THE TRUTH, AND THE LIFE',
        category: 'CORE TEACHINGS',
        date: 'January 15, 2024',
        speaker: 'Pastor John Doe',
        description: 'An in-depth exploration of who Jesus is and what He means to us as believers. Discover the transformative power of knowing Christ personally.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
    },
    pray: {
        title: 'PRAY - THE POWER OF PRAYER',
        category: 'SPIRITUAL GROWTH',
        date: 'January 8, 2024',
        speaker: 'Pastor Jane Smith',
        description: 'Learn how to develop a powerful prayer life that transforms your relationship with God and impacts your world.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    grace: {
        title: 'GRACE - UNMERITED FAVOR',
        category: 'CORE TEACHINGS',
        date: 'December 25, 2023',
        speaker: 'Pastor John Doe',
        description: 'Understanding the amazing grace of God and how it changes everything about how we live and relate to Him.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
};

export default function SermonDetailPage() {
    const params = useParams();
    const sermon = sermonData[params.slug as string];

    if (!sermon) {
        return (
            <div className="min-h-screen bg-dark pt-20 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Sermon Not Found</h1>
                    <Link href="/teachings" className="btn-primary">
                        Back to Teachings
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-dark pt-20">
            {/* Back Button */}
            <div className="container-custom py-6">
                <Link
                    href="/teachings"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-primary transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Teachings
                </Link>
            </div>

            {/* Video Player */}
            <div className="container-custom pb-8">
                <div className="aspect-video bg-dark-lighter rounded-2xl overflow-hidden border border-white/10">
                    <iframe
                        className="w-full h-full"
                        src={sermon.videoUrl}
                        title={sermon.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>

            {/* Sermon Details */}
            <div className="container-custom pb-16">
                <div className="max-w-4xl">
                    {/* Category Badge */}
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
                        <span className="text-primary text-sm font-semibold">
                            {sermon.category}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {sermon.title}
                    </h1>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-6 text-white/60 mb-8 pb-8 border-b border-white/10">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span>{sermon.speaker}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>{sermon.date}</span>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="prose prose-invert max-w-none">
                        <h2 className="text-2xl font-bold text-white mb-4">About This Message</h2>
                        <p className="text-white/70 leading-relaxed text-lg">
                            {sermon.description}
                        </p>
                    </div>

                    {/* Share Buttons */}
                    <div className="mt-12 pt-8 border-t border-white/10">
                        <h3 className="text-white font-semibold mb-4">Share This Message</h3>
                        <div className="flex gap-4">
                            <button className="px-6 py-3 bg-dark-lighter border border-white/10 rounded-lg text-white/60 hover:text-white hover:border-primary/30 transition-colors">
                                Facebook
                            </button>
                            <button className="px-6 py-3 bg-dark-lighter border border-white/10 rounded-lg text-white/60 hover:text-white hover:border-primary/30 transition-colors">
                                Twitter
                            </button>
                            <button className="px-6 py-3 bg-dark-lighter border border-white/10 rounded-lg text-white/60 hover:text-white hover:border-primary/30 transition-colors">
                                WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
