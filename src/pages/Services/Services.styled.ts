import styled from "styled-components";
import {
  Button,
  FlexColumn,
  FlexContainer,
  FlexRow,
  FullHeightImage,
} from "../../Utilities/StyledUtilities.styled";

export const PageContainer = styled.div`
  max-width: 100vw;
  height: fit-content;
  overflow-x: hidden;
  overflow-y: hidden;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.primary};
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.secondary} 100%
  );
`;
export const Main = styled(FlexContainer).withConfig({shouldForwardProp: (prop) => prop !== "isvisible"})<{ isvisible: boolean }>`
  height: fit-content;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  gap: 5rem;
  padding: 2rem;
  border-radius: 100px;
  background: url("/Rectangle 126.png");
  background-color: ${(props) => props.theme.colors.primary};
  opacity: ${(props) => (props.isvisible ? 1 : 0)};
  transform: ${(props) =>
    props.isvisible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
     height: 89vh;
     padding: 0;
      }
        
  `}
`;
export const TextSection = styled(FlexColumn)`
  width: 100%;
  justify-content: center;
  padding: 5rem;
  ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
    padding: 0.5rem;
      }
        
  `}
  h1 {
    font-size: ${(props) => props.theme.font.fontSize};
    font-weight: ${(props) => props.theme.font.fontWeight};
    text-align: left;
    background-color: transparent;
    width: fit-content;
    ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
     font-size: 46px;
     padding: 0;
     text-align: center;
      }
        
  `}
    h4 {
      color: ${(props) => props.theme.colors.text};
      background-color: ${(props) => props.theme.colors.secondary};
      border-radius: 20px;
      width: fit-content;
      ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
     text-align: center;
     width: 100vw;
      }
        
  `}
    }
  }
  p {
    padding-top: 1rem;
    text-align: left;
    font-size: 28px;
    ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
justify-self: flex-start; 
align-self: flex-start;     }
        
  `}
  }
`;
export const ImageHolder = styled.div`
  img {
    object-fit: cover;
    object-position: 20% 100%;
    width: 100%;
    height: 100vh;
    clip-path: inset(10px 10px 20px 0 round 100px);
    z-index: 0;
  }
`;
export const TagBrand = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  height: 20vh;
  margin-top: 2rem;
  padding: 2px;
  ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
      height: 15vh;
      }
        
  `}

  div {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
      padding: 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      }
        
  `}
    img {
      mix-blend-mode: multiply;
      width: fit-content;
      ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
      width: 100px;
      }
        
  `}
    }
  }
`;
export const ArrivalSection = styled(FlexColumn)<{ isvisible: string }>`
  margin-top: 2rem;
  justify-content: space-around;
  align-items: flex-start;
  position: relative;
  opacity: ${(props) => (props.isvisible ? 1 : 0)};
  transform: ${(props) =>
    props.isvisible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;
export const HeadingText = styled.h3`
  font-family: poppins;
  text-align: left;
  font-size: 48px;
  padding-left: 2rem;
  position: relative;
  z-index: 2;
`;
export const BackgroundVector = styled.img`
  position: absolute;
  top: 25px;
  left: 260px;
  bottom: 0;
  object-fit: cover;
  z-index: 1;
`;
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
      grid-template-columns: repeat(1, 1fr);
      }
        
  `}
`;
export const Card = styled.div`
  display: flex;
  max-width: 384vw;
  height: 500px;
  max-height: 600px;
  border-radius: 20px;
  width: 384px;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    margin-bottom: 30px;
    ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
      margin-top: 50px;
      }
        
  `}
    p {
      color: ${(props) => props.theme.colors.text};
    }

    img {
      align-self: flex-end;
      position: absolute;
    }
  }
`;
export const ImageCard = styled(FullHeightImage)`
  border-radius: 50px;
  object-fit: cover;
  max-height: 400px;
  object-position: center;
`;
export const SaleBanner = styled.div`
  width: 100%;
  max-width: 100vw;
  display: flex;
  align-content: flex-end;
  justify-content: flex-end;
  height: 100vh;
  min-height: 553px;
  background-image: url("/purple_background.jpg");
  background-size: cover; 
  background-repeat: no-repeat; 
  background-position: center;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;

    img {
      width: 60%;
      height: 101vh;
    }
  }
`;
export const SaleOffer = styled.div`
  width: 100%;
  opacity: 90%;
  color: white;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h2 {
      background-color: black;
      color: white;
      border-radius: 20px;
      font-size: 78px;
      font-weight: 800;
      font-family: poppins;
      margin-bottom: 0;
    }
    h3 {
      font-size: 58px;
      font-weight: 800;
      font-family: poppins;
      margin-top: 0;
      margin-bottom: 1rem;
      ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
      color: black;
      background-color: white;
      }
        
  `}
    }
  }
`;
export const ParagraphSection = styled(FlexColumn)`
  align-items: flex-start;
  p {
    font-size: 18px;
    margin: 0 0 0.5rem 0;
    text-align: left;

    span {
      font-weight: 700;
    }
  }
  button {
    background-color: black;
    border-radius: 10px;
    margin-top: 10px;
    padding: 1rem;
    font-size: 18px;
    color: white;
    font-family: poppins;
    transition: all 0.5s;
    border-style: none;
    &:hover {
      background-color: white;
      opacity: 80%;
      border: 1px solid white;
      color: black;
    }
  }
`;
export const YoungSelection = styled(FlexColumn)<{ isvisible: string }>`
  margin-top: 2rem;
  justify-content: space-around;
  align-items: flex-start;
  position: relative;
  opacity: ${(props) => (props.isvisible ? 1 : 0)};
  transform: ${(props) =>
    props.isvisible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;
export const YoungFavourite = styled(FlexRow)`
  gap: 1rem;
  width: 100%;
  ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
     flex-direction: column;
    

      }
        
  `}
`;
export const CardTrending = styled.div`
  width: 100%;
  min-height: auto;
  padding: 1rem;

  img {
    width: 100%;
    height: 70vh;
    border-radius: 50px;
    object-fit: cover;
    ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
     height: 50vh;
     object-fit: cover;
      }
        
  `}
  }
  h4 {
    text-align: left;
    padding-left: 1rem;
  }
  p {
    color: #7f7f7f;
    text-align: left;
    padding-left: 1rem;
  }
`;
export const CommunitySection = styled(FlexColumn)`
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 50vh;
   ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
     padding: 1rem;
      }
        
  `}
  h3 {
    font-size: 38px;
    font-weight: 800;
    color: white;
      ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
font-size: 28px;      }
        
  `}
  }
  p {
    color: white;
  }
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 1rem;
   ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
      }
        
  `}
`;
export const InputField = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: relative;
`;

export const SubmitButton = styled(Button)`
  width: 10%;
  font-weight: 800;
   ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
    width: fit-content;
      }
        
  `}

`;
