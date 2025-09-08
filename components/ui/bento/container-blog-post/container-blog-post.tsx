import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { GlassCard } from "@/components/ui/cards/glass-card";
import { BentoCard } from "@/components/ui/magicui/bento-grid";
import { BorderBeam } from "@/components/ui/magicui/border-beam";
import { Badge } from "@/components/ui/badge";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Calendar, FileText, Star } from "feather-icons-react";
import { StarIcon, StarsIcon } from "lucide-react";

type BlogPostFrontmatter = {
    title?: string;
    publishedAt?: string;
    summary?: string;
    tags?: string[];
    // Puedes agregar más campos si los usas en el frontmatter
};

const lastpost = (content: BlogPostFrontmatter) => {
    return {
        Icon: Star,
        name: "Personal Blog",
        description: "My last post",
        href: "#",
        cta: "Learn more",
        className: "",
        background: <BuildFeaturedBlogPost {...content} />
    };
};

function getLatestPost(): (BlogPostFrontmatter & { content: string }) | null {
    const postsDir = path.join(process.cwd(), "app/blog/posts");
    const files = fs
        .readdirSync(postsDir)
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => ({
            file,
            fullPath: path.join(postsDir, file),
            stat: fs.statSync(path.join(postsDir, file))
        }))
        .sort((a, b) => b.stat.mtimeMs - a.stat.mtimeMs);
    if (files.length === 0) return null;
    const latest = files[0];
    const source = fs.readFileSync(latest.fullPath, "utf8");
    const { data, content } = matter(source);
    return {
        ...data,
        content
    };
}

export const ContainerBlogPost = () => {
    const post = getLatestPost();
    if (!post) return null;
    const publishedAt =
        typeof post.publishedAt === "string" ? post.publishedAt : "";
    const title = typeof post.title === "string" ? post.title : "Untitled";
    const summary = typeof post.summary === "string" ? post.summary : "";
    const tags = Array.isArray(post.tags) ? post.tags : [];

    return (
        <div
            className={cn(
                "mb-3 col-span-full min-h-64 h-64",
                "sm:mb-0 sm:col-start-4 sm:row-start-3 sm:row-span-4 sm:col-span-4",
                "md:col-start-3 md:row-start-6 md:row-span-2 md:col-span-3",
                "lg:min-h-max lg:h-full lg:col-span-2 lg:row-span-2 lg:col-start-6 lg:row-start-6 lg:justify-center",
                "animate-fade-in-bounce"
            )}
            style={{ animationDelay: '0.7s' }}
        >
            <GlassCard
                className={cn(
                    "min-h-64 h-64 relative p-0 before:content-[''] before:w-full before:h-24 before:blur-2xl transition-transform hover:scale-[1.01] duration-300",
                    "lg:p-0 lg:m-0 lg:justify-center lg:h-full  lg:min-h-max",
                    "xl:p-0 gap-2"
                )}
            >
                <BentoCard
                    name={"Personal Blog"}
                    className={""}
                    background={
                        <BuildFeaturedBlogPost
                            title={title}
                            publishedAt={publishedAt}
                            summary={summary}
                            tags={tags}
                        />
                    }
                    Icon={StarIcon}
                    description={"My Last Post"}
                    href={""}
                    cta={"Learn more"}
                    key={lastpost.name}
                />
                <BorderBeam duration={8} size={100} />
            </GlassCard>
        </div>
    );
};

export function BuildFeaturedBlogPost({
    title = "Untitled",
    publishedAt = "",
    summary = "",
    tags = []
}: BlogPostFrontmatter) {
    return (
        <GlassCard
            className={cn(
                "absolute bg-white/5 p-4 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group gap-2 hover:blur-2xl"
            )}
        >
            <CardHeader className="w-full flex-col items-start z-10 lg:gap-0 px-0 group-hover:opacity-20 transition-opacity duration-300">
                <section className="flex gap-1 items-center w-full lg:mt-2">
                    <Calendar className="w-3 h-3 text-white/70 flex-shrink-0" />
                    <span className="text-xs text-white/70 whitespace-nowrap overflow-hidden text-ellipsis">
                        {publishedAt}
                    </span>
                </section>
                <h3 className="w-full line-clamp-1 text-sm sm:text-sm md:text-sm font-medium text-white/90 overflow-hidden text-ellipsis lg:text-base xl:text-sm">
                    {title}
                </h3>
                <div className="flex flex-wrap gap-1 mt-1 w-full">
                    {tags.map((tag) => (
                        <Badge
                            key={tag}
                            className="bg-white/20 rounded-lg hover:bg-blue-900 text-white px-1.5 py-0.5 text-[10px] sm:text-xs font-medium cursor-pointer transition-all duration-300 flex-shrink-0"
                        >
                            #{tag}
                        </Badge>
                    ))}
                </div>
            </CardHeader>
            <CardContent className="p-0 group-hover:opacity-20 transition-opacity duration-300">
                <p className="text-sm sm:text-xs md:text-sm text-white/70 line-clamp-4 w-full overflow-hidden  lg:line-clamp-3 xl:line-clamp-4 2xl:line-clamp-5">
                    {summary}
                </p>
            </CardContent>
        </GlassCard>
    );
}
