import { motion } from "framer-motion";
import { PartyPopper, BadgeCheck, Trophy, Star } from "lucide-react";
import { RotateCcw } from "lucide-react";


const FinalSummary = ({ score, onRestart }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="text-center p-10 bg-gradient-to-br from-green-100 via-yellow-50 to-lime-100   shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-4 border-dashed border-lime-300"
  >
    <motion.h1
      className="text-5xl font-extrabold text-pink-600 mb-4 drop-shadow-lg"
      animate={{ scale: [1, 1.05, 1], rotate: [-2, 2, -2] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      🎉Well Done !
    </motion.h1>

    <motion.p
      className="text-3xl text-lime-700 mb-6 font-bold flex justify-center items-center gap-2"
      initial={{ y: -10 }}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <Trophy className="w-8 h-8 text-yellow-500 animate-bounce" />
      Total Score: <span className="text-emerald-600">{score}/15</span>
    </motion.p>

    <p className="text-lg text-gray-700 font-semibold">You've earned the badge:</p>

    <motion.h2
      className="text-4xl mt-4 font-extrabold text-yellow-500 bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 animate-pulse"
      initial={{ scale: 0.9 }}
      animate={{ scale: [0.9, 1.05, 0.9] }}
      transition={{ duration: 2.5, repeat: Infinity }}
    >
      🏅 Instagram Ad Pro
    </motion.h2>



    <motion.div
      className="mt-6 flex justify-center"
    >
      <button
        onClick={onRestart}
        className="mt-8 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-bold shadow-lg flex items-center gap-2 transition-all duration-300"
      >
        <RotateCcw className="w-5 h-5" />
        Restart Game
      </button>
    </motion.div>



    <motion.div
      className="mt-6 flex justify-center gap-4 text-yellow-400"
      animate={{ rotate: [0, 5, -5, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <Star className="w-6 h-6" />
      <BadgeCheck className="w-6 h-6" />
      <PartyPopper className="w-6 h-6" />
      <Star className="w-6 h-6" />


    </motion.div>

  </motion.div>
);

export default FinalSummary;
