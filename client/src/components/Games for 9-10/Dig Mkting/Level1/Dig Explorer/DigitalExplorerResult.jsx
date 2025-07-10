import React, { useState, useEffect, useRef } from "react";
import {
  Star,
  Trophy,
  Target,
  ShoppingCart,
  Leaf,
  ThumbsUp,
  X,
  Sparkles,
  Phone,
  Play,
  Edit3,
} from "lucide-react";
import { useDM } from "@/contexts/DMContext";

import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useLocation, useNavigate } from "react-router-dom";

const DigitalExplorerResult = () => {
  const { completeDMChallenge } = useDM();
  const location = useLocation();
  const scores = location.state ? location.state : {};

  const getTotalScore = () => scores.matching + scores.flow + scores.creative;

  const total = getTotalScore();
  const passed = total >= 7;

  const badges = [];
  if (scores.matching === 3)
    badges.push("🎖️ Social Sleuth Badge (Perfect persona match)");
  if (scores.flow === 3)
    badges.push("🎖️ Glow Campaigner Badge (Flawless campaign flow)");
  if (scores.creative === 5)
    badges.push("🏆 Trendsetter Trophy (Creative Reel selected by teacher)");

  console.log(scores);
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    setTimeout(() => {
      navigate("/digital-explorer");
    }, 500);
  };

  const canvasRef = useRef(null);

  useEffect(() => {
    if (passed) {
      completeDMChallenge(0,0);
    }
  }, [passed]); 

  useEffect(() => {
    const myCanvas = canvasRef.current;
    const myConfetti = confetti.create(myCanvas, {
      resize: true,
      useWorker: true,
    });

    const end = Date.now() + 3 * 1000;
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      myConfetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 }, // left of container
        colors,
      });

      myConfetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 }, // right of container
        colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  }, []);

  return (
    <div
      className="w-[90%] mx-auto p-5 max-h-screen "
      style={{ fontFamily: "'Comic Neue', cursive" }}
    >
      <div className="w-full  rounded-2xl relative shadow-2xl flex flex-col justify-center items-center bg-gradient-to-br from-pink-200 to-yellow-100 text-center p-6">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        />
        <h1 className="text-xl md:text-3xl lg:text-5xl font-extrabold text-purple-700 mb-4 animate-bounce">
          🎉 Mission Complete! 🎉
        </h1>

        <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6">
          <div className="bg-white text-center rounded-lg p-2 md:p-4">
            <div className="text-xl   lg:text-2xl font-bold text-purple-600">
              {scores.matching}/3
            </div>
            <div className="text-sm text-gray-600">Persona Match</div>
          </div>
          <div className="bg-white rounded-lg p-2 md:p-4">
            <div className="text-xl   lg:text-2xl font-bold text-blue-600">
              {scores.flow}/3
            </div>
            <div className="text-sm text-gray-600  ">Campaign Flow</div>
          </div>
          <div className="bg-white rounded-lg p-2 md:p-4">
            <div className="text-xl   lg:text-2xl font-bold text-green-600">
              {scores.creative}/5
            </div>
            <div className="text-sm text-center text-gray-600">Creativity</div>
          </div>
        </div>

        <div className="text-3xl font-bold text-purple-600 mb-2">
          Total Score: {getTotalScore()}/11
        </div>

        <div
          className={`text-md md:text-xl font-semibold mb-6 ${passed ? "text-green-700" : "text-red-500"
            }`}
        >
          {passed
            ? "✅ Pass Score: 7 — Well Done!"
            : "❌ Below Pass Score — Try Again!"}
        </div>

        {badges.length > 0 && (
          <div className="text-left bg-white p-4 rounded-lg shadow-md w-full max-w-xl mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-yellow-600 mb-2">
              🏅 Bonus Achievements:
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              {badges.map((badge, idx) => (
                <li key={idx}>{badge}</li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={handlePlayAgain}
          className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg"
        >
          Play Again 🔁
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-r relative from-purple-100 to-pink-100 rounded-xl p-6 text-center">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />
      <h3 className="text-2xl font-bold text-purple-600 mb-4">
        🎉 Mission Complete!
      </h3>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4">
          <div className="text-2xl font-bold text-purple-600">
            {scores.matching}/3
          </div>
          <div className="text-sm text-gray-600">Persona Match</div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="text-2xl font-bold text-blue-600">
            {scores.flow}/3
          </div>
          <div className="text-sm text-gray-600">Campaign Flow</div>
        </div>
        <div className="bg-white rounded-lg p-4">
          <div className="text-2xl font-bold text-green-600">
            {scores.creative}/5
          </div>
          <div className="text-sm text-gray-600">Creativity</div>
        </div>
      </div>

      <div className="text-3xl font-bold text-purple-600 mb-4">
        Total Score: {getTotalScore()}/11
      </div>

      {getTotalScore() >= 7 && (
        <div className="bg-yellow-100 rounded-lg p-4 mb-4">
          <Trophy className="mx-auto text-yellow-600 mb-2" size={32} />
          <p className="font-bold text-yellow-800">
            🏆 Congratulations! You passed!
          </p>
        </div>
      )}

      <div className="flex justify-center gap-4">
        <button
          onClick={handlePlayAgain}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transform transition-all duration-300 hover:scale-105"
        >
          Play Again! 🎮
        </button>
      </div>
    </div>
  );
};

export default DigitalExplorerResult;
