import { cn } from "@/lib/utils";
import { GlassCard } from "../cards/glass-card";
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

export const Bento = () => {
    return (
        <div
            className={cn(
                "flex flex-col gap-2 overflow-scroll",
                "lg:grid lg:grid-cols-7 lg:grid-rows-7 lg:h-full"
            )}
        >
            <Container_1 />
            {/* profesional experience */}
            <ContainerPersonalExperience />
            {/* ?? */}
            <div className="col-start-3 row-start-3 row-span-3 col-span-3 lg:col-span-3 lg:row-span-2 lg:col-start-1 lg:row-start-3">
                <GlassCard>
                    <CardHeader className="flex flex-col items-start">
                        <div className="flex gap-2 justify-center items-center text-white">
                            <Briefcase className="w-4" />
                            <CardTitle className="">
                                que puede ser esta
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className=""></CardContent>
                </GlassCard>
            </div>

            {/* My Setup */}
            <Setup/>

            {/* my tecnological stack */}
            <ContainerStack />

            {/* otra cosa mas */}
            <Aboutme />

            {/* my projects galery */}
            <ProjectsGalery />

            {/* Last Blog post */}
            <ContainerBlogPost />
        </div>
    );
};
