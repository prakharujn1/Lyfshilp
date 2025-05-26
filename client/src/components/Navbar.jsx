import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const navItems = [
    "Finance",
    "Computer",
    "Law",
    "Communications",
    "Entreprenerurship",
    "Digital Marketing",
    "Leadership",
    "Environmental",
    "social Learning",
  ];

  const navHeadings = [
    "Fundamentals of Finance",
    "Computers",
    "Fundamentals of Law",
    "Communication Skills",
    "Entrepreneurship",
    "Digital Marketing",
    "Leadership & Adaptability",
    "Environmental & Sustainability Awareness",
    "Social-Emotional Learning + Physical & Mental Health",
  ];

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownClick = (item) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  const handleItemClick = () => {
    setOpenDropdown(null);
    setIsOpen(false); // Also close mobile menu if needed
  };

  return (
    <nav className="bg-[#152347] text-white shadow-md sticky top-0 z-50 w-full">
      <div className="w-full py-5 px-2 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center ml-5">
          <span className="text-white font-bold text-lg">
            LyfShilp Academy
          </span>
        </Link>

        {/* Desktop Menu */}
        <div
          className="hidden md:flex items-center gap-2 text-sm font-medium flex-wrap flex-nowrap w-full whitespace-nowrap"
          ref={dropdownRef}
        >
          {navItems.map((item, index) => (
            <div key={item} className="relative group">
              <button
                className="px-1 py-1 w-full rounded-md bg-transparent text-white hover:bg-white hover:text-[#152347] transition text-sm flex items-center justify-between gap-1"
                onClick={() => handleDropdownClick(item)}
              >
                <span>{item}</span>
                <ChevronDown size={14} />
              </button>

              {openDropdown === item && (
                <div className="absolute top-12 left-0 bg-white bg-opacity-95 backdrop-blur-md text-black mt-2 p-4 rounded-xl shadow-xl text-wrap w-72 z-10 animate-fadeIn">
                  <h4 className="font-bold text-md mb-2 text-[#152347]">
                    {navHeadings[index]}
                  </h4>
                  <hr />
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}/notes`}
                    onClick={handleItemClick}
                    className="block text-sm font-semibold text-gray-800 hover:bg-gray-200 rounded px-3 py-2 transition"
                  >
                    📝 Notes
                  </Link>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}/games`}
                    onClick={handleItemClick}
                    className="block text-sm font-semibold text-gray-800 hover:bg-gray-200 rounded px-3 py-2 transition"
                  >
                    🎮 Gaming Activity
                  </Link>
                </div>
              )}
            </div>
          ))}

          <Link
            to="/login"
            className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition shadow-md"
          >
            Login
          </Link>
          <Link
            to="/book-trial"
            className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition shadow-md"
          >
            Book a Free Trial
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden mr-2">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#152347] px-4 py-2 space-y-3 text-sm font-medium" ref={dropdownRef}>
          {navItems.map((item, index) => (
            <div key={item} className="relative">
              <button
                className="w-full text-left flex items-center gap-1 hover:text-yellow-400"
                onClick={() => handleDropdownClick(item)}
              >
                {item}
                <ChevronDown size={16} />
              </button>
              {openDropdown === item && (
                <div className="mt-2 ml-4 p-4 text-[#152347] rounded-xl shadow-xl text-wrap bg-white space-y-1">
                  <p className="text-xs text-[#152347] font-semibold">
                    {navHeadings[index]}
                  </p>
                  <hr />
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}/notes`}
                    onClick={handleItemClick}
                    className="block hover:text-yellow-300"
                  >
                    Notes
                  </Link>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}/games`}
                    onClick={handleItemClick}
                    className="block hover:text-yellow-300"
                  >
                    Gaming Activity
                  </Link>
                </div>
              )}
            </div>
          ))}

          <Link
            to="/login"
            className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition shadow-md"
          >
            Login
          </Link>
          <Link
            to="/book-trial"
            className="block bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 mt-5 transition"
          >
            Book a Free Trial
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
