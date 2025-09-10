import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchProductsById,
  NewProduct,
  fetchSuggestedProducts,
} from "../api/requests";
import styled from "styled-components";
import useQuantity from "../Hooks/useQuantity";
import { Counter, CounterButton, CounterText } from "../shared/Counter";
import ActionButtons from "../shared/ActionButtons";

import { auth } from "../firebase";
import LoginForm from "./LoginForm/LoginForm";
import Modal from "./Modal/Modal";
import BuyModal from "./Modal/BuyModal";
import { Loader } from "./Loader/Loader";
import CategoryMenu from "../shared/CategoryMenu";
import { CardContainer } from "../shared/Card";

// ✅ categories for menu
const categories = ["men's clothing", "women's clothing", "jewelery", "electronics"];

// ---------- STYLES ----------
const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem;
  background: ${(props) => props.theme.background};
`;

const Sidebar = styled.div`
  flex: 0 0 220px;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 12px;
  padding: 1rem;
  height: fit-content;
  position: sticky;
  top: 120px;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProductDiv = styled.div`
  background: linear-gradient(#fff2, transparent);
  box-shadow: 10px 40px 40px rgba(0.25, 0.25, 0.25, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1rem;
`;

const ProductRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;

  ${({ theme }) => `
  @media(max-width: ${theme.breakPoints.lg}) {
    grid-template-columns: 1fr;
  }`}
`;

const StickyImageContainer = styled.div`
  position: sticky;
  top: 140px;
  display: flex;
  justify-content: center;
  align-items: start;
`;

const ProductImage = styled.img`
  max-width: 100%;
  border-radius: 20px;
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  ${StickyImageContainer}:hover & {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.text};
  }
`;

const PriceTag = styled.p`
  display: flex;
  gap: 5px;
  font-weight: 500;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.quaternary};

  span {
    color: grey;
    font-size: 0.6em;
    margin-top: 10px;
  }
`;

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ContentDesc = styled.div`
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 10px 40px 40px rgba(0.95, 0.95, 0.25, 0.15);

  p:first-child {
    color: ${(props) => props.theme.colors.text};
    font-weight: 800;
    border-bottom: 1px solid white;
    padding-bottom: 10px;
    font-size: 1.5rem;
  }

  p:nth-child(2) {
    font-weight: 300;
    font-size: 14px;
    padding-top: 10px;
  }
`;

const Specifications = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.text};

  h4 {
    border-bottom: 1px solid white;
    padding: 1rem 0;
    font-size: 20px;
  }
`;

const ListedSpecifications = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  list-style-type: disc;
  padding-left: 1.5rem;

  li {
    font-size: 16px;
    span {
      font-weight: 600;
    }
  }
`;

const SuggestedSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 1rem;
  h2 {
    color: ${(props) => props.theme.colors.text};
    font-size: 1.8rem;
  }
`;

const SuggestedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
`;

// ---------- COMPONENT ----------
const ProductDetail = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [product, setProduct] = useState<NewProduct | undefined>();
  const [suggested, setSuggested] = useState<NewProduct[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { id } = useParams<{ id: string }>();
  const { increment, decrement, quantity } = useQuantity();
  const totalPrice = product ? product.price * quantity : 0;
    const navigate = useNavigate();


  useEffect(() => {
    const fetchProducts = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);

      try {
        const response = await fetchProductsById(Number(id));
        setProduct(response);

        if (response?.category) {
          const suggestedList = await fetchSuggestedProducts(
            response.category,
            response.id
          );
          setSuggested(suggestedList);
        }
      } catch (err) {
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  useEffect(() => {
    if (!auth.currentUser) {
      setShowModal(true);
    }
  }, []);

  const handleMenuClick = (category: string) => {
    setSelectedCategory(category);
        navigate(`/products/category/${category}`);

  };

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;
  if (!product) return <div>No product found.</div>;

  return (
    <Main>
      <Sidebar>
        <CategoryMenu
          categories={categories}
          selectedCategory={selectedCategory || product.category || ""}
          onSelectCategory={handleMenuClick}
        />
      </Sidebar>

      <ContentWrapper>
        <ProductDiv>
          <ProductRow>
            <StickyImageContainer>
              <ProductImage src={product.image} alt={product.title} />
            </StickyImageContainer>

            <Content>
              <h1>{product.title}</h1>

              <CounterWrapper>
                <PriceTag>
                  {totalPrice.toFixed(2)} <span>USD</span>
                </PriceTag>
                <Counter>
                  <CounterButton onClick={decrement}>-</CounterButton>
                  <CounterText>{quantity}</CounterText>
                  <CounterButton onClick={increment}>+</CounterButton>
                </Counter>
              </CounterWrapper>

              <ActionButtons product={product} showBuyButton={true} />

              <ContentDesc>
                <p>Description</p>
                <p>{product.description}</p>
              </ContentDesc>

              <Specifications>
                <h4>Specifications</h4>
                <ListedSpecifications>
                  <li>
                    <span>Free Returns</span>
                  </li>
                  <li>
                    <span>In Stock</span>
                  </li>
                  <li>
                    Rating: <span>{product.rating.rate}</span>
                  </li>
                  <li>
                    Count <span>{product.rating.count}</span>
                  </li>
                </ListedSpecifications>
              </Specifications>

              {showPayment && (
                <Modal show={showPayment} onClose={() => setShowPayment(false)}>
                  <BuyModal />
                </Modal>
              )}
            </Content>
          </ProductRow>
        </ProductDiv>

        {/* Suggested Products */}
        {suggested.length > 0 && (
          <SuggestedSection>
            <h2>Suggested Products</h2>
            <SuggestedGrid>
              {suggested.map((item) => (
                <CardContainer key={item.id} product={item} />
              ))}
            </SuggestedGrid>
          </SuggestedSection>
        )}
      </ContentWrapper>

      {/* Login Modal */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <LoginForm onSuccess={() => setShowModal(false)} />
      </Modal>
    </Main>
  );
};

export default ProductDetail;
