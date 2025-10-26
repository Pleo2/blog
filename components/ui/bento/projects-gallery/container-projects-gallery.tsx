/* eslint-disable @next/next/no-img-element */

import { GlassCard } from "@/components/ui/cards/glass-card";
import { Marquee } from "@/components/ui/magicui/marquee";
import { cn } from "@/lib/utils";
import { Code } from "lucide-react";
import { ProjectsBentoCard } from "./projects-bento-card";
import type {IconName} from "lucide-react/dynamic";
import {BackgroundProjectsCard} from "@/components/ui/bento/projects-gallery/background-projects-card";
import {HTMLProps, ReactNode} from "react";


const features = [
    {
        Icon: Code,
        name: "Personal Projects",
        description:
            "I have developed a variety of personal projects, including web applications, mobile applications. You can find more information about my profesional projects on my resume.",
        href: "/projects",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: <BackgroundProjectsCard />,
    }
];
interface ContainerProjectsGalleryProps extends HTMLProps<HTMLDivElement> {
    name: string;
    className: string;
    background: ReactNode;
    icon: IconName;
    description: string;
    href: string;
    cta: string;
}

export const ContainerProjectsGallery = (props:ContainerProjectsGalleryProps) => {
    return (
        <div className="col-start-3 row-start-3 row-span-5 col-span-3 min-h-96 h-full lg:min-h-max lg:col-span-3 lg:row-span-5 lg:col-start-1 lg:row-start-3 animate-fade-in-bounce" style={{ animationDelay: '0.6s' }}>
            <GlassCard
                className={cn(
                    "py-0 min-h-[500px] h-full lg:h-full lg:min-h-max"
                )}
            >
                    <ProjectsBentoCard {...props}  />
            </GlassCard>
        </div>
    );
};
