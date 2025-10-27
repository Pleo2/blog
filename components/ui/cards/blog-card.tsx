"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
    Check,
    Users,
    Clock,
    Share2,
    ArrowRight,
    Calendar,
    Eye
} from "lucide-react";

interface BlogPost {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    author: {
        name: string;
        title: string;
        avatar: string;
        verified?: boolean;
    };
    metrics: {
        views: number;
        readTime: string;
        publishDate: string;
        likes: number;
    };
    tags: string[];
    description: string;
}

interface BlogCardProps {
    posts?: BlogPost[];
    className?: string;
    onPostClick?: (post: BlogPost) => void;
    onShare?: (post: BlogPost) => void;
    isTransitioning?: boolean;
}

const BlogCard = ({ post, index, totalCards, isExpanded, isTransitioning = false }: {
    post: BlogPost;
    index: number;
    totalCards: number;
    isExpanded: boolean;
    isTransitioning?: boolean;
}) => {
    // Calculate center offset based on total cards
    const centerOffset = (totalCards - 1) * 5;

    // Initial stacked position - centered with slight overlap
    const defaultX = index * 10 - centerOffset;
    const defaultY = index * 2;
    const defaultRotate = index * 1.5;
    const defaultScale = 1;

    // Calculate the total width of expanded cards and center offset
    const cardWidth = 360; // Aumentado para dar más espacio a las imágenes
    const cardOverlap = 280; // Ajustado proporcionalmente
    const totalExpandedWidth = cardWidth + (totalCards - 1) * (cardWidth - cardOverlap);
    const expandedCenterOffset = totalExpandedWidth / 2;

    // Fanned out position - centered spread with overlap
    const spreadX = index * (cardWidth - cardOverlap) - expandedCenterOffset + cardWidth / 2;
    const spreadY = 0;
    const spreadRotate = index * 5 - (totalCards - 1) * 2.5;
    const spreadScale = 1;

    return (
        <motion.div
            initial={{
                x: defaultX,
                y: defaultY,
                rotate: defaultRotate,
                scale: defaultScale,
            }}
            animate={{
                x: isExpanded ? spreadX : defaultX,
                y: isExpanded ? spreadY : defaultY,
                rotate: isExpanded ? spreadRotate : defaultRotate,
                scale: isExpanded ? spreadScale : defaultScale,
                zIndex: totalCards - index,
            }}
            transition={{
                type: "spring",
                stiffness: 350,
                damping: 30,
                mass: 0.8,
                restDelta: 0.001,
                restSpeed: 0.001,
            }}
            className={cn(
                "absolute inset-0 rounded-lg p-4 w-full cursor-pointer",
                "transition-all duration-500 ease-out",
                "transform-gpu overflow-hidden"
            )}
            style={{
                maxWidth: "320px",
                transformStyle: "preserve-3d",
                perspective: "2000px",
                left: "50%",
                marginLeft: "-180px",
                transform: isExpanded
                    ? ""
                    : `
                        translateY(${index * 10}px)
                        translateX(${index * 1}px)
                        rotate(${index * 3}deg)
                        scale(${1 - index * 0.02})
                    `,
                zIndex: totalCards - index,
            }}
        >
            {/* Inner Card */}
            <div className="absolute inset-1 rounded-xl bg-white/20 backdrop-blur-lg border border-white/20" />

            <div className={cn(
                "relative z-10 h-full",
                index >= 1 ? "flex items-center justify-center" : "flex flex-col"
            )}>
                {/* Blog Image - Todas las tarjetas muestran la imagen */}
                <div
                    className={cn(
                        "overflow-hidden rounded-lg opacity-90",
                        index >= 1 ? "w-full h-full" : "w-full aspect-square",
                        "bg-blue-950 rounded-2xl",
                        "transition-transform duration-300 ease-out",
                        "group-hover:scale-[1.02]",
                        "shadow-inner relative"
                    )}
                >
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className={cn(
                            "object-cover transition-all duration-700 ease-in-out hover:scale-105 rounded-2xl",
                            isTransitioning && index === 0 ? "opacity-0 scale-95" : "opacity-100 scale-100"
                        )}
                        {...(index === 0 ? { priority: true } : { loading: "lazy" })}
                    />
                    {/* Overlay sutil para mejor legibilidad del texto */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Blog Content - Solo mostrar descripción en la primera tarjeta */}
                {index < 1 && (
                    <div className="mt-3 flex flex-col gap-1">
                        <div className="">
                            <h2 className="text-lg line-clamp-2 font-medium tracking-tight text-white text-left">
                                {post.title}
                            </h2>
                        </div>
                        <p className="text-xs text-white/50 text-left line-clamp-3">
                            {post.description}
                        </p>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

const BlogCardStack = ({ posts, className, isTransitioning = false }: BlogCardProps) => {
    const [isExpanded, setIsExpanded] = useState(true); // Iniciar expandido por defecto

    const handleToggle = () => setIsExpanded(!isExpanded);

    // Validar que posts existe y es un array
    if (!posts || !Array.isArray(posts) || posts.length === 0) {
        return (
            <div className={cn(
                "relative mx-auto",
                "min-h-[440px] w-full max-w-[90vw]",
                "md:max-w-[1200px]",
                "flex items-center justify-center mb-8",
                className
            )}>
                <div className="text-center text-gray-500 dark:text-gray-400">
                    <p>No hay posts disponibles</p>
                </div>
            </div>
        );
    }

    return (
        <button
            className={cn(
                "relative mx-auto cursor-pointer",
                "min-h-[440px] w-full max-w-[90vw]",
                "md:max-w-[1200px]",
                "appearance-none bg-transparent border-0 p-0",
                "flex items-center justify-center mb-8",
                className
            )}
            onClick={handleToggle}
            aria-label="Toggle blog card stack"
            type="button"
        >
            {posts.map((post, index) => (
                <BlogCard
                    key={post.id}
                    post={post}
                    index={index}
                    totalCards={posts.length}
                    isExpanded={isExpanded}
                    isTransitioning={isTransitioning}
                />
            ))}
        </button>
    );
};

export { BlogCardStack as BlogCard };
