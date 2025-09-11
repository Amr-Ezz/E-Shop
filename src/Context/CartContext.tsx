import React, { createContext, useState, useContext, ReactNode } from 'react';
import { NewProduct } from '../api/requests';

interface CartItem extends NewProduct {
  quantity: number;
}

interface CartContextType {
  cartItemsCount: number;
  cartItem: CartItem[];
  addToCart: (product: NewProduct) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartItem, setCartItem] = useState<CartItem[]>([]);

  const addToCart = (product: NewProduct) => {
    setCartItem(prevItems => {
      const existingItems = prevItems.find(item => item.id === product.id);
      if (existingItems) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];

    });
  };

const removeFromCart = (productId: number) => {
  setCartItem(prevItems => prevItems.filter(item => item.id !== productId));
};

const updateQuantity = (productId: number, quantity: number) => {
  setCartItem(prevItems =>
    prevItems.map(item =>
      item.id === productId ? { ...item, quantity } : item
    )
  );
};

const cartItemsCount = cartItem.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItemsCount, cartItem, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("Error 303");
  }
  return context;
};
