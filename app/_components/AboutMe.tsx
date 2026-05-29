'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Code2, Coffee, Globe, Layers, MapPin, Sparkles } from 'lucide-react';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const BENTO_ITEMS = [
    {
        id: 'statement',
        icon: <Sparkles size={18} className="text-primary" />,
        colSpan: 'md:col-span-7',
        rowSpan: '',
        content: (
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                    Who I Am
                </p>
                <p className="text-2xl sm:text-3xl font-semibold text-foreground leading-snug">
                    I design and engineer{' '}
                    <span className="gradient-text">user-focused</span> digital
                    experiences — where performance, usability, and scalability
                    work together seamlessly.
                </p>
            </div>
        ),
    },
    {
        id: 'status',
        icon: null,
        colSpan: 'md:col-span-5',
        rowSpan: '',
        content: (
            <div className="flex flex-col h-full justify-between gap-4">
                <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                        Status
                    </p>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="status-dot" />
                        <span className="text-emerald-400 font-semibold">
                            Available for opportunities
                        </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Open to full-time, freelance, and contract roles
                    </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin size={14} className="text-primary shrink-0" />
                    <span>Pune, India · IST (UTC +5:30)</span>
                </div>
            </div>
        ),
    },
    {
        id: 'about',
        icon: <Code2 size={18} className="text-primary" />,
        colSpan: 'md:col-span-5',
        rowSpan: '',
        content: (
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                    About Me
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                    I&apos;m a MERN Full Stack Developer specialising in React,
                    Next.js, Node.js, and TypeScript — building production-ready
                    applications that balance clean architecture with exceptional
                    UX.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mt-3">
                    I approach every project with a product mindset — aligning
                    technical decisions with business goals while ensuring
                    accessibility and responsiveness.
                </p>
            </div>
        ),
    },
    {
        id: 'metrics',
        icon: <Layers size={18} className="text-secondary" />,
        colSpan: 'md:col-span-7',
        rowSpan: '',
        content: (
            <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
                    By The Numbers
                </p>
                <div className="grid grid-cols-3 gap-4">
                    {[
                        { value: '7+', label: 'Production Apps', icon: <Globe size={16} /> },
                        { value: '15+', label: 'Technologies', icon: <Code2 size={16} /> },
                        { value: '1+', label: 'Years Building', icon: <Coffee size={16} /> },
                    ].map((m) => (
                        <div
                            key={m.label}
                            className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-primary/20 transition-colors group"
                        >
                            <div className="text-muted-foreground flex justify-center mb-1 group-hover:text-primary transition-colors">
                                {m.icon}
                            </div>
                            <p className="font-anton text-2xl text-primary">
                                {m.value}
                            </p>
                            <p className="text-xs text-muted-foreground leading-tight mt-0.5">
                                {m.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        id: 'focus',
        icon: <Sparkles size={18} className="text-secondary" />,
        colSpan: 'md:col-span-12',
        rowSpan: '',
        content: (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                        Current Focus
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                        Full-Stack Engineering @{' '}
                        <span className="text-primary">
                            Provaantech Technologies
                        </span>
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                        Dec 2024 – Present · Software Engineer (Full Stack)
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Node.js', 'MongoDB', 'NestJS'].map(
                        (tech) => (
                            <span key={tech} className="pill-badge text-muted-foreground">
                                {tech}
                            </span>
                        ),
                    )}
                </div>
            </div>
        ),
    },
];

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });
            tl.from('.bento-item', {
                y: 60,
                opacity: 0,
                stagger: 0.08,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });
            tl.to('.bento-item', {
                y: -100,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                {/* Section label */}
                <div className="flex items-center gap-3 mb-10">
                    <div className="size-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="size-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                        About Me
                    </p>
                </div>

                {/* Bento grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto">
                    {BENTO_ITEMS.map((item) => (
                        <div
                            key={item.id}
                            className={`bento-item bento-card ${item.colSpan}`}
                        >
                            {item.content}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
