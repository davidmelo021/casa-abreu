import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    cartCount: number;
    cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    function addToCart(item: CartItem) {
        setCart(prev => {
            const exists = prev.find(p => p.id === item.id);
            if (exists) {
                return prev.map(p =>
                    p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    }

    function removeFromCart(id: number) {
        setCart(prev => prev.filter(item => item.id !== id));
    }

    function clearCart() {
        setCart([]);
    }

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    const cartTotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, clearCart, cartCount, cartTotal }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart deve ser usado dentro de CartProvider");
    }
    return context;
}