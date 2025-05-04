import { cn } from "@/lib/utils";
import Image from "next/image";

export const TopBar = () => {
    return (
        <>
            <div
                className={cn(
                    "absolute top-0 right-0 left-0 pt-2 pl-2 flex items-center justify-start w-full",
                    "before:absolute before:content-[''] before:h-full before:w-screen before:backdrop-blur-sm before:opacity-100"
                )}
            >
                <div className={cn("relative z-10 flex")}>
                    <a
                        href="/cv.pdf"
                        download
                        className={cn(
                            "px-4 py-2 relative text-white font-semibold rounded shadow hover:bg-amber-100 transition-colors duration-200 flex items-center gap-2",
                            "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white/5 before:rounded before:transition-colors before:duration-200",
                            "hover:bg-white/20"
                        )}
                    >
                        <div className="">
                            <Image src="https://pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev/1700943591473.jpeg" alt="CV Download" height={100} width={100} />
                        </div>
                        Download CV
                    </a>
                </div>
            </div>
        </>
    );
};
