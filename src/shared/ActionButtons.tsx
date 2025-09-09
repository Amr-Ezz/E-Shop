import { NewProduct, Product } from "../api/requests";
import { useBuyModal } from "../Context/BuyContext";
import { useCart } from "../Context/CartContext";
import styled from "styled-components";

interface ButtonProps {
  product: NewProduct;
  showBuyButton?: boolean;
  quantity?: number;
}
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
    ${({ theme }) => `
      @media (max-width: ${theme.breakPoints.lg}) {
align-items: center;
max-width: 50%;

}
    @media (max-width: ${theme.breakPoints.xs}) {
    flex-direction: column;
  }
    `}
  button {
    border: none;
    ${({theme}) => `
     @media (max-width: ${theme.breakPoints.xs}) {
   width: 100%;
  }
    `}
  }
`;

const StyledBuyButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 50px;
  padding: 1rem;
  flex: 1;
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  transition: background-color 0.3s ease;
  ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
font-size: 0.7rem;

      }
        
  `}

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
  }
`;
const StyledAddButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 50px;
  padding: 1rem;
  flex: 1;
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  transition: background-color 0.3s ease;
  ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
font-size: 0.7rem;

      }
        
  `}

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
  }
`;

const ActionButtons: React.FC<ButtonProps> = ({
  product,
  showBuyButton,
  quantity,
}) => {
  const { addToCart } = useCart();
  const { openModal } = useBuyModal();
  const handleBuy = () => {
    openModal(product, quantity, product.price);
  };
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    addToCart(product);
  };

  return (
    <ButtonsContainer>
      {showBuyButton && (
        <StyledBuyButton onClick={handleBuy}>BUY NOW</StyledBuyButton>
      )}
      <StyledAddButton onClick={handleAddToCart}>Add To Cart</StyledAddButton>
    </ButtonsContainer>
  );
};

export default ActionButtons;
