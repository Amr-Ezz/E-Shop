import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../Context/ProductContext";
import useInView from "../Hooks/useInView";
import { FlexRow } from "../Utilities/StyledUtilities.styled";
import getDynamicThreshold from "../Utilities/DynamicThreshold";
import { useCallback } from "react";
import Image3D from "./Image3D";
const AdsMain = styled(FlexRow).withConfig({shouldForwardProp: (prop) => prop !== "isvisible"})<{ isvisible: boolean }>`
  color: ${(props) => props.theme.colors.text};
  justify-content: space-around;
  height: 310px;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.tertiary} 0%,
    ${(props) => props.theme.colors.secondary} 50%,
    ${(props) => props.theme.colors.primary} 100%
  );
  opacity: ${(props) => (props.isvisible ? 1 : 0)};
  transform: ${(props) =>
    props.isvisible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  padding: 0;
  margin: 0;
  overflow: hidden;
  z-index: 1;
  will-change: opacity;
`;
const ImageDiv = styled.div.withConfig({shouldForwardProp: (prop) => prop !== "isvisible"})<{ isvisible: boolean }>`
  position: relative;
  z-index: 1;
  perspective: 1000px;
  cursor: pointer;
  @keyframes slideInleft {
    0% {
      transform: translateX(-100px);
    }
    100% {
      transform: translateX(0);
    }
  }
  img {
    width: 450px;
    height: 310px;
    object-fit: cover;
    object-position: 100% 70%;
    transform: ${(props) => (props.isvisible ? "slideInLeft" : "all")};
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform-style: preserve-3d;
    &:hover {
      transform: rotateY(15deg) rotateX(10deg) scale(1.05);
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
    }
  }
  h1 {
    position: relative;
    line-height: 38px;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    color: ${({theme}) => theme.colors.text};
  }
`;

const AdsSection = () => {
  const navigate = useNavigate();
  const { setCategory } = useProduct();
  const { ref, isInView } = useInView(getDynamicThreshold);

  const handleNavigate = useCallback(async (category: string) => {
    try {
      setCategory(category);
      navigate(`/products/category/${category}`);
    } catch (error) {
      console.log("Error fetching Product Category", error);
    }
  }, [setCategory, navigate]);

  return (
    <AdsMain isvisible={isInView} ref={ref}>
      <ImageDiv
        ref={ref}
        isvisible={isInView}
        onClick={() => handleNavigate("electronics")}
      >
        <Image3D url="./Rectangle 3.png" width={250} height={250} animationType="bounce"/>
        <h1>Ultimate Electronics Gear</h1>
      </ImageDiv>
      <ImageDiv
        ref={ref}
        isvisible={isInView}
        onClick={() => handleNavigate("men's clothing")}
      >
        <Image3D url="./Men.png" width={250} height={250} animationType="scale" />
        <h1>50% Off Men's clothing</h1>
      </ImageDiv>
      <ImageDiv
        ref={ref}
        isvisible={isInView}
        onClick={() => handleNavigate("jewelery")}
      >
        <Image3D
        url="./Jewelery.png" width={250} height={250} animationType="wave"
        />
        <h1>Jewelery</h1>
      </ImageDiv>
    </AdsMain>
  );
};

export default AdsSection;
