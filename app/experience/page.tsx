import { MainHero } from "@/components/ui/hero/main-hero";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ExperiencePage() {
    return (
        <section
            className={cn(
                "w-screen h-max pb-36 flex-col flex px-4 mt-4",
                "sm:max-w-2xl",
                "md:h-[100dvh] md:max-w-[98vw]",
                "lg:max-w-[98vw] lg:pb-32",
                "xl:pb-36"
            )}
        >
            <MainHero />
            <div
                className={cn(
                    "h-[63dvh] w-full rounded-lg mt-6 overflow-hidden",
                    "sm:mt-7 md:h-[80dvh]",
                    "md:pb-0 2xl:h-full"
                )}
            >
                <div className="w-full h-full grid place-content-center">
                    <Image
                        className="rounded-lg h-max w-max"
                        src="/working.webp"
                        alt="Experience"
                        width={600}
                        height={600}
                    />
                    <p className="text-white/80 text-xl font-semibold text-center">
                        Sorry, I'm still working on this section
                    </p>
                </div>
                {/* <Bento /> */}
            </div>
        </section>
    );
}
