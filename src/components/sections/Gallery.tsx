"use client";

import { Instagram } from "lucide-react";

// Use local images/videos
const GALLERY_ITEMS = [
    { type: 'image', src: "/images/taller-bigobike-1.jpeg" },
    { type: 'image', src: "/images/taller-bigobike-2.jpeg" },
    { type: 'image', src: "/images/taller-bigobike-3.jpeg" },
    { type: 'image', src: "/images/taller-bigobike-4.jpeg" },
    { type: 'image', src: "/images/taller-bigobike-5.jpeg" },
];

export default function Gallery() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 mb-10 flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-bold mb-2">Galería Bigo</h2>
                    <p className="text-gray-500">Síguenos en Instagram @tallerbigobike</p>
                </div>
                <a href="https://www.instagram.com/tallerbigobike/" target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-cyan-600 font-bold hover:underline">
                    <Instagram className="w-5 h-5" /> Ver más fotos
                </a>
            </div>

            <div className="flex overflow-x-auto pb-8 gap-4 px-6 scrollbar-hide">
                {GALLERY_ITEMS.map((item, i) => (
                    <div key={i} className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden relative group cursor-pointer border border-gray-100 shadow-sm">
                        <img src={item.src} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Instagram className="text-white w-10 h-10" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
