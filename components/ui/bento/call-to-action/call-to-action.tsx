import { GlassCard } from "@/components/ui/cards/glass-card";
import { ShineBorder } from "@/components/ui/magicui/shine-border";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export const CallToAction = () => {
    return (
        <div className="relative overflow-hidden rounded-lg col-start-6 row-start-1 row-span-3 col-span-2 lg:col-span-3 lg:row-span-2 lg:row-start-6">
            <ShineBorder />
            <GlassCard className="relative">
                <CardContent className="p-0"></CardContent>
            </GlassCard>
        </div>
    );
};
