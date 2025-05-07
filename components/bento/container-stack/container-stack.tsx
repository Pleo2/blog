import { GlassCard } from "@/components/cards/glass-card";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PocketKnife } from "lucide-react";
import { SlideLeft } from "./slide-left";
import { SlideRight } from "./slide-right";

export const ContainerStack = () => {
    return (
        <div className="col-start-3 row-start-6 col-span-5 xl:col-span-2 xl:row-span-4 xl:col-start-6 xl:row-start-1">
            <GlassCard>
                <CardHeader className="flex flex-col items-start">
                    <div className="flex gap-2 justify-center items-center text-white">
                        <PocketKnife className="w-4" />
                        <CardTitle className="">My Stack</CardTitle>
                    </div>

                    <section className="flex gap-1 items-center ">
                        <span className="text-xs text-white/70">
                            Technologies I specialize in
                        </span>
                    </section>
                </CardHeader>
                <CardContent className="">
                    <div className="flex flex-col gap-3">
                        {/* full stack development */}
                        <p className="text-white/80 text-sm">Full Stack Development</p>
                        <SlideLeft />
                        {/* Database and State Management */}
                        <p className="text-white/80 text-sm">Database and State Management</p>
                        <SlideRight />
                        {/* DevOps and Deployment */}
                        <p className="text-white/80 text-sm">Devops and Deployment</p>
                        <SlideLeft />
                    </div>
                </CardContent>
            </GlassCard>
        </div>
    );
};
