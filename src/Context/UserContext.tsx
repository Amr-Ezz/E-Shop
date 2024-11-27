import { onAuthStateChanged, User } from "firebase/auth";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../firebase";

interface ContextProps {
  phoneNumber: string | null;
  setPhoneNumber: (phoneNumber: string | null) => void;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  logOut: () => Promise<void>;
}

interface UserProps {
  children: ReactNode;
}

const UserContext = createContext<ContextProps | undefined>(undefined);

export const UserProvider: React.FC<UserProps> = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth state changed:", currentUser);
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        localStorage.setItem("user", JSON.stringify(currentUser));
      } else {
        localStorage.removeItem("user");
      }
    });
    return unsubscribe;
  }, []);
  const logOut = async () => {
    await auth.signOut();
    setUser(null);
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <UserContext.Provider
      value={{ phoneNumber, setPhoneNumber, user, setUser, logOut }}
    >
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
