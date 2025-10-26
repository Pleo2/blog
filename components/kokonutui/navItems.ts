import {
    Home,
    FileText,
    BriefcaseBusiness,
    Laptop,
    FileCode2
} from "lucide-react";
import type { ToolbarItem } from "@/components/kokonutui/toolbar.type";

export const navItems: ToolbarItem[] = [
    { id: "/", title: "Home", icon: Home },
    // { id: "experience", title: "Experience", icon: BriefcaseBusiness },
    { id: "blog", title: "Blog", icon: FileText },
    // { id: "setup", title: "ContainerSetup", icon: Laptop },
    { id: "projects", title: "Projects", icon: FileCode2 }
];
