import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 mt-20">
      <div className="bg-[#FFD86B] rounded-2xl p-4 md:p-6 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        {/* Left: Text Section */}
        <div className="max-w-xl flex-1">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Want to play all the levels?
          </h2>
          <p className="text-gray-800 text-sm md:text-base">
            Our creativity tools, interactive story-based lessons, and fun
            characters are designed to spark curiosity and motivate students to
            learn fundamental finance concepts. With every lesson, they'll take
            their first big steps toward mastering money management—without even
            realizing they're learning!
          </p>
        </div>

        {/* Right: Illustration + Button */}
        <div className="flex flex-col items-center relative flex-shrink-0">
          <img
            src="/imageForDesign/product-launch-laptop--Streamline-Freehand.png"
            alt="Rocket Laptop"
            className="w-36 md:w-44 lg:w-52"
          />

          {/* Arrow - Hidden on mobile */}
          <img
            src="/imageForDesign/arrow.png"
            alt="Arrow"
            className="hidden md:block w-16 h-12 lg:w-20 lg:h-16 absolute top-32 lg:top-40 -left-8 lg:-left-12"
          />

          <Link to="/login">
            <button className="bg-[#068F36] hover:bg-green-700 text-white font-semibold px-4 py-2 md:px-6 md:py-3 rounded-md shadow-md transition mt-4 text-sm md:text-base relative md:ml-8 lg:ml-12">
              Book your trial now! - It's Free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
