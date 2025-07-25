import type React from "react";
import { ArrowRightIcon } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectsBentoCardProps extends ComponentPropsWithoutRef<"div"> {
      name: string;
      className: string;
      background: ReactNode;
      Icon: React.ElementType;
      description: string;
      href: string;
      cta: string;
}

const ProjectsBentoCard = ({
      name,
      className,
      background,
      Icon,
      description,
      href,
      cta,
      ...props
}: ProjectsBentoCardProps) => (
      <div
            key={name}
            className={cn(
                  "group col-span-3 relative flex flex-col justify-between overflow-hidden rounded-lg h-full",
                  // light styles
                  "bg-background",
                  "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                  // dark styles
                  "transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                  className
            )}
            {...props}
      >
            <div className={cn(
                  "background-container absolute overflow-hidden",
            )}>
                  {background}
            </div>
            <div className="absolute bottom-0 w-full h-56 z-[1] bg-gradient-to-t from-[#011949] via-60%-[#011949] to-transparent"></div>

            <div className="pointer-events-none z-10 flex transform-gpu flex-col absolute bottom-0 gap-1 p-4 transition-all duration-300 group-hover:-translate-y-10">
                  <div className={cn(
                        "flex gap-2 items-center ",
                  )}>
                        <Icon className="h-4 w-4 origin-left transform-gpu text-[#FBCA1D] transition-all duration-300 ease-in-out group-hover:scale-105" />
                        <h3 className="text-xl font-semibold text-white dark:text-white group-hover:scale-[102%] transition-transform duration-300">
                              {name}
                        </h3>
                  </div>

                  <p className="max-w-lg text-neutral-300">{description}</p>
            </div>

            <div
                  className={cn(
                        "pointer-events-none absolute bottom-0 z-10 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  )}
            >
                  <Button
                        variant="ghost"
                        asChild
                        size="sm"
                        className="pointer-events-auto rounded-full bg-white/10 hover:bg-white/5 transition-colors duration-300"
                  >
                        <a href={href}>
                              {cta}
                              <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
                        </a>
                  </Button>
            </div>
            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
      </div>
);

export { ProjectsBentoCard };
