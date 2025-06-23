import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const lightGreenGradient =
  "text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-500 via-emerald-400 to-teal-400 bg-clip-text text-transparent";

const greyGradient =
  "text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-clip-text text-transparent";

export default function AboutUs() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white font-sans leading-relaxed">
      
      {/* HERO SECTION */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="text-center py-20 px-4 bg-white dark:bg-gray-900"
      >
        <h1 className={`${lightGreenGradient} text-4xl md:text-5xl`}>
          Discover Utility Saver
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Your go-to platform to compare energy plans, reduce bills, and make smarter utility choices—quickly and affordably.
        </p>
      </motion.section>

      {/* WHY US */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="py-16 px-6 md:px-20 bg-yellow-100 dark:bg-green-900"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className={greyGradient}>Why People Choose Us</h2>
            <p className="mb-4">
              With over 20 years of experience, we’ve made it simple to find the most affordable and reliable energy plans—stress-free and at zero cost.
            </p>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Free, no-obligation service</li>
              <li>20+ years of trusted experience</li>
              <li>Solutions for homes & businesses</li>
              <li>Fast, friendly support</li>
            </ul>
          </div>
          <div>
            <img
              src="/img 1.jpg"
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
        className="py-16 px-6 md:px-20 bg-slate-100 dark:bg-gray-800"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/img 2.jpg"
              alt="Utility comparison platform interface"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className={lightGreenGradient}>What We Bring to the Table</h2>
            <p className="mb-4">
              We research, compare, and recommend the most cost-effective electricity and gas plans in real time—so you don’t have to.
            </p>
            <p>
              Our recommendations are based on transparency, customer service ratings, and overall value—only the best make the cut.
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
        className="py-16 px-6 md:px-20 bg-yellow-100 dark:bg-green-900"
      >
        <h2 className={`${greyGradient} text-center`}>Our Promise to You</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center mt-10">
          {[
            {
              title: "Lower Your Bills",
              desc: "Discover plans that match your lifestyle and save you money.",
            },
            {
              title: "Real-Time Deals",
              desc: "Stay updated with the best offers as soon as they go live.",
            },
            {
              title: "Easy Setup & Support",
              desc: "We take care of the switch or connection so you don't have to.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>


      {/* CTA SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="text-center py-20 px-4 bg-yellow-100 dark:bg-green-900"
      >
        <h2 className={`${greyGradient} mb-4`}>
          Let’s Get You Saving!
        </h2>
        <p className="text-lg mb-6">
          Compare plans instantly and start saving today. Thousands already trust Utility Saver—join them now!
        </p>
     <a
  href="/compare#compare-form"
  className="bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition-all"
>
  Compare Now
</a>

      </motion.section>
    </div>
  );
}
