import { TopBar } from "@/components/ui/topbar/topbar";
import { Navbar } from "@/components/ui/navbar/navbar";
import { Bento } from "@/components/ui/bento/bento";
import { cn } from "@/lib/utils";
import { MainHero } from "@/components/ui/hero/main-hero";

export default function HomePage() {
    return (
        <main className="fondo-con-blur bg-blue-950 dark:brightness-100 grid place-content-center content-start h-screen w-screen text-white fondo-con-blur after:content-[''] after:blur-xl after:bg-[url('https://pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev/wallpaper.webp')] after:bg-cover after:bg-center after:absolute after:w-full after:h-full ">
            <div className="relative z-10 flex flex-col pt-20 md:pt-8 lg:pt-0 xl:pt-8">
                <TopBar />
                <Navbar />

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

                        <Bento />
                    </div>
                </section>
            </div>
        </main>
    );
} 