import { cn } from "@/lib/utils";
import { ExpertiseCard } from "./expertise-card";
import { RepositorioCard } from "./repository-card";
import { WakatimeHours } from "./wakatimehours";

export const Container_1 = () => {
    return (
        <div className="row-span-6 col-span-2 row-start-1 col-start-1 xl:col-start-1 xl:row-start-1 xl:row-span-2 xl:col-span-3">
            <div
                className={cn(
                    "flex flex-col gap-2 w-full h-full",
                    "xl:flex-row sm:w-full"
                )}
            >
                <ExpertiseCard />
                <RepositorioCard numberRepositories={80} />
                <WakatimeHours />
            </div>
        </div>
    );
};
