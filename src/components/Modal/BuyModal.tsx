import styled from "styled-components";
import { Product } from "../../api/requests";

interface BuyTypes {
  onClose: () => void;
  product: Product;
  children: React.ReactNode;
  quantity: number;
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
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  padding: 16px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);

  max-width: 1100px;
  max-height: fit-content;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: none;

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
  color: ${(props) => props.theme.colors.text};
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

// const ButtonWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 20px;

//   @media (max-width: 480px) {
//     flex-direction: column;
//     gap: 12px;
//     width: 100%;
//   }
// `;

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
const ModalRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
const ModalRows = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.1);
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.9rem;
    text-align: center;
    position: relative;
    color: ${(props) => props.theme.colors.text};
  }
`;

const BuyModal: React.FC<BuyTypes> = ({
  product,
  children,
  quantity,
}) => {
  if (!product) return <p>Loading...</p>;

  return (
    <ModalOverlay>
      <ModalWrapper>
        <ModalRows>
          <h2>Complete Your Purchase</h2>
          <ModalRow>
            <p> Product Name: </p>
            <ProductTitle> {product.title.substring(0, 50)}</ProductTitle>
          </ModalRow>
          {/* <ProductImage src={product.image} alt={product.title} /> */}
          <ModalRow>
            <p>Quantity:</p> <CounterText>{quantity}</CounterText>
          </ModalRow>
          <ModalRow>
            {" "}
            <p>Price:</p>{" "}
            <PriceText> ${(product.price * quantity).toFixed(2)}</PriceText>
          </ModalRow>
          <ModalRow style={{ fontWeight: "bold", borderBottom: "none" }}>
            <p>Total</p>{" "}
            <PriceText> ${(product.price * quantity).toFixed(2)}</PriceText>
          </ModalRow>
        </ModalRows>

        {/* <Counter>
          <CounterButton
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          >
            -
          </CounterButton>
          <CounterButton onClick={() => setQuantity((prev) => prev + 1)}>
            +
          </CounterButton>
        </Counter>
        <ButtonWrapper>
          <Button onClick={onClose}>Close</Button>
          <Button onClick={handleCheckOut}>Buy</Button>
        </ButtonWrapper> */}
        {children}
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default BuyModal;
