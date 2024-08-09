import React from "react";
import HeroSection from "../components/HeroSection";
import SaleSection from "../components/SaleSection";
import AdsSection from "../components/AdsSection";
import CommentsSection from "../components/CommentsSection";
import styled from "styled-components";

const Container = styled.div`
max-width: 100vw;
height: auto;
overflow-x: hidden;
`

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
