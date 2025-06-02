import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa";
import { motion } from "framer-motion";

const IntroPageAdDetective = () => {
  const navigate = useNavigate();

  const fullText = "Weelcome, Detective!";
  const [displayedText, setDisplayedText] = useState("");
  const index = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index.current));
      index.current++;
      if (index.current >= fullText.length) clearInterval(interval);
    }, 100); // speed of typing (ms per letter)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[90%] mx-auto p-3  h-screen">
      <div
        className="h-full rounded-2xl bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white flex items-center justify-center p-6 relative"
        style={{ fontFamily: "'Comic Neue', cursive" }}
      >
        {/* Agent Avatar */}
        <div className="absolute top-6 left-6 flex items-center space-x-2">
          <FaUserSecret className="text-3xl text-yellow-400 animate-pulse" />
          <span className="text-lg font-semibold">Agent 007</span>
        </div>

        {/* Mission Brief Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="bg-black bg-opacity-80 backdrop-blur-sm shadow-2xl rounded-2xl p-10 max-w-xl text-center border-2 border-yellow-500"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {displayedText}🕵️
          </h1>
          <p className="text-lg mb-4 leading-relaxed">
            Your mission:{" "}
            <span className="text-yellow-400 font-semibold">
              Spot 5 online ads
            </span>{" "}
            in your digital world. Explore platforms, track every ad — banners,
            videos, popups or posts!
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Record them in your{" "}
            <span className="italic">Ad Detective Notebook</span> and crack the
            case!
          </p>

          {/* Start Button as Folder */}
          <button
            onClick={() => navigate("/ad-detective-game")}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-xl shadow-lg border-2 border-yellow-300 transition duration-300 ease-in-out transform hover:scale-105 hover:rotate-1 hover:shadow-yellow-400"
          >
            📁 Start Mission : Should you choose to accept it
          </button>
        </motion.div>

        {/* Decorative Text */}
        <div className="absolute top-4 right-4 text-lg text-yellow-400 italic">
          Classified: Top Secret 🔐
        </div>
      </div>
    </div>
  );
};

export default IntroPageAdDetective;
