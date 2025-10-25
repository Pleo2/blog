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
        <div className="w-full min-h-screen py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <MainHero />
                <div className="mt-12">
                    <AllBlogPosts
                        posts={blogPosts}
                    />
                </div>
            </div>
        </div>
    );
}
