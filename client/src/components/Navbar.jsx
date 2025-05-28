import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const sidebarRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
        setIsOpen(false);
        setOpenDropdown(null);
      }
    };

    if (isSidebarOpen || isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen, isOpen]);

  const toggleDropdown = (indexOrItem) => {
    setOpenDropdown(openDropdown === indexOrItem ? null : indexOrItem);
  };

  const handleItemClick = () => {
    setIsSidebarOpen(false);
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-[#152347] text-white shadow-md sticky top-0 z-50 w-full">
      <div className="w-full py-5 px-2 flex justify-between items-center">
        <div className="ml-7">
          <Link to="/" className="flex items-center gap-3 ml-3 md:ml-5">
            <img
              src="/new_logo.jpg"
              alt="EduManiax Logo"
              className="w-9 h-9 md:w-14 md:h-14 rounded-full object-cover border-2 border-white shadow-md"
            />
            <span className="text-white font-bold text-xl md:text-2xl lg:text-3xl">
              EduManiax
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4 mr-4">
          <Link
            to="/login"
            className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition shadow-md"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition shadow-md"
          >
            Register
          </Link>
          <Link
            to="/book-trial"
            className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition shadow-md"
          >
            Book a Free Trial
          </Link>
          <button
            onClick={() => {
              const newState = !isSidebarOpen;
              setIsSidebarOpen(newState);
              setIsOpen(false);
              if (!newState) setOpenDropdown(null);
            }}
            className="text-white"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="md:hidden mr-2">
          <button
            onClick={() => {
              const newState = !isSidebarOpen;
              setIsSidebarOpen(newState);
              setIsOpen(newState);
              if (!newState) setOpenDropdown(null);
            }}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Desktop Sidebar */}
      {isSidebarOpen && (
        <div
          ref={sidebarRef}
          className="hidden md:block fixed top-0 right-0 h-full w-80 text-black bg-white shadow-2xl z-50 animate-slideIn"
        >
          <div className="px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#152347]">
                Explore Courses
              </h2>
              <button onClick={handleItemClick}>
                <X size={24} className="text-[#152347]" />
              </button>
            </div>
            <hr className="mb-4" />
            {navItems.map((item, index) => (
              <div key={item}>
                <button
                  className="flex justify-between items-center w-full text-left font-semibold hover:text-yellow-500"
                  onClick={() => toggleDropdown(index)}
                >
                  {navHeadings[index]}
                  <span>{openDropdown === index ? "+" : "+"}</span>
                </button>
                <hr className="mb-2 border-gray-300" />

                {openDropdown === index && (
                  <div className="mt-2 ml-2 space-y-1 text-sm text-[#152347]">
                    <Link
                      to={`/${item.toLowerCase().replace(/\s+/g, "-")}/notes`}
                      onClick={handleItemClick}
                      className="block text-sm hover:text-yellow-500 transition"
                    >
                      📝 Notes
                    </Link>
                    <Link
                      to={`/${item.toLowerCase().replace(/\s+/g, "-")}/games`}
                      onClick={handleItemClick}
                      className="block text-sm hover:text-yellow-500 transition"
                    >
                      🎮 Gaming Activity
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
          <hr className=" mx-3 my-4" />
          <Link
            to="/login"
            onClick={handleItemClick}
            className="block bg-yellow-400 text-center mx-3 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 mb-2"
          >
            Login
          </Link>
          <Link
            to="/book-trial"
            onClick={handleItemClick}
            className="block bg-yellow-400 mx-3 text-center text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-300"
          >
            Book a Free Trial
          </Link>
        </div>
      )}

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className="md:hidden bg-[#152347] px-4 py-2 space-y-3 text-sm font-medium"
          ref={sidebarRef}
        >
          <div>
            <Link
              to="/login"
              onClick={handleItemClick}
              className="bg-yellow-400 text-black px-5 py-2 rounded-md font-semibold hover:bg-yellow-300 transition shadow-md"
            >
              Login
            </Link>
            <Link
              to="/book-trial"
              onClick={handleItemClick}
              className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 ml-4 mt-5 transition"
            >
              Book a Free Trial
            </Link>
          </div>
          {navItems.map((item, index) => (
            <div key={item} className="relative">
              <button
                className="w-full text-left flex items-center gap-1 hover:text-yellow-400"
                onClick={() => toggleDropdown(item)}
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
                    📝 Notes
                  </Link>
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}/games`}
                    onClick={handleItemClick}
                    className="block hover:text-yellow-300"
                  >
                    🎮 Gaming Activity
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
