import { cn } from "@/lib/utils";
import React, { lazy, Suspense } from "react";
import { FeaturedBlogPostWrapper } from "@/components/ui/bento/container-blog-post/featured-blog-post-wrapper";
import { BackgroundProjectsCard } from "@/components/ui/bento/projects-gallery/background-projects-card";
import { AnimatedListShow } from "@/components/ui/magicui";

// Lazy loading de componentes pesados
const Container_1 = lazy(() => import("./container-1/container-1").then(m => ({ default: m.Container_1 })));
const ContainerBlogPost = lazy(() => import("./container-blog-post/container-blog-post").then(m => ({ default: m.ContainerBlogPost })));
const ContainerPersonalExperience = lazy(() => import("./container-personal-experience/container-personal-experience").then(m => ({ default: m.ContainerPersonalExperience })));
const ContainerStack = lazy(() => import("./container-stack/container-stack").then(m => ({ default: m.ContainerStack })));
const Aboutme = lazy(() => import("./aboutme/aboutme").then(m => ({ default: m.Aboutme })));
const ProjectsGallery = lazy(() => import("./projects-gallery/container-projects-gallery").then(m => ({ default: m.ContainerProjectsGallery })));
const Setup = lazy(() => import("./setup/container-setup").then(m => ({ default: m.ContainerSetup })));

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

            {/* my technological stack */}
            <Suspense fallback={null}>
                <ContainerStack />
            </Suspense>

            {/* my projects gallery */}
            <Suspense fallback={null}>
                <ProjectsGallery
                    name={"Personal Projects"}
                    className={""}
                    background={<BackgroundProjectsCard />}
                    icon={"code"}
                    description={"I have developed a variety of personal projects, including web applications, mobile applications. You can find more information about my profesional projects on my resume."}
                    href={"/projects"}
                    cta={"view more"} />
            </Suspense>

            {/* Last Blog post */}
            <Suspense fallback={null}>
                <ContainerBlogPost
                    name={"Personal Blog"}
                    className={""}
                    background={<FeaturedBlogPostWrapper />}
                    icon={"star"}
                    description={"All a new blog posts"}
                    href={"/blog"}
                    cta={"view more"} />
            </Suspense>

            {/* My ContainerSetup */}
            <Suspense fallback={null}>
                <Setup
                    name={"What do I work with?"}
                    className={""}
                    background={<AnimatedListShow />}
                    icon={"server"}
                    description={"The current setup I'm working with"}
                    href={""}
                    cta={""}
                />
            </Suspense>
        </div>
    );
};
