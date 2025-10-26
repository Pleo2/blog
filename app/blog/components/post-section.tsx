import {blogPosts} from "@/app/blog/utils";
import {BlogPages} from "@/components/ui/blog-pages";
import {FilterByTagsBlogPost} from "@/app/blog/components/filter-by-tags-blog-post";

export const PostSection = () => {
    return (
        <section className="w-full h-max bg-blue-200/10 before:blur-lg mx-auto flex px-4 text-white">
            <div className="flex flex-col w-full mt-24 max-w-7xl mx-auto space-y-6 pb-24">
                <h2 className="text-5xl text-left">All Blogs</h2>
                <FilterByTagsBlogPost/>
                <BlogPages
                    posts={blogPosts}
                />
            </div>
        </section>
    );
};