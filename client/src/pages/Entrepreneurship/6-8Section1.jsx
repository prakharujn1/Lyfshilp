import React from "react";
import { motion } from "framer-motion";

const EntrepreneurshipModule1 = ({ topicRefs }) => {
  return (
    <div
      id="1"
      ref={(el) => {
        if (topicRefs?.current) topicRefs.current["1"] = el;
      }}
      className="mb-10"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white py-16 px-6 md:px-20 text-center relative overflow-hidden">
        <motion.h1
          className="text-4xl md:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🚀 Introduction to Entrepreneurship
        </motion.h1>
        <p className="text-lg md:text-xl mt-4 opacity-90 max-w-2xl mx-auto">
          Learn how creative minds solve real-world problems by thinking differently!
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* What is Entrepreneurship */}
        <motion.div
          className="bg-white p-8 rounded-3xl shadow-xl border-l-4 border-orange-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-orange-700 mb-4">What is Entrepreneurship?</h2>
          <p className="text-gray-700 leading-relaxed">
            Entrepreneurship is the <strong>art of identifying problems</strong> and creating innovative solutions. Entrepreneurs
            launch new businesses, products, or services by turning ideas into reality. They are risk-takers, visionaries, and
            change-makers.
          </p>
        </motion.div>

        {/* Characteristics */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            { emoji: "🎨", title: "Creativity", desc: "Thinking outside the box to come up with unique solutions." },
            { emoji: "🎲", title: "Risk-taking", desc: "Taking bold steps while managing uncertainty." },
            { emoji: "💪", title: "Resilience", desc: "Bouncing back from failure and trying again." },
            { emoji: "🧑‍💼", title: "Leadership", desc: "Inspiring and guiding others to success." },
            { emoji: "🌱", title: "Adaptability", desc: "Staying flexible in changing situations." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-orange-50 p-6 rounded-xl shadow hover:shadow-lg transition-all"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="text-3xl mb-2">{item.emoji}</div>
              <h3 className="text-xl font-bold text-orange-700 mb-1">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Types of Entrepreneurs */}
        <motion.div
          className="bg-gradient-to-br from-yellow-50 to-orange-100 p-8 rounded-3xl border border-yellow-200"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-yellow-700 mb-4">Types of Entrepreneurs</h2>
          <ul className="space-y-3 text-gray-700 text-base">
            <li>💡 <strong>Innovators:</strong> Invent entirely new products or services.</li>
            <li>🕵️‍♂️ <strong>Imitators:</strong> Improve on existing ideas.</li>
            <li>🌍 <strong>Social Entrepreneurs:</strong> Solve social or environmental issues.</li>
            <li>🔄 <strong>Serial Entrepreneurs:</strong> Keep starting new ventures.</li>
          </ul>
        </motion.div>

        {/* Famous Entrepreneurs */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-indigo-400"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">Famous Entrepreneurs</h2>
          <ul className="space-y-2 text-gray-700">
            <li>🍏 Steve Jobs (Apple) – Revolutionized smartphones and personal computing.</li>
            <li>🚗🚀 Elon Musk (Tesla, SpaceX) – Electric cars and space tech visionary.</li>
            <li>🧬 Kiran Mazumdar-Shaw (Biocon) – Biotech pioneer in India.</li>
          </ul>
        </motion.div>

        {/* Everyday Entrepreneurship */}
        <motion.div
          className="bg-gradient-to-r from-green-50 to-lime-100 p-6 rounded-xl border border-green-200"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold text-green-700 mb-2">Entrepreneurship in Everyday Life 🌟</h2>
          <p className="text-gray-700">
            Entrepreneurship isn't only for big businesses! Starting a school club, organizing a cleanup, or launching a small shop are all acts of entrepreneurship.
          </p>
        </motion.div>

        {/* Final Motivation Box */}
        <motion.div
          className="text-center bg-orange-200 bg-opacity-30 rounded-3xl p-8 border border-orange-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl font-semibold text-orange-800">
            "Entrepreneurship is not just about business; it’s about <span className="underline">making a difference</span>!" 🌟
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default EntrepreneurshipModule1;
