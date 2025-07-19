import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 py-10">
      {/* ✅ Mobile View */}
      <div className="md:hidden bg-[#FFD86B] rounded-2xl p-6 flex flex-col items-center text-center space-y-4">
        <img src="/blogDesign/mushroom.svg" alt="Mushroom" className="w-24" />
        <h2 className="text-xl font-bold text-gray-900">
          Want to play all the levels?
        </h2>
        <Link to="/login">
          <button className="bg-[#068F36] hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-md shadow-md text-sm">
            Book your trial now! - It's Free
          </button>
        </Link>
      </div>

      {/* ✅ Desktop View */}
      <div className="hidden md:flex items-center justify-between bg-[#FFD86B] rounded-2xl px-8 py-6 max-w-4xl mx-auto mt-10">
        {/* Text */}
        <h2 className="text-6xl font-semibold text-gray-900">
          Want to play all the levels?
        </h2>

        {/* Right Side: Arrow + Icon + Button (vertical stack) */}
        <div className="flex items-center px-6">
          {/* Arrow */}
          <img
            src="/imageForDesign/arrow.png"
            alt="Arrow"
            className="w-10 h-12 rotate-[340deg] mt-6" // makes it look like in right SS
          />

          {/* Mushroom + Button vertically stacked */}
          <div className="flex flex-col items-center space-y-2">
            <img
              src="/blogDesign/mushroom.svg"
              alt="Mushroom"
              className="w-24"
            />
            <Link to="/login">
              <button className="bg-[#068F36] hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-md text-sm shadow-md whitespace-nowrap">
                Book Trial Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
