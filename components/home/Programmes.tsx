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
            title: 'Night of Glory',
            description: 'Powerful night of worship and intercession',
            color: 'from-blue-500/20 to-blue-500/5',
        },
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

                {/* Additional Info */}
                <div className="mt-12 text-center">
                    <p className="text-white/40 text-sm">
                        All services are held at our main location. Visit us or join online.
                    </p>
                </div>
            </div>
        </section>
    );
}
