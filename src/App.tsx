// App.tsx
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import { CartProvider } from "./Context/CartContext";
import CheckoutPage from "./pages/CheckoutPage";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="Container">
          <Navbar />

          <Routes>
            <Route path="/pages/Services" element={<Services />} />
            <Route path="/" element={<Home />} />
            <Route path="/pages/ContactUs" element={<ContactUs />} />
            <Route path="/pages/AboutUs" element={<AboutUs />} />
            <Route path="/pages/CheckoutPage" element={<CheckoutPage />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>

          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
