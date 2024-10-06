import styled from "styled-components";
export const cardStyle = {
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

export const PaymentDiv = styled.div`
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
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  img {
    width: 50%;
    height: 100vh;
  }
`;
export const ProductDetail = styled.div`
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