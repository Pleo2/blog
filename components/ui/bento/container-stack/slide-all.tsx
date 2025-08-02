import Image from "next/image";

const images = [
    { src: "/svg/others/powershell.svg", alt: "Powershell logo" },
    { src: "/svg/others/auth0.svg", alt: "Auth0 logo" },
    { src: "/svg/others/bun.svg", alt: "Bun logo" },
    { src: "/svg/others/prettier-icon-dark.svg", alt: "Prettier logo" },
    { src: "/svg/others/docker.svg", alt: "Docker logo" },
    { src: "/svg/others/github_dark.svg", alt: "GitHub logo" },
    { src: "/svg/others/git.svg", alt: "Git logo" },
    { src: "/svg/others/azure.svg", alt: "Azure logo" }
];

export const SlideAll = () => {
    return (
        <div className="logos group relative overflow-hidden whitespace-nowrap  [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
            <div className="animate-slide-left-infinite-short group-hover:animation-pause inline-block w-max">
                {images.map((image, index) => (
                    <Image
                        key={`image1-${index}`}
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

            <div className="animate-slide-left-infinite-short group-hover:animation-pause inline-block w-max">
                {images.map((image, index) => (
                    <Image
                        key={`image2-${index}`}
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
