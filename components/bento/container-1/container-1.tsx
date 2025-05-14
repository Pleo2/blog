import { cn } from "@/lib/utils";
import { ExpertiseCard } from "./expertise-card";
import { RepositorioCard } from "./repository-card";
import { WakatimeHours } from "./wakatimehours";

export const Container_1 = () => {
    return (
        <div
            className={cn(
                "row-span-6 col-span-2 row-start-1 col-start-1",
                "sm:col-span-2",
                "md:col-span-2",
                "lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:col-span-3 overflow-hidden"
            )}
        >
            <div
                className={cn(
                    "flex flex-col gap-2 sm:gap-3 md:gap-2 w-full h-full overflow-hidden",
                    "sm:flex-row",
                    "md:flex-row",
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
