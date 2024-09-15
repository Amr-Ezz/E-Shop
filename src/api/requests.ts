import axios from "axios";

export interface Product {
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
export const fetchProducts = async (category: string): Promise<Product[]> => {
  try {
    const response = await axios.get('https://fakestoreapi.in/api/products');
    const products = response.data.products || response.data;
    return products.filter((product: Product) => product.category === category);
    
  } catch (error: any) {
    console.error('Error fetching the products:', error.message);
    return [];
  }
};
export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    const response = await axios.get(`https://fakestoreapi.in/api/products/category?type=${category}`);
    return response.data || [];
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
};

export const fetchProductsById = async (id: number): Promise<Product> => {
  try {
    const response = await axios.get(`https://fakestoreapi.in/api/products/${id}`);
    return response.data.product || response.data; 

  } catch (error) {
    console.error(error, "error fetch single product");
    throw new Error("Could not fetch product"); 

  }
}


