import {stackPosts} from "./utils";
import {BestBlogPost} from './components/best-blog-post';

export const metadata = {
    title: "Blog",
    description: "Read my blog."
};

export default function  Page() {
    return (
        <div className="w-full h-max mt-12">
            <div className="w-full h-[70vh] ">
                <BestBlogPost posts={stackPosts}/>
            </div>
        </div>
    );
}
