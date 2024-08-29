// CheckoutForm.tsx
import React, { useEffect, useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import styled from 'styled-components';

const FormWrapper = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCardElement = styled(CardElement)`
  width: 100%;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #c0c0c0;
    cursor: not-allowed;
  }
`;

interface CheckoutFormProps {
  product: { amount: number; currency: string };
  quantity: number;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ product, quantity }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState<string>("");

  useEffect(() => {
    axios.post('http://localhost:3001/create-payment-intent', {
      amount: product.amount * quantity,
      currency: product.currency,
    }).then(response => {
      setClientSecret(response.data.clientSecret);
    }).catch(error => {
      console.error('Error creating PaymentIntent:', error);
    });
  }, [product, quantity]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      console.error('Stripe.js or client secret is missing');
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      console.error('CardElement not found');
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: 'Customer Name',  // Replace with real billing details
        },
      },
    });

    if (error) {
      console.error('Payment error:', error);
    } else if (paymentIntent?.status === 'succeeded') {
      console.log('Payment successful!');
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <StyledCardElement />
        <SubmitButton type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </SubmitButton>
      </form>
    </FormWrapper>
  );
};

export default CheckoutForm;
