import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Module5 = ({ topicRefs }) => {
  return (
    <div
      id="5"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["5"] = el;
        }
      }}
      className="mb-10"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-indigo-800 mb-4">
            🌐 Module 5: Digital World, Real Laws
          </h1>
          <p className="text-lg text-gray-700">
            Understand how cyber laws work and how to stay safe in the digital
            world.
          </p>
        </motion.div>

        {/* Section 5.1 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
            5.1 What Is Cyber Law? 💻
          </h2>
          <p className="text-gray-700 mb-2">
            Cyber law is like internet traffic rules—it keeps people safe
            online.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Cyberbullying – saying mean or threatening things online</li>
            <li>Hacking – breaking into someone's device without permission</li>
            <li>Identity theft – pretending to be someone else online</li>
          </ul>
          <p className="text-gray-700 mt-2">
            🔒 What you do online has real-world consequences. Be kind and
            responsible.
          </p>
        </motion.div>

        {/* Section 5.2 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
            5.2 Online Misuse – And Legal Action ⚠️
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Making fake profiles</li>
            <li>Sending mean or threatening messages</li>
            <li>Sharing private content without permission</li>
            <li>Spreading lies or rumors online</li>
          </ul>
          <p className="text-gray-700 mt-4">
            🚨 These are punishable by law—even for minors.
            <br />
            <strong>Juvenile Justice Act:</strong> Helps children learn from
            mistakes instead of harsh punishment.
          </p>
        </motion.div>

        {/* Section 5.3 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
            5.3 Safe Internet Practices 🧠
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Never share OTPs, passwords, or personal info—even with friends
            </li>
            <li>Don’t click on suspicious links or files</li>
            <li>Avoid chatting with strangers online</li>
            <li>Use safe, legal websites and apps only</li>
          </ul>
          <p className="text-gray-700 mt-2">
            🤔 If it feels wrong, it probably is. Trust your instincts.
          </p>
        </motion.div>

        {/* Section 5.4 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
            5.4 Legal Tools That Help 🧾
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>IT Act, 2000:</strong> Prevents cybercrimes like fraud,
              stalking, and hacking.
            </li>
            <li>
              <strong>Juvenile Justice Act:</strong> Focuses on reforming minors
              who break laws online.
            </li>
          </ul>
        </motion.div>

        {/* Activity Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-xl"
        >
          <h3 className="text-xl font-bold text-indigo-800 mb-2">
            📝 Activity: Digital Diary Check
          </h3>
          <p className="text-gray-700 mb-2">Reflect on your online habits:</p>
          <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
            <li>How many apps or sites do you use?</li>
            <li>Do you share your passwords or personal info?</li>
            <li>List 3 steps you’ll take to stay safer online.</li>
          </ul>
          <p className="text-gray-700 mt-2">
            📌 Remember: A safe internet starts with smart users.
          </p>
        </motion.div>
      </div>
    </div>
    </div>
    
  );
};

export default Module5;
