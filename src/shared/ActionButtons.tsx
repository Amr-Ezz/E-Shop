import { Product } from "../api/requests";
import { useCart } from "../Context/CartContext";
import styled from "styled-components";

interface ButtonProps {
  product: Product;
  onBuy: (product: Product) => void;
  showBuyButton?: boolean;

}
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
  padding-bottom: 1rem;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 50px;
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.quaternary};
  color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.white};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
  }
`;
const ActionButtons: React.FC<ButtonProps> = ({ product, onBuy, showBuyButton }) => {
  const { addToCart } = useCart();
  const handleBuy = (e: React.MouseEvent) => {
    e.stopPropagation();
    onBuy?.(product);
  
  };
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <ButtonsContainer>
      {showBuyButton && <StyledButton onClick={handleBuy}>BUY</StyledButton>}
      <StyledButton onClick={handleAddToCart}>Add To Cart</StyledButton>
    </ButtonsContainer>
  );
};

export default ActionButtons;
