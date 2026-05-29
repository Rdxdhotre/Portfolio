import type { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';

export default {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: 'hsl(var(--background))',
                    light: 'hsl(var(--background-light))',
                    card: 'hsl(var(--background-card))',
                },
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                '2xl': '1rem',
                '3xl': '1.5rem',
            },
            fontFamily: {
                anton: ['var(--font-anton)'],
                'space-grotesk': ['var(--font-space-grotesk)'],
                // keep old alias for any existing references
                'roboto-flex': ['var(--font-space-grotesk)'],
            },
            padding: {
                section: '200px',
                'section-sm': '120px',
            },
            container: {
                center: true,
                padding: '1.25rem',
                screens: {
                    xl: '1148px',
                    '2xl': '1148px',
                },
            },
            transitionDuration: {
                '7000': '7s',
            },
            screens: {
                xs: '420px',
            },
            boxShadow: {
                glow: 'var(--glow-primary)',
                'glow-accent': 'var(--glow-accent)',
                'glow-sm': '0 0 12px hsl(196 100% 50% / 0.3)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            animation: {
                'float': 'float 4s ease-in-out infinite',
                'shimmer': 'shimmer 2.5s linear infinite',
                'status-pulse': 'status-pulse 2s ease-out infinite',
                'gradient-shift': 'gradient-shift 4s linear infinite',
                'spin-slow': 'spin 7s linear infinite',
            },
        },
    },
    plugins: [tailwindAnimate],
} satisfies Config;
