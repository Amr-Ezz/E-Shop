import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Product } from '../api/requests';

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItemsCount: number;
  cartItem: CartItem[];
  incrementCartItems: () => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartItem, setCartItem] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItem(prevItems => {
      const existingItems = prevItems.find(item => item.id === product.id);
      if (existingItems) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    incrementCartItems();
  };

  const removeFromCart = (productId: number) => {
    setCartItem(prevItems => {
      const removeItems = prevItems.find(item => item.id === productId);
      if (removeItems) {
        setCartItemsCount(prevCount => prevCount - removeItems.quantity);
      }
      return prevItems.filter(item => item.id !== productId);
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCartItem(prevItems => {
      const updatedItems = prevItems.map(item => {
        if (item.id === productId) {
          const quantityDifference = quantity - item.quantity;
          setCartItemsCount(prevCount => prevCount + quantityDifference);
          return { ...item, quantity };
        }
        return item;
      });
      return updatedItems;
    });
  };

  const incrementCartItems = () => {
    setCartItemsCount(prevCount => prevCount + 1);
  };

  return (
    <CartContext.Provider value={{ cartItemsCount, cartItem, incrementCartItems, addToCart, removeFromCart, updateQuantity }}>
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
