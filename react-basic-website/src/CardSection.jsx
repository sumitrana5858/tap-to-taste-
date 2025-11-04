import React from "react";

const CardSection = () => {
  return (
    <section className="bg-[#fffdf8] py-12 sm:py-16 flex flex-col items-center px-4 sm:px-6 md:px-12">
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch w-full max-w-6xl">

        {/* ===== Free Plan ===== */}
        <div className="bg-white shadow-md rounded-2xl p-8 sm:p-10 md:p-12 w-full md:w-1/2 text-center border border-gray-200 hover:shadow-xl transition">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Free</h2>
          <p className="text-4xl sm:text-5xl font-bold mb-1">
            ₹0<span className="text-lg font-medium">/month</span>
          </p>
          <p className="text-gray-500 mb-6 text-sm sm:text-base">
            Simple, Smart Start
          </p>
          <button className="bg-[#0b132b] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition w-full sm:w-auto">
            Get Started →
          </button>

          <ul className="text-left mt-6 space-y-3 text-gray-700 text-sm sm:text-base">
            <li>✅ Mobile-Friendly QR Code Access</li>
            <li>✅ Real-Time Menu Updates</li>
            <li>✅ Basic Usage Analytics</li>
            <li className="text-gray-400">❌ Multilingual Menu Support</li>
            <li className="text-gray-400">❌ Full White-Label Branding</li>
          </ul>
        </div>

        {/* ===== Premium Plan ===== */}
        <div className="bg-white shadow-md rounded-2xl p-8 sm:p-10 md:p-12 w-full md:w-1/2 text-center border-2 border-orange-500 hover:shadow-xl transition relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">
            Premium
          </h2>
          <p className="text-4xl sm:text-5xl font-bold mb-1">
            ₹199<span className="text-lg font-medium">/month</span>
          </p>
          <p className="text-gray-500 mb-6 text-sm sm:text-base">
            Premium Tools, Full Access
          </p>
          <button className="bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition w-full sm:w-auto">
            Get Started →
          </button>

          <ul className="text-left mt-6 space-y-3 text-gray-700 text-sm sm:text-base">
            <li>✅ POS System Integration</li>
            <li>✅ Unlimited Menu Edits</li>
            <li>✅ Daily Sales Reports</li>
            <li>✅ Dedicated Account Manager</li>
            <li>✅ Advanced Analytics & Guest Insights</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
