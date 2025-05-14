import { cn } from "@/lib/utils";
import { GlassCard } from "../cards/glass-card";
import { Container_1 } from "./container-1/container-1";
import { ContainerBlogPost } from "./container-blog-post/container-blog-post";
import { Briefcase } from "lucide-react";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { ContainerPersonalExperience } from "./container-personal-experience/container-personal-experience";
import { ContainerStack } from "./container-stack/container-stack";
import HalftoneWaves from "./aboutme/halftone-waves";

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
            <div className="hidden lg:flex lg:col-start-4 lg:col-span-2 lg:row-span-3">
                <GlassCard>
                    <CardHeader className="flex flex-col items-start">
                        <div className="flex gap-2 justify-center items-center text-white">
                            <Briefcase className="w-4" />
                            <CardTitle className="">mi setup</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className=""></CardContent>
                </GlassCard>
            </div>

            {/* my tecnological stack */}
            <ContainerStack />

            {/* otra cosa mas */}
            <div className="col-start-6 row-start-3 col-span-2 row-span-2 overflow-y-hidden rounded-2xl relative ">
                <HalftoneWaves
                    backgroundColor="#042A5C"
                    dotColor="#0072F6"
                    dotOpacity={0.9}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <GlassCard className="z-10  backdrop-blur-[2px] ">
                        <CardHeader className="flex flex-col items-start z-10">
                            <div className="flex gap-2 justify-center items-center text-white">
                                <Briefcase className="w-4" />
                                <CardTitle className="">Sobre Mí</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className=""></CardContent>
                    </GlassCard>
                </div>
            </div>

            {/* my projects galery */}
            <div className="col-start-6 row-start-1 row-span-3 col-span-2 lg:col-span-3 lg:row-span-3 lg:row-start-5">
                <GlassCard>
                    <CardHeader className="flex flex-col items-start">
                        <div className="flex gap-2 justify-center items-center text-white">
                            <Briefcase className="w-4" />
                            <CardTitle className="">
                                Personal Projects
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className=""></CardContent>
                </GlassCard>
            </div>

            {/* Last Blog post */}
            <ContainerBlogPost />
        </div>
    );
};
