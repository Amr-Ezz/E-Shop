import React from "react";
import SplitText from "../../components/SplitText";
import useInView from "../../Hooks/useInView";
import {
  ArrivalSection,
  BackgroundVector,
  Card,
  CardsContainer,
  CardTrending,
  CommunitySection,
  FormContainer,
  HeadingText,
  ImageCard,
  ImageHolder,
  InputField,
  Main,
  PageContainer,
  ParagraphSection,
  SaleBanner,
  SaleOffer,
  SubmitButton,
  TagBrand,
  TextSection,
  YoungFavourite,
  YoungSelection,
} from "./Services.styled";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../Context/ProductContext";
import getDynamicThreshold from "../../Utilities/DynamicThreshold";

const Services: React.FC = () => {
  const { ref: ref1, isInView: isInView1 } = useInView(getDynamicThreshold);
  const { ref: ref2, isInView: isInView2 } = useInView(getDynamicThreshold);
  const { ref: ref3, isInView: isInView3 } = useInView(getDynamicThreshold);
  const { setCategory } = useProduct();
  const navigate = useNavigate();
  const handleNavigateByCategory = (category: string) => {
    setCategory(category);
    navigate(`/products/category/${category}`);
  };
  const handleNavigate = () => {
    navigate("/pages/Shop/ShopNow");
  };

  return (
    <PageContainer>
      <Main ref={ref1} isvisible={isInView1 ? true : undefined}>
        <TextSection>
          <h1>
            <SplitText
              words={[
                "Your",
                "choice",
                "is",
                "our",
                "first",
                "and",
                "foremost",
              ]}
              animationDuration={1000}
            />

            <h4>Priority</h4>
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
      <ArrivalSection ref={ref2} isvisible={isInView2 ? true : undefined}>
        <BackgroundVector src="/Vector 8.png" />
        <HeadingText>New Arrivals</HeadingText>
        <CardsContainer>
          <Card onClick={() => handleNavigateByCategory("gaming")}>
            <ImageCard src="/Rectangle 20.png" />
            <div>
              <h4> Gaming Sets</h4>
              <p> Explore Now!</p>
              <img src="/Arrow 1.png" />
            </div>
          </Card>
          <Card onClick={() => handleNavigateByCategory("mobile")}>
            <ImageCard src="/Rectangle 21.png" />
            <div>
              <h4> Phones</h4>
              <p> Explore Now!</p>
              <img src="/Arrow 1.png" />
            </div>
          </Card>
          <Card onClick={() => handleNavigateByCategory("audio")}>
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
                <button onClick={handleNavigate}>SHOP NOW</button>
              </ParagraphSection>
            </div>
          </SaleOffer>
          {/* <img src="/Purple.PNG" alt="model" /> */}
        </div>
      </SaleBanner>
      <YoungSelection ref={ref3} isvisible={isInView3? true : undefined}>
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
