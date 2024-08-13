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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="Container">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/pages/Services" element={<Services />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pages/ContactUs" element={<ContactUs />}></Route>
          <Route path="/pages/AboutUs" element={<AboutUs />}></Route>

          
        </Routes>
        <div className="container"></div>
        <Footer />
      </Router>
      </div>
      
    </ThemeProvider>
  );
}

export default App;
