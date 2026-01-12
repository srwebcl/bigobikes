"use client";

import { Star, Clock, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";

const REVIEWS = [
    { name: "Juan Pérez", text: "Excelente servicio, mi bicicleta quedó como nueva. El retiro a domicilio es lo mejor.", rating: 5 },
    { name: "María González", text: "Muy profesionales con las suspensiones. Se nota que saben lo que hacen. 100% recomendados en La Serena.", rating: 5 },
    { name: "Carlos Tapia", text: "Rápidos y confiables. Me salvaron el fin de semana.", rating: 4 },
];

export function Reviews() {
    return (
        <section className="py-16 bg-white border-b">
            <div className="container mx-auto px-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-gray-500 font-semibold flex gap-1 items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> Trustpilot / Google Reviews
                    </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-10">Lo que dicen nuestros riders</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {REVIEWS.map((review, idx) => (
                        <div key={idx} className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <div className="flex justify-center text-yellow-400 mb-4">
                                {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
                            </div>
                            <p className="text-gray-600 italic mb-4">"{review.text}"</p>
                            <h4 className="font-bold text-gray-900">- {review.name}</h4>
                        </div>
                    ))}
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
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

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
