"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface Service {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface CartContextType {
    cartCount: number;
    cartItems: Service[];
    addToCart: (service: Service) => void;
    removeFromCart: (index: number) => void;
    total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<Service[]>([]);

    const addToCart = (service: Service) => {
        setCartItems((prev) => [...prev, service]);
    };

    const removeFromCart = (index: number) => {
        setCartItems((prev) => prev.filter((_, i) => i !== index));
    };

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <CartContext.Provider value={{ cartCount: cartItems.length, cartItems, addToCart, removeFromCart, total }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
