import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-[#fffdf8] py-10 sm:py-14 px-4 sm:px-8 rounded-3xl border border-amber-500 max-w-7xl mx-auto my-10">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Contact Us
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left px-2">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800">
            We’d love to hear from you!
          </h3>
          <p className="text-gray-600 mb-8 text-base leading-relaxed">
            Have a question, feedback, or just want to say hello? Fill out the
            form below, and we’ll get back to you soon.
          </p>

          <ul className="space-y-4 text-gray-700 text-base">
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaMapMarkerAlt className="text-orange-500 text-lg" />
              <span className="font-medium">
                Dehradun, <span className="font-normal">India</span>
              </span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaEnvelope className="text-orange-500 text-lg" />
              <span>taptotaste@novanectar.in</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaPhone className="text-orange-500 text-lg" />
              <span>+91 8979891708</span>
            </li>
          </ul>
        </div>

        {/* Right Section - Form */}
        <div className="bg-[#f9f9f9] p-6 sm:p-8 rounded-2xl shadow-md w-full">
          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
