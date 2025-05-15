import { Clock } from "feather-icons-react";
import { GlassCard } from "../../cards/glass-card";
import { cn } from "@/lib/utils";
import { Meteors } from "@/components/magicui/meteors";

export const WakatimeHours = () => {
    return (
        <GlassCard
            className={cn(
                "relative flex justify-center items-center flex-col gap-1 cursor-pointer h-full w-full overflow-hidden",
                "sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1"
            )}
        >
            <Meteors number={40} />

            <div className="flex flex-col justify-center items-center gap-2 hover:scale-105 transition-scale duration-400">
                <h2
                    className={cn(
                        "text-transparent bg-gradient-to-b from-gray-100/90 via-gray-300/50 bg-clip-text flex justify-center items-center",
                        "text-5xl",
                        "sm:text-5xl",
                        "lg:text-4xl",
                        "xl:text-5xl"
                    )}
                >
                    {2000}
                    <span
                        className={cn(
                            "text-white/80",
                            "text-4xl",
                            "sm:text-4xl",
                            "md:text-5xl",
                            "lg:text-2xl",
                            "xl:text-5xl"
                        )}
                    >
                        +
                    </span>
                </h2>
                <p
                    className={cn(
                        "gap-1 flex items-center border border-white/20 rounded-lg text-white/80 justify-center whitespace-nowrap overflow-hidden text-ellipsis",
                        "text-[10px] p-1 w-28",
                        "sm:text-xs sm:p-2 sm:w-32",
                        "md:w-36",
                        "lg:text-[10px] lg:px-1 lg:w-max",
                        "xl:text-xs p-2 w-36"
                    )}
                >
                    <span>
                        <Clock className="w-3 sm:w-4" />
                    </span>
                    Hours of Code
                </p>
            </div>
        </GlassCard>
    );
};
