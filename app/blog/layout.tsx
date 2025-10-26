import {TopBar} from "@/components/ui/topbar/topbar";
import {Navbar} from "@/components/ui/navbar/navbar";
import {cn} from '@/lib/utils';
import {MainHero} from '@/components/ui/hero/main-hero';
import {BlogPages} from "@/components/ui/blog-pages";
import {blogPosts} from "@/app/blog/utils";
import {BlogLayoutHero} from "@/app/blog/components/blog-layout-hero";
import {PostSection} from "@/app/blog/components/post-section";

export default function BlogLayout({children}: { children: React.ReactNode; }) {
    return (
        <>
            <BlogLayoutHero>
                {children}
            </BlogLayoutHero>
            <PostSection/>
        </>
    );
}
