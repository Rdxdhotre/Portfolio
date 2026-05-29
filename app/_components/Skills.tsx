'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CATEGORY_COLORS: Record<string, string> = {
    frontend: 'from-primary/20 to-primary/5 border-primary/20 hover:border-primary/40',
    backend: 'from-secondary/20 to-secondary/5 border-secondary/20 hover:border-secondary/40',
    database: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/40',
    tools: 'from-orange-400/20 to-orange-400/5 border-orange-400/20 hover:border-orange-400/40',
};

const CATEGORY_LABELS: Record<string, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Databases',
    tools: 'DevOps & Tools',
};

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 70%',
                    scrub: 0.5,
                },
            });
            tl.from('.skill-category', {
                opacity: 0,
                y: 50,
                ease: 'none',
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });
            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="my-stack" ref={containerRef} className="pb-section">
            <div className="container text-white">
                <SectionTitle title="My Stack" />

                <div className="space-y-14">
                    {Object.entries(MY_STACK).map(([key, value]) => {
                        const colorClass =
                            CATEGORY_COLORS[key] ??
                            'from-white/10 to-white/5 border-white/10 hover:border-white/20';
                        const label = CATEGORY_LABELS[key] ?? key;

                        return (
                            <div
                                className="skill-category"
                                key={key}
                            >
                                {/* Category heading */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div
                                        className={`h-px flex-1 bg-gradient-to-r ${colorClass.split(' ')[0].replace('from-', 'from-')} to-transparent`}
                                    />
                                    <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground px-3">
                                        {label}
                                    </span>
                                    <div
                                        className={`h-px flex-1 bg-gradient-to-l ${colorClass.split(' ')[0]} to-transparent`}
                                    />
                                </div>

                                {/* Skill pills */}
                                <div className="flex gap-3 flex-wrap">
                                    {value.map((item) => (
                                        <div
                                            key={item.name}
                                            className={`group flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-br ${colorClass} border backdrop-blur-sm transition-all duration-300 hover:scale-[1.04] hover:shadow-glow-sm`}
                                        >
                                            <Image
                                                src={item.icon}
                                                alt={item.name}
                                                width={28}
                                                height={28}
                                                className="max-h-7 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                                            />
                                            <span className="text-base font-medium text-foreground/90 whitespace-nowrap">
                                                {item.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
