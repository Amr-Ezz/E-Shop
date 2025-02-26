import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

export type LoaderContextProps = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

export const LoaderContext = createContext<LoaderContextProps>(
  {} as LoaderContextProps
);

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);


  return (
    <LoaderContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = (): LoaderContextProps => {
  const loaderContext = useContext(LoaderContext);

  if (!loaderContext) {
    throw new Error(
      "Please use useLoader inside the context of LoaderProvider"
    );
  }

  return loaderContext;
};
