import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  max-width: 100vw;
  height: fit-content;
  overflow-x: hidden;
`;
const Main = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;
  gap: 5rem;
  align-items: center;
  padding: 2rem;
  border-radius: 100px;
  background: url("/Rectangle 126.png");
`;
const TextSection = styled.div`
  flex-direction: column;
  width: 100%;
  justify-content: center;
  h1 {
    font-size: ${(props) => props.theme.font.fontSize};
    font-weight: ${(props) => props.theme.font.fontWeight};
    span {
      color: ${(props) => props.theme.colors.primary};
      background-color: white;
      border-radius: 20px;
    }
  }
  p {
    padding-top: 1rem;
  }
`;
const ImageHolder = styled.div`
  img {
    object-fit: cover;
    object-position: 100% 50%;
    width: 100%;
    height: 100vh;
    clip-path: inset(0px 10px 20px 0 round 100px);
  }
`;
const TagBrand = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 15vh;
  margin-top: 2rem;
  padding: 2px;

  div {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img {
      mix-blend-mode: multiply;
      width: fit-content;
    }
  }
`;
const ArrivalSection = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
`;
const HeadingText = styled.h3`
  font-family: poppins;
  font-size: 48px;
  padding-left: 2rem;
  position: relative;
  z-index: 2;
`;
const BackgroundVector = styled.img`
  position: absolute;
  top: 25px;
  right: 400px;
  bottom: 0;
  object-fit: cover;
  z-index: 1;
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
`;
const Card = styled.div`
  display: flex;
  max-width: 384vw;
  height: auto;
  min-height: 784px;
  border-radius: 20px;
  width: 384px;
  padding: 1rem;
  height: 704px;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    margin-bottom: 30px;
    p {
      color: #7f7f7f;
    }

    img {
      align-self: flex-end;
      position: absolute;
    }
  }
`;
const SaleBanner = styled.div`
  width: 100%;
  max-width: 100vw;
  height: auto;
  min-height: 984px;
  background-image: url("/purple_background.jpg");
  background-size: contain; /* This makes the image cover the entire div */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  background-position: center;
  div {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    position: relative;

    img {
      width: 60%;
      height: 101vh;
    }
  }
`;
const SaleOffer = styled.div`
  width: 100%;
  opacity: 90%;
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    h2 {
      background-color: white;
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
    }
  }
`;
const ParagraphSection = styled.div`
display: flex;
flex-direction: column;
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

const Services: React.FC = () => {
  return (
    <PageContainer>
      <Main>
        <TextSection>
          <h1>
            Your choice is our first and foremost <span>Priority</span>
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            natus quibusdam ab unde. Consequuntur voluptate dolores veniam nam
            libero quam rerum temporibus mollitia consectetur et, voluptatum
            magnam iusto, sint quae.
          </p>
        </TextSection>
        <ImageHolder>
          <img src="/pexels-olly-974911.jpg" />
        </ImageHolder>
      </Main>
      <TagBrand>
        <div>
          <img src="/H&M.png" alt="brand" />{" "}
          <img src="/Lacoste.png" alt="brand" />{" "}
          <img src="/Levis.png" alt="brand" />
          <img src="/Obey.png" alt="brand" />
          <img src="/Amazon.png" alt="brand" />
        </div>
      </TagBrand>
      <ArrivalSection>
        <BackgroundVector src="/Vector 8.png" />
        <HeadingText>New Arrivals</HeadingText>
        <CardsContainer>
          <Card>
            <img src="/Rectangle 20.png" />
            <div>
              <h4> Hoodies & Sweetshirts</h4>
              <p> Explore Now!</p>
              <img src="/Arrow 1.png" />
            </div>
          </Card>
          <Card>
            <img src="/Rectangle 21.png" />
            <div>
              <h4> Coats & Parkas</h4>
              <p> Explore Now!</p>
              <img src="/Arrow 1.png" />
            </div>
          </Card>
          <Card>
            <img src="/Rectangle 22.png" />
            <div>
              <h4> Tees & T-Shirts</h4>
              <p> Explore Now!</p>
              <img src="/Arrow 1.png" />
            </div>
          </Card>
        </CardsContainer>
      </ArrivalSection>
      <SaleBanner>
        <div>
          <SaleOffer>
            <div>
              <h2>PayDay</h2>
              <h3>Sale Now</h3>
              <ParagraphSection>
                <p>
                  Spend minimal $100 get 30% off
                  <br />
                  voucher coder for your next purchase
                </p>
                <p>
                  <span>1 June - 10 June 2021</span> <br />
                  *Terms & Conditions apply
                </p>
                <button>SHOP NOW</button>
              </ParagraphSection>
            </div>
          </SaleOffer>
          <img src="/Purple.PNG" alt="model" />
        </div>
      </SaleBanner>
    </PageContainer>
  );
};

export default Services;
