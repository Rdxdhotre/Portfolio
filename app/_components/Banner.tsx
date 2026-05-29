"use client";
import ArrowAnimation from "@/components/ArrowAnimation";
import { GENERAL_INFO } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ArrowRight, MapPin, Download } from "lucide-react";
import React, { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ROLES = [
  "FULL STACK DEVELOPER",
  "MERN SPECIALIST",
  "REACT ENGINEER",
  "NODE.JS ARCHITECT",
];

const STATS = [
  { value: "1+", label: "Years Experience" },
  { value: "7+", label: "Production Projects" },
  { value: "15+", label: "Tech in Stack" },
];

const Banner = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        60,
      );
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        35,
      );
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  // Scroll-out parallax
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 70%",
          end: "bottom 10%",
          scrub: 1,
        },
      });
      tl.fromTo(
        ".slide-up-and-fade",
        { y: 0 },
        { y: -150, opacity: 0, stagger: 0.02 },
      );
    },
    { scope: containerRef },
  );

  // Entry animations
  useGSAP(() => {
    gsap.from(".banner-entry", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out",
      delay: 2.2, // after preloader
    });
  }, []);

  return (
    <section className="relative overflow-hidden" id="banner">
      <ArrowAnimation />

      <div
        className="container h-[100svh] min-h-[580px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
        ref={containerRef}
      >
        {/* ── Left / Main copy ─────────────────────────────────── */}
        <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[580px]">

          {/* Currently at badge */}
          <div className="banner-entry slide-up-and-fade flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass-card border border-primary/20 text-sm font-medium">
            <span className="status-dot" />
            <span className="text-muted-foreground">Currently @</span>
            <span className="text-primary font-semibold">Provaantech Technologies</span>
          </div>

          {/* Typewriter headline */}
          <h1 className="banner-title slide-up-and-fade leading-[.9] font-anton">
            <span className="gradient-text text-glow text-5xl sm:text-[72px] block mb-1">
              {displayed}
              <span className="inline-block w-[3px] h-[0.9em] bg-primary ml-1 align-middle animate-pulse" />
            </span>
            <span className="text-foreground/30 text-3xl sm:text-4xl block mt-3 font-space-grotesk font-light tracking-widest uppercase">
              Rohit Dhotre
            </span>
          </h1>

          {/* Description */}
          <p className="banner-description slide-up-and-fade mt-6 text-base sm:text-lg text-muted-foreground max-w-[460px] leading-relaxed">
            I craft{" "}
            <span className="text-foreground font-semibold">
              performant, scalable
            </span>{" "}
            and visually refined web applications — turning ideas into
            production-ready digital products with React, Next.js, Node.js &
            TypeScript.
          </p>

          {/* Location */}
          <div className="banner-entry slide-up-and-fade flex items-center gap-1.5 mt-4 text-sm text-muted-foreground">
            <MapPin size={14} className="text-primary" />
            <span>Pune, India · IST (UTC+5:30)</span>
          </div>

          {/* CTAs */}
          <div className="banner-entry slide-up-and-fade flex flex-wrap gap-4 mt-8">
            <a
              id="banner-cta-work"
              href={`mailto:${GENERAL_INFO.email}?subject=${GENERAL_INFO.emailSubject}&body=${GENERAL_INFO.emailBody}`}
              className="group h-12 px-8 inline-flex justify-center items-center gap-2 font-anton uppercase tracking-widest text-sm relative overflow-hidden rounded-none bg-primary text-primary-foreground transition-all hover:box-glow"
            >
              <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150" />
              <span className="z-[1] flex items-center gap-2">
                Let&apos;s Work Together
                <ArrowRight size={16} />
              </span>
            </a>
            <a
              id="banner-cta-github"
              href="https://github.com/Rdxdhotre"
              target="_blank"
              rel="noopener noreferrer"
              className="group h-12 px-8 inline-flex justify-center items-center gap-2 font-anton uppercase tracking-widest text-sm glass-card gradient-border hover:border-primary/40 transition-all"
            >
              View GitHub
            </a>
          </div>
        </div>

        {/* ── Right / Stats ────────────────────────────────────── */}
        <div className="md:absolute bottom-[8%] right-[4%] flex md:flex-col gap-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="slide-up-and-fade bento-card text-center md:text-right min-w-[110px] md:min-w-[130px] hover:border-primary/30 transition-all duration-300 group"
            >
              <h5 className="text-3xl sm:text-4xl font-anton text-primary group-hover:text-glow transition-all">
                {stat.value}
              </h5>
              <p className="text-xs text-muted-foreground mt-1 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
