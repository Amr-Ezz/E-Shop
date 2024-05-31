import { ThemeProvider } from "styled-components";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SaleSection from "./components/SaleSection";
import { theme } from "./Theme/themeContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Navbar />
        <HeroSection />
        <SaleSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
