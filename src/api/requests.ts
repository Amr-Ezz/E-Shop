import axios from "axios";

export interface Product {
  images: any;
  thumbnail: string;
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  discount: number;
  brand: string;
  model: string;
  color: string;
}
export interface Rating {
  rate: number;
  count: number;
}

export interface NewProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
}
export type Category = "men's clothing" | "women's clothing" | "jewelery" | "electronics";


export const fetchProducts = async (): Promise<NewProduct[]> => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const products =  response.data;
    return products;
  } catch (error: any) {
    console.error("Error fetching the products:", error.message);
    return [];
  }
};

export const fetchProductsByCategory = async (category: string): Promise<NewProduct[]> => {
  try {
    const response = await axios.get<NewProduct[]>(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw error;
  }
};

export const fetchProductsById = async (id: number): Promise<NewProduct> => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error, "error fetch single product");
    throw new Error("Could not fetch product");
  }
};


