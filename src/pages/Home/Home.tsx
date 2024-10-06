import React from "react";
import HeroSection from "../../components/HeroSection";
import SaleSection from "../../components/SaleSection";
import AdsSection from "../../components/AdsSection";
import CommentsSection from "../../components/CommentsSection";
import { Container } from "./Home.styled";



const Home: React.FC = () => {
  return (
    <Container>
      <HeroSection />
      <SaleSection />
      <AdsSection />
      <CommentsSection />
    </Container>
  );
};

export default Home;
