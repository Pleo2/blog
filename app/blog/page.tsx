import { MainHero } from "@/components/ui/hero/main-hero";
import { BlogPages } from "@/components/ui/blog-pages";
import { getBlogPosts } from "./utils";
import { formatDate } from "./utils";
import { cn } from "@/lib/utils";

export const metadata = {
    title: "Blog",
    description: "Read my blog."
};

export default function Page() {
    // Obtener los posts del blog
    const blogPosts = getBlogPosts()
        .sort((a, b) => {
            const aDate = a.metadata.publishedAt ? new Date(a.metadata.publishedAt) : new Date(0);
            const bDate = b.metadata.publishedAt ? new Date(b.metadata.publishedAt) : new Date(0);
            return bDate.getTime() - aDate.getTime();
        })
        .slice(0, 6) // Limitar a 6 posts
        .map((post) => ({
            id: post.slug,
            title: post.metadata.title || "Sin título",
            summary: post.metadata.summary || "Sin resumen disponible",
            label: post.metadata.tags?.[0] || "Blog",
            author: "Tu nombre", // Puedes personalizar esto
            published: post.metadata.publishedAt ? formatDate(post.metadata.publishedAt) : "Sin fecha",
            url: `/blog/${post.slug}`,
            image: post.metadata.image || "/working.webp" // Imagen por defecto
        }));

    return (
        <div className="w-full min-h-screen py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <MainHero />
                <div className="mt-12">
                    <BlogPages
                        tagline="Latest Updates"
                        heading="Blog Posts"
                        description="Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights."
                        buttonText="View all articles"
                        buttonUrl="/blog/all"
                        posts={blogPosts}
                    />
                </div>
            </div>
        </div>
    );
}
