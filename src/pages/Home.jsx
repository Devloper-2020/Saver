import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiDollarSign, FiCheckCircle, FiRefreshCcw } from "react-icons/fi";
import { FaNewspaper, FaTv, FaBroadcastTower, FaGlobeAsia } from "react-icons/fa";


const slides = [
  {
    img: "/slide3.jpg",
    caption:
      "Helping Aussies for over 25 years with expert advice and unbeatable support. Trusted by more than 500,000 households across the country to find better energy and broadband deals.",
  },
  {
    img: "/slide2.jpg",
    caption:
      "Quickly and easily compare electricity, gas, and broadband plans tailored to your needs. Discover the best value in minutes and make informed choices without the confusion.",
  },
  {
    img: "/slide4.jpg",
    caption:
      "Switch providers stress free with help from our local experts. Enjoy complete transparency, no hidden fees, and a 100% free service designed to save you time and money.",
  },
];

const features = [
  {
    icon: <FiDollarSign className="text-green-600 w-12 h-12" />,
    title: "Exceptional Value",
    description:
      "Cut down your electricity costs by comparing top energy providers with Energy Saver start saving from your very next bill.",
  },
  {
    icon: <FiCheckCircle className="text-green-600 w-12 h-12" />,
    title: "Extensive Options",
    description:
      "Choose from a wide selection of electricity and gas plans to find the perfect fit for your lifestyle and budget.",
  },
  {
    icon: <FiRefreshCcw className="text-green-600 w-12 h-12" />,
    title: "Seamless Switching",
    description:
      "Transitioning to a new provider is effortless sign up online or over the phone with help from our local expert team.",
  },
];


export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef(null);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;


    const scrollInterval = setInterval(() => {
      if (!scrollContainer) return;
      scrollAmount += 1;
      scrollContainer.scrollLeft = scrollAmount;
      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      }
    }, 20);


    return () => clearInterval(scrollInterval);
  }, []);


  return (
  <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
  <section className="bg-white py-20 px-4 sm:px-8 md:px-12 lg:px-24 rounded-b-3xl shadow-md">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
      
      {/* Left: Image and Caption */}
      <div className="flex flex-col items-center w-full space-y-6">
        <div className="relative w-full max-w-[500px] h-[400px] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
          {slides.map((slide, idx) => (
            <motion.img
              key={idx}
              src={slide.img}
              alt={slide.caption || `Slide ${idx + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: idx === current ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                idx === current ? "z-10" : "z-0"
              }`}
            />
          ))}

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === current ? "bg-[#032D4D]" : "bg-white"
                } border border-[#032D4D] transition duration-300`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

    



      {/* Right: Hero Text */}
      <div className="flex flex-col w-full justify-center items-start text-left">
  <div className="max-w-2xl">
    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-left">
      Empowering Australians to{" "}
      <span className="text-green-600">Save Time & Money with the Right Plans</span>
    </h1>
    <p className="mt-6 text-lg text-Black font-medium text-left">
  For over <span className="underline decoration-white-700">25 years</span>, we've been helping Aussies make informed decisions. 
  Find the best deals quickly and easily join over 500,000 people who’ve already made the switch.Our mission is to save your time, money by comparing top providers . 
   
</p>

  </div>
</div>

    </div><br/>
     {/* Caption */}
  <div className="w-full text-center min-h-[120px]" aria-live="polite">
    <h3 className="text-xl md:text-2xl font-bold text-Black">Why Australians Choose Us</h3>
    <p className="mt-2 text-gray-600">{slides[current].caption}</p>
  </div>

  </section>

 <div className="w-full my-8 px-4 md:px-0 bg-[#032D4D] text-white">
  {/* SCAM WARNING */}
  <div className="py-8">
    <h1 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wider text-center">
      Beware of Scams
    </h1>
    <p className="mt-4 text-center text-base md:text-lg leading-relaxed">
      Scam callers are falsely claiming to be from Utility Saver, asking customers to download unknown software or share banking information.
      <span className="text-green-400 font-semibold"> Utility Saver will never ask you to do this.</span>
      If you receive such a call, please report it immediately by calling us at{" "}
      <a href="tel:0800123456" className="text-green-300 font-semibold underline"></a>.
    </p>
  </div>


  <div className="text-center">
    <h2 className="text-3xl font-bold text-white">
      Get Your Free Comparison
    </h2>
  </div>
<br/>
  <motion.div className="w-full flex justify-center px-4">
    <form
      className="w-full max-w-3xl space-y-8"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* Compare Options */}
      <div>
        <label
          htmlFor="compareOption"
          className="block mb-3 font-semibold text-base"
        >
          What would you like to compare?
        </label>
        <div className="flex flex-wrap gap-4" id="compareOption">
          {["Electricity", "Gas", "Electricity & Gas"].map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#E6EDF3] border border-[#B3C3D2] cursor-pointer hover:bg-[#D4E0EB] transition text-[#032D4D] font-medium"
            >
              <input
                type="radio"
                name="compareOption"
                value={option}
                className="accent-[#032D4D]"
                required
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[{ name: "name", placeholder: "Full Name", type: "text" },
          { name: "phone", placeholder: "Phone Number", type: "tel" },
          { name: "email", placeholder: "Email Address", type: "email" },
          { name: "postcode", placeholder: "Postcode", type: "text" },
        ].map(({ name, placeholder, type }) => (
          <input
            key={name}
            id={name}
            name={name}
            type={type}
            required
            placeholder={placeholder}
            className="px-5 py-3 border border-[#B3C3D2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#032D4D] text-[#032D4D] placeholder-gray-400 bg-white shadow-sm"
          />
        ))}
      </div>

      {/* Consent Checkbox */}
      <label className="flex items-start gap-3 text-sm leading-snug">
        <input
          type="checkbox"
          required
          className="mt-1 w-5 h-5 border-[#B3C3D2] rounded focus:ring-2 focus:ring-[#032D4D]"
        />
        By ticking this box, I provide my express consent for a Utility
        representative to contact me to review my electricity and/or gas bills
        and negotiate a supply and sale contract .
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-sky-600 hover:bg-sky-700 text-white w-full py-4 rounded-md transition font-semibold text-lg shadow-sm"
      >
        Register Now
      </button>
    </form>
  </motion.div>


