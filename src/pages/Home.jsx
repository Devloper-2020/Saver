import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiDollarSign, FiCheckCircle, FiRefreshCcw } from "react-icons/fi";
import { FaNewspaper, FaTv, FaBroadcastTower, FaGlobeAsia } from "react-icons/fa";



const slides = ["/img 1.jpg", "/img 2.jpg", "/img 3.jpg"];


const features = [
  {
    icon: <FiDollarSign className="text-green-600 w-12 h-12" />,
    title: "Great Value",
    description:
      "Save on your electricity bills. Compare and choose an energy provider through Energy Saver and save from your next bill.",
  },
  {
    icon: <FiCheckCircle className="text-green-600 w-12 h-12" />,
    title: "Great Choice",
    description:
      "With a wide range of electricity and gas providers to choose from, find a plan that works for you and your pocket.",
  },
  {
    icon: <FiRefreshCcw className="text-green-600 w-12 h-12" />,
    title: "Easy to Switch",
    description:
      "We make it easy to connect with the new retailer. Signup over the phone or digitally with our onshore team of experts.",
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
      {/* Hero Section */}
    <section className="bg-yellow-100 py-16 px-6 sm:px-12 lg:px-24 rounded-b-[3rem] shadow-md">
  <div className="max-w-7xl xl:max-w-[1440px] mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-12 md:gap-20 xl:gap-32 2xl:gap-40">

    {/* Left Content */}
    <div className="flex-1 space-y-6 text-left flex flex-col justify-center">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Empowering Australians,{" "}
        <span className="text-green-600"> to Save Time</span> Plans
      </h1>
      <p className="text-lg font-medium">
        Stress, and Money for {" "}
        <span className="underline decoration-green-700">Over 25 Years</span>{" "}
        to compare.
      </p>
      <p className="text-base font-semibold text-gray-700 max-w-md">
        Take charge of life’s key decisions with confidence. ⚡ Discover the best deals on Energy & Broadband — fast and fuss-free.
        We've streamlined the comparison process so it's simpler than ever.
        Over 500,000 smart connections and counting — proudly helping Australians compare and connect for more than a decade.
      </p>

      <div className="mt-6 rounded-3xl overflow-hidden border border-gray-300 shadow-lg w-full h-64 sm:h-80 md:h-96 lg:h-[400px]">
        <motion.img
          key={current}
          src={slides[current]}
          alt={`Slide ${current + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Right Form Card */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white border border-green-300 rounded-md shadow-lg w-full max-w-lg p-8 mx-auto flex flex-col justify-center"
    >
      {/* Scam Alert */}
      <div className="bg-red-100 border-l-8 border-red-500 p-4 text-red-800 rounded-md mb-6">
        <h3 className="font-bold text-lg mb-2">⚠️ BE AWARE OF SCAMS</h3>
        <p className="text-sm leading-relaxed">
          Please be aware of scam calls seeking you to download unknown
          software or asking personal banking details.
          <strong> Energy Saver will never ask you to do so.</strong> Call
          us on{" "}
          <a
            href="tel:0391180426"
            className="underline hover:text-red-700"
          >
            03 9118 0426
          </a>{" "}
          to report.
        </p>
      </div>

      {/* Registration Form */}
      <form className="flex flex-wrap items-center gap-6 justify-between">
        <h2 className="w-full text-3xl font-extrabold text-green-700 mb-6">
          Register For
        </h2>

        <div className="flex flex-wrap gap-3 flex-grow min-w-[280px] max-w-[600px] text-green-800 font-semibold">
          <label className="w-full mb-2">
            Select what you want to compare
          </label>
          <div className="flex flex-wrap gap-4">
            {[
              { id: "electricity", label: "Electricity" },
              { id: "gas", label: "Gas" },
              { id: "electricitygas", label: "Electricity & Gas" },
              { id: "internet", label: "Broadband" },
            ].map(({ id, label }) => (
              <label
                key={id}
                htmlFor={id}
                className="cursor-pointer flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full border border-green-300 hover:bg-green-200 transition"
              >
                <input
                  type="radio"
                  id={id}
                  name="compareOption"
                  value={label}
                  className="accent-green-600"
                  required
                />
                {label}
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-6 flex-grow min-w-[320px] max-w-[700px]">
          {[
            { name: "name", placeholder: "Enter your full name", label: "Your Name", type: "text" },
            { name: "email", placeholder: "Enter your email", label: "Your Email", type: "email" },
            { name: "phone", placeholder: "Enter your phone number", label: "Phone", type: "tel" },
            { name: "postcode", placeholder: "Enter your postcode", label: "Postcode", type: "text" },
          ].map(({ name, placeholder, label, type }) => (
            <label
              key={name}
              className="flex flex-col text-green-800 font-semibold min-w-[140px] flex-1"
            >
              {label}
              <input
                type={type}
                name={name}
                required
                placeholder={placeholder}
                className="mt-1 px-4 py-3 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
            </label>
          ))}
        </div>

        <label className="flex items-start gap-3 text-green-800 font-semibold w-full">
          <input
            type="checkbox"
            required
            className="mt-1 w-5 h-5 rounded border-green-300 focus:ring-2 focus:ring-green-400"
          />
          <span>
            By ticking this box, I provide my express consent for a
           Energy Saver representative to contact me to review my
            electricity and/or gas bills and negotiate a supply and sale
            contract.
          </span>
        </label>

        <button
          type="submit"
          className="bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300 font-semibold shadow-md w-full sm:w-auto px-12"
        >
          Register
        </button>
      </form>
    </motion.div>
  </div>
</section>



{/* Benefits Section */}
<section className="max-w-7xl mx-auto mt-24 px-6 sm:px-12 lg:px-24 ">
  <h2 className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-16 text-center tracking-tight leading-tight">
    Benefits You Can Enjoy
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {features.map(({ icon, title, description }, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: idx * 0.2 }}
        tabIndex={0}
        className="bg-green-50 border border-green-100 rounded-3xl p-8 shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label={title}
      >
        <div className="mb-5 text-green-600 text-5xl">{icon}</div>

        <h3 className="text-2xl font-bold text-green-800 mb-3 leading-snug tracking-wide">
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
    {/* Heading & Description */}
    <div className="space-y-4 max-w-3xl">
      <h2 className="text-4xl font-extrabold text-green-600">
        What Our Customers Say
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        We've helped thousands of Australians make smarter decisions with
        their money. Whether it's choosing the best energy plan, internet
        provider, or health insurance — our customers love how simple and
        effective our service is. Take a look at their stories below.
      </p>
    </div>

    {/* Scroll container only — no buttons */}
    <div
      className="overflow-x-auto pb-4 modern-scrollbar scroll-smooth scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200"
      tabIndex={0}
    >
      <div className="flex gap-6 min-w-full">
        {[
          {
            name: "Marsh",
            title: "“Got the best health plan in minutes!”",
            image: "/marsh.jpg",
          },
          {
            name: "Nicole",
            title: "“Easy to compare, easier to save!”",
            image: "/nicole.jpg",
          },
          {
            name: "Jason",
            title: "“Switched energy plans and saved big.”",
            image: "/jason.jpg",
          },
          {
            name: "Sophie",
            title: "“Quick, clear, and totally stress-free.”",
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



{/* FAQ Section */}
<section className="w-full bg-yellow-100 text-Green py-20 px-4 sm:px-8 lg:px-16 xl:px-24 mt-24 rounded-t-[2.5rem]">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
    
    {/* Left Image */}
    <div className="flex justify-center md:justify-end mt-8 md:mt-15">
      <img
        src="/faq.jpg"
        alt="FAQ"
        className="w-full max-w-[500px] h-auto object-cover rounded-3xl shadow-2xl border-4 border-pink-300"
      />
    </div>

    {/* Right Side: Heading + Button + FAQs */}
    <div className="flex flex-col justify-center space-y-10 max-w-[550px] w-full">
      
      {/* Heading & CTA Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
          Frequently Asked Questions – <span className="text-pink-600">FAQ</span>
        </h2>

        <button
          className="bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:from-pink-600 hover:to-pink-800 text-white px-6 py-3 rounded-full font-semibold shadow-md focus:outline-none focus:ring-4 focus:ring-pink-300 transition"
        >
          View All FAQs
        </button>
      </div>

      {/* Accordion List */}
      <div className="space-y-6">
        {[
          {
            question: "Which energy providers are available in Australia?",
            answer: `In deregulated markets in Australia, many energy retailers are authorised to offer electricity, gas, or both. As of November 2024, authorised retailers include: 1st Energy, ActewAGL, AGL, Alinta Energy, Amber Electric, Origin Energy, Red Energy, Powershop, and many more. Not all plans are available everywhere, and iSelect doesn’t compare every provider or plan.`
          },
          {
            question: "How do I switch energy providers?",
            answer: `Start by reviewing your current plan and needs. Use a recent bill to compare new plans. Once you've chosen one, let iSelect know, and they'll manage the switch, including notifying your old provider. Switching can be seamless, especially if you’re not changing addresses.`
          },
          {
            question: "What’s the best energy plan?",
            answer: `There’s no single “best” plan—it depends on your needs. Consider household size, smart meter usage, solar panels, or bundling options. The best plan is the one that offers you the most value for your lifestyle and energy habits.`
          },
         
          {
            question: "Why have electricity prices gone up?",
            answer: `Due to global crises (e.g. war in Ukraine), coal plant aging, and high demand, wholesale energy prices spiked. While prices have eased slightly, factors like the renewable transition and extreme weather still affect bills. Comparing and switching providers may help you save.`
          },
          {
            question: "How do I save money on my energy bill?",
            answer: `Try energy-saving tips: switch to LED bulbs, adjust heating/cooling settings, close curtains, upgrade your hot water system, or install solar panels. Also, compare plans to find a better-value deal.`
          },

    
        ].map((faq, index) => (
          <details
            key={index}
            className="group border border-pink-300 rounded-xl bg-white shadow-sm hover:shadow-md transition duration-300"
          >
            <summary className="flex justify-between items-center cursor-pointer px-6 py-4 text-base sm:text-lg font-semibold text-gray-900">
              {faq.question}
              <svg
                className="w-6 h-6 text-pink-600 transition-transform duration-300 group-open:rotate-45"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </summary>
            <div className="px-6 pb-4 text-gray-700 text-sm sm:text-base whitespace-pre-line">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  </div>
</section>







<section className="w-full bg-gray-50 mt-24 py-12 px-4 sm:px-8 lg:px-16 xl:px-24 overflow-hidden">
  <div className="max-w-7xl mx-auto text-center space-y-6">
    <h2 className="text-3xl font-extrabold text-gray-800">Our Range of Providers</h2>
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
