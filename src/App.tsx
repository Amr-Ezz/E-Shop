// App.tsx
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import ProductDetail from "./components/ProductDetail";
import { ProductProvider } from "./Context/ProductContext";
import ScrollToTop from "./components/ScrollToTop";
import { UserProvider } from "./Context/UserContext";
import { BuyModalProvider } from "./Context/BuyContext";
import BuyModal from "./components/Modal/BuyModal";

function App() {
  const Home = React.lazy(() => import("./pages/Home/Home"));
  const CheckoutPage = React.lazy(
    () => import("./pages/CheckoutPage/CheckoutPage")
  );
  const SearchResults = React.lazy(() => import("./pages/SearchResults"));
  const ProductPage = React.lazy(() => import("./pages/ProductPage"));
  const ShopNow = React.lazy(() => import("./pages/Shop/ShopNow"));
  const AboutUs = React.lazy(() => import("./pages/AboutUs/AboutUs"));
  const ContactUs = React.lazy(() => import("./pages/ContactUs/ContactUs"));
  const Services = React.lazy(() => import("./pages/Services/Services"));

  return (
    <Router>
      <ScrollToTop />
      <UserProvider>
        <BuyModalProvider>
          <BuyModal />

          <CartProvider>
            <div className="Container">
              <Navbar />
              <ProductProvider>
                <Routes>
                  <Route path="/pages/Services" element={<Services />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/pages/ContactUs" element={<ContactUs />} />
                  <Route path="/pages/AboutUs" element={<AboutUs />} />
                  <Route
                    path="/pages/CheckoutPage"
                    element={<CheckoutPage />}
                  />
                  <Route path="/search" element={<SearchResults />} />
                  <Route path="/products/:id" element={<ProductDetail />} />
                  <Route
                    path="/products/category/:category"
                    element={<ProductPage />}
                  />
                  <Route path="/pages/Shop/ShopNow" element={<ShopNow />} />
                </Routes>
              </ProductProvider>

              <Footer />
            </div>
          </CartProvider>
        </BuyModalProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
