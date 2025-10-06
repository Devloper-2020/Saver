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
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
      <p className="text-lg text-gray-600">
        Our services are not yet available in Australia. Stay tuned!
      </p>
    </div>
  );
}


export default App;
