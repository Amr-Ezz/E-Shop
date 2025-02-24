import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CardContainer } from "../shared/Card";
import { useProduct } from "../Context/ProductContext";

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 1rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
`;

const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.text};
`;

const ProductPage = () => {
  const { category } = useParams<{ category: string }>();
  const { products, setCategory } = useProduct();
 

  useEffect(() => {
    if (category) {
      setCategory(category);
      console.log(products, "Products");
    }
  }, [category, setCategory]);

  if (!products.length) {
    return (
      <LoadingMessage>
        {`No products available for category "${category}".`}
      </LoadingMessage>
    );
  }

  return (
    <ProductsContainer>
      {products.map((product) => (
        <CardContainer product={product} />
      ))}
    </ProductsContainer>
  );
};

export default ProductPage;
