import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "../components/navbar/navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "../components/footer";
import { baseUrl } from "./sitemap";
import { TopBar } from "@/components/topbar/topbar";
import { SocialSection } from "@/components/social/social-section";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: "Personal Portfolio",
        template: "Pleo2 Personal Portfolio"
    },
    description: "This is my portfolio showcasing my work and skills.",
    openGraph: {
        title: "Pleo2 Personal Portfolio",
        description: "This is my portfolio showcasing my work and skills.",
        url: baseUrl,
        siteName: "Pleo2 portfolio",
        locale: "en_US",
        type: "website"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    }
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={cx("", GeistSans.variable, GeistMono.variable)}
        >
            <body className="">
                <main className="fondo-con-blur bg-blue-950 dark:brightness-100 grid place-content-center content-start h-screen w-screen text-white fondo-con-blur after:content-[''] after:blur-xl after:bg-[url('https://pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev/wallpaper.webp')] after:bg-cover after:bg-center after:absolute after:w-full after:h-full ">
                    <div className="relative z-10 flex flex-col pt-20 md:pt-8 lg:pt-0 xl:pt-8">
                        {children}
                        <TopBar />
                        {/* <Footer /> */}
                        <Navbar />
                        <Analytics />
                        <SpeedInsights />
                    </div>
                </main>
            </body>
        </html>
    );
}
