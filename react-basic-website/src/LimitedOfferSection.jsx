import React from "react";
import { CheckCircle } from "lucide-react";

const LimitedOfferSection = () => {
  return (
    <section className="bg-[#fffdf8] py-12 sm:py-16 px-4 sm:px-8 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
      
      {/* Image Section */}
      <div className=" flex justify-center items-center ">
        <img
          src="https://taptotaste.novanectar.in/assets/discount-K6SpRtjY.jpg"
          alt="Limited Offer"
          className="w-[250px] sm:w-[320px] md:w-[380px] lg:w-[420px] object-contain rounded-2xl"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-lg w-full text-center md:text-left mt-8 md:mt-0">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800">
          Start With Digital Menu Today
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
          Upgrade your digital menu with powerful premium features to enhance
          service and streamline operations. Get full access at a limited-time
          discounted rate — no long-term commitment needed.
        </p>

        <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
          <li className="flex items-center justify-center md:justify-start gap-2">
            <CheckCircle className="text-green-500 w-5 h-5" />
            No credit card required
          </li>
          <li className="flex items-center justify-center md:justify-start gap-2">
            <CheckCircle className="text-green-500 w-5 h-5" />
            Setup in 5 minutes
          </li>
          <li className="flex items-center justify-center md:justify-start gap-2">
            <CheckCircle className="text-green-500 w-5 h-5" />
            Save 20% instantly
          </li>
        </ul>

        <div className="flex justify-center md:justify-start">
          <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 transition-all duration-300">
            Upgrade to Premium →
          </button>
        </div>
      </div>
    </section>
  );
};

export default LimitedOfferSection;
