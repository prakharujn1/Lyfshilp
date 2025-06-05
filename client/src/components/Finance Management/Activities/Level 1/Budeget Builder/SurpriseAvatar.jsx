// components/SurprisePopup.jsx
import { motion } from "framer-motion";

export default function SurpriseAvatar({ show, onClose }) {
  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 z-50"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, scale: 0.7 }}
    >
      <div className="bg-white p-4 rounded-lg text-center w-[90%] max-w-xs mx-auto shadow-lg">
        <div className="flex justify-around text-4xl sm:text-5xl">
          <span role="img" aria-label="character1">
            🐵
          </span>
          <span role="img" aria-label="character2">
            🦊
          </span>
        </div>
        <p className="mt-4 text-base sm:text-lg font-semibold">
          🎉 Surprise! Do save some for them!
        </p>
      </div>
    </motion.div>
  );
}
