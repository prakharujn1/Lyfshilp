import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Module6 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-red-800 mb-4">
            ⚖️ Module 6: Courts, Justice, and You
          </h1>
          <p className="text-lg text-gray-700">
            Discover how the justice system works and how you can be part of it.
          </p>
        </motion.div>

        {/* Section 6.1 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold text-red-700 mb-2">
            6.1 What Happens in a Court? 🏛️
          </h2>
          <p className="text-gray-700 mb-2">
            A court is where disputes are settled fairly using the law. Think of
            it as a real-life drama that decides what’s right.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Judge:</strong> Like a referee who makes the final
              decision
            </li>
            <li>
              <strong>Lawyers:</strong> Speak for both sides
            </li>
            <li>
              <strong>Evidence:</strong> Facts or proofs presented
            </li>
            <li>
              <strong>Verdict:</strong> The final decision
            </li>
          </ul>
        </motion.div>

        {/* Section 6.2 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold text-red-700 mb-2">
            6.2 Types of Courts in India 🇮🇳
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>District Court:</strong> Handles local city or area cases
            </li>
            <li>
              <strong>High Court:</strong> Handles state-level cases
            </li>
            <li>
              <strong>Supreme Court:</strong> The highest court in India
            </li>
          </ul>
          <p className="text-gray-700 mt-2">
            📌 Even small problems can reach higher courts if not resolved
            early.
          </p>
        </motion.div>

        {/* Section 6.3 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold text-red-700 mb-2">
            6.3 Juvenile Justice System 👧👦
          </h2>
          <p className="text-gray-700 mb-2">
            Children who break the law aren’t treated like adults. They’re
            supported under the Juvenile Justice System which:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Focuses on reform and growth</li>
            <li>Sends minors to juvenile homes, not jail</li>
            <li>Offers counselling, education, and support</li>
          </ul>
          <p className="text-gray-700 mt-2">
            🎯 Goal: Help them become better, not bitter.
          </p>
        </motion.div>

        {/* Section 6.4 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold text-red-700 mb-2">
            6.4 You as a Future Changemaker 🌟
          </h2>
          <p className="text-gray-700 mb-2">
            You don’t need to be a lawyer to fight for justice. Legal awareness
            helps you:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Speak up against unfairness</li>
            <li>Help others understand their rights</li>
            <li>Make smart and fair choices</li>
          </ul>
          <p className="text-gray-700 mt-2">
            💡 Being legally aware = being brave and responsible.
          </p>
        </motion.div>

        {/* Activity Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-orange-50 border-l-4 border-red-500 p-6 rounded-xl"
        >
          <h3 className="text-xl font-bold text-red-800 mb-2">
            📔 Activity: Mini Justice Journal
          </h3>
          <p className="text-gray-700 mb-2">
            Think of a time something unfair happened (in school, at home, or
            online). How could it have been handled fairly—like a courtroom?
          </p>
          <p className="text-gray-700 mt-2">
            🖊️ Write it down and reflect on fairness and justice in everyday
            life.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Module6;
