import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Card } from "../shared/Card";
import { useProduct } from "../Context/ProductContext";

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 2rem;
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
      setCategory(category); // Set category to fetch products
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
        <Card key={product.id} to={`/products/${product.id}`}>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </Card>
      ))}
    </ProductsContainer>
  );
};

export default ProductPage;
