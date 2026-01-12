"use client";

import { X, Trash2, CreditCard } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    const { cartItems, removeFromCart, total } = useCart();
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePayment = async () => {
        setIsProcessing(true);
        try {
            // Call our API to "initiate" payment
            const res = await fetch('/api/payment/init', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: total,
                    orderId: `ORD-${Date.now()}`
                })
            });

            const data = await res.json();
            if (data.success) {
                alert(`Simulando redirección a Getnet...\nURL: ${data.paymentUrl}`);
                // In real app: window.location.href = data.paymentUrl;
            } else {
                alert('Error al iniciar pago');
            }

        } catch (error) {
            console.error(error);
            alert("Error de conexión");
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Drawer */}
            <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    <div className="p-6 border-b flex justify-between items-center bg-gray-50">
                        <h2 className="text-xl font-bold">Tu Carrito ({cartItems.length})</h2>
                        <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 space-y-4">
                        {cartItems.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-gray-400">
                                <p>No tienes servicios agregados.</p>
                                <button onClick={onClose} className="mt-4 text-cyan-600 font-bold hover:underline">Ver Servicios</button>
                            </div>
                        ) : (
                            cartItems.map((item, index) => (
                                <div key={`${item.id}-${index}`} className="flex gap-4 items-center border-b pb-4">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                                    <div className="flex-1">
                                        <h4 className="font-bold text-sm text-gray-900">{item.name}</h4>
                                        <p className="text-cyan-600 font-bold">${item.price.toLocaleString('es-CL')}</p>
                                    </div>
                                    <button onClick={() => removeFromCart(index)} className="text-gray-400 hover:text-red-500">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="p-6 border-t bg-gray-50">
                        <div className="flex justify-between items-end mb-4">
                            <span className="text-gray-600">Total a Pagar:</span>
                            <span className="text-3xl font-black text-gray-900">${total.toLocaleString('es-CL')}</span>
                        </div>
                        <button
                            disabled={cartItems.length === 0 || isProcessing}
                            onClick={handlePayment}
                            className="w-full py-4 bg-cyan-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-cyan-500/30"
                        >
                            {isProcessing ? 'Procesando...' : (
                                <>
                                    <CreditCard className="w-5 h-5" />
                                    Pagar con Webpay/Getnet
                                </>
                            )}
                        </button>
                        <p className="text-xs text-center text-gray-400 mt-4 flex items-center justify-center gap-1">
                            Pago seguro procesado por Banco Santander
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
