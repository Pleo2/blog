import { GlassCard } from "@/components/cards/glass-card";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";
import Image from "next/image";
import { PersonalExperienceCard } from "./personal-experience-card";
import { cn } from "@/lib/utils";

export const ContainerPersonalExperience = () => {
    return (
        <div
            className={cn(
                "col-start-3 row-start-1 col-span-3 row-span-2 xl:col-span-2 xl:row-span-4 xl:col-start-4 xl:row-start-1",
                "relative before:absolute before:rounded-lg before:bottom-0 before:w-full before:h-16 before:bg-gradient-to-t before:from-[#1349AB] before:z-20 before:to-tranparent"
            )}
        >
            <GlassCard className=" before:content-[''] before:w-full before:h-24 before:blur-2xl pb-0">
                <CardHeader className=" w-full flex-col items-start z-10">
                    <div className="relative flex gap-2 justify-center items-center text-white">
                        <Briefcase className="w-4" />
                        <CardTitle className="">Personal Experience</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="overflow-scroll rounded-2xl flex-col">
                    <PersonalExperienceCard
                        imageSrc={
                            "https://pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev/jobs/streetmarketing.jpeg"
                        }
                        imageAlt={"streetmarketing logo"}
                        title={"Street Marketing"}
                        date={"march-july, 2024"}
                        selfAlign="self-end"
                        tags={["TypeScript", "NextJs", "NestJS", "Ai"]}
                        rol={{
                            title: "Full-Stack Developer (React/NestJS)",
                            subtilte:
                                "End-to-End Project Ownership, API Integration",
                            description:
                                "Implemented key technical solutions that led to substantial reductions in operating costs (including a 99% decrease in AI API costs and 20% in cloud expenses), drastically improved application performance through 3D asset and media optimization (significantly reducing initial load sizes), and increased team efficiency by creating technical documentation that accelerated developer onboarding by 60%"
                        }}
                    />

                    <PersonalExperienceCard
                        className="mt-4"
                        imageSrc={
                            "https://pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev/jobs/thevincent.jpeg"
                        }
                        imageAlt={"The Vincent"}
                        title={"The Vincent"}
                        date={"march-july, 2024"}
                        selfAlign="self-end"
                        tags={["TypeScript", "NextJs", "NestJS", "Ai"]}
                        rol={{
                            title: "Creative Frontend Engineer (chart.js)",
                            subtilte:
                                "AI-Integrated Dashboards | Custom Data Visualization",
                            description:
                                "Implemented a unified styling system and mobile-first responsive design with adaptive loading, drastically improving UI consistency (reduced inconsistencies by 75%), accelerating UI development (by 40%), achieving a 0.5s First Contentful Paint, boosting mobile engagement by 62%, and reducing bounce rates by 43%. Created high-performance, SEO-optimized landing pages with enhanced accessibility (raising compliance from 68% to 94%), increasing organic traffic by 53%. Designed real-time form response systems and interactive data dashboards using chart.js, reducing form abandonment by 37%, increasing data collection completion by 48%, and decreasing data analysis time for executives by 40%. Modernized legacy desktop-first designs with Tailwind CSS and Material UI, unifying the visual language, reducing CSS bundle size by 31%, and establishing a sustainable component architecture."
                        }}
                    />
                </CardContent>
            </GlassCard>
        </div>
    );
};
