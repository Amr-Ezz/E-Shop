import styled, { keyframes } from "styled-components";
import Image3D from "./Image3D";
import SplitText from "./SplitText";
import { FlexColumn, FlexRow } from "../Utilities/StyledUtilities.styled";
import { useNavigate } from "react-router-dom";
import React, { useCallback } from "react";

const puffInCenter = keyframes`
 0% {
    -webkit-transform: translateZ(-80px);
            transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }`;
const HeroDiv = styled(FlexRow)`
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem;
  div {
    img {
      filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.3));
      width: 100%;
      height: auto;
      max-width: 500px;
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      object-fit: cover;
      -webkit-animation: ${puffInCenter} 0.7s
        cubic-bezier(0.47, 0, 0.745, 0.715) both;
      animation: ${puffInCenter} 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  @keyframes breath-animation {
    0% {
      height: 100px;
      width: 100px;
    }
    30% {
      height: 400px;
      width: 400px;
      opacity: 1;
    }
    40% {
      height: 405px;
      width: 405px;
      opacity: 0.3;
    }
    100% {
      height: 100px;
      width: 100px;
      opacity: 0.6;
    }
  }
`;

const FontSection = styled(FlexColumn)`
  align-items: flex-start;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.text};
  min-height: 100px;
  h1 {
    margin: 1rem;
    line-height: 1.1;
    text-align: start;
    font-size: 56px;
    font-weight: 600;
    ${({ theme }) => `
     @media (max-width: ${theme.breakPoints.xs}) {
      font-size: 16px;
      line-height: 0;
      margin: 0;
      font-weight: 100;
      }
    @media (max-width: ${theme.breakPoints.sm}) {
     font-size: 16px;
     font-weight: 200;
     margin: 0;
     text-align: start;
     line-height: 0;
    }
     
      @media (max-width: ${theme.breakPoints.md}) {
      font-size: 48px;
            text-align: center;
                  line-height: 1.5;


      }
    `}
  }

  p {
    font-size: 24px;
    color: ${(props) => props.theme.colors.text} || #ffffff;
    min-height: 32px;

    ${({ theme }) => `
      @media (max-width: ${theme.breakPoints.md}) {
            text-align: center;


      }
    `}
  }

  button {
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.tertiary};
    border-radius: 50px;
    width: 200px;
    height: 60px;
    border-style: none;
    font-size: 24px;
    margin-top: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.colors.white};
      border: 1px solid ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.primary};
    }

    ${({ theme }) => `
 @media (max-width: ${theme.breakPoints.md}) {
align-self: center;
      }

      `}
  }
`;

const FooterHeroSection = styled.div`
  width: 100%;
  max-width: 100%;
  align-self: flex-end;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  border: 1px solid black;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const TextBox = styled.div`
  display: inline-block;
  padding: 10px;
  animation: scroll 10s linear infinite;
  color: ${(props) => props.theme.colors.text};
  max-width: 100%;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-20%);
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
    animation-duration: 15s;
  }
`;

const ContainerDiv = styled(FlexColumn)`
  width: 100%;
  max-width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.primary};
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.secondary} 100%
  );
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const words = ["Explore", "The", "Ultimate", "Tech", "Collection"];

const HeroSection = React.memo(() => {
  const navigate = useNavigate();
  const handleNavigate = useCallback(() => {
    navigate("/pages/Shop/ShopNow");
  }, [navigate]);
  return (
    <ContainerDiv>
      <HeroDiv>
        <FontSection>
          <h1>
            <SplitText words={words}  />
          </h1>

          {/* <p>
            Level up with the latest in gaming, sound, and screen experiences
          </p> */}
          <button onClick={handleNavigate}>SHOP NOW</button>
        </FontSection>
        <div>
          <Image3D url={"/Rectangle 3.png"} width={300} height={300}  />
        </div>
      </HeroDiv>
      <FooterHeroSection>
        <TextBox>
          .Customer Support. .Customer Support. .Customer Support. .Customer
          Support. .Customer Support. .Customer Support. .Customer Support.
          .Customer Support. .Customer Support. .Customer Support. .Customer
          Support. .Customer Support.
        </TextBox>
      </FooterHeroSection>
    </ContainerDiv>
  );
});

export default HeroSection;
