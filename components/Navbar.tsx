'use client';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { MoveUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

const COLORS = [
    'bg-yellow-500 text-black',
    'bg-primary text-primary-foreground',
    'bg-secondary text-secondary-foreground',
    'bg-emerald-500 text-black',
];

const MENU_LINKS = [
    { name: 'Home', url: '/' },
    { name: 'About Me', url: '/#about-me' },
    { name: 'Experience', url: '/#my-experience' },
    { name: 'Projects', url: '/#selected-projects' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            {/* ── Top Glass Strip ────────────────────────────────── */}
            <div
                className={cn(
                    'sticky top-0 z-[4] transition-all duration-500',
                    scrolled
                        ? 'py-3 border-b border-white/5 backdrop-blur-xl bg-background/60'
                        : 'py-4',
                )}
            >
                <div className="container flex items-center justify-between">
                    {/* Logo / Name */}
                    <a
                        href="/"
                        className="font-anton text-xl tracking-widest uppercase text-foreground hover:text-primary transition-colors"
                    >
                        Rohit<span className="text-primary">.</span>
                    </a>

                    {/* Available badge (center) */}
                    <div className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm font-medium text-foreground">
                        <span className="status-dot" />
                        Available for work
                    </div>

                    {/* Hamburger */}
                    <button
                        id="nav-menu-toggle"
                        aria-label="Toggle navigation menu"
                        className={cn(
                            'group size-10 relative z-[2] flex items-center justify-center rounded-full glass-card transition-all',
                            { 'border-primary/40 box-glow-sm': isMenuOpen },
                        )}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span
                            className={cn(
                                'inline-block w-5 h-0.5 bg-foreground rounded-full absolute duration-300 -translate-y-[5px]',
                                {
                                    'rotate-45 translate-y-0': isMenuOpen,
                                    'md:group-hover:rotate-12': !isMenuOpen,
                                },
                            )}
                        />
                        <span
                            className={cn(
                                'inline-block w-5 h-0.5 bg-foreground rounded-full absolute duration-300 translate-y-[5px]',
                                {
                                    '-rotate-45 translate-y-0': isMenuOpen,
                                    'md:group-hover:-rotate-12': !isMenuOpen,
                                },
                            )}
                        />
                    </button>
                </div>
            </div>

            {/* ── Overlay ──────────────────────────────────────────── */}
            <div
                className={cn(
                    'overlay fixed inset-0 z-[2] bg-black/60 backdrop-blur-sm transition-all duration-300',
                    { 'opacity-0 invisible pointer-events-none': !isMenuOpen },
                )}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* ── Slide-in Panel ────────────────────────────────────── */}
            <div
                className={cn(
                    'fixed top-0 right-0 h-[100dvh] w-[480px] max-w-[calc(100vw-2.5rem)]',
                    'transform translate-x-full transition-transform duration-700 z-[3] overflow-hidden',
                    'flex flex-col lg:justify-center py-10',
                    { 'translate-x-0': isMenuOpen },
                )}
            >
                {/* Glass panel background */}
                <div
                    className={cn(
                        'absolute inset-0 transition-all duration-700 delay-100',
                        'backdrop-blur-2xl',
                        isMenuOpen
                            ? 'bg-background-light/90'
                            : 'bg-background-light/0',
                    )}
                />

                {/* Gradient accent edge */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/60 to-transparent" />

                {/* Content */}
                <div className="relative z-[1] grow flex md:items-center w-full max-w-[300px] mx-8 sm:mx-auto">
                    <div className="flex gap-10 lg:justify-between max-lg:flex-col w-full">
                        {/* Social */}
                        <div className="max-lg:order-2">
                            <p className="text-muted-foreground mb-5 md:mb-8 text-xs tracking-[0.2em] uppercase">
                                Social
                            </p>
                            <ul className="space-y-3">
                                {SOCIAL_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group text-lg capitalize hover:text-primary transition-colors flex items-center gap-2"
                                        >
                                            {link.name}
                                            <MoveUpRight
                                                size={14}
                                                className="opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5 group-hover:translate-x-0.5"
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Menu */}
                        <div>
                            <p className="text-muted-foreground mb-5 md:mb-8 text-xs tracking-[0.2em] uppercase">
                                Menu
                            </p>
                            <ul className="space-y-4">
                                {MENU_LINKS.map((link, idx) => (
                                    <li key={link.name}>
                                        <button
                                            id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                                            onClick={() => {
                                                router.push(link.url);
                                                setIsMenuOpen(false);
                                            }}
                                            className="group text-2xl flex items-center gap-3 hover:text-primary transition-colors font-medium"
                                        >
                                            <span
                                                className={cn(
                                                    'size-3.5 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all duration-300',
                                                    COLORS[idx],
                                                )}
                                            >
                                                <MoveUpRight
                                                    size={8}
                                                    className="scale-0 group-hover:scale-100 transition-all"
                                                />
                                            </span>
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Get In Touch */}
                <div className="relative z-[1] w-full max-w-[300px] mx-8 sm:mx-auto border-t border-white/10 pt-8">
                    <p className="text-muted-foreground mb-3 text-xs tracking-[0.2em] uppercase">
                        Get In Touch
                    </p>
                    <a
                        href={`mailto:${GENERAL_INFO.email}`}
                        className="text-sm hover:text-primary transition-colors break-all"
                    >
                        {GENERAL_INFO.email}
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
