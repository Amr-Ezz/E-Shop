import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: row;
  justify-content: space-between;
  gap: 5rem;
  align-items: center;
  padding: 2rem;
  background: url("/Rectangle 126.png");
`;
const TextSection = styled.div`
  flex-direction: column;
  width: 100%;
  justify-content: center;
  h1 {
    font-size: ${(props) => props.theme.font.fontSize};
    font-weight: ${(props) => props.theme.font.fontWeight};
    span {
      color: ${(props) => props.theme.colors.primary};
      background-color: white;
      border-radius: 20px;
    };
    
  }
    p {
    padding-top: 1rem;
    }
`;
const ImageHolder = styled.div`
  img {
    object-fit: cover;
    object-position: 100% 50%;
    width: 100%;
    height: 100vh;
    clip-path: inset(0px 10px 20px 0 round 100px);
  }
`;

const Services: React.FC = () => {
  return (
    <Main>
      <TextSection>
        <h1>
          Your choice is our first and foremost <span>Priority</span>
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
          natus quibusdam ab unde. Consequuntur voluptate dolores veniam nam
          libero quam rerum temporibus mollitia consectetur et, voluptatum
          magnam iusto, sint quae.
        </p>
      </TextSection>
      <ImageHolder>
        <img src="/pexels-olly-974911.jpg" />
      </ImageHolder>
    </Main>
    
  );
};

export default Services;
