import { useState } from "react";

const useQuantity = (initalValue = 1) => {
  const [quantity, setQuantity] = useState(initalValue);
  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => Math.max(1, prev - 1));
  return {quantity, increment, decrement, setQuantity};
};
export default useQuantity;
