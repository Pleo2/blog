"use client";

import { useState } from "react";
import { Link, Mail } from "feather-icons-react";

export const EmailClient = () => {
    const [showCopy, setShowCopy] = useState(false);

    const email = "leooel23m@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setShowCopy(true);
        setTimeout(() => setShowCopy(false), 1000);
    };

    return (
        <a
            href="#"
            onClick={handleCopy}
            rel="noopener noreferrer"
            className="group transition-all duration-500 hover:scale-110"
        >
            <span className="block group-hover:hidden">
                <Mail className="w-7 stroke-1" />
            </span>
            <span className="hidden bg-white/10 w-7 hover:flex items-center justify-center rounded-lg group-hover:block">
                <Link className="w-4 stroke-1" />
                {showCopy ? (
                    <span className="bg-white/20 rounded-full p-1 px-2 absolute text-xs translate-y-8">
                        copy
                    </span>
                ) : null}
            </span>
        </a>
    );
};
