import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsById, Product } from "../api/requests";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  height: fit-content;
  padding: 1rem;
  margin: 1rem;
`;
const ProductDiv = styled.div`
  background: linear-gradient(#fff2, transparent);
  box-shadow: 10px 40px 40px rgba(0.25, 0.25, 0.25, 0.25);
  padding: 1rem;

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;
const ProductRow = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
img {
width: 600px;
height: 400px;
border-radius: 20px;
}`
const Content = styled.div`
display: flex;
flex-direction: column;
text-align: left;
justify-content: space-around;
align-items: center;
padding: 1rem;
h1 {
color: ${props => props.theme.colors.quadranery};
};` 
const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetchProductsById(Number(id));
        setProduct(response);
      } catch (error) {
        console.log("error fetch product", error);
      }
    };

    if (id) {
      fetchProducts();
    }
  }, [id]);
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Main>
      <ProductDiv>
        <ProductRow>
          <img src={product.image} alt={product.title} />
          <Content>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </Content>
        </ProductRow>
      </ProductDiv>
    </Main>
  );
};

export default ProductDetail;
