import { GlassCard } from "@/components/cards/glass-card";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { cn } from "@/lib/utils";
import React from "react";

interface PersonalExperienceCardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    date: string;
    selfAlign?: "self-end" | "self-center" | "self-start";
    className?: string;
    tags: string[];
    rol: {
        title: string;
        subtilte?: string;
        description: string;
    };
}

export const PersonalExperienceCard: React.FC<PersonalExperienceCardProps> = ({
    imageSrc,
    imageAlt,
    title,
    date,
    selfAlign = "self-end",
    className = "",
    tags,
    rol
}) => {
    return (
        <GlassCard
            className={cn(
                selfAlign,
                "overflow-hidden h-max gap-2 w-full lg:py-4 lg:gap-1 2xl:w-full",
                className
            )}
        >
            <CardHeader className="flex flex-col items-start lg:px-4">
                <div className="flex gap-3 justify-center items-center text-white">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        height={44}
                        width={44}
                        loading="eager"
                        className="rounded-lg lg:w-9 lg:h-9"
                    />
                    <div className="flex flex-col justify-start items-start">
                        <CardTitle className="text-xl leading-5 font-semibold text-white/80 lg:text-sm lg:font-semibold">
                            {title}
                        </CardTitle>
                        <section className="flex gap-1 items-center lg:h-3 ">
                            <Calendar className="w-3 text-white/70" />
                            <span className="text-xs text-white/70">
                                {date}
                            </span>
                        </section>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="lg:px-4 lg:mt-1">
                <div className="flex gap-1">
                    {tags.map((item, index) => (
                        <Badge
                            key={`${index} ${item}`}
                            className="bg-white/20 rouded-lg hover:bg-blue-900 text-white px-2 py-1 font-medium cursor-pointer transition-all duration-300"
                        >
                            {item}
                        </Badge>
                    ))}
                </div>

                <h3 className="text-sm text-white/80 mt-2  md:text-lg lg:text-sm">
                    {rol.title}
                </h3>
                <h4 className="text-sm text-white/60 md:text-md lg:text-xs">
                    {rol.subtilte}
                </h4>
                <p className="text-xs mt-2 text-white/50 line-clamp-2 2xl:line-clamp-3">
                    {rol.description}
                </p>
            </CardContent>
        </GlassCard>
    );
};
