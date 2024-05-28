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
      text-decoration: underline;
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
    color: #8B8B8B;
  }
`;
const PriceHolder = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
p {
    color: black;
}
button {
    width: 86px;
    height: 50px;
    border-radius: 50px;
    background-color: white;
    color: #E08CFF;
    border: 1px solid #E08CFF;
}`

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
          <p>Turn heads with the Elegant Floral Midi Dress, a perfect blend of sophistication and charm.</p>
          <PriceHolder>
          <p>120$</p>
<button>BUY</button>
          </PriceHolder>
        </Card>
        <Card>
          <img src="Rectangle 1 (2).png" alt="Model Image 2" />
          <h1>T shirt</h1>
          <p>Turn heads with the Elegant Floral Midi Dress, a perfect blend of sophistication and charm.</p>
          <PriceHolder>
          <p>120$</p>
<button>BUY</button>
          </PriceHolder>
        </Card>
        <Card>
          <img src="/Rectangle 1(3).png" />
          <h1>Black Casual</h1>
          <p>Turn heads with the Elegant Floral Midi Dress, a perfect blend of sophistication and charm.</p>
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
