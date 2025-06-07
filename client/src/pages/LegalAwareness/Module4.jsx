import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Module4 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            🚦 Module 4: Law in Daily Life – You’re Already a Legal Expert!
          </h1>
          <p className="text-lg text-gray-700">
            Discover how laws are already part of your everyday life—from
            traffic safety to shopping smart!
          </p>
        </motion.div>

        {/* Section 4.1 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            4.1 Traffic Rules and You 🚘
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Always wear a helmet on two-wheelers 🪖</li>
            <li>Use zebra crossings to cross the road ⚫⚪</li>
            <li>Obey traffic lights 🚦</li>
            <li>
              No underage driving – Minimum age for gearless scooters is 16
              (with license) 📛
            </li>
            <li>Seat belts for everyone – even in the back! 🪢</li>
            <li>Give way to ambulances and fire trucks 🚑🚒</li>
            <li>Don't honk unnecessarily – noise pollution is real! 🔇</li>
            <li>Respect red lights – no jumping signals! ❌</li>
            <li>Wear bright clothes at night while walking or cycling 🌟</li>
          </ul>
          <p className="text-gray-700 mt-2">
            Breaking these rules can cause accidents, injuries, or even fines
            (money penalties).
          </p>
          <img
            src="https://media.istockphoto.com/id/641670288/photo/many-road-signs.jpg?s=612x612&w=0&k=20&c=LO5-J3zo5cJj_JoG7f-I1yWvVNI9Lo896csqRjepHHM="
            alt="Traffic Safety"
            className="w-full max-w-md mx-auto mt-4 rounded-xl"
          />
        </motion.div>

        {/* Section 4.2 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            4.2 Consumer Rights 🛍️
          </h2>
          <p className="text-gray-700 mb-2">
            Suppose you buy a juice packet and it’s expired—what can you do? You
            have rights!
          </p>
          <p className="text-gray-700">
            Under the <strong>Consumer Protection Act</strong>, you can ask for:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Refund 💵</li>
            <li>Replacement 🔁</li>
            <li>Justice if it’s fake or damaged ⚖️</li>
          </ul>
          <p className="text-gray-700 mt-2">
            <strong>Consumer</strong> = anyone who buys goods or services. Your
            rights include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Right to Safety – Safe products only 🧴</li>
            <li>
              Right to Information – Ingredients, price, expiry must be shown 📦
            </li>
            <li>Right to Choose – No pressure to buy one brand 🚫🛒</li>
            <li>
              Right to Complain – Get help if you receive a faulty item 🧾
            </li>
          </ul>
          <img
            src="https://www.thelegalyoungster.com/wp-content/uploads/2024/05/Consumer-Rights-1024x806-1.png"
            alt="Consumer Rights"
            className="w-full max-w-md mx-auto mt-4 rounded-xl"
          />
        </motion.div>

        {/* Section 4.3 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            4.3 Environment Laws 🌳
          </h2>
          <p className="text-gray-700">
            These laws protect nature—and our future:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>
              <strong>Air Act:</strong> Factories must control harmful smoke 🌫️
            </li>
            <li>
              <strong>Water Act:</strong> No dumping waste in rivers 🚱
            </li>
            <li>
              <strong>Wildlife Protection Act:</strong> No hunting endangered
              animals 🐘
            </li>
            <li>
              <strong>Plastic Ban:</strong> Many states ban single-use plastics
              🚯
            </li>
          </ul>
          <p className="text-gray-700 mt-2">
            🌱 Every small act—like not littering or saving water—helps the
            planet.
          </p>
          <img
            src="https://karnavatiuniversity.edu.in/wp-content/uploads/2025/05/The-Growing-Importance-of-Environmental-Law-in-Todays-World.webp"
            alt="Environment Laws"
            className="w-full max-w-md mx-auto mt-4 rounded-xl"
          />
        </motion.div>

        {/* FIR Info */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl"
        >
          <h3 className="text-xl font-bold text-green-800 mb-2">
            👮 Did You Know?
          </h3>
          <p className="text-gray-700">
            The police are here to help and protect! When something serious
            happens (like theft), you can file an <strong>FIR</strong> – First
            Information Report – at the police station. 🚓
          </p>
          <p className="text-gray-700 mt-2">
            🧠 Fun Fact: Police must register your FIR in serious matters—they
            can’t refuse!
          </p>
        </motion.div>

        {/* Activity Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-blue-50 border-l-4 border-green-500 p-6 rounded-xl"
        >
          <h3 className="text-xl font-bold text-green-800 mb-2">
            🧠 Activity: "If I Were the Lawmaker" Challenge
          </h3>
          <p className="text-gray-700 mb-2">
            Create 3 simple laws that would help at home, school, or your city.
            For each, include:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
            <li>Law name 📜</li>
            <li>Why it's needed 🤔</li>
            <li>Punishment if broken ⚠️</li>
          </ul>
          <p className="text-gray-700 mt-2">
            Have fun being a mini lawmaker! 🧑‍⚖️
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Module4;
