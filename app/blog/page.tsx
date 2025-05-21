import { BlogPosts } from "@/components/posts";

export const metadata = {
    title: "Blog",
    description: "Read my blog."
};

export default function Page() {
    return (
        <section
            className={[
                "w-screen h-max pb-36 flex-col flex px-4 mt-4",
                "sm:max-w-2xl",
                "md:h-[100dvh] md:max-w-[98vw]",
                "lg:max-w-[98vw] lg:pb-32",
                "xl:pb-36"
            ].join(" ")}
        >
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                My Blog
            </h1>
            <div
                className={[
                    "h-[63dvh] w-full rounded-lg mt-6 overflow-scroll",
                    "sm:mt-7 md:h-[80dvh]",
                    "md:pb-0 2xl:h-full"
                ].join(" ")}
            >
                <BlogPosts />
            </div>
        </section>
    );
}
