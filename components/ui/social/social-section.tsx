import { AtSign, Github, Linkedin, LogIn, Twitter } from "feather-icons-react";
import { EmailClient } from "./email-client";

export const SocialSection = () => {
    const socialLinksData = [
        {
            name: "Twitter",
            href: "https://twitter.com/yourprofile",
            IconComponent: Twitter,
            iconClassName: "w-9 h-9 stroke-1",
            hoverIconClassName: "w-9 h-9 p-1 stroke-1",
            loginIconContainerClassName: "w-9"
        },
        {
            name: "LinkedIn",
            href: "https://linkedin.com/in/yourprofile",
            IconComponent: Linkedin,
            iconClassName: "w-9 h-9 stroke-1",
            hoverIconClassName: "w-9 h-9 p-1 stroke-1",
            loginIconContainerClassName: "w-9"
        },
        {
            name: "GitHub",
            href: "https://github.com/yourprofile",
            IconComponent: Github,
            iconClassName: "w-9 h-9 stroke-1",
            hoverIconClassName: "w-9 h-9 p-1 stroke-1",
            loginIconContainerClassName: "w-9"
        },
        {
            name: "Threads",
            href: "https://treads.com/yourprofile",
            IconComponent: AtSign,
            iconClassName: "w-9 h-9 stroke-1",
            hoverIconClassName: "w-9 h-9 p-1 stroke-1",
            loginIconContainerClassName: "w-9"
        }
    ];

    return (
        <>
            <div className="flex gap-4 opacity-70 z-50">
                {socialLinksData.map((item, index) => (
                    <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group transition-all duration-500 hover:scale-110 opacity-0 translate-y-4 animate-fade-in-up`}
                        style={{
                            animationDelay: `${index * 150}ms`,
                            animationFillMode: 'forwards'
                        }}
                        aria-label={`Visita mi perfil de ${item.name}`}
                    >
                        <span className="block group-hover:hidden">
                            <item.IconComponent
                                className={item.iconClassName}
                            />
                        </span>
                        <span
                            className={`hidden bg-white/10 ${item.loginIconContainerClassName} hover:flex items-center justify-center rounded-lg group-hover:block`}
                        >
                            <LogIn className={item.hoverIconClassName} />
                        </span>
                    </a>
                ))}
                <span 
                    className="w-9 h-9 opacity-0 translate-y-4 animate-fade-in-up"
                    style={{
                        animationDelay: `${socialLinksData.length * 150}ms`,
                        animationFillMode: 'forwards'
                    }}
                >
                    <EmailClient />
                </span>
                {/* <Mail className="w-7 stroke-1" onClick={() => alert('Mail icon clicked!')} /> */}
            </div>
        </>
    );
};
