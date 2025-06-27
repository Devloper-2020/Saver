import { motion } from "framer-motion";
import {
  ShieldCheck,
  Target,
  Star,
  Lightbulb,
  Users,
} from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const lightGreenGradient =
  "text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-500 via-emerald-400 to-teal-400 bg-clip-text text-transparent";

const greyGradient =
  "text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-clip-text text-transparent";


  const values = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Integrity",
    description:
      "We conduct every interaction with honesty, transparency, and the highest ethical standards building trust with our clients and partners.",
  },
  {
    icon: <Target className="w-8 h-8 text-blue-600" />,
    title: "Customer First",
    description:
      "We prioritize our clients' goals, working collaboratively to understand their needs and craft tailored solutions that drive measurable value.",
  },
  {
    icon: <Star className="w-8 h-8 text-blue-600" />,
    title: "Quality Excellence",
    description:
      "We deliver reliable, high quality outsourcing services designed to exceed expectations and foster long term success.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
    title: "Innovation",
    description:
      "We embrace emerging technologies and continuously improve our processes to stay ahead in an ever evolving business landscape.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Teamwork",
    description:
      "We believe in the strength of collaboration working together to achieve shared goals and deliver exceptional client experiences.",
  },
];
export default function AboutUs() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white font-sans leading-relaxed">

      {/* HERO SECTION */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="text-center py-20 px-4 bg-white dark:bg-gray-900 text-black dark:text-white"
      >
        <h1 className="text-black dark:text-white text-4xl md:text-5xl font-bold">
          Discover Utility Saver
        </h1>
        <br />
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Your go-to platform to compare energy plans, reduce bills, and make smarter utility choices quickly and affordably.
        </p>
      </motion.section>

      {/* WHY US */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="py-16 px-6 md:px-20 bg-[#032D4D] text-white"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-white text-4xl md:text-5xl font-bold">
              Why People Choose Us
            </h1>
            <br />
            <p className="mb-4">
              With over 20 years of experience, we’ve made it simple to find the most affordable and reliable energy plans, stress free and at zero cost.
            </p>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Free, no obligation service</li>
              <li>20+ years of trusted experience</li>
              <li>Solutions for homes & businesses</li>
              <li>Fast, friendly support</li>
            </ul>
          </div>
          <div>
            <img
              src="/image6.jpg"
              alt="Expert team comparing energy plans"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* WHAT WE DO */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="py-16 px-6 md:px-20 bg-slate-100 dark:bg-gray-800 text-black dark:text-white"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/image5.jpg"
              alt="Utility comparison platform interface"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h1 className="text-black dark:text-white text-4xl md:text-5xl font-bold">
              What We Bring to the Table
            </h1>
            <br />
            <p className="mb-4">
              We research, compare, and recommend the most cost-effective electricity and gas plans in real time so you don’t have to.
            </p>
            <p>
              Our recommendations are based on transparency, customer service ratings, and overall value only the best make the cut.
            </p>
          </div>
        </div>
      </motion.section>

    {/* OUR PROMISE */}
<motion.section
  initial="hidden"
  whileInView="visible"
  variants={sectionVariants}
  viewport={{ once: true }}
  className="py-20 px-6 md:px-20 bg-[#032D4D] text-white"
>
  <h1 className="text-center text-white text-4xl md:text-5xl font-bold">
    Our Promise to You
  </h1>
  <p className="text-center text-lg mt-4 text-gray-200 max-w-3xl mx-auto">
    We’re committed to making your experience smooth, affordable, and stress-free.
  </p>

  <div className="grid md:grid-cols-3 gap-10 mt-16">
    {[
      {
        title: "Lower Your Bills",
        desc: "Discover plans that match your lifestyle and save you money.",
        image: "/i1.png",
      },
      {
        title: "Real-Time Deals",
        desc: "Stay updated with the best offers as soon as they go live.",
        image: "/i2.png",
      },
      {
        title: "Easy Setup & Support",
        desc: "We take care of the switch or connection so you don't have to.",
        image: "/i3.png",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="group bg-white dark:bg-gray-700 text-black dark:text-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 text-center"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-20 h-20 mx-auto mb-6 transition-transform group-hover:scale-110"
        />
        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
      </div>
    ))}
  </div>
</motion.section>



<section className="bg-white text-black py-16 px-4">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-4 transition-all duration-500 hover:text-blue-600">
      What Drives Us Forward
    </h2>
    <p className="text-lg text-black mb-12 transition-opacity duration-500 hover:opacity-80">
      Our Core Principles That Shape Excellence at Utility Saver
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {values.map((item, index) => (
        <div
          key={index}
          className="bg-white text-slate-900 p-6 rounded-2xl border border-transparent shadow-md hover:border-[#032D4D] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]"
        >
          <div className="mb-4 text-blue-600 transition-colors duration-300">
            {item.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-sm text-slate-700 transition-opacity duration-300">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* CTA SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="text-center py-20 px-4 bg-white text-black"
      >
        <h1 className="text-black text-4xl md:text-5xl font-bold">
          Let’s Get You Saving!
        </h1>
        <br />
        <p className="text-lg mb-6">
          Compare plans instantly and start saving today. Thousands already trust
          Utility Saver join them now!
        </p>
        <a
          href="/compare#compare-form"
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-all"
        >
          Compare Now
        </a>
      </motion.section>
    </div>


  );
}
