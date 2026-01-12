"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavbarProps {
    cartCount?: number; // Kept for interface compatibility but Navbar uses context internally now or prop can be removed
}

export default function Navbar({ cartCount: propCount }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinkClass = `relative font-medium tracking-wide transition-colors duration-300 hover:text-cyan-500 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-cyan-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${scrolled ? "text-gray-800" : "text-white"}`;

    return (
        <>
            <nav
                className={`fixed w-full z-40 transition-all duration-500 top-10 ${scrolled
                    ? "bg-white/90 backdrop-blur-md shadow-lg py-2 border-b border-gray-100"
                    : "bg-transparent py-4"
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Logo - Opción Sobresaliente (Overhanging) */}
                    <Link href="/" className="relative group py-1 block">
                        {/* Contenedor aún más ancho para soportar el tamaño masivo */}
                        <div className="relative w-[200px] md:w-[280px] h-10 md:h-12 flex items-center">
                            <img
                                src="/images/logo.svg"
                                alt="Bigo Bike's Logo"
                                className={`absolute left-0 w-auto max-w-none object-contain transition-all duration-500 ease-in-out z-50 origin-left
                                    ${scrolled
                                        ? "top-1 h-10 md:h-12 drop-shadow-md"
                                        : "top-0 h-12 md:h-16 filter-none"
                                    } 
                                    group-hover:scale-105
                                `}
                            />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-10">
                        <Link href="#inicio" className={navLinkClass}>Inicio</Link>
                        <Link href="#servicios" className={navLinkClass}>Servicios</Link>
                        <Link href="#agenda" className={navLinkClass}>Agendar</Link>
                        <Link href="#contacto" className={navLinkClass}>Contacto</Link>

                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center gap-4">

                        <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? "text-gray-900" : "text-white"}>
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="fixed inset-0 z-[60] bg-gray-900/98 backdrop-blur-xl flex flex-col items-center justify-center animate-fade-in text-white">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-8 right-6 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
                        >
                            <X className="w-10 h-10" />
                        </button>

                        <div className="flex flex-col space-y-10 font-bold text-4xl text-center tracking-tight">
                            <Link href="#inicio" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 hover:scale-110 transition-all duration-300">Inicio</Link>
                            <Link href="#servicios" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 hover:scale-110 transition-all duration-300">Servicios</Link>
                            <Link href="#agenda" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 hover:scale-110 transition-all duration-300">Agendar</Link>
                            <Link href="#contacto" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 hover:scale-110 transition-all duration-300">Contacto</Link>
                        </div>
                    </div>
                )}
            </nav>

        </>
    );
}
