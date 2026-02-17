'use client';

import { useState } from 'react';

interface Event {
    name: string;
    dates: string;
    location?: string;
    recurring?: boolean;
}

const crusades: Event[] = [
    { name: "Mapo/Beere Crusade", dates: "Jan 22 - 24", location: "Mapo/Beere" },
    { name: "Ogba (Lagos) Crusade", dates: "Mar 20 - 21", location: "Ogba, Lagos" },
    { name: "Tanzania Crusade", dates: "Mar 27 - 29", location: "Tanzania" },
    { name: "UCH Ibadan Crusade", dates: "April 10 - 11", location: "UCH Ibadan" },
    { name: "Ikirun / Osun Crusade", dates: "Jul 24 - 25", location: "Ikirun/Osun" },
    { name: "Ede / Osun Crusade", dates: "Sept 18 - 19", location: "Ede/Osun" },
    { name: "Iwo Road Crusade", dates: "Oct 8 - 10", location: "Iwo Road" },
    { name: "Kenya Crusade", dates: "Dec 2 - 7", location: "Kenya" },
    { name: "Owerri Crusade", dates: "Dec 29 - 31", location: "Owerri" },
];

const meetings: Event[] = [
    { name: "Life In Christ Conference", dates: "Feb 26 - Mar 1" },
    { name: "Church Retreat", dates: "June" },
    { name: "Healing Meetings", dates: "Every 3rd Friday", recurring: true },
    { name: "Training of the Spirit", dates: "August 3 - 8" },
    { name: "Cornerstone", dates: "Nov 21", location: "Annual Secondary School Fellowship" },
];

export default function ProgrammesPage() {
    const [activeTab, setActiveTab] = useState<'crusades' | 'meetings'>('crusades');

    const currentEvents = activeTab === 'crusades' ? crusades : meetings;

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#2A3A1F] via-[#1A2A0F] to-[#0A1A05] pt-20">
            {/* Hero Section */}
            <div className="py-16 border-b border-primary/10">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="text-white">OUR </span>
                        <span className="gradient-text">{activeTab === 'crusades' ? 'CRUSADES' : 'SPECIAL MEETINGS'}</span>
                    </h1>
                    <p className="text-[#D4C5A8] text-2xl md:text-3xl font-bold italic">
                        for 2026
                    </p>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-black/20 py-6 border-b border-primary/10">
                <div className="container-custom">
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => setActiveTab('crusades')}
                            className={`px-8 py-3 rounded-lg text-lg font-bold transition-all ${activeTab === 'crusades'
                                    ? 'bg-gradient-to-r from-[#D4C5A8] to-[#8B7355] text-[#1A2A0F] shadow-lg scale-105'
                                    : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
                                }`}
                        >
                            Crusades
                        </button>
                        <button
                            onClick={() => setActiveTab('meetings')}
                            className={`px-8 py-3 rounded-lg text-lg font-bold transition-all ${activeTab === 'meetings'
                                    ? 'bg-gradient-to-r from-[#D4C5A8] to-[#8B7355] text-[#1A2A0F] shadow-lg scale-105'
                                    : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
                                }`}
                        >
                            Special Meetings
                        </button>
                    </div>
                </div>
            </div>

            {/* Events Grid */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentEvents.map((event, index) => (
                        <div
                            key={index}
                            className="relative bg-gradient-to-br from-[#D4C5A8] to-[#8B7355] rounded-2xl p-6 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                        >
                            {/* Calendar Icon */}
                            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                                <svg className="w-12 h-12 text-[#1A2A0F]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" />
                                </svg>
                            </div>

                            {/* Event Name */}
                            <h3 className="text-2xl font-bold text-[#1A2A0F] mb-3 pr-12 leading-tight">
                                {event.name}
                            </h3>

                            {/* Divider */}
                            <div className="w-12 h-1 bg-[#1A2A0F]/30 rounded-full mb-3"></div>

                            {/* Dates */}
                            <div className="flex items-center gap-2 mb-2">
                                <svg className="w-5 h-5 text-[#1A2A0F]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p className="text-[#1A2A0F] font-bold italic text-lg">
                                    {event.dates}
                                </p>
                            </div>

                            {/* Location/Description */}
                            {event.location && (
                                <p className="text-[#1A2A0F]/70 text-sm font-medium">
                                    {event.location}
                                </p>
                            )}

                            {/* Recurring Badge */}
                            {event.recurring && (
                                <div className="mt-3 inline-block px-3 py-1 bg-[#1A2A0F]/20 rounded-full">
                                    <span className="text-[#1A2A0F] text-xs font-bold">RECURRING</span>
                                </div>
                            )}

                            {/* Decorative Element */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Note */}
            <div className="container-custom pb-16">
                <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-white/60 text-sm">
                        <span className="text-primary font-semibold">CONNECT WITH US</span> •
                        For more information about our programmes, contact us or visit our social media pages.
                    </p>
                </div>
            </div>
        </div>
    );
}
