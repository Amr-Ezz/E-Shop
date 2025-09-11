import { NewProduct } from "../api/requests";
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
  gap: 10px;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;

  ${({ theme }) => `
    @media (max-width: ${theme.breakPoints.lg}) {
      justify-content: center;
      gap: 0.75rem;
    }

    @media (max-width: ${theme.breakPoints.md}) {
      flex-wrap: wrap;
      justify-content: center;
    }

    @media (max-width: ${theme.breakPoints.xs}) {
      flex-direction: column;
      align-items: stretch;
      gap: 0.5rem;
    }
  `}
`;

const BaseButton = styled.button`
  flex: 1;
  min-width: 120px;
  max-width: 200px;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${({ theme }) => `
    @media (max-width: ${theme.breakPoints.md}) {
      font-size: 0.85rem;
      padding: 0.5rem 0.75rem;
    }

    @media (max-width: ${theme.breakPoints.xs}) {
      width: 100%;
      font-size: 0.8rem;
    }
  `}
`;

const StyledBuyButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.text};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
  }
`;

const StyledAddButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.text};

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
