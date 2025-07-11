import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  // Mock auth state for demonstration
  const user = null; // Set to true to show logged in state
  const role = null;
  
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
    
    <nav className=" bg-white text-black sticky top-0 z-200 w-full rounded-bl-4xl rounded-br-4xl shadow-lg">
      <div className="w-full py-4 px-6 flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="">
          <a href="/" className="flex items-center gap-2">
            <div className="w-13 h-10 relative">
              {/* 3D Cube Icon - recreating the exact green cube from Figma */}
              <img className="h-12 w-15" src="/midLogo.png" alt="logo" />
            </div>
            <span className="text-[#09BE43] font-bold text-2xl">
              Edumaniax
            </span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="/"
            className="text-black font-medium hover:text-green-600 transition duration-300"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-black font-medium hover:text-green-600 transition duration-300"
          >
            About Us
          </a>
          <a
            href="/courses"
            className="text-black font-medium hover:text-green-600 transition duration-300"
          >
            Courses
          </a>
          <a
            href="/blogs"
            className="text-black font-medium hover:text-green-600 transition duration-300"
          >
            Blogs
          </a>
        </div>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {user || role === "admin" ? (
            <a
              href="/dashboard"
              className="bg-green-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Dashboard
            </a>
          ) : (
            <>
              <a
                href="/register"
                className="border border-green-600 text-green-600 font-medium px-6 py-2 rounded-lg hover:bg-green-50 transition duration-300"
              >
                Register
              </a>
              <a
                href="/login"
                className="bg-green-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Log In
              </a>
            </>
          )}
          
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
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
          className="hidden md:block fixed top-0 right-0 h-full w-80 text-black bg-white shadow-2xl z-50"
        >
          <div className="px-6 py-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-black">
                Explore Courses
              </h2>
              <button onClick={handleItemClick}>
                <X size={24} className="text-black" />
              </button>
            </div>
            <hr className="mb-4" />
            {navItems.map((item, index) => (
              <div key={item}>
                <button
                  className="flex justify-between items-center w-full text-left font-semibold hover:text-green-600"
                  onClick={() => toggleDropdown(index)}
                >
                  {navHeadings[index]}
                  <span>{openDropdown === index ? "+" : "+"}</span>
                </button>
                <hr className="mb-2 border-gray-300" />

                {openDropdown === index && (
                  <div className="mt-2 ml-2 space-y-1 text-sm text-black">
                    <a
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}/notes`}
                      onClick={handleItemClick}
                      className="block text-sm hover:text-green-600 transition"
                    >
                      📝 Notes
                    </a>
                    <a
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}/games`}
                      onClick={handleItemClick}
                      className="block text-sm hover:text-green-600 transition"
                    >
                      🎮 Gaming Activity
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
          <hr className="mx-3 my-4" />
          <a
            href="/register"
            onClick={handleItemClick}
            className="block border border-green-600 text-green-600 text-center mx-3 hover:bg-green-50 transition duration-300 px-4 py-2 rounded-md font-medium mb-2"
          >
            Register
          </a>
          <a
            href="/login"
            onClick={handleItemClick}
            className="block bg-green-600 text-white text-center mx-3 hover:bg-green-700 transition duration-300 px-4 py-2 rounded-md font-medium mb-2"
          >
            Log In
          </a>
        </div>
      )}

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className="md:hidden bg-white px-4 py-2 space-y-3 text-sm font-medium shadow-lg"
          ref={sidebarRef}
        >
          <div className="flex gap-2">
            <a
              href="/register"
              onClick={handleItemClick}
              className="border border-green-600 text-green-600 px-4 py-2 rounded-md font-medium hover:bg-green-50 transition"
            >
              Register
            </a>
            <a
              href="/login"
              onClick={handleItemClick}
              className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 transition"
            >
              Log In
            </a>
          </div>
          {navItems.map((item, index) => (
            <div key={item} className="relative">
              <button
                className="w-full text-left flex items-center gap-1 hover:text-green-600"
                onClick={() => toggleDropdown(item)}
              >
                {item}
                <ChevronDown size={16} />
              </button>
              {openDropdown === item && (
                <div className="mt-2 ml-4 p-4 text-black rounded-xl shadow-xl bg-gray-50 space-y-1">
                  <p className="text-xs text-black font-semibold">
                    {navHeadings[index]}
                  </p>
                  <hr />
                  <a
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}/notes`}
                    onClick={handleItemClick}
                    className="block hover:text-green-600"
                  >
                    📝 Notes
                  </a>
                  <a
                    href={`/${item.toLowerCase().replace(/\s+/g, "-")}/games`}
                    onClick={handleItemClick}
                    className="block hover:text-green-600"
                  >
                    🎮 Gaming Activity
                  </a>
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