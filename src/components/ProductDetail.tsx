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
import { useUser } from "../Context/UserContext";

const Main = styled.div`
  width: 100%;
  background: ${(props) => props.theme.background};
  height: fit-content;
`;
const ProductDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  background: linear-gradient(#fff2, transparent);
  box-shadow: 10px 40px 40px rgba(0.25, 0.25, 0.25, 0.25);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;
const Specifications = styled.div`
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  gap: 2rem;
  padding: 2rem;
  color: ${(props) => props.theme.colors.text};
`;
const StickyImageContainer = styled.div`
  position: sticky;
  top: 120px;
  height: fit-content;
  width: fit-content;
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
  gap: 1.5rem;
  text-align: left;
  gap: 10px;
  h1 {
    color: ${(props) => props.theme.colors.text};
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 1rem;
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
  font-size: 2rem;
  text-align: left;
  align-self: flex-start;
  color: ${(props) => props.theme.colors.quaternary};
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
    font-size: 1.5rem;
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
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const stripe = useStripe();
  const elements = useElements();
  const { increment, quantity, decrement } = useQuantity();
  const totalPrice = product ? product.price * quantity : 0;
  const user = auth.currentUser;
  const userEmail = user?.email || "Anonmynus@example.com";
  const userName = user?.displayName;
  const { phoneNumber } = useUser();
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
    if (error) {
      console.log(error, "Error");
    }
    if (loading) {
      <div>Loading......</div>;
    }
    if (clientSecret) {
      // alert("Client Secret Failed");
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
    try {
      const customerCreate = await fetch(
        "http://localhost:3001/create-customer",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: userName,
            email: userEmail,
          }),
        }
      );
      if (!customerCreate.ok) {
        throw new Error("Error creating customer!");
      }
      const customerData = await customerCreate.json();
      const customerId = customerData.id;
      const response = await fetch(
        "http://localhost:3001/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            price: product.price,
            quantity: quantity,
            productId: product.id,
            productName: product.title,
            customer_name: userName,
            customer_email: userEmail,
            customerId: customerId,
            phone: phoneNumber,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setClientSecret(data.clientSecret);
      const cardElement = elements.getElement(CardElement);
      if (cardElement) {
        const { error, paymentIntent } = await stripe.confirmCardPayment(
          data.clientSecret,
          {
            payment_method: {
              card: cardElement,
              billing_details: {
                email: userEmail,
                name: userName || "Anonmynus",
                phone: phoneNumber,
              },
            },
          }
        );

        if (error) {
          console.error(error);
        } else if (paymentIntent) {
          console.log("Successfull:", paymentIntent);
        }
      }
    } catch (error) {
      console.error("Error creating payment intent", error);
    }
  };

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
                  words={product.title.substring(0, 50).split(" ")}
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
                {totalPrice}.99
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
              {showPayment && (
                <>
                  <PaymentDiv>
                    <h3>Payment Method</h3>
                    <form onSubmit={handleSubmit}>
                      <CardElement options={cardStyle} />
                      <button type="submit" disabled={!stripe}>
                        Pay {totalPrice}.99
                      </button>
                    </form>
                  </PaymentDiv>
                </>
              )}
            </ColumnCart>
          </Content>
        </ProductRow>
       
      </ProductDiv>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <LoginForm />
      </Modal>
    </Main>
  );
};

export default ProductDetail;
