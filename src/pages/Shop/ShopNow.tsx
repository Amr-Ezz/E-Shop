import { useEffect, useState } from "react";
import { fetchProducts, Product } from "../../api/requests";
import { CardContainer } from "../../shared/Card";
import { ResultsDiv } from "./ShopNow.styled";

const ShopNow = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        console.log(products);
      } catch (error) {
        console.log(error, "Error Fetching All Products");
      }
    };
    getProducts();
  }, [products]);

  return (
    <ResultsDiv>
      {products.map((product) => (
        <CardContainer product={product} key={product.id} />
      ))}
    </ResultsDiv>
  );
};

export default ShopNow;
