import { motion } from "framer-motion"; // Import motion from framer-motion

export default function PlatformCard({ platform, onClick, onDrop, draggedLabel }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }, // Lift and subtle shadow on hover
    tap: { scale: 0.98 }, // Slight press effect on click
  };

  const isHighlighted = platform.label === draggedLabel && draggedLabel !== null;

  // Determine a unique background gradient based on platform name for more visual variety
  const getCardBackground = (platformName) => {
    switch (platformName) {
      case "YouTube Shorts":
        return "bg-gradient-to-br from-amber-100 to-orange-200"; // Changed to a warm amber-orange gradient
      case "Instagram Stories":
        return "bg-gradient-to-br from-cyan-100 to-teal-200"; // Changed to a cool cyan-teal gradient
      case "Google Search Ads":
        return "bg-gradient-to-br from-blue-50 to-blue-100"; // Soft blue for Google
      default:
        return "bg-gradient-to-br from-white to-gray-50"; // Default fallback
    }
  };

  return (
    <motion.div
      className={`relative p-6 rounded-2xl shadow-lg cursor-pointer border-2 ${
        isHighlighted ? "border-blue-500 ring-4 ring-blue-200" : "border-transparent"
      } ${getCardBackground(platform.name)}`} // Apply dynamic background here
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      onClick={() => onClick(platform)}
      onDragOver={(e) => e.preventDefault()} // Allow dropping
      onDrop={() => onDrop(platform.name, draggedLabel)} // Handle drop event
    >
      {platform.label && ( // Display label if present
        <div className="absolute top-3 right-3 bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-1 rounded-full">
          🚩 {platform.label}
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-extrabold text-gray-800">{platform.name}</h2>
        <span className="text-4xl">{platform.emoji}</span>
      </div>

      <div className="space-y-2 text-gray-600">
        <p className="flex justify-between items-center text-sm">
          <span>👁️ Views:</span> <span className="font-semibold text-gray-700">{platform.views.toLocaleString()}</span>
        </p>
        <p className="flex justify-between items-center text-sm">
          <span>👆 Clicks:</span> <span className="font-semibold text-gray-700">{platform.clicks.toLocaleString()}</span>
        </p>
        <p className="flex justify-between items-center text-sm">
          <span>📊 CTR:</span> <span className="font-semibold text-green-600">{platform.ctr}%</span>
        </p>
        <p className="flex justify-between items-center text-sm">
          <span>💰 Sales:</span> <span className="font-semibold text-blue-600">{platform.sales.toLocaleString()}</span>
        </p>
      </div>
    </motion.div>
  );
}
