'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Next.js
const customIcon = L.divIcon({
    className: 'custom-leaflet-marker',
    html: `
        <div style="
            background-color: #A5BB71;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 3px solid #1A1A1A;
            box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            color: #1A1A1A;
        ">
            <svg style="width: 20px; height: 20px" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                <circle cx="12" cy="9.5" r="1.5" fill="currentColor" opacity="0.8" />
            </svg>
        </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

const IBADAN_COORDS: [number, number] = [7.4200, 3.9300]; // approximate coordinate around Iwo Road Ibadan
const LAGOS_COORDS: [number, number] = [6.6262, 3.3444]; // Ogba
const JOS_COORDS: [number, number] = [9.9497, 8.8893]; // Univ of Jos
const IFE_COORDS: [number, number] = [7.4851, 4.5451]; // OAU
const EDE_COORDS: [number, number] = [7.7303, 4.4375]; // Polytechnic Ede

const markers = [
    { name: 'IBADAN (Headquarters)', coords: IBADAN_COORDS, address: 'No 105, Top floor, Mouka Foam Building, Opp. Polaris Bank, Abayomi Bus Stop, Iwo Road' },
    { name: 'LAGOS', coords: LAGOS_COORDS, address: '5 Ladipo Banjo, off Mobil Junction, Oke-ira, Ogba' },
    { name: 'JOS (Plateau)', coords: JOS_COORDS, address: 'Summit international college, Tudun Wada, Jos, Plateau State.' },
    { name: 'ILE-IFE', coords: IFE_COORDS, address: 'Total Tutorial Academy, OAU Campus' },
    { name: 'EDE', coords: EDE_COORDS, address: 'The Pavilion, Sports Complex, Polytechnic Ede' },
];

export default function LocationMap() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <div className="w-full h-[500px] bg-dark-lighter animate-pulse rounded-xl border border-white/5 flex items-center justify-center text-white/50">Loading Map...</div>;
    }

    // Centered roughly over Nigeria
    const center: [number, number] = [8.5, 5.5];

    return (
        <div className="w-full h-[500px] rounded-xl overflow-hidden border border-primary/20 shadow-2xl z-0">
            <MapContainer
                center={center}
                zoom={6}
                scrollWheelZoom={false}
                className="w-full h-full z-0"
                style={{ background: '#1A1A1A' }}
            >
                {/* Sleek Dark Mode CartoDB Map Tiles */}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />

                {markers.map((marker, i) => (
                    <Marker key={i} position={marker.coords} icon={customIcon}>
                        <Popup className="custom-popup">
                            <div className="text-center font-sans p-1">
                                <h3 className="font-bold text-dark text-sm mb-1 uppercase tracking-wide">{marker.name}</h3>
                                <p className="text-xs text-dark/70 leading-tight">{marker.address}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>

            <style jsx global>{`
                .leaflet-popup-content-wrapper {
                    background: #A5BB71;
                    color: #1A1A1A;
                    border-radius: 8px;
                    border: 1px solid #1A1A1A;
                }
                .leaflet-popup-tip {
                    background: #A5BB71;
                }
                .leaflet-container {
                    font-family: var(--font-inter), sans-serif;
                }
                .leaflet-control-zoom a {
                    background-color: #2A2A2A !important;
                    color: #A5BB71 !important;
                    border-color: #1A1A1A !important;
                }
                .leaflet-control-zoom a:hover {
                    background-color: #1A1A1A !important;
                }
            `}</style>
        </div>
    );
}
