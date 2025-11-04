import React, { useState } from "react";
import Marquee from "react-fast-marquee";

const SlideSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title:
        "Helping Restaurants, Bars and Café's Worldwide go Contactless with Confidence",
      logos: [
        "https://cdn.worldvectorlogo.com/logos/swiggy-1.svg",
        "https://cdn.worldvectorlogo.com/logos/zomato-2.svg",
        "https://cdn.worldvectorlogo.com/logos/dominos-pizza-1.svg",
        "https://cdn.worldvectorlogo.com/logos/kfc-2.svg",
        "https://cdn.worldvectorlogo.com/logos/subway-1.svg",
        "https://cdn.worldvectorlogo.com/logos/burger-king-4.svg",
        "https://cdn.worldvectorlogo.com/logos/pizza-hut-2.svg",
        "https://cdn.worldvectorlogo.com/logos/starbucks-coffee.svg",
        "https://cdn.worldvectorlogo.com/logos/dunkin-donuts.svg",
      ],
      subtitle: "Effortless Setup, Exceptional Results",
    },
    {
      title: "Another Slide Title",
      logos: ["logo1.png", "logo2.png", "logo3.png"],
      subtitle: "Another Subtitle",
    },
  ];

  return (
    <section className="py-12 px-4 text-center bg-[#fffdf8]">
      {/* Small Tagline */}
      <p className="text-gray-500 mb-3 text-sm sm:text-base">
        {`{ Smart Contactless Solutions }`}
      </p>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
        {slides[currentSlide].title}
      </h2>

      {/* Logo Marquee */}
      <div className="relative mb-8">
        <Marquee pauseOnHover={true} gradient={false} speed={40}>
          <div className="flex space-x-10 sm:space-x-20 items-center">
            {slides[currentSlide].logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-8 sm:h-10 md:h-12 grayscale hover:grayscale-0 transition duration-300"
              />
            ))}
          </div>
        </Marquee>
      </div>

      {/* Sub Title */}
      <p className="text-gray-500 mb-2 text-sm sm:text-base">
        {`{ How Our Digital Menu Works }`}
      </p>
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
        {slides[currentSlide].subtitle}
      </h3>

      {/* Optional: Slide controls */}
      <div className="mt-6 flex justify-center space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-3 w-3 rounded-full transition-all ${
              i === currentSlide ? "bg-orange-500 scale-125" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default SlideSection;
