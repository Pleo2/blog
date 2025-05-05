import { SocialSection } from "@/components/social/social-section";
import { Wakatime } from "@/components/wakatime";

export const MainHero = () => {
    return (
        <>
            <div className="flex w-max items-center h-max gap-4 justify-start">
                <h1 className="leading-normal font-medium font-stretch-expanded text-4xl w-full tracking-tighter">
                    Pleo2
                </h1>
            </div>

            <div className="flex gap-2 items-center justify-start h-max mt-4">
            <SocialSection />
            {/* <Wakatime /> */}
            </div>


            <h2 className="text-md opacity-70">
                {`Hi there 🖖, I'm frontend developer `}
            </h2>
            <h3 className=" text-md opacity-70">
                specializing in react and ai.
            </h3>
        </>
    );
};
