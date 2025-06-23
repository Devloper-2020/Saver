import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiPhone,
  FiMail,
  FiClock,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const email = "contact@energysaver.com";
  const phone = "+1-800-123-4567";
  const timings = "Mon - Fri: 9:00 AM - 6:00 PM";

  const socialLinks = [
    {
      icon: <FiFacebook />,
      href: "https://facebook.com/energysaver",
      label: "Facebook",
    },
    {
      icon: <FiTwitter />,
      href: "https://twitter.com/energysaver",
      label: "Twitter",
    },
    {
      icon: <FiInstagram />,
      href: "https://instagram.com/energysaver",
      label: "Instagram",
    },
    {
      icon: <FiLinkedin />,
      href: "https://linkedin.com/company/energysaver",
      label: "LinkedIn",
    },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-blue-50 border-b border-blue-200 text-blue-700 text-xs sm:text-sm px-3 sm:px-4 py-1">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-1 hover:text-blue-900 transition"
            >
              <FiMail className="text-blue-500" />
              {email}
            </a>
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-1 hover:text-blue-900 transition"
            >
              <FiPhone className="text-blue-500" />
              {phone}
            </a>
            <span className="flex items-center gap-1">
              <FiClock className="text-blue-500" />
              {timings}
            </span>
          </div>

          <div className="flex gap-4 text-base sm:text-lg">
            {socialLinks.map(({ icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-blue-600 hover:text-blue-900 transition"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg font-outfit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a
            href="/"
            className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 select-none"
          >
            Utilty Saver<span className="text-blue-500">⚡</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 text-gray-900 font-medium text-lg items-center">
            <li className="relative group cursor-pointer">
              <a href="/" className="hover:text-blue-600 transition">
                Home
              </a>
            </li>
            <li className="relative group cursor-pointer">
              <a href="/about" className="hover:text-blue-600 transition">
                About Us
              </a>
            </li>

            {/* Energy Solutions Dropdown */}
            <li
              className="relative group cursor-pointer"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span className="hover:text-blue-600 transition cursor-pointer select-none">
                Energy Solutions ▾
              </span>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-8 left-0 bg-white shadow-xl rounded-xl w-64 p-4 space-y-2 z-50"
                  >
                    <li>
                      <a
                        href="/solutions/home"
                        className="hover:text-blue-500 text-sm block px-2 py-1 rounded-md"
                      >
                        Home Energy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/solutions/business"
                        className="hover:text-blue-500 text-sm block px-2 py-1 rounded-md"
                      >
                        Business Energy
                      </a>
                    </li>
                   
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li className="relative group cursor-pointer">
              <a href="/compare" className="hover:text-blue-600 transition">
                Compare & Save
              </a>
            </li>
           
            <li className="relative group cursor-pointer">
              <a href="/contact" className="hover:text-blue-600 transition">
                Contact Us
              </a>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <div className="md:hidden text-2xl text-gray-800">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white shadow-inner px-6 pt-4 pb-6"
            >
              <ul className="space-y-4 text-gray-800 font-medium text-base">
                <li>
                  <a href="/" className="hover:text-blue-600 block py-2">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-blue-600 block py-2">
                    About Us
                  </a>
                </li>

                <details className="group">
                  <summary className="hover:text-blue-600 cursor-pointer py-2 select-none">
                    Energy Solutions
                  </summary>
                  <ul className="ml-4 mt-2 space-y-2 text-sm text-gray-600">
                    <li>
                      <a href="/solutions/home" className="hover:text-blue-500 block py-1 rounded">
                        Home Energy
                      </a>
                    </li>
                    <li>
                      <a href="/solutions/business" className="hover:text-blue-500 block py-1 rounded">
                        Business Energy
                      </a>
                    </li>
                    <li>
                      <a href="/solutions/commercial" className="hover:text-blue-500 block py-1 rounded">
                        Commercial & Industrial
                      </a>
                    </li>
                    <li>
                      <a href="/solutions/solar" className="hover:text-blue-500 block py-1 rounded">
                        Solar & Battery
                      </a>
                    </li>
                  </ul>
                </details>

                <li>
                  <a href="/compare" className="hover:text-blue-600 block py-2">
                    Compare & Save
                  </a>
                </li>
                <li>
                  <a href="/connect" className="hover:text-blue-600 block py-2">
                    Get Connected
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-blue-600 block py-2">
                    Contact Us
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
