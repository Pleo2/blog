import { GlassCard } from "@/components/ui/cards/glass-card";
import AnimatedListShow from "@/components/magicui/animated-list-show";
import { BentoCard } from "@/components/magicui/bento-grid";
import { CardContent } from "@/components/ui/card";
import { BellIcon, PcCase } from "lucide-react";

const features = [
    {
        Icon: PcCase,
        name: "WorkStation or Compu",
        description: "Pc MasterRace & Laptop",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <AnimatedListShow className="absolute flex top-1 h-[300px] w-full scale-90 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-95" />
        )
    }
];

export const Setup = () => {
    return (
        <div className="hidden lg:flex lg:col-start-4 lg:col-span-2 lg:row-span-3">
            <GlassCard className="p-0 w-full m-0">
                <CardContent className="p-0 m-0 h-full w-full">
                    {features.map((feature, idx) => (
                        <BentoCard key={idx} {...feature} />
                    ))}
                </CardContent>
            </GlassCard>
        </div>
    );
};
