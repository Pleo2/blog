import { TopBar } from "@/components/ui/topbar/topbar";
import { Navbar } from "@/components/ui/navbar/navbar";

export default function BlogLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
            <TopBar />
            <main className="relative pb-24">
                {children}
            </main>
            <Navbar />
        </div>
    );
}
