"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, CheckCircle } from "lucide-react";



// Main video background - Single video
const HERO_VIDEOS = [
    "/videos/taller-bigobike-64.mp4"
];

export default function Hero() {

    const [currentVideo, setCurrentVideo] = useState(0);
    const [videoLoaded, setVideoLoaded] = useState(false);



    const handleVideoEnd = () => {
        setCurrentVideo((prev) => (prev + 1) % HERO_VIDEOS.length);
    };

    return (
        <section id="inicio" className="relative h-screen w-full overflow-hidden bg-gray-900">
            {/* Background Layer */}
            <div className="absolute inset-0 w-full h-full">
                {/* Video Background */}
                <video
                    key={currentVideo} // Force re-render/reload on source change
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onEnded={handleVideoEnd}
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                >
                    <source src={HERO_VIDEOS[currentVideo]} type="video/mp4" />
                </video>


            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10 pt-20">
                {/* Sophisticated Label */}
                <div className="mb-8 animate-fade-in-up px-4 max-w-full">
                    <span className="inline-flex items-center justify-center gap-2 py-2 px-4 md:px-6 rounded-full bg-[#0165a2]/20 border border-[#0165a2]/50 backdrop-blur-md text-white/90 text-[10px] sm:text-xs md:text-base font-semibold tracking-widest md:tracking-[0.25em] uppercase shadow-lg shadow-black/20 max-w-full whitespace-nowrap overflow-hidden text-ellipsis">
                        <span>Pasión por las Bicicletas</span>
                        <span className="text-sm md:text-lg">🚴</span>
                    </span>
                </div>

                {/* Improved H1 */}
                <h1 className="text-white mb-8 tracking-tighter leading-[0.9] animate-fade-in-up delay-100">
                    <span className="block text-3xl md:text-5xl font-light text-gray-200 mb-2 tracking-tight">
                        TU BICICLETA EN
                    </span>
                    <span className="block text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 drop-shadow-2xl">
                        LAS MEJORES MANOS
                    </span>
                </h1>
                <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-10 drop-shadow-md animate-fade-in-up delay-200">
                    <span className="text-white font-bold">Taller de Bicicletas</span> en La Serena. Retiros y entregas a domicilio.
                </p>
                <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up delay-300">
                    <Link href="#agenda" className="bg-[#0165a2] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2">
                        <Calendar className="w-5 h-5" />
                        Agendar Hora
                    </Link>
                    <Link href="#servicios" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all hover:scale-105 flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Ver Servicios
                    </Link>
                </div>
            </div>
        </section>
    );
}
