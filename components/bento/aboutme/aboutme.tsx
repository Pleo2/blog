import { GlassCard } from "@/components/cards/glass-card";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PersonStanding, UserRoundSearch } from "lucide-react";
import HalftoneWaves from "./halftone-waves";

export const Aboutme = () => {
    return (
        <div className="relative min-h-64 overflow-hidden rounded-lg col-start-3 row-start-6 col-span-5 lg:min-h-max lg:col-span-2 lg:row-span-3 lg:col-start-6 lg:row-start-1 h-[10rem] lg:h-full">
            <HalftoneWaves
                // backgroundColor="#112F64"
                // dotColor="#003F86"
                // dotOpacity={0.9}
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <GlassCard className="z-10 backdrop-blur-[2px] gap-2  justify-center">
                    <CardHeader className="flex flex-col px-4 items-start z-10">
                        <div className="flex gap-2 justify-center items-center text-white">
                            <UserRoundSearch className="w-4 text-[#FBCA1D]" />
                            <CardTitle className="lg:text-xl">
                                About me
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="px-4">
                        <p className="lg:text-sm xl:text-sm 2xl:text-base">
                            <strong>Hey there!</strong>🖖 I'm 23, and I share my
                            life with two furry overlords a
                            <strong> chihuahua 🐕 and a poodle 🐩</strong> . My
                            childhood obsession with computers 🧑🏻‍💻 was a good
                            start, but let's be real, the main reason I became a
                            developer 💼 ? These two gotta eat! Pretty sure my
                            coding skills are now directly linked to the kibble
                            🦴 supply chain.
                        </p>
                    </CardContent>
                </GlassCard>
            </div>
        </div>
    );
};
