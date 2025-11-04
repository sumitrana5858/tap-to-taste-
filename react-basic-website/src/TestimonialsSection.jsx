import React from "react";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Manager - Curry Tales",
    feedback:
      "The digital menu is a game-changer. Updating prices or adding new items used to take hours, now it's done in minutes. Our customers also find it very modern and easy to use.",
    initial: "P",
  },
  {
    name: "Amit Mehta",
    role: "Owner - Tandoori Nights",
    feedback:
      "We noticed a 20% increase in repeat customers after adopting QR-based ordering. People like the quick ordering and cashless payment options. It also reduced mistakes in order-taking.",
    initial: "A",
  },
  {
    name: "Neha Verma",
    role: "Restaurant Admin - Masala-e-Magic",
    feedback:
      "Managing orders has become so simple. The kitchen receives everything directly without confusion. Plus, customers spend more time exploring dishes since the menu looks attractive on their phones.",
    initial: "N",
  },
  {
    name: "Sandeep Singh",
    role: "Restaurant Owner - Zaika Darbar",
    feedback:
      "Our restaurant used to face delays in billing. With this system, customers can order and pay instantly. Billing errors have gone down and table turnover is much faster.",
    initial: "S",
  },
  {
    name: "Meena Gupta",
    role: "Owner - Biryani Hub",
    feedback:
      "Simple interface, fast setup, and great support. Customers appreciate the smooth experience. It’s made a big difference in how we operate.",
    initial: "M",
  },
  {
    name: "Rajesh Khanna",
    role: "Chef - Urban Tadka",
    feedback:
      "As a chef, I love how quickly I get accurate orders now. No more handwriting confusion or missed requests. Everything is synced and efficient.",
    initial: "R",
  },
  {
    name: "Anita Joshi",
    role: "Manager - Café Bliss",
    feedback:
      "The analytics dashboard gives us real insights into what sells most. We’ve improved our menu and profits thanks to this tool.",
    initial: "A",
  },
  {
    name: "Karan Oberoi",
    role: "Franchise Owner - Chaat Chowk",
    feedback:
      "Perfect solution for multi-location restaurants. Consistent menu updates and centralized control. Highly recommended!",
    initial: "K",
  },
];

// 🧱 Single Testimonial Card
const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white min-w-[260px] sm:min-w-[300px] max-w-[320px] mx-3 sm:mx-4 p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
    <div className="flex items-center justify-center mb-4">
      <div className="bg-orange-500 text-white text-lg font-bold w-10 h-10 flex items-center justify-center rounded-full">
        {testimonial.initial}
      </div>
    </div>
    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{testimonial.name}</h3>
    <p className="text-xs sm:text-sm text-gray-500 mb-2">{testimonial.role}</p>
    <p className="text-gray-700 text-sm leading-relaxed mb-3">
      {testimonial.feedback}
    </p>
    <div className="text-yellow-400 text-lg">★★★★★</div>
  </div>
);

// ✨ Main Section
const TestimonialsSection = () => {
  const topTestimonials = testimonials.slice(0, 4);
  const bottomTestimonials = testimonials.slice(4, 8);

  return (
    <section className="bg-[#fffdf8] py-12 sm:py-16 text-center">
      {/* Title */}
      <div className="mb-10 px-4">
        <p className="text-gray-600 mb-2 text-sm sm:text-base">
          {`{ What Our Clients Are Saying }`}
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Real Stories From Satisfied Customers
        </h2>
      </div>

      {/* Top Marquee - Right to Left */}
      <div className="overflow-hidden">
        <Marquee speed={40} direction="left" pauseOnHover gradient={false}>
          {topTestimonials.map((t, index) => (
            <TestimonialCard testimonial={t} key={`top-${index}`} />
          ))}
        </Marquee>
      </div>

      {/* Bottom Marquee - Left to Right */}
      <div className="overflow-hidden mt-10">
        <Marquee speed={40} direction="right" pauseOnHover gradient={false}>
          {bottomTestimonials.map((t, index) => (
            <TestimonialCard testimonial={t} key={`bottom-${index}`} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TestimonialsSection;
