import SplitText from "../../components/SplitText";
import useInView from "../../Hooks/useInView";
import getDynamicThreshold from "../../Utilities/DynamicThreshold";
import {
  CardDiv,
  CardRating,
  CardRatingOrange,
  CastGrid,
  FullServiceDiv,
  HighDiv,
  ImageHolder,
  Main,
  RatingsDiv,
  ServiceCard,
  SocialMediaIcons,
  TextHolder,
} from "./AboutUs.styled";

const AboutUs = () => {
  const { ref: ref1, isInView: isInView1 } = useInView(getDynamicThreshold);
  const { ref: ref2, isInView: isInView2 } = useInView(getDynamicThreshold);
 

  return (
    <HighDiv>
      <Main ref={ref1} isvisible={isInView1 ? true : undefined}>
        <TextHolder>
          <h3>
            <SplitText words={["Our"]} animationDuration={1500} />
            Story
          </h3>
          <p>
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
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
      <CastGrid ref={ref2} isVisible={isInView2}>
        <CardDiv>
          <div>
            <img src="/image 46.png" alt="Cast Member" loading="lazy" />
          </div>
          <h3>Tom Cruise</h3>
          <p>Founder & Chairman</p>
          <SocialMediaIcons>
            <img
              src="/icons/Icon-Twitter.svg"
              alt="Twitter icon"
              loading="lazy"
            />
            <img
              src="/icons/Icon-Linkedin.svg"
              alt="LinkedIn icon"
              loading="lazy"
            />
            <img
              src="/icons/icon-instagram.svg"
              alt="Instagram icon"
              loading="lazy"
            />
          </SocialMediaIcons>
        </CardDiv>
        <CardDiv>
          <div>
            <img src="/image 47.png" alt="Cast Member" loading="lazy" />
          </div>
          <h3>Will Smith</h3>
          <p>Product Designer</p>
          <SocialMediaIcons>
            <img
              src="/icons/Icon-Twitter.svg"
              alt="Twitter icon"
              loading="lazy"
            />
            <img
              src="/icons/Icon-Linkedin.svg"
              alt="LinkedIn icon"
              loading="lazy"
            />
            <img
              src="/icons/icon-instagram.svg"
              alt="Instagram icon"
              loading="lazy"
            />
          </SocialMediaIcons>
        </CardDiv>
        <CardDiv>
          <div>
            <img src="/image 51.png" alt="Cast Member" loading="lazy" />
          </div>
          <h3>Emma Watson</h3>
          <p>Managing Director</p>
          <SocialMediaIcons>
            <img
              src="/icons/Icon-Twitter.svg"
              alt="Twitter icon"
              loading="lazy"
            />
            <img
              src="/icons/Icon-Linkedin.svg"
              alt="LinkedIn icon"
              loading="lazy"
            />
            <img
              src="/icons/icon-instagram.svg"
              alt="Instagram icon"
              loading="lazy"
            />
          </SocialMediaIcons>
        </CardDiv>
      </CastGrid>
      <FullServiceDiv>
        <ServiceCard>
          <div>
            <img src="/icons/Services1.svg" alt="shop icon" loading="lazy" />
          </div>
          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140</p>
        </ServiceCard>
        <ServiceCard>
          <div>
            <img src="/icons/Services (4).svg" alt="shop icon" loading="lazy" />
          </div>
          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </ServiceCard>
        <ServiceCard>
          <div>
            <img src="/icons/Services (5).svg" alt="shop icon" loading="lazy" />
          </div>
          <h3>MONEY BACK GUARANTEE</h3>
          <p>We return money within 30 days</p>
        </ServiceCard>
      </FullServiceDiv>
    </HighDiv>
  );
};

export default AboutUs;
