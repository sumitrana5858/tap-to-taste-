import React, { useState } from "react";
import Logo from "./logo";
import { FaArrowRight, FaEllipsisV, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* ===== Desktop Menu ===== */}
        <ul className="hidden md:flex space-x-10 text-gray-700 font-medium">
          {navItems.map((item, i) => (
            <li key={i}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "hover:text-orange-500 transition-colors"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ===== Desktop Button ===== */}
        <div className="hidden md:flex">
          <button className="flex items-center bg-orange-500 hover:bg-amber-600 px-5 py-2 rounded-3xl font-bold text-white transition">
            Get Started for Free
            <FaArrowRight className="ml-2" />
          </button>
        </div>

        {/* ===== Mobile Menu Button ===== */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-gray-800 focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaEllipsisV />}
        </button>
      </div>

      {/* ===== Mobile Dropdown ===== */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t border-gray-200 px-6 py-4 space-y-4">
          {navItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className="block text-gray-700 hover:text-orange-500 font-medium"
              onClick={() => setMenuOpen(false)} // close menu when clicked
            >
              {item.name}
            </NavLink>
          ))}

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 pt-3">
            <button className="w-full flex items-center justify-center bg-orange-500 hover:bg-amber-600 text-white font-bold px-4 py-2 rounded-3xl transition">
              Get Started for Free
              <FaArrowRight className="ml-2 text-sm" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
