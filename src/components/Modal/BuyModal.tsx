import { useState } from "react";
import styled from "styled-components";
import { Product } from "../../api/requests";
import { useNavigate } from "react-router-dom";

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
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 30px;
  padding: 16px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  box-shadow: 15px 15px 30px rgb(25, 25, 25), -15px -15px 30px rgb(60, 60, 60);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    max-width: 95%;
  }
`;

export const ProductImage = styled.img`
  object-fit: contain;
  width: 150px;
  height: 150px;
  padding-top: 3rem;
  border-radius: 80px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
    margin-bottom: 12px;
  }
`;

export const ProductTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 8px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ProductDescription = styled.p`
  font-size: 0.85rem;
  color: ${props => props.theme.colors.text};
  font-weight: 100;
  margin-bottom: 12px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const PriceText = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

export const CounterButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  color: black;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #e0e0e0;
  }

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    font-size: 1rem;
  }
`;

export const CounterText = styled.p`
  margin: 0 16px;
  font-size: 1.2rem;

  @media (max-width: 480px) {
    font-size: 1rem;
    margin: 0 12px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 86px;
  height: 50px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.quaternary};
  color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.white};
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 600;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const BuyModal: React.FC<BuyTypes> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const handleCheckOut = () => {
    const totalPrice = product.price * quantity;
    navigate("/pages/CheckoutPage", {state: {product, totalPrice}});
  };

  if (!product) return <p>Loading...</p>;

  return (
    <ModalOverlay>
      <ModalWrapper>
        <ProductImage src={product.image} alt={product.title} />
        <ProductTitle>{product.title.substring(0, 100)}</ProductTitle>
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
          <Button onClick={handleCheckOut}>Buy</Button>
        </ButtonWrapper>
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default BuyModal;
