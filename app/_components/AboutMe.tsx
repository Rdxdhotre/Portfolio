'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

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

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
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

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade leading-snug">
                    I design and engineer user-focused digital experiences —
                    where performance, usability, and scalability work together
                    seamlessly.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    About Me
                </p>

                <div className="grid md:grid-cols-12 mt-9 gap-8">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            I’m Rohit Dhotre.
                        </p>
                    </div>

                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[500px] leading-relaxed">
                            <p className="slide-up-and-fade">
                                I’m a frontend developer specializing in modern
                                React and Next.js ecosystems, building
                                production-ready web applications that balance
                                clean architecture with exceptional user
                                experience.
                            </p>

                            <p className="mt-4 slide-up-and-fade">
                                My work emphasizes performance optimization,
                                scalable component design, and maintainable
                                codebases. I approach every project with a
                                product mindset — aligning technical decisions
                                with business goals while ensuring accessibility
                                and responsiveness across devices.
                            </p>

                            <p className="mt-4 slide-up-and-fade">
                                Beyond writing code, I focus on creating
                                structured systems that are easy to scale,
                                iterate, and improve over time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
