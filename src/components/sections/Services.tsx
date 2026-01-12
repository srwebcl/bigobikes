"use client";

import { ShoppingCart } from "lucide-react";

interface Service {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    desc: string;
}

const SERVICES: Service[] = [
    {
        id: 1,
        name: "Mantención Full + 50 hrs susp.",
        price: 75000,
        category: "Premium",
        image: "/images/taller-bigobike-4.jpeg",
        desc: "El servicio más completo. Incluye desarme total y servicio técnico especializado a suspensiones."
    },
    {
        id: 2,
        name: "Promo Mantención Full + Horquilla",
        price: 50000,
        category: "Promo",
        image: "/images/taller-bigobike-11.jpg",
        desc: "Mantención general completa más servicio básico a horquilla mecánica."
    },
    {
        id: 3,
        name: "Servicio 200 hrs Suspensión",
        price: 45000,
        category: "Suspensión",
        image: "/images/taller-bigobike-12.jpg",
        desc: "Mantenimiento profundo para horquilla o shock. Aceites y retenes."
    },
    {
        id: 4,
        name: "Servicio Cuadro Doble",
        price: 45000,
        category: "Cuadro",
        image: "/images/taller-bigobike-13.jpg",
        desc: "Limpieza, engrase y cambio de rodamientos de basculante."
    },
    {
        id: 5,
        name: "Mantención Full",
        price: 40000,
        category: "General",
        image: "/images/taller-bigobike-5.jpeg",
        desc: "Ajuste completo, limpieza profunda, centrado de ruedas y lubricación."
    },
    {
        id: 6,
        name: "Servicio Dropper",
        price: 25000,
        category: "Componentes",
        image: "/images/taller-bigobike-15.jpg",
        desc: "Mantenimiento a tija retráctil (cartucho cerrado)."
    },
    {
        id: 7,
        name: "Sangrado de Frenos",
        price: 12000,
        category: "Frenos",
        image: "/images/taller-bigobike-18.jpg",
        desc: "Purga de sistema hidráulico, líquido nuevo y ajuste de calipers."
    },
    {
        id: 8,
        name: "Armado Bicicleta Nueva",
        price: 24000,
        category: "General",
        image: "/images/taller-bigobike-6.jpeg",
        desc: "Sacada de caja, armado profesional y ajuste a medida del usuario."
    },
];

interface ServicesProps {
    addToCart?: (service: Service) => void;
}

export default function Services({ addToCart }: ServicesProps) {
    return (
        <section id="servicios" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-black text-gray-900 mb-4">SERVICIOS <span className="text-cyan-600">PRO</span></h2>
                    <p className="text-gray-600">Selecciona el servicio que tu bicicleta necesita. Nosotros nos encargamos del resto.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SERVICES.map((service) => (
                        <div key={service.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                                    {service.category}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight min-h-[3rem]">{service.name}</h3>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">{service.desc}</p>

                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    <div className="flex items-end justify-between mb-4">
                                        <span className="text-gray-400 text-xs font-medium">Precio desde</span>
                                        <span className="text-2xl font-black text-cyan-600">${service.price.toLocaleString('es-CL')}</span>
                                    </div>

                                    <a
                                        href={`https://wa.me/56982539614?text=${encodeURIComponent(`Hola, me interesa solicitar el servicio: ${service.name} (${service.price.toLocaleString('es-CL')})`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-cyan-600 transition-colors cursor-pointer hover:scale-105 transform duration-300"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        Solicitar Servicio
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
