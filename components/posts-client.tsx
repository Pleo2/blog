"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { BlogPostMeta } from "@/components/posts";

export function BlogPostsClient({
    posts
}: {
    posts: { slug: string; metadata: BlogPostMeta }[];
}) {
    return (
        <div className="space-y-4">
            {posts.map((post) => {
                const meta = post.metadata;
                const href = `/blog/${post.slug}`;
                return (
                    <Link
                        key={post.slug}
                        className="group block rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200 p-5 border border-white/10 shadow-sm"
                        href={href}
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                            <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums text-xs mb-1 md:mb-0">
                                {meta.publishedAt}
                            </p>
                            <h2 className="text-lg font-semibold text-white tracking-tight group-hover:underline flex-1">
                                {meta.title}
                            </h2>
                        </div>
                        <p className="text-neutral-300 text-sm mt-1 line-clamp-2">
                            {meta.summary}
                        </p>
                        {Array.isArray(meta.tags) && meta.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-2">
                                {meta.tags.map((tag) => (
                                    <Badge
                                        key={tag}
                                        className="bg-white/20 rounded-lg hover:bg-blue-900 text-white px-1.5 py-0.5 text-[10px] sm:text-xs font-medium cursor-pointer transition-all duration-300 flex-shrink-0"
                                    >
                                        #{tag}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </Link>
                );
            })}
        </div>
    );
}
