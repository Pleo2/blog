import { Star } from "lucide-react";
import { GlassCard } from "../../cards/glass-card";
import { cn } from "@/lib/utils";

export const ExpertiseCard = () => {
    return (
        <GlassCard
            className={cn(
                "flex justify-center items-center flex-col gap-1 cursor-pointer h-full w-full",
                "sm:size-full sm:grow-3"
            )}
        >
            <div className="flex flex-col justify-center items-center gap-2 hover:scale-105 transition-scale duration-400">
                <h2 className="text-6xl text-transparent bg-gradient-to-b from-gray-100/90 via-gray-300/50 bg-clip-text flex justify-center items-center">
                    03 <span className="text-white/80 text-5xl">+</span>
                </h2>
                <p className="gap-1 flex text-xs items-center border border-white/20 p-2 rounded-lg text-white/80 w-36 justify-center">
                    <span>
                        <Star className="w-4" />
                    </span>
                    Years of Expertise
                </p>
            </div>
        </GlassCard>
    );
};
