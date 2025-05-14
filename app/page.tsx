import { Bento } from "@/components/bento/bento";
import { MainHero } from "@/components/hero/main-hero";
import { cn } from "@/lib/utils";

export default function Page() {
    return (
        <section
            className={cn(
                "w-screen h-max pb-36 flex-col flex px-4 mt-4",
                "sm:max-w-2xl",
                "md:h-[100dvh] md:max-w-[98vw]",
                "lg:max-w-[98vw] "
            )}
        >
            <MainHero />
            <div
                className={cn(
                    "h-[63dvh] w-full rounded-lg mt-6 overflow-scroll",
                    "sm:mt-7 md:h-[80dvh]",
                    "md:pb-0 2xl:h-full"
                )}
            >
                <Bento />
            </div>
        </section>
    );
}
