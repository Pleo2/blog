import {
    AtSign,
    Github,
    Linkedin,
    LogIn,
    Twitter,
} from "feather-icons-react";
import { EmailClient } from "./email-client";

export const SocialSection = () => {
    return (
        <>
            <div className="flex gap-2 opacity-70">
                <a
                    href="https://twitter.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transition-all duration-500 hover:scale-110"
                >
                    <span className="block group-hover:hidden">
                        <Twitter className="w-7 stroke-1" />
                    </span>
                    <span className="hidden bg-white/10 w-7 hover:flex items-center justify-center rounded-lg group-hover:block">
                        <LogIn className="w-4 stroke-1" />
                    </span>
                </a>
                <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transition-all duration-500 hover:scale-110"
                >
                    <span className="block group-hover:hidden">
                        <Linkedin className="w-7 stroke-1" />
                    </span>
                    <span className="hidden bg-white/10 w-7 hover:flex items-center justify-center rounded-lg group-hover:block">
                        <LogIn className="w-4 stroke-1" />
                    </span>
                </a>
                <a
                    href="https://github.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transition-all duration-500 hover:scale-110"
                >
                    <span className="block group-hover:hidden">
                        <Github className="w-7 stroke-1" />
                    </span>
                    <span className="hidden bg-white/10 w-7 hover:flex items-center justify-center rounded-lg group-hover:block">
                        <LogIn className="w-4 stroke-1" />
                    </span>
                </a>
                <a
                    href="https://treads.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transition-all duration-500 hover:scale-110"
                >
                    <span className="block group-hover:hidden">
                        <AtSign className="w-7 stroke-1" />
                    </span>
                    <span className="hidden bg-white/10 w-7 hover:flex items-center justify-center rounded-lg group-hover:block">
                        <LogIn className="w-4 stroke-1" />
                    </span>
                </a>
                <EmailClient />
                {/* <Mail className="w-7 stroke-1" onClick={() => alert('Mail icon clicked!')} /> */}
            </div>
        </>
    );
};
