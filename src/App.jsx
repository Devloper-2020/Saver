import { useEffect } from "react";
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
import './App.css';

function App() {
  useEffect(() => {
    // Disable right-click
    document.addEventListener('contextmenu', e => e.preventDefault());

    // Disable text selection
    document.addEventListener('selectstart', e => e.preventDefault());

    // Disable copy, cut, paste
    const blockClipboard = e => e.preventDefault();
    document.addEventListener('copy', blockClipboard);
    document.addEventListener('cut', blockClipboard);
    document.addEventListener('paste', blockClipboard);

    // Disable dragging images
    const images = document.querySelectorAll('img');
    images.forEach(img => img.setAttribute('draggable', 'false'));

    // Block keyboard shortcuts for Inspect (F12, Ctrl+Shift+I, Ctrl+Shift+J, etc.)
    document.addEventListener('keydown', e => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'U')
      ) {
        e.preventDefault();
      }
    });
  }, []);

  return (
    <Router>
      <div className="font-sans bg-white text-gray-800 select-none">
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
