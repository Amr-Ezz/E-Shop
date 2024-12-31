import { useState, useEffect, useRef } from "react";

const useInView = (getOptions: () => IntersectionObserverInit) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const options = getOptions(); 
    const observer = new IntersectionObserver((entries) => {
      setIsInView(entries[0].isIntersecting);
    }, options);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, getOptions]);
  return { ref, isInView };
};
export default useInView;
