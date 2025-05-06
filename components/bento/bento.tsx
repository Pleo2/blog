

import { cn } from "@/lib/utils";
import { GlassCard } from "../cards/glass-card";
import { ExpertiseCard } from "./expertise-card";
import { RepositorioCard } from "./repository-card";
import { WakatimeHours } from "./wakatimehours";

export const Bento = () => {
    return (
        <div
            className={cn(
                "h-max flex-col flex mt-7 gap-2  ",
                "sm:grid sm:grid-cols-7 sm:grid-rows-7 sm:h-[65vh] xl:h-[55vh]"
            )}
        >
            {/* mini badges mis repositorios/ Happy client / setup / years of expertise */}
            <div className="col-span-3 row-span-2 ">
                <div
                    className={cn(
                        "flex flex-col gap-2 w-full h-full",
                        "sm:flex-row sm:flex sm:w-full"
                    )}
                >
                    <ExpertiseCard />
                    <RepositorioCard numberRepositories={80} />
                    <WakatimeHours />
                </div>
            </div>

            {/* profesional experience */}
            <div className="col-span-2 row-span-4 col-start-4 row-start-1">
                <GlassCard>{/* <App fallback={{}} /> */}</GlassCard>
            </div>
            {/* ultimo blog post */}
            <div className="col-span-3 row-span-2 col-start-1 row-start-3">
                <GlassCard></GlassCard>
            </div>
            {/* my tecnological stack */}
            <div className="col-span-2 row-span-4 col-start-6 row-start-1">
                <GlassCard></GlassCard>
            </div>
            {/* my projects galery */}
            <div className="col-span-5 row-span-3 row-start-5">
                <GlassCard></GlassCard>
            </div>
            {/* call to action */}
            <div className="col-span-2 row-span-3 col-start-6 row-start-5">
                <GlassCard></GlassCard>
            </div>
        </div>
    );
};
