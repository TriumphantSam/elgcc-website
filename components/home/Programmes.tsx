import Link from 'next/link';

export default function Programmes() {
    const programmes = [
        {
            day: 'SUNDAY',
            time: '7:45AM',
            title: 'Sunday Service',
            description: 'Join us for worship, teaching, and fellowship',
            color: 'from-primary/20 to-primary/5',
        },
        {
            day: 'WEDNESDAY',
            time: '5:30PM - 8:00PM',
            title: 'Midweek Service',
            description: 'Bible study and prayer meeting',
            color: 'from-purple-500/20 to-purple-500/5',
        },
        {
            day: 'EVERY FIRST FRIDAY',
            time: '10:00PM',
            title: 'Night VIGIL',
            description: 'Powerful night of worship, intercession and the word',
            color: 'from-blue-500/20 to-blue-500/5',
        },
        {
            day: '2ND, 3RD & 4TH FRIDAY',
            time: '5:30PM - 8:00PM',
            title: 'Friday Service',
            description: 'Teaching, prayers and spiritual growth',
            color: 'from-emerald-500/20 to-emerald-500/5',
        }
    ];

    return (
        <section id="programmes" className="py-20 bg-dark-lighter">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-white">OUR </span>
                        <span className="gradient-text">PROGRAMMES</span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Join us for weekly services and special events designed to strengthen your faith and build community.
                    </p>
                </div>

                {/* Programme Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {programmes.map((programme, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-2xl bg-gradient-to-br ${programme.color} border border-white/10 hover:border-primary/30 transition-all duration-300 card-hover`}
                        >
                            {/* Day Badge */}
                            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4">
                                <span className="text-primary font-semibold text-sm tracking-wide">
                                    {programme.day}
                                </span>
                            </div>

                            {/* Time */}
                            <h3 className="text-3xl font-bold text-white mb-2">
                                {programme.time}
                            </h3>

                            {/* Title */}
                            <h4 className="text-xl font-semibold text-white mb-3">
                                {programme.title}
                            </h4>

                            {/* Description */}
                            <p className="text-white/60">
                                {programme.description}
                            </p>

                            {/* Decorative element */}
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-tl-full"></div>
                        </div>
                    ))}
                </div>


                {/* CTA to Special Programmes */}
                <div className="mt-12 text-center">
                    <Link
                        href="/programmes"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-dark font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        View Special Programmes (Crusades & Meetings)
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                    <p className="text-white/40 text-sm mt-4">
                        All services are held at our main location. Visit us or join online.
                    </p>
                </div>
            </div>
        </section>
    );
}
