import { BlogPosts } from "@/components/posts";

export const metadata = {
    title: "Blog",
    description: "Read my blog."
};

export default function Page() {
    return (
        <section className="w-screen px-2 max-w-3xl">
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                My Blog
            </h1>
            <BlogPosts />
        </section>
    );
}
