import { BlogPosts } from "@/components/posts";

export const metadata = {
    title: "Blog",
    description: "Read my blog."
};

export default function Page() {
    return (
        <section className="w-screen px-4 sm:max-w-2xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[80vw] flex-col flex">
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                My Blog
            </h1>
            <BlogPosts />
        </section>
    );
}
