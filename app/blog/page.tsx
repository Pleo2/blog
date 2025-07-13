import { MainHero } from "@/components/hero/main-hero";
import { BlogPosts } from "@/components/posts";
import { cn } from "@/lib/utils";

export const metadata = {
    title: "Blog",
    description: "Read my blog."
};

export default function Page() {
    return (
        <section
            className={cn(
                "w-screen h-max pb-36 flex-col flex px-4 mt-4",
                "sm:max-w-2xl",
                "md:h-max md:max-w-[98vw]",
                "lg:max-w-[98vw] lg:pb-32",
                "xl:pb-36"
            )}
        >
            <MainHero />
            <div
                className={cn(
                    "h-max w-full rounded-lg mt-6",
                    "sm:mt-7",
                    "md:pb-0"
                )}
            >
                <BlogPosts />
            </div>
        </section>
    );
}
