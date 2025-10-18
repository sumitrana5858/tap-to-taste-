import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactSection = () => {
  return (
    < div className="bg-[#fffdf8] py-16 px-6 border-1 rounded-3xl border-amber-500  ">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Contact Us
        </h2>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left side - Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              We’d love to hear from you!
            </h3>
            <p className="text-gray-600 mb-8">
              Have a question, feedback, or just want to say hello? Use the form
              and we’ll get back to you soon.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-orange-500 text-xl" />
                <span className="font-medium">
                  Dehradun, <span className="font-normal">India</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-orange-500 text-xl" />
                <span>taptotaste@novanectar.in</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-orange-500 text-xl" />
                <span>+91 8979891708</span>
              </li>
            </ul>
          </div>

          {/* Right side - Form */}
          <div className="bg-[#f9f9f9] p-8 rounded-2xl shadow-md">
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
