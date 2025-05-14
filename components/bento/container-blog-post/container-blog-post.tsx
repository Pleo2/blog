import { GlassCard } from "@/components/cards/glass-card";
import { Badge } from "@/components/ui/badge";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Calendar, FileText, Star } from "feather-icons-react";
import { StarsIcon } from "lucide-react";

export const ContainerBlogPost = () => {
    return (
        <div
            className={cn(
                "mb-3 col-span-full",
                "sm:mb-0 sm:col-start-4 sm:row-start-3 sm:row-span-4 sm:col-span-4",
                "md:col-start-3 md:row-start-6 md:row-span-2 md:col-span-3",
                // "lg:col-start-6 lg:row-start-4 lg:row-span-2 lg:col-span-2",
                "lg:col-span-2 lg:row-span-3 lg:col-start-6 lg:row-start-5"
            )}
        >
            <GlassCard className="justify-center items-start cursor-pointer h-full transition-opacity hover:opacity-80 duration-300 overflow-hidden">
                <CardHeader className="flex flex-col items-start w-full">
                    <div className="flex flex-wrap gap-1 sm:gap-2 justify-start items-center text-white w-full">
                        <StarsIcon className="w-4 h-4 flex-shrink-0" />
                        <CardTitle className="text-base sm:text-lg whitespace-nowrap overflow-hidden text-ellipsis">
                            Personal Blog
                        </CardTitle>
                        {/* <Badge className="bg-red-500/20 border-red-500/50 rounded-full hover:bg-rose-900 text-white px-2 py-0.5 text-[10px] sm:text-xs font-medium cursor-pointer transition-all duration-300 flex-shrink-0">
                            Last Post
                        </Badge> */}
                    </div>

                    <section className="flex gap-1 items-center w-full">
                        <Calendar className="w-3 h-3 text-white/70 flex-shrink-0" />
                        <span className="text-xs text-white/70 whitespace-nowrap overflow-hidden text-ellipsis">
                            May 6, 2025
                        </span>
                    </section>

                    <h3 className="w-full line-clamp-1 text-sm sm:text-base md:text-lg font-medium text-white/90 mt-2 overflow-hidden text-ellipsis">
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
                <CardContent className="text-[10px] sm:text-xs md:text-sm text-white/70 line-clamp-3 w-full overflow-hidden">
                    Tanto Zustand como la API de Context de React son
                    herramientas populares para la gestión de estado en
                    aplicaciones web modernas, pero presentan diferencias
                    significativas en rendimiento, implementación y uso
                    práctico. Este análisis proporciona una comparativa
                    detallada para equipos de desarrollo que necesitan elegir
                    entre estas tecnologías.
                </CardContent>
            </GlassCard>
        </div>
    );
};
