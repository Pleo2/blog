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

export function generateMetadata({ params }) {
    const post = getBlogPosts().find((post) => post.slug === params.slug);
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
            url: `${baseUrl}/blog/${post.slug}`,
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
} {
    return typeof obj === "object" && obj !== null && "title" in obj;
}

export default function Blog({ params }) {
    const post = getBlogPosts().find((post) => post.slug === params.slug);

    if (!post) {
        notFound();
    }
    const meta = isMeta(post.metadata) ? post.metadata : {};

    return (
        <section
            className={[
                "w-screen h-max pb-36 flex-col flex px-4 mt-4",
                "sm:max-w-2xl",
                "md:h-[100dvh] md:max-w-[98vw]",
                "lg:max-w-[98vw] lg:pb-32",
                "xl:pb-36"
            ].join(" ")}
        >
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
                    url: `${baseUrl}/blog/${post.slug}`,
                    author: {
                        "@type": "Person",
                        name: "My Portfolio"
                    }
                })}
            </Script>
            <div className="w-full max-w-4xl mx-auto">
                <div className="rounded-2xl bg-white/5 border border-white/10 shadow-xl backdrop-blur-md px-6 py-8 md:px-12 md:py-12 flex flex-col  mt-8">
                    <h1 className="font-extrabold text-3xl md:text-4xl text-white tracking-tight mb-2 drop-shadow-lg">
                        {meta.title}
                    </h1>
                    <div className="flex justify-between items-center text-sm">
                        <p className="text-sm text-neutral-300 dark:text-neutral-400">
                            {formatDate(meta.publishedAt || "")}
                        </p>
                    </div>
                    <div
                        className={[
                            "h-[63dvh] w-full rounded-lg overflow-y-auto",
                            "sm:mt-4 md:h-[60dvh]",
                            "md:pb-0 border border-white/10 bg-white/5 shadow-inner"
                        ].join(" ")}
                    >
                        <article className="prose prose-invert max-w-none text-neutral-100 text-base md:text-lg px-2">
                            <CustomMDX source={post.content} />
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
