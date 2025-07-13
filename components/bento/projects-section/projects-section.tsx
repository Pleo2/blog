import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { GlassCard } from "@/components/cards/glass-card";
import { ShineBorder } from "@/components/magicui/shine-border";
import { CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Code } from "lucide-react";

const projects = [
    {
        imgUrl: "https://pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev/personal-projects/215shots_so.webp",
        name: "Giphycloneapitest",
        body: "Es un clon de Giphy construido con React. Su objetivo principal es permitir a los usuarios explorar, buscar y visualizar gifs, clips y stories (historias), al igual que la plataforma original de Giphy.",
        className: "col-span-1 md:col-span-2 lg:col-span-2",
    },
    {
        imgUrl: "https://pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev/personal-projects/457_1x_shots_so.webp",
        name: "Vicky Hornea Blog",
        body: "es una aplicación web desarrollada para centralizar y compartir video-recetas de repostería y cocina, conectando contenido de un canal de YouTube con una experiencia digital organizada y atractiva.",
        className: "col-span-1",
    },
    {
        imgUrl: "https://pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev/personal-projects/594_1x_shots_so.webp",
        name: "PokeGraph",
        body: "es un repositorio de GitHub cuyo nombre sugiere que se trata de una aplicación relacionada con la visualización de grafos (“force-graph”) utilizando tecnologías modernas como Astro ",
        className: "col-span-1",
    },
    {
        imgUrl: "https://pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev/personal-projects/673_1x_shots_so.webp",
        name: "Freelance Portfolio",
        body: "Este proyecto es un sitio web de portafolio profesional desarrollado con Astro 5.2, orientado a freelancers que buscan mostrar su trabajo en línea de manera moderna y optimizada.",
        className: "col-span-1 md:col-span-2 lg:col-span-2",
    },
];

const DummyIcon = () => <div />;

export const ProjectsSection = () => {
    return (
        <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, idx) => (
                <BentoCard
                    key={idx}
                    name={project.name}
                    className={cn("row-span-1", project.className)}
                    background={
                        <div className="relative w-full h-full">
                            <Image
                                src={project.imgUrl}
                                alt={project.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                    }
                    Icon={DummyIcon}
                    description={project.body}
                    href="#"
                    cta="Learn more"
                >
                    <GlassCard className="h-full">
                        <ShineBorder />
                        <CardContent className="p-0">
                            <div className="relative w-full h-48">
                                <Image
                                    src={project.imgUrl}
                                    alt={project.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-lg"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                                <p className="text-sm text-white/80 mt-2">{project.body}</p>
                            </div>
                        </CardContent>
                    </GlassCard>
                </BentoCard>
            ))}
        </BentoGrid>
    );
};
