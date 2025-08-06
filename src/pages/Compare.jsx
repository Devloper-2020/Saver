import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
const inputStyle =
  "w-full p-3 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-y[#032D4D]-400 text-sm transition-all bg-gray-50";

const iconStyle = "absolute left-3 top-3.5 w-5 h-5 text-yellow-400 pointer-events-none";





export default function Compare() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    comparisonType: "",
    retailerElectricity: "",
    retailerGas: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.fullName.trim())) {
      newErrors.fullName = "Name can only contain letters and spaces.";
    }

    const phoneRegex = /^04\d{2}\s?\d{3}\s?\d{3}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid Australian mobile (e.g., 04XX XXX XXX).";
    }

    if (!formData.comparisonType) {
      newErrors.comparisonType = "Please select a service type.";
    }

    if (!formData.retailerElectricity) {
      newErrors.retailerElectricity = "Select your electricity retailer.";
    }

    if (!formData.retailerGas) {
      newErrors.retailerGas = "Select your gas retailer.";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to be contacted.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      e.target.submit(); // Submit to Getform.io
    }
  }; 
const [showError, setShowError] = useState(false);
const [comparisonType, setComparisonType] = useState("");
const [customerType, setCustomerType] = useState("");
const sections = ["Electricity", "Gas", "Broadband", "Solar", "Batteries"];
 const [activeSection, setActiveSection] = useState(null); 
 const scrollToForm = () => {
  const form = document.getElementById("comparison-form");
  if (form) {
    form.scrollIntoView({ behavior: "smooth" });
  }
};

  const data = {
    Electricity: [
      {
        company: "PowerCo",
        price: "$120/month",
        features: ["Fixed-rate Plan", "Green Energy", "Usage Dashboard"],
        highlight: true,
      },
      {
        company: "ElectroPro",
        price: "$115/month",
        features: ["Smart Meter Support", "Mobile App", "No Hidden Fees"],
      },
    ],
    Gas: [
      {
        company: "GasSafe",
        price: "$85/month",
        features: ["Auto Refill", "Emergency Support", "Billing Flexibility"],
      },
      {
        company: "HeatFlow",
        price: "$80/month",
        features: ["Eco-Friendly", "Quick Setup", "Responsive Support"],
        highlight: true,
      },
    ],
    Broadband: [
      {
        company: "FiberFast",
        price: "$60/month",
        features: ["Unlimited Data", "99.9% Uptime", "Free Installation"],
      },
      {
        company: "NetSprint",
        price: "$55/month",
        features: ["No Contract", "Fast Upload", "24/7 Support"],
        highlight: true,
      },
    ],
    Solar: [
      {
        company: "SunTech",
        price: "$3000 (one-time)",
        features: ["25-Year Warranty", "App Monitoring", "Certified Panels"],
      },
      {
        company: "SolarBoost",
        price: "$2800 (one-time)",
        features: ["Battery Included", "Government Subsidy", "On-site Service"],
        highlight: true,
      },
    ],
    Batteries: [
      {
        company: "VoltMax",
        price: "$2500 (one-time)",
        features: ["Fast Charging", "Smart System", "10-Year Warranty"],
      },
      {
        company: "BatteryHouse",
        price: "$2300 (one-time)",
        features: ["Long Life", "Easy Install", "Live Monitoring"],
        highlight: true,
      },
    ],
  };


  const formRef = useRef(null);
  const [formHeight, setFormHeight] = useState(0);

  const handleNext = () => {
  if (step === 1 && !comparisonType) {
    alert("Please select what you want to compare.");
    return;
  }
  setStep(step + 1);
};

