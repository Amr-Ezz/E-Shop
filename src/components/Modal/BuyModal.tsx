import { useState } from "react";
import styled from "styled-components";

interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
}
interface BuyTypes {
  onClose: () => void;
  item: Item;
  onConfirm: (item: Item, quantity: number) => void;
}
const ModalWrapper = styled.div``;
const Counter = styled.div``;

const BuyModal: React.FC<BuyTypes> = ({ onClose, item, onConfirm }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <ModalWrapper>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <Counter>
        <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
          -
        </button>
        <p>{quantity}</p>
        <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
      </Counter>
      <button onClick={() => onConfirm(item, quantity)}>Confirm Purchases</button>
      <button onClick={onClose}>Close</button>
    </ModalWrapper>
  );
};

export default BuyModal;
