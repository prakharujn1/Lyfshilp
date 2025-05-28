import { motion } from "framer-motion";
import { useState } from "react";

const midSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const items = [
    {
      title: "Fundamentals of Finance",
      subtitle: "Personal finance, markets, money management",
      icon: "https://cdn-icons-png.flaticon.com/512/2920/2920298.png",
    },
    {
      title: "Computers",
      subtitle: "AI, Machine Learning, neural networks, full stack development",
      icon: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
    },
    {
      title: "Fundamentals of Law",
      subtitle: "Criminal & civil law",
      icon: "https://cdn-icons-png.flaticon.com/512/4324/4324655.png",
    },
    {
      title: "Communication Skills",
      subtitle: "Public speaking, negotiation, persuasion",
      icon: "https://cdn-icons-png.flaticon.com/512/4959/4959559.png",
    },
    {
      title: "Entrepreneurship",
      subtitle: "",
      icon: "https://cdn-icons-png.flaticon.com/512/3011/3011270.png",
    },
    {
      title: "Digital Marketing",
      subtitle: "SEO, analytics, campaigns",
      icon: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
    },
    {
      title: "Leadership & Adaptability",
      subtitle: "",
      icon: "https://cdn-icons-png.flaticon.com/512/4380/4380955.png",
    },
    {
      title: "Environmental & Sustainability Awareness",
      subtitle: "",
      icon: "https://cdn-icons-png.flaticon.com/512/3817/3817045.png",
    },
    {
      title: "Social-Emotional Learning + Physical & Mental Health",
      subtitle: "",
      icon: "https://cdn-icons-png.flaticon.com/512/3641/3641364.png",
    },
  ];

  return (
    <div className="px-4 py-10">
      {/* Sliding Subject Overview Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Beyond Textbooks: Real Skills. Real Impact.
        </h2>

        <motion.div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex gap-6 w-max"
            animate={{
              x: isHovered ? 0 : ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {[...items, ...items].map((items, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center w-[260px] h-[240px] shrink-0"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={items.icon}
                  alt={items.title}
                  className="h-20 w-20 object-contain mb-4"
                />
                <div className="flex flex-col items-center text-center">
                  <h4 className="text-lg font-semibold text-gray-800 break-words">
                    {items.title}
                  </h4>
                  <p className="text-base text-gray-600 mt-1 break-words">
                    {items.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default midSection;
