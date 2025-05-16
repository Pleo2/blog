import { GlassCard } from "@/components/cards/glass-card";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PocketKnife } from "lucide-react";
import { SlideFront } from "./slide-front";
import { SlideBackend } from "./slide-backend";
import { SlideAll } from "./slide-all";

export const ContainerStack = () => {
    return (
        <div className="col-start-6 row-start-4 col-span-2 row-span-2 overflow-y-hidden rounded-2xl relative ">
            <GlassCard className="flex flex-col gap-2 justify-center">
                <CardHeader className="flex flex-col items-start lg:px-4 xl:px-6 ">
                    {/* <div className="flex gap-2 justify-center items-center text-white">
                        <PocketKnife className="w-4" />
                        <CardTitle className="">My Stack</CardTitle>
                    </div> */}

                    {/* <section className="flex gap-1 items-center ">
                        <span className=" text-white/70">
                            Technologies I specialize in
                        </span>
                    </section> */}
                </CardHeader>
                <CardContent className="lg:px-4 xl:px-6">
                    <div className="flex flex-col justify-between gap-4">
                        {/* full stack development */}
                        {/* <p className="text-white/80 text-xs ">Frontend</p> */}
                        <SlideFront />
                        {/* Database and State Management */}
                        {/* <p className="text-white/80 text-xs ">Backend</p> */}
                        <SlideBackend />
                        {/* DevOps and Deployment */}
                        {/* <p className="text-white/80 text-xs ">Devops and Deployment</p> */}
                        <SlideAll/>
                    </div>
                </CardContent>
            </GlassCard>
        </div>
    );
};
