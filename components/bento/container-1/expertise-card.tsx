import { Star } from "lucide-react";
import { GlassCard } from "../../cards/glass-card";
import { cn } from "@/lib/utils";
import { Meteors } from "@/components/magicui/meteors";
import { NumberTicker } from "@/components/magicui/number-ticker";

export const ExpertiseCard = () => {
    return (
        <GlassCard
            className={cn(
                "relative flex justify-center items-center flex-col gap-1 cursor-pointer h-full w-full overflow-hidden",
                "sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1"
            )}
        >
            <Meteors number={30} />
            <div className="flex flex-col justify-center items-center gap-2 hover:scale-105 transition-scale duration-400">
                <div className="flex gap-2 items-center h-max">
                    <NumberTicker
                        value={3}
                        className="whitespace-pre-wrap text-5xl sm:text-5xl lg:text-4xl xl:text-5xl text-transparent bg-gradient-to-b from-white via-gray-100/80 bg-clip-text flex justify-center items-center font-medium tracking-tighter"
                    />
                    <span className=" text-4xl sm:text-4xl md:text-5xl lg:text-2xl xl:text-5xl text-transparent bg-gradient-to-b from-white via-gray-100/80 bg-clip-text  ">
                        +
                    </span>
                </div>

                <p
                    className={cn(
                        "gap-1 flex text-[10px] rounded-lg text-white/80 w-28 items-center border border-white/20 p-1 justify-center whitespace-nowrap overflow-hidden text-ellipsis",
                        "sm:p-2 sm:text-xs sm:w-32 ",
                        "md:w-36",
                        "lg:text-[10px] lg:px-1 lg:w-max",
                        "xl:p-2 text-xs w-32"
                    )}
                >
                    <span>
                        <Star className="w-3 sm:w-4" />
                    </span>
                    Yrs. Experience
                </p>
            </div>
        </GlassCard>
    );
};
