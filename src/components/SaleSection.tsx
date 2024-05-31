import styled from "styled-components";

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    li {
      padding: 2rem;
      cursor: pointer;
      text-decoration: underline;
      &:active {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;
const GridContainer = styled.div`
  display: grid;
  width: 384px;
  height: 828px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  width: 100%;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  align-items: flex-start;
  justify-content: space-around;
  p {
    text-align: start;
    color: ${(props) => props.theme.colors.grey};
  }
`;
const PriceHolder = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  p {
    color: ${(props) => props.theme.colors.black};
  }
  button {
    width: 86px;
    height: 50px;
    border-radius: 50px;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.primary};
    cursor: pointer;
    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white}
    }
  }
`;
const CircleDiv = styled.div`
display: flex;
flex-direction: row;
width: 108px;
height: 28px;
justify-content: space-between;

  div:nth-child(1) {
    width: 28px;
    height: 28px;
    border-radius: 100%;
    background-color: #c47530;
  }
  div:nth-child(2) {
    width: 28px;
    height: 28px;
    border-radius: 100%;
    background-color: #FAC585;
  }
  div:nth-child(3) {
    width: 28px;
    height: 28px;
    border-radius: 100%;
    background-color: #05697C;
  }
`;

const SaleSection = () => {
  return (
    <MainSection>
      <h1>Flash Sale</h1>
      <ul>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Accessories</li>
      </ul>
      <GridContainer>
        <Card>
          <img src="/Rectangle 1.png" alt="Model Image" />
          <h1>Blazer</h1>
          <CircleDiv>
            <div></div>
            <div></div>
            <div></div>
          </CircleDiv>
          <p>
            Turn heads with the Elegant Floral Midi Dress, a perfect blend of
            sophistication and charm.
          </p>
          <PriceHolder>
            <p>120$</p>
            <button>BUY</button>
          </PriceHolder>
        </Card>
        <Card>
          <img src="Rectangle 1 (2).png" alt="Model Image 2" />
          <h1>T shirt</h1>
          <CircleDiv>
            <div></div>
            <div></div>
            <div></div>
          </CircleDiv>
          <p>
            Turn heads with the Elegant Floral Midi Dress, a perfect blend of
            sophistication and charm.
          </p>
          <PriceHolder>
            <p>120$</p>
            <button>BUY</button>
          </PriceHolder>
        </Card>
        <Card>
          <img src="/Rectangle 1(3).png" />
          <h1>Black Casual</h1>
          <CircleDiv>
            <div></div>
            <div></div>
            <div></div>
          </CircleDiv>
          <p>
            Turn heads with the Elegant Floral Midi Dress, a perfect blend of
            sophistication and charm.
          </p>
          <PriceHolder>
            <p>120$</p>
            <button>BUY</button>
          </PriceHolder>
        </Card>
      </GridContainer>
    </MainSection>
  );
};

export default SaleSection;
