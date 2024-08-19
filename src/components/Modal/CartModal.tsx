import React from "react";
import styled from "styled-components";
import { useCart } from "../../Context/CartContext";

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
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  color: black;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  padding-top: 10px;

  button {
    width: 86px;
    height: 50px;
    border-radius: 50px;
    font-weight: 600;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.white};
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.primary};
      border: 1px solid ${(props) => props.theme.colors.primary};
    }
  }
`;

const CartItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  div {
    h3 {
      text-align: left;
      color: ${(props) => props.theme.colors.primary};
      font-weight: 600;
      padding-top: 10px;
    }
    p {
      text-align: left;
      padding-top: 10px;
      span {
      color: green;
      }
    }
  }
  button {
    width: 86px;
    height: 50px;
    border-radius: 50px;
    font-weight: 600;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.primary};
    cursor: pointer;
    transition: background-color 0.3s ease;
    align-self: flex-end;
    &:hover {
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

interface CartModalProps {
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
  const { cartItem, removeFromCart, updateQuantity } = useCart();

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>Your Cart</h2>
        {cartItem.map((item) => (
          <CartItem key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "50px", height: "50px" }}
            />
            <div>
              <h3>{item.title}</h3>
              <p>Price: <span>$</span>{item.price}</p>
              {/* <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={e => updateQuantity(item.id, parseInt(e.target.value))}
              /> */}
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </CartItem>
        ))}
        <button onClick={onClose}>Close</button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CartModal;
