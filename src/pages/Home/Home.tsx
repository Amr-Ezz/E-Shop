import React, { Suspense } from "react";
import { Container } from "./Home.styled";
import BuyModal from "../../components/Modal/BuyModal";
import HeroSection from "../../components/HeroSection";
import SaleSection from "../../components/SaleSection";
import AdsSection from "../../components/AdsSection";
import CommentsSection from "../../components/CommentsSection";

const Home: React.FC = () => {
  
  return (
    <Container>
      <Suspense fallback={<div>loading...</div>}>
        <HeroSection />
        <SaleSection />
        <BuyModal />
        <AdsSection />
        <CommentsSection />
      </Suspense>
    </Container>
  );
};

export default Home;
