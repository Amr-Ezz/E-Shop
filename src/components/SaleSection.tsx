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
    height: 300px;
  }
  h1 {
    font-size: 1.5rem;
  }
  p {
    text-align: start;
    color: ${(props) => props.theme.colors.grey};
    span {
      padding: 1rem;
    }
  }
  button {
  }
`;
const PriceHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  p:nth-child(1) {
    color: ${(props) => props.theme.colors.black};
    font-size: 1.5rem;
    img {
      width: 20px;
      height: 20px;
    }
  }
  p:nth-child(2) {
    align-self: flex-end;
    img {
      width: 15px;
      height: 15px;
    }
  }
  p:nth-child(3) {
    align-self: flex-end;
    img {
      width: 15px;
      height: 15px;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
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
  // const [clickedButton, setClickedButton] = useState([
  //   true,
  //   false,
  //   false,
  //   false,
  // ]);
  const [products, setProducts] = useState<Product[]>([]);
  const [toggleDescription, setToggleDescription] = useState<{
    [key: number]: boolean;
  }>({});
  const [selectedCategory, setSelectedCategory] =
    useState<string>("men's clothing");

  const [currentPage, setCurrentPage] = useState<number>(1);

  // const handleClick = (index: number, category: string) => {
  //   const newClickedButtons = clickedButton.map((_, i) => i === index);
  //   setClickedButton(newClickedButtons);
  //   setSelectedCategory(category);
  //   setCurrentPage(1);
  // };
  const toggleHandler = (id: number) => {
    setToggleDescription((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const truncateDescription = (
    description: string,
    maxLength: number,
    id: number
  ) => {
    if (toggleDescription[id]) return description;
    if (description.length <= maxLength) return description;
    return `${description.substring(0, maxLength)}....`;
  };

  useEffect(() => {
    const getProducts = async () => {
      const productData = await fetchProducts(selectedCategory);
      setProducts(productData);
    };
    getProducts();
  }, [selectedCategory]);

  const handlePage = (index: number) => {
    setCurrentPage(index + 1);
  };
  const handleCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };
  const startIndex = (currentPage - 1) * 3;
  const displayedProducts = products.slice(startIndex, startIndex + 3);

  return (
    <MainSection>
      <h1>Flash Sale</h1>
      <ul>
        <li onClick={() => handleCategory("men's clothing")}>Men</li>
        <li onClick={() => handleCategory("women's clothing")}>Women</li>
        <li onClick={() => handleCategory("jewelery")}>Jewelry</li>
        <li onClick={() => handleCategory("electronics")}>Electronics</li>
      </ul>
      <GridContainer>
        {displayedProducts.map((product) => (
          <Card key={product.id}>
            <img src={product.image} alt={product.name} />
            <h1>{product.title}</h1>
            <CircleDiv>
              <div></div>
              <div></div>
              <div></div>
            </CircleDiv>
            <p>
              {truncateDescription(product.description, 100, product.id)}
              {product.description.length > 100 && (
                <span
                  onClick={() => toggleHandler(product.id)}
                  style={{
                    color: "#007bff",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  {toggleDescription[product.id] ? "See less" : "See more"}
                </span>
              )}
            </p>

            <PriceHolder>
              <p>
                {product.price}
                <img src="/icons/dollar-symbol.png" alt="dollar" />
              </p>
              <p>
                {product.rating.rate} <img src={"/icons/star.png"} />
              </p>
              <p>
                {product.rating.count}{" "}
                <img src="/icons/trolley.png" alt="Items left" />
              </p>
              <div>
                <button>BUY</button>
                <button>Add To Cart</button>
              </div>
            </PriceHolder>
          </Card>
        ))}
      </GridContainer>
      <HighlightedButtons>
        {Array(Math.ceil(products.length / 3))
          .fill(0)
          .map((_, index) => (
            <StyledButton
              key={index}
              $clicked={index + 1 === currentPage}
              onClick={() => handlePage(index)}
            />
          ))}
      </HighlightedButtons>
    </MainSection>
  );
};

export default SaleSection;
