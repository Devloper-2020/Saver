
import React from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  Mic,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-[#032D4D]  min-h-screen py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
           <strong><h1 className={` text-White text-4xl md:text-5xl`}>
           
            Contact Us
          </h1></strong><br/>
          <p className="text-lg text-white-700 leading-relaxed">
            We’re here to help with your energy and broadband needs! Reach out to us anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          {/* Company Info Card */}
          <div className="bg-white  p-10 rounded-3xl shadow-lg border border-gray-200 space-y-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-sky-700 drop-shadow-sm text-center ">Utility Saver  </h2><br/>
            <p className="text-gray-700 text-lg">
              <strong className="text-gray-900">ACN:</strong> 
            </p>
            <p className="text-gray-700 text-lg">
              <strong className="text-gray-900">Email:</strong>{" "}
              <a
                href="mailto:"
                className="text-sky-600 underline hover:text-sky-800 transition"
              >
                
              </a>
            </p>

            <div className="bg-sky-50 p-6 rounded-xl space-y-4 border border-sky-200 shadow-inner">
              <div className="flex items-center gap-4">
                <MessageCircle className="text-sky-600" size={26} />
                <span className="font-semibold text-gray-800 text-lg">
                  SMS / WhatsApp:
                </span>
              </div>
              <p className="text-sm text-gray-600 max-w-md leading-relaxed">
                Text us for a quote or callback. Our consultant will reach you within{" "}
                <strong>3 minutes</strong> (Mon–Fri, 11am–7pm).
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="text-green-600" size={26} />
                <p className="text-gray-800 font-semibold text-lg">Call Us: </p>
              </div>
              <div className="flex items-start gap-4">
                <Mic className="text-yellow-600 mt-1" size={26} />
                <div>
                  <p className="font-semibold text-gray-900 text-lg mb-2">
                    Leave a Voice Message:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-md space-y-1">
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Social Media Handles */}
            <div>
              <h3 className="text-2xl font-semibold text-sky-700 mb-5">Follow Us</h3>
              <div className="flex gap-8 text-sky-600">
                {[
                  { href: "https://twitter.com/UtilityDeals", Icon: Twitter, label: "Twitter" },
                  { href: "https://facebook.com/UtilityDeals", Icon: Facebook, label: "Facebook" },
                  { href: "https://instagram.com/UtilityDeals", Icon: Instagram, label: "Instagram" },
                  { href: "https://linkedin.com/company/UtilityDeals", Icon: Linkedin, label: "LinkedIn" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="hover:text-sky-800 transition-colors duration-300"
                  >
                    <Icon size={32} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form with Getform */}
          <form
            action="https://getform.io/f/azynpjmb"
            method="POST"
            className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200 space-y-8 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-3xl text-black font-semibold text-sky-700 drop-shadow-sm text-center">Send us a Message</h2>

            {/* Honeypot field for spam protection */}
            <input type="hidden" name="_gotcha" style={{ display: "none" }} />

            <div>
              <label htmlFor="name" className="block mb-2 text-black-700 font-medium text-lg">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-sky-400 focus:outline-none text-lg placeholder-black-400 transition"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-black-700 font-medium text-lg">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-sky-400 focus:outline-none text-lg placeholder-black-400 transition"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 text-black-700 font-medium text-lg">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="04XX XXX XXX"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-sky-400 focus:outline-none text-lg placeholder-black-400 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-black-700 font-medium text-lg">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="How can we help you?"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-sky-400 focus:outline-none text-lg placeholder-black-400 transition resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-4 rounded-xl shadow-md transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Optional Visual */}
        <div className="w-full mt-16">
          <img
            src="/customer.jpg"
            alt="Customer Support"
            className="w-full h-72 md:h-96 lg:h-[28rem] object-cover rounded-3xl shadow-2xl filter brightness-95 hover:brightness-100 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
}

