import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchProducts, Product } from "../api/requests";

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
  border: 1px solid ${(props) => props.theme.colors.black};
  padding: 0 1rem;
  align-items: center;
  justify-content: space-around;
  img {
    width: 200px;
  }
  h1 {
    font-size: 1.5rem;
  }
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
    transition: background-color 0.3s ease;
    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white};
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
    background-color: #fac585;
  }
  div:nth-child(3) {
    width: 28px;
    height: 28px;
    border-radius: 100%;
    background-color: #05697c;
  }
`;
const HighlightedButtons = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 4rem;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;
interface StyledButtonProps {
  $clicked: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  width: ${(props) => (props.$clicked ? "24px" : "12px")};
  height: 12px;
  border-radius: ${(props) => (props.$clicked ? "100px" : "100%")};
  border-style: none;
  background-color: ${(props) =>
    props.$clicked ? props.theme.colors.primary : props.theme.colors.grey};
  cursor: pointer;
  transition: width 0.3s, height 0.3s;
`;

const SaleSection = () => {
  const [clickedButton, setClickedButton] = useState([
    true,
    false,
    false,
    false,
  ]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<string>('men\'s clothing');

  const handleClick = (index: number, category: string) => {
    const newClickedButtons = clickedButton.map((_, i) => i === index);
    setClickedButton(newClickedButtons);
    setSelectedCategory(category);
  };
  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length <= maxLength) return description;
    return `${description.substring(0, maxLength)}... <a href="#">See more</a>`;
  };

  useEffect(() => {
    const getProducts = async () => {
      const productData = await fetchProducts(selectedCategory);
      setProducts(productData.slice(0, 3));
    };
    getProducts();
  }, [selectedCategory]);

  return (
    <MainSection>
      <h1>Flash Sale</h1>
      <ul>
        <li onClick={() => handleClick(0, "men's clothing")}>Men</li>
        <li onClick={() => handleClick(1, "women's clothing")}>Women</li>
        <li onClick={() => handleClick(2, "jewelery")}>Jewelry</li>
        <li onClick={() => handleClick(3, "electronics")}>Electronics</li>
      </ul>
      <GridContainer>
        {products.map((product) => (
          <Card key={product.id}>
            <img src={product.image} alt={product.name} />
            <h1>{product.title}</h1>
            <CircleDiv>
              <div></div>
              <div></div>
              <div></div>
            </CircleDiv>
            <p dangerouslySetInnerHTML={{ __html: truncateDescription(product.description, 100) }}></p>
            <PriceHolder>
              <p>{product.price}$</p>
              <button>BUY</button>
            </PriceHolder>
          </Card>
        ))}
      </GridContainer>
      <HighlightedButtons>
        {clickedButton.map((clicked, index) => (
          <StyledButton
            key={index}
            $clicked={clicked}
            onClick={() => handleClick(index, selectedCategory)}
          />
        ))}
      </HighlightedButtons>
    </MainSection>
  );
};

export default SaleSection;
