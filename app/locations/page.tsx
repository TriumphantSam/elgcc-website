import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the map to prevent SSR issues with Leaflet
const LocationMap = dynamic(() => import('@/components/locations/LocationMap'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[500px] bg-dark-lighter animate-pulse rounded-xl border border-white/5 flex items-center justify-center text-white/50">
            Loading Map...
        </div>
    )
});

const locations = [
    {
        city: 'LAGOS',
        address: '5 Ladipo Banjo, off Mobil Junction, Oke-ira, Ogba, Lagos',
        phones: '08033885832',
        leader: 'Brother Tayo - 08033885832',
        meetingTimes: 'Tuesday and Thursday: 6pm\nSundays: 7:45am'
    },
    {
        city: 'ILE-IFE',
        address: 'Comfort Tutorial academy, OAU New Market, OAU Campus, Ile Ife',
        phones: '08177150609; 08180598030',
        leader: 'Brother Emmanuel - 08177150609\nBrother Samuel - 08180598030',
        meetingTimes: 'Tuesday and Thursday: 5pm\nSundays: 7:45am'
    },
    {
        city: 'JOS (PLATEAU)',
        subtitle: 'NEW CREATION FAMILY CHURCH',
        address: 'Summit international college, Tudun Wada, Jos, Plateau State.',
        phones: '08035777652, 09121284061, 08163008217',
        leader: 'Brother Enoch on 08035777652, 09121284061, 08163008217',
        meetingTimes: 'Sundays: 9am and 5pm\nThursdays: 4pm'
    },
    {
        city: 'EDE',
        address: 'The Pavilion, Sports Complex, Polytechnic Ede',
        phones: '08101736181',
        leader: 'Sister Abolade on 08101736181',
        meetingTimes: 'Thursday 5pm\nSunday 7:45am'
    }
];

