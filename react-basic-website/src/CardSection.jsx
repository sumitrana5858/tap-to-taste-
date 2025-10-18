import React from 'react';

 export const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-yellow-50 p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">
        <img src={imageUrl} alt={title} className="h-48 w-auto" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const CardGrid = () => {
  const cards = [
    {
      title: "Customize Your Menu",
      description: "Easily tailor menus with item images, tags and real-time previews, ensuring smooth layout control & beautiful dishes presentation.",
      imageUrl: "https://taptotaste.novanectar.in/assets/feature1-B9kUmxKe.png",
    },
    {
      title: "Branded QR Codes and Styling",
      description: "Create your QR codes with custom logos, upload and titles to boost recognition. Upload or brand tags for a consistent, on-brand experience.",
      imageUrl: "https://taptotaste.novanectar.in/assets/feature4-7veqfpVh.png",
    },
    {
      title: "POS And Inventory Sync",
      description: "Enjoy digital menu sync with POS & inventory systems for seamless operations. Real-time control over items & stock tracking in real-time.",
      imageUrl: "https://taptotaste.novanectar.in/assets/feature3-D5UNVqeU.png",
    },
    {
        title:"Secure Ordering And Integrated Payments",
        description:"Enable fast, secure, and flexible ordering & payments — supporting cards, UPI, wallets, QR links or custom integrations.",
        imageUrl:"https://taptotaste.novanectar.in/assets/feature4-7veqfpVh.png"
    },
       {
        title:"Multi-Language Support",
        description:"Offer a seamless experience in every territory, silently adapt to each visitor in their native language and menu settings.",
        imageUrl:"https://taptotaste.novanectar.in/assets/feature5-WAM9TQnc.png",
    },
       {
        title:"Analytics Dashboard",
        description:"Track performance with an intuitive analytics dashboard that helps spot-selling items, customer behavior, and sales in real-time.",
        imageUrl:"https://taptotaste.novanectar.in/assets/feature3-D5UNVqeU.png"
    }

  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto p-4">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} imageUrl={card.imageUrl} />
      ))}
    </div>
  );
};

export default CardGrid;