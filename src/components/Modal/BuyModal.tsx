import { useState } from "react";
import styled from "styled-components";
import { Product } from "../../api/requests";

interface BuyTypes {
  onClose: () => void;
  product: Product;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ModalWrapper = styled.div`
background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(224,140,255,1) 100%);  border-radius: 30px;
  padding: 34px;
  width: 90%;
  max-width: 500px;
  box-shadow: 15px 15px 30px rgb(25, 25, 25), -15px -15px 30px rgb(60, 60, 60);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const ProductImage = styled.img`
  object-fit: contain;
  width: 200px;
  height: 200px;
  padding-top: 4rem;
`;

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 8px;
  text-align: center;
`;

const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: white;
  margin-bottom: 16px;
  text-align: left;
`;

const PriceText = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const CounterButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const CounterText = styled.p`
  margin: 0 16px;
  font-size: 1.2rem;
`;

const Button = styled.button`
  width: 86px;
  height: 50px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 600;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const BuyModal: React.FC<BuyTypes> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <ModalOverlay>
      <ModalWrapper>
        <ProductImage src={product.image} alt={product.title} />
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <PriceText>Price: ${(product.price * quantity).toFixed(2)}</PriceText>
        <Counter>
          <CounterButton
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          >
            -
          </CounterButton>
          <CounterText>{quantity}</CounterText>
          <CounterButton onClick={() => setQuantity((prev) => prev + 1)}>
            +
          </CounterButton>
        </Counter>
        <ButtonWrapper>
          <Button onClick={onClose}>Close</Button>
          <Button onClick={onClose}>Buy</Button>
        </ButtonWrapper>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default BuyModal;
