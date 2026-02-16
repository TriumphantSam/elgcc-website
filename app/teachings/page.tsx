import Link from 'next/link';

// Sample sermon data - replace with actual data from CMS or API
const sermons = [
    {
        id: 'jesus',
        title: 'JESUS',
        subtitle: 'THE WAY, THE TRUTH, AND THE LIFE',
        category: 'CORE TEACHINGS',
        thumbnail: '/images/jesus-sermon.jpg',
    },
    {
        id: 'pray',
        title: 'PRAY',
        subtitle: 'THE POWER OF PRAYER',
        category: 'SPIRITUAL GROWTH',
        thumbnail: '/images/pray-sermon.jpg',
    },
    {
        id: 'grace',
        title: 'GRACE',
        subtitle: 'UNMERITED FAVOR',
        category: 'CORE TEACHINGS',
        thumbnail: '/images/grace-sermon.jpg',
    },
    {
        id: 'prayer',
        title: 'PRAYER',
        subtitle: 'COMMUNION WITH GOD',
        category: 'SPIRITUAL GROWTH',
        thumbnail: '/images/prayer-sermon.jpg',
    },
    {
        id: 'truth',
        title: 'Truth',
        subtitle: 'THE PARABLE OF THE SOWER',
        category: 'PARABLES',
        thumbnail: '/images/truth-sermon.jpg',
    },
    {
        id: 'faith',
        title: 'FAITH',
        subtitle: 'BELIEVING WITHOUT SEEING',
        category: 'CORE TEACHINGS',
        thumbnail: '/images/faith-sermon.jpg',
    },
];

export default function TeachingsPage() {
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
                        Explore our collection of powerful messages and worship songs that will inspire and strengthen your faith.
                    </p>
                </div>
            </div>

            {/* Filter Section */}
            <div className="bg-dark-lighter/50 py-6 border-b border-primary/10">
                <div className="container-custom">
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                        {/* Search */}
                        <div className="flex-1 max-w-md">
                            <input
                                type="text"
                                placeholder="Search teachings..."
                                className="w-full px-4 py-2 bg-dark border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-primary text-dark font-semibold rounded-lg text-sm">
                                ALL
                            </button>
                            <button className="px-4 py-2 bg-dark border border-white/10 text-white/60 hover:text-white hover:border-primary/30 rounded-lg text-sm transition-colors">
                                TEACHINGS
                            </button>
                            <button className="px-4 py-2 bg-dark border border-white/10 text-white/60 hover:text-white hover:border-primary/30 rounded-lg text-sm transition-colors">
                                SONGS
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sermons Grid */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sermons.map((sermon) => (
                        <Link
                            key={sermon.id}
                            href={`/teachings/${sermon.id}`}
                            className="group block"
                        >
                            <div className="bg-dark-card rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300 card-hover">
                                {/* Thumbnail */}
                                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-dark-lighter flex items-center justify-center">
                                    <h3 className="text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                                        {sermon.title}
                                    </h3>

                                    {/* Play Icon Overlay */}
                                    <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                                            <svg className="w-8 h-8 text-dark ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-3">
                                        <span className="text-primary text-xs font-semibold">
                                            {sermon.category}
                                        </span>
                                    </div>

                                    <h4 className="text-white font-semibold mb-2">
                                        {sermon.subtitle}
                                    </h4>

                                    <div className="flex items-center justify-between text-sm text-white/40 mt-4">
                                        <span>Watch Now</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
