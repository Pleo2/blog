import { getLatestPost } from "@/app/blog/utils";
import { FeaturedBlogPost } from "./featured-blog-post";

export function FeaturedBlogPostWrapper() {
    const post = getLatestPost();

    if (!post) return null;

    return (
        <FeaturedBlogPost
            post={{
                title: typeof post.title === "string" ? post.title : "Untitled",
                publishedAt: typeof post.publishedAt === "string" ? post.publishedAt : "",
                summary: typeof post.summary === "string" ? post.summary : "",
                tags: Array.isArray(post.tags) ? post.tags : [],
                content: typeof post.content === "string" ? post.content : ""
            }}
        />
    );
}
