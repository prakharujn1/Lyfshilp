import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Module1 = ({ topicRefs }) => {
  return (
    <div
      id="1"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["1"] = el;
        }
      }}
      className="mb-10"
    >
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-blue-100 py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            📘 Module 1: Understanding Law – The Invisible Rulebook
          </h1>
          <p className="text-lg text-gray-700">
            Let’s explore why laws are important—and how they affect your
            everyday life!
          </p>
        </motion.div>

        {/* Section 1.1 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            1.1 What Is Law? 👩‍⚖️
          </h2>
          <p className="text-gray-700 mb-2">
            Laws are like super-important rules made by the government. 🏛️
          </p>
          <p className="text-gray-700 mb-2">
            They apply to everyone—yes, even to leaders, police officers, and
            YOU!
          </p>
          <p className="text-gray-700">
            🧠 <strong>Difference between rules and laws:</strong> Your school
            or parents can make rules (like “no phones in class”), but only the
            government can make laws. Break a rule and you might lose
            playtime—break a law, and there could be serious consequences!
          </p>
          <img
            src="https://images.pexels.com/photos/8731039/pexels-photo-8731039.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="What is Law"
            className="w-full max-w-md h-64 object-contain mx-auto mt-4 rounded-2xl"
          />
        </motion.div>

        {/* Section 1.2 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            1.2 Why Do We Need Laws? ⚖️
          </h2>
          <p className="text-gray-700 mb-2">
            Imagine playing football with no referee... total chaos, right? ⚽
          </p>
          <p className="text-gray-700">
            That’s what life would be like without laws. Laws help:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Protect your rights 🙋‍♀️</li>
            <li>Keep everyone safe 👮‍♂️</li>
            <li>Solve problems fairly 🤝</li>
          </ul>
          <img
            src="https://img.freepik.com/free-vector/justice-concept-illustration_114360-4708.jpg"
            alt="Need for laws"
            className="w-full max-w-md mx-auto mt-4 rounded-xl"
          />
        </motion.div>

        {/* Section 1.3 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            1.3 What If Laws Didn’t Exist? 😬
          </h2>
          <p className="text-gray-700 mb-2">No laws = total mess.</p>
          <p className="text-gray-700">Think about it:</p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>People driving on any side of the road 🛣️</li>
            <li>Stealing without punishment 🥷</li>
            <li>Fights with no one to stop them 🤕</li>
          </ul>
          <p className="text-gray-700 mt-2">
            That’s why laws are like traffic lights—they guide us and keep
            everyone safe.
          </p>
          <img
            src="https://media.istockphoto.com/id/1329704977/photo/focus-on-judge-gavel-unrecognizable-judge-busy-writing-verdict-or-making-notes-from-the-book.webp?a=1&b=1&s=612x612&w=0&k=20&c=EjpPFe-Kn2kvnnAXnE8438Ai3IiPO0yR2scs_PCbBFk="
            alt="Chaos without laws"
            className="w-full max-w-md mx-auto mt-4 rounded-xl"
          />
        </motion.div>

        {/* Activity Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-xl"
        >
          <h3 className="text-xl font-bold text-blue-800 mb-2">
            📝 Activity: “Rules Around Me” Journal
          </h3>
          <p className="text-gray-700 mb-2">
            Write down 3 rules you follow at:
          </p>
          <ul className="list-disc list-inside text-gray-700 ml-4">
            <li>🏠 Home</li>
            <li>🏫 School</li>
            <li>🌍 In public</li>
          </ul>
          <p className="text-gray-700 mt-2">
            Now reflect: Why are these rules important? What would happen if
            they didn’t exist?
          </p>
        </motion.div>
      </div>
    </div>
    </div>
    
  );
};

export default Module1;
