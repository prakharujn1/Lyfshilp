import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, ChevronRight } from "lucide-react";

import UserAccountIcon from "../components/icon/UserAccountIcon.jsx";
import SubscriptionIcon from "../components/icon/SubscriptionIcon.jsx";
import FileTextIcon from "../components/icon/FileTextIcon.jsx";
import ClockIcon from "../components/icon/ClockIcon.jsx";
import AlertIcon from "../components/icon/AlertIcon.jsx";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const sectionIcons = {
  "General Refund Terms": FileTextIcon,
  "Refund Amount": SubscriptionIcon,
  "Processing Time": ClockIcon,
  "Non-Refundable Situations": AlertIcon,
  "Contact for Refunds": UserAccountIcon,
};

const termsSections = [
  {
    id: "general-terms",
    title: "General Refund Terms",
    subtitle: "Understanding our refund policy",
    content: [
      "Refunds will be provided only for eligible subscription-based or one-time purchase services.",
      "Refund requests must be raised within 14 days of the original payment date.",
      "Services already availed or sessions already conducted are non-refundable.",
      "All refund requests must be sent to support@edumaniax.com with relevant details (transaction ID, reason for refund, and registered user email).",
    ],
  },
  {
    id: "refund-amount",
    title: "Refund Amount",
    subtitle: "How refunds are calculated",
    content: [
      "EduManiax will deduct 10% of the total paid amount as a non-refundable component representing Goods and Services Tax (GST) that has already been paid by us as a registered service provider.",
      "The remaining 90% of the paid amount will be refunded to your original payment method after verification of the claim.",
    ],
  },
  {
    id: "processing-time",
    title: "Processing Time",
    subtitle: "When to expect your refund",
    content: [
      "Refunds will be processed within 7 to 10 business days from the date of approval.",
      "The actual refund time may vary depending on your bank or payment provider.",
    ],
  },
  {
    id: "non-refundable",
    title: "Non-Refundable Situations",
    subtitle: "Cases where refunds are not applicable",
    content: [
      "If services or digital content have already been accessed or used.",
      "If the request is made after 14 days from the purchase.",
      "If any policy violation or misuse of platform services is detected.",
      "If payment was made under a non-refundable promotional or discounted offer.",
    ],
  },
  {
    id: "contact-refunds",
    title: "Contact for Refunds",
    subtitle: "How to reach us for refund queries",
    content: [
      "For refund-related queries or requests, please contact:",
      "Email: service@agilityai.in",
      "Phone: 7042149608",
      "Website: www.edumaniax.com",
    ],
  },
];

export default function ModernTermsPage() {
  const [activeSection, setActiveSection] = useState("general-terms");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = termsSections.map((section) =>
        document.getElementById(section.id)
      );
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(termsSections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden bg-white border-b border-slate-200"
        style={{ opacity }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(258deg,_#3F9400_-1.82%,_#2C6601_100.88%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
              variants={itemVariants}
            >
              <div
                className="w-6 h-6 bg-no-repeat bg-center bg-contain"
                style={{ backgroundImage: "url('/public/rotation.svg')" }}
              />
              Last Updated on June 2025
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-6xl text-white mb-6 tracking-wide"
              style={{ fontFamily: '"Sigmar", sans-serif' }}
              variants={itemVariants}
            >
              Refund Policy
            </motion.h1>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 -mt-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Table of Contents */}
          <div className="lg:w-80 lg:shrink-0">
            <div className="lg:sticky lg:top-13">
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0F172B] mb-4 flex items-center gap-2">
                  <FileText size={20} />
                  Quick Navigation
                </h3>
                <nav className="space-y-1">
                  {termsSections.map((section, index) => {
                    const Icon = sectionIcons[section.title] || FileText;
                    const iconFillColor =
                      activeSection === section.id ? "#068F36" : "#90A1B9";

                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center gap-3 group ${
                          activeSection === section.id
                            ? "bg-[#E6F4EB] text-[#068F36] border border-blue-200"
                            : "hover:bg-slate-50 text-[#45556C] hover:text-slate-900"
                        }`}
                      >
                        <Icon size={18} fill={iconFillColor} />
                        <div className="flex-1">
                          <div className="font-medium text-sm">
                            {section.title}
                          </div>
                          <div className="text-xs opacity-70">
                            {section.subtitle}
                          </div>
                        </div>
                        <ChevronRight size={16} />
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="lg:sticky lg:top-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                {termsSections.map((section, index) => {
                  const Icon = sectionIcons[section.title] || FileText;
                  const contentIconFillColor = "#068F36";

                  return (
                    <motion.div
                      key={section.id}
                      id={section.id}
                      variants={itemVariants}
                      className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="p-8 lg:p-10">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="flex-shrink-0 w-12 h-12 bg-[#068F361A] rounded-xl flex items-center justify-center">
                            <Icon size={24} fill={contentIconFillColor} />
                          </div>
                          <div className="flex-1">
                            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                              {index + 1}. {section.title}
                            </h2>
                            <p className="text-lg text-slate-600 ml-7 lg:ml-9">
                              {section.subtitle}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {section.content.map((point, pointIndex) => (
                            <motion.div
                              key={pointIndex}
                              className="flex items-start gap-3 p-1 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: pointIndex * 0.1,
                                duration: 0.5,
                              }}
                              viewport={{ once: true, margin: "-50px" }}
                            >
                              <div className="flex-shrink-0 w-2 h-2 bg-[#068F36] rounded-full mt-3" />
                              <p className="text-[#0000008A] leading-relaxed">
                                {point}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
