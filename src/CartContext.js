import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]); // Correctly define cartItems and setCartItems

    const addToCart = (product) => {
        const existingItemIndex = cartItems.findIndex(
            (item) => item.id === product.id && item.size === product.size
        );

        if (existingItemIndex !== -1) {
            // Item already exists, increase the quantity
            const updatedItems = [...cartItems];
            updatedItems[existingItemIndex].quantity += 1;
            setCartItems(updatedItems);  // Correctly update the cart
        } else {
            // New item, add it to the cart
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const removeItem = (productId, size) => {
        const updatedCart = cartItems.filter(
            (item) => item.id !== productId || item.size !== size
        );
        setCartItems(updatedCart);  // Correctly call setCartItems to remove the item
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeItem, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};
