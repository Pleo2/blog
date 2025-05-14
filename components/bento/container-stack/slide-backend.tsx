import Image from "next/image";

const backendImages = [
    { src: "/svg/backend/supabase.svg", alt: "Supabase" },
    { src: "/svg/backend/postgresql.svg", alt: "Postgresql" },
    { src: "/svg/backend/sqlite.svg", alt: "Sqlite" },
    { src: "/svg/backend/mongodb.svg", alt: "Mongodb" },
    { src: "/svg/backend/mysql.svg", alt: "Mysql" },
    { src: "/svg/backend/expressjs_dark.svg", alt: "Expressjs Dark" },
    { src: "/svg/backend/nestjs.svg", alt: "Nestjs" },
    // { src: "/svg/backend/zeabur-dark.svg", alt: "Zeabur Dark" },
    { src: "/svg/backend/csharp.svg", alt: "Csharp" },
    { src: "/svg/backend/nodejs.svg", alt: "Nodejs" },
    { src: "/svg/backend/zod.svg", alt: "Zod" },
];

export const SlideBackend = () => {
    return (
        <div className="logos group relative overflow-hidden whitespace-nowrap [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
            <div className="animate-slide-right-infinite group-hover:animation-pause inline-block w-max">
                {backendImages.map((image, index) => (
                    <Image
                        key={`backend-image1-${index}`}
                        className="mx-1 inline h-10"
                        src={image.src}
                        alt={image.alt}
                        width={64}
                        height={64}
                        unoptimized
                        style={{ filter: "grayscale(100%) brightness(150%)" }}


                    />
                ))}
            </div>

            <div className="animate-slide-right-infinite group-hover:animation-pause inline-block w-max">
                {backendImages.map((image, index) => (
                    <Image
                        key={`backend-image2-${index}`}
                        className="mx-1 inline h-10"
                        src={image.src}
                        alt={image.alt}
                        width={64}
                        height={64}
                        unoptimized
                        style={{ filter: "grayscale(100%) brightness(150%)" }}

                    />
                ))}
            </div>
        </div>
    );
};
