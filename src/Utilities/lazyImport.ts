import React from "react";

const componentMap = {
    HeroSection: () => import("../components/HeroSection"),
    SaleSection: () => import("../components/SaleSection"),
    AdsSection: () => import("../components/AdsSection"),
    CommentsSection: () => import("../components/CommentsSection"),
  };
  const lazyImport = (componentName: keyof typeof componentMap): React.LazyExoticComponent<React.FC> =>
    React.lazy(componentMap[componentName]);

export default lazyImport;
