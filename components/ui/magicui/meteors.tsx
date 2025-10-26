"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useMemo, useCallback, useRef } from "react";

interface MeteorsProps {
    number?: number;
    minDelay?: number;
    maxDelay?: number;
    minDuration?: number;
    maxDuration?: number;
    angle?: number;
    className?: string;
}

export const Meteors = React.memo(({
    number = 20,
    minDelay = 0.2,
    maxDelay = 1.2,
    minDuration = 2,
    maxDuration = 10,
    angle = 215,
    className
}: MeteorsProps) => {
    const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);
    const isVisibleRef = useRef(true);
    const containerRef = useRef<HTMLDivElement>(null);

    // Memoizar estilos para evitar recálculos
    const generateStyles = useCallback(() => {
        const styles = Array.from({ length: Math.min(number, 15) }, () => ({
            "--angle": -angle + "deg",
            top: "-5%",
            left: `calc(0% + ${Math.floor(Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200))}px)`,
            animationDelay: (Math.random() * (maxDelay - minDelay) + minDelay) + "s",
            animationDuration: (Math.floor(Math.random() * (maxDuration - minDuration) + minDuration)) + "s"
        }));
        return styles;
    }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

    // Intersection Observer para pausar animaciones cuando no es visible
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisibleRef.current = entry.isIntersecting;
                if (entry.isIntersecting) {
                    container.style.animationPlayState = 'running';
                } else {
                    container.style.animationPlayState = 'paused';
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const styles = generateStyles();
        setMeteorStyles(styles);
    }, [generateStyles]);

    // Memoizar meteoros para evitar re-renderizado
    const meteors = useMemo(() =>
        meteorStyles.map((style, idx) => (
            <span
                key={`meteor-${idx}`}
                style={style}
                className={cn(
                    "pointer-events-none absolute size-0.5 rotate-[var(--angle)] animate-meteor rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]",
                    "will-change-transform", // Optimización GPU
                    className
                )}
            >
                <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-zinc-500 to-transparent" />
            </span>
        )), [meteorStyles, className]
    );

    return (
        <div ref={containerRef} className="relative w-full h-full">
            {meteors}
        </div>
    );
});

Meteors.displayName = "Meteors";