<br/>


</div>

{/* Benefits Section */}
<section className="max-w-7xl mx-auto mt-24 px-6 sm:px-12 lg:px-24">
  <h2 className="text-4xl font-extrabold text-Black text-center">
    Benefits You Can Enjoy
  </h2>
<br/>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {features.map(({ icon, title, description }, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: idx * 0.2 }}
        tabIndex={0}
        className="bg-[#E6EDF3] border border-[#C5D3E0] rounded-3xl p-8 shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#A5C4DB]"
        aria-label={title}
      >
        <div className="mb-5 text-[#032D4D] text-5xl">{icon}</div>

        <h3 className="text-2xl font-bold text-[#032D4D] mb-3 leading-snug tracking-wide">
          {title}
        </h3>

        <p className="text-gray-700 text-base leading-relaxed">
          {description}
        </p>
      </motion.div>
    ))}
  </div>
</section>



{/* What Our Customers Say Section */}
<section className="w-full bg-white mt-32 px-4 sm:px-8 lg:px-16 xl:px-24">
  <div className="max-w-7xl mx-auto space-y-12">
    {/* Heading & Description */}<br/> 
   <div className="space-y-4 max-w-3xl mx-auto text-center">
  <br/><h2 className="text-4xl font-extrabold text-Black">
    What Our Customers Say
  </h2>
  <p className="text-gray-700 text-lg leading-relaxed text-justify">
    We've helped thousands of Australians make smarter decisions with
    their money. Whether it's choosing the best energy plan, internet
    provider, or health insurance, our customers love how simple and
    effective our service is. Take a look at their stories below.
  </p>
