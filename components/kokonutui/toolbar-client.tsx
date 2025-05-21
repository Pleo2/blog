"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
    Home,
    FileText,
    BriefcaseBusiness,
    Laptop,
    FileCode2
} from "lucide-react";
import type {
    ToolbarItem,
    ToolbarProps
} from "@/components/kokonutui/toolbar.type";
import { useRouter } from "next/navigation";

const toolbarItems: ToolbarItem[] = [
    { id: "/", title: "Home", icon: Home },
    { id: "experience", title: "Experience", icon: BriefcaseBusiness },
    { id: "blog", title: "Blog", icon: FileText },
    { id: "setup", title: "Setup", icon: Laptop },
    { id: "projects", title: "Projects", icon: FileCode2 }
];

const buttonVariants = {
    initial: {
        gap: 0,
        paddingLeft: ".5rem",
        paddingRight: ".5rem"
    },
    animate: (isSelected: boolean) => ({
        gap: isSelected ? ".5rem" : 0,
        paddingLeft: isSelected ? "1rem" : ".5rem",
        paddingRight: isSelected ? "1rem" : ".5rem"
    })
};

const spanVariants = {
    initial: { width: 0, opacity: 0 },
    animate: { width: "auto", opacity: 1 },
    exit: { width: 0, opacity: 0 }
};

const notificationVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: -10 },
    exit: { opacity: 0, y: -20 }
};

const lineVariants = {
    initial: { scaleX: 0, x: "-50%" },
    animate: {
        scaleX: 1,
        x: "0%",
        transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: {
        scaleX: 0,
        x: "50%",
        transition: { duration: 0.2, ease: "easeIn" }
    }
};

const transition = { type: "spring", bounce: 0, duration: 0.4 };

export const ToolbarClient = ({
    className,
    activeColor = "text-primary",
    onSearch
}: ToolbarProps) => {
    const [selected, setSelected] = React.useState<string | null>("/");
    const [activeNotification, setActiveNotification] = React.useState<
        string | null
    >(null);

    const outsideClickRef = React.useRef(null);

    const handleItemClick = (itemId: string) => {
        setSelected(selected === itemId ? null : itemId);
        // setActiveNotification(itemId);
        // setTimeout(() => setActiveNotification(null), 1500);
    };

    const router = useRouter();

    return (
        <div className="space-y-2">
            <div
                ref={outsideClickRef}
                className={cn(
                    "flex items-center gap-3 p-4 relative",
                    "bg-white/10", // rgba(255, 255, 255, 0.3)
                    "backdrop-blur-[7.5px]",
                    "shadow-[0_8px_32px_0_rgba(0,0,0,0.18)]",
                    "border border-white/20 rounded-xl",
                    "transition-all duration-200",
                    className
                )}
            >
                <AnimatePresence>
                    {activeNotification && (
                        <motion.div
                            variants={notificationVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-50"
                        >
                            <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs">
                                {
                                    toolbarItems.find(
                                        (item) => item.id === activeNotification
                                    )?.title
                                }{" "}
                                clicked!
                            </div>
                            <motion.div
                                variants={lineVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="absolute -bottom-1 left-1/2 w-full h-[2px] bg-primary origin-left"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex items-center gap-2">
                    {toolbarItems.map((item) => (
                        <motion.button
                            key={item.id}
                            variants={buttonVariants}
                            initial={false}
                            animate="animate"
                            custom={selected === item.id}
                            onClick={() => {
                                handleItemClick(item.id);
                                router.push(`/${item.id}`);
                            }}
                            transition={transition}
                            className={cn(
                                "relative flex items-center rounded-none px-3 py-2",
                                "text-sm font-medium transition-colors duration-300 rounded-lg cursor-pointer",
                                "hover:rounded-lg",
                                selected === item.id
                                    ? "bg-white/20 text-white rounded-lg hover:rounded-lg"
                                    : "text-foreground hover:bg-white/20 hover:text-foreground hover:rounded-lg"
                            )}
                        >
                            <item.icon
                                size={16}
                                className={cn(
                                    selected === item.id && "text-white"
                                )}
                            />
                            <AnimatePresence initial={false}>
                                {selected === item.id && (
                                    <motion.span
                                        variants={spanVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={transition}
                                        className="overflow-hidden"
                                    >
                                        {item.title}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    ))}
                </div>
            </div>
        </div>
    );
};
