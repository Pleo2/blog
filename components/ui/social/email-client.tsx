"use client";

import { useState } from "react";
import { Link, Mail } from "feather-icons-react";

export const EmailClient = () => {
    const [showCopy, setShowCopy] = useState(false);

    const email = "leooel23m@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setShowCopy(true);
        setTimeout(() => setShowCopy(false), 2500);
    };

    return (
        <a
            href="#"
            onClick={handleCopy}
            rel="noopener noreferrer"
            className="group transition-all duration-500 hover:scale-110"
        >
            <span className="block group-hover:hidden">
                <Mail className="w-9 h-9 stroke-1" />
            </span>
            <span className="hidden bg-white/10 w-9  hover:flex items-center justify-center rounded-lg group-hover:block">
                <Link className="w-9 h-9 p-1 stroke-1" />
            </span>
            
            {/* Cloud notification */}
            {showCopy && (
                <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 z-50 animate-fade-in-bounce">
                    <div className="relative">
                        {/* Cloud shape */}
                        <div className="bg-white/70 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-full text-xs font-medium shadow-lg">
                            copy 
                        </div>
                        {/* Arrow pointing left */}
                        <div className="absolute top-1/2 right-full transform -translate-y-1/2">
                            <div className="w-0 h-0 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-white/70"></div>
                        </div>
                    </div>
                </div>
            )}
        </a>
    );
};