export default function LocationsPage() {
    return (
        <div className="min-h-screen bg-dark pt-20 relative">
            {/* Subtle Map Background */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%\' height=\'100%\' viewBox=\'0 0 1000 500\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath fill=\'%23ffffff\' d=\'M105.3,103.5c-1.3-1.6-3.1-2.4-5.2-2.4c-2.1,0-3.9,0.8-5.2,2.4c-1.3,1.6-1.8,3.5-1.5,5.8l6.7,50.7 c0.3,2.3,1.6,4,3.7,5c2.1,1,4.4,0.7,6.3-0.8l40.4-32.9c1.9-1.5,2.7-3.6,2.3-5.9l-6.7-50.7c-0.3-2.3-1.6-4-3.7-5 c-2.1-1-4.4-0.7-6.3,0.8L105.3,103.5z\'/%3E%3Cpath fill=\'%23ffffff\' d=\'M318.9,152.1c1.9-1.5,2.7-3.6,2.3-5.9l-6.7-50.7c-0.3-2.3-1.6-4-3.7-5c-2.1-1-4.4-0.7-6.3,0.8l-40.4,32.9 c-1.9,1.5-2.7,3.6-2.3,5.9l6.7,50.7c0.3,2.3,1.6,4,3.7,5c2.1,1,4.4,0.7,6.3-0.8L318.9,152.1z\'/%3E%3Cpath fill=\'%23ffffff\' d=\'M238.2,209.7c-2.1,0-3.9,0.8-5.2,2.4l-31.5,40.4c-1.3,1.6-1.8,3.5-1.5,5.8l6.7,50.7c0.3,2.3,1.6,4,3.7,5 c2.1,1,4.4,0.7,6.3-0.8l40.4-32.9c1.9-1.5,2.7-3.6,2.3-5.9l-6.7-50.7c-0.3-2.3-1.6-4-3.7-5C246.9,217.7,242.7,209.7,238.2,209.7z\'/%3E%3Cpath fill=\'%23ffffff\' d=\'M403.5,302.2c0.3,2.3,1.6,4,3.7,5c2.1,1,4.4,0.7,6.3-0.8l40.4-32.9c1.9-1.5,2.7-3.6,2.3-5.9l-6.7-50.7 c-0.3-2.3-1.6-4-3.7-5c-2.1-1-4.4-0.7-6.3,0.8l-40.4,32.9c-1.9,1.5-2.7,3.6-2.3,5.9L403.5,302.2z\'/%3E%3Cpath fill=\'%23ffffff\' d=\'M812.1,103.5c-1.3-1.6-3.1-2.4-5.2-2.4c-2.1,0-3.9,0.8-5.2,2.4c-1.3,1.6-1.8,3.5-1.5,5.8l6.7,50.7 c0.3,2.3,1.6,4,3.7,5c2.1,1,4.4,0.7,6.3-0.8l40.4-32.9c1.9-1.5,2.7-3.6,2.3-5.9l-6.7-50.7c-0.3-2.3-1.6-4-3.7-5 c-2.1-1-4.4-0.7-6.3,0.8L812.1,103.5z\'/%3E%3Cpath fill=\'%23ffffff\' d=\'M922.9,152.1c1.9-1.5,2.7-3.6,2.3-5.9l-6.7-50.7c-0.3-2.3-1.6-4-3.7-5c-2.1-1-4.4-0.7-6.3,0.8l-40.4,32.9 c-1.9,1.5-2.7,3.6-2.3,5.9l6.7,50.7c0.3,2.3,1.6,4,3.7,5c2.1,1,4.4,0.7,6.3-0.8L922.9,152.1z\'/%3E%3Cpath fill=\'%23ffffff\' d=\'M609.1,209.7c-2.1,0-3.9,0.8-5.2,2.4l-31.5,40.4c-1.3,1.6-1.8,3.5-1.5,5.8l6.7,50.7c0.3,2.3,1.6,4,3.7,5 c2.1,1,4.4,0.7,6.3-0.8l40.4-32.9c1.9-1.5,2.7-3.6,2.3-5.9l-6.7-50.7c-0.3-2.3-1.6-4-3.7-5C617.8,217.7,613.6,209.7,609.1,209.7z\'/%3E%3Cpath fill=\'%23ffffff\' d=\'M751.4,302.2c0.3,2.3,1.6,4,3.7,5c2.1,1,4.4,0.7,6.3-0.8l40.4-32.9c1.9-1.5,2.7-3.6,2.3-5.9l-6.7-50.7 c-0.3-2.3-1.6-4-3.7-5c-2.1-1-4.4-0.7-6.3,0.8l-40.4,32.9c-1.9,1.5-2.7,3.6-2.3,5.9L751.4,302.2z\'/%3E%3C/svg%3E")',
                    backgroundSize: '120px 120px',
                    backgroundRepeat: 'repeat',
                }}
            />

            {/* Header / Hero Section */}
            <div className="bg-dark-lighter py-16 border-b border-primary/10 relative z-10">
                <div className="container-custom text-center max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-tighter">
                        <span className="text-white">Join </span>
                        <span className="text-primary">Us</span>
                    </h1>
                    <h2 className="text-3xl md:text-4xl text-white/70 font-light tracking-wide mb-12">
                        in our Meetings*
                    </h2>

                    {/* Highly Highlighted Ibadan Headquarters */}
                    <div className="bg-primary/10 border border-primary/30 p-8 md:p-12 rounded-2xl shadow-2xl backdrop-blur-sm mx-auto max-w-4xl relative overflow-hidden">
                        {/* Decorative glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/20 blur-3xl opacity-50 pointer-events-none"></div>

                        <div className="relative z-10 text-center mb-8">
                            <span className="inline-block px-4 py-1 bg-primary text-dark font-bold text-sm tracking-widest uppercase rounded-full mb-4">
                                Headquarters
                            </span>
                            <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider mb-2">IBADAN CHURCH</h3>
                            <p className="text-white/80 text-lg max-w-2xl mx-auto">
                                No 105, Top floor, Mouka Foam Building, Opp. Polaris Bank, Abayomi Bus Stop, Iwo Road
                            </p>
                            <div className="mt-4 flex items-center justify-center gap-4 text-primary-light font-medium text-lg">
                                <span>08180080017</span>
                                <span>•</span>
                                <span>07066696914</span>
                                <span>•</span>
                                <span>09013591955</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left bg-dark/80 p-8 rounded-xl border border-white/5">
                            <div className="space-y-4">
                                <div>
                                    <p className="text-primary text-sm font-bold tracking-wider uppercase mb-1">Midweek Service</p>
                                    <p className="text-white font-medium text-lg">Wednesdays: <span className="text-white/80">5:30pm - 8:00pm</span></p>
                                </div>
                                <div>
                                    <p className="text-primary text-sm font-bold tracking-wider uppercase mb-1">Sunday Service</p>
                                    <p className="text-white font-medium text-lg">Sundays: <span className="text-white/80">7:45am</span></p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-primary text-sm font-bold tracking-wider uppercase mb-1">Vigils (Fridays)</p>
                                    <p className="text-white font-medium text-lg">Every 1<sup className="text-xs">st</sup> Friday: <span className="text-white/80">10:00pm</span></p>
                                    <p className="text-white font-medium mt-2">Every 2<sup className="text-xs">nd</sup>, 3<sup className="text-xs">rd</sup> & 4<sup className="text-xs">th</sup> Friday: <span className="text-white/80">5:30pm - 8:00pm</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="container-custom py-16 relative z-10 w-full max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white tracking-wide">FIND A CHURCH NEAR YOU</h3>
                    <p className="text-white/60 mt-2">Explore our locations across Nigeria</p>
                </div>
                <LocationMap />
            </div>

            {/* Locations Grid */}
            <div className="container-custom pb-20 max-w-5xl relative z-10">
                <h3 className="text-2xl font-bold text-white tracking-wide text-center mb-10">OTHER LOCATIONS</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                    {locations.map((loc, index) => (
                        <div
                            key={index}
                            className="bg-dark-lighter p-8 rounded-lg relative text-white border border-white/5 hover:border-primary/30 transition-colors shadow-lg"
                        >
                            {/* Location Pin */}
                            <div className="absolute -top-4 -left-4">
                                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary-light">
                                    <svg
                                        className="w-8 h-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        <circle cx="12" cy="9.5" r="1.5" fill="currentColor" opacity="0.8" />
                                    </svg>
                                </span>
                            </div>

                            <div className="pl-4 pt-4">
                                <h3 className="text-xl font-bold uppercase tracking-wider mb-1 text-white">
                                    {loc.city}
                                </h3>

                                {loc.subtitle && (
                                    <h4 className="font-bold text-sm mb-3 text-primary-light">{loc.subtitle}</h4>
                                )}

                                {loc.meetingTimes && loc.meetingTimes.includes('\n') ? (
                                    <div className="mb-4 text-sm font-medium text-white/80 space-y-1">
                                        {loc.meetingTimes.split('\n').map((line, i) => (
                                            <p key={i}>{line}</p>
                                        ))}
                                    </div>
                                ) : loc.meetingTimes ? (
                                    <p className="mb-4 text-sm font-medium text-primary-light italic">
                                        {loc.meetingTimes}
                                    </p>
                                ) : null}

                                <p className="mb-4 text-sm leading-relaxed text-white/70 flex flex-col gap-1">
                                    {loc.city.includes('PLATEAU') && <span className="font-bold text-white/90">Address:</span>}
                                    <span>{loc.address}</span>
                                </p>

                                {loc.leader ? (
                                    <p className="text-sm font-medium text-white/90 whitespace-pre-wrap leading-relaxed">{loc.leader}</p>
                                ) : (
                                    <p className="text-sm font-medium text-white/90 whitespace-pre-wrap">{loc.phones}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Us Banner */}
                <div className="mt-16 bg-gradient-to-r from-dark-lighter to-[#2A2A2A] border border-primary/20 rounded-2xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">Contact Us</h3>
                    <p className="text-white/70 mb-8 max-w-xl mx-auto relative z-10">We would love to hear from you. Send us a quick message and our team will get back to you shortly.</p>
                    <a
                        href="mailto:Eternal_life_gcc@yahoo.com"
                        className="inline-flex items-center gap-2 bg-primary text-dark font-bold px-8 py-4 rounded-lg hover:bg-primary-light transition-colors relative z-10 tracking-wide uppercase shadow-[0_0_20px_rgba(165,187,113,0.3)]"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Send us a message
                    </a>
                </div>

                {/* Footer Notes */}
                <div className="mt-16 border-t border-primary/10 pt-8 text-center md:text-left text-white/60 space-y-2 italic font-medium">
                    <p>A local church where the Word is taught and the things of the Spirit given free course</p>
                    <p className="font-bold text-primary-light uppercase">*SEE SPECIFIC FLYER FOR MORE DETAILS!</p>
                </div>
            </div>
        </div>
    );
}
