import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Product } from "../api/requests";
import {
  Button,
  PriceText,
  ProductDescription,
  ProductImage,
  ProductTitle,
} from "../components/Modal/BuyModal";

const cardStyle = {
    style: {
      base: {
        color: "#fff",
        fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

const PaymentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
  gap: 10px;
  background-color: ${(props) => props.theme.colors.white};
  form {
    align-self: flex-start;
    button {
      margin-top: 20px;
      font-size: 16px;
    }
  }
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  img {
    width: 50%;
    height: 100vh;
  }
`;
const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  padding: 1rem;
  background-color: ${props => props.theme.colors.secondary};
  hr {
    width: 100%;
  }
`;
const CheckoutPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const {product, totalPrice} = location.state as LocationState;
  interface LocationState {
    product: Product;
    totalPrice: number;
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        console.error(error);
      } else {
        console.log(paymentMethod);
      }
    }
  };

  return (
    <PaymentDiv>
      <ProductInfo>
        <ProductImage src={product.image} alt={product.title}></ProductImage>
        <ProductDetail>
          <h3>Product Info</h3>
          <hr />
          <ProductTitle>{product.title}</ProductTitle>
          <hr />
          <ProductDescription>{product.description}</ProductDescription>
          <PriceText>Price: ${totalPrice}</PriceText>
          <h3>Payment Method</h3>
          <hr />
          <form onSubmit={handleSubmit}>
            <CardElement options={cardStyle} />
            <Button type="submit" disabled={!stripe}>
              Pay
            </Button>
          </form>
        </ProductDetail>
      </ProductInfo>
    </PaymentDiv>
  );
};

export default CheckoutPage;
