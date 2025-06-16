import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Trophy, Star, Sparkles, Zap, Heart } from "lucide-react"; // or your preferred icons
import { motion } from "framer-motion";

const BrandVoiceResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    scores = {},
    passed = false,
    finalScore = 0,
    platforms = [],
  } = location.state || {};

  const resetGame = () => {
    setTimeout(() => {
      navigate("/brand-voice");
    }, 500); // Or wherever your game starts
  };

  return (
    <div
      className="w-full px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8 min-h-[80vh] relative "
      style={{ fontFamily: "'Comic Neue', cursive" }}
    >
      {/* Animated background shapes - responsive sizes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-4 sm:top-10 left-4 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-pink-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-8 sm:top-20 right-4 sm:right-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-12 sm:bottom-20 left-4 sm:left-20 w-14 h-14 sm:w-18 sm:h-18 lg:w-24 lg:h-24 bg-purple-300 rounded-full opacity-20 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 w-12 h-12 sm:w-14 sm:h-14 lg:w-18 lg:h-18 bg-green-300 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="w-full h-full mx-auto bg-gradient-to-br from-pink-400 via-purple-500  to-cyan-400 p-3 sm:p-4 lg:p-6 flex items-center justify-center relative rounded-2xl lg:rounded-3xl">
        {/* Sparkle effects - responsive positioning */}
        <Sparkles className="absolute top-4 sm:top-8 left-4 sm:left-8 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-yellow-300 animate-pulse" />
        <Sparkles className="absolute top-6 sm:top-12 right-6 sm:right-12 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-pink-300 animate-bounce" />
        <Sparkles
          className="absolute bottom-8 sm:bottom-16 left-8 sm:left-16 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-cyan-300 animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="w-full max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl sm:rounded-2xl lg:rounded-[2rem] shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 text-center border-2 sm:border-4 border-yellow-300 relative overflow-hidden transform hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300">
            {/* Confetti-like decorative elements - responsive sizes */}
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-3 h-3 sm:w-4 sm:h-4 bg-red-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute top-4 sm:top-8 right-3 sm:right-6 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full opacity-60 animate-bounce"></div>
            <div
              className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-yellow-400 rounded-full opacity-60 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-3 h-3 sm:w-4 sm:h-4 bg-purple-400 rounded-full opacity-60 animate-bounce"
              style={{ animationDelay: "1s" }}
            ></div>

            <div className="mb-6 sm:mb-8">
              {passed ? (
                <div className="animate-bounce">
                  <div className="relative mb-3 sm:mb-4">
                    <Trophy className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-yellow-500 mx-auto drop-shadow-lg" />
                    <Heart className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-red-400 animate-pulse" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-3 sm:mb-4 transform hover:scale-110 transition-transform">
                    Congratulations! 🎉
                  </h2>
                  <p className="text-lg sm:text-xl lg:text-2xl text-purple-700 font-bold animate-pulse">
                    You're a GlowPop Brand Voice Champion!
                  </p>
                </div>
              ) : (
                <div>
                  <div className="relative mb-3 sm:mb-4">
                    <Star className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-blue-500 mx-auto drop-shadow-lg" />
                    <Zap className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-yellow-400 animate-bounce" />
                  </div>
                  <motion.h2
                    initial={{ opacity: 0.1, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-3 sm:mb-4 transform hover:scale-110 transition-transform"
                  >
                    Good Try! 💪
                  </motion.h2>
                  <p className="text-lg sm:text-xl lg:text-2xl text-orange-600 font-bold animate-bounce">
                    Keep practicing to become a brand voice expert!
                  </p>
                </div>
              )}
            </div>

            <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-purple-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
                Your Score Breakdown:
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {platforms.map((platform, index) => (
                  <div
                    key={platform.id}
                    className="flex justify-between items-center bg-white rounded-lg p-2 sm:p-3 shadow-sm hover:shadow-md hover:bg-gradient-to-r hover:from-yellow-50 hover:to-pink-50 transition-all duration-300 transform hover:scale-[1.02]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-gray-700 font-medium text-sm sm:text-base flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          platform.id === "instagram"
                            ? "bg-pink-400"
                            : platform.id === "tiktok"
                            ? "bg-purple-400"
                            : "bg-blue-400"
                        }`}
                      ></div>
                      {platform.name}:
                    </span>
                    <span className="font-bold text-base sm:text-lg bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      {scores[platform.id] || 0}/5 points
                    </span>
                  </div>
                ))}
                <div className="flex justify-between items-center bg-white rounded-lg p-2 sm:p-3 shadow-sm hover:shadow-md hover:bg-gradient-to-r hover:from-yellow-50 hover:to-pink-50 transition-all duration-300 transform hover:scale-[1.02]">
                  <span className="text-gray-700 font-medium text-sm sm:text-base flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                    Caption Writing:
                  </span>
                  <span className="font-bold text-base sm:text-lg bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    {scores.caption || 0}/3 points
                  </span>
                </div>
                <div className="flex justify-between items-center border-t-2 border-dashed border-purple-300 pt-2 sm:pt-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-2 sm:p-3 hover:shadow-md transition-all duration-300">
                  <span className="text-gray-700 font-medium text-sm sm:text-base flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    Tone Match Bonus:
                  </span>
                  <span className="font-bold text-base sm:text-lg bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    {(() => {
                      const completedPlatforms = platforms.filter(
                        (platform) => scores[platform.id] !== undefined
                      ).length;
                      const chatScore = platforms.reduce(
                        (acc, platform) => acc + (scores[platform.id] || 0),
                        0
                      );
                      const avgToneScore =
                        completedPlatforms > 0
                          ? chatScore / completedPlatforms
                          : 0;
                      return completedPlatforms === 3 && avgToneScore >= 3
                        ? 5
                        : 0;
                    })()}
                    /5 points
                  </span>
                </div>
                <div className="flex justify-between items-center text-lg sm:text-xl font-bold border-t-4 border-rainbow pt-3 sm:pt-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <span className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                    Total Score:
                  </span>
                  <span
                    className={`text-xl sm:text-2xl ${
                      passed
                        ? "bg-gradient-to-r from-green-500 to-emerald-600"
                        : "bg-gradient-to-r from-orange-500 to-red-500"
                    } bg-clip-text text-transparent animate-pulse`}
                  >
                    {finalScore}/23 points
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={resetGame}
                className="flex-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-lg sm:text-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white/20 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Play Again! 🔄
                  <Heart className="w-5 h-5 group-hover:animate-bounce" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandVoiceResult;
