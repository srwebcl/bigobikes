import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });

export const metadata: Metadata = {
  title: "Bigo Bike's - Taller Especializado",
  description: "Taller de bicicletas en La Serena. Especialistas en suspensiones, mantenciones y reparaciones. Retiro y entrega a domicilio.",
};

import LayoutClient from "@/components/layout/LayoutClient";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${caveat.variable}`} suppressHydrationWarning={true}>
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
