import { TopBar } from "@/components/ui/topbar/topbar";
import { Navbar } from "@/components/ui/navbar/navbar";

export default function ExperienceLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="fondo-con-blur bg-blue-950 dark:brightness-100 grid place-content-center content-start h-screen w-screen text-white fondo-con-blur after:content-[''] after:blur-xl after:bg-[url('https://pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev/wallpaper.webp')] after:bg-cover after:bg-center after:absolute after:w-full after:h-full ">
            <div className="relative z-10 flex flex-col pt-20 md:pt-8 lg:pt-0 xl:pt-8">
                {children}
                <TopBar />
                <Navbar />
            </div>
        </main>
    );
}
