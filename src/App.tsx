// App.tsx
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Services/Services";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import AboutUs from "./pages/AboutUs/AboutUs";
import { CartProvider } from "./Context/CartContext";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import SearchResults from "./pages/SearchResults";
import ProductDetail from "./components/ProductDetail";
import ProductPage from "./pages/ProductPage";
import { ProductProvider } from "./Context/ProductContext";
import ScrollToTop from "./components/ScrollToTop";
import { UserProvider } from "./Context/UserContext";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CartProvider>
        <div className="Container">
          <UserProvider>
            <Navbar />
            <ProductProvider>
              <Routes>
                <Route path="/pages/Services" element={<Services />} />
                <Route path="/" element={<Home />} />
                <Route path="/pages/ContactUs" element={<ContactUs />} />
                <Route path="/pages/AboutUs" element={<AboutUs />} />
                <Route path="/pages/CheckoutPage" element={<CheckoutPage />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route
                  path="/products/category/:category"
                  element={<ProductPage />}
                />
              </Routes>
            </ProductProvider>
          </UserProvider>

          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
