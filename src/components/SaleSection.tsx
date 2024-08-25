import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchProducts, Product } from "../api/requests";
import BuyModal from "./Modal/BuyModal";
import { useCart } from "../Context/CartContext";

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  width: 100%;
  background: rgb(82, 34, 88);
  background: linear-gradient(
    180deg,
    rgba(82, 34, 88, 1) 0%,
    rgba(140, 48, 97, 1) 50%,
    rgba(198, 60, 81, 1) 100%
  );

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    padding: 0;

    li {
      padding: 1rem;
      cursor: pointer;
      text-decoration: underline;
      &:active {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colors.white};
  padding: 1rem;
  gap: 10px;
  align-items: center;
  background-color: transparent;

  img {
    width: 100%;
    height: auto;
    border-radius: 50px;
    object-fit: scale-down;
    max-width: 200px;
    max-height: 300px;
  }

  h1 {
    font-size: 1.5rem;
    text-align: center;
  }

  p {
    text-align: left;
    color: ${(props) => props.theme.colors.white};

    span {
      padding: 1rem;
    }
  }
`;

const PriceHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;

  p:nth-child(1) {
    color: ${(props) => props.theme.colors.white};
    font-size: 1.5rem;

    img {
      width: 20px;
      height: 20px;
    }
  }

  p:nth-child(2),
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
    width: 100%;
    margin-top: 1rem;
    padding-bottom: 1rem;

    button {
      width: 100px;
      height: 50px;
      border-radius: 50px;
      font-weight: 600;
      background-color: ${(props) => props.theme.colors.quaternary};
      color: ${(props) => props.theme.colors.white};
      border: 1px solid ${(props) => props.theme.colors.white};
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

  div {
    width: 28px;
    height: 28px;
    border-radius: 100%;
    background-color: #c47530;

    &:nth-child(2) {
      background-color: #fac585;
    }

    &:nth-child(3) {
      background-color: #05697c;
    }
  }

  @media (max-width: 768px) {
    width: 84px;
    height: 22px;

    div {
      width: 22px;
      height: 22px;
    }
  }
`;

const HighlightedButtons = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 4rem;
  gap: 10px;
  justify-content: center;
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

  @media (max-width: 768px) {
    width: ${(props) =>
      props.$clicked ? "20px" : "10px"};
    height: 10px;
  }
`;

const SaleSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showBuyModal, setShowBuyModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [toggleDescription, setToggleDescription] = useState<{ [key: number]: boolean }>({});
  const [selectedCategory, setSelectedCategory] = useState<string>("audio");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { addToCart } = useCart();

  const toggleHandler = (id: number) => {
    setToggleDescription((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const truncateDescription = (description: string, maxLength: number, id: number) => {
    if (toggleDescription[id]) return description;
    if (description.length <= maxLength) return description;
    return `${description.substring(0, maxLength)}....`;
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productData = await fetchProducts(selectedCategory);
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
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

  const handleBuy = (product: Product) => {
    setSelectedProduct(product);
    setShowBuyModal(true);
  };

  return (
    <MainSection>
      <h1>Flash Sale</h1>
      <ul>
        <li onClick={() => handleCategory("audio")}>Audio</li>
        <li onClick={() => handleCategory("gaming")}>Gaming</li>
        <li onClick={() => handleCategory("mobile")}>Mobile</li>
        <li onClick={() => handleCategory("tv")}>TV</li>
      </ul>
      <GridContainer>
        {displayedProducts.map((product) => (
          <Card key={product.id}>
            <img src={product.image} alt={product.title} />
            <h1>{truncateDescription(product.title, 50, product.id)}</h1>
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
                {product.brand} <img src="/icons/star.png" alt="star" />
              </p>
              <p>
                {product.discount} <img src="/icons/trolley.png" alt="Items left" />
              </p>
              <p>Model: {product.model}</p>
              <div>
                <button onClick={() => handleBuy(product)}>BUY</button>
                <button onClick={() => addToCart(product)}>Add To Cart</button>
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
      {showBuyModal && selectedProduct && (
        <BuyModal
          productId={selectedProduct.id}
          onClose={() => setShowBuyModal(false)}
        />
      )}
    </MainSection>
  );
};

export default SaleSection;
