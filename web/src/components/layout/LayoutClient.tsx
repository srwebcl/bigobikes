"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TopBanner from "@/components/layout/TopBanner";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import ScrollUpButton from "@/components/common/ScrollUpButton";
import { CartProvider, useCart } from "@/context/CartContext";

// Inner component to access context
function LayoutContent({ children }: { children: React.ReactNode }) {
    const { cartCount } = useCart();
    return (
        <>
            <TopBanner />
            <Navbar cartCount={cartCount} />
            <main className="min-h-screen bg-white">
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
            <ScrollUpButton />
        </>
    );
}

export default function LayoutClient({ children }: { children: React.ReactNode }) {
    return (
        <CartProvider>
            <LayoutContent>{children}</LayoutContent>
        </CartProvider>
    );
}
