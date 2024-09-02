import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  max-width: 100vw;
  height: fit-content;
  overflow-x: hidden;
  overflow-y: hidden;
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
  padding: 5rem;
  h1 {
    font-size: ${(props) => props.theme.font.fontSize};
    font-weight: ${(props) => props.theme.font.fontWeight};
    text-align: left;
    span {
      color: ${(props) => props.theme.colors.primary};
      background-color: white;
      border-radius: 20px;
    }
  }
  p {
    padding-top: 1rem;
    text-align: left;
    font-size: 28px;
  }
`;
const ImageHolder = styled.div`
  img {
    object-fit: cover;
    object-position: 20% 100%;
    width: 100%;
    height: 100vh;
    clip-path: inset(10px 10px 20px 0 round 100px);
    z-index: 0;
  }
`;
const TagBrand = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  height: 20vh;
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
  text-align: left;
  font-size: 48px;
  padding-left: 2rem;
  position: relative;
  z-index: 2;
`;
const BackgroundVector = styled.img`
  position: absolute;
  top: 25px;
  left: 260px;
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
const ImageCard = styled.img`
  width: 100%;
  height: 90vh;
  border-radius: 50px;
  object-fit: cover;
  object-position: 20% 100%;
`;
const SaleBanner = styled.div`
  width: 100%;
  max-width: 100vw;
  display: flex;
  align-content: flex-end;
  justify-content: flex-end;
  height: 100vh;
  min-height: 553px;
  background-image: url("/purple_background.jpg");
  background-size: cover; /* This makes the image cover the entire div */
  background-repeat: no-repeat; /* Prevents the image from repeating */
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
const SaleOffer = styled.div`
  width: 100%;
  opacity: 90%;
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
const YoungSelection = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
`;
const YoungFavourite = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;  
  gap: 1rem;
  width: 100%;
`;
const CardTrending = styled.div`
  width: 100%;
  height: 100vh;
  min-height: auto;
  padding: 1rem;
  img {
    width: 100%;
    height: 70vh;
    border-radius: 50px;
    object-fit: cover;
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
const CommunitySection = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    font-size: 38px;
    font-weight: 800;
    color: white;
  }
  p {
    color: white;
  }
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 1rem;
`;
const InputField = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: relative;
`;

const SubmitButton = styled.button`
  padding: 10px;
  width: 10%;
  background-color: black;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
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
          <p>Live for Influential and Innovative fashion!</p>
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
            <ImageCard src="/Rectangle 20.png" />
            <div>
              <h4> Gaming Sets</h4>
              <p> Explore Now!</p>
              <img src="/Arrow 1.png" />
            </div>
          </Card>
          <Card>
            <ImageCard src="/Rectangle 21.png" />
            <div>
              <h4> Phones</h4>
              <p> Explore Now!</p>
              <img src="/Arrow 1.png" />
            </div>
          </Card>
          <Card>
            <ImageCard src="/Rectangle 22.png" />
            <div>
              <h4>Earphones</h4>
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
          {/* <img src="/Purple.PNG" alt="model" /> */}
        </div>
      </SaleBanner>
      <YoungSelection>
        <BackgroundVector src="/Vector 8.png" />
        <HeadingText>Young's Favourite</HeadingText>
        <YoungFavourite>
          <CardTrending>
            <img src="/Rectangle 50.png" alt="models" />
            <h4>Trending on instagram</h4>
            <p>Explore Now!</p>
          </CardTrending>
          <CardTrending>
            <img src="/Group 80.png" alt="models" />
            <h4>All Under $40</h4>
            <p>Explore Now!</p>
          </CardTrending>
        </YoungFavourite>
      </YoungSelection>
      <CommunitySection>
        <h3>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h3>
        <p>Type your email down below and be young wild generation</p>
        <FormContainer>
          <InputField type="text" placeholder="Enter your email here" />
          <SubmitButton type="submit">Send</SubmitButton>
        </FormContainer>
      </CommunitySection>
    </PageContainer>
  );
};

export default Services;
