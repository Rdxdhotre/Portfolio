'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Briefcase, Calendar } from 'lucide-react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });
            tl.from('.experience-item', {
                y: 50,
                opacity: 0,
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
                    end: 'bottom 20%',
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
        <section className="py-section" id="my-experience">
            <div className="container" ref={containerRef}>
                <SectionTitle title="My Experience" />

                <div className="relative">
                    {/* Vertical timeline spine */}
                    <div className="timeline-line ml-4 md:ml-6" />

                    <div className="space-y-10 pl-10 md:pl-14">
                        {MY_EXPERIENCE.map((item, index) => (
                            <div
                                key={item.title}
                                className="experience-item relative"
                            >
                                {/* Timeline dot */}
                                <div className="absolute -left-[2.65rem] md:-left-[3.65rem] top-[0.35rem] size-4 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                                    <div className="size-1.5 rounded-full bg-primary" />
                                </div>
                                {/* Glow dot ring */}
                                <div className="absolute -left-[2.75rem] md:-left-[3.75rem] top-[0.25rem] size-5 rounded-full bg-primary/20 animate-ping opacity-60" />

                                {/* Card */}
                                <div className="bento-card group hover:border-primary/30 transition-all duration-300">
                                    {/* Top row */}
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                                        {/* Company + serial */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="pill-badge text-xs text-muted-foreground">
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                                <Briefcase
                                                    size={14}
                                                    className="text-primary"
                                                />
                                                <span className="text-sm text-muted-foreground">
                                                    {item.company}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl sm:text-3xl font-anton leading-none group-hover:text-primary transition-colors">
                                                {item.title}
                                            </h3>
                                        </div>

                                        {/* Duration badge */}
                                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card text-xs text-muted-foreground whitespace-nowrap self-start">
                                            <Calendar size={12} className="text-primary" />
                                            {item.duration}
                                        </div>
                                    </div>

                                    {/* Shimmer line on hover */}
                                    <div className="relative h-px bg-border overflow-hidden rounded-full mt-2">
                                        <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>

                                    {/* Current indicator */}
                                    {item.duration.toLowerCase().includes('present') && (
                                        <div className="flex items-center gap-2 mt-4">
                                            <span className="status-dot" />
                                            <span className="text-xs text-emerald-400 font-medium">
                                                Currently here
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;
