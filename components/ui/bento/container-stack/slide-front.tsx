"use client";

import Image from "next/image";
import { memo, useMemo, useRef, useEffect } from "react";

const frontendImages = [
    { src: "/svg/frontend/react_dark.svg", alt: "React logo" },
    { src: "/svg/frontend/figma.svg", alt: "Figma" },
    { src: "/svg/frontend/vitejs.svg", alt: "Vitejs" },
    { src: "/svg/frontend/astro_dark.svg", alt: "Astro dark" },
    { src: "/svg/frontend/jest.svg", alt: "Jest" },
    { src: "/svg/frontend/nextjs_icon_dark.svg", alt: "Nextjs icon dark" },
    { src: "/svg/frontend/vitest.svg", alt: "Vitest" },
    { src: "/svg/frontend/tailwindcss.svg", alt: "Tailwindcss" },
    { src: "/svg/frontend/vercel_dark.svg", alt: "Vercel dark" },
    { src: "/svg/frontend/css.svg", alt: "Css" },
    { src: "/svg/frontend/html5.svg", alt: "Html5" },
    { src: "/svg/frontend/javascript.svg", alt: "Javascript" },
    { src: "/svg/frontend/json.svg", alt: "Json" },
    { src: "/svg/frontend/sass.svg", alt: "Sass" },
    { src: "/svg/frontend/typescript.svg", alt: "Typescript" },
    { src: "/svg/frontend/chartjs.svg", alt: "Chartjs" },
    { src: "/svg/frontend/D3.svg", alt: "D3" },
    { src: "/svg/frontend/motion_dark.svg", alt: "Motion dark" },
    { src: "/svg/frontend/shadcn-ui_dark.svg", alt: "Shadcn ui dark" },
    { src: "/svg/frontend/tanstack.svg", alt: "Tanstack" },
    { src: "/svg/frontend/swr-dark.svg", alt: "Swr dark" },
    { src: "/svg/frontend/threejs-dark.svg", alt: "Threejs dark" },
    { src: "/svg/frontend/expo.svg", alt: "Expo" },
    { src: "/svg/frontend/reactquery.svg", alt: "Reactquery" }
];

// Memoizar componente de imagen individual
const OptimizedImage = memo(({ image, index, prefix }: {
    image: typeof frontendImages[0],
    index: number,
    prefix: string
}) => (
    <Image
        key={`${prefix}-${index}`}
        className="mx-1 inline h-10 will-change-transform"
        src={image.src}
        alt={image.alt}
        width={64}
        height={64}
        loading="lazy"
        unoptimized
        style={{
            filter: "grayscale(100%) brightness(150%)",
            transform: 'translateZ(0)'
        }}
    />
));

OptimizedImage.displayName = "OptimizedImage";

export const SlideFront = memo(() => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isVisibleRef = useRef(true);

    const firstRowImages = useMemo(() =>
        frontendImages.map((image, index) => (
            <OptimizedImage
                key={`frontend-image1-${index}`}
                image={image}
                index={index}
                prefix="frontend-image1"
            />
        )), []
    );

    const secondRowImages = useMemo(() =>
        frontendImages.map((image, index) => (
            <OptimizedImage
                key={`frontend-image2-${index}`}
                image={image}
                index={index}
                prefix="frontend-image2"
            />
        )), []
    );

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

    return (
        <div
            ref={containerRef}
            className="logos group relative overflow-hidden whitespace-nowrap [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]"
            style={{ willChange: 'transform' }}
        >
            <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
                {firstRowImages}
            </div>

            <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
                {secondRowImages}
            </div>
        </div>
    );
});

SlideFront.displayName = "SlideFront";
