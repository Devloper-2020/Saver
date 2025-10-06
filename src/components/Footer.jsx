import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#032D4D] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-5 tracking-wide">Utility Savers</h2>
          <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
            A truly independent Utility bills comparison and connection platform focused on saving money for Australian families.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 tracking-wide">Useful Links</h2>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>
              <a href="/" className="hover:text-blue-600 transition">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-600 transition">About Us</a>
            </li>
            <li>
              <a href="/compare" className="hover:text-blue-600 transition">Compare & Save</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-600 transition">Contact Us</a>
            </li>
          </ul>
        </div>

       {/* Contact Info */}
<div>
  <h2 className="text-xl font-semibold mb-4 tracking-wide">Contact</h2>

  {/* Email */}
  <div className="flex items-center text-gray-300 text-sm mb-2 space-x-2">
    <FiMail className="text-lg" />
    <a
      href="mailto:"
      className="hover:text-white transition underline"
    >
 
    </a>
  </div>

  {/* Phone */}
  <div className="flex items-center text-gray-300 text-sm mb-2 space-x-2">
    <FiPhone className="text-lg" />
    <a
      href="tel:"
      className="hover:text-white transition underline"
    >
     
    </a>
  </div>

  {/* Address */}
  <div className="flex items-center text-gray-300 text-sm mb-2 space-x-2">
    <FiMapPin className="text-lg" />
    <a
      href="https://www.google.com/maps?q=U+32+20-22+GEORGE+ST,+LIVERPOOL+NSW+2170"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition underline"
    >
     
    </a>
  </div>

  {/* ABN */}
  <div className="text-gray-300 text-sm mb-2">
    <span></span>
  </div>

  {/* ACN */}
  <div className="text-gray-300 text-sm mb-2">
    <span></span>
  </div>
</div>

      </div>

      {/* Social Media Icons */}
      <div className="mt-6 flex justify-center space-x-6">
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <FiFacebook className="text-2xl" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <FiTwitter className="text-2xl" />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <FiInstagram className="text-2xl" />
        </a>
        <a href="https://linkedin.com/company/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <FiLinkedin className="text-2xl" />
        </a>
      </div>

      <div className="text-center text-gray-400 text-xs mt-12 tracking-wide select-none">
  &copy; {new Date().getFullYear()} All rights reserved by UtilitySaver Pty Ltd.
</div>
    </footer>
  );
}
