"use client";

import { Star, ChevronLeft, ChevronRight, Clock, MapPin, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const REVIEWS = [
    { name: "Juan Pérez", text: "Excelente servicio, mi bicicleta quedó como nueva. El retiro a domicilio es lo mejor.", rating: 5 },
    { name: "María González", text: "Muy profesionales con las suspensiones. Se nota que saben lo que hacen. 100% recomendados en La Serena.", rating: 5 },
    { name: "Carlos Tapia", text: "Rápidos y confiables. Me salvaron el fin de semana.", rating: 4 },
    { name: "Andrea Munizaga", text: "La atención por WhatsApp fue inmediata y el servicio técnico impecable. Volveré.", rating: 5 },
    { name: "Roberto Diaz", text: "Gran variedad de repuestos y muy buena mano para la mecánica.", rating: 5 },
    { name: "Fernanda Castillo", text: "Me encantó que retiraran la bici en mi casa. Servicio muy cómodo.", rating: 5 }
];

export function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setItemsPerPage(3);
            } else {
                setItemsPerPage(1);
            }
        };

        // Initial check
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % (REVIEWS.length - itemsPerPage + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - itemsPerPage : prev - 1));
    };

    return (
        <section className="py-16 bg-white border-b">
            <div className="container mx-auto px-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-gray-500 font-semibold flex gap-1 items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> Trustpilot / Google Reviews
                    </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-10">Lo que dicen nuestros riders</h2>

                <div className="relative max-w-6xl mx-auto">
                    {/* Controls */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-12 z-10 bg-white p-2 rounded-full shadow-lg border border-gray-100 text-gray-700 hover:text-cyan-500 hover:scale-110 transition-all"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-12 z-10 bg-white p-2 rounded-full shadow-lg border border-gray-100 text-gray-700 hover:text-cyan-500 hover:scale-110 transition-all"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Carousel Viewport */}
                    <div className="overflow-hidden px-2">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
                        >
                            {REVIEWS.map((review, idx) => (
                                <div
                                    key={idx}
                                    className="flex-shrink-0 px-4 mb-4"
                                    style={{ width: `${100 / itemsPerPage}%` }}
                                >
                                    <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 h-full flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-center text-yellow-400 mb-4">
                                                {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
                                            </div>
                                            <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                                        </div>
                                        <h4 className="font-bold text-gray-900 flex items-center justify-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center text-xs font-bold">
                                                {review.name.charAt(0)}
                                            </div>
                                            {review.name}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: REVIEWS.length - itemsPerPage + 1 }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? "w-8 bg-cyan-500" : "w-2 bg-gray-300 hover:bg-gray-400"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Agenda() {
    const [selectedDate, setSelectedDate] = useState<number | null>(null);

    // Dates relative to today
    const dates = Array.from({ length: 5 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() + i + 1);
        return d;
    });

    return (
        <section id="agenda" className="py-20 bg-gray-900 text-white relative overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-100 transition-all duration-700">
                    <source src="/videos/taller-bigobike-60.mp4" type="video/mp4" />
                </video>
                {/* Gradient: Solid on left for text opacity, clear on right for video popping */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/60 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                    <span className="text-cyan-400 font-bold tracking-widest uppercase mb-2 block">Reserva Online</span>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                        AGENDA TU HORA<br />EN SEGUNDOS
                    </h2>
                    <p className="text-gray-300 text-lg mb-8">
                        Conectado directamente con nuestra disponibilidad. Selecciona el día que más te acomode y nosotros iremos a buscar tu bicicleta si lo necesitas.
                    </p>

                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                <Clock className="w-4 h-4" />
                            </div>
                            <span className="text-gray-300">Horarios flexibles de Lunes a Domingo</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                <MapPin className="w-4 h-4" />
                            </div>
                            <span className="text-gray-300">Cobertura en todo La Serena</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                <CheckCircle className="w-4 h-4" />
                            </div>
                            <span className="text-gray-300">Confirmación inmediata vía WhatsApp</span>
                        </li>
                    </ul>
                </div>

                <div className="lg:w-1/2 w-full bg-white text-gray-900 rounded-3xl p-8 shadow-2xl">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                            Disponibilidad
                        </h3>
                        <span className="text-green-600 text-sm font-medium bg-green-100 px-3 py-1 rounded-full">● Online</span>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-500 mb-2">Selecciona un día</label>
                            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                {dates.map((date, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedDate(i)}
                                        className={`flex-shrink-0 w-16 h-20 rounded-xl flex flex-col items-center justify-center border-2 transition-all ${selectedDate === i
                                            ? 'border-cyan-500 bg-cyan-50 text-cyan-700'
                                            : 'border-gray-100 hover:border-gray-300'
                                            }`}
                                    >
                                        <span className="text-xs font-bold uppercase">{date.toLocaleDateString('es-CL', { weekday: 'short' })}</span>
                                        <span className="text-xl font-bold">{date.getDate()}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={`transition-all duration-300 ${selectedDate !== null ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
                            <label className="block text-sm font-semibold text-gray-500 mb-2">Horarios disponibles</label>
                            <div className="grid grid-cols-3 gap-2">
                                {['09:00', '11:00', '15:00', '17:00', '18:30'].map((time) => (
                                    <button key={time} className="py-2 rounded-lg border border-gray-200 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-colors text-sm font-medium">
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button className="w-full mt-6 bg-cyan-600 text-white py-4 rounded-xl font-bold hover:bg-cyan-700 transition-colors shadow-lg cursor-pointer">
                            Confirmar Reserva
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
