import { cn } from "@/lib/utils";
import { GlassCard } from "../cards/glass-card";
import { Container_1 } from "./container-1/container-1";
import { ContainerBlogPost } from "./container-blog-post/container-blog-post";
import { Briefcase, FileTextIcon, Palette } from "lucide-react";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { ContainerPersonalExperience } from "./container-personal-experience/container-personal-experience";
import { ContainerStack } from "./container-stack/container-stack";
import { Aboutme } from "./aboutme/aboutme";
import { BorderBeam } from "../magicui/border-beam";
import { BentoCard } from "../magicui/bento-grid";
import { Marquee } from "../magicui/marquee";

const files = [
    {
        name: "bitcoin.pdf",
        body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto."
    },
    {
        name: "finances.xlsx",
        body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data."
    },
    {
        name: "logo.svg",
        body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation."
    },
    {
        name: "keys.gpg",
        body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages."
    },
    {
        name: "seed.txt",
        body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain."
    }
];

const features = [
    {
        Icon: Palette,
        name: "Save your files",
        description: "We automatically save your files as you type.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Marquee
                pauseOnHover
                className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
            >
                {files.map((f, idx) => (
                    <figure
                        key={idx}
                        className={cn(
                            "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                            "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
                        )}
                    >
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex flex-col">
                                <figcaption className="text-sm font-medium dark:text-white ">
                                    {f.name}
                                </figcaption>
                            </div>
                        </div>
                        <blockquote className="mt-2 text-xs">
                            {f.body}
                        </blockquote>
                    </figure>
                ))}
            </Marquee>
        )
    }
];

export const Bento = () => {
    return (
        <div
            className={cn(
                "flex flex-col gap-2 overflow-scroll",
                "lg:grid lg:grid-cols-7 lg:grid-rows-7 lg:h-full"
            )}
        >
            <Container_1 />
            {/* profesional experience */}
            <ContainerPersonalExperience />
            {/* ?? */}
            <div className="col-start-3 row-start-3 row-span-3 col-span-3 lg:col-span-3 lg:row-span-2 lg:col-start-1 lg:row-start-3">
                <GlassCard>
                    <CardHeader className="flex flex-col items-start">
                        <div className="flex gap-2 justify-center items-center text-white">
                            <Briefcase className="w-4" />
                            <CardTitle className="">
                                que puede ser esta
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className=""></CardContent>
                </GlassCard>
            </div>

            {/* My Setup */}
            <div className="hidden lg:flex lg:col-start-4 lg:col-span-2 lg:row-span-3">
                <GlassCard className="">
                    <CardHeader className="flex flex-col items-start">
                        <div className="flex gap-2 justify-center items-center text-white">
                            <Briefcase className="w-4" />
                            <CardTitle className="">mi setup</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className=""></CardContent>
                </GlassCard>
            </div>

            {/* my tecnological stack */}
            <ContainerStack />

            {/* otra cosa mas */}
            <Aboutme />

            {/* my projects galery */}
            <div className="col-start-6 row-start-1 row-span-3 col-span-2 lg:col-span-3 lg:row-span-3 lg:row-start-5">
                <GlassCard className="py-0">
                    <CardContent className="h-full p-0">
                        {features.map((feature, idx) => (
                            <BentoCard key={idx} {...feature} />
                        ))}
                    </CardContent>
                </GlassCard>
            </div>

            {/* Last Blog post */}
            <ContainerBlogPost />
        </div>
    );
};
