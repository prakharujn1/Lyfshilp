import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownClick = (item) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  const navItems = ["Modules", "Support"];

  return (
    <nav className="bg-[#152347] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-white font-semibold text-lg">
            LyfShilp Academy
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium ml-10">
          {navItems.map((item) => (
            <div key={item} className="relative group">
              <button
                className="flex items-center gap-1 hover:text-yellow-400 transition"
                onClick={() => handleDropdownClick(item)}
              >
                {item}
                <ChevronDown size={16} />
              </button>

              {/* Dropdown */}
              {openDropdown === item && item === "Modules" && (
                <div className="absolute bg-white text-black mt-2 p-4 rounded shadow w-80 z-10 space-y-2">
                  <Link
                    to="/finance"
                    className="text-sm font-semibold text-gray-700 block hover:bg-gray-100 rounded px-2 py-1"
                  >
                    Fundamentals of Finance
                  </Link>

                  <p className="text-sm font-semibold text-gray-700">
                    Computers
                  </p>
                  <p className="text-sm font-semibold text-gray-700">
                    Fundamentals of Law
                  </p>
                  <p className="text-sm font-semibold text-gray-700">
                    Communication Skills
                  </p>
                  <p className="text-sm font-semibold text-gray-700">
                    Entrepreneurship
                  </p>
                  <p className="text-sm font-semibold text-gray-700">
                    Digital Marketing
                  </p>
                  <p className="text-sm font-semibold text-gray-700">
                    Leadership & Adaptability
                  </p>
                  <p className="text-sm font-semibold text-gray-700">
                    Environmental & Sustainability Awareness
                  </p>
                  <p className="text-sm font-semibold text-gray-700">
                    Social-Emotional Learning + Physical & Mental Health
                  </p>
                </div>
              )}

              {/* Default dropdown (for other items) */}
              {openDropdown === item && item !== "Modules" && (
                <div className="absolute bg-white text-black mt-2 p-2 rounded shadow w-40 z-10">
                  <p className="text-sm px-2 py-1 hover:bg-gray-100 rounded">
                    Option 1
                  </p>
                  <p className="text-sm px-2 py-1 hover:bg-gray-100 rounded">
                    Option 2
                  </p>
                </div>
              )}
            </div>
          ))}

          <Link to="/teach" className="hover:text-yellow-400 transition">
            Teach With Us
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Login
          </Link>
          <Link
            to="/book-trial"
            className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
          >
            Book a free trial
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#152347] px-4 py-2 space-y-3 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item}
              className="w-full text-left flex items-center gap-1 hover:text-yellow-400"
            >
              {item}
              <ChevronDown size={16} />
            </button>
          ))}
          <Link to="/teach" className="block hover:text-yellow-400">
            Teach With Us
          </Link>
          <Link
            to="/login"
            className="block bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Login
          </Link>
          <Link
            to="/book-trial"
            className="block bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
          >
            Book a free trial
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
