import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsById, Product } from "../api/requests";
import styled from "styled-components";
import useQuantity from "../Hooks/useQuantity";
import { Counter, CounterButton, CounterText } from "../shared/Counter";
import { useCart } from "../Context/CartContext";
import ActionButtons from "../shared/ActionButtons";
import SplitText from "./SplitText";

const Main = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  height: fit-content;
`;
const ProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(#fff2, transparent);
  box-shadow: 10px 40px 40px rgba(0.25, 0.25, 0.25, 0.25);

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;
const ProductRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 50px;
  color: ${(props) => props.theme.colors.text};
  img {
    width: 600px;
    height: 400px;
    border-radius: 20px;
    transition: transform 0.3s ease-in-out;
    object-fit: cover;
    cursor: pointer;
    align-self: flex-start;
  }
  &:hover img {
    transform: scale(1.2);
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-around;
  align-items: flex-start;
  padding: 1rem;
  gap: 10px;
  h1 {
    color: ${(props) => props.theme.colors.text};
  }

  p:nth-child(3) {
    font-weight: 600;
    align-self: flex-end;
    color: grey;
  }
  p:nth-child(6) {
    font-weight: 600;
    span {
      color: ${(props) => props.theme.colors.quaternary};
    }
  }
`;
const PriceTag = styled.p`
  color: ${(props) => props.theme.colors.grey};
  font-size: 36px;
  font-weight: 600;
  display: flex;
  gap: 5px;
  span {
    color: green;
    font-size: 0.6em;
    vertical-align: super;
  }
`;
const ContentDesc = styled.div`
  border: 1px solid white;
  padding: 1rem;
`;
const ColumnCart = styled.div`
  display: flex;
  padding: 1rem;
  gap: 10px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  border: 1px solid white;
  p:nth-child(2) {
    border-bottom: 1px solid white;
  }
  p:nth-child(3) {
    font-weight: 600;
    font-size: 18px;
    color: green;
  }
  p:nth-child(4) {
    span {
      color: ${(props) => props.theme.colors.quaternary};
    }
  }
`;
const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const { increment, quantity, decrement } = useQuantity();
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
            <SplitText
              text={product.title}
              animationDuration={500}
              style={{
                margin: 0,
                padding: "2px",
                lineHeight: 1.1,
                fontSize: "16px",
                fontWeight: 600,

              }}
            />
            <br />
            <p>Model: {product.model}</p>
            <PriceTag>
              {product.price * quantity}
              <span>$</span>
            </PriceTag>
            <p>Color: {product.color}</p>

            <ContentDesc>
              <p>{product.description}</p>
            </ContentDesc>
          </Content>
          <ColumnCart>
            <PriceTag>
              {product.price}
              <span>USD</span>
            </PriceTag>
            <p>Free Returns</p>
            <p>In Stock</p>
            <p>
              Discount: <span>{product.discount}%</span>
            </p>
            <p>Quantity</p>

            <Counter>
              <CounterButton onClick={decrement}>-</CounterButton>
              <CounterText>{quantity}</CounterText>
              <CounterButton onClick={increment}>+</CounterButton>
            </Counter>
            <ActionButtons
              product={product}
              onBuy={useCart}
              showBuyButton={true}
            />
          </ColumnCart>
        </ProductRow>
      </ProductDiv>
    </Main>
  );
};

export default ProductDetail;
