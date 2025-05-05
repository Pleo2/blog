import { cn } from "@/lib/utils";
import { GlassCard } from "../cards/glass-card";

export const Bento = () => {
    return (
        <div
            className={cn(
                "h-max min-h-[60dvh] flex-col flex mt-7 gap-2  ",
                "sm:grid sm:grid-cols-7 sm:grid-rows-7 sm:h-[65vh]"
            )}
        >
            {/* mini badges mis repositorios/ Happy client / setup / years of expertise */}
            <div className="col-span-3 row-span-2 ">
                <div className="flex gap-2 w-full h-full">
                    <GlassCard />
                    <GlassCard />
                    <GlassCard />
                </div>
            </div>

            {/* profesional experience */}
            <div className="col-span-2 row-span-4 col-start-4 row-start-1">
            <GlassCard />
            </div>
            {/* ultimo blog post */}
            <div className="col-span-3 row-span-2 col-start-1 row-start-3">
                <GlassCard />
            </div>
            {/* my tecnological stack */}
            <div className="col-span-2 row-span-4 col-start-6 row-start-1">
                <GlassCard />
            </div>
            {/* my projects galery */}
            <div className="col-span-5 row-span-3 row-start-5">
                <GlassCard />
            </div>
            {/* call to action */}
            <div className="col-span-2 row-span-3 col-start-6 row-start-5">
                <GlassCard />
            </div>
        </div>
    );
};
