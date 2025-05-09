import { cn } from "@/lib/utils";
import { ExpertiseCard } from "./expertise-card";
import { RepositorioCard } from "./repository-card";
import { WakatimeHours } from "./wakatimehours";

export const Container_1 = () => {
    return (
        <div className="row-span-6 col-span-2 row-start-1 col-start-1 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-start-1 xl:row-start-1 xl:row-span-2 xl:col-span-3 overflow-hidden">
            <div
                className={cn(
                    "flex flex-col gap-2 sm:gap-3 md:gap-4 w-full h-full overflow-hidden",
                    "sm:flex-col sm:w-full",
                    "md:flex-col",
                    // "lg:flex-col",
                    "xl:flex-row"
                )}
            >
                <ExpertiseCard />
                <RepositorioCard numberRepositories={80} />
                <WakatimeHours />
            </div>
        </div>
    );
};
