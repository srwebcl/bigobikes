import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contacto" className="bg-gray-950 text-white pt-20 pb-10 border-t border-gray-900">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                {/* Brand */}
                <div className="col-span-1 md:col-span-2">
                    <img src="/images/logo.svg" alt="Bigo Bike's" className="h-14 w-auto mb-6" />
                    <p className="text-gray-400 max-w-sm mb-6">
                        Somos el taller líder en La Serena, especializados en suspensiones y mantenciones integrales. Pasión por el ciclismo y la mecánica de precisión.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/tallerbigobike/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-cyan-500 transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="mailto:contacto@bigobikes.cl" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-cyan-500 transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Services Links */}
                <div>
                    <h3 className="font-bold text-lg mb-6 text-cyan-500">Servicios</h3>
                    <ul className="space-y-3 text-gray-400">
                        <li className="hover:text-white cursor-pointer transition-colors">Mantención Full</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Suspensiones</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Frenos</li>
                        <li className="hover:text-white cursor-pointer transition-colors">Armado de Bicicletas</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="font-bold text-lg mb-6 text-cyan-500">Contacto</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-gray-400">
                            <MapPin className="w-5 h-5 text-cyan-500 mt-1" />
                            <span>Viviana Chepillo 3119<br />La Serena, Coquimbo</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-400">
                            <Phone className="w-5 h-5 text-cyan-500" />
                            <a href="tel:+56981560051" className="hover:text-white transition-colors">+56 9 8156 0051</a>
                        </li>
                        <li className="flex items-center gap-3 text-gray-400">
                            <Mail className="w-5 h-5 text-cyan-500" />
                            <a href="mailto:contacto@bigobikes.cl" className="hover:text-white transition-colors">contacto@bigobikes.cl</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="container mx-auto px-6 border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                <p>&copy; {new Date().getFullYear()} Bigo Bike's. Todos los derechos reservados.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-gray-400">Términos</Link>
                    <Link href="#" className="hover:text-gray-400">Privacidad</Link>
                </div>
            </div>
        </footer>
    );
}
