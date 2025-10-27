import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import Script from "next/script";
import { formatDate, getBlogPosts } from "app/blog/utils";
import { baseUrl } from "app/sitemap";

export async function generateStaticParams() {
    const posts = getBlogPosts();

    return posts.map((post) => ({
        slug: post.slug
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogPosts().find((post) => post.slug === slug);
    if (!post) {
        return;
    }
    if (!isMeta(post.metadata) || !post.metadata.title) {
        return notFound();
    }

    const {
        title,
        publishedAt: publishedTime,
        summary: description,
        image
    } = post.metadata;
    const ogImage = image
        ? image
        : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
            publishedTime,
            url: `${baseUrl}/blog/${slug}`,
            images: [
                {
                    url: ogImage
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage]
        }
    };
}

function isMeta(obj: unknown): obj is {
    title?: string;
    publishedAt?: string;
    summary?: string;
    image?: string;
    autor?: string;
} {
    return typeof obj === "object" && obj !== null && "title" in obj;
}

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogPosts().find((post) => post.slug === slug);

    if (!post) {
        notFound();
    }
    const meta = isMeta(post.metadata) ? post.metadata : {};

    return (
        <div className="w-full min-h-screen py-8 px-4 ">
            {/*
              Usar Script para JSON-LD es seguro aquí porque solo se inserta un objeto JSON-LD
              generado por el propio backend, sin interpolar datos de usuario ni contenido externo.
              Esto es una práctica recomendada para SEO y rich snippets en Google.
            */}
            <Script type="application/ld+json" id="ld-json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    headline: meta.title,
                    datePublished: meta.publishedAt,
                    dateModified: meta.publishedAt,
                    description: meta.summary,
                    image: meta.image
                        ? `${baseUrl}${meta.image}`
                        : `/og?title=${encodeURIComponent(
                            meta.title || ""
                        )}`,
                    url: `${baseUrl}/blog/${slug}`,
                    author: {
                        "@type": "Person",
                        name: meta.autor || "Jose Moreno"
                    }
                })}
            </Script>
            <div className="max-w-4xl mx-auto">
                <article className="overflow-hidden">
                    {/* Header del artículo */}
                    <div className="px-6 py-8 md:px-12 md:py-12 border-b border-slate-200 dark:border-slate-700">
                        <h1 className="font-bold text-3xl md:text-4xl  text-white tracking-tight mb-4">
                            {meta.title}
                        </h1>
                        <div className="flex items-center text-sm  text-white">
                            <time dateTime={meta.publishedAt}>
                                {formatDate(meta.publishedAt || "")}
                            </time>
                        </div>
                    </div>

                    {/* Contenido del artículo */}
                    <div className="px-6 py-8 md:px-12 md:py-12">
                        <div className="prose prose-slate dark:prose-invert max-w-none text-base md:text-lg">
                            <CustomMDX source={post.content} />
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
