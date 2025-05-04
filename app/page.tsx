import { BlogPosts } from "@/components/posts";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <section className="w-screen px-4 max-w-3xl flex-col flex gap-1">
            <div className="flex w-max items-start mb-5">
                <h1 className=" leading-3 font-black text-4xl w-full tracking-tighter">
                    Pleo2
                </h1>
            </div>
            <div className="rounded-full w-full ">
                <Link
                    className="cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300"
                    href="https://wakatime.com/@dc33b9be-4484-429a-9ab9-f51a80346371"
                >
                    <Image
                        src="https://wakatime.com/badge/user/dc33b9be-4484-429a-9ab9-f51a80346371.svg"
                        alt="wakatime"
                        width={200}
                        height={50}
                        className="mb-4 drop-shadow-2xl rounded-full"
                    />
                </Link>
            </div>

            <h2 className="leading-3 font-semibold text-md opacity-90 mb-1">
                {`Frontend developer specializing in React & AI.`}
            </h2>
            <h3 className="text-xs leading-3 opacity-70">
                Ready for full-stack challenges. ( +3yrs exp )
            </h3>
        </section>
    );
}
