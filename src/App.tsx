// App.tsx
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
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "./pages/CheckoutForm";
import CompletePage from "./pages/CompletePage";

// Load Stripe instance with your public key
const stripePromise = loadStripe(
  "pk_test_51PpeFm02wrbpBOPH5Po2Tl06mEDGBiTOtAWsnU4WpnEGSleQaZzQG0Ioi2WUBL7MvRABhp1Q5cnMV7lj85iHzoFJ001zx13v6A"
);

function App() {
  const [clientSecret, setClientSecret] = useState<string>("");
  const [dpmCheckerLink, setDpmCheckerLink] = useState<string>("");
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt", amount: 1000 }] }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        setDpmCheckerLink(data.dpmCheckerLink);
      });
  }, []);

  const appearance = {
    theme: "stripe" as "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CartProvider>
          <div className="Container">
            <Navbar />
            {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <Routes>
                  <Route path="/pages/Services" element={<Services />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/pages/ContactUs" element={<ContactUs />} />
                  <Route path="/pages/AboutUs" element={<AboutUs />} />
                  <Route
                    path="/pages/CheckoutForm"
                    element={<CheckoutForm dpmCheckerLink={dpmCheckerLink} />}
                  />
                  <Route
                    path="/pages/CompletePage"
                    element={<CompletePage />}
                  />
                </Routes>
              </Elements>
            )}

            <Footer />
          </div>
        </CartProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
