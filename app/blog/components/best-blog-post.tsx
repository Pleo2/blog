'use client';

import { BlogCard } from '@/components/ui/cards/blog-card';
import { ArrowDown, Mouse } from 'lucide-react';
import { useMemo } from 'react';

interface BlogPostData {
    slug: string;
    metadata: {
        title?: string;
        publishedAt?: string;
        summary?: string;
        image?: string;
        tags?: string[];
    };
}

interface BestBlogPostProps {
    posts: BlogPostData[];
}

export const BestBlogPost = ({ posts }: BestBlogPostProps) => {
    // Imágenes diferentes para el mismo post
    const imageVariations = [
        '/working.webp',
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80'
    ];

    // Transformar los datos de los posts para que coincidan con la estructura esperada
    const transformedPosts = useMemo(() => {
        if (posts.length === 0) return [];

        // Usar el primer post (más reciente) como base
        const basePost = posts[0];

        // Crear múltiples variaciones del mismo post con diferentes imágenes
        return Array.from({ length: 4 }, (_, index) => ({
            id: `${basePost.slug}-variation-${index}`,
            title: basePost.metadata.title || 'Sin título',
            subtitle: basePost.metadata.summary?.substring(0, 50) + '...' || 'Sin descripción',
            image: imageVariations[index % imageVariations.length], // Rotar entre las imágenes
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
        }));
    }, [posts]);

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
            <div className='w-1/2 flex justify-center'>
                <BlogCard
                    posts={transformedPosts}
                    // onPostClick={handlePostClick}
                    className='w-full'
                />
            </div>
        </div>
    );
};
