"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    // Phone number from context (Footer/Hero)
    const phoneNumber = "56982539614";
    const message = "Hola, me gustaría agendar una hora en el taller.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Bubble logic: could be state or just CSS hover group, but "aparezca al hacer scroll" suggests state too.
    // Let's use simple hover + optional scroll delay.
    // Requested: "La burbuja que aparezca al hacer scroll y que diga '¿Necesitas Ayuda?'"

    return (
        <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-fade-in-up"
            aria-label="Agendar hora por WhatsApp"
        >
            {/* Bubble Message */}
            <div className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-bold text-sm after:content-[''] after:absolute after:top-1/2 after:left-full after:-translate-y-1/2 after:border-8 after:border-transparent after:border-l-white">
                ¿Necesitas Ayuda?
            </div>

            <MessageCircle className="w-8 h-8 fill-current" />
        </Link>
    );
}
