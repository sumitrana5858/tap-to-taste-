import React from "react";

const LimitedSection = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 bg-[#fffdf8] text-center">
      <div className="max-w-3xl mx-auto flex flex-col gap-6 sm:gap-8">

        {/* --- Help Text --- */}
        <p className="text-gray-700 text-base sm:text-lg md:text-xl font-sans leading-relaxed">
          Need help choosing?{" "}
          <span className="font-semibold text-orange-600">
            Contact our sales team
          </span>{" "}
          for personalized recommendations.
        </p>

        {/* --- Offer Section --- */}
        <div>
          <p className="text-gray-500 mb-2 text-sm sm:text-base">
            {`{ Limited Time Offer }`}
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b132b] leading-snug">
            Premium Features, Limited-Time Discount
          </h1>
        </div>
      </div>
    </section>
  );
};

export default LimitedSection;
