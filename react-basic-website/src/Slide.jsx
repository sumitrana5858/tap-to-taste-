import React, { useState } from 'react';
import Marquee from "react-fast-marquee";

const SlideSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Helping Restaurants, Bars and Cafe's Worldwide go Contactless with Confidence",
      logos: ["https://cdn.worldvectorlogo.com/logos/swiggy-1.svg", "https://cdn.worldvectorlogo.com/logos/zomato-2.svg", "https://cdn.worldvectorlogo.com/logos/dominos-pizza-1.svg", "https://cdn.worldvectorlogo.com/logos/kfc-2.svg", "https://cdn.worldvectorlogo.com/logos/subway-1.svg", "https://cdn.worldvectorlogo.com/logos/burger-king-4.svg", "https://cdn.worldvectorlogo.com/logos/pizza-hut-2.svg", "https://cdn.worldvectorlogo.com/logos/starbucks-coffee.svg", "https://cdn.worldvectorlogo.com/logos/dunkin-donuts.svg"],
      subtitle: "Effortless Setup, Exceptional Results"
    },
    // Add more slides as needed
    {
      title: "Another Slide Title",
      logos: ["logo1.png", "logo2.png", "logo3.png"],
      subtitle: "Another Subtitle"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-12 text-center  bg-[#fffdf8]">
      <p className="text-gray-500 mb-4">{`{ Smart Contactless Solutions }`}</p>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        {slides[currentSlide].title}
      </h2>
      <div className="relative mb-8">
        <Marquee pauseOnHover={true} gradient={false}>
          <div className="flex space-x-20 items-center">
            {slides[currentSlide].logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-12 grayscale hover:grayscale-0"
              />
            ))}
          </div>
        </Marquee>
      </div>
      <p className="text-gray-500 mb-4">{`{ How Our Digital Menu Works }`}</p>
      <h3 className="text-2xl font-semibold text-gray-900">
        {slides[currentSlide].subtitle}
      </h3>
      <div className="mt-6 flex justify-center space-x-4">
        
       
      </div>
    </section>
  );
};




export default SlideSection;