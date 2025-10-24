import { AllBlogPosts } from "@/components/ui/all-blog-posts";
import { getBlogPosts } from "../utils";
import { formatDate } from "../utils";
import { cn } from "@/lib/utils";
import { MainHero } from "@/components/ui/hero/main-hero";

export const metadata = {
    title: "All Articles - Blog",
    description: "Browse all my blog articles, tutorials, and insights on web development."
};

export default function AllArticlesPage() {
    // Obtener todos los posts del blog
    const blogPosts = getBlogPosts()
        .sort((a, b) => {
            const aDate = a.metadata.publishedAt ? new Date(a.metadata.publishedAt) : new Date(0);
            const bDate = b.metadata.publishedAt ? new Date(b.metadata.publishedAt) : new Date(0);
            return bDate.getTime() - aDate.getTime();
        })
        .map((post) => ({
            id: post.slug,
            title: post.metadata.title || "Sin título",
            summary: post.metadata.summary || "Sin resumen disponible",
            publishedAt: post.metadata.publishedAt ? formatDate(post.metadata.publishedAt) : "Sin fecha",
            tags: post.metadata.tags || ["Blog"],
            url: `/blog/${post.slug}`
        }));

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
        <AllBlogPosts
            posts={blogPosts}
        />
    </section>
    );
}
