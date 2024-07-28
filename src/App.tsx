import { ThemeProvider } from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar";
import { theme } from "./Theme/themeContext";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/pages/Services" element={<Services />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <div className="container"></div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
