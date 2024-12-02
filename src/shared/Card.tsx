import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { Product } from "../api/requests";
import { useTruncate } from "../Hooks/useTruncate";
import ActionButtons from "./ActionButtons";
import useInView from "../Hooks/useInView";

interface CardProps {
  to: string;
  isVisible: boolean;
}
const scaleInCenter = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(autofill, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  justify-items: center;
`;
const Card = styled(Link)<CardProps>`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  height: fit-content;
  animation: ${(props) => (props.isVisible ? scaleInCenter : "none")} 0.5s
    ease-in-out;
  gap: 10px;
  text-decoration: none;
  max-height: 800px;
  overflow: hidden;
  align-items: center;
  background-color: transparent;
  background: ${({ theme }) => theme.background};

  border-radius: 1rem;
  box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
   ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
gap: 30px;

      }
        
  `}

  img {
    width: 100%;
    height: 200px;
    max-height: 350px;
    border-radius: 50px;
    object-fit: scale-down;
    max-width: 200px;
    max-height: 300px;
  }

  h1 {
    font-size: 1.5rem;
    text-align: center;
    color: ${(props) => props.theme.colors.text};
    ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
font-size: 1rem;
text-align: flex-start;

      }
        
  `}
  }

  p {
    text-align: left;
    color: ${(props) => props.theme.colors.text};
    max-height: 60px;
     ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
font-size: 0.8rem;

      }
        
  `}

    span {
      color: green;
    }
  }
`;
const PriceHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 10px;

  p:nth-child(1) {
    color: ${(props) => props.theme.colors.text};
    font-size: 1.5rem;
    font-weight: 800;
    padding: 1rem;
    border-radius: 100%;
    box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
     ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
font-size: 1rem;
padding: 1rem;

      }
        
  `}

    img {
      width: 20px;
      height: 20px;
    }
  }

  p:nth-child(2),
  p:nth-child(3) {
    align-self: flex-end;

    img {
      width: 15px;
      height: 15px;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
    padding-bottom: 1rem;

    button {
      width: 100px;
      height: 50px;
      border-radius: 50px;
      font-weight: 600;
      background-color: ${(props) => props.theme.colors.quaternary};
      color: ${(props) => props.theme.colors.text};
      border: 1px solid ${(props) => props.theme.colors.white};
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.text};
      }
    }
  }
`;
// const CircleDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 108px;
//   height: 28px;
//   justify-content: space-between;

//   div {
//     width: 28px;
//     height: 28px;
//     border-radius: 100%;
//     background-color: #c47530;

//     &:nth-child(2) {
//       background-color: #fac585;
//     }

//     &:nth-child(3) {
//       background-color: #05697c;
//     }
//   }

//   @media (max-width: 768px) {
//     width: 84px;
//     height: 22px;

//     div {
//       width: 22px;
//       height: 22px;
//     }
//   }
// `;
interface productProps {
  product: Product;
}

export const CardContainer: React.FC<productProps> = ({ product }) => {
  const { truncateDescription, toggleDescription, toggleHandler } =
    useTruncate();
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <CardGrid ref={ref}>
      <Card
        key={product.id}
        to={`/products/${product.id}`}
        isVisible={isInView}
      >
        <img src={product.image} alt={product.title} />
        <h1>{product.title.substring(0, 50)}</h1>
        {/* <CircleDiv>
          <div></div>
          <div></div>
          <div></div>
        </CircleDiv> */}
        <p style={{ lineHeight: "20px" }}>
          {truncateDescription(product.description, 100, product.id)}
          {product.description.length > 100 && (
            <span
              onClick={() => toggleHandler(product.id)}
              style={{ color: "grey" }}
            >
              {toggleDescription[product.id] ? "See Less" : "See More"}
            </span>
          )}
        </p>

        <PriceHolder>
          <p>
            {product.price}
            <img src="/icons/dollar-symbol.png" alt="dollar" />
          </p>
          <p>
            {product.brand} <img src="/icons/star.png" alt="star" />
          </p>
          <p>
            {product.discount} <img src="/icons/trolley.png" alt="Items left" />
          </p>
          <p>Model: {product.model}</p>
        </PriceHolder>

        <ActionButtons product={product} showBuyButton={true} quantity={1} />
        {/* {showPayment && (
          <BuyModal />
        )} */}
      </Card>
    </CardGrid>
  );
};
