import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Expert Profiles Data
const experts = [
  {
    name: "Harsh",
    role: "Comparison Expert – Health",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Nicole",
    role: "Comparison Expert – Health",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Jason",
    role: "Comparison Expert – Health",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
  },
];

// Improved Expert Section with proper margin, alignment and spacing
function ExpertSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((old) => (old === 0 ? experts.length - 1 : old - 1));
  const next = () => setCurrent((old) => (old === experts.length - 1 ? 0 : old + 1));

  return (
    <section
      aria-label="Expert comparison team section"
      className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-16"
    >
      {/* Left Text Content */}
      <div className="md:w-1/3 max-w-md md:max-w-none text-center md:text-left">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-orange-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-6 tracking-tight select-none">
          Use Our Skills for Cheaper Bills
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg md:text-base">
          We’re pioneers of the Australian comparison industry, with over 25 years of
          experience. Our deep knowledge means we’re well versed in comparison,
          so you don’t have to be. Whether online or over the phone, we help you
          save time and money on complex purchasing decisions.
        </p>
      </div>

      {/* Right Slider */}
      <div className="md:w-2/3 relative max-w-lg w-full flex flex-col items-center">
        <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-200 relative cursor-pointer select-none w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={experts[current].name}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative"
              tabIndex={0}
              aria-label={`Expert profile: ${experts[current].name}, ${experts[current].role}`}
            >
              <motion.img
                src={experts[current].img}
                alt={`Portrait of ${experts[current].name}`}
                className="w-full h-96 object-cover rounded-3xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 bg-gradient-to-tr from-black/90 via-black/70 to-transparent p-5 rounded-2xl max-w-xs backdrop-blur-sm shadow-lg">
                <h3 className="text-white text-3xl font-semibold">{experts[current].name}</h3>
                <p className="text-gray-300 text-sm mt-1">{experts[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 px-6 max-w-md w-full select-none">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous Expert"
            className="bg-orange-600 hover:bg-orange-700 focus-visible:ring-4 focus-visible:ring-orange-300 text-white rounded-full p-3 shadow-lg transition-transform active:scale-95 focus:outline-none"
          >
            &#8592;
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next Expert"
            className="bg-orange-600 hover:bg-orange-700 focus-visible:ring-4 focus-visible:ring-orange-300 text-white rounded-full p-3 shadow-lg transition-transform active:scale-95 focus:outline-none"
          >
            &#8594;
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 h-3 bg-gray-300 rounded-full w-full max-w-md shadow-inner" aria-hidden="true">
          <motion.div
            className="h-3 rounded-full bg-gradient-to-r from-orange-500 via-yellow-400 to-yellow-300 shadow-lg"
            style={{ width: `${((current + 1) / experts.length) * 100}%` }}
            layout
            transition={{ type: "spring", stiffness: 120, damping: 25 }}
          />
        </div>
      </div>
    </section>
  );
}

// Intro Section
function Intro() {
  return (
    <section
      className="bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-300 text-gray-900 py-20 px-6 text-center"
      aria-label="Introduction"
    >
      <h1 className="text-5xl font-extrabold mb-4 select-none">Welcome to EnergySave Australia</h1>
      <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
        Helping Australians save money on their energy bills with trusted comparisons,
        expert advice, and up-to-date market insights.
      </p>
    </section>
  );
}

// Features Section
function Features() {
  const features = [
    {
      title: "Expert Knowledge",
      desc: "25+ years of experience in the Australian energy market.",
    },
    {
      title: "Save Money",
      desc: "Find cheaper energy deals tailored to your needs quickly.",
    },
    {
      title: "Trusted Service",
      desc: "Reliable comparisons and friendly customer support.",
    },
  ];

  return (
    <section
      className="max-w-7xl mx-auto px-6 py-16"
      aria-label="Features of our company"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-orange-600 select-none">Why Choose Us?</h2>
      <div className="grid md:grid-cols-3 gap-10 text-center">
        {features.map(({ title, desc }, idx) => (
          <article
            key={idx}
            className="p-6 bg-white shadow-lg rounded-xl border border-gray-200 hover:shadow-2xl transition"
            tabIndex={0}
            aria-label={`${title}: ${desc}`}
          >
            <h3 className="text-2xl font-semibold mb-3 text-yellow-600">{title}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

// Feedback Section
function Feedback() {
  const feedbacks = [
    {
      quote: "EnergySave helped me cut my energy bill by 30%! The experts are very knowledgeable and easy to talk to.",
      author: "Sarah L., Sydney",
    },
    {
      quote: "Their comparison tools are easy to use and really helped me understand my options.",
      author: "David K., Melbourne",
    },
    {
      quote: "Fast, friendly, and reliable service every time.",
      author: "Priya S., Brisbane",
    },
  ];

  return (
    <section
      className="bg-orange-50 py-16 px-6"
      aria-label="User feedback and testimonials"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-orange-600 select-none">What Our Users Say</h2>
      <div className="max-w-5xl mx-auto space-y-8">
        {feedbacks.map(({ quote, author }, idx) => (
          <blockquote
            key={idx}
            className="p-6 bg-white rounded-xl shadow-md border-l-4 border-yellow-400 italic text-gray-700"
            tabIndex={0}
          >
            “{quote}”
            <footer className="mt-4 font-semibold">{author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

// Reviews Section - Horizontal scroll testimonials
function Reviews() {
  const reviews = [
    {
      name: "Alice W.",
      text: "Amazing service and helped me save a lot on my bills.",
      location: "Perth",
    },
    {
      name: "John M.",
      text: "I trust their advice, and their team is always friendly.",
      location: "Adelaide",
    },
    {
      name: "Emma T.",
      text: "Highly recommend EnergySave for anyone looking to reduce costs.",
      location: "Canberra",
    },
  ];

  return (
    <section
      className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg"
      aria-label="Customer reviews"
    >
      <h2 className="text-4xl font-bold mb-10 text-center text-orange-700 select-none">Customer Reviews</h2>
      <div className="flex overflow-x-auto space-x-8 py-4" tabIndex={0} aria-live="polite">
        {reviews.map(({ name, text, location }, idx) => (
          <article
            key={idx}
            className="min-w-[280px] bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between"
            aria-label={`Review by ${name} from ${location}`}
          >
            <p className="text-gray-800 italic mb-4">“{text}”</p>
            <div className="font-semibold text-orange-600">{name}</div>
            <div className="text-sm text-gray-500">{location}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

// News Section with Australian news logos and price increase image
function NewsSection() {
  const newsChannels = [
    {
      name: "ABC News",
      url: "https://www.abc.net.au/news",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/ABC_News_logo.svg/1200px-ABC_News_logo.svg.png",
    },
    {
      name: "SBS News",
      url: "https://www.sbs.com.au/news",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/SBS_logo_2018.svg/1200px-SBS_logo_2018.svg.png",
    },
    {
      name: "7News Australia",
      url: "https://7news.com.au",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/58/Seven_Network_logo.svg",
    },
  ];

  return (
    <section
      className="max-w-7xl mx-auto px-6 py-16"
      aria-label="Australian news channels and recent news"
    >
      <h2 className="text-4xl font-bold mb-8 text-center text-orange-700 select-none">Australian News Channels</h2>
      <div className="flex justify-center gap-12 mb-10 flex-wrap" role="list">
        {newsChannels.map(({ name, url, logo }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            aria-label={`Visit ${name}`}
            role="listitem"
          >
            <img src={logo} alt={`${name} logo`} className="h-20 object-contain" loading="lazy" />
          </a>
        ))}
      </div>
      <figure className="max-w-xl mx-auto">
        <img
          src="https://www.abc.net.au/news/image/13003820-16x9-700x394.jpg"
          alt="Australian energy price increase news"
          className="rounded-xl shadow-lg w-full"
          loading="lazy"
        />
        <figcaption className="text-center mt-4 text-gray-700 italic">
          Latest news highlighting the recent energy price increases in Australia.
        </figcaption>
      </figure>
    </section>
  );
}

// Main HomePage Component
export default function HomePage() {
  return (
    <main className="bg-yellow-50 min-h-screen text-gray-900 selection:bg-yellow-400 selection:text-white">
      <Intro />
      <Features />
      <Feedback />
      <Reviews />
      <ExpertSection />
      <NewsSection />
      <footer className="bg-orange-600 text-white text-center py-8 mt-20 select-none">
        <p>© 2025 EnergySave Australia. All rights reserved.</p>
      </footer>
    </main>
  );
}
