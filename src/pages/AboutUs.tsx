import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
const TextHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: left;
  padding: 1rem;
  h3 {
    display: flex;
    gap: 10px;
    font-size: 54px;
    font-weight: 600;
    line-height: 64px;
    align-self: flex-start;
    span {
      color: white;
    }
  }
  p {
    line-height: 26px;
  }
`;
const ImageHolder = styled.img`
  object-fit: cover;
  object-position: 50% 100%;
  border-radius: 20px;
`;
const RatingsDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: center;
  margin-top: 83px;
`;
const CardRating = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 1rem;
  margin: 1rem;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 270px;
  height: 230px;
  border-radius: 4px;
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
const CardRatingOrange = styled(CardRating)`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
`;
const CastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 4rem;
`;
const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  gap: 10px;
  div {
    display: flex;
    justify-content: center;
    background-color: #f5f5f5;
    width: 370px;
    height: 430px;
    img {
      object-fit: cover;
      object-position: 50% 100%;
    }
  };
  h3 {
    font-size: 32px;
    margin-top: 20px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 4%;
  }
`;

const SocialMediaIcons = styled.span`
  display: flex;
  flex-direction: row;
  wdith: 104px;
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

const FullServiceDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 88px;
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
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

const AboutUs = () => {
  return (
    <>
      <Main>
        <TextHolder>
          <h3>
            <span>Our</span>Story
          </h3>
          <p>
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a wide
            range of tailored marketing, data, and service solutions, Exclusive
            has 10,500 sellers and 300 brands and serves 3 million customers
            across the region.
          </p>
          <br />
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast pace. Exclusive offers a diverse assortment in categories
            ranging from consumer electronics to fashion.
          </p>
        </TextHolder>
        <ImageHolder src="/portrait-two-african-females.png" alt="models" />
      </Main>
      <RatingsDiv>
        <CardRating>
          <div>
            <img src="/icons/Services (1).svg" alt="shop icon" />
          </div>
          <h3>10.5k</h3>
          <p>Sellers active on our site</p>
        </CardRating>
        <CardRatingOrange>
          <div>
            <img src="/icons/Services.svg" alt="shop icon" />
          </div>
          <h3>33K</h3>
          <p>Monthly Product Sales</p>
        </CardRatingOrange>
        <CardRating>
          <div>
            <img src="/icons/Services (2).svg" alt="shop icon" />
          </div>
          <h3>45.5K</h3>
          <p>Customers Active on Our Site</p>
        </CardRating>
        <CardRating>
          <div>
            <img src="/icons/Services (3).svg" alt="shop icon" />
          </div>
          <h3>25K</h3>
          <p>Annual Gross Sales on Our Site</p>
        </CardRating>
      </RatingsDiv>
      <CastGrid>
        <CardDiv>
          <div>
            <img src="/image 46.png" alt="Cast Member" />
          </div>
          <h3>Tom Cruise</h3>
          <p>Founder & Chairman</p>
          <SocialMediaIcons>
            <img src="/icons/Icon-Twitter.svg" alt="Twitter icon" />
            <img src="/icons/Icon-Linkedin.svg" alt="LinkedIn icon" />
            <img src="/icons/icon-instagram.svg" alt="Instagram icon" />
          </SocialMediaIcons>
        </CardDiv>
        <CardDiv>
          <div>
            <img src="/image 47.png" alt="Cast Member" />
          </div>
          <h3>Will Smith</h3>
          <p>Product Designer</p>
          <SocialMediaIcons>
            <img src="/icons/Icon-Twitter.svg" alt="Twitter icon" />
            <img src="/icons/Icon-Linkedin.svg" alt="LinkedIn icon" />
            <img src="/icons/icon-instagram.svg" alt="Instagram icon" />
          </SocialMediaIcons>
        </CardDiv>
        <CardDiv>
          <div>
            <img src="/image 51.png" alt="Cast Member" />
          </div>
          <h3>Emma Watson</h3>
          <p>Managing Director</p>
          <SocialMediaIcons>
            <img src="/icons/Icon-Twitter.svg" alt="Twitter icon" />
            <img src="/icons/Icon-Linkedin.svg" alt="LinkedIn icon" />
            <img src="/icons/icon-instagram.svg" alt="Instagram icon" />
          </SocialMediaIcons>
        </CardDiv>
      </CastGrid>
      <FullServiceDiv>
        <ServiceCard>
          <div>
            <img src="/icons/Services1.svg" alt="shop icon" />
          </div>
          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140</p>
        </ServiceCard>
        <ServiceCard>
          <div>
            <img src="/icons/Services (4).svg" alt="shop icon" />
          </div>
          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </ServiceCard>
        <ServiceCard>
          <div>
            <img src="/icons/Services (5).svg" alt="shop icon" />
          </div>
          <h3>MONEY BACK GUARANTEE</h3>
          <p>We return money within 30 days</p>
        </ServiceCard>
      </FullServiceDiv>
    </>
  );
};

export default AboutUs;
