import Link from "next/link";
import Image from "next/image";

export const Wakatime = () => {
    return (
        <div className="rounded-full w-full ">
            <Link
                className="cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300"
                href="https://wakatime.com/@dc33b9be-4484-429a-9ab9-f51a80346371"
            >
                <Image
                    src="https://wakatime.com/badge/user/dc33b9be-4484-429a-9ab9-f51a80346371.svg"
                    alt="wakatime"
                    width={165}
                    height={50}
                    priority
                    loading="eager"
                    className=" drop-shadow-2xl rounded-full"
                />
            </Link>
        </div>
    );
};
