import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

type Metadata = {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    tags?: string[];
    autor?: string;
};
export type BlogPostFrontmatter = {
    title?: string;
    publishedAt?: string;
    summary?: string;
    tags?: string[];
    autor?: string;
    content?: string;
};

function parseFrontmatter(fileContent: string): { metadata: Partial<Metadata>; content: string } {
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    const match = frontmatterRegex.exec(fileContent);
    if (!match) return { metadata: {}, content: fileContent };
    const frontMatterBlock = match[1];
    const content = fileContent.replace(frontmatterRegex, "").trim();
    const frontMatterLines = frontMatterBlock.trim().split("\n");
    const metadata: Partial<Metadata> = {};

    for (let i = 0; i < frontMatterLines.length; i++) {
        const line = frontMatterLines[i];
        const [key, ...valueArr] = line.split(": ");
        let value = valueArr.join(": ").trim();

        if (key.trim() === "tags" || key.trim() === "tags:") {
            // Soporta tags como array YAML
            if (value.startsWith("[")) {
                metadata.tags = value
                    .replace(/\[|\]/g, "")
                    .split(",")
                    .map((t) => t.trim().replace(/^['"]|['"]$/g, ""))
                    .filter(Boolean);
            } else {
                // tags:
                //   - a
                //   - b
                //   - c
                const tags: string[] = [];
                let j = i + 1;
                while (
                    j < frontMatterLines.length &&
                    frontMatterLines[j].trim().startsWith("-")
                ) {
                    tags.push(frontMatterLines[j].replace("-", "").trim());
                    j++;
                }
                metadata.tags = tags;
                i = j - 1;
            }
        } else if (key.trim() !== "") {
            value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
            const k = key.trim() as keyof Metadata;
            if (
                k === "title" ||
                k === "publishedAt" ||
                k === "summary" ||
                k === "image" ||
                k === "autor"
            ) {
                metadata[k] = value;
            }
        }
    }

    return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath) {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    return parseFrontmatter(rawContent);
}

function getMDXData(dir) {
    const mdxFiles = getMDXFiles(dir);
    return mdxFiles.map((file) => {
        const { metadata, content } = readMDXFile(path.join(dir, file));
        const slug = path.basename(file, path.extname(file));

        return {
            metadata,
            slug,
            content
        };
    });
}

export function getBlogPosts() {
    return getMDXData(path.join(process.cwd(), "app", "blog", "posts"));
}

export function formatDate(date: string, includeRelative = false) {
    const currentDate = new Date();
    let normalizedDate = date;
    if (!date.includes("T")) {
        normalizedDate = `${date}T00:00:00`;
    }
    const targetDate = new Date(normalizedDate);

    const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
    const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
    const daysAgo = currentDate.getDate() - targetDate.getDate();

    let formattedDate = "";

    if (yearsAgo > 0) {
        formattedDate = `${yearsAgo}y ago`;
    } else if (monthsAgo > 0) {
        formattedDate = `${monthsAgo}mo ago`;
    } else if (daysAgo > 0) {
        formattedDate = `${daysAgo}d ago`;
    } else {
        formattedDate = "Today";
    }

    const fullDate = targetDate.toLocaleString("en-us", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    if (!includeRelative) {
        return fullDate;
    }

    return `${fullDate} (${formattedDate})`;
}

export function getLatestPost(): (BlogPostFrontmatter & { content: string }) | null {
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

export function extractImagesFromContent(content: string): string[] {
    // Buscar imágenes en el contenido del MDX - formato markdown estándar
    const markdownImageRegex = /!\[.*?\]\((.*?)\)/g;
    const images: string[] = [];
    let match;

    while ((match = markdownImageRegex.exec(content)) !== null) {
        if (match[1] && !match[1].startsWith('http')) {
            images.push(match[1]);
        }
    }

    // Buscar imágenes en componentes JSX (ImageCollageAlt, MediaCollage, SimpleImageGrid)
    // Filtrar solo imágenes, excluir videos
    const jsxImageRegex = /src:\s*['"](https?:\/\/[^'"]+)['"]/g;
    while ((match = jsxImageRegex.exec(content)) !== null) {
        if (match[1] && !match[1].match(/\.(mp4|mov|avi|mkv)$/i)) {
            images.push(match[1]);
        }
    }

    // Buscar imágenes en atributos alt de componentes de imagen
    const altImageRegex = /alt:\s*['"]([^'"]*?)['"]/g;
    while ((match = altImageRegex.exec(content)) !== null) {
        // No agregar duplicados
        if (!images.some(img => img.includes(match[1]))) {
            // Buscar la imagen correspondiente a este alt
            const beforeAlt = content.substring(0, match.index);
            const srcMatch = beforeAlt.match(/src:\s*['"](https?:\/\/[^'"]+)['"]/);
            if (srcMatch && srcMatch[1] && !srcMatch[1].match(/\.(mp4|mov|avi|mkv)$/i)) {
                images.push(srcMatch[1]);
            }
        }
    }

    // Imágenes por defecto para la preview
    const defaultImages = ["/working.webp", "/wallpaper.webp", "/daka-logo.webp"];

    // Si no se encuentran imágenes en el contenido, usar imágenes por defecto
    if (images.length === 0) {
        return defaultImages;
    }

    // Eliminar duplicados y tomar hasta 8 imágenes
    const uniqueImages = Array.from(new Set(images));
    const result = uniqueImages.slice(0, 8);
    
    // Rellenar con imágenes por defecto si es necesario
    while (result.length < 4) {
        result.push(defaultImages[result.length % defaultImages.length]);
    }

    return result;
}

export function getFirstImageFromContent(content: string): string {
    // Buscar la primera imagen en el contenido del MDX - formato markdown estándar
    const markdownImageRegex = /!\[.*?\]\((.*?)\)/;
    const markdownMatch = markdownImageRegex.exec(content);
    
    if (markdownMatch && markdownMatch[1] && !markdownMatch[1].startsWith('http')) {
        return markdownMatch[1];
    }

    // Buscar la primera imagen en componentes JSX (ImageCollageAlt, MediaCollage, SimpleImageGrid)
    // Filtrar solo imágenes, excluir videos
    const jsxImageRegex = /src:\s*['"](https?:\/\/[^'"]+)['"]/;
    const jsxMatch = jsxImageRegex.exec(content);
    
    if (jsxMatch && jsxMatch[1] && !jsxMatch[1].match(/\.(mp4|mov|avi|mkv)$/i)) {
        return jsxMatch[1];
    }

    // Si no se encuentra ninguna imagen, usar imagen por defecto
    return "/working.webp";
}

export const blogPosts = getBlogPosts()
    .sort((a, b) => {
        const aDate = a.metadata.publishedAt ? new Date(a.metadata.publishedAt) : new Date(0);
        const bDate = b.metadata.publishedAt ? new Date(b.metadata.publishedAt) : new Date(0);
        return bDate.getTime() - aDate.getTime();
    })
    .slice(0, 6) // Limitar a 6 posts
    .map((post) => ({
        id: post.slug,
        title: post.metadata.title || "Sin título",
        summary: post.metadata.summary || "Sin resumen disponible",
        label: Array.isArray(post.metadata.tags) ? post.metadata.tags : [],
        author: post.metadata.autor || 'Jose Moreno', // Usar autor del frontmatter o valor por defecto
        published: post.metadata.publishedAt ? formatDate(post.metadata.publishedAt) : "Sin fecha",
        url: `/blog/${post.slug}`,
        image: post.metadata.image || "/working.webp" // Imagen por defecto
    }));

export const stackPosts = getBlogPosts()
    .sort((a, b) => {
        const aDate = a.metadata.publishedAt ? new Date(a.metadata.publishedAt) : new Date(0);
        const bDate = b.metadata.publishedAt ? new Date(b.metadata.publishedAt) : new Date(0);
        return bDate.getTime() - aDate.getTime();
    })
    .slice(0, 1) // Solo el primer post (más reciente)
    .map((post) => ({
        ...post,
        allImages: extractImagesFromContent(post.content)
    }));