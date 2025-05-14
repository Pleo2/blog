import Image from "next/image";

const frontendImages = [
    { src: "/svg/frontend/react_dark.svg", alt: "React logo" },
    { src: "/svg/frontend/figma.svg", alt: "Figma" },
    { src: "/svg/frontend/vitejs.svg", alt: "Vitejs" },
    { src: "/svg/frontend/astro_dark.svg", alt: "Astro dark" },
    { src: "/svg/frontend/jest.svg", alt: "Jest" },
    { src: "/svg/frontend/nextjs_icon_dark.svg", alt: "Nextjs icon dark" },
    { src: "/svg/frontend/vitest.svg", alt: "Vitest" },
    { src: "/svg/frontend/tailwindcss.svg", alt: "Tailwindcss" },
    { src: "/svg/frontend/vercel_dark.svg", alt: "Vercel dark" },
    { src: "/svg/frontend/css.svg", alt: "Css" },
    { src: "/svg/frontend/html5.svg", alt: "Html5" },
    { src: "/svg/frontend/javascript.svg", alt: "Javascript" },
    { src: "/svg/frontend/json.svg", alt: "Json" },
    { src: "/svg/frontend/sass.svg", alt: "Sass" },
    { src: "/svg/frontend/typescript.svg", alt: "Typescript" },
    { src: "/svg/frontend/chartjs.svg", alt: "Chartjs" },
    { src: "/svg/frontend/D3.svg", alt: "D3" },
    { src: "/svg/frontend/motion_dark.svg", alt: "Motion dark" },
    { src: "/svg/frontend/shadcn-ui_dark.svg", alt: "Shadcn ui dark" },
    { src: "/svg/frontend/tanstack.svg", alt: "Tanstack" },
    { src: "/svg/frontend/swr-dark.svg", alt: "Swr dark" },
    { src: "/svg/frontend/threejs-dark.svg", alt: "Threejs dark" },
    { src: "/svg/frontend/expo.svg", alt: "Expo" },
    { src: "/svg/frontend/reactquery.svg", alt: "Reactquery" }
];

export const SlideFront = () => {
    return (
        <div className="logos group relative overflow-hidden whitespace-nowrap  [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
            <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
                {frontendImages.map((image, index) => (
                    <Image
                        key={`frontend-image1-${index}`}
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

            <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
                {/* <!-- Ensure that the images cover entire screen width for a smooth transition --> */}
                {frontendImages.map((image, index) => (
                    <Image
                        key={`frontend-image2-${index}`}
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
