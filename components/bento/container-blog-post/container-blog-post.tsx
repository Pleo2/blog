import { GlassCard } from "@/components/cards/glass-card";
import { BentoCard } from "@/components/magicui/bento-grid";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Badge } from "@/components/ui/badge";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Calendar, FileText, Star } from "feather-icons-react";
import { StarsIcon } from "lucide-react";

const features = [
    {
        Icon: Star,
        name: "Personal Blog",
        description: "My last post",
        href: "#",
        cta: "Learn more",
        className: "",
        background: (
            <GlassCard className="absolute bg-white/5 p-4 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group gap-2 hover:blur-2xl">
                <CardHeader className="w-full flex-col items-start z-10 lg:gap-0 px-0 group-hover:opacity-20 transition-opacity duration-300">
                    <section className="flex gap-1 items-center w-full lg:mt-2">
                        <Calendar className="w-3 h-3 text-white/70 flex-shrink-0" />
                        <span className="text-xs text-white/70 whitespace-nowrap overflow-hidden text-ellipsis">
                            May 6, 2025
                        </span>
                    </section>

                    <h3 className="w-full line-clamp-1 text-sm sm:text-sm md:text-sm font-medium text-white/90 overflow-hidden text-ellipsis lg:text-base xl:text-sm">
                        Cual tiene mejor rendimiento en una aplicacion web,
                        zustand o la apiNativa de Context de react, y cuales son
                        sus ventajas y desventajas tecnicas y practicas para un
                        equipo de desarrollo
                    </h3>
                    <div className="flex flex-wrap gap-1 mt-1 w-full">
                        <Badge className="bg-white/20 rounded-lg hover:bg-blue-900 text-white px-1.5 py-0.5 text-[10px] sm:text-xs font-medium cursor-pointer transition-all duration-300 flex-shrink-0">
                            #Zustand
                        </Badge>
                        <Badge className="bg-white/20 rounded-lg hover:bg-blue-900 text-white px-1.5 py-0.5 text-[10px] sm:text-xs font-medium cursor-pointer transition-all duration-300 flex-shrink-0">
                            #React
                        </Badge>
                        <Badge className="bg-white/20 rounded-lg hover:bg-blue-900 text-white px-1.5 py-0.5 text-[10px] sm:text-xs font-medium cursor-pointer transition-all duration-300 flex-shrink-0">
                            #TypeScript
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent className="p-0 group-hover:opacity-20 transition-opacity duration-300">
                    <p className="text-sm sm:text-xs md:text-sm text-white/70 line-clamp-4 w-full overflow-hidden  lg:line-clamp-3 xl:line-clamp-4 2xl:line-clamp-5">
                        Tanto Zustand como la API de Context de React son
                        herramientas populares para la gestión de estado en
                        aplicaciones web modernas, pero presentan diferencias
                        significativas en rendimiento, implementación y uso
                        práctico. Este análisis proporciona una comparativa
                        detallada para equipos de desarrollo que necesitan
                        elegir entre estas tecnologías.
                    </p>
                </CardContent>
            </GlassCard>
        )
    }
];

export const ContainerBlogPost = () => {
    return (
        <div
            className={cn(
                "mb-3 col-span-full min-h-64 h-64",
                "sm:mb-0 sm:col-start-4 sm:row-start-3 sm:row-span-4 sm:col-span-4",
                "md:col-start-3 md:row-start-6 md:row-span-2 md:col-span-3",
                // "lg:col-start-6 lg:row-start-4 lg:row-span-2 lg:col-span-2",
                "lg:min-h-max lg:h-full lg:col-span-2 lg:row-span-2 lg:col-start-6 lg:row-start-6 lg:justify-center"
                // "relative before:absolute before:rounded-lg before:bottom-0 before:w-full before:h-16 before:bg-gradient-to-t before:from-[#046EDE] before:z-20 before:to-transparent"
            )}
        >
            <GlassCard
                className={cn(
                    "min-h-64 h-64 relative p-0 before:content-[''] before:w-full before:h-24 before:blur-2xl transition-transform hover:scale-[1.01] duration-300",
                    "lg:p-0 lg:m-0 lg:justify-center lg:h-full  lg:min-h-max",
                    "xl:p-0 gap-2"
                )}
            >
                {features.map((feature, idx) => (
                    <BentoCard key={idx} {...feature} />
                ))}
                {/* <CardHeader className="w-full flex-col items-start z-10 lg:gap-0 lg:px-0">
                    <div className="relative flex gap-1 justify-center items-center text-white">
                        <StarsIcon className="w-4 " />
                        <CardTitle className="">Personal Blog</CardTitle>
                    </div>

                    <section className="flex gap-1 items-center w-full lg:mt-2">
                        <Calendar className="w-3 h-3 text-white/70 flex-shrink-0" />
                        <span className="text-xs text-white/70 whitespace-nowrap overflow-hidden text-ellipsis">
                            May 6, 2025
                        </span>
                    </section>

                    <h3 className="w-full line-clamp-1 text-sm sm:text-base md:text-lg font-medium text-white/90 overflow-hidden text-ellipsis lg:text-base xl:text-lg">
                        Cual tiene mejor rendimiento en una aplicacion web,
                        zustand o la apiNativa de Context de react, y cuales son
                        sus ventajas y desventajas tecnicas y practicas para un
                        equipo de desarrollo
                    </h3>
                    <div className="flex flex-wrap gap-1 mt-2 w-full">
                        <Badge className="bg-white/20 rounded-lg hover:bg-blue-900 text-white px-1.5 py-0.5 text-[10px] sm:text-xs font-medium cursor-pointer transition-all duration-300 flex-shrink-0">
                            #Zustand
                        </Badge>
                        <Badge className="bg-white/20 rounded-lg hover:bg-blue-900 text-white px-1.5 py-0.5 text-[10px] sm:text-xs font-medium cursor-pointer transition-all duration-300 flex-shrink-0">
                            #React
                        </Badge>
                        <Badge className="bg-white/20 rounded-lg hover:bg-blue-900 text-white px-1.5 py-0.5 text-[10px] sm:text-xs font-medium cursor-pointer transition-all duration-300 flex-shrink-0">
                            #TypeScript
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent className="text-[10px] sm:text-xs md:text-sm text-white/70 line-clamp-3 w-full overflow-hidden lg:px-0 lg:line-clamp-3 xl:line-clamp-4 2xl:line-clamp-5">
                    Tanto Zustand como la API de Context de React son
                    herramientas populares para la gestión de estado en
                    aplicaciones web modernas, pero presentan diferencias
                    significativas en rendimiento, implementación y uso
                    práctico. Este análisis proporciona una comparativa
                    detallada para equipos de desarrollo que necesitan elegir
                    entre estas tecnologías.
                </CardContent> */}
                <BorderBeam duration={8} size={100} />
            </GlassCard>
        </div>
    );
};
