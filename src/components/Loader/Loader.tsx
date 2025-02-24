import { useContext } from "react";
import { LoaderContext } from "../../Context/LoaderContext";
import "./Loader.css";
export const Loader = () => {
  const { isLoading } = useContext(LoaderContext);
  return (
    <>
      {isLoading ? (
        <div className="loaderOverlay">
          <div className="loop cubes">
            <div className="item cubes"></div>
            <div className="item cubes"></div>
            <div className="item cubes"></div>
            <div className="item cubes"></div>
            <div className="item cubes"></div>
            <div className="item cubes"></div>
          </div>
        </div>
      ) : null}
    </>
  );
};
