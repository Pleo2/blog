import { ExternalLink, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/cards/glass-card";
import { BorderBeam } from "@/components/ui/magicui/border-beam";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  summary: string;
  publishedAt: string;
  tags: string[];
  url: string;
}

interface AllBlogPostsProps {
  title?: string;
  posts: Post[];
}

const AllBlogPosts = ({
  posts = [],
}: AllBlogPostsProps) => {
  return (
    <div className="max-w-screen h-4/5 mt-16 rounded-xl ">
      <div className="space-y-6 h-full overflow-auto rounded-xl">
        {posts.map((post, index) => (
          <div key={post.id} className="group">
            <GlassCard
              className={cn(
                "relative p-6 transition-all duration-300 cursor-pointer",
                "before:content-[''] before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-500/10 before:to-purple-500/10 before:opacity-0 before:transition-opacity before:duration-300",
                "group-hover:before:opacity-100"
              )}
            >
              
              <article className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-white/70" />
                      <time className="text-sm text-white/70">
                        {post.publishedAt}
                      </time>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                      <Link href={post.url} prefetch={true} className="hover:underline decoration-blue-400/50">
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-white/80 mb-6 leading-relaxed text-lg">
                      {post.summary}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          className="bg-white/20 text-white/90 hover:bg-blue-500/30 hover:text-white transition-all duration-300 px-3 py-1 rounded-full border border-white/20"
                        >
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={post.url}
                    prefetch={true}
                    className="ml-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={`Read more about ${post.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </article>
            </GlassCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export { AllBlogPosts };
