import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 mt-15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Left Section - About */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Digital Menu</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Upgrade your restaurant with a fast, contactless digital menu — 
            easy to manage, effortless for guests.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            {["Home", "Features", "Pricing", "About Us", "Contact Us"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="relative inline-block after:content-[''] after:block after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full hover:text-orange-500"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Social Media</h2>
          <ul className="space-y-2 text-gray-300">
            {["Twitter", "Instagram", "YouTube", "Facebook", "LinkedIn"].map((social) => (
              <li key={social}>
                <a
                  href="#"
                  className="relative inline-block after:content-[''] after:block after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full hover:text-orange-500"
                >
                  {social}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2025 Digital Menu. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4">
          {["Terms & Conditions", "Privacy Policy", "Cookie Policy", "Help Center"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-orange-500 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
