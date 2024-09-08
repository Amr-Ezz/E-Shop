import styled from "styled-components";
const AdsMain = styled.div`
  display: flex;
  flex-direction: row;
  color: ${props => props.theme.colors.text};
 background: ${(props) => props.theme.colors.tertiary};
background: linear-gradient(
  180deg,
  ${(props) => props.theme.colors.tertiary} 0%,
  ${(props) => props.theme.colors.secondary} 50%,
  ${(props) => props.theme.colors.primary} 100%
);
  width: fit-content;
  height: 300px;
  padding-top: 1rem;
  z-index: 0;
`;
const ImageDiv = styled.div`
  position: relative;
  z-index: 0;
  perspective: 1000px;
  cursor: pointer;
  img {
    width: 450px;
    height: 300px;
    object-fit: cover;
    object-position: 100% 70%;
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
  return (
    <AdsMain>
      <ImageDiv>
        <img src="Rectangle 4.png" alt="Model Image" />
        <h1>Ultimate Gaming Gear</h1>
      </ImageDiv>
      <ImageDiv>
        <img src="Rectangle 6.png" alt="Model Image" />
        <h1>50% Off Premium Sound</h1>
      </ImageDiv>
      <ImageDiv>
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
