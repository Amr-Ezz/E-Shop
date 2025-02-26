import styled from "styled-components";

export const Main = styled.div.withConfig({shouldForwardProp: (prop) => prop !== "isvisible"})<{ isvisible: boolean}>`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.primary};
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.secondary} 100%
  );
  opacity: ${(props) => (props.isvisible ? 1 : 0)};
  transform: ${(props) =>
    props.isvisible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
      flex-direction: column;
      }
        
  `}
`;
export const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: left;
  padding: 5rem;
  ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
      padding: 2rem;
      }
        
  `}
  h3 {
    display: flex;
    font-size: 54px;
    font-weight: 600;
    line-height: 64px;
    align-self: flex-start;
    ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
      font-size: 36px;
      }
        
  `}
    span {
      color: ${(props) => props.theme.colors.tertiary};
    }
  }
  p {
    line-height: 26px;
    ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
      }
        
  `}
  }
`;
export const ImageHolder = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: 100% 50%;
  border-radius: 20px;
  ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
      }
        
  `}
`;
export const RatingsDiv = styled.div`
  display: flex;
  flex-direction: row;
  background: ${(props) => props.theme.colors.secondary};
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.secondary} 50%,
    ${(props) => props.theme.colors.tertiary} 100%
  );
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 83px;
  ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
flex-direction: column;      }
        
  `}
`;

export const CardRating = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1rem;
  margin: 1rem;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 270px;
  height: 230px;
  border-radius: 4px;
  animation: slideInLeft 2s ease-in 1s;
  @keyframes slideInLeft {
    0% {
      transform: translateY(-100px);
    }
    50% {
      transform: translateY(50px);
    }
    100% {
      transform: translateY(0);
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    img {
      width: 80px;
      height: 80px;
      border-radius: 100%;
      padding: 5px;
    }
  }
  h3 {
    font-size: 32px;
    font-weight: 800;
  }
`;
export const CardRatingOrange = styled(CardRating)`
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.text};
`;
export const CastGrid = styled.div<{isVisible: boolean | undefined}>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 4rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
      grid-template-columns: repeat(1, 1fr);
      padding: 1rem;
      }
        
  `}
`;
export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  gap: 10px;

  div {
    display: flex;
    justify-content: center;
    border-radius: 50px;
    background-color: #f5f5f5;
    width: 100%;
    max-width: 370px;
    height: 430px;
    img {
      object-fit: cover;
      object-position: 50% 100%;
    }
  }
  h3 {
    font-size: 32px;
    margin-top: 20px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 4%;
  }
`;

export const SocialMediaIcons = styled.span`
  display: flex;
  flex-direction: row;
  width: 104px;
  height: 24px;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 10px;
  img {
    width: 24px;

    height: 24px;
    cursor: pointer;
  }
`;

export const FullServiceDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;
  ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
gap: 5px;      }
        
  `}
`;

export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
padding: 0;
margin-bottom: 25px;      }
        
  `}
  h3 {
    text-align: left;
    font-size: 20px;
    font-weight: 600;
  }
  p {
    text-align: left;
    font-size: 14px;
    line-height: 21px;
  }
`;

export const HighDiv = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  width: 100%;
`;
