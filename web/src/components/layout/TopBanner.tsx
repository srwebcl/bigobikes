import Link from "next/link";

export default function TopBanner() {
    return (
        <div className="fixed top-0 left-0 w-full bg-black text-white text-xs md:text-sm h-10 flex items-center overflow-hidden z-[60]">
            <div className="whitespace-nowrap animate-marquee flex items-center gap-4 w-full">
                <span className="font-medium tracking-wide">
                    Agenda tu hora <Link href="#agenda" className="text-cyan-400 font-bold uppercase mx-1 hover:underline">AQUÍ</Link>
                    <span className="mx-2 text-gray-500">|</span>
                    Retiro y entrega a <span className="text-cyan-400 font-bold uppercase mx-1">DOMICILIO</span>
                    <span className="mx-2 text-gray-500">|</span>
                    Atención de <span className="text-white font-semibold">Lunes a Domingo</span>
                    <span className="mx-4 text-cyan-500">•</span>
                </span>
                <span className="font-medium tracking-wide">
                    Agenda tu hora <Link href="#agenda" className="text-cyan-400 font-bold uppercase mx-1 hover:underline">AQUÍ</Link>
                    <span className="mx-2 text-gray-500">|</span>
                    Retiro y entrega a <span className="text-cyan-400 font-bold uppercase mx-1">DOMICILIO</span>
                    <span className="mx-2 text-gray-500">|</span>
                    Atención de <span className="text-white font-semibold">Lunes a Domingo</span>
                </span>
            </div>
        </div>
    );
}
