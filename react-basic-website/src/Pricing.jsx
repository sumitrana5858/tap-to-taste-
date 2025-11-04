import React from "react";

const CardSection = () => {
  return (
    <section className="bg-[#fffdf8] py-16 flex flex-col items-center">
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="bg-white shadow-md rounded-2xl p-12 w-[490px] text-center border border-gray-200 hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-2">Free</h2>
          <p className="text-5xl font-bold mb-1">₹0<span className="text-lg font-medium">/month</span></p>
          <p className="text-gray-500 mb-6">Simple, Smart Start</p>
          <button className="bg-[#0b132b] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition w-100">
            Get Started →
          </button>
          <ul className="text-left mt-6 space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              ✅ Mobile-Friendly QR Code Access
            </li>
            <li className="flex items-center gap-2">
              ✅ Real-Time Menu Updates
            </li>
            <li className="flex items-center gap-2">
              ✅Basic Usage Analytics
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              ❌ Multilingual Menu Support
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              ❌ Full White-Label Branding
            </li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-12 w-[490px] text-center border-2 border-orange-500 hover:shadow-xl transition relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
          <h2 className="text-2xl font-bold text-orange-600 mb-2">Premium</h2>
          <p className="text-5xl font-bold mb-1">₹199<span className="text-lg font-medium">/month</span></p>
          <p className="text-gray-500 mb-6">Premium Tools, Full Access</p>
          <button className="bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition w-100">
            Get Started →
          </button>

          <ul className="text-left mt-6 space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              ✅ POS System Integration
            </li>
            <li className="flex items-center gap-2">
              ✅ Unlimited Menu Edits
            </li>
            <li className="flex items-center gap-2">
              ✅ Daily Sales Reports
            </li>
            <li className="flex items-center gap-2">
              ✅ Dedicated Account Manager
            </li>
            <li className="flex items-center gap-2">
              ✅ Advanced Analytics & Guest insights
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
