import React from "react";

const features = [
  {
    title: "Customize Your Menu",
    description:
      "Easily tailor menus with item images, tags and real-time previews, ensuring smooth layout control & beautiful dishes presentation.",
    imageUrl: "https://taptotaste.novanectar.in/assets/feature1-B9kUmxKe.png",
  },
  {
    title: "Branded QR Codes and Styling",
    description:
      "Create your QR codes with custom logos, upload and titles to boost recognition. Upload or brand tags for a consistent, on-brand experience.",
    imageUrl: "https://taptotaste.novanectar.in/assets/feature4-7veqfpVh.png",
  },
  {
    title: "POS And Inventory Sync",
    description:
      "Enjoy digital menu sync with POS & inventory systems for seamless operations. Real-time control over items & stock tracking in real-time.",
    imageUrl: "https://taptotaste.novanectar.in/assets/feature3-D5UNVqeU.png",
  },
  {
    title: "Secure Ordering And Integrated Payments",
    description:
      "Enable fast, secure, and flexible ordering & payments — supporting cards, UPI, wallets, QR links or custom integrations.",
    imageUrl: "https://taptotaste.novanectar.in/assets/feature4-7veqfpVh.png",
  },
  {
    title: "Multi-Language Support",
    description:
      "Offer a seamless experience in every territory, silently adapt to each visitor in their native language and menu settings.",
    imageUrl: "https://taptotaste.novanectar.in/assets/feature5-WAM9TQnc.png",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Track performance with an intuitive analytics dashboard that helps spot-selling items, customer behavior, and sales in real-time.",
    imageUrl: "https://taptotaste.novanectar.in/assets/feature3-D5UNVqeU.png",
  },
];

const Features = () => {
  return (
    <section className="bg-[#fffdf8] py-16">
      <div className="text-center mb-10 px-4">
        <p className="text-gray-500 mb-3 font-medium tracking-wide uppercase">
          {"{ Powerful Menu Features }"}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          Everything You Need to Serve Smarter and Faster.
        </h2>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {features.map(({ title, description, imageUrl }, index) => (
          <div
            key={index}
            className="bg-yellow-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center"
          >
            <img
              src={imageUrl}
              alt={title}
              className="h-44 mx-auto mb-4 object-contain"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
