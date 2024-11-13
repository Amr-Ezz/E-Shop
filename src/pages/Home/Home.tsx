import React from "react";
import HeroSection from "../../components/HeroSection";
import SaleSection from "../../components/SaleSection";
import AdsSection from "../../components/AdsSection";
import CommentsSection from "../../components/CommentsSection";
import { Container } from "./Home.styled";
import BuyModal from "../../components/Modal/BuyModal";



const Home: React.FC = () => {
  return (
    <Container>
      <HeroSection />
      <SaleSection />
      <BuyModal />
      <AdsSection />
      <CommentsSection />
    </Container>
  );
};

export default Home;
