import { GlassCard } from "@/components/cards/glass-card";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PocketKnife } from "lucide-react";
import { SlideLeft } from "./slide-left";
import { SlideRight } from "./slide-right";

export const ContainerStack = () => {
    return (
        <div className="col-start-3 row-start-6 col-span-5 lg:col-span-2 lg:row-span-4 lg:col-start-6 lg:row-start-1">
            <GlassCard className="gap-2">
                <CardHeader className="flex flex-col items-start lg:hidden xl:flex">
                    <div className="flex gap-2 justify-center items-center text-white">
                        <PocketKnife className="w-4" />
                        <CardTitle className="">My Stack</CardTitle>
                    </div>

                    {/* <section className="flex gap-1 items-center ">
                        <span className=" text-white/70">
                            Technologies I specialize in
                        </span>
                    </section> */}
                </CardHeader>
                <CardContent className="">
                    <div className="flex flex-col gap-3">
                        {/* full stack development */}
                        <p className="text-white/80 text-xs lg:hidden xl:flex ">Full Stack Development</p>
                        <SlideLeft />
                        {/* Database and State Management */}
                        <p className="text-white/80 text-xs lg:hidden xl:flex ">Database and State Management</p>
                        <SlideRight />
                        {/* DevOps and Deployment */}
                        <p className="text-white/80 text-xs lg:hidden xl:flex ">Devops and Deployment</p>
                        <SlideLeft />
                    </div>
                </CardContent>
            </GlassCard>
        </div>
    );
};
