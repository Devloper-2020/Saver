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
      setFormHeight(formRef.current.clientHeight);
    }
  }, [step]);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#032D4D] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <strong><h1 className={` text-white text-4xl md:text-5xl`}>
            Home Energy Solution
          </h1></strong><br/>
          <p className="text-lg text-white mb-6">
            Compare electricity, gas, or broadband and save on your bills in just a few easy steps.
          </p>
         
        </div>
      </section>

      {/* Form Section */}
      <section id="compare-form" className="bg-white pt-8 pb-16 min-h-screen flex items-center">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
               {/* Left Image Synced to Form Height */}
          <motion.div
       style={{ height: formHeight || 'auto' }}
       initial={{ opacity: 0, x: -30 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.5 }}
       className="rounded-3xl overflow-hidden border-8 border-[#032D4D] shadow-2xl flex justify-center"
     >
       {/* Relative wrapper for image and overlay */}
       <div className="relative w-full h-full">
         <img
           src="/s10.jpg"
           alt="Energy Comparison"
           className="object-cover w-full h-full max-h-[600px] md:min-h-[500px]"
         />
     
         {/* Text Overlay at Bottom */}
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

            {/* Step Circles */}
            <div className="flex gap-3 sm:gap-4 mb-8 justify-center md:justify-start flex-wrap">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-base sm:text-lg font-bold cursor-pointer select-none transition-all duration-300 ${
                    step === n
                      ? 'bg-[#032D4D] text-white shadow-lg'
                      : 'bg-gray-200 text-gray-600 hover:bg--[#032D4D] hover:text-[#032D4D]'
                  }`}
                  onClick={() => setStep(n)}
                >
                  {n}
                </div>
              ))}
            </div>

            {/* Step Content */}
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 flex-grow"
            >
              {/* Step 1 */}
              {step === 1 && (
                <>
                  <h3 className="text-xl font-semibold text-black mb-4">Step 1: Register</h3>
                  <label className="font-medium mb-1">
                    Register For <span className="text-red-500">*</span>
                  </label>
                  <select
                    className={`${inputStyle} ${showError && !comparisonType ? 'border-red-500' : ''}`}
                    value={comparisonType}
                    onChange={(e) => setComparisonType(e.target.value)}
                    required
                  >
                    <option value="">Select what you want to compare</option>
                    <option value="Electricity">Electricity</option>
                    <option value="Gas">Gas</option>
                    <option value="Both">Electricity & Gas</option>
                    <option value="Broadband">Broadband</option>
                  </select>
                  {showError && !comparisonType && (
                    <p className="text-red-500 text-sm mt-1">This field is required.</p>
                  )}
                  <input type="text" placeholder="Your Full Name" className={inputStyle} required />
                  <input type="email" placeholder="Your Email" className={inputStyle} required />
                  <input type="tel" placeholder="Your Phone Number" className={inputStyle} required />
                  <input type="text" placeholder="Postcode" className={inputStyle} required />
                  <button
                    onClick={() => {
                      if (!comparisonType) {
                        setShowError(true);
                      } else {
                        setShowError(false);
                        handleNext();
                      }
                    }}
                    className="px-4 py-2 bg-[#032D4D]  text-white rounded"
                  >
                    Next
                  </button>
                </>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <>
                  <h3 className="text-xl font-semibold text-black mb-4">Step 2: Usage Details</h3>
                  {(comparisonType === 'Electricity' || comparisonType === 'Both') && (
                    <>
                      <h4 className="text-lg font-medium text-gray-700 mb-2">Electricity Usage</h4>
                      <select className={inputStyle}>
                        <option>Select Existing Electricity Retailer</option>
                        <option>Retailer A</option>
                        <option>Retailer B</option>
                      </select>
                      <div className="grid grid-cols-2 gap-4">
                        {['Peak', 'Off Peak', 'Shoulder', 'Controlled Load', 'Solar'].map((label) => (
                          <React.Fragment key={label}>
                            <input type="number" min="0" placeholder={`${label} Usage (kWh)`} className={inputStyle} />
                            <input type="number" min="0" placeholder={`${label} Rate (c/kWh)`} className={inputStyle} />
                          </React.Fragment>
                        ))}
                      </div>
                      <input type="number" min="0" placeholder="Electricity Monthly Spend ($)" className={inputStyle} />
                    </>
                  )}
                  {(comparisonType === 'Gas' || comparisonType === 'Both') && (
                    <>
                      <h4 className="text-lg font-medium text-gray-700 mt-6 mb-2">Gas Usage</h4>
                      <select className={inputStyle}>
                        <option>Select Existing Gas Retailer</option>
                        <option>Retailer X</option>
                        <option>Retailer Y</option>
                      </select>
                      <input type="number" min="0" placeholder="Gas Monthly Spend ($)" className={inputStyle} />
                    </>
                  )}
                  <div className="flex justify-between mt-6">
                    <button onClick={handleBack} className="px-4 py-2 bg-[#032D4D] text-white  rounded">Back</button>
                    <button onClick={handleNext} className="px-4 py-2 bg-[#032D4D] text-white rounded">Next</button>
                  </div>
                </>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <>
                  <h3 className="text-xl font-semibold text-black mb-4">Step 3: Account Details</h3>
                  {(comparisonType === 'Electricity' || comparisonType === 'Both') && (
                    <input type="text" maxLength={11} placeholder="NMI (11-digit number)" className={inputStyle} />
                  )}
                  {(comparisonType === 'Gas' || comparisonType === 'Both') && (
                    <input type="text" maxLength={11} placeholder="MIRN (11-digit number)" className={inputStyle} />
                  )}
                  <select className={inputStyle}>
                    <option value="">Are you a pensioner?</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                  <select className={inputStyle}>
                    <option value="">Do you have solar panels?</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                  <select className={inputStyle}>
                    <option value="">Do you have a life support machine?</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                  <div className="flex justify-between mt-6">
                    <button onClick={handleBack} className="px-4 py-2 bg-[#032D4D] text-white rounded">Back</button>
                    <button onClick={handleNext} className="px-4 py-2 bg-[#032D4D] text-white rounded">Next</button>
                  </div>
                </>
              )}

              {/* Step 4 */}
              {step === 4 && (
                <>
                  <h3 className="text-xl font-semibold text-black mb-4">Step 4: Contact & Upload</h3>
                  {(comparisonType === 'Electricity' || comparisonType === 'Both') && (
                    <label className="block text-sm font-medium text-gray-700 mt-4">
                      Upload Electricity Bill
                      <input type="file" className="mt-2 w-full rounded-md border border-gray-300 p-2" />
                    </label>
                  )}
                  {(comparisonType === 'Gas' || comparisonType === 'Both') && (
                    <label className="block text-sm font-medium text-gray-700 mt-4">
                      Upload Gas Bill
                      <input type="file" className="mt-2 w-full rounded-md border border-gray-300 p-2" />
                    </label>
                  )}
                  <label className="flex items-center gap-2 text-sm mt-5">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                    I agree to receive calls from UtilityDeals.
                  </label>
                  <p className="text-xs text-gray-600 mt-2">
                    By ticking this box, I provide my express consent for a UtilityDeals representative to contact me
                    to review my electricity and/or gas bills and negotiate a supply and sale contract.
                  </p>
                  <div className="flex justify-between mt-6">
                    <button onClick={handleBack} className="px-4 py-2 bg-[#032D4D] text-white rounded">Back</button>
                    <button onClick={handleNext} className="px-4 py-2 bg-[#032D4D] text-white rounded">Submit</button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomeEnergy;
