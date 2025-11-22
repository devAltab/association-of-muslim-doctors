import { useState } from "react";

import { Link, useLocation } from "react-router-dom";


const navLinks = [
    "Home",
    "About Us",
    "Membership",
    "Members",
    "AMD Academy",
    "Milestone",
    "Gallery",
    "E-Newspaper",
    "Contact Us",
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <>

            <div className="bg-emerald-700 text-white text-xs sm:text-sm">
                <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <span className="font-semibold tracking-wide">
                        Association of Muslim Doctors
                    </span>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 opacity-90">
                        <span>+91 9142048981</span>
                        <span>+91 9431057091</span>
                        <span className="hidden sm:inline">infoamd2009@gmail.com</span>
                    </div>
                </div>
            </div>


            <header className="bg-white/90 backdrop-blur shadow-sm sticky top-0 z-30">
                <div className="max-w-full mx-auto px-4 py-3 flex items-center justify-between">


                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full border-20">
                            <img src="./images/logo.png" alt="logo" />
                        </div>
                        <div>
                            <h1 className="text-sm sm:text-lg font-semibold leading-tight">
                                Association of Muslim Doctors
                            </h1>
                            <p className="text-[11px] sm:text-xs text-slate-500">
                                Patna, Bihar • Serving humanity through healthcare
                            </p>
                        </div>
                    </div>


                    <nav className="hidden lg:flex items-center gap-4 text-sm">
                        {navLinks.map((link) => {
                            const path =
                                link === "Home"
                                    ? "/"
                                    : `/${link.toLowerCase().replace(/\s+/g, "")}`;

                            const isActive = currentPath === path;

                            return (
                                <Link
                                    key={link}
                                    to={path}
                                    className={`px-2 py-1 rounded-md transition ${isActive
                                        ? "text-emerald-700 font-semibold bg-emerald-50"     // ACTIVE LINK STYLE
                                        : "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50" // NORMAL STYLE
                                        }`}
                                >
                                    {link}
                                </Link>
                            );
                        })}

                        <button className="ml-2 px-4 py-2 rounded-full text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-sm">
                            Become a Member
                        </button>
                    </nav>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-200 text-slate-700"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {!menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h16" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
                            )}
                        </svg>
                    </button>
                </div>
            </header>
        </>
    );
}
