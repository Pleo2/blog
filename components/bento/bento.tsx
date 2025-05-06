import { cn } from "@/lib/utils";
import { GlassCard } from "../cards/glass-card";
import { Container_1 } from "./container-1/container-1";

export const Bento = () => {
    return (
        <div
            className={cn(
                "flex-col flex gap-2 relative",
                "sm:grid sm:grid-cols-7 sm:grid-rows-7 sm:h-[65vh] xl:h-[55vh] 2xl:h-full"
            )}
        >
            <Container_1 />
            {/* profesional experience */}
            <div className="col-start-3 row-start-1 col-span-3 row-span-2 xl:col-span-2 xl:row-span-4 xl:col-start-4 xl:row-start-1">
                <GlassCard></GlassCard>
            </div>
            {/* ultimo blog post */}
            <div className="col-start-3 row-start-3 row-span-3 col-span-3 xl:col-span-3 xl:row-span-2 xl:col-start-1 xl:row-start-3">
                <GlassCard></GlassCard>
            </div>
            {/* my tecnological stack */}
            <div className="col-start-3 row-start-6 col-span-5 xl:col-span-2 xl:row-span-4 xl:col-start-6 xl:row-start-1">
                <GlassCard></GlassCard>
            </div>
            {/* my projects galery */}
            <div className="col-start-6 row-start-1 row-span-3 col-span-2 xl:col-span-5 xl:row-span-3 xl:row-start-5">
                <GlassCard></GlassCard>
            </div>
            {/* call to action */}
            <div className="col-start-6 row-start-4 row-span-2 col-span-2 xl:col-span-2 xl:row-span-3 xl:col-start-6 xl:row-start-5">
                <GlassCard></GlassCard>
            </div>
        </div>
    );
};
