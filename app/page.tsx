import { Bento } from "@/components/bento/bento";
import { MainHero } from "@/components/hero/main-hero";

export default function Page() {
    return (
        <section className="w-screen flex-col flex px-4 sm:max-w-2xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[80vw] ">
            <MainHero />
            <div className="h-[65vh] rounded-lg  mt-4 sm:mt-7 w-full overflow-scroll 2xl:h-[64vh]">
                <Bento />
            </div>
        </section>
    );
}
