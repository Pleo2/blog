import {TopBar} from "@/components/ui/topbar/topbar";
import {Navbar} from "@/components/ui/navbar/navbar";
import {cn} from "@/lib/utils";
import {MainHero} from "@/components/ui/hero/main-hero";

export const BlogLayoutHero = ({children} : { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col pt-20 md:pt-8 lg:pt-0 xl:pt-8 text-white max-w-[98vw] mx-auto">
            <TopBar/>
            <Navbar/>
            <section className={cn(
                "h-max pb-36 flex-col flex w-full mt-4",
                "lg:pb-32 max-w-full",
                "xl:pb-36"
            )}>
                <MainHero/>
                <div
                    className={cn(
                        "h-full rounded-lg mt-6",
                        "sm:mt-7",
                        "pb-0 h-max flex justify-start items-start"
                    )}
                >
                    {children}
                </div>
            </section>
        </div>
    );
};