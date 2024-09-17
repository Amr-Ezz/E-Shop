import React, { createContext, useState, useEffect, ReactNode } from "react";
import { fetchProductsByCategory, Product } from "../api/requests"; 

interface ProductContextProps {
  products: Product[];
  selectedCategory: string;
  setCategory: (category: string) => void;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    if (selectedCategory) {
      const getProductsByCategory = async () => {
        try {
          const data = await fetchProductsByCategory(selectedCategory);
          setProducts(data);
        } catch (error) {
          console.error("Failed to fetch products by category", error);
        }
      };
      getProductsByCategory();
    }
  }, [selectedCategory]);

  return (
    <ProductContext.Provider value={{ products, selectedCategory, setCategory: setSelectedCategory }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = React.useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct Error");
  }
  return context;
};
