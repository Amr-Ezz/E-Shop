import { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "../api/requests";

interface BuyModalProps {
  isModalOpen: boolean;
  product: Product | null;
  localQuantity: number;
  totalPrice?: number;
  phoneNumber?: string | null;
  openModal: (
    product: Product,
    quantity?: number,
    totalPrice?: number,
    phoneNumber?: string
  ) => void;
  closeModal: () => void;
}

const BuyModalContext = createContext<BuyModalProps | undefined>(undefined);

export const BuyModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [localQuantity, setLocalQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const openModal = (
    product: Product,
    quantity: number = 1,
    totalPrice: number = 0,
    phoneNumber: string = ""
  ) => {
    setProduct(product);
    setLocalQuantity(quantity);
    setTotalPrice(totalPrice);
    setPhoneNumber(phoneNumber);
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
        phoneNumber,
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