</div>

    {/* Scroll container only 
     no buttons */}
    <div
      className="overflow-x-auto pb-4 modern-scrollbar scroll-smooth scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-200"
      tabIndex={0}
    >
      <div className="flex gap-6 min-w-full">
        {[
          {
            name: "Marsh",
            title: "Got the best health plan in minutes!",
            image: "/marsh.jpg",
          },
          {
            name: "Nicole",
            title: "Easy to compare, easier to save!",
            image: "/nicole.jpg",
          },
          {
            name: "Jason",
            title: "Switched energy plans and saved big.",
            image: "/jason.jpg",
          },
          {
            name: "Sophie",
            title: "Quick, clear, and totally stress-free.",
            image: "/sophie.jpg",
          },
        ].map(({ name, title, image }) => (
          <div
            key={name}
            className="flex-shrink-0 rounded-2xl shadow-lg overflow-hidden relative min-w-[280px] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[400px] h-[400px] bg-cover bg-center text-white"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1)), url(${image})`,
            }}
          >
            <div className="absolute bottom-0 p-6">
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="text-sm italic">"{title}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Modern Scrollbar Styles */}
  <style jsx>{`
    .modern-scrollbar::-webkit-scrollbar {
      height: 10px;
    }

    .modern-scrollbar::-webkit-scrollbar-track {
      background: #e5e7eb; /* Tailwind gray-200 */
      border-radius: 12px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    }

    .modern-scrollbar::-webkit-scrollbar-thumb {
      background: linear-gradient(135deg, #34d399, #059669);
      border-radius: 12px;
      box-shadow: 0 2px 6px rgba(5, 150, 105, 0.5);
      transition: background 0.3s ease, box-shadow 0.3s ease;
    }

    .modern-scrollbar::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(135deg, #059669, #065f46);
      box-shadow: 0 3px 8px rgba(5, 95, 70, 0.8);
    }

    /* Firefox */
    .modern-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: #34d399 #e5e7eb;
    }
  `}</style>
</section>
<section className="w-full bg-[#032D4D] text-white py-20 px-4 sm:px-8 lg:px-16 xl:px-24 mt-24 rounded-t-[2.5rem]">
  <div className="max-w-4xl mx-auto flex flex-col items-center space-y-10">

    {/* Heading */}
    <div className="flex flex-col items-center w-full space-y-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
        Frequently Asked Questions – <span className="text-[#00FFD1]">FAQ</span>
      </h2>
    </div>

    {/* Accordion List */}
    <div className="w-full space-y-6">
      {[
        {
          question: "Which energy companies can I choose from in Australia?",
          answer: `In Australia's deregulated market, you can choose from a wide range of authorised retailers...`,
        },
        {
          question: "What’s the process to change my energy provider?",
          answer: `Start by checking your current plan and recent bill...`,
        },
        {
          question: "How do I find the right energy plan?",
          answer: `The right plan varies by household...`,
        },
        {
          question: "Why are energy prices increasing?",
          answer: `Rising prices are driven by global events...`,
        },
        {
          question: "What can I do to lower my energy costs?",
          answer: `Cut costs by switching to LED lighting...`,
        },
      ].map((faq, index) => (
        <details
          key={index}
          className="group border border-[#032D4D] rounded-xl bg-white/10 shadow-md hover:shadow-lg transition duration-300"
        >
          <summary className="flex justify-between items-center cursor-pointer px-6 py-4 text-base sm:text-lg font-semibold text-white">
            {faq.question}
            <svg
              className="w-6 h-6 text-white transition-transform duration-300 group-open:rotate-45"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </summary>
          <div className="px-6 pb-4 text-gray-200 text-sm sm:text-base whitespace-pre-line">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  </div>
</section>







<section className="w-full bg-gray-50 mt-24 py-12 px-4 sm:px-8 lg:px-16 xl:px-24 overflow-hidden">
  <div className="max-w-7xl mx-auto text-center space-y-6">
    <h2 className="text-3xl font-extrabold text-black-800">Our Range of Providers</h2>
    <p className="text-gray-600 text-base max-w-xl mx-auto">
      We have great relationships with a wide range of Australia’s leading providers, from Energy to
      Car Insurance and from Health Insurance to Internet. Check out our full range of providers.
    </p>

    {/* Marquee Style Scroll */}
    <div className="relative overflow-hidden">
      <div className="animate-marquee flex gap-10 py-6 w-max">
        {[
          { name: "Agl", logo: "/agl.jpg" },
          { name: "Origin", logo: "/origin.png" },
          { name: "Red Energy", logo: "/red energy.png" },
          { name: "Lumo", logo: "/lumo.png" },
          { name: "HCF", logo: "/origin.png" },
          { name: "Latrobe Health", logo: "/red energy.png" },
        ]
          // Duplicate array to create infinite scroll illusion
          .concat([
            { name: "Agl", logo: "/agl.jpg" },
            { name: "Origin", logo: "/origin.png" },
            { name: "Red Energy", logo: "/red energy.png" },
            { name: "Lumo", logo: "/lumo.png" },
            { name: "HCF", logo: "/origin.png" },
            { name: "Latrobe Health", logo: "/red energy.png" },
          ])
          .map(({ name, logo }, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[160px]">
              <div className="bg-white p-4 rounded-xl shadow-md">
                <img src={logo} alt={name} className="h-16 w-auto object-contain" />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-800 text-center">{name}</p>
            </div>
          ))}
      </div>
    </div>
  </div>

  {/* CSS for marquee animation */}
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










    </div>
  );
}
