import { createContext, ReactNode, useContext, useState } from "react";

interface ContextProps {
  phoneNumber: string | null;
  setPhoneNumber: (phoneNumber: string | null) => void;
}

interface UserProps {
  children: ReactNode;
}

const UserContext = createContext<ContextProps | undefined>(undefined);

export const UserProvider: React.FC<UserProps> = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{ phoneNumber, setPhoneNumber }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
