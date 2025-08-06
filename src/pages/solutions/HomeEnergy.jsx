import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const HomeEnergy = () => {
  const [step, setStep] = useState(1);
  const [comparisonType, setComparisonType] = useState('');
  const [showError, setShowError] = useState(false);
  const [formHeight, setFormHeight] = useState(null);
  const formRef = useRef(null);

  const inputStyle =
    'w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring--[#032D4D] transition';

  useEffect(() => {
    if (formRef.current) {
      setFormHeight(formRef.current.offsetHeight);
    }
  }, [step]);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#032D4D] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <strong>
            <h1 className="text-white text-4xl md:text-5xl">Home Energy Solution</h1>
          </strong>
          <br />
          <p className="text-lg text-white mb-6">
            Compare electricity, gas, or broadband and save on your bills in just a few easy steps.
          </p>
        </div>
      </section>

      <section id="compare-form" className="bg-white pt-8 pb-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Left Image Card */}
          <motion.div
            style={{ height: formHeight ? `${formHeight}px` : 'auto' }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden border-8 border-[#032D4D] shadow-2xl flex justify-center"
          >
            <div className="relative w-full h-full">
              <img
                src="/s10.jpg"
                alt="Energy Comparison"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gray-200/90 text-black p-6 rounded-t-2xl">
                <h3 className="text-xl font-bold">Compare Energy Plans</h3>
                <p className="text-sm mt-2">
                  Find better rates and save more on electricity and gas. Switch in just a few clicks!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-2xl rounded-3xl p-6 sm:p-8 md:p-10 w-full flex flex-col"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 sm:mb-8 tracking-wide text-center md:text-left">
              Compare & Save on Energy Bills
            </h2>

           <form action="https://getform.io/f/bwnwxxea" method="POST"
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
                  placeholder="Enter your name"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-medium mb-2">Phone Number:</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="04XX XXX XXX"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>

              {/* Choose a Service */}
              <div>
                <label className="block font-medium mb-2">Choose a service:</label>
                <div className="flex gap-6">
                  {['Electricity', 'Gas', 'Both'].map((type) => (
                    <label key={type} className="flex items-center gap-2">
                      <input type="radio" name="comparisonType" value={type} required />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              {/* Retailer Dropdowns */}
              <div>
                <label className="block font-medium mb-2">Current Retailer Electricity:</label>
                <select
                  name="retailerElectricity"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <option value="">Select your current retailer</option>
  <option value="Retailer A">Retailer A</option>
  <option value="Retailer B">Retailer B</option>
  <option value="Retailer C">Retailer C</option>
  <option value="Retailer D">Retailer D</option>
  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-2">Current Retailer Gas:</label>
                <select
                  name="retailerGas"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <option value="">Select your current retailer</option>
  <option value="Retailer A">Retailer A</option>
  <option value="Retailer B">Retailer B</option>
  <option value="Retailer C">Retailer C</option>
  <option value="Retailer D">Retailer D</option>
  <option value="Other">Other</option>
                </select>
              </div>

              {/* Consent */}
              <div className="flex items-start gap-2">
                <input type="checkbox" name="consent" required className="mt-1" />
                <label className="text-sm">
                  I agree to receive calls from UtilitySaver and consent to be contacted regarding energy plans.
                </label>
              </div>

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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomeEnergy;
