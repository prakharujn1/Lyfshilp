import React from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Smile, Star, Coins, ArrowLeft } from "lucide-react";

const PaymentRequired = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300 flex items-center justify-center px-4 py-8">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl p-8 sm:p-12 border-4 border-green-400 relative">
        {/* Sparkle Decorations */}
        <div className="absolute top-4 left-4 text-yellow-400 text-3xl animate-ping">✨</div>
        <div className="absolute top-6 right-6 text-pink-400 text-3xl animate-bounce">🌈</div>

        <div className="text-center">
          <div className="text-5xl mb-4">🔒</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-green-800 mb-2">
            Uh-oh! This Challenge is Locked
          </h1>
          <p className="text-green-700 text-sm sm:text-base mb-6">
            To keep learning and playing more exciting games, you'll need to unlock this level.
          </p>

          <div className="bg-green-50 border-2 border-dashed border-green-300 p-4 rounded-xl text-green-800 text-sm sm:text-base font-medium mb-6">
            ✨ Unlock more fun, earn cool badges, and grow your skills faster!
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="bg-yellow-300 hover:bg-yellow-400 text-yellow-900 font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-md hover:scale-105 transition-transform"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>

            <button
              onClick={() => navigate("/pricing")}
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
            >
              <Coins size={18} />
              Unlock Now
            </button>
          </div>

          <div className="mt-8 text-sm text-green-600">
            <Star className="inline-block text-yellow-400 mr-1" size={16} />
            Fun fact: Kids who play more learning games boost their brains! 🧠🎉
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentRequired;
