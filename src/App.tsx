import { ThemeProvider } from "styled-components";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SaleSection from "./components/SaleSection";
import { theme } from "./Theme/themeContext";
import AdsSection from "./components/AdsSection";
import CommentsSection from "./components/CommentsSection";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Navbar />
        <HeroSection />
        <SaleSection />
        <AdsSection />
        <CommentsSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
