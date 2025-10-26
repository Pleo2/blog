import { GlassCard } from "@/components/ui/cards/glass-card";
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
                "overflow-hidden h-max gap-2 w-full 2xl:w-full ",
                className
            )}
        >
            <CardHeader className="flex flex-col items-start">
                <div className="flex gap-3 justify-center items-center text-white">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        height={44}
                        width={44}
                        loading="eager"
                        className="rounded-lg aspect-square"
                    />
                    <div className="flex flex-col justify-start items-start">
                        <CardTitle className="text-xl leading-5 font-semibold text-white/80">
                            {title}
                        </CardTitle>
                        <section className="flex gap-1 items-center ">
                            <Calendar className="w-3 text-white/70" />
                            <span className="text-xs text-white/70">
                                {date}
                            </span>
                        </section>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="">
                <div className="flex gap-1 flex-wrap">
                    {tags.map((item, index) => (
                        <Badge
                            key={`${index} ${item}`}
                            className="bg-white/20 rouded-lg hover:bg-blue-900 text-white px-2 py-1 font-medium cursor-pointer transition-all duration-300 text-[10px] sm:text-xs"
                        >
                            {item}
                        </Badge>
                    ))}
                </div>

                <h3 className="text-sm text-white/80 mt-2 2xl:text-lg">
                    {rol.title}
                </h3>
                <h4 className="text-sm text-white/60 2xl:text-sm">
                    {rol.subtilte}
                </h4>
                <p className="text-xs mt-2 text-white/50 line-clamp-2">
                    {rol.description}
                </p>
            </CardContent>
        </GlassCard>
    );
};
