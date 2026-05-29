import { ReactNode } from 'react';
import { SectionFlower } from './icons';
import { cn } from '@/lib/utils';

interface Props {
    icon?: ReactNode;
    className?: string;
    classNames?: {
        container?: string;
        title?: string;
        icon?: string;
    };
    title: string;
}

const SectionTitle = ({ icon, title, className, classNames }: Props) => {
    return (
        <div
            className={cn(
                'flex items-center gap-4 mb-12',
                className,
                classNames?.container,
            )}
        >
            {icon ? (
                icon
            ) : (
                <SectionFlower
                    width={22}
                    className={cn(
                        'animate-spin-slow text-primary flex-shrink-0',
                        classNames?.icon,
                    )}
                />
            )}
            <h2
                className={cn(
                    'text-xs uppercase tracking-[0.25em] text-muted-foreground leading-none',
                    classNames?.title,
                )}
            >
                {title}
            </h2>
            {/* Right decorative line */}
            <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
        </div>
    );
};

export default SectionTitle;
