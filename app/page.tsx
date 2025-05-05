import { Bento } from "@/components/bento/bento";
import { MainHero } from "@/components/hero/main-hero";

export default function Page() {
    return (
        <section className="w-screen px-4 sm:max-w-2xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[70vw] flex-col flex">
            <MainHero />
            <Bento />
        </section>
    );
}
