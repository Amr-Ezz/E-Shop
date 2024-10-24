import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsById, Product } from "../api/requests";
import styled from "styled-components";
import useQuantity from "../Hooks/useQuantity";
import { Counter, CounterButton, CounterText } from "../shared/Counter";
import ActionButtons from "../shared/ActionButtons";
import SplitText from "./SplitText";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { cardStyle } from "../pages/CheckoutPage/CheckoutPage.styled";
import { auth } from "../firebase";
import LoginForm from "./LoginForm/LoginForm";
import Modal from "./Modal/Modal";

const Main = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  height: fit-content;
`;
const ProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(#fff2, transparent);
  box-shadow: 10px 40px 40px rgba(0.25, 0.25, 0.25, 0.25);

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;
const Specifications = styled.div`
  border: 1px solid white;
  width: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  color: ${(props) => props.theme.colors.text};
  h4 {
    border-bottom: 1px solid white;
    width: 100%;
    text-align: left;
    padding: 1rem;
    font-size: 20px;
  }
`;
const ProductRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 10px;
  color: ${(props) => props.theme.colors.text};
`;
const StickyImageContainer = styled.div`
  position: sticky;
  top: 120px;
  height: fit-content;
`;
const ProductImage = styled.img`
  width: fit-content;
  height: 400px;
  border-radius: 20px;
  transition: transform 0.3s ease-in-out;
  object-fit: contain;
  cursor: pointer;

  ${StickyImageContainer}:hover & {
    transform: scale(1.2);
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-around;
  align-items: flex-start;
  padding: 1rem;
  gap: 10px;
  h1 {
    color: ${(props) => props.theme.colors.text};
  }

  p:nth-child(3) {
    font-weight: 600;
    align-self: flex-end;
    color: grey;
  }
  p:nth-child(6) {
    font-weight: 600;
    span {
      color: ${(props) => props.theme.colors.quaternary};
    }
  }
`;
const PriceTag = styled.p`
  color: ${(props) => props.theme.colors.grey};
  display: flex;
  gap: 5px;
  font-weight: 500;
  border-radius: 100px;
  padding: 1rem;
  font-size: 48px;
  align-self: flex-start;
  box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
  color: green;
  span {
    color: grey;

    font-size: 0.6em;
    vertical-align: super;
  }
`;
const ContentDesc = styled.div`
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 10px 40px 40px rgba(0.95, 0.95, 0.25, 0.15);
  p:nth-child(1) {
    color: ${(props) => props.theme.colors.text};
    font-weight: 800;
    border-bottom: 1px solid white;
    padding-bottom: 10px;
  }
  p:nth-child(2) {
    font-weight: 300;
    font-size: 14px;
    padding-top: 10px;
  }
`;
const ColumnCart = styled.div`
  display: flex;
  padding: 1rem;
  width: 100%;
  gap: 10px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  border-radius: 20px;
  box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset;
  h1 {
    font-size: 26px;
  }

  p:nth-child(3) {
    font-weight: 600;
    align-self: flex-start;
    font-size: 25px;
    color: ${(props) => props.theme.colors.text};
  }
  p:nth-child(4) {
    font-weight: 800;
    font-size: 1.6rem;
    border: 1px solid blue;
    span {
      color: ${(props) => props.theme.colors.quaternary};
    }
  }
`;
const ListedSpecifications = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  list-style-type: none;
  padding: 0;
  li {
    margin: 8px 15px;
    font-size: 16px;
    text-align: left;
    list-style-type: disc;
    span {
      font-weight: 600;
    }
  }
`;
const PaymentDiv = styled.div``;

const ProductDetail = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [product, setProduct] = useState<Product | undefined>();
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();
  const stripe = useStripe();
  const elements = useElements();
  const { increment, quantity, decrement } = useQuantity();
  // const totalPrice = {product.price * quantity};
  const user = auth.currentUser;
  const userEmail = user?.email || "Anonmynus@example.com";
  //////////////////////////////////////////////////// useEffect ////////////////////////////////////
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetchProductsById(Number(id));
        setProduct(response);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch product");
        setLoading(false);
      }
    };

    if (id) {
      fetchProducts();
    }
  }, [id]);

  useEffect(() => {
    if (!auth.currentUser) {
      setShowModal(true);
    }
  }, []);
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  if (!product) {
    return <div>Loading...</div>;
  }
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    if (!auth.currentUser) {
      setShowModal(true);
      return;
    }
    const cardElement = elements.getElement(CardElement);
    if (cardElement) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: {
          email: userEmail,
          name: user?.displayName || "Anonmynus",
        },
      });

      if (error) {
        console.error(error);
      } else {
        console.log(paymentMethod);
      }
    }
  };

  // const navigate = useNavigate();

  // const handleBuy = (product: Product) => {
  //   navigate("/pages/CheckoutPage", {
  //     state: { product, totalPrice: product.price * quantity },
  //   });
  // };

  return (
    <Main>
      <ProductDiv>
        <ProductRow>
          <StickyImageContainer>
            <ProductImage src={product.image} alt={product.title} />
          </StickyImageContainer>{" "}
          <Content>
            <br />

            <ColumnCart>
              <h1>
                <SplitText
                  words={product.title.split(" ")}
                  animationDuration={500}
                  style={{
                    margin: 0,
                    padding: "2px",
                    lineHeight: 1.1,
                    fontSize: "26px",
                    fontWeight: 800,
                  }}
                />
              </h1>

              <PriceTag>
                {product.price * quantity}.99
                <span>USD</span>
              </PriceTag>

              <p>Quantity</p>

              <Counter>
                <CounterButton onClick={decrement}>-</CounterButton>
                <CounterText>{quantity}</CounterText>
                <CounterButton onClick={increment}>+</CounterButton>
              </Counter>
              <ActionButtons
                product={product}
                showBuyButton={true}
                showPayment={setShowPayment}
              />
              <ContentDesc>
                <p>Description</p>
                <p>{product.description}</p>
              </ContentDesc>
              {showPayment && (
                <>
                  <PaymentDiv>
                    <h3>Payment Method</h3>
                    <form onSubmit={handleSubmit}>
                      <CardElement options={cardStyle} />
                      <button type="submit" disabled={!stripe}>
                        Pay
                      </button>
                    </form>
                  </PaymentDiv>
                </>
              )}
            </ColumnCart>
          </Content>
        </ProductRow>
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
              Color: <span>{product.color}</span>
            </li>

            <li>
              Model: <span>{product.model}</span>
            </li>

            <li>
              Discount: <span>{product.discount}%</span>
            </li>
            <li>
              Brand: <span>{product.brand}</span>
            </li>
          </ListedSpecifications>
        </Specifications>
      </ProductDiv>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <LoginForm />
      </Modal>
    </Main>
  );
};

export default ProductDetail;
