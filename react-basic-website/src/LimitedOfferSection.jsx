import React from "react";
import { CheckCircle } from "lucide-react"; 

const LimitedOfferSection = () => {
  return (
    <section className="bg-[#fffdf8] py-16 px-6 flex flex-col md:flex-row items-center justify-center gap-15">
      <div className="bg-orange-300                                                                                                                  rounded-3xl p-10 flex justify-center items-center shadow-md">
        <img
          src="https://taptotaste.novanectar.in/assets/discount-K6SpRtjY.jpg"
          alt="Limited Offer"
          className="w-90"
        />
      </div>

      <div className="max-w-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Start With Digital Menu Today.
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed tex">
          Upgrade your digital menu with powerful premium features to enhance
          service and streamline operations. Get full access at a limited-time
          discounted rate — no long-term commitment needed.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center gap-2">
            <CheckCircle className="text-green-500 w-5 h-5" />
            No credit card required
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="text-green-500 w-5 h-5" />
            Setup in 5 minutes
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="text-green-500 w-5 h-5" />
            Save 20% instantly
          </li>
        </ul>

        <button className="mt-8 bg-orange-400 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition-all w-55">
          Upgrade to Premium →
        </button>
      </div>
    </section>
  );
};

export default LimitedOfferSection;
