import styled from "styled-components";

const HeroDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  padding: 2rem;
  width: 100%;
`;
const FontSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    margin: 0;
    line-height: 1.1;
    text-align: start;
    font-size: 96px;
    font-weight: 600;
  }
  p {
    font-size: 24px;
    margin: 8px 0;
    color: ${props => props.theme.colors.grey};
  }
  button {
    color: ${props => props.theme.colors.black};
    background-color: #e08cff;
    border-radius: 50px;
    width: 200px;
    height: 60px;
    border-style: none;
    font-size: 24px;
    margin-top: 16px;
    cursor: pointer;
    &:hover {
      background-color: ${props => props.theme.colors.white};
    }
  }
`;
const FooterHeroSection = styled.div`
width: 100%;
max-width: 1669px;
align-self: flex-end;
overflow: hidden;
white-space: nowrap;
position relative;
border: 1px solid black;
`
const TextBox = styled.div`
display: inline-block;
padding: 10px;
white-space: nowrap;
animation: scroll 10s linear infinite;
@keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-20%);
    }
  }
`
const ContainerDiv = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;`

const HeroSection = () => {
  return (
    <ContainerDiv>
 <HeroDiv>
      <FontSection>
        <h1>New Summer Collection</h1>
        <p>Shop the best clothes in the world</p>
        <button>SHOP NOW</button>
      
      </FontSection>
      <div>
        <img src="/Rectangle 3.png" alt="Model Image" />
      </div>
     
     
    </HeroDiv>
    <FooterHeroSection>
        <TextBox>
        .Customer Support. .Customer Support. .Customer Support. .Customer Support. .Customer Support. .Customer Support.
  .Customer Support. .Customer Support. .Customer Support. .Customer Support. .Customer Support. .Customer Support.
        </TextBox>

      </FooterHeroSection>
    </ContainerDiv>
   
    
  );
};

export default HeroSection;
