// // BuyModal.tsx
// import React from 'react';
// import CheckoutForm from '../Stripe/CheckoutForm';
// import styled from 'styled-components';

// const ModalWrapper = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background: white;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   width: 90%;
//   max-width: 500px;
// `;


// const BuyModal: React.FC<{ product: { amount: number; currency: string }; quantity: number; onClose: () => void }> = ({ product, quantity, onClose }) => {
//   return (
//     <ModalWrapper>
//       <h2>Complete Your Purchase</h2>
//       <CheckoutForm product={product} quantity={quantity} />
//       <button onClick={onClose}>Close</button>
//     </ModalWrapper>
//   );
// };

// export default BuyModal;
////////////////////////////////////////////////////////////////////////////////////////////
