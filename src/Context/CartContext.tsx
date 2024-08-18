import React, { createContext, useState, useContext, ReactNode } from 'react';

interface CartContextType {
  cartItemsCount: number;
  incrementCartItems: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const incrementCartItems = () => {
    setCartItemsCount(prevCount => prevCount + 1);
  };

  return (
    <CartContext.Provider value={{ cartItemsCount, incrementCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("Error 303")
    }
    return context
}