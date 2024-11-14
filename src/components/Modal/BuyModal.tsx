import styled from "styled-components";
import useQuantity from "../../Hooks/useQuantity";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { cardStyle } from "../../pages/CheckoutPage/CheckoutPage.styled";
import { auth } from "../../firebase";
import { useBuyModal } from "../../Context/BuyContext";

// interface BuyTypes {
//   onClose: () => void;
//   product: Product;
//   localQuantity?: number;
//   totalPrice?: number;
//   phoneNumber: string | null;
// }

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  pointer-events: auto;
`;

const ModalWrapper = styled.div`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  padding: 16px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);

  max-width: 1100px;
  max-height: fit-content;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  z-index: 1001;

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    max-width: 95%;
  }
`;

export const ProductImage = styled.img`
  object-fit: contain;
  width: 150px;
  height: 150px;
  padding-top: 3rem;
  border-radius: 80px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
    margin-bottom: 12px;
  }
`;

export const ProductTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 8px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ProductDescription = styled.p`
  font-size: 0.85rem;
  color: ${(props) => props.theme.colors.text};
  font-weight: 100;
  margin-bottom: 12px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const PriceText = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

export const CounterButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  color: black;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #e0e0e0;
  }

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    font-size: 1rem;
  }
`;

export const CounterText = styled.p`
  margin: 0 16px;
  font-size: 1.2rem;

  @media (max-width: 480px) {
    font-size: 1rem;
    margin: 0 12px;
  }
`;

// const ButtonWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 20px;

//   @media (max-width: 480px) {
//     flex-direction: column;
//     gap: 12px;
//     width: 100%;
//   }
// `;

export const Button = styled.button`
  width: 86px;
  height: 50px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.quaternary};
  color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.white};
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 600;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
const ModalRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: ${(props) => props.theme.colors.white};
`;
const ModalRows = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.1);
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.9rem;
    text-align: center;
    position: relative;
    color: ${(props) => props.theme.colors.white};
  }
`;
const PaymentDiv = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1.5rem 0;
  color: ${(props) => props.theme.colors.white};

  form {
    padding: 1rem;
    width: 100%;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.9);
    margin: 1rem 0;
  }
`;
const ButtonModal = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1.5rem;

  button {
    padding: 1rem;
    border-radius: 12px;
    font-size: 1rem;
    transition: transform 0.2s;

    background: ${(props) => props.theme.colors.quaternary};
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const BuyModal: React.FC = () => {
  const { product, localQuantity, phoneNumber, isModalOpen, closeModal } =
    useBuyModal();
  const { increment, decrement, quantity } = useQuantity(localQuantity);

  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const user = auth.currentUser;
  const userEmail = user?.email || "Anonmynus@example.com";
  const userName = user?.displayName || "Anonmynus";
  if (!isModalOpen || !product) return null;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) {
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
      console.log(data.clientSecret);
      const cardElement = elements.getElement(CardElement);
      if (cardElement && clientSecret) {
        const { error, paymentIntent } = await stripe.confirmCardPayment(
          clientSecret,
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
          console.error("payment Error:", error);
        } else if (paymentIntent && paymentIntent.status === "succeeded") {
          console.log("Successfull:", paymentIntent);
        }
      }
    } catch (error) {
      console.error("Error creating payment intent", error);
    }
  };

  return (
    <ModalOverlay>
      <ModalWrapper>
        <ModalRows>
          <h2>Complete Your Purchase</h2>
          <ModalRow>
            <p> Product Name: </p>
            <ProductTitle> {product.title.substring(0, 50)}</ProductTitle>
          </ModalRow>
          {/* <ProductImage src={product.image} alt={product.title} /> */}
          <ModalRow>
            <p>Quantity:</p>{" "}
            <Counter>
              <CounterButton onClick={decrement}>-</CounterButton>
              <CounterText>{quantity}</CounterText>
              <CounterButton onClick={increment}>+</CounterButton>
            </Counter>
          </ModalRow>
          <ModalRow>
            {" "}
            <p>Price:</p>{" "}
            <PriceText> ${(product.price * quantity).toFixed(2)}</PriceText>
          </ModalRow>
          <ModalRow style={{ fontWeight: "bold", borderBottom: "none" }}>
            <p>Total</p>{" "}
            <PriceText> ${(product.price * quantity).toFixed(2)}</PriceText>
          </ModalRow>
        </ModalRows>
        {/* <ButtonWrapper>
          <Button onClick={onClose}>Close</Button>
          <Button onClick={handleCheckOut}>Buy</Button>
        </ButtonWrapper> */}
        <PaymentDiv>
          <h3>Payment Method</h3>
          <form onSubmit={handleSubmit}>
            <CardElement options={cardStyle} />
         
          </form>
          <ButtonModal>
            <button
              style={{ background: "rgba(255, 255, 255, 0.1)" }}
              onClick={closeModal}
            >
              Cancel
            </button>
            <button type="submit" disabled={!stripe} onClick={handleSubmit}>
              Pay Now
            </button>
          </ButtonModal>
         
        </PaymentDiv>{" "}
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default BuyModal;
