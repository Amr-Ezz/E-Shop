import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SaleSection from "./components/SaleSection";

function App() {
  return (
    <div className="container">
      <Navbar />
      <HeroSection />
      <SaleSection />
    </div>
  );
}

export default App;
