import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#D4AF37', // Gold
                    dark: '#B8941F',
                    light: '#E8C968',
                },
                dark: {
                    DEFAULT: '#0A0E27', // Deep navy/black
                    lighter: '#1A1F3A',
                    card: '#151A35',
                },
                accent: {
                    gold: '#D4AF37',
                    cream: '#F5F5DC',
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                display: ['var(--font-display)', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-dark': 'linear-gradient(to bottom, #0A0E27, #151A35)',
            },
        },
    },
    plugins: [],
};

export default config;
