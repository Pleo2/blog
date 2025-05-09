import { Bento } from "@/components/bento/bento";
import { MainHero } from "@/components/hero/main-hero";

export default function Page() {
    return (
        <section className="w-screen h-max md:h-[100dvh] pb-36 flex-col flex px-4 sm:max-w-2xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[95vw] ">
            <MainHero />
            <div className="h-[75vh] rounded-lg  pb-24 md:pb-0 mt-4 sm:mt-7 w-full overflow-scroll 2xl:h-full">
                <Bento />
            </div>
        </section>
    );
}
