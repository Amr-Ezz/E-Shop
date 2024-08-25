import styled from "styled-components";
const AdsMain = styled.div`
  display: flex;
  flex-direction: row;
  background: rgb(198,60,81);
background: linear-gradient(180deg, rgba(198,60,81,1) 0%, rgba(140,48,97,1) 50%, rgba(82,34,88,1) 100%);
  width: fit-content;
  height: 300px;
  padding-top: 1rem;
  z-index: 0;
`;
const ImageDiv = styled.div`
  position: relative;
  z-index: 0;
  img {
    width: 450px;
    height: 300px;
  }
  h1 {
    position: absolute;
    width: 151px;
    height: 96px;
    line-height: 48px;
    font-size: 40px;
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
        <h1>Casual Wear </h1>
      </ImageDiv>
      <ImageDiv>
        <img src="Rectangle 6.png" alt="Model Image" />
        <h1>50% Summer Collection</h1>
      </ImageDiv>
      <ImageDiv>
        <img src="Rectangle 5.png" alt="Model Image" />
        <h1>Sports Ready</h1>
      </ImageDiv>
    </AdsMain>
  );
};

export default AdsSection;
