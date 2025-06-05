import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const termsIntro = [
  "Welcome to EduManiax!",
  "These Terms and Conditions (“Terms”) govern your access to and use of our website, mobile applications, games, content, and services (collectively referred to as the “Platform”). By accessing or using EduManiax, you agree to comply with and be bound by these Terms.",
  "If you do not agree to these Terms, please do not use our services.",
];

const termsSections = [
  {
    title: "1. Eligibility",
    content: [
      "EduManiax is designed primarily for children and young learners, but must be accessed under adult supervision or consent where applicable. By registering or using the Platform:",
      "You confirm that you are either above the age of majority or using the platform under parental/guardian consent.",
      "You agree to provide accurate and complete information during registration.",
    ],
  },
  {
    title: "2. User Accounts",
    content: [
      "You must create an account to access certain features.",
      "You are responsible for maintaining the confidentiality of your login credentials.",
      "You agree to immediately notify us of any unauthorized use or breach of your account.",
      "EduManiax reserves the right to suspend or terminate accounts that violate these Terms.",
    ],
  },
  {
    title: "3. Use of the Platform",
    content: [
      "Not to upload or transmit harmful, offensive, or inappropriate content.",
      "Not to hack, disrupt, or tamper with the platform’s operations.",
      "Not to engage in data mining, scraping, or reverse-engineering of the platform.",
      "To use the platform solely for personal, non-commercial learning or entertainment purposes.",
    ],
  },
  {
    title: "4. Subscription and Payments",
    content: [
      "Some features on EduManiax may be free, while others require payment.",
      "Subscription fees (if applicable) are clearly stated and subject to change with prior notice.",
      "You agree to our billing policies, which may include auto-renewals unless canceled before the renewal date.",
      "Refund policies, if applicable, will be disclosed at the time of purchase.",
    ],
  },
  {
    title: "5. Intellectual Property",
    content: [
      "All content, including games, lessons, graphics, logos, sounds, and videos on EduManiax is the intellectual property of EduManiax or its content partners.",
      "You may not reproduce, copy, or distribute any part of the content without express permission.",
      "Use of content is limited to personal educational and recreational purposes.",
    ],
  },
  {
    title: "6. User-Generated Content",
    content: [
      "You retain ownership of your content, but grant EduManiax a worldwide, royalty-free license to use, modify, and display it in connection with the platform.",
      "You are solely responsible for your submissions and their legality.",
    ],
  },
  {
    title: "7. Termination",
    content: [
      "We reserve the right to suspend or terminate your access to the platform without notice for violations of these Terms.",
      "You may terminate your account at any time, after which your data will be handled in accordance with our Privacy Policy.",
    ],
  },
  {
    title: "8. Disclaimers",
    content: [
      "EduManiax is provided on an “as-is” and “as-available” basis.",
      "We do not guarantee uninterrupted service, error-free performance, or content accuracy.",
      "We are not liable for losses due to use or inability to use the platform.",
    ],
  },
  {
    title: "9. Limitation of Liability",
    content: [
      "EduManiax will not be liable for indirect, incidental, or consequential damages, data loss, or device damage resulting from platform use.",
    ],
  },
  {
    title: "10. Governing Law",
    content: [
      "These Terms are governed by the laws of India.",
      "Disputes will be resolved in the courts of New Delhi, India.",
    ],
  },
  {
    title: "11. Changes to the Terms",
    content: [
      "We may update these Terms periodically and notify users of significant changes.",
      "Continued use of the platform constitutes acceptance of the updated Terms.",
    ],
  },
];

export default function TermsPageComponent() {
  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10 text-gray-800">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 text-center text-indigo-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Terms and Conditions for EduManiax
      </motion.h1>

      <p className="text-center text-sm text-gray-500 mb-6">
        Effective Date: June 5, 2025
      </p>

      {termsIntro.map((para, index) => (
        <motion.p
          key={index}
          className="text-base mb-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          custom={index}
        >
          {para}
        </motion.p>
      ))}

      {termsSections.map((section, i) => (
        <motion.div
          key={section.title}
          className="mb-10"
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-indigo-600 mb-3">
            {section.title}
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-base text-gray-700">
            {section.content.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
