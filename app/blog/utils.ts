import fs from "node:fs";
import path from "node:path";

type Metadata = {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    tags?: string[];
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
        if (key.trim() === "tags") {
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
        } else {
            value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
            if (key.trim() !== "") {
                const k = key.trim() as keyof Metadata;
                if (
                    k === "title" ||
                    k === "publishedAt" ||
                    k === "summary" ||
                    k === "image"
                ) {
                    metadata[k] = value;
                }
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
