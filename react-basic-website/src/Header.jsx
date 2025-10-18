import React from "react";
import heroImg from "./assets/hero.png"; 
const Header = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 border-t- border-amber-400  bg-[#fffdf8]">
      {/* Left Text Section */}
      <div className="max-w-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Enhance Guest <br />
          Experience with <br />
          <span className="text-gray-900">Technology</span>
        </h1>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          Offer a faster, safer, and contactless dining experience with a simple
          QR scan — no physical menus, just seamless service.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition-all duration-300">
            Get Started For Free →
          </button>
          <button className="border border-gray-400 text-gray-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300">
            Request a Quote →
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative mt-10 md:mt-0 flex justify-center">
        <img
          src={heroImg}
          alt="App Interface"
          className="w-[280px] md:w-[350px] drop-shadow-xl"
        />
        <div className="absolute -left-20 bottom-5 hidden md:block">
          <p className="absolute -top-6 left-16 text-sm text-orange-500 font-semibold">
            QR Code
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
