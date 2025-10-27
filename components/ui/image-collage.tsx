"use client";

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImageCollageProps {
    images: {
        src: string;
        alt: string;
        caption?: string;
    }[];
    className?: string;
}

interface MediaItem {
    src: string;
    alt: string;
    caption?: string;
    type?: 'image' | 'video';
}

interface MediaCollageProps {
    items: MediaItem[];
    className?: string;
}

export function ImageCollage({ images, className = '' }: ImageCollageProps) {
    if (images.length !== 3) {
        console.warn('ImageCollage expects exactly 3 images');
        return null;
    }

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 my-8", className)}>
            {/* Primera imagen - ocupa toda la primera fila */}
            <div className="md:col-span-2 relative group rounded-lg">
                <div className="aspect-square md:aspect-[2/1] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image
                        src={images[0].src}
                        alt={images[0].alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                </div>
                {images[0].caption && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
                        {images[0].caption}
                    </p>
                )}
            </div>

            {/* Segunda y tercera imagen - ocupan el espacio restante */}
            {images.slice(1).map((image, index) => (
                <div key={index + 1} className="relative group rounded-lg">
                    <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        />
                    </div>
                    {image.caption && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
                            {image.caption}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}

// Componente alternativo con layout diferente (primera imagen ocupa toda la fila, otras dos abajo)
export function ImageCollageAlt({ images, className = '' }: ImageCollageProps) {
    if (images.length !== 3) {
        console.warn('ImageCollageAlt expects exactly 3 images');
        return null;
    }

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 my-8 ${className}`}>
            {/* Primera imagen - ocupa toda la primera fila */}
            <div className="md:col-span-2 relative group rounded-lg">
                <div className="aspect-square md:aspect-[2/1] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image
                        src={images[0].src}
                        alt={images[0].alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                </div>
                {images[0].caption && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic rounded-lg">
                        {images[0].caption}
                    </p>
                )}
            </div>

            {/* Segunda y tercera imagen - ocupan el espacio restante */}
            {images.slice(1).map((image, index) => (
                <div key={index + 1} className="relative group">
                    <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        />
                    </div>
                    {image.caption && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
                            {image.caption}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}

// Componente para collage con imágenes y videos
export function MediaCollage({ items, className = '' }: MediaCollageProps) {
    if (!items || items.length < 3) {
        console.warn('MediaCollage expects exactly 3 items');
        return null;
    }

    const renderMediaItem = (item: MediaItem, index: number) => {
        if (!item || !item.src) {
            console.error('Invalid item at index', index, item);
            return null;
        }

        const isVideo = (item.type === 'video') ||
            item.src.toLowerCase().endsWith('.webm') ||
            item.src.toLowerCase().endsWith('.mp4') ||
            item.src.toLowerCase().endsWith('.mov') ||
            item.src.toLowerCase().endsWith('.avi');

        if (isVideo) {
            return (
                <div key={index} className="relative group">
                    <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <video
                            src={item.src}
                            title={item.alt}
                            loop
                            muted
                            autoPlay
                            playsInline
                            controls
                            preload="metadata"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                                console.error('Error loading video:', item.src, e);
                                // Fallback to show an error message
                                e.currentTarget.style.display = 'none';
                                const fallback = document.createElement('div');
                                fallback.className = 'flex items-center justify-center w-full h-full bg-gray-100 dark:bg-gray-800 text-gray-500 text-sm rounded-lg';
                                fallback.innerHTML = `
                                    <div class="text-center p-4">
                                        <svg class="mx-auto h-12 w-12 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                        <p>Video no disponible</p>
                                        <a href="${item.src}" target="_blank" class="text-blue-500 hover:text-blue-600 text-xs underline">Ver en nueva pestaña</a>
                                    </div>
                                `;
                                e.currentTarget.parentElement?.appendChild(fallback);
                            }}
                            onLoadedData={(e) => {
                                console.log('Video loaded successfully:', item.src);
                            }}
                        >
                            {/* Fallback for browsers that don't support the video format */}
                            <div className="flex items-center justify-center w-full h-full bg-gray-100 dark:bg-gray-800 text-gray-500 text-sm p-4">
                                <div className="text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    <p>Tu navegador no soporta este formato de video.</p>
                                    <a href={item.src} target="_blank" className="text-blue-500 hover:text-blue-600 text-xs underline block mt-1">
                                        Ver en nueva pestaña
                                    </a>
                                </div>
                            </div>
                        </video>
                    </div>
                    {item.caption && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
                            {item.caption}
                        </p>
                    )}
                </div>
            );
        }

        // Para el tercer item (imagen inferior), usar aspect ratio más pequeño
        const isBottomImage = index === 2;

        return (
            <div key={index} className="relative group">
                <div className={`${isBottomImage ? 'aspect-[16/12]' : 'aspect-square'} overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                    <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                </div>
                {item.caption && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
                        {item.caption}
                    </p>
                )}
            </div>
        );
    };

    return (
        <div className={cn("grid grid-cols-2 gap-4 my-8", className)}>
            {/* Primeros 2 items (videos) - ocupan la primera fila lado a lado */}
            {items.slice(0, 2).map((item, index) => (
                <div key={index}>
                    {renderMediaItem(item, index)}
                </div>
            ))}

            {/* Tercer item (imagen) - ocupa toda la segunda fila pero con aspect ratio más pequeño */}
            <div className="col-span-2">
                {renderMediaItem(items[2], 2)}
            </div>
        </div>
    );
}

// Componente para cuadrícula simple de 3 imágenes en fila
export function SimpleImageGrid({ images, className = '' }: ImageCollageProps) {
    if (images.length !== 3) {
        console.warn('SimpleImageGrid expects exactly 3 images');
        return null;
    }

    return (
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 my-8 ${className}`}>
            {images.map((image, index) => (
                <div key={index} className="relative group">
                    <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                    {image.caption && (
                        <span className="block text-sm text-gray-600 dark:text-gray-400 mt-2 text-center italic">
                            {image.caption}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
}
