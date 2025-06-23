import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-5 tracking-wide">Utility Hub</h2>
          <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
            A truly independent Utility comparison and connection platform focused on saving money for Australian families.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 tracking-wide">Useful Links</h2>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="cursor-pointer hover:text-white transition">About Us</li>
            <li className="cursor-pointer hover:text-white transition">Utilities Services</li>
            <li className="cursor-pointer hover:text-white transition">Finance & Education</li>
            <li className="cursor-pointer hover:text-white transition">Lighting Upgrade</li>
            <li className="cursor-pointer hover:text-white transition">Home Moving</li>
            <li className="cursor-pointer hover:text-white transition">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4 tracking-wide">Contact</h2>

          <div className="flex items-center text-gray-300 text-sm leading-relaxed mb-2 space-x-2">
            <FiMail className="text-lg" />
            <a
              href="mailto:info@utilityhub.com.au"
              className="hover:text-white transition underline"
            >
              info@utilityhub.com.au
            </a>
          </div>

          <div className="flex items-center text-gray-300 text-sm leading-relaxed mb-2 space-x-2">
            <FiPhone className="text-lg" />
            <span>AU: +613 8626 7715</span>
          </div>

          <div className="flex items-center text-gray-300 text-sm leading-relaxed mb-2 space-x-2">
            <FiMapPin className="text-lg" />
            <span>India: DN – 52, Sector V, Kolkata</span>
          </div>

          {/* Social Media Icons */}
          <div className="mt-6 flex space-x-6">
            <a href="https://facebook.com/utilityhub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <FiFacebook className="text-2xl" />
            </a>
            <a href="https://twitter.com/utilityhub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <FiTwitter className="text-2xl" />
            </a>
            <a href="https://instagram.com/utilityhub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <FiInstagram className="text-2xl" />
            </a>
            <a href="https://linkedin.com/company/utilityhub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <FiLinkedin className="text-2xl" />
            </a>
          </div>

          <p className="text-gray-400 text-xs mt-6 tracking-wide">ABN: 26 606 384 598</p>
        </div>
      </div>

      <div className="text-center text-gray-400 text-xs mt-12 tracking-wide select-none">
        All rights reserved by UtilityHub.
      </div>
    </footer>
  );
}
