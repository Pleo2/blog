import {extractImagesFromContent, getLatestPost} from "@/app/blog/utils";
import {cn} from "@/lib/utils";
import {CardContent, CardHeader} from "@/components/ui/card";
import {Calendar} from "feather-icons-react";
import {Badge} from "@/components/ui/badge";
import type React from "react";

export function FeaturedBlogPost() {
    // Extraer imágenes del contenido del post
    const post = getLatestPost();
    if (!post) return null;
    const publishedAt =
        typeof post.publishedAt ===   "string" ? post.publishedAt : "";
    const postTitle = typeof post.title ===   "string" ? post.title : "Untitled";
    const postSumary = typeof post.summary ===   "string" ? post.summary : "";
    const postTags = Array.isArray(post.tags) ? post.tags : [];
    const postContent = post.content ===   "string" ? post.content : "";
    const previewImages = extractImagesFromContent(postContent);

    return (
        <div
            className={cn(
                "w-full h-full flex flex-col gap-2"
            )}
        >
            <CardHeader className="w-full flex-col items-start z-10 lg:gap-0 px-0">
                <section className="flex gap-1 items-center w-full lg:mt-2">
                    <Calendar className="w-3 h-3 text-white/70 flex-shrink-0"/>
                    <span className="text-xs text-white/70 whitespace-nowrap overflow-hidden text-ellipsis">
                        {publishedAt}
                    </span>
                </section>
                <h3 className="w-full line-clamp-1 text-sm sm:text-sm md:text-sm font-medium text-white/90 overflow-hidden text-ellipsis lg:text-base xl:text-sm">
                    {postTitle}
                </h3>
                <div className="flex flex-wrap gap-1 mt-1 w-full">
                    {postTags.map((tag) => (
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
                    {postSumary}
                </p>
            </CardContent>
        </div>
    );
}