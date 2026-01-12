"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";

import CartDrawer from "./CartDrawer";

interface NavbarProps {
    cartCount?: number; // Kept for interface compatibility but Navbar uses context internally now or prop can be removed
}

export default function Navbar({ cartCount: propCount }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

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
                                src="/images/logo.png"
                                alt="Bigo Bike's Logo"
                                className={`absolute left-0 w-auto max-w-none object-contain transition-all duration-500 ease-in-out z-50 origin-left
                                    ${scrolled
                                        ? "-top-3 h-20 md:h-28 drop-shadow-md" /* Scrolled: Sube un poco más */
                                        : "-top-5 h-32 md:h-48 filter-none" /* Transparent: MASIVO */
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

                        <div
                            className="relative cursor-pointer group"
                            onClick={() => setIsCartOpen(true)}
                        >
                            <div className={`p-2 rounded-full transition-colors ${scrolled ? "bg-gray-100 hover:bg-gray-200 text-gray-900" : "bg-white/10 hover:bg-white/20 text-white"}`}>
                                <ShoppingCart className="w-5 h-5" />
                            </div>
                            {propCount !== undefined && propCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                                    {propCount}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <div className="relative cursor-pointer" onClick={() => setIsCartOpen(true)}>
                            <ShoppingCart className={`w-6 h-6 ${scrolled ? "text-gray-900" : "text-white"}`} />
                            {propCount !== undefined && propCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                    {propCount}
                                </span>
                            )}
                        </div>
                        <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? "text-gray-900" : "text-white"}>
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white/95 backdrop-blur-xl absolute top-full w-full shadow-2xl border-t border-gray-100 animate-fade-in-up">
                        <div className="flex flex-col p-8 space-y-6 font-bold text-xl text-gray-800 text-center">
                            <Link href="#inicio" onClick={() => setIsOpen(false)} className="hover:text-cyan-500 transition-colors">Inicio</Link>
                            <Link href="#servicios" onClick={() => setIsOpen(false)} className="hover:text-cyan-500 transition-colors">Servicios</Link>
                            <Link href="#agenda" onClick={() => setIsOpen(false)} className="hover:text-cyan-500 transition-colors">Agendar</Link>
                            <Link href="#contacto" onClick={() => setIsOpen(false)} className="hover:text-cyan-500 transition-colors">Contacto</Link>
                        </div>
                    </div>
                )}
            </nav>
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
}
