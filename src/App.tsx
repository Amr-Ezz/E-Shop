import { ThemeProvider } from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar";
import { theme } from "./Theme/themeContext";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import { CartProvider } from "./Context/CartContext";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';



const stripePromise = loadStripe("pk_test_51PpeFm02wrbpBOPH5Po2Tl06mEDGBiTOtAWsnU4WpnEGSleQaZzQG0Ioi2WUBL7MvRABhp1Q5cnMV7lj85iHzoFJ001zx13v6A");

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Elements stripe={stripePromise}>

      <div className="Container">
        <Router>
          <CartProvider>
            <Navbar />

          <Routes>
            <Route path="/pages/Services" element={<Services />}></Route>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/pages/ContactUs" element={<ContactUs />}></Route>
            <Route path="/pages/AboutUs" element={<AboutUs />}></Route>
          </Routes>
          <div className="container"></div>
          <Footer />
          </CartProvider>

        </Router>
      </div>
      </Elements>

    </ThemeProvider>
  );
}

export default App;
