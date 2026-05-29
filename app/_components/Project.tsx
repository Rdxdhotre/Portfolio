'use client';
import TransitionLink from '@/components/TransitionLink';
import { cn } from '@/lib/utils';
import { IProject } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Props {
    index: number;
    project: IProject;
    selectedProject: string | null;
    onMouseEnter: (_slug: string) => void;
}

gsap.registerPlugin(useGSAP);

const Project = ({ index, project, selectedProject, onMouseEnter }: Props) => {
    const externalLinkSVGRef = useRef<SVGSVGElement>(null);
    const cardRef = useRef<HTMLAnchorElement>(null);

    const { context, contextSafe } = useGSAP(() => {}, {
        scope: externalLinkSVGRef,
        revertOnUpdate: true,
    });

    const handleMouseEnter = contextSafe?.(() => {
        onMouseEnter(project.slug);

        const arrowLine = externalLinkSVGRef.current?.querySelector('#arrow-line') as SVGPathElement;
        const arrowCurb = externalLinkSVGRef.current?.querySelector('#arrow-curb') as SVGPathElement;
        const box = externalLinkSVGRef.current?.querySelector('#box') as SVGPathElement;

        gsap.set(box, {
            opacity: 0,
            strokeDasharray: box?.getTotalLength(),
            strokeDashoffset: box?.getTotalLength(),
        });
        gsap.set(arrowLine, {
            opacity: 0,
            strokeDasharray: arrowLine?.getTotalLength(),
            strokeDashoffset: arrowLine?.getTotalLength(),
        });
        gsap.set(arrowCurb, {
            opacity: 0,
            strokeDasharray: arrowCurb?.getTotalLength(),
            strokeDashoffset: arrowCurb?.getTotalLength(),
        });

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
        tl.to(externalLinkSVGRef.current, { autoAlpha: 1 })
            .to(box, { opacity: 1, strokeDashoffset: 0 })
            .to(arrowLine, { opacity: 1, strokeDashoffset: 0 }, '<0.2')
            .to(arrowCurb, { opacity: 1, strokeDashoffset: 0 })
            .to(externalLinkSVGRef.current, { autoAlpha: 0 }, '+=1');
    });

    const handleMouseLeave = contextSafe?.(() => {
        context.kill();
    });

    const isSelected = selectedProject === project.slug;

    return (
        <TransitionLink
            href={`/projects/${project.slug}`}
            ref={cardRef}
            className={cn(
                'project-item group leading-none py-6 md:border-b border-border/60 first:!pt-0 last:pb-0 last:border-none transition-all duration-500',
                'md:group-hover/projects:opacity-25 md:hover:!opacity-100',
                // Glow border on hover
                'relative after:absolute after:inset-0 after:rounded-lg after:opacity-0 after:transition-opacity after:duration-500',
                'md:hover:after:opacity-100 after:shadow-glow-sm after:pointer-events-none',
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Mobile image */}
            {selectedProject === null && (
                <Image
                    src={project.thumbnail}
                    alt={`${project.title} thumbnail`}
                    width={600}
                    height={400}
                    className="w-full object-cover mb-5 aspect-[3/2] object-top rounded-xl overflow-hidden"
                    loading="lazy"
                />
            )}

            <div className="flex gap-3 md:gap-6 items-start">
                {/* Index */}
                <div className="font-anton text-muted-foreground/40 text-lg pt-1 shrink-0 tabular-nums">
                    _{(index + 1).toString().padStart(2, '0')}.
                </div>

                <div className="flex-1 min-w-0">
                    {/* Title row */}
                    <h4 className="flex items-start gap-3 text-3xl xs:text-5xl font-anton transition-all duration-700 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left leading-tight">
                        <span className="flex-1">{project.title}</span>
                        <span className="text-foreground/0 group-hover:text-foreground/80 transition-all shrink-0 mt-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                ref={externalLinkSVGRef}
                            >
                                <path id="box" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <path id="arrow-line" d="M10 14 21 3" />
                                <path id="arrow-curb" d="M15 3h6v6" />
                            </svg>
                        </span>
                    </h4>

                    {/* Meta row: tech badges + year */}
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                        {project.techStack.slice(0, 4).map((tech) => (
                            <span
                                key={tech}
                                className="pill-badge text-xs text-muted-foreground group-hover:border-primary/20 group-hover:text-foreground/70 transition-all"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.techStack.length > 4 && (
                            <span className="pill-badge text-xs text-muted-foreground">
                                +{project.techStack.length - 4} more
                            </span>
                        )}
                        {/* Year badge */}
                        <span className="ml-auto pill-badge text-xs text-primary/70 border-primary/15">
                            {project.year}
                        </span>
                    </div>
                </div>
            </div>
        </TransitionLink>
    );
};

export default Project;
