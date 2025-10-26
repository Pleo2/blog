import { cn } from "@/lib/utils";
import { lazy, Suspense } from "react";

// Lazy loading de componentes pesados
const Container_1 = lazy(() => import("./container-1/container-1").then(m => ({ default: m.Container_1 })));
const ContainerBlogPost = lazy(() => import("./container-blog-post/container-blog-post").then(m => ({ default: m.ContainerBlogPost })));
const ContainerPersonalExperience = lazy(() => import("./container-personal-experience/container-personal-experience").then(m => ({ default: m.ContainerPersonalExperience })));
const ContainerStack = lazy(() => import("./container-stack/container-stack").then(m => ({ default: m.ContainerStack })));
const Aboutme = lazy(() => import("./aboutme/aboutme").then(m => ({ default: m.Aboutme })));
const ProjectsGallery = lazy(() => import("./projects-gallery/projects-gallery").then(m => ({ default: m.ProjectsGallery })));
const Setup = lazy(() => import("./setup/setup").then(m => ({ default: m.Setup })));

// Componente de loading optimizado
const BentoLoading = () => (
    <div className="flex items-center justify-center h-32 bg-white/5 rounded-lg animate-pulse">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
    </div>
);

export const Bento = () => {
    return (
        <div
            className={cn(
                "flex flex-col gap-6 overflow-hidden",
                "lg:gap-2 lg:grid lg:grid-cols-7 lg:grid-rows-7 lg:h-full"
            )}
        >
            {/* about me */}
            <Suspense fallback={null}>
                <Aboutme />
            </Suspense>

            {/* all of my experience */}
            <Suspense fallback={null}>
                <Container_1 />
            </Suspense>

            {/* professional experience */}
            <Suspense fallback={null}>
                <ContainerPersonalExperience />
            </Suspense>

            {/* My Setup */}
            <Suspense fallback={null}>
                <Setup />
            </Suspense>

            {/* my technological stack */}
            <Suspense fallback={null}>
                <ContainerStack />
            </Suspense>

            {/* my projects gallery */}
            <Suspense fallback={null}>
                <ProjectsGallery />
            </Suspense>

            {/* Last Blog post */}
            <Suspense fallback={null}>
                <ContainerBlogPost />
            </Suspense>
        </div>
    );
};
