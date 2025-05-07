import { cn } from "@/lib/utils";
import { GlassCard } from "../cards/glass-card";
import { Container_1 } from "./container-1/container-1";
import { ContainerBlogPost } from "./container-blog-post/container-blog-post";
import {
    StarsIcon,
    Badge,
    Calendar,
    PocketKnife,
    Briefcase,
    BriefcaseBusiness
} from "lucide-react";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { ContainerStack } from "./container-stack/container-stack";

export const Bento = () => {
    return (
        <div
            className={cn(
                "flex-col flex gap-2 relative",
                "sm:grid sm:grid-cols-7 sm:grid-rows-7 sm:h-[65vh] xl:h-[55vh] 2xl:h-full"
            )}
        >
            <Container_1 />
            {/* profesional experience */}
            <div className="col-start-3 row-start-1 col-span-3 row-span-2 xl:col-span-2 xl:row-span-4 xl:col-start-4 xl:row-start-1">
                <GlassCard>
                    <CardHeader className="flex flex-col items-start">
                        <div className="flex gap-2 justify-center items-center text-white">
                            <Briefcase className="w-4" />
                            <CardTitle className="">
                                Personal Experience
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className=""></CardContent>
                </GlassCard>
            </div>

            {/* ?? */}
            <div className="col-start-3 row-start-3 row-span-3 col-span-3 xl:col-span-3 xl:row-span-2 xl:col-start-1 xl:row-start-3">
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
            <div className="hidden xl:flex xl:col-start-4 xl:col-span-2 xl:row-span-3">
            <GlassCard>
                    <CardHeader className="flex flex-col items-start">
                        <div className="flex gap-2 justify-center items-center text-white">
                            <Briefcase className="w-4" />
                            <CardTitle className="">
                                mi setup
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="">

                    </CardContent>
                </GlassCard>
            </div>

            {/* my tecnological stack */}
            <ContainerStack />

            {/* my projects galery */}
            <div className="col-start-6 row-start-1 row-span-3 col-span-2 xl:col-span-3 xl:row-span-3 xl:row-start-5">
            <GlassCard>
                    <CardHeader className="flex flex-col items-start">
                        <div className="flex gap-2 justify-center items-center text-white">
                            <Briefcase className="w-4" />
                            <CardTitle className="">
                                Personal Projects
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="">

                    </CardContent>
                </GlassCard>
            </div>

            {/* Last Blog post */}
            <ContainerBlogPost />
        </div>
    );
};
