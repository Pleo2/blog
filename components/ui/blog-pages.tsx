import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string[];
  author: string;
  published: string;
  url: string;
  image: string;
}


const BlogPages = ({ posts }: { posts: Post[] }) => {
  return (
    <section className="w-full h-max">
      <div className="container h-max w-full">
        <div className="w-full">
          <div className="space-y-8">
            {posts.map((post, idx) => (
              <div
                key={post.id}
                className="border-border border-b pb-6 last:border-b-0"
              >

                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <div className="md:w-2/3">

                    <div className="mb-2 flex flex-col items-start gap-3">

                      <h3 className="text-xl">
                        <Link
                          href={post.url}
                          className="hover:underline"
                        >
                          {post.title}
                        </Link>
                      </h3>

                        <div className="flex flex-wrap gap-1 mb-2 justify-start">
                            {post.label.map((tag, tagIndex) => (
                                <Badge
                                    key={tagIndex}
                                    variant="secondary"
                                    className="text-xs bg-blue-200/20"
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>

                    </div>

                    <p className="text-muted-foreground mb-3 text-sm">
                      {post.author} • {post.published}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {post.summary}
                    </p>
                  </div>
                  <div className="text-right md:w-1/3 md:text-right">
                    <p className="mb-1 text-sm font-medium">{post.published}</p>

                    <Link
                      href={post.url}
                      prefetch={true}
                      className="text-foreground flex items-center justify-end hover:underline mt-2"
                    >
                      Read more
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { BlogPages };
