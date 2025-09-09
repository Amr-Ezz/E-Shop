import { createContext, ReactNode, useContext, useState } from "react";
import { NewProduct, Product } from "../api/requests";

interface BuyModalProps {
  isModalOpen: boolean;
  product: NewProduct | null;
  localQuantity: number;
  totalPrice?: number;
  openModal: (
    product: NewProduct,
    quantity?: number,
    totalPrice?: number,
  ) => void;
  closeModal: () => void;
}

const BuyModalContext = createContext<BuyModalProps | undefined>(undefined);

export const BuyModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [product, setProduct] = useState<NewProduct | null>(null);
  const [localQuantity, setLocalQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const openModal = (
    product: NewProduct,
    quantity: number = 1,
    totalPrice: number = 0,
  ) => {
    setProduct(product);
    setLocalQuantity(quantity);
    setTotalPrice(totalPrice);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setProduct(null);
    setIsModalOpen(false);
  };
  return (
    <BuyModalContext.Provider
      value={{
        isModalOpen,
        product,
        localQuantity,
        totalPrice,
        openModal,
        closeModal,
      }}
    >
      {children}
    </BuyModalContext.Provider>
  );
};
export const useBuyModal = () => {
  const context = useContext(BuyModalContext);
  if (!context) {
    throw new Error("useBuyModal must be used within a BuyModalProvider");
  }
  return context;
};
