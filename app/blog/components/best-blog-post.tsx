'use client';

import { BlogCard } from '@/components/ui/cards/blog-card';
import { ArrowDown, Mouse, ChevronLeft, ChevronRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

interface BlogPostData {
    slug: string;
    metadata: {
        title?: string;
        publishedAt?: string;
        summary?: string;
        image?: string;
        tags?: string[];
    };
    allImages?: string[];
}

interface BestBlogPostProps {
    posts: BlogPostData[];
}

export const BestBlogPost = ({ posts }: BestBlogPostProps) => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    // Imágenes por defecto como fallback
    const defaultImages = [
        '/working.webp',
        '/wallpaper.webp',
        '/daka-logo.webp'
    ];

    // Obtener todas las imágenes disponibles
    const availableImages = useMemo(() => {
        if (posts.length === 0) return defaultImages;
        
        const basePost = posts[0];
        return basePost.allImages && basePost.allImages.length > 0 
            ? basePost.allImages 
            : defaultImages;
    }, [posts]);

    // Asegurar que el índice inicial sea válido (tercera imagen por defecto)
    const validInitialIndex = Math.min(2, availableImages.length - 1);
    const [selectedImageIndex, setSelectedImageIndex] = useState(validInitialIndex);

    // Función para cambiar la imagen principal con animación
    const changeMainImage = (direction: 'prev' | 'next') => {
        if (isTransitioning) return; // Prevenir múltiples clics durante la transición
        
        setIsTransitioning(true);
        
        // Pequeño delay para permitir que la animación de salida se complete
        setTimeout(() => {
            setSelectedImageIndex(prev => {
                if (direction === 'prev') {
                    return prev === 0 ? availableImages.length - 1 : prev - 1;
                } else {
                    return prev === availableImages.length - 1 ? 0 : prev + 1;
                }
            });
            
            // Permitir nueva transición después de un breve delay
            setTimeout(() => {
                setIsTransitioning(false);
            }, 100);
        }, 150);
    };

    // Transformar los datos de los posts para que coincidan con la estructura esperada
    const transformedPosts = useMemo(() => {
        if (posts.length === 0) return [];

        // Usar el primer post (más reciente) como base
        const basePost = posts[0];

        // Crear múltiples variaciones del mismo post con diferentes imágenes
        // La primera imagen será la seleccionada, las demás rotarán desde ahí
        return Array.from({ length: Math.min(4, availableImages.length) }, (_, index) => {
            const imageIndex = (selectedImageIndex + index) % availableImages.length;
            return {
                id: `${basePost.slug}-variation-${index}`,
                title: basePost.metadata.title || 'Sin título',
                subtitle: basePost.metadata.summary?.substring(0, 50) + '...' || 'Sin descripción',
                image: availableImages[imageIndex],
                author: {
                    name: 'Jose Moreno',
                    title: 'Full Stack Developer',
                    avatar: '/working.webp',
                    verified: true
                },
                metrics: {
                    views: 1200 + index * 200, // Valores fijos basados en el índice
                    readTime: `${8 + index * 2} min`,
                    publishDate: basePost.metadata.publishedAt?.substring(5, 10) || 'N/A',
                    likes: 80 + index * 15
                },
                tags: basePost.metadata.tags || ['blog'],
                description: basePost.metadata.summary || 'Sin descripción disponible'
            };
        });
    }, [posts, availableImages, selectedImageIndex]);

    return (
        <div className='w-full h-max flex items-center justify-between'>
            <section className='h-max flex flex-col gap-8 w-1/2'>
                <h2 className='font-sans text-lg font-medium leading-tight md:text-7xl'>Best Blog Articles</h2>
                <div className='w-full h-max'>
                    <p className='text-white/80 text-xl leading-relaxed'>
                        The best blog is one that captivates readers with engaging, well-researched content presented in
                        a clear and relatable way.
                    </p>
                </div>

                <div className='z-30 flex flex-col items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity duration-300'>
                    <div className='flex flex-col items-center gap-1'>
                        <Mouse className='w-6 h-6 text-white animate-bounce' />
                        <ArrowDown className='w-4 h-4 text-white animate-bounce' />
                    </div>
                </div>

            </section>

            {/* Blog Card Stack */}
            <div className='w-1/2 flex flex-col items-center'>
                <BlogCard
                    posts={transformedPosts}
                    // onPostClick={handlePostClick}
                    className='w-full'
                    isTransitioning={isTransitioning}
                />
                
                {/* Controles para cambiar imagen principal */}
                {availableImages.length > 1 && (
                    <div className='flex items-center gap-4 mt-6'>
                        <div className='flex items-center gap-2'>
                            <button
                                onClick={() => changeMainImage('prev')}
                                disabled={isTransitioning}
                                className={cn(
                                    'p-2 rounded-full transition-all duration-300 ease-out',
                                    'bg-white/10 hover:bg-white/20 active:scale-95',
                                    'disabled:opacity-50 disabled:cursor-not-allowed',
                                    isTransitioning && 'animate-pulse'
                                )}
                                aria-label='Imagen anterior'
                            >
                                <ChevronLeft className='w-4 h-4 text-white' />
                            </button>
                            <span className={cn(
                                'text-white/80 text-sm min-w-[60px] text-center transition-all duration-300',
                                isTransitioning && 'opacity-60'
                            )}>
                                {selectedImageIndex + 1} / {availableImages.length}
                            </span>
                            <button
                                onClick={() => changeMainImage('next')}
                                disabled={isTransitioning}
                                className={cn(
                                    'p-2 rounded-full transition-all duration-300 ease-out',
                                    'bg-white/10 hover:bg-white/20 active:scale-95',
                                    'disabled:opacity-50 disabled:cursor-not-allowed',
                                    isTransitioning && 'animate-pulse'
                                )}
                                aria-label='Siguiente imagen'
                            >
                                <ChevronRight className='w-4 h-4 text-white' />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
