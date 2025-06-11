import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHatCowboy } from "react-icons/fa6";
import { motion } from "framer-motion";

const AdCampaignerIntro = () => {
  const navigate = useNavigate();

  const fullText = "Heey Cool Creator!";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[90%] mx-auto p-3 h-screen">
      <div className="h-full rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 text-white flex items-center justify-center p-6 relative" style={{ fontFamily: "'Comic Neue', cursive" }}>
        
        {/* Avatar */}
        <div className="absolute top-6 left-6 flex items-center space-x-2">
          <FaHatCowboy className="text-3xl text-yellow-400 animate-pulse" />
          <span className="text-lg font-semibold">Digital Director</span>
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="bg-red-300 text-gray-900 bg-opacity-80 backdrop-blur-sm shadow-2xl rounded-2xl p-10 max-w-xl text-center border-2 border-yellow-500"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {displayedText} 🧢✨
          </h1>
          <p className="text-lg mb-4 leading-relaxed">
            You've just been hired as the <span className="text-blue-600 font-semibold">Digital Director</span> at <span className="text-yellow-600 font-bold">Cool Caps</span> — the coolest cap brand made just for kids and teens!
          </p>
          <p className="text-lg text-gray-900 mb-8">
            Your mission: 🎯 Launch a wild online ad campaign and get as many students aged <span className="text-teal-700 font-semibold">10–15</span> to visit your site and grab their dream cap!
          </p>

          {/* Start Button */}
          <button
            onClick={() => navigate("/ad-campaigner-game")}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl shadow-lg border-2 border-yellow-300 transition duration-300 ease-in-out transform hover:scale-105 hover:rotate-1 hover:shadow-yellow-400"
          >
            🚀 Start the Campaign!
          </button>
        </motion.div>

        {/* Decorative Text */}
        <div className="absolute top-4 right-4 text-lg text-yellow-400 italic">
          Let’s Get Cap-tivating! 🧢
        </div>
      </div>
    </div>
  );
};

export default AdCampaignerIntro;
