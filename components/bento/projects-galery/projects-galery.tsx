import { GlassCard } from "@/components/cards/glass-card";
import { BentoCard } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import { ShineBorder } from "@/components/magicui/shine-border";
import { CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Code, Palette } from "lucide-react";
import Image from "next/image";

const files = [
    {
        imgUrl: "https://pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev/personal-projects/215shots_so.webp",
        name: "Giphycloneapitest",
        body: "Es un clon de Giphy construido con React. Su objetivo principal es permitir a los usuarios explorar, buscar y visualizar gifs, clips y stories (historias), al igual que la plataforma original de Giphy."
    },
    {
        imgUrl: "https://pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev/personal-projects/457_1x_shots_so.webp",
        name: "Vicky Hornea Blog",
        body: "es una aplicación web desarrollada para centralizar y compartir video-recetas de repostería y cocina, conectando contenido de un canal de YouTube con una experiencia digital organizada y atractiva."
    },
    {
        imgUrl: "https://pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev/personal-projects/594_1x_shots_so.webp",
        name: "PokeGraph",
        body: "es un repositorio de GitHub cuyo nombre sugiere que se trata de una aplicación relacionada con la visualización de grafos (“force-graph”) utilizando tecnologías modernas como Astro "
    },
    {
        imgUrl: "https://pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev/personal-projects/673_1x_shots_so.webp",
        name: "Freelance Portfolio",
        body: "Este proyecto es un sitio web de portafolio profesional desarrollado con Astro 5.2, orientado a freelancers que buscan mostrar su trabajo en línea de manera moderna y optimizada."
    },
    {
        imgUrl: "https://pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev/personal-projects/952shots_so.webp",
        name: "TierList Maker",
        body: "Aplicación web interactiva desarrollada con React y Vite que permite a los usuarios crear y personalizar sus propias Tier Lists de manera sencilla y visual"
    },
    {
        imgUrl: "https://pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev/personal-projects/956_1x_shots_so.webp",
        name: "Clean Nude E-comerce",
        body: " es una tienda online desarrollada en TypeScript que se integra directamente con Shopify. El proyecto ofrece una experiencia de e-commerce moderna, rápida y segura, permitiendo gestionar productos, ventas y pedidos a través de la plataforma Shopify."
    }
];

const features = [
    {
        Icon: Code,
        name: "Personal Projects",
        description:
            "I have developed a variety of personal projects, including web applications, mobile applications. You can find more information about my profesional projects on my resume.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Marquee
                pauseOnHover
                className="absolute top-5 [--duration:40s] [mask-image:linear-gradient(to_top,transparent_1%,#000_20%)] "
            >
                {files.map((f, idx) => (
                    <figure
                        key={idx}
                        className={cn(
                            "relative w-72 cursor-pointer overflow-hidden rounded-lg border p-2",
                            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                            "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
                        )}
                    >
                        <div className="flex flex-row items-center w-full">
                            <div className="flex flex-col w-full">
                                <Image
                                    src={f.imgUrl}
                                    alt={f.name}
                                    width={600}
                                    height={100}
                                    className="rounded-lg drop-shadow-xl  mb-2"
                                    loading="eager"
                                />
                                <div className="flex items-center">
                                    {/* <span className="mx-1 text-mustard">·</span> */}
                                    <figcaption className="text-sm font-semibold text-mustard ">
                                        {f.name}
                                    </figcaption>
                                </div>
                            </div>
                        </div>
                        <blockquote className=" text-xs mt-1 text-white/60 line-clamp-5">
                            {f.body}
                        </blockquote>
                    </figure>
                ))}
            </Marquee>
        )
    }
];
export const ProjectsGalery = () => {
    return (
        <div className="col-start-3 row-start-3 row-span-5 col-span-3 min-h-96 h-full lg:min-h-max lg:col-span-3 lg:row-span-5 lg:col-start-1 lg:row-start-3">
            <GlassCard className="py-0 min-h-[500px] h-[500px] lg:h-full lg:min-h-max">
                <ShineBorder />
                {features.map((feature, idx) => (
                    <BentoCard key={idx} {...feature} />
                ))}
            </GlassCard>
        </div>
    );
};
