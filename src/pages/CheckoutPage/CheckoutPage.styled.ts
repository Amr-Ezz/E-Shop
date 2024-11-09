import styled from "styled-components";
import { FlexColumn, FlexRow, Padding, FullHeightImage, LinearBackground } from '../../Utilities/StyledUtilities.styled';

export const cardStyle = {
  style: {
    base: {
      color: "black",
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

// Refined PaymentDiv with FlexColumn and TypeScript types
export const PaymentDiv = styled(FlexColumn)`
  padding-top: 0.5rem;
  ${LinearBackground}
  color: ${props => props.theme.colors.text};
  form {
    align-self: flex-start;
    button {
      margin-top: 20px;
      font-size: 16px;
    }
  }
`;

// Refined ProductInfo with FlexRow and TypeScript types
export const ProductInfo = styled(FlexRow)`
  justify-content: space-between;
  gap: 50px;
  img {
  width: 250px;
  height: 250px;
  }
  
`;

// Refined ProductDetail with FlexColumn and Padding utility
export const ProductDetail = styled(FlexColumn)`
  align-items: flex-start;
  ${Padding}
  background-color: ${(props) => props.theme.colors.secondary};
  hr {
    width: 100%;
  }
`;

// Refined StyledImage with FullHeightImage utility and TypeScript types
export const StyledImage = styled(FullHeightImage)`
  // Additional styles can be added here if needed.
`;
