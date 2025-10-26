import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { GlassCard } from "@/components/ui/cards/glass-card";
import { Badge } from "@/components/ui/badge";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar, FileText, Star } from "feather-icons-react";
import { StarIcon, StarsIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";

type BlogPostFrontmatter = {
    title?: string;
    publishedAt?: string;
    summary?: string;
    tags?: string[];
    content?: string;
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

function extractImagesFromContent(content: string): string[] {
    // Buscar imágenes en el contenido del MDX
    const imageRegex = /!\[.*?\]\((.*?)\)/g;
    const images: string[] = [];
    let match;

    while ((match = imageRegex.exec(content)) !== null) {
        if (match[1] && !match[1].startsWith('http')) {
            images.push(match[1]);
        }
    }

    // Imágenes por defecto para la preview
    const defaultImages = ["/working.webp", "/wallpaper.webp", "/working.webp"];

    // Si no se encuentran imágenes en el contenido, usar imágenes por defecto
    if (images.length === 0) {
        return defaultImages;
    }

    // Tomar las primeras 3 imágenes encontradas, rellenar con imágenes por defecto si es necesario
    const result = images.slice(0, 3);
    while (result.length < 3) {
        result.push(defaultImages[result.length % defaultImages.length]);
    }

    return result;
}

export const ContainerBlogPost = () => {
    const post = getLatestPost();
    if (!post) return null;
    const publishedAt =
        typeof post.publishedAt === "string" ? post.publishedAt : "";
    const title = typeof post.title === "string" ? post.title : "Untitled";
    const summary = typeof post.summary === "string" ? post.summary : "";
    const tags = Array.isArray(post.tags) ? post.tags : [];
    const content = typeof post.content === "string" ? post.content : "";

    return (
        <div
            className={cn(
                "mb-3 col-span-full min-h-64 h-ful",
                "sm:mb-0 sm:col-start-4 sm:row-start-3",
                "md:col-start-3 md:row-start-6 ",
                "lg:col-start-4 lg:row-start-5 lg:col-span-2 lg:row-span-3",
                "animate-fade-in-bounce"
            )}
            style={{ animationDelay: '0.7s' }}
        >
            <div
                className={cn(
                    "group col-span-3 relative flex flex-col justify-between overflow-hidden rounded-lg h-full",
                    // light styles
                    "bg-background border border-black/10",
                    "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                    // dark styles
                    "transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                    "min-h-64 h-64 relative p-0 before:content-[''] before:w-full before:h-24 before:blur-2xl transition-all duration-300 ease-in-out hover:scale-[1.01]",
                    "lg:p-0 lg:m-0 lg:justify-center lg:h-full lg:min-h-max lg:w-full",
                    "xl:p-0 gap-2"
                )}
            >
                {/* Contenido del blog post */}
                <div className="absolute inset-0 z-0 p-4">
                    <BuildFeaturedBlogPost
                        title={title}
                        publishedAt={publishedAt}
                        summary={summary}
                        tags={tags}
                        content={content}
                    />
                </div>

                {/* Gradiente overlay */}
                <div className="absolute bottom-0 w-full h-full z-10 bg-gradient-to-t from-[#011949] via-90%-[#011949] to-transparent"></div>

                {/* Contenido del overlay */}
                <div className="pointer-events-none z-10 flex transform-gpu flex-col absolute bottom-0 gap-1 p-4 pb-8 transition-all duration-300 ease-in-out group-hover:-translate-y-10">
                    <div className={cn(
                        "flex gap-2 items-center ",
                    )}>
                        <StarIcon className="h-4 w-4 origin-left transform-gpu text-[#FBCA1D] transition-all duration-300 ease-in-out group-hover:scale-105" />
                        <h3 className="text-xl font-semibold text-white dark:text-white group-hover:scale-[102%] transition-transform duration-300">
                            Personal Blog
                        </h3>
                    </div>

                    <p className="max-w-lg text-neutral-300">My Last Post</p>
                </div>

                <div
                    className={cn(
                        "pointer-events-none absolute bottom-0 z-10 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 pb-8 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
                    )}
                >
                    <Button
                        variant="ghost"
                        asChild
                        size="sm"
                        className="pointer-events-auto rounded-full bg-white/10 hover:bg-white/5 transition-all duration-300 ease-in-out"
                    >
                        <Link href="/blog" prefetch={true}>
                            view more
                            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
                        </Link>
                    </Button>
                </div>
                <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 ease-in-out group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
            </div>
        </div>
    );
};

export function BuildFeaturedBlogPost({
    title = "Untitled",
    publishedAt = "",
    summary = "",
    tags = [],
    content = ""
}: BlogPostFrontmatter) {
    // Extraer imágenes del contenido del post
    const previewImages = extractImagesFromContent(content);

    return (
        <div
            className={cn(
                "w-full h-full flex flex-col gap-2"
            )}
        >
            <CardHeader className="w-full flex-col items-start z-10 lg:gap-0 px-0">
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

            {/* Grid de 3 imágenes en formato cuadrado */}
            <div className="grid grid-cols-3 gap-1 mt-2 mb-2">
                {previewImages.map((image, index) => (
                    <div key={index} className="aspect-square w-full overflow-hidden rounded-md bg-white/10">
                        <img
                            src={image}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            <CardContent className="p-0">
                <p className="text-sm sm:text-xs md:text-sm text-white/70 line-clamp-4 w-full overflow-hidden  lg:line-clamp-3 xl:line-clamp-4 2xl:line-clamp-5">
                    {summary}
                </p>
            </CardContent>
        </div>
    );
}
