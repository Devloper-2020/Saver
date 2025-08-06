import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiDollarSign, FiCheckCircle, FiRefreshCcw } from "react-icons/fi";
import { FaBolt, FaFireAlt, FaWifi, FaSolarPanel, FaBatteryFull } from 'react-icons/fa';
import { FaNewspaper, FaTv, FaBroadcastTower, FaGlobeAsia } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";


const slides = [
  {
    img: "/slide3.jpg",
    caption:
      "Helping Aussies for over several years with expert advice and unbeatable support. Trusted by several households across the country to find better energy and broadband deals.",
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
      <span className="text-green-600">Save Time & Money with the Better Deal</span>
    </h1>
    <p className="mt-6 text-lg text-Black font-medium text-left">
  For over <span className=" decoration-white-700">several years</span>, we've been helping Aussies make informed decisions. 
  Find the better deals quickly and easily join over 500,000 people who’ve already made the switch.Our mission is to save your time and money  by finding better offer from several retailer for <span className="font-extrabold text-green-600">free .</span> 
   
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

<div className="w-full my-8 px-4 md:px-0 bg-[#032D4D] text-white relative overflow-hidden">
  {/* 🔁 Smooth Infinite Marquee */}
  {/* 🔁 Smooth Infinite Marquee */}
  <div className="py-4 relative">
    <div className="flex gap-12 animate-marquee whitespace-nowrap">
      {[
        "Electricity", "Gas", "Broadband", "Water", "Solar Battery", "Home Energy Plans", "Business Solutions",
        "Electricity", "Gas", "Broadband", "Water", "Solar Battery", "Home Energy Plans", "Business Solutions", // duplicate
      ].map((item, index) => (
        <span
          key={index}
          className="px-6 py-2 bg-white text-[#032D4D] text-base md:text-xl font-bold uppercase rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          {item}
        </span>
      ))}
    </div>
  </div>





  {/* 👇 SCAM WARNING */}
  <div className="py-8">
    <h1 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wider text-center">
      Beware of Scams
    </h1>
    <p className="mt-4 text-center text-base md:text-lg leading-relaxed">
      Scam callers are falsely claiming to be from Utility Saver, asking customers to download unknown software or share banking information.
      <span className="text-green-400 font-semibold"> Utility Saver will never ask you to do this. </span>
       If you receive such a call, please report it immediately by calling us at{" "}
      <a href="tel:0800123456" className="text-green-300 font-semibold underline">0415 644 653</a>.
    </p>
  </div>

  {/* 👇 Free Comparison Heading */}
  <div className="text-center">
    <h2 className="text-3xl font-bold text-white">
      Get Your Free Comparison
    </h2>
  </div>

  <br />

  
    {/* 📝 Form + Text Side-by-Side */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 px-4 sm:px-8 lg:px-16">

      {/* 🧾 Form */}
      <div>
   

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: "name", placeholder: "Full Name", type: "text" },
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

          <label className="flex items-start gap-3 text-sm leading-snug">
            <input
              type="checkbox"
              required
              className="mt-1 w-5 h-5 border-[#B3C3D2] rounded focus:ring-2 focus:ring-[#032D4D]"
            />
            By ticking this box, I provide my express consent for a Utility Saver representative to contact me to review my electricity and gas bills and negotiate a supply and sale contract.
          </label>

          <button
            type="submit"
            className="bg-sky-600 hover:bg-sky-700 text-white w-full py-4 rounded-md transition font-semibold text-lg shadow-sm"
          >
            Register Now
          </button>
        </form>
      </div>

      {/* 📢 Text Section */}
      {/* 📢 Text Section */}
<div className="text-white text-lg leading-relaxed space-y-4 text-justify">
  <h3 className="text-3xl md:text-4xl font-semibold mb-4 text-white text-left">
    When did you last compare your utility providers?
  </h3>
  <p>
    Many people know that switching providers can lead to significant savings, yet most never get around to it.
  </p>
  <p>
    With the cost of living constantly rising, now is the ideal time to see how much you could save by making a switch.
  </p>
  <p className=" text-2xl  font-semibold mb-4 text-justify text-green-300">
    And the best part is It’s completely free!
  </p>
</div>

    </div>

  </div>

  <br />

<section className="bg-gradient-to-b from-white via-blue-50 to-white py-20 px-6 md:px-24">
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
      Plan a Switch or New Connection<br />
      with <span className="text-blue-900 font-bold">Utility Saver</span>
    </h2>
  </div>

  {/* Premium State Cards with Descriptions */}
<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 px-4">
  {[
    {
      name: "Victoria",
      bg: "from-blue-100 to-blue-200",
      textColor: "text-blue-800",
      iconColor: "text-blue-600",
     
    },
    {
      name: "New South Wales",
      bg: "from-green-100 to-green-200",
      textColor: "text-green-800",
      iconColor: "text-green-600",
     
    },
    {
      name: "South Australia",
      bg: "from-indigo-100 to-indigo-200",
      textColor: "text-indigo-800",
      iconColor: "text-indigo-600",
      
    },
    {
      name: "Queensland",
      bg: "from-emerald-100 to-emerald-200",
      textColor: "text-emerald-800",
      iconColor: "text-emerald-600",
    
    },
  ].map((state, index) => (
    <div
      key={index}
      className={`rounded-3xl p-6 bg-gradient-to-br ${state.bg} shadow-md hover:shadow-2xl border border-gray-200 hover:scale-[1.03] transition-all duration-300 cursor-pointer`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-3 bg-white rounded-full shadow ${state.iconColor}`}>
          <FaMapMarkerAlt className={`text-2xl ${state.iconColor}`} />
        </div>
        <h3 className={`text-xl font-bold ${state.textColor}`}>{state.name}</h3>
      </div>
      <p className="text-gray-700 text-base leading-relaxed">{state.description}</p>
    </div>
  ))}
</div>


  
   <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16">
  We also help connect your premises to other essential services:
</h3>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
  {[
    {
      name: "Electricity",
      icon: <FaBolt className="text-white text-3xl" />,
      desc: "Power up instantly",
      bg: "bg-gradient-to-br from-blue-500 to-blue-700",
      border: "border-blue-300 hover:border-blue-500",
    },
    {
      name: "Gas",
      icon: <FaFireAlt className="text-white text-3xl" />,
      desc: "Heating made simple",
      bg: "bg-gradient-to-br from-green-500 to-green-700",
      border: "border-green-300 hover:border-green-500",
    },
    {
      name: "Broadband",
      icon: <FaWifi className="text-white text-3xl" />,
      desc: "Stay connected",
      bg: "bg-gradient-to-br from-indigo-500 to-indigo-700",
      border: "border-indigo-300 hover:border-indigo-500",
    },
    {
      name: "Solar",
      icon: <FaSolarPanel className="text-white text-3xl" />,
      desc: "Go green, save more",
      bg: "bg-gradient-to-br from-yellow-400 to-green-600",
      border: "border-yellow-300 hover:border-yellow-500",
    },
    {
      name: "Battery",
      icon: <FaBatteryFull className="text-white text-3xl" />,
      desc: "Store your energy",
      bg: "bg-gradient-to-br from-blue-600 to-blue-900",
      border: "border-blue-400 hover:border-blue-600",
    },
  ].map((service, index) => (
    <div
      key={index}
      className={`flex flex-col items-center text-center bg-white shadow-lg hover:shadow-2xl px-6 py-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 group border ${service.border}`}
    >
      <div
        className={`rounded-full p-5 shadow-md ${service.bg} transition-transform duration-300 group-hover:scale-110`}
      >
        {service.icon}
      </div>
      <span className="text-gray-800 font-bold text-lg mt-4">{service.name}</span>
      <span className="text-gray-500 text-sm mt-1">{service.desc}</span>
    </div>
 


      ))}

  </div>
</section>

{/* Benefits Section */}
<section className="w-full my-8 px-4 mx-auto py-20 lg:py-28 bg-[#032D4D] text-white relative overflow-hidden rounded-t-[2.5rem] sm:px-12 lg:px-24">

  <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-md mb-16">
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
        className="bg-[#E6EDF3] border border-[#C5D3E0] rounded-3xl p-8 min-h-[360px] flex flex-col justify-between shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#A5C4DB]"
        aria-label={title}
      >
        <div className="space-y-5">
          <div className="text-[#032D4D] text-5xl">{icon}</div>
          <h3 className="text-2xl font-bold text-[#032D4D] leading-snug tracking-wide">
            {title}
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            {description}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</section>


<section className="w-full bg-gradient-to-b from-white via-blue-50 to-white py-24 px-4 sm:px-8 lg:px-16 xl:px-24">
  <div className="max-w-7xl mx-auto space-y-20">
    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto space-y-5">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#032D4D] drop-shadow-lg tracking-tight">
        What Our Customers Say
      </h2>
      <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
        Trusted by thousands across Australia  from energy to broadband. Hear from real users who made the smart switch.
      </p>
    </div>

    {/* Auto-scrolling Testimonials */}
    <div
      className="overflow-x-auto no-scrollbar scroll-smooth"
      tabIndex={0}
      ref={(el) => {
        if (!el) return;
        const scrollContainer = el;
        let interval;

        const startScroll = () => {
          interval = setInterval(() => {
            if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
              scrollContainer.scrollLeft = 0;
            } else {
              scrollContainer.scrollLeft += 1;
            }
          }, 30);
        };

        const stopScroll = () => clearInterval(interval);

        scrollContainer.addEventListener("mouseenter", stopScroll);
        scrollContainer.addEventListener("mouseleave", startScroll);

        startScroll();
      }}
    >
      <div className="flex gap-8 min-w-full px-2 w-max">
        {[...Array(2)].flatMap(() => [
          {
            name: "Marsh",
            title: "Got the best health plan in minutes. Absolutely seamless!",
          },
          {
            name: "Nicole",
            title: "Easy to compare, even easier to save. Love the experience!",
          },
          {
            name: "Jason",
            title: "Switched energy plans and saved hundreds. Highly recommended!",
          },
          {
            name: "Sophie",
            title: "Quick, clear, and totally stress-free. A++ service!",
          },
        ]).map(({ name, title }, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-white bg-opacity-60 backdrop-blur-md border border-blue-100 shadow-lg rounded-3xl p-6 sm:p-8 min-w-[280px] sm:min-w-[320px] md:min-w-[360px] hover:scale-[1.035] hover:shadow-blue-200 transition-all duration-300 ease-in-out"
          >
            <div className="flex flex-col h-full justify-between space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-[#032D4D] font-bold flex items-center justify-center text-xl shadow-inner">
                  {name[0]}
                </div>
                <h3 className="text-lg font-semibold text-[#032D4D]">
                  {name}
                </h3>
              </div>
              <p className="text-gray-800 text-base leading-relaxed italic">
                “{title}”
              </p>
              <div className="text-right text-yellow-500 text-sm">
                ★★★★★
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Hide scrollbar completely */}
  <style jsx>{`
    .no-scrollbar {
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    .no-scrollbar::-webkit-scrollbar {
      display: none;
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
          answer: `In Australia, you have a variety of energy companies to choose from, including both large established providers and smaller, more specialized retailers.`,
        },
        {
          question: "What’s the process to change my energy provider?",
          answer: `Switching energy providers is a straightforward process. Your new supplier will handle most of the logistics, including notifying your old provider and taking meter readings. You don't need to contact your old supplier directly or worry about your service being interrupted. `,
        },
        {
          question: "How do I find the right energy plan?",
          answer: `To find the right energy plan, understand your usage, compare rates, and consider contract terms. Start by analyzing your past energy bills to understand your average monthly usage. Then, compare rates from different providers .`,
        },
        {
          question: "Why are energy prices increasing?",
          answer: `Energy prices in Australia are increasing due to a combination of factors, including high global energy prices, increased demand due to extreme weather, aging infrastructure, and network costs. `,
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
          { name: "", logo: "/" },
          { name: "", logo: "/" },
          { name: "", logo: "/" },
          { name: "", logo: "/" },
    
        ]
          // Duplicate array to create infinite scroll illusion
          .concat([
            { name: "", logo: "/" },
            { name: "", logo: "/" },
            { name: "", logo: "/" },
            { name: "", logo: "/" },
          
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
