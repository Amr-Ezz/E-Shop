import axios from "axios";
export const fetchProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products/');
    console.log("data", response.data);
  } catch (error: any) {
    console.error('Error fetching the products:', error.message);
  }
};

