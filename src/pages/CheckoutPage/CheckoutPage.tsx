import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import { Product } from "../../api/requests";
import {
  Button,
  PriceText,
  ProductDescription,
  ProductTitle,
} from "../../components/Modal/BuyModal";
import {
  cardStyle,
  PaymentDiv,
  ProductDetail,
  ProductInfo,
} from "./CheckoutPage.styled";

const CheckoutPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const { product, totalPrice } = location.state as LocationState;
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
        <img src={product.image} alt={product.title} loading="lazy"/>
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
