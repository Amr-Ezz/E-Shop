import axios from "axios";

export interface Product {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  rating: {rate: number, count: number};
}
export const fetchProducts = async (category: string): Promise<Product[]> => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products/');
    return response.data.filter((product: Product) => product.category === category);
  } catch (error: any) {
    console.error('Error fetching the products:', error.message);
    return [];
  }
};


