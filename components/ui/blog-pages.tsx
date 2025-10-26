import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
}

interface BlogPagesProps {
  tagline: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  posts: Post[];
}

const BlogPages = ({
  tagline = "Latest Updates",
  heading = "Blog Posts",
  description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",
  buttonText = "View all articles",
  posts = []
}: BlogPagesProps) => {
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
                    <div className="mb-2 flex items-center gap-3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-5 w-5 object-cover rounded"
                      />
                      <h3 className="text-xl">
                        <Link
                          href={post.url}
                          className="hover:underline"
                        >
                          {post.title}
                        </Link>
                      </h3>
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
                    <p className="text-muted-foreground text-sm">{post.label}</p>
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
