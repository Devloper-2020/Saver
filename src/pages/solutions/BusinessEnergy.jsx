import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BusinessEnergy = () => {
  const formRef = useRef(null);
  const containerRef = useRef(null);
  const [formHeight, setFormHeight] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    comparisonType: '',
    retailerElectricity: '',
    retailerGas: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (containerRef.current) {
      setFormHeight(containerRef.current.offsetHeight);
    }
  }, []);

  const validate = () => {
    const newErrors = {};

 if (!formData.fullName.trim()) {
    newErrors.fullName = 'Name is required.';
  } else if (!/^[A-Za-z\s]+$/.test(formData.fullName)) {
    newErrors.fullName = 'Name must only contain letters and spaces.';
  }    if (!formData.phone.match(/^04\d{2} \d{3} \d{3}$/))
      newErrors.phone = 'Phone must be in format: 04XX XXX XXX';

    if (!formData.comparisonType) newErrors.comparisonType = 'Please select a service.';
    if (!formData.retailerElectricity) newErrors.retailerElectricity = 'Select a retailer.';
    if (!formData.retailerGas) newErrors.retailerGas = 'Select a retailer.';
    if (!formData.consent) newErrors.consent = 'You must agree to be contacted.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    if (!validate()) {
      e.preventDefault();
      return;
    }

    // Let Getform.io capture data then reset
    setTimeout(() => {
      formRef.current.reset();
      setFormData({
        fullName: '',
        phone: '',
        comparisonType: '',
        retailerElectricity: '',
        retailerGas: '',
        consent: false,
      });
      setErrors({});
    }, 500);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#032D4D] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Business Energy Solution</h1>
          <p className="text-lg text-white mt-4 max-w-2xl mx-auto">
            Compare electricity, gas, or broadband and save on your bills in just a few easy steps.
          </p>
        </div>
      </section>

      {/* Compare Form Section */}
      <section id="compare-form" className="bg-white pt-8 pb-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
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
                src="/slide1.jpg"
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
            ref={containerRef}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-2xl rounded-3xl p-8 w-full flex flex-col"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-wide text-center md:text-left">
              Compare & Save on Energy Bills
            </h2>

            <form
              action="https://getform.io/f/bxoyddna"
              method="POST"
              ref={formRef}
              onSubmit={handleFormSubmit}
              className="space-y-6"
            >
              {/* Full Name */}
              <div>
                <label className="block font-medium mb-2">Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-300"
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
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-300"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              {/* Comparison Type */}
              <div>
                <label className="block font-medium mb-2">Choose a service:</label>
                <div className="flex gap-6">
                  {['Electricity', 'Gas', 'Both'].map((type) => (
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
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-300"
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
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-300"
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

export default BusinessEnergy;
