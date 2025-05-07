import { GlassCard } from "@/components/cards/glass-card";
import { Badge } from "@/components/ui/badge";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar, FileText, Star } from "feather-icons-react";
import { StarsIcon } from "lucide-react";

export const ContainerBlogPost = () => {
    return (
        <div className="col-start-6 row-start-4 row-span-2 col-span-2 xl:col-span-2 xl:row-span-3 xl:col-start-6 xl:row-start-5">
            <GlassCard className="justify-center items-star cursor-pointer">
                <CardHeader className="flex flex-col items-start">
                    <div className="flex gap-2 justify-center items-center text-white">
                        <StarsIcon className="w-4" />
                        <CardTitle className="">Personal Blog</CardTitle>
                        <Badge className="bg-red-500/20 border-red-500/50 rouded-full hover:bg-rose-900 text-white px-3 py-1 text-xs font-medium cursor-pointer transition-all duration-300">
                            Last Post
                        </Badge>
                    </div>

                    <section className="flex gap-1 items-center ">
                        <Calendar className="w-3 text-white/70" />
                        <span className="text-xs text-white/70">
                            may 6, 2025
                        </span>
                    </section>

                    <h3 className="w-full line-clamp-1 text-xl font-medium text-white/90">
                        Cual tiene mejor rendimiento en una aplicacion web,
                        zustand o la apiNativa de Context de react, y cuales son
                        sus ventajas y desventajas tecnicas y practicas para un
                        equipo de desarrollo
                    </h3>
                    <div className="flex gap-2">
                        <Badge className="bg-white/20 rouded-lg hover:bg-blue-900 text-white px-3 py-1 text-xs font-medium cursor-pointer transition-all duration-300">
                            #Zustand
                        </Badge>
                        <Badge className="bg-white/20 rouded-lg hover:bg-blue-900 text-white px-3 py-1 text-xs font-medium cursor-pointer transition-all duration-300">
                            #React
                        </Badge>
                        <Badge className="bg-white/20 rouded-lg hover:bg-blue-900 text-white px-3 py-1 text-xs font-medium cursor-pointer transition-all duration-300">
                            #TypeScript
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent className="text-sm text-white/70 line-clamp-2 w-[97%]">
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
