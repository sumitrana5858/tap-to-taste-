import React from "react";
import heroImg from "./assets/hero.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 py-12 md:py-20 bg-[#fffdf8]">
      
      {/* ===== Left Content ===== */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Enhance Guest
          <br className="hidden sm:block" />
          Experience with
          <br className="hidden sm:block" />
          <span className="text-gray-800">Technology</span>
        </h1>
        <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
          Offer a faster, safer, and contactless dining experience with a simple
          QR scan — no physical menus, just seamless service..
        </p>

        {/* ===== Buttons ===== */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
          <button
            onClick={() => navigate("/signup")}
            className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 w-full sm:w-auto"
          >
            Get Started For Free →
          </button>
          <button
            className="border border-gray-400 text-gray-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 w-full sm:w-auto"
          >
            Request a Quote →
          </button>
        </div>
      </div>

      {/* ===== Right Image ===== */}
      <div className="relative mt-10 md:mt-0 flex justify-center md:justify-end w-full md:w-1/2">
        <img
          src={heroImg}
          alt="App Interface"
          className="w-[250px] sm:w-[320px] md:w-[420px] lg:w-[480px] drop-shadow-xl object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
