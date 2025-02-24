import { useContext } from "react";
import { LoaderContext, LoaderContextProps } from "../Context/LoaderContext";

export const useLoader = (): LoaderContextProps => {
  const loaderContext = useContext(LoaderContext);

  if (!loaderContext) {
    throw new Error(
      "Please use useLoader inside the context of LoaderProvider"
    );
  }

  return {
    start: loaderContext.start,
    stop: loaderContext.stop,
    isLoading: loaderContext.isLoading,
    loaderText: loaderContext.loaderText,
  };
};
