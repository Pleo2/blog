import { GlassCard } from "@/components/cards/glass-card";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PersonStanding } from "lucide-react";
import HalftoneWaves from "./halftone-waves";

export const Aboutme = () => {
    return (
        <div className="col-start-6 row-start-3 col-span-2 row-span-2 overflow-y-hidden rounded-2xl relative ">
            <HalftoneWaves
                backgroundColor="#042A5C"
                dotColor="#0072F6"
                dotOpacity={0.9}
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <GlassCard className="z-10 backdrop-blur-[2px] gap-2  justify-center">
                    <CardHeader className="flex flex-col items-start z-10">
                        <div className="flex gap-2 justify-center items-center text-white">
                            <PersonStanding className="w-4" />
                            <CardTitle className="">About me</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="">
                        <p className="lg:text-sm xl:text-sm 2xl:text-base">
                            Hey there!🖖 I'm 23, and I share my life with two
                            furry overlords a
                            <strong> chihuahua 🐕 and a poodle 🐩</strong> . My
                            childhood obsession with computers 🧑🏻‍💻 was a good
                            start, but let's be real, the main reason I became a
                            developer 💼 ? These two gotta eat! 🍖 Pretty sure my
                            coding skills are now directly linked to the
                            kibble 🦴 supply chain.
                        </p>
                    </CardContent>
                </GlassCard>
            </div>
        </div>
    );
};
