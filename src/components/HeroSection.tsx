import styled from "styled-components";

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
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`;

const FontSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  color: ${props => props.theme.colors.text};

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
          <h1>Explore the Ultimate Tech Collection</h1>
          <p>
            Level up with the latest in gaming, sound, and screen experiences
          </p>
          <button>SHOP NOW</button>
        </FontSection>
        <div>
          <img src="/Rectangle 3.png" alt="Model Image" />
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
