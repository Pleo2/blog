import { SocialSection } from "@/components/ui/social/social-section";
import { Wakatime } from "@/components/wakatime";

export const MainHero = () => {
    return (
        <>
            <div className="flex w-max items-center h-max gap-4 justify-start">
                <h1 className="leading-normal font-medium font-stretch-expanded text-4xl w-full tracking-tighter">
                    I'm Jose Moreno
                </h1>
            </div>

            <div className="flex mt-4 items-center justify-start h-max">
                <SocialSection />
                {/* <Wakatime /> */}
            </div>

            {/* <h2 className="text-md opacity-70">
                {`Hi there 🖖, I'm frontend developer `}
            </h2>
            <h3 className=" text-md opacity-70">
                specializing in react and ai.
            </h3> */}
        </>
    );
};
