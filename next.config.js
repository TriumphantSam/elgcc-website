/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/',
                has: [{ type: 'host', value: 'tos2026.com' }],
                destination: '/register/tos2026',
                permanent: false,
            },
            {
                source: '/',
                has: [{ type: 'host', value: 'www.tos2026.com' }],
                destination: '/register/tos2026',
                permanent: false,
            },
        ];
    },
}

module.exports = nextConfig
