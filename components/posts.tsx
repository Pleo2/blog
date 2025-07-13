import { BlogPostsClient } from "@/components/posts-client";
import { formatDate, getBlogPosts } from "app/blog/utils";
import { Badge } from "@/components/ui/badge";

export type BlogPostMeta = {
    title: string;
    publishedAt: string;
    summary: string;
    tags?: string[];
};

export function BlogPosts() {
    const allBlogs = getBlogPosts()
        .sort((a, b) => {
            const ad = new Date(a.metadata.publishedAt);
            const bd = new Date(b.metadata.publishedAt);
            return bd.getTime() - ad.getTime();
        })
        .map((post) => ({
            slug: post.slug,
            metadata: post.metadata
        }));
    return <BlogPostsClient posts={allBlogs} />;
}
