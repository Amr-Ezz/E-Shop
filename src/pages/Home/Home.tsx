import React, { Suspense } from "react";
import { Container } from "./Home.styled";
import BuyModal from "../../components/Modal/BuyModal";
import HeroSection from "../../components/HeroSection";
import SaleSection from "../../components/SaleSection";
import AdsSection from "../../components/AdsSection";
import CommentsSection from "../../components/CommentsSection";
import { Loader } from "../../components/Loader/Loader";
import PhotoList from "../../api/fetchPexels";

const Home: React.FC = () => {
  
  return (
    <Container>
      <Suspense fallback={<Loader />}>
        <HeroSection />
        <SaleSection />
        <BuyModal />
        <AdsSection />
        {/* <PhotoList /> */}
        <CommentsSection />
      </Suspense>
    </Container>
  );
};

export default Home;
