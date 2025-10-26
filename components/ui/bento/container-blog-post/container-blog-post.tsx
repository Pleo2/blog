import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {ArrowRightIcon} from "lucide-react";
import Link from "next/link";
import React, {ComponentPropsWithoutRef, ReactNode} from "react";
import {DynamicIcon} from "lucide-react/dynamic";
import type {IconName} from "lucide-react/dynamic";

interface ProjectBentoCardProps extends ComponentPropsWithoutRef<"div"> {
    name: string;
    className: string;
    background: ReactNode;
    icon: IconName;
    description: string;
    href: string;
    cta: string;
}

export const ContainerBlogPost = ({name, className, icon, description, href, cta, background}: ProjectBentoCardProps) => {


    return (
        <div
            className={cn(
                "mb-3 col-span-full min-h-64 h-ful",
                "sm:mb-0 sm:col-start-4 sm:row-start-3",
                "md:col-start-3 md:row-start-6 ",
                "lg:col-start-4 lg:row-start-5 lg:col-span-2 lg:row-span-3",
                "animate-fade-in-bounce"
            )}
            style={{animationDelay: '0.7s'}}
        >
            <div
                className={cn(
                    "group col-span-3 relative flex flex-col justify-between overflow-hidden rounded-lg h-full",
                    // light styles
                    "bg-background border border-black/10",
                    "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                    // dark styles
                    "transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                    // "min-h-64 h-64 relative p-0 before:content-[''] before:w-full before:h-24 before:blur-2xl transition-all duration-300 ease-in-out hover:scale-[1.01]",
                    // "lg:p-0 lg:m-0 lg:justify-center lg:h-full lg:min-h-max lg:w-full",
                    // "xl:p-0 gap-2",
                    className
                )}
            >
                {/* Contenido del blog post this the background of the card*/}
                <div className="absolute p-4">
                    { background}
                </div>

                {/* Gradiente overlay */}
                <div className="absolute bottom-0 w-full h-56 z-[1] bg-gradient-to-t from-[#011949] via-60%-[#011949] to-transparent"></div>

                {/* Contenido del overlay */}
                <div className="pointer-events-none z-10 flex transform-gpu flex-col absolute bottom-0 gap-1 p-4 transition-all duration-300 group-hover:-translate-y-12">
                    <div className={cn(
                        "flex gap-2 items-center ",
                    )}>
                        <DynamicIcon name={icon} className="h-4 w-4 origin-left transform-gpu text-[#FBCA1D] transition-all duration-300 ease-in-out group-hover:scale-105" />
                        <h3 className="text-xl font-semibold text-white dark:text-white group-hover:scale-[102%] transition-transform duration-300">
                            {name}
                        </h3>
                    </div>

                    <p className="max-w-lg text-neutral-300">{description}</p>
                </div>

                <div
                    className={cn(
                        "pointer-events-none absolute bottom-2 z-10 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0" +
                        " transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    )}
                >
                    <Button
                        variant="ghost"
                        asChild
                        size="sm"
                        className="pointer-events-auto rounded-full bg-white/10 hover:bg-white/5 transition-colors duration-300"
                    >
                        <Link href={href} prefetch={true}>
                            {cta}
                            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
                        </Link>
                    </Button>
                </div>
                <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
            </div>
        </div>
    );
};