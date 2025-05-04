import { LucideIcon } from "lucide-react";

export interface ToolbarItem {
    id: string;
    title: string;
    icon: LucideIcon;
    type?: never;
}

export interface ToolbarProps {
    className?: string;
    activeColor?: string;
    defaultSelected?: string;
    onSearch?: (value: string) => void;
}
