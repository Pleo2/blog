/**
 * Funciones utilitarias para el blog que pueden ejecutarse en el cliente
 */

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

    // Imágenes por defecto para la preview
    const defaultImages = ["/working.webp", "/wallpaper.webp", "/daka-logo.webp"];

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
