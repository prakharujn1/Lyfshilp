import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Module2 = () => {
  return (
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
            📘 Module 2: India’s Constitution and Your Role in It
          </h1>
          <p className="text-lg text-gray-700">
            Discover what makes India’s Constitution special—and how it empowers
            YOU!
          </p>
        </motion.div>

        {/* Section 2.1 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            2.1 What Is the Constitution? 📜
          </h2>
          <p className="text-gray-700 mb-2">
            The Constitution of India is the supreme law book. 📘
          </p>
          <p className="text-gray-700 mb-2">
            It tells how the country should run and how people should be
            treated.
          </p>
          <p className="text-gray-700">
            It was written by the Constituent Assembly, and Dr. B.R.
            Ambedkar—often called the Father of the Indian Constitution—was the
            Chairman of the Drafting Committee. 👨‍⚖️
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Constitution_of_India.jpg"
            alt="Indian Constitution"
            className="w-full max-w-md mx-auto mt-4 rounded-xl"
          />
        </motion.div>

        {/* Section 2.2 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            2.2 Fundamental Rights – Your Superpowers 💪
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Right to Equality:</strong> No unfair treatment based on
              religion, caste, gender, or birthplace. ⚖️
            </li>
            <li>
              <strong>Right to Freedom:</strong> Speak, write, move, and choose
              your job freely (without harming others). 🗣️
            </li>
            <li>
              <strong>Right Against Exploitation:</strong> No child labour or
              human trafficking. ❌👶
            </li>
            <li>
              <strong>Right to Freedom of Religion:</strong> Follow any
              religion—or none at all. 🛐
            </li>
            <li>
              <strong>Cultural and Educational Rights:</strong> Learn in your
              language and preserve your culture. 📚
            </li>
            <li>
              <strong>Right to Constitutional Remedies:</strong> Go to court if
              your rights are violated. 🛡️
            </li>
            <li>
              <strong>Right to Education (RTE):</strong> Free schooling for
              children aged 6–14. 🏫
            </li>
          </ul>
          <img
            src="https://images.unsplash.com/photo-1629753908080-e8551ac57b8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVuZGFtZW50YWwlMjByaWdodHN8ZW58MHx8MHx8fDA%3D"
            alt="Fundamental Rights"
            className="w-full max-w-md mx-auto mt-4 rounded-xl"
          />
        </motion.div>

        {/* Section 2.3 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            2.3 Fundamental Duties – Your Responsibilities 🙋‍♂️
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Respect the Constitution, flag, and anthem.</li>
            <li>Be proud of India’s freedom and values.</li>
            <li>Stand united and help in emergencies.</li>
            <li>Promote peace and harmony. 🤝</li>
            <li>Protect India’s heritage and culture. 🏛️</li>
            <li>Save nature—forests, water, animals. 🌳</li>
            <li>Think logically and ask questions. 🔬</li>
            <li>Take care of public property. 🏢</li>
            <li>Try your best in studies, sports, and everything else! 🏆</li>
          </ul>
          <img
            src="https://openclipart.org/download/309647/1541399546.svg"
            alt="Fundamental Duties"
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
            🎨 Activity: “My Rights, My Voice” Poster
          </h3>
          <p className="text-gray-700 mb-2">
            Design a poster showing one right you value most—like freedom or
            education.
          </p>
          <p className="text-gray-700">
            Use colors, drawings, and slogans to explain how you use or protect
            this right in real life.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Module2;
