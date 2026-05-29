'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLSpanElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                defaults: { ease: 'power3.inOut' },
            });

            // Animate counter 0 → 100
            const counterObj = { val: 0 };
            tl.to(
                counterObj,
                {
                    val: 100,
                    duration: 1.8,
                    ease: 'power2.out',
                    onUpdate: () => {
                        if (counterRef.current) {
                            counterRef.current.textContent = Math.floor(counterObj.val)
                                .toString()
                                .padStart(2, '0');
                        }
                    },
                },
                0,
            );

            // Name letters slide up
            tl.to(
                '.preloader-letter',
                {
                    y: 0,
                    stagger: 0.04,
                    duration: 0.5,
                    ease: 'power3.out',
                },
                0,
            );

            // Hold for moment then exit — liquid wipe upward
            tl.to('.preloader-letter', { autoAlpha: 0, duration: 0.25 }, '+=0.3');
            tl.to('.preloader-counter', { autoAlpha: 0, duration: 0.25 }, '<');

            // Bars wipe upward with stagger
            tl.to(
                '.preloader-bar',
                {
                    y: '-101%',
                    duration: 0.7,
                    stagger: 0.06,
                    ease: 'power4.inOut',
                },
                '-=0.1',
            );

            // Fade whole preloader
            tl.to(
                preloaderRef.current,
                {
                    autoAlpha: 0,
                    duration: 0.2,
                },
                '-=0.15',
            );

            tl.set(preloaderRef.current, { display: 'none' });
        },
        { scope: preloaderRef },
    );

    const name = 'ROHIT DHOTRE';

    return (
        <div
            className="fixed inset-0 z-[6] flex overflow-hidden"
            ref={preloaderRef}
        >
            {/* Background bars */}
            {Array.from({ length: 10 }).map((_, i) => (
                <div
                    key={i}
                    className="preloader-bar flex-1 h-full"
                    style={{
                        background: `hsl(220 20% ${8 + i * 0.6}%)`,
                    }}
                />
            ))}

            {/* Name */}
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex overflow-hidden leading-none">
                {name.split('').map((char, i) => (
                    <span
                        key={i}
                        className="preloader-letter inline-block translate-y-full font-anton text-[12vw] lg:text-[140px] text-white/90"
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </p>

            {/* Counter */}
            <div className="preloader-counter absolute bottom-8 right-10 flex items-end gap-1">
                <span
                    ref={counterRef}
                    className="font-anton text-[80px] leading-none text-primary tabular-nums"
                >
                    00
                </span>
                <span className="font-space-grotesk text-2xl text-muted-foreground mb-3">
                    %
                </span>
            </div>

            {/* Bottom left label */}
            <div className="absolute bottom-8 left-10 text-muted-foreground text-sm font-space-grotesk tracking-widest uppercase">
                Loading portfolio
            </div>
        </div>
    );
};

export default Preloader;
