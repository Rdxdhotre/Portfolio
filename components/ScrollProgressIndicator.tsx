'use client';
import React, { useEffect, useRef, useState } from 'react';

const ScrollProgressIndicator = () => {
    const scrollBarRef = useRef<HTMLDivElement>(null);
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollHeight, clientHeight } = document.documentElement;
            const scrollableHeight = scrollHeight - clientHeight;
            const scrollY = window.scrollY;
            const progress = scrollableHeight > 0 ? (scrollY / scrollableHeight) * 100 : 0;

            setScrollPercent(Math.round(progress));

            if (scrollBarRef.current) {
                scrollBarRef.current.style.transform = `translateY(-${100 - progress}%)`;
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className="fixed right-[1.5%] top-1/2 -translate-y-1/2 z-[3] flex flex-col items-center gap-2"
            role="progressbar"
            aria-label="Page scroll progress"
            aria-valuenow={scrollPercent}
            aria-valuemin={0}
            aria-valuemax={100}
        >
            {/* Percent label */}
            <span className="font-anton text-[10px] text-primary tabular-nums opacity-60">
                {scrollPercent}
            </span>

            {/* Track */}
            <div className="w-[3px] h-[80px] rounded-full bg-background-light overflow-hidden">
                <div
                    className="w-full bg-gradient-to-b from-primary to-secondary rounded-full h-full"
                    ref={scrollBarRef}
                    style={{ transform: 'translateY(-100%)' }}
                />
            </div>

            {/* Bottom dot */}
            <div className="size-1.5 rounded-full bg-primary/40" />
        </div>
    );
};

export default ScrollProgressIndicator;
