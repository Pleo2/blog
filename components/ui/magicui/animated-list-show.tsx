"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
    name: string;
    description: string;
    icon: string;
    color: string;
    isRecommended: boolean;
    descriptionRecommended: string;
}

let notifications = [
    {
        name: "Ryzer Viper Ultimate",
        description: "Mouse",
        isRecommended: true,
        descriptionRecommended: "for gaming is fine",
        icon: "🐁",
        color: "transparent"
    },
    {
        name: "Cyberpowerpc ck60 60%",
        description: "Mechanical Keyboard",
        isRecommended: false,
        descriptionRecommended:
            "better alternatives available - bad pcb quality",
        icon: "⌨️",
        color: "transparent"
    },
    {
        name: "Mackbook air m2 15 inch",
        description: "Laptop for web development, at least 16GB of RAM",
        isRecommended: true,
        descriptionRecommended: "Recommended for developers",
        icon: "💻",
        color: "transparent"
    },
    {
        name: "Case MSI MPG GUNGNIR 110R",
        description: "PC Case",
        isRecommended: true,
        descriptionRecommended: "good airflow and cable management",
        icon: "📦",
        color: "transparent"
    },
    {
        name: "CPU Ryzen 7 5700g",
        description: "CPU",
        isRecommended: true,
        descriptionRecommended: "for gaming and productivity",
        icon: "🫀",
        color: "transparent"
    },
    {
        name: "EVGA Nvidia Geforce RTX 3080",
        description: "GPU",
        isRecommended: true,
        descriptionRecommended: "for high-end gaming and rendering",
        icon: "🚀",
        color: "transparent"
    },
    {
        name: "Monitor Samsung Odyssey G5 27",
        description: "Monitor",
        isRecommended: false,
        descriptionRecommended:
            "consider higher refresh rate and better image quality options",
        icon: "🖥️",
        color: "transparent"
    }
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({
    name,
    description,
    icon,
    color,
    isRecommended,
    descriptionRecommended
}: Item) => {
    const recommended = isRecommended ? "Recommended" : "Not Recommended";
    const textColorRecommended = isRecommended ? "text-emerald" : "text-coral";
    return (
        <figure
            className={cn(
                "relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-xl p-4",
                // animation styles
                "transition-all duration-200 ease-in-out",
                // light styles
                "bg-white/10 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                // dark styles
                "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex size-10 items-center justify-center rounded-2xl"
                    style={{
                        backgroundColor: color
                    }}
                >
                    <span className="text-lg">{icon}</span>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
                        <span className="text-sm sm:text-lg">{name}</span>
                        {!isRecommended && (
                            <>
                                <span className="mx-1">·</span>
                                <span
                                    className={`text-xs ${textColorRecommended}`}
                                >
                                    {recommended}
                                </span>
                            </>
                        )}
                    </figcaption>
                    <span className={`text-xs text-white/50`}>
                        {descriptionRecommended}
                    </span>
                    <p className="text-sm font-normal dark:text-white/60">
                        {description}
                    </p>
                </div>
            </div>
        </figure>
    );
};

export default function AnimatedListShow({
    className
}: {
    className?: string;
}) {
    return (
        <div
            className={cn(
                "relative flex h-[500px] w-full flex-col overflow-hidden",
                className
            )}
        >
            <AnimatedList>
                {notifications.map((item, idx) => (
                    <Notification {...item} key={idx} />
                ))}
            </AnimatedList>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
        </div>
    );
}
