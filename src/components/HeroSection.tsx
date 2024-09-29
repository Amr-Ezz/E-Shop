import styled, { keyframes } from "styled-components";
import Image3D from "./Image3D";
import SplitText from "./SplitText";

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
const HeroDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
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

const FontSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.2rem;
  color: ${(props) => props.theme.colors.text};
  h1 {
    margin: 0;
    line-height: 1.1;
    text-align: start;
    font-size: 76px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 48px;
    }

    @media (max-width: 480px) {
      font-size: 36px;
    }
  }

  p {
    font-size: 24px;
    margin: 8px 0;
    color: ${(props) => props.theme.colors.text};

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
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

    @media (max-width: 768px) {
      width: 150px;
      height: 50px;
      font-size: 18px;
    }

    @media (max-width: 480px) {
      width: 130px;
      height: 45px;
      font-size: 16px;
    }
  }
`;

const FooterHeroSection = styled.div`
  width: 100%;
  max-width: 1669px;
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
  white-space: nowrap;
  animation: scroll 10s linear infinite;
  color: ${(props) => props.theme.colors.text};

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

const ContainerDiv = styled.div`
  width: 100%;
  max-width: 1350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.primary};
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.secondary} 100%
  );

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const HeroSection = () => {
  return (
    <ContainerDiv>
      <HeroDiv>
        <FontSection>
          <SplitText
            text="Explore the Ultimate Tech Collection"
            animationDuration={500}
            style={{
              margin: 0,
              padding: "5px",
              lineHeight: 1.1,
              fontSize: "56px",
              fontWeight: 600,
            }}
          />
          <p>
            Level up with the latest in gaming, sound, and screen experiences
          </p>
          <button>SHOP NOW</button>
        </FontSection>
        <div>
          <Image3D url={"/Rectangle 3.png"} width={300} height={300} />
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
};

export default HeroSection;
