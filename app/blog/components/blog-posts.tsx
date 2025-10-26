import { BlogPostsClient } from "./blog-posts-client";
import { formatDate, getBlogPosts } from "../utils";
import { Badge } from "@/components/ui/badge";

export type BlogPostMeta = {
    title?: string;
    publishedAt?: string;
    summary?: string;
    tags?: string[];
};

function isMeta(obj: unknown): obj is BlogPostMeta {
    return typeof obj === "object" && obj !== null && "publishedAt" in obj;
}

export function BlogPosts() {
    const allBlogs = getBlogPosts()
        .sort((a, b) => {
            const am = isMeta(a.metadata) ? a.metadata : {};
            const bm = isMeta(b.metadata) ? b.metadata : {};
            const ad = am.publishedAt ? new Date(am.publishedAt) : new Date(0);
            const bd = bm.publishedAt ? new Date(bm.publishedAt) : new Date(0);
            return bd.getTime() - ad.getTime();
        })
        .map((post) => ({
            slug: post.slug,
            metadata: isMeta(post.metadata) ? post.metadata : {}
        }));
    return <BlogPostsClient posts={allBlogs} />;
}
