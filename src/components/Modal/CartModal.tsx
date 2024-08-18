import styled from "styled-components";

interface ItemCart {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartTypes {
  onClose: () => void;
  items: ItemCart[];
}
const CartWrapper = styled.div``;
const CartItemWrapper = styled.div``;
const CartModal: React.FC<CartTypes> = ({ items, onClose }) => {
  return (
    <CartWrapper>
      <h3>Your Cart</h3>
      {items.map((item) => (
        <CartItemWrapper key={item.id}>
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price * item.quantity}</p>
        </CartItemWrapper>
      ))}
      <button onClick={onClose}>Close</button>
    </CartWrapper>
  );
};

export default CartModal;
