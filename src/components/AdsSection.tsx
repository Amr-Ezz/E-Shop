import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../Context/ProductContext";
import useInView from "../Hooks/useInView";
import { FlexRow } from "../Utilities/StyledUtilities.styled";
const AdsMain = styled(FlexRow)<{ isVisible: boolean }>`
  color: ${(props) => props.theme.colors.text};
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.tertiary} 0%,
    ${(props) => props.theme.colors.secondary} 50%,
    ${(props) => props.theme.colors.primary} 100%
  );
   opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  padding: 0;
  margin: 0;
  overflow: hidden;
  z-index: 1;
  will-change: opacity;
`;
const ImageDiv = styled.div<{ isVisible: boolean }>`
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
    transform: ${(props) => (props.isVisible ? "slideInLeft" : "all")};
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    transform-style: preserve-3d;
    &:hover {
      transform: rotateY(15deg) rotateX(10deg) scale(1.05);
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
    }
  }
  h1 {
    position: absolute;
    width: 151px;
    height: 96px;
    line-height: 38px;
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    color: white;
    top: 102px;
    left: 129px;
  }
`;

const AdsSection = () => {
  const navigate = useNavigate();
  const { setCategory } = useProduct();
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const handleNavigate = async (category: string) => {
    try {
      setCategory(category);
      navigate(`/products/category/${category}`);
    } catch (error) {
      console.log("Error fetching Product Category", error);
    }
  };

  return (
    <AdsMain isVisible={isInView} ref={ref}>
      <ImageDiv
        ref={ref}
        isVisible={isInView}
        onClick={() => handleNavigate("gaming")}
      >
        <img src="Rectangle 4.png" alt="Model Image" />
        <h1>Ultimate Gaming Gear</h1>
      </ImageDiv>
      <ImageDiv
        ref={ref}
        isVisible={isInView}
        onClick={() => handleNavigate("audio")}
      >
        <img src="Rectangle 6.png" alt="Model Image" />
        <h1>50% Off Premium Sound</h1>
      </ImageDiv>
      <ImageDiv
        ref={ref}
        isVisible={isInView}
        onClick={() => handleNavigate("mobile")}
      >
        <img
          src="Rectangle 5.png"
          alt="Model Image"
          style={{ objectPosition: "100% 30%" }}
        />
        <h1>Newest Smartphones</h1>
      </ImageDiv>
    </AdsMain>
  );
};

export default AdsSection;
