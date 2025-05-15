import { GlassCard } from "@/components/cards/glass-card";
import AnimatedListShow from "@/components/magicui/animated-list-show";
import { BentoCard } from "@/components/magicui/bento-grid";
import { CardContent } from "@/components/ui/card";
import { BellIcon } from "lucide-react";

const features = [
    {
        Icon: BellIcon,
        name: "Notifications",
        description: "Get notified when something happens.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <AnimatedListShow className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
        )
    }
];

export const Setup = () => {
    return (
        <div className="hidden lg:flex lg:col-start-4 lg:col-span-2 lg:row-span-3">
            <GlassCard className="p-0">
                <CardContent className="p-0 h-full">
                    {features.map((feature, idx) => (
                        <BentoCard key={idx} {...feature} />
                    ))}
                </CardContent>
            </GlassCard>
        </div>
    );
};
