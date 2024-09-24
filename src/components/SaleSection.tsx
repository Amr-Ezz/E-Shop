import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchProducts, Product } from "../api/requests";
import BuyModal from "./Modal/BuyModal";
import { CardContainer } from "../shared/Card";
import { useNavigate } from "react-router-dom";

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  background: ${(props) => props.theme.colors.secondary};
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.secondary} 50%,
    ${(props) => props.theme.colors.tertiary} 100%
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
    width: ${(props) => (props.$clicked ? "20px" : "10px")};
    height: 10px;
  }
`;

const SaleSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showBuyModal, setShowBuyModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<string>("audio");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const navigate = useNavigate();

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
    const totalPrice = product.price;
    navigate("/pages/CheckoutPage", { state: { product, totalPrice } });
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
          <CardContainer product={product} onBuy={handleBuy} key={product.id} />
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
          product={selectedProduct}
          onClose={() => setShowBuyModal(false)}
        />
      )}
    </MainSection>
  );
};

export default SaleSection;
