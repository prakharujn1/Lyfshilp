// components/SurprisePopup.jsx
import { motion } from "framer-motion";

export default function SurpriseAvatar({ show, onClose }) {
  if (!show) return null;

  return (
    <motion.div
      className="fixed top-20 left-30 w-[100px] h-[100px] bg-transparent bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0, scale: 0.7 }}
    >
      <div className="bg-white p-6 rounded-lg text-center relative max-w-sm mx-auto">
        <div className="flex justify-around text-5xl">
          <span role="img" aria-label="character1">
            🐵
          </span>
          <span role="img" aria-label="character2">
            🦊
          </span>
        </div>
        <p className="mt-4 text-xl font-semibold">
          🎉 Surprise! Do save some for them!
        </p>
      </div>
    </motion.div>
  );
}
