import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Module3 = ({ topicRefs }) => {
  return (
    <div
      id="3"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["3"] = el;
        }
      }}
      className="mb-10"
    >
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-yellow-100 py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-pink-800 mb-4">
            🛡️ Module 3: Laws That Protect Children
          </h1>
          <p className="text-lg text-gray-700">
            Learn about your rights, how laws protect you, and what to do if you
            ever feel unsafe.
          </p>
        </motion.div>

        {/* Section 3.1 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold text-pink-700 mb-2">
            3.1 What Are Child Rights? 👶
          </h2>
          <p className="text-gray-700 mb-2">
            Child rights are special freedoms and protections every child
            deserves—just for being a child!
          </p>
          <p className="text-gray-700 mb-2">
            You have the right to study, be safe, play, and grow up healthy and
            happy. 🎓⚽🛡️
          </p>
          <p className="text-gray-700">
            <strong>UNCRC:</strong> The United Nations Convention on the Rights
            of the Child is a promise made by many countries—including India—to
            keep children safe and happy. 🤝🌏
          </p>
          <img
            src="https://www.voicesofyouth.org/sites/voy/files/images/2020-11/img_20200208_102313-2_0.jpg"
            alt="Child Rights"
            className="w-full max-w-md mx-auto mt-4 rounded-xl"
          />
        </motion.div>

        {/* Section 3.2 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold text-pink-700 mb-2">
            3.2 Key Child Protection Laws 📚⚖️
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>
              <strong>Right to Education Act (RTE), 2009:</strong> All kids aged
              6–14 must get free and compulsory schooling. 🏫
            </li>
            <li>
              <strong>Child Labour Act:</strong> No child under 14 can work in
              hazardous jobs like factories. You should be studying, not
              working! 🚫👷‍♂️
            </li>
            <li>
              <strong>POCSO Act (2012):</strong> Full form: Protection of
              Children from Sexual Offences. This law protects you from unsafe
              touch and abuse. If someone hurts you, the law can punish them. 🛑
            </li>
          </ul>
          <img
            src="https://www.actionaidindia.org/wp-content/uploads/2021/01/Child-Protection-Law-Inside-Image.jpg"
            alt="Child Protection Laws"
            className="w-full max-w-md mx-auto mt-4 rounded-xl"
          />
        </motion.div>

        {/* Section 3.3 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold text-pink-700 mb-2">
            3.3 When to Speak Up 📢
          </h2>
          <p className="text-gray-700 mb-2">If someone...</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Bullies you 😠</li>
            <li>Touches you in a way that makes you uncomfortable 🙅‍♀️</li>
            <li>Forces you to work 😓</li>
            <li>Threatens or hurts you 💢</li>
          </ul>
          <p className="text-gray-700 mt-4">👉 You should SPEAK UP! Talk to:</p>
          <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
            <li>
              A trusted adult – like your parent, teacher, or older sibling
            </li>
            <li>
              Or call <strong>Childline 1098</strong> – a FREE helpline for
              children in trouble. ☎️
            </li>
          </ul>
          <img
            src="https://www.mangaloretoday.com/contentfiles/2016/aug/childline%2027%20aug%202016%201.jpg"
            alt="Speak Up"
            className="w-full max-w-md mx-auto mt-4 rounded-xl"
          />
        </motion.div>

        {/* Activity Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-yellow-50 border-l-4 border-pink-500 p-6 rounded-xl"
        >
          <h3 className="text-xl font-bold text-pink-800 mb-2">
            🏠 Activity: Safety Checklist at Home
          </h3>
          <p className="text-gray-700 mb-2">
            Make a checklist of how your home ensures safety for children:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
            <li>No sharp tools or cleaning liquids within reach</li>
            <li>Emergency numbers written down</li>
            <li>Knowing who to call if something bad happens</li>
          </ul>
          <p className="text-gray-700 mt-2">
            ✅ Spot any missing points? Add them to make your home even safer!
          </p>
        </motion.div>
      </div>
    </div>
    </div>
    
  );
};

export default Module3;
