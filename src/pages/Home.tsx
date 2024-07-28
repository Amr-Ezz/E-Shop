import React from "react";
import HeroSection from "../components/HeroSection";
import SaleSection from "../components/SaleSection";
import AdsSection from "../components/AdsSection";
import CommentsSection from "../components/CommentsSection";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <SaleSection />
      <AdsSection />
      <CommentsSection />
    </div>
  );
};

export default Home;
