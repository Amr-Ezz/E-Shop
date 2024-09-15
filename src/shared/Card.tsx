import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";




interface CardProps {
    to: string;
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
export const Card = styled(Link)<CardProps>`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colors.white};
  padding: 1rem;
  animation: ${scaleInCenter} 0.5s ease-in-out;
  gap: 10px;
  align-items: center;
  background-color: transparent;

  img {
    width: 100%;
    height: auto;
    border-radius: 50px;
    object-fit: scale-down;
    max-width: 200px;
    max-height: 300px;
  }

  h1 {
    font-size: 1.5rem;
    text-align: center;
    color: ${(props) => props.theme.colors.text};
  }

  p {
    text-align: left;
    color: ${(props) => props.theme.colors.text};

    span {
      color: green;
    }
  }
`;
