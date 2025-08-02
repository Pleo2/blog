import { cn } from "@/lib/utils";
import { GlassCard } from "@/components/ui/cards/glass-card";
import { Container_1 } from "./container-1/container-1";
import { ContainerBlogPost } from "./container-blog-post/container-blog-post";
import { Briefcase, FileTextIcon, Palette } from "lucide-react";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { ContainerPersonalExperience } from "./container-personal-experience/container-personal-experience";
import { ContainerStack } from "./container-stack/container-stack";
import { Aboutme } from "./aboutme/aboutme";
import { BorderBeam } from "../magicui/border-beam";
import { BentoCard } from "../magicui/bento-grid";
import { Marquee } from "../magicui/marquee";
import { ProjectsGalery } from "./projects-galery/projects-galery";
import { Setup } from "./setup/setup";
import { CallToAction } from "./call-to-action/call-to-action";

export const Bento = () => {
    return (
        <div
            className={cn(
                "flex flex-col gap-6 overflow-hidden",
                "lg:gap-2 lg:grid lg:grid-cols-7 lg:grid-rows-7 lg:h-full"
            )}
        >
            {/* about me */}
            <Aboutme />

            {/* all of my experience */}
            <Container_1 />

            {/* profesional experience */}
            <ContainerPersonalExperience />

            {/* My Setup */}
            <Setup />

            {/* my tecnological stack */}
            <ContainerStack />

            {/* my projects galery */}
            <ProjectsGalery />

            {/* Last Blog post */}
            <ContainerBlogPost />
        </div>
    );
};
