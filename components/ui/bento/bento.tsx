import { cn } from "@/lib/utils";
import { Container_1 } from "./container-1/container-1";
import { ContainerBlogPost } from "./container-blog-post/container-blog-post";
import { ContainerPersonalExperience } from "./container-personal-experience/container-personal-experience";
import { ContainerStack } from "./container-stack/container-stack";
import { Aboutme } from "./aboutme/aboutme";
import { ProjectsGallery } from "./projects-gallery/projects-gallery";
import { Setup } from "./setup/setup";

export const Bento = () => {
    return (
        <div
            className={cn(
                "flex flex-col gap-6 overflow-hidden",
                "lg:gap-2 lg:grid lg:grid-cols-7 lg:grid-rows-7 lg:h-full"
            )}
        >
            {/* about me */}
            <Aboutme />

            {/* all of my experience */}
            <Container_1 />

            {/* professional experience */}
            <ContainerPersonalExperience />

            {/* My Setup */}
            <Setup />

            {/* my technological stack */}
            <ContainerStack />

            {/* my projects gallery */}
            <ProjectsGallery />

            {/* Last Blog post */}
            <ContainerBlogPost />
        </div>
    );
};
