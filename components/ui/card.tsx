import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card"
            className={cn(
                "relative text-card-foreground flex flex-col gap-6 rounded-lg py-6 drop-shadow-lg border-[1px] border-white/10 shadow-md",
                "before:contend-[''] before:blur-2xl before:absolute",
                "bg-gradient-to-tl from-[#1A1F3730] to-[#12124170]",
                className
            )}
            {...props}
        />
    );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-header"
            className={cn(
                "@container/card-header flex items-center justify-center gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
                className
            )}
            {...props}
        />
    );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-title"
            className={cn("leading-none text-center font-medium", className)}
            {...props}
        />
    );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-description"
            className={cn("text-muted-foreground text-sm", className)}
            {...props}
        />
    );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-action"
            className={cn(
                "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
                className
            )}
            {...props}
        />
    );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-content"
            className={cn("px-6", className)}
            {...props}
        />
    );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-footer"
            className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
            {...props}
        />
    );
}

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent
};
