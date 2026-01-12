"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, CheckCircle } from "lucide-react";

// Images for fallback slider or mobile if video is disabled
const HERO_IMAGES = [
    "/images/taller-bigobike-1.jpeg",
    "/images/taller-bigobike-2.jpeg",
    "/images/taller-bigobike-3.jpeg",
];

// Main video background
const HERO_VIDEO = "/videos/taller-bigobike-10.mp4";

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="inicio" className="relative h-screen w-full overflow-hidden bg-gray-900">
            {/* Background Layer */}
            <div className="absolute inset-0 w-full h-full">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    onLoadedData={() => setVideoLoaded(true)}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                >
                    <source src={HERO_VIDEO} type="video/mp4" />
                </video>

                {/* Fallback Slider (Visible if video not loaded) */}
                {!videoLoaded && HERO_IMAGES.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 animate-kenburns ${index === currentImage ? "opacity-50" : "opacity-0"
                            }`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10 pt-20">
                <div className="relative mb-2 inline-block">
                    <span className="inline-block text-white text-3xl md:text-5xl font-bold py-1 px-1" style={{ fontFamily: 'var(--font-caveat)' }}>
                        <span className="block overflow-hidden whitespace-nowrap border-r-4 border-cyan-400 animate-typewriter pr-1 pb-1">
                            Taller Bigo Bike´s
                        </span>
                    </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-lg leading-tight animate-fade-in-up delay-100">
                    TU BICICLETA EN<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                        LAS MEJORES MANOS
                    </span>
                </h1>
                <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-10 drop-shadow-md animate-fade-in-up delay-200">
                    Taller de Bicicletas en La Serena. Retiros y entregas a domicilio.
                    <span className="block mt-2 font-medium text-cyan-400">¡Pasión por las Bicicletas!</span>
                </p>
                <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up delay-300">
                    <Link href="#agenda" className="bg-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 transition-all hover:scale-105 shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2">
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
