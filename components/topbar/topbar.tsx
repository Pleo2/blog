import { cn } from "@/lib/utils";
import { FileDown } from "lucide-react";
import Image from "next/image";

export const TopBar = () => {
    return (
        <>
            <div
                className={cn(
                    "absolute top-2 right-0 left-0 pt-2 px-4 flex items-center justify-start w-full drop-shadow-lg",
                    "before:absolute before:content-[''] before:h-full before:w-screen before:backdrop-blur-sm before:opacity-100"
                )}
            >
                <div className={cn("relative z-10 flex")}>
                    <div
                        className={cn(
                            "px-2 py-2 relative text-white font-semibold rounded shadow transition-colors duration-200 flex items-center gap-2",
                            "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white/5 before:rounded-lg before:transition-colors before:duration-200 before:border-white/20 before:border-1"
                        )}
                    >
                        <Image
                            src="https://pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev/1700943591473.jpeg"
                            alt="CV Download"
                            height={50}
                            width={50}
                            className="rounded-lg shadow-xl opacity-100"
                        />
                        <a
                            href="/cv.pdf"
                            download
                            className={cn(
                                "text-sm text-white font-semibold flex items-center justify-center bg-white/10 opacity-60 px-4 rounded-lg gap-2 h-full drop-shadow-2xl",
                                "hover:opacity-100 transition-opacity duration-200"
                            )}
                        >
                            <FileDown className="w-5 h-5" />
                            English CV
                        </a>
                        <a
                            href="/cv.pdf"
                            download
                            className={cn(
                                "text-sm text-white font-semibold flex items-center justify-center bg-white/10 opacity-60 px-4 rounded-lg gap-2 h-full drop-shadow-2xl",
                                "hover:opacity-100 transition-opacity duration-200"
                            )}
                        >
                            <FileDown className="w-5 h-5" />
                            Spanish CV
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
