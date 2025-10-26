import { cn } from "@/lib/utils";
import {
    type ToolbarItem,
    type ToolbarProps
} from "@/components/kokonutui/toolbar.type";
import { navItems } from "./navItems";
const toolbarItems: ToolbarItem[] = navItems;

export const Toolbar = ({
    className,
    activeColor = "text-primary",
    defaultSelected = "home"
}: ToolbarProps) => {
    return (
        <div className="space-y-2">
            <div
                className={cn(
                    "flex items-center gap-2 p-4 relative",
                    "bg-white/10", // rgba(255, 255, 255, 0.3)
                    "backdrop-blur-[7.5px]",
                    "shadow-[0_8px_32px_0_rgba(0,0,0,0.18)]",
                    "border border-white/20 rounded-xl",
                    "transition-all duration-200",
                    className
                )}
            >
                <div className="flex items-center gap-2">
                    {toolbarItems.map((item) => {
                        const isSelected = item.id === defaultSelected;

                        return (
                            <div
                                key={item.id}
                                className={cn(
                                    "relative flex items-center rounded-none px-3 py-2",
                                    "text-sm font-medium",
                                    isSelected
                                        ? "bg-[#1F9CFE] text-white rounded-lg px-4"
                                        : "text-foreground px-2"
                                )}
                            >
                                <item.icon
                                    size={16}
                                    className={cn(isSelected && "text-white")}
                                />
                                {isSelected && (
                                    <span className="ml-2">{item.title}</span>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
