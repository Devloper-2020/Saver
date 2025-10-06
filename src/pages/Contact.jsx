import React, { useState } from "react";
import {
  Phone,
  MessageCircle,
  Mic,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (!/^[A-Za-z\s]*$/.test(value)) {
      setNameError("Name must only contain letters and spaces.");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    const phoneRegex = /^0\d{9}$/; // Starts with 0, total 10 digits
    if (!phoneRegex.test(value.trim())) {
      setPhoneError("Enter a valid 10-digit number starting with 0.");
    } else {
      setPhoneError("");
    }
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);
    if (value.trim().length < 10) {
      setMessageError("Message must be at least 10 characters.");
    } else {
      setMessageError("");
    }
  };

  const handleSubmit = (e) => {
    let hasError = false;

    if (!name.trim()) {
      setNameError("Name is required.");
      hasError = true;
    }

    if (!email.trim()) {
      setEmailError("Email is required.");
      hasError = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      hasError = true;
    }

    const phoneRegex = /^0\d{9}$/;
    if (phone && !phoneRegex.test(phone)) {
      setPhoneError("Enter a valid 10-digit number starting with 0.");
      hasError = true;
    }

    if (!message.trim()) {
      setMessageError("Message is required.");
      hasError = true;
    } else if (message.trim().length < 10) {
      setMessageError("Message must be at least 10 characters.");
      hasError = true;
    }

    if (hasError) {
      e.preventDefault();
    }
  };

  return (
    <div className="bg-[#032D4D] min-h-screen py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Contact Us</h1>
          <br />
          <p className="text-lg text-black leading-relaxed bg-white p-4 rounded-xl inline-block">
            We’re here to help with your energy and broadband needs! Reach out to us anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          {/* Info Card */}
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200 space-y-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-sky-700 text-center">Utility Saver</h2>
            <br />
            <p className="text-black text-lg">
              <strong className="text-gray-900">ACN: </strong>
            </p>
            <p className="text-black text-lg">
              <strong className="text-gray-900">
                Email:{" "}
                <a
                  href="mailto:"
                  className="text-sky-600 underline hover:text-sky-800 transition"
                >
                 
                </a>
              </strong>
            </p>

            <div className="bg-sky-50 p-6 rounded-xl space-y-4 border border-sky-200 shadow-inner">
              <div className="flex items-center gap-4">
                <MessageCircle className="text-sky-600" size={26} />
                <span className="font-semibold text-black text-lg">
                  SMS / WhatsApp:
                </span>
              </div>
              <p className="text-sm text-black max-w-md leading-relaxed">
                Text us for a quote or callback. Our consultant will reach you within{" "}
                <strong>3 minutes</strong> (Mon – Sat, 9:00 AM - 6:00 PM).
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="text-green-600" size={26} />
                <p className="text-black font-semibold text-lg">Call Us: </p>
              </div>
              <div className="flex items-start gap-4">
                <Mic className="text-yellow-600 mt-1" size={26} />
                <div>
                  <p className="font-semibold text-black text-lg mb-2">Leave a Voice Message:</p>
                  <ul className="list-disc list-inside text-black text-md space-y-1">
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Social Media */}
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

          {/* Contact Form */}
          <form
            action={import.meta.env.VITE_GETFORM_ENDPOINTContact}
            method="POST"
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200 space-y-8 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-3xl text-sky-700 font-semibold text-center">Send us a Message</h2>

            <input type="hidden" name="_gotcha" style={{ display: "none" }} />

            {/* Name */}
            <div>
              <label htmlFor="name" className="block mb-2 text-black font-medium text-lg">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="John Doe"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-sky-400 text-lg"
                required
              />
              {nameError && <p className="text-red-500 mt-1 text-sm">{nameError}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-2 text-black font-medium text-lg">
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="you@example.com"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-sky-400 text-lg"
                required
              />
              {emailError && <p className="text-red-500 mt-1 text-sm">{emailError}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block mb-2 text-black font-medium text-lg">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="0XXXXXXXXX"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-sky-400 text-lg"
                required
              />
              {phoneError && <p className="text-red-500 mt-1 text-sm">{phoneError}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block mb-2 text-black font-medium text-lg">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={message}
                onChange={handleMessageChange}
                placeholder="How can we help you?"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-sky-400 text-lg resize-none"
                required
              />
              {messageError && <p className="text-red-500 mt-1 text-sm">{messageError}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-4 rounded-xl shadow-md transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
