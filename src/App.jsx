import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./pages/Chatbot";
import Home from "./pages/Home";
import AboutUs from "./pages/About";
import Contact from "./pages/Contact";
import Compare from "./pages/Compare";

import HomeEnergy from "./pages/solutions/HomeEnergy";
import BusinessEnergy from "./pages/solutions/BusinessEnergy";
import Commercial from "./pages/solutions/Commercial";
import Solar from "./pages/solutions/SolarBattery";
import './App.css'; // Ensure your styles are imported

function App() {
  return (
    <Router>
      <div className="font-sans bg-white text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/compare" element={<Compare />} />
      
          <Route path="/solutions/home" element={<HomeEnergy />} />
          <Route path="/solutions/business" element={<BusinessEnergy />} />
          <Route path="/solutions/commercial" element={<Commercial />} />
          <Route path="/solutions/solar" element={<Solar />} />
        </Routes>
        <Footer />
       
      </div>
    </Router>
  );
}

export default App;
