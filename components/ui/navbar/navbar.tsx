import { FileText, Home, Settings, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ToolbarClient } from "../kokonutui/toolbar-client";
import { Toolbar } from "../kokonutui/toolbar";
import { Suspense } from "react";

export const Navbar = () => {
    return (
        <div
            className={cn(
                "fixed bottom-4 right-0 left-0 flex items-center justify-center w-full",
                "before:absolute before:content-[''] before:h-24 before:w-screen before:backdrop-blur-lg before:opacity-50"
            )}
        >
            <div className={cn("relative z-10 flex")}>
                <Suspense fallback={<Toolbar />}>
                    <ToolbarClient
                        activeColor="text-primary"
                        defaultSelected=""
                    />
                </Suspense>
            </div>
        </div>
    );
};