const handleBack = () => {
  setStep(step - 1);
};


  const next = () => step < 4 && setStep(step + 1);
  const prev = () => step > 1 && setStep(step - 1);



  useEffect(() => {
    if (formRef.current) {
      setFormHeight(formRef.current.clientHeight);
    }
  }, [step]);

  const partners = [
  {
    name: "ActewAGL",
    logo: "/agl.jpg",
    benefits: [
      "Local, 100% Australian customer support",
      "Freedom with no lock in contracts",
      "Manage your energy anytime with My.ActewAGL portal",
    ],
    link: "#",
  },
  {
    name: "AGL",
    logo: "/agl.jpg",
    benefits: [
      "Choose plans with built in Netflix options",
      "Carbon-neutral energy choices",
      "Flexible, contract-free plans with variable rates",
    ],
    link: "#",
  },
  {
    name: "EnergyAustralia",
    logo: "/logos/energyaustralia-logo.png",
    benefits: [
      "Award-winning support you can rely on",
      "Leading the transition to renewables no coal by 2040",
      "Full control of your account online, anytime",
    ],
    link: "#",
  },
  {
    name: "ENGIE",
    logo: "/logos/engie-logo.png",
    benefits: [
      "No exit fees—ever",
      "Exclusive rewards for NRMA members",
      "Eco-friendly, carbon neutral energy options",
    ],
    link: "#",
  },
  {
    name: "Lumo Energy",
    logo: "lumo.png",
    benefits: [
      "100% Australian-owned and operated",
      "Unlock discounts from leading brands",
      "Stay on top of your usage with an easy to use app",
    ],
    link: "#",
  },
  {
    name: "Origin Energy",
    logo: "/origin.png",
    benefits: [
      "No lock-in contracts for complete flexibility",
      "Driving change with renewable energy investments",
      "Convenient mobile app for tracking and paying bills",
    ],
    link: "#",
  },
  {
    name: "Red Energy",
    logo: "/red energy.png",
    benefits: [
      "Proudly Australian-owned",
      "Award-winning service from an all Australian team",
      "24/7 plan management and energy tracking via app",
    ],
    link: "#",
  },
];

  return (
    <>
    <section className="relative bg-[#032D4D] text-white pt-10 pb-20 px-4 sm:px-6 lg:px-12 overflow-hidden shadow-lg">
  {/* Background Shape */}
  <svg
    className="absolute top-0 right-0 w-64 h-64 text-amber-100 -z-10 rotate-12 opacity-60"
    fill="currentColor"
    viewBox="0 0 200 200"
  >
    <path d="M36.2,-64.4C46.6,-55.9,54.8,-46.6,63.1,-36.4C71.5,-26.2,80,-15.1,80.6,-3.3C81.1,8.5,73.6,17.1,67.7,26.6C61.8,36.1,57.4,46.5,48.2,54.5C39.1,62.6,25.1,68.2,11.3,66.6C-2.5,65,-16,56.2,-25.3,46.4C-34.7,36.6,-39.8,25.9,-47.2,15.4C-54.5,4.9,-64,-5.3,-65.5,-15.8C-67,-26.3,-60.6,-37,-50.9,-45.2C-41.3,-53.3,-28.5,-59,-15.1,-65.2C-1.7,-71.3,12.3,-77,24.7,-73.1C37.2,-69.3,48.3,-55.8,36.2,-64.4Z" transform="translate(100 100)" />
  </svg>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10 relative">
    {/* Text Section */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center md:text-left"
    >
      <h1 className="text-3xl  text-whitesm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 drop-shadow-xl tracking-tight">
        Compare Electricity & Gas Plans Easily
      </h1>
      <p className="text-base text-white sm:text-lg mb-6 text-gray-700 max-w-lg mx-auto md:mx-0">
        Save time and money by comparing Australia's top energy providers in just a few minutes.
      </p>

      {/* Providers */}
      <div className="mt-8">
        <h2 className="text-xl sm:text-2xl font-bold text-emerald-800 text-white">Our Range of Providers</h2>
        <p className="text-emerald-700 text-sm mt-2 max-w-md mx-auto md:mx-0 text-white">
          We work with Australia’s top providers to bring you great deals on energy, insurance and more.
        </p>

        {/* Marquee */}
        <div className="relative overflow-hidden mt-6">
          <div className="animate-marquee flex gap-8 sm:gap-10 py-4 w-max">
            {[...Array(2)].flatMap(() =>
              [
                { name: "", logo: "/" },
                { name: "", logo: "/" },
                { name: "", logo: "/" },
                { name: "", logo: "/" },
                { name: "", logo: "/" },
                { name: "", logo: "/" },
              ].map(({ name, logo }, idx) => (
                <div key={idx} className="flex flex-col items-center min-w-[100px]">
                  <div className="bg-white  p-3 rounded-xl shadow-md hover:shadow-lg transition">
                    <img src={logo} alt={name} className="h-10 sm:h-12 w-auto object-contain" />
                  </div>
                  <p className="mt-2 text-xs sm:text-sm font-medium text-white-800 text-center">{name}</p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8">
         <button
  onClick={scrollToForm}
  className="bg-blue-600 text-white hover:bg-blue-800 font-semibold px-6 py-3 rounded-full shadow-lg transition hover:scale-105 active:scale-95"
>
  Start Comparing
</button>

        </div>
      </div>
    </motion.div>
    
{/* Right Side - Image with Overlayed Step Text */}
<div className="rounded-3xl overflow-hidden border-2 border-white shadow-2xl">
  {/* Step Guide Section */}
  <div className="mt-12 text-center"> {/* 👈 Add text-center here */}
    <h3 className="text-2xl font-bold text-Black mb-6">
      Your Easy Energy Switch in 4 Simple Steps
    </h3>

    {/* Step Buttons */}
    <div className="flex gap-3 mb-6 flex-wrap justify-center">
      {[1, 2, 3, 4].map((n) => (
        <button
          key={n}
          onClick={() => setStep(n)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            step === n
              ? "bg-blue-600 text-white text-white shadow-md"
              : "bg-blue-600 text-white border border-blue-300 hover:bg-blue-900"
          }`}
        >
          Step {n}
        </button>
      ))}
    </div>

    {/* Image with Overlay Text */}
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
      <img
        src={`./step${step}.jpg`}
        alt={`Step ${step}`}
        className="w-full h-full object-cover"
      />

      {/* Overlay Text */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-6 backdrop-blur-sm">
        {step === 1 && (
          <p>
            <strong>Start with a quick intro:</strong> Tell us a bit about your household and what you’re looking for. It only takes a minute!
          </p>
        )}
        {step === 2 && (
          <p>
            <strong>Review your matches:</strong> We’ll show you tailored energy plans based on your needs — whether you're after savings, sustainability, or flexibility.
          </p>
        )}
        {step === 3 && (
          <p>
            <strong>Choose your best fit:</strong> Select the plan that works for you, and switch with just a few clicks or get guidance from our team.
          </p>
        )}
        {step === 4 && (
          <p>
            <strong>Sit back and relax:</strong> We’ll take care of the switch from start to finish. No paperwork, no hassle just seamless setup.
          </p>
        )}
      </div>
    </div>
  </div>
</div>


</div>
        
        {/* Marquee CSS */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </section>

<section className="bg-white py-16 px-4 sm:px-6 lg:px-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* LEFT - Info + Image */}
    <div className="bg-gray-100 p-6 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-[#032D4D] mb-4">Compare Energy Plans</h2>
      <p className="text-sm text-gray-700 mb-4">
        Find better rates and save more on electricity and gas. Switch in just a few clicks!
      </p>
      <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-4">
        <li>Access to top Australian energy providers</li>
        <li>Quick and seamless switching process</li>
        <li>No paperwork – we handle everything</li>
        <li>100% free, independent comparisons</li>
      </ul>
      <p className="text-xs italic text-gray-500">
        Helping thousands of Aussies save every year — <span className="font-semibold">start your comparison now.</span>
      </p>

      {/* IMAGE */}
      <div className="mt-6 rounded-lg overflow-hidden">
        <img
          src="/com.jpg"
          alt="Energy Comparison"
          className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg"
        />
      </div>
    </div>

 <form
      id="comparison-form"
      action="https://getform.io/f/aronkkpb"
      method="POST"
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-[#032D4D]">
        Compare Energy Plans
      </h2>

      {/* Full Name */}
      <div>
        <label className="block font-medium mb-2">Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block font-medium mb-2">Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="04XX XXX XXX"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      {/* Choose a Service */}
      <div>
        <label className="block font-medium mb-2">Choose a service:</label>
        <div className="flex gap-6">
          {["Electricity", "Gas", "Both"].map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input
                type="radio"
                name="comparisonType"
                value={type}
                checked={formData.comparisonType === type}
                onChange={handleChange}
              />
              {type}
            </label>
          ))}
        </div>
        {errors.comparisonType && (
          <p className="text-red-500 text-sm">{errors.comparisonType}</p>
        )}
      </div>

      {/* Retailer Electricity */}
      <div>
        <label className="block font-medium mb-2">Current Retailer Electricity:</label>
        <select
          name="retailerElectricity"
          value={formData.retailerElectricity}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <option value="">Select your current retailer</option>
          <option value="Retailer A">Retailer A</option>
          <option value="Retailer B">Retailer B</option>
          <option value="Retailer C">Retailer C</option>
          <option value="Retailer D">Retailer D</option>
          <option value="Other">Other</option>
        </select>
        {errors.retailerElectricity && (
          <p className="text-red-500 text-sm">{errors.retailerElectricity}</p>
        )}
      </div>

      {/* Retailer Gas */}
      <div>
        <label className="block font-medium mb-2">Current Retailer Gas:</label>
        <select
          name="retailerGas"
          value={formData.retailerGas}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <option value="">Select your current retailer</option>
          <option value="Retailer A">Retailer A</option>
          <option value="Retailer B">Retailer B</option>
          <option value="Retailer C">Retailer C</option>
          <option value="Retailer D">Retailer D</option>
          <option value="Other">Other</option>
        </select>
        {errors.retailerGas && (
          <p className="text-red-500 text-sm">{errors.retailerGas}</p>
        )}
      </div>

      {/* Consent */}
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1"
        />
        <label className="text-sm">
       By ticking this box, I provide my express consent for a Utility Saver representative to contact me to review my electricity and gas bills and negotiate a supply and sale contract.

        </label>
      </div>
      {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}

      {/* Submit */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-[#032D4D] text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </div>
    </form>

</div>
</section>

 <section className="bg-[#032D4D] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-24 transition-colors duration-500">
  <strong><h1 className={` text-white text-4xl md:text-5xl`}>
    Discover the Benefits of Our Trusted Energy Partners </h1></strong><br/>


  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
   
   
  </div>

</section>


    </>
  );
}
