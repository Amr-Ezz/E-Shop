import styled from "styled-components";

const HeroDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  padding: 2rem;

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

  h1 {
    margin: 0;
    line-height: 1.1;
    text-align: start;
    font-size: 96px;
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
    color: ${(props) => props.theme.colors.grey};

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  button {
    color: ${(props) => props.theme.colors.white};
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
  background: rgb(82, 34, 88);
  background: linear-gradient(
    90deg,
    rgba(82, 34, 88, 1) 0%,
    rgba(140, 48, 97, 1) 100%
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
          <h1>New Summer Collection</h1>
          <p>Shop the best clothes in the world</p>
          <button>SHOP NOW</button>
        </FontSection>
        <div>
          <img src="/Rectangle 3.png" alt="Model Image" style={{ width: "100%", maxWidth: "500px", height: "auto" }} />
        </div>
      </HeroDiv>
      <FooterHeroSection>
        <TextBox>
          .Customer Support. .Customer Support. .Customer Support. .Customer Support. .Customer Support.
          .Customer Support. .Customer Support. .Customer Support. .Customer Support. .Customer Support.
          .Customer Support. .Customer Support.
        </TextBox>
      </FooterHeroSection>
    </ContainerDiv>
  );
};

export default HeroSection;
