/* eslint-disable @next/next/no-img-element */

import { GlassCard } from "@/components/ui/cards/glass-card";
import { Marquee } from "@/components/ui/magicui/marquee";
import { ShineBorder } from "@/components/ui/magicui/shine-border";
import { cn } from "@/lib/utils";
import { Code } from "lucide-react";
import { ProjectsBentoCard } from "./projects-bento-card";
import Image from "next/image";

const files = [
    {
        imgUrl: "https://pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev/personal-projects/215shots_so.webp",
        name: "Giphycloneapitest",
        body: "A Giphy clone built with React, enabling users to browse, search, and view GIFs, clips, and stories just like the original Giphy platform."
    },
    {
        imgUrl: "https://pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev/personal-projects/457_1x_shots_so.webp",
        name: "Vicky Hornea Blog",
        body: "A web application for centralizing and sharing baking and cooking video recipes, integrating YouTube content into an organized, engaging digital experience."
    },
    {
        imgUrl: "https://pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev/personal-projects/594_1x_shots_so.webp",
        name: "PokeGraph",
        body: "An Astro-powered GitHub project that renders interactive force-directed graphs for modern data visualization."
    },
    {
        imgUrl: "https://pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev/personal-projects/673_1x_shots_so.webp",
        name: "Freelance Portfolio",
        body: "A professional freelance portfolio site built with Astro 5.2 to showcase work online in a modern, optimized format."
    },
    {
        imgUrl: "https://pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev/personal-projects/952shots_so.webp",
        name: "TierList Maker",
        body: "An interactive web app built with React and Vite, allowing users to create and customize their own tier lists with visual flair."
    },
    {
        imgUrl: "https://pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev/personal-projects/956_1x_shots_so.webp",
        name: "Clean Nude E-commerce",
        body: "An online store built in TypeScript and integrated with Shopify, delivering a fast, secure e-commerce experience for managing products, sales, and orders seamlessly."
    }
];

const firstRow = files.slice(0, files.length / 3);
const secondRow = files.slice(files.length / 3, (2 * files.length) / 3);
const thirdRow = files.slice((2 * files.length) / 3);

const ProjectCard = ({
    imgUrl,
    name,
    body
}: {
    imgUrl: string;
    name: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-72 cursor-pointer overflow-hidden rounded-lg border p-2",
                "border-gray-100/[.1] bg-gray-100/[.01] hover:bg-gray-100/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
        >
            <div className="flex flex-row items-center w-full">
                <div className="flex flex-col w-full">
                    <Image
                        src={imgUrl}
                        alt={name}
                        width={600}
                        height={100}
                        className="rounded-lg drop-shadow-xl mb-2"
                        loading="eager"
                    />
                    <div className="flex items-center">
                        <figcaption className="text-sm font-semibold text-mustard">
                            {name}
                        </figcaption>
                    </div>
                </div>
            </div>
            <blockquote className="text-xs mt-1 text-white/60 line-clamp-5">
                {body}
            </blockquote>
        </figure>
    );
};

const features = [
    {
        Icon: Code,
        name: "Personal Projects",
        description:
            "I have developed a variety of personal projects, including web applications, mobile applications. You can find more information about my profesional projects on my resume.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: (
            <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
                <div
                    className="flex flex-row items-center gap-4"
                    style={{
                        transform:
                            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)"
                    }}
                >
                    <Marquee pauseOnHover vertical className="[--duration:20s]">
                        {firstRow.map((f, idx) => (
                            <figure
                                key={idx}
                                className={cn(
                                    "relative w-72 cursor-pointer overflow-hidden rounded-lg border p-2",
                                    "border-gray-100/[.1] bg-gray-100/[.01] hover:bg-gray-100/[.05]",
                                    "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                                    "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
                                )}
                            >
                                <div className="flex flex-row items-center w-full">
                                    <div className="flex flex-col w-full">
                                        <Image
                                            src={f.imgUrl}
                                            alt={f.name}
                                            width={600}
                                            height={100}
                                            className="rounded-lg drop-shadow-xl mb-2"
                                            loading="eager"
                                        />
                                        <div className="flex items-center">
                                            <figcaption className="text-sm font-semibold text-mustard">
                                                {f.name}
                                            </figcaption>
                                        </div>
                                    </div>
                                </div>
                                <blockquote className="text-xs mt-1 text-white/60 line-clamp-5">
                                    {f.body}
                                </blockquote>
                            </figure>
                        ))}
                    </Marquee>
                    <Marquee pauseOnHover vertical className="[--duration:20s]">
                        {secondRow.map((f, idx) => (
                            <figure
                                key={idx}
                                className={cn(
                                    "relative w-72 cursor-pointer overflow-hidden rounded-lg border p-2",
                                    "border-gray-100/[.1] bg-gray-100/[.01] hover:bg-gray-100/[.05]",
                                    "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                                    "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
                                )}
                            >
                                <div className="flex flex-row items-center w-full">
                                    <div className="flex flex-col w-full">
                                        <Image
                                            src={f.imgUrl}
                                            alt={f.name}
                                            width={600}
                                            height={100}
                                            className="rounded-lg drop-shadow-xl mb-2"
                                            loading="eager"
                                        />
                                        <div className="flex items-center">
                                            <figcaption className="text-sm font-semibold text-mustard">
                                                {f.name}
                                            </figcaption>
                                        </div>
                                    </div>
                                </div>
                                <blockquote className="text-xs mt-1 text-white/60 line-clamp-5">
                                    {f.body}
                                </blockquote>
                            </figure>
                        ))}
                    </Marquee>
                    <Marquee pauseOnHover vertical className="[--duration:20s]">
                        {thirdRow.map((f, idx) => (
                            <figure
                                key={idx}
                                className={cn(
                                    "relative w-72 cursor-pointer overflow-hidden rounded-lg border p-2",
                                    "border-gray-100/[.1] bg-gray-100/[.01] hover:bg-gray-100/[.05]",
                                    "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                                    "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
                                )}
                            >
                                <div className="flex flex-row items-center w-full">
                                    <div className="flex flex-col w-full">
                                        <Image
                                            src={f.imgUrl}
                                            alt={f.name}
                                            width={600}
                                            height={100}
                                            className="rounded-lg drop-shadow-xl mb-2"
                                            loading="eager"
                                        />
                                        <div className="flex items-center">
                                            <figcaption className="text-sm font-semibold text-mustard">
                                                {f.name}
                                            </figcaption>
                                        </div>
                                    </div>
                                </div>
                                <blockquote className="text-xs mt-1 text-white/60 line-clamp-5">
                                    {f.body}
                                </blockquote>
                            </figure>
                        ))}
                    </Marquee>
                </div>

                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
        )
    }
];
export const ProjectsGalery = () => {
    return (
        <div className="col-start-3 row-start-3 row-span-5 col-span-3 min-h-96 h-full lg:min-h-max lg:col-span-3 lg:row-span-5 lg:col-start-1 lg:row-start-3">
            <GlassCard
                className={cn(
                    "py-0 min-h-[500px] h-full lg:h-full lg:min-h-max"
                )}
            >
                <ShineBorder duration={20} />
                {features.map((feature, idx) => (
                    <ProjectsBentoCard key={idx} {...feature} />
                ))}
            </GlassCard>
        </div>
    );
};
