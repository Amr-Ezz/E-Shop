import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { NewProduct } from "../api/requests";
// import { useTruncate } from "../Hooks/useTruncate";
import ActionButtons from "./ActionButtons";
import useInView from "../Hooks/useInView";
import getDynamicThreshold from "../Utilities/DynamicThreshold";

interface CardProps {
  isvisible: boolean;
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

/* ---------- GRID (belongs in parent, but reusable here) ---------- */
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 1rem;
  width: 100%;
  align-items: start;
`;

/* ---------- CARD WRAPPER ---------- */
const CardWrapper = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  max-height: 500px;
  width: 100%;
  padding: 0.5rem 1rem 1rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.background};
  box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
  text-decoration: none;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  animation: ${({ isvisible }) => (isvisible ? scaleInCenter : "none")} 0.5s
    ease-in-out;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

/* ---------- MEDIA ---------- */
const CardImage = styled.img`
  width: 100%;
  height: 40vh;
  object-fit: contain; /* changed from contain for consistency */
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

/* ---------- TEXT ---------- */
const CardTitle = styled.h1`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ theme }) => `
    @media (max-width: ${theme.breakPoints.md}) {
      font-size: 1rem;
      text-align: start;
    }
  `}
`;

// const CardDescription = styled.p`
//   font-size: 0.75rem;
//   color: ${({ theme }) => theme.colors.text};
//   margin-bottom: 0.5rem;
//   line-height: 1.4;
//   display: -webkit-box;
//   -webkit-line-clamp: 3; 
//   -webkit-box-orient: vertical;
//   overflow: hidden;
//   text-overflow: ellipsis;

//   ${({ theme }) => `
//     @media (max-width: ${theme.breakPoints.md}) {
//       font-size: 0.8rem;
//     }
//   `}
// `;

// const ToggleButton = styled.button`
//   background: none;
//   border: none;
//   color: grey;
//   cursor: pointer;
//   font-size: 0.75rem;
//   margin-left: 0.25rem;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

/* ---------- PRICE & DETAILS ---------- */
const PriceHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: auto;
  align-items: center;
  gap: 1.5rem;
`;

const PriceText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  font-weight: 800;
  padding: 1rem;
  border-radius: 100%;
  box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;

  img {
    width: 20px;
    height: 20px;
    margin-left: 0.25rem;
  }

  ${({ theme }) => `
    @media (max-width: ${theme.breakPoints.md}) {
      font-size: 1rem;
      padding: 1rem;
    }
  `}
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  gap: 0.25rem;


  img {
    width: 20px;
  }
`;

/* ---------- COMPONENT ---------- */
interface ProductProps {
  product: NewProduct;
}

export const CardContainer: React.FC<ProductProps> = ({ product }) => {
  // const { truncateDescription, toggleDescription, toggleHandler } = useTruncate();
  const { ref, isInView } = useInView(getDynamicThreshold);
  const navigate = useNavigate();

  const imageUrl =
    product.image;
    const handleNavigate = () => {
      navigate(`/products/${product.id}`);
    };

  return (
    <CardWrapper ref={ref} onClick={handleNavigate} isvisible={isInView}>
      <CardImage src={imageUrl} alt={`Image of ${product.title}`} />
      <CardTitle>{product.title}</CardTitle>

      {/* <CardDescription>
        {truncateDescription(product.description, 100, product.id)}
        {product.description.length > 100 && (
          <ToggleButton onClick={() => toggleHandler(product.id)}>
            {toggleDescription[product.id] ? "See Less" : "See More"}
          </ToggleButton>
        )}
      </CardDescription> */}

      <PriceHolder>
        <PriceText>
          {product.price}
          <img src="/icons/dollar-symbol.png" alt="dollar" loading="lazy" />
        </PriceText>
        <InfoText>
       {product.rating.rate} <img src="/icons/star.png" alt="star" loading="lazy" />
        </InfoText>
        {/* <InfoText>
          {product.discount}{" "}
          <img src="/icons/trolley.png" alt="Items left" loading="lazy" />
        </InfoText> */}
        {/* <InfoText>Model: {product.model}</InfoText> */}
      </PriceHolder>

      <ActionButtons product={product} showBuyButton={true} quantity={1} />
    </CardWrapper>
  );
};
