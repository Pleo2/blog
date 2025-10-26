"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Check, Users, Image as ImageIcon, Plus } from "lucide-react";

interface ProfileCardProps {
    name: string;
    title: string;
    verified?: boolean;
    image: string;
    followers: number;
    posts: number;
    onFollow?: () => void;
    className?: string;
}

const ProfileCard = ({
    name,
    title,
    verified = false,
    image,
    followers,
    posts,
    onFollow,
    className
}: ProfileCardProps) => {
    return (
        <div className={cn(
            "w-full max-w-sm bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden",
            className
        )}>
            {/* Image */}
            <div className="relative w-full h-48">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Name and Title */}
                <div className="mb-3">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg">{name}</h3>
                        {verified && (
                            <Check className="w-4 h-4 text-green-500" />
                        )}
                    </div>
                    <p className="text-sm text-gray-600">{title}</p>
                </div>

                {/* Metrics */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{followers.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <ImageIcon className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{posts}</span>
                    </div>
                </div>

                {/* Follow Button */}
                <Button
                    onClick={onFollow}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 border-0"
                    variant="outline"
                >
                    <Plus className="w-4 h-4 mr-2" />
                    Follow +
                </Button>
            </div>
        </div>
    );
};

export { ProfileCard };
