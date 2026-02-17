'use client';

import { useState } from 'react';

// Enhanced sermon data structure
interface Sermon {
    title: string;
    audioUrl: string;
    series: string;
    year: number;
    date?: string;
    thumbnail?: string;
    speaker?: string;
}

const sermons: Sermon[] = [
    // Open Doors Series
    { title: "OPEN DOORS - Track 1", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/OPEN%20DOORS%20%20Track%201.mp3", series: "Open Doors", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "Open Doors - Track 2", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Open%20Doors%20-%20Track%202.mp3", series: "Open Doors", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "Open Doors - Track 3", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Open%20Doors-%20Track%203.mp3", series: "Open Doors", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "Open Doors - Track 4", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Open%20Doors%20-%20Track%204.mp3", series: "Open Doors", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "Open Doors - Track 5", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Open%20Doors-%20Track%205.mp3", series: "Open Doors", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "Open Doors - Track 6", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Open%20Doors-%20Track%206.mp3", series: "Open Doors", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "Open Doors - Track 7", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Open%20Doors%20Track%207.mp3", series: "Open Doors", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },

    // The Joy of the Lord Series
    { title: "The Joy of the Lord - Track 1", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%201.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "The Joy of the Lord - Track 2", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%202.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "The Joy of the Lord - Track 3", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%203.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "The Joy of the Lord - Track 4", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%204.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "The Joy of the Lord - Track 5", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%205.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "The Joy of the Lord - Track 6", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%206.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "The Joy of the Lord - Track 7", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%207.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "The Joy of the Lord - Track 8", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%208.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "The Joy of the Lord - Track 9", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%209.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "The Joy of the Lord - Track 10", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%2010.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "The Joy of the Lord - Track 11", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%2011.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "The Joy of the Lord - Track 12", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%2012.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "The Joy of the Lord - Track 13", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%2013.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "The Joy of the Lord - Track 14", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%2014.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "The Joy of the Lord - Track 15", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%2015.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "The Joy of the Lord - Track 16", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%2016.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "The Joy of the Lord - Track 17", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/The%20Joy%20of%20the%20Lord%20-%20Track%2017.mp3", series: "The Joy of the Lord", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },

    // Psalms Series
    { title: "Psalms by Pastor 1", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Psalms%20by%20Pastor%201.mp3", series: "Psalms", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "Psalms 4th Feb", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/psalms%204th%20feb.mp3", series: "Psalms", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "Psalms by Pastor Yewande (16th Jan 2026) - it is my year of the open doors", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Psalms%20by%20Pastor%20Yewande%20%2816th%20Jan%202026%29-%20it%20is%20my%20year%20of%20the%20open%20doors.mp3", series: "Psalms", year: 2026, speaker: "Pastor Yewande" },
    { title: "Psalms by Pastor (16th Jan 2026) - The Honor of the Lord", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Psalms%20by%20Pastor%2816th%20Jan%202026%29-%20The%20Honor%20of%20the%20Lord.mp3", series: "Psalms", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "Psalms by Pastor (16th Jan 2026) - The doors are opened", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Psalms%20by%20Pastor%2816th%20Jan%202026%29-%20The%20doors%20are%20opened.mp3", series: "Psalms", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },

    // Reviews
    { title: "Review of Joy of the Lord by Pastor Tayo Esho Aduragbemi", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Review%20of%20Joy%20of%20the%20Lord%20by%20Pastor%20Tayo%20Esho%20Aduragbemi.mp3", series: "Reviews", year: 2026, speaker: "Pastor Tayo Esho Aduragbemi" },
    { title: "Review of Joy of the Lord by Pastor Tayo Esho", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Review%20of%20Joy%20of%20the%20Lord%20by%20Pastor%20Tayo%20Esho.mp3", series: "Reviews", year: 2026, speaker: "Pastor Tayo Esho" },
    { title: "Review of Joy of the Lord by Pastor Yewande", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Review%20of%20Joy%20of%20the%20Lord%20by%20Pastor%20Yewande.mp3", series: "Reviews", year: 2026, speaker: "Pastor Yewande" },

    // Special Messages
    { title: "January 2026 Healing Meeting", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/January%202026%20Healing%20Meeting.mp3", series: "Special Messages", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },
    { title: "Joy of the Lord (Impartation and prophecy 11th February 2026)", audioUrl: "https://archive.org/download/elgcc-fasting-teachings-2026/C%3A/Users/Adeyemi%20Olayemi/Music/2026%20teachings/Joy%20of%20the%20Lord%20%28Impartation%20and%20prophecy%2011th%20February%202026%29.mp3", series: "Special Messages", year: 2026, speaker: "Pastor Stephen Tijesuni Oyagbile" },

];

// Helper to get consistent gradient for series
const getSeriesGradient = (series: string) => {
    switch (series) {
        case 'Open Doors':
            return 'from-[#6B7F4C] to-[#8B7355]'; // Olive to Brown
        case 'The Joy of the Lord':
            return 'from-[#8B7355] to-[#D4C5A8]'; // Brown to Gold (approx)
        case 'Psalms':
            return 'from-[#556339] to-[#6B7F4C]'; // Dark Olive to Olive
        case 'Reviews':
            return 'from-[#2A2A2A] to-[#6B7F4C]'; // Dark to Olive
        default:
            return 'from-[#6B7F4C] to-[#1A1A1A]'; // Olive to Dark
    }
};

export default function TeachingsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
    const [expandedSeries, setExpandedSeries] = useState<Set<string>>(new Set());

    // Get unique years
    const years = Array.from(new Set(sermons.map(s => s.year))).sort((a, b) => b - a);

    // Filter sermons
    const filteredSermons = sermons.filter(sermon => {
        const matchesSearch = sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            sermon.series.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesYear = selectedYear === 'all' || sermon.year === selectedYear;
        return matchesSearch && matchesYear;
    });

    // Group by series
    const seriesList = Array.from(new Set(filteredSermons.map(s => s.series)));
    const sermonsBySeries = seriesList.map(series => ({
        series,
        sermons: filteredSermons.filter(s => s.series === series),
        count: filteredSermons.filter(s => s.series === series).length
    }));

    const toggleSeries = (series: string) => {
        const newExpanded = new Set(expandedSeries);
        if (newExpanded.has(series)) {
            newExpanded.delete(series);
        } else {
            newExpanded.add(series);
        }
        setExpandedSeries(newExpanded);
    };

    return (
        <div className="min-h-screen bg-dark pt-20">
            {/* Header */}
            <div className="bg-dark-lighter py-16 border-b border-primary/10">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="text-white">TEACHINGS </span>
                        <span className="gradient-text">AND SONGS</span>
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Explore our collection of powerful messages from Pastor Stephen Tijesuni Oyagbile
                    </p>
                </div>
            </div>

            {/* Filter Section */}
            <div className="bg-dark-lighter/50 py-6 border-b border-primary/10">
                <div className="container-custom">
                    <div className="flex flex-col gap-4">
                        {/* Search */}
                        <div className="flex-1 max-w-md">
                            <input
                                type="text"
                                placeholder="Search teachings or series..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-2 bg-dark border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>

                        {/* Year Tabs */}
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setSelectedYear('all')}
                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${selectedYear === 'all'
                                    ? 'bg-primary text-dark'
                                    : 'bg-dark border border-white/10 text-white/60 hover:text-white hover:border-primary/30'
                                    }`}
                            >
                                All Years
                            </button>
                            {years.map(year => (
                                <button
                                    key={year}
                                    onClick={() => setSelectedYear(year)}
                                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${selectedYear === year
                                        ? 'bg-primary text-dark'
                                        : 'bg-dark border border-white/10 text-white/60 hover:text-white hover:border-primary/30'
                                        }`}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>

                        {/* Results Count */}
                        <div className="text-white/60 text-sm">
                            {filteredSermons.length} {filteredSermons.length === 1 ? 'message' : 'messages'} • {sermonsBySeries.length} {sermonsBySeries.length === 1 ? 'series' : 'series'}
                        </div>
                    </div>
                </div>
            </div>

            {/* Sermons by Series */}
            <div className="container-custom py-16">
                <div className="space-y-6">
                    {sermonsBySeries.map(({ series, sermons: seriesSermons, count }) => (
                        <div key={series} className="border border-white/10 rounded-xl overflow-hidden bg-dark-card">
                            {/* Series Header */}
                            <button
                                onClick={() => toggleSeries(series)}
                                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <h2 className="text-xl font-bold text-white">{series}</h2>
                                        <p className="text-white/60 text-sm">{count} {count === 1 ? 'message' : 'messages'}</p>
                                    </div>
                                </div>
                                <svg
                                    className={`w-6 h-6 text-white/60 transition-transform ${expandedSeries.has(series) ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Series Content */}
                            {expandedSeries.has(series) && (
                                <div className="border-t border-white/10 p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {seriesSermons.map((sermon, index) => (
                                            <div
                                                key={index}
                                                className="bg-dark rounded-lg overflow-hidden border border-white/10 hover:border-primary/30 transition-all group"
                                            >
                                                {/* Thumbnail or CSS Placeholder */}
                                                <div className="relative h-48 overflow-hidden">
                                                    {sermon.thumbnail ? (
                                                        // eslint-disable-next-line @next/next/no-img-element
                                                        <img
                                                            src={sermon.thumbnail}
                                                            alt={sermon.title}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                        />
                                                    ) : (
                                                        // CSS Gradient Placeholder
                                                        <div className={`w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br ${getSeriesGradient(sermon.series)}`}>
                                                            <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-300 w-full">
                                                                <span className="text-white/60 text-[10px] font-bold tracking-widest uppercase mb-2 block border border-white/20 rounded-full px-2 py-0.5 w-fit mx-auto bg-black/10 backdrop-blur-sm">
                                                                    {sermon.series}
                                                                </span>
                                                                <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight shadow-sm line-clamp-2 px-2">
                                                                    {sermon.title}
                                                                </h3>
                                                                <div className="w-8 h-0.5 bg-white/40 mx-auto rounded-full mb-2"></div>
                                                                <p className="text-white/90 text-[10px] font-medium tracking-wide">{sermon.speaker || "Stephen Tijesuni Oyagbile"}</p>
                                                            </div>

                                                            {/* Decorative Overlay */}
                                                            <div className="absolute inset-0 bg-black/10"></div>
                                                            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                                                        </div>
                                                    )}

                                                    {/* Play Icon Overlay */}
                                                    <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 backdrop-blur-[1px]">
                                                        <div className="w-14 h-14 rounded-full bg-primary text-dark flex items-center justify-center shadow-lg transform scale-50 group-hover:scale-100 transition-all duration-300 hover:bg-white hover:text-primary">
                                                            <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M8 5v14l11-7z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="p-4 bg-dark-lighter">
                                                    {/* Audio Player */}
                                                    <div className="mb-3">
                                                        <audio
                                                            controls
                                                            preload="none"
                                                            className="w-full h-8 rounded opacity-80 hover:opacity-100 transition-opacity"
                                                        >
                                                            <source src={sermon.audioUrl} type="audio/mpeg" />
                                                            Your browser does not support the audio element.
                                                        </audio>
                                                    </div>

                                                    {/* Download Button */}
                                                    <a
                                                        href={sermon.audioUrl}
                                                        download
                                                        className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-primary hover:text-dark text-white/60 hover:text-dark font-medium px-3 py-2 rounded-lg transition-all text-xs group/btn border border-white/5 hover:border-transparent"
                                                    >
                                                        <svg className="w-3 h-3 group-hover/btn:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                        </svg>
                                                        Download Message
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {filteredSermons.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-white/40 text-lg">
                            No messages found matching &quot;{searchQuery}&quot;
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
