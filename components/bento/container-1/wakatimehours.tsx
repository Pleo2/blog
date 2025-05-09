import { Clock } from "feather-icons-react";
import { GlassCard } from "../../cards/glass-card";
import { cn } from "@/lib/utils";

export const WakatimeHours = () => {
    return (
        <GlassCard
            className={cn(
                "flex justify-center items-center flex-col gap-1 cursor-pointer h-full w-full overflow-hidden",
                "sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1"
            )}
        >
            <div className="flex flex-col justify-center items-center gap-2 hover:scale-105 transition-scale duration-400">
                <h2 className="text-5xl sm:text-5xl text-transparent bg-gradient-to-b from-gray-100/90 via-gray-300/50 bg-clip-text flex justify-center items-center">
                    {2000}
                    <span className="text-white/80 text-4xl sm:text-4xl md:text-5xl">
                        +
                    </span>
                </h2>
                <p className="gap-1 text-[10px] sm:text-xs flex items-center border border-white/20 p-1 sm:p-2 rounded-lg text-white/80 w-28 sm:w-32 md:w-36 justify-center whitespace-nowrap overflow-hidden text-ellipsis">
                    <span>
                        <Clock className="w-3 sm:w-4" />
                    </span>
                    Hours of Code
                </p>
            </div>
        </GlassCard>
    );
};
