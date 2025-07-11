import React from "react";
import { Link } from "react-router-dom";

const CTA2 = () => {
  return (
    <div className="max-w-7xl mt-16 mx-auto px-4 py-10">
      {/* Parent container now has relative */}
      <div className="relative bg-[#FFD86B] rounded-2xl p-4 md:p-6 lg:p-10 flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-6">
        {/* Left: Text Section */}
        <div className="max-w-xl flex-1 text-center md:text-left">
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
        <div className="flex flex-col items-center flex-shrink-0 relative">
          {/* Laptop */}
          <div className="relative mb-4 md:mb-6">
            <img
              src="/imageForDesign/send-email-fly--Streamline-Freehand.png"
              alt="Rocket Laptop"
              className="w-36 md:w-44 lg:w-52"
            />

            {/* Arrow coming from left bottom corner of laptop */}
            <img
              src="/imageForDesign/arrow.png"
              alt="Arrow"
              className="hidden md:block w-10 h-10 lg:w-14 lg:h-14 absolute -bottom-2 -left-12 z-10 rotate-45"
            />
          </div>

          <Link to="/login">
            <button className="bg-[#068F36] -mt-2 hover:bg-green-700 text-white font-semibold px-4 py-2 md:px-6 md:py-3 rounded-md shadow-md transition text-base md:text-lg">
              Book your trial now! - It's Free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA2;
