import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import {
  FileText,
  ChevronRight,
} from "lucide-react";

import InformationWeCollectIcon from '../components/icon/InformationWeCollectIcon.jsx';
import HowWeUseInformationIcon from '../components/icon/HowWeUseInformationIcon.jsx';
import UseOfCookiesIcon from '../components/icon/UseOfCookiesIcon.jsx';
import DataProtectionIcon from '../components/icon/DataProtectionIcon.jsx';
import ChildrensPrivacyIcon from '../components/icon/ChildrensPrivacyIcon.jsx';
import ThirdPartyServicesIcon from '../components/icon/ThirdPartyServicesIcon.jsx';
import YourRightsIcon from '../components/icon/YourRightsIcon.jsx';
import ChangesToPolicyIcon from '../components/icon/ChangesToPolicyIcon.jsx';
import ContactIcon from '../components/icon/ContactIcon.jsx';


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
  "Information We Collect": InformationWeCollectIcon,
  "How We Use Your Information": HowWeUseInformationIcon,
  "Use of Cookies": UseOfCookiesIcon,
  "Data Protection": DataProtectionIcon,
  "Children’s Privacy": ChildrensPrivacyIcon,
  "Third-Party Services": ThirdPartyServicesIcon,
  "Your Rights and Choices": YourRightsIcon,
  "Changes to This Policy": ChangesToPolicyIcon,
  "Contact Us": ContactIcon,
};

const termsSections = [
  {
    id: "information",
    title: "Information We Collect",
    subtitle: "Types of data gathered from users",
    content: [
      "We may collect the following types of information from users:",
      "a) Personal Information",
      "- Name (first name or username only)",
      "- Email address (if required for login or account creation)",
      "- Class or grade level (for personalized content)",
      "",
      "b) Non-Personal Information",
      "- Browser type and device information",
      "- Pages visited and time spent on site",
      "- Progress in games, quizzes, and modules",
      "- IP address (used for regional access control)",
      "",
      "We do not knowingly collect sensitive personal data such as phone numbers, addresses, or payment information.",
    ],
  },
  {
    id: "usage",
    title: "How We Use Your Information",
    subtitle: "Purpose behind data collection",
    content: [
      "We use your information to:",
      "- Provide access to educational content",
      "- Track student progress and activity completion",
      "- Improve our platform’s user experience and performance",
      "- Respond to inquiries or feedback",
      "- Notify users of updates or new content",
      "",
      "We do not sell or rent your personal information to third parties.",
    ],
  },
  {
    id: "cookies",
    title: "Use of Cookies",
    subtitle: "Why and how we use browser cookies",
    content: [
      "We use cookies and similar technologies to:",
      "- Keep you logged in",
      "- Save progress on challenges and modules",
      "- Understand site usage patterns to improve user experience",
      "",
      "You can disable cookies in your browser settings, but doing so may affect the functionality of some features.",
    ],
  },
  {
    id: "data-protection",
    title: "Data Protection",
    subtitle: "How we safeguard your information",
    content: [
      "We implement standard security practices to protect your data:",
      "- SSL encryption for secure Browse",
      "- Limited access to user data by authorized staff only",
      "- Routine monitoring to detect and prevent unauthorized access",
      "",
      "Despite our best efforts, no method of transmission over the internet is 100% secure.",
    ],
  },
  {
    id: "children",
    title: "Children’s Privacy",
    subtitle: "Privacy measures for students aged 10-18",
    content: [
      "EduManiax is designed for students aged 10-18 (Classes 6-12). We do not knowingly collect more data than necessary for educational purposes. If you are a parent or guardian and believe your child has provided more information than required, please contact us for assistance.",
    ],
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    subtitle: "External tools and service providers",
    content: [
      "We may use third-party services (like analytics tools or embedded tools such as Canva, Google Forms, etc.) that may collect basic technical information. These services operate under their own privacy policies.",
    ],
  },
  {
    id: "rights",
    title: "Your Rights and Choices",
    subtitle: "How you can manage your data",
    content: [
      "You have the right to:",
      "- Request access to the data we store about you",
      "- Request corrections or deletion of your data",
      "- Opt out of any non-essential communications",
      "",
      "To make such a request, please contact us at: edumaniax.support@gmail.com",
    ],
  },
  {
    id: "updates",
    title: "Changes to This Policy",
    subtitle: "How privacy updates are handled",
    content: [
      "We may update this Privacy Policy from time to time. All updates will be posted on this page with the revised date. Continued use of the website after changes implies your acceptance of the revised policy.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    subtitle: "Reach out with any questions",
    content: [
      "If you have any questions about this Privacy Policy, please contact: service@agilityai.in",
    ],
  },
];

export default function ModernTermsPage() {
  const [activeSection, setActiveSection] = useState("information");
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
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

      // Logic for sticky header adjustment
      const heroSection = document.querySelector('.hero-section-identifier');
      if (heroSection) {
        setScrolledPastHero(window.scrollY > heroSection.offsetHeight - 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = scrolledPastHero ? 23 : 13;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const stickyTopClass = scrolledPastHero ? 'lg:top-23' : 'lg:top-13';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden bg-white border-b border-slate-200 hero-section-identifier"
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
              Privacy Policy
            </motion.h1>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 -mt-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Table of Contents */}
          <div className="lg:w-80 lg:shrink-0">
            <div className={`lg:sticky sticky ${stickyTopClass}`}> {/* Conditional class */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0F172B] mb-2 flex items-center gap-2">
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
            <div className={`lg:sticky ${stickyTopClass}`}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                {termsSections.map((section, index) => {
                  const Icon = sectionIcons[section.title] || FileText;

                  const contentIconFillColor = '#068F36';

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
                              {section.title}
                            </h2>
                            <p className="text-lg text-slate-600">{section.subtitle}</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {section.content.map((point, pointIndex) => {
                            const trimmed = point.trim();

                            const isLetteredHeading = /^[a-zA-Z]\)/.test(
                              trimmed
                            );
                            const isDashList = /^-/.test(trimmed);
                            const isParagraph =
                              !isLetteredHeading &&
                              !isDashList &&
                              trimmed !== "";

                            if (trimmed === "") {
                              return (
                                <div key={pointIndex} className="h-2" />);
                            } else if (isLetteredHeading) {
                              return (
                                <motion.h3
                                  key={pointIndex}
                                  className="text-xl font-semibold text-slate-800 ml-0 md:ml-4 mt-6 mb-2"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: pointIndex * 0.1,
                                    duration: 0.5,
                                  }}
                                  viewport={{ once: true, margin: "-50px" }}
                                >
                                  {trimmed}
                                </motion.h3>
                              );
                            } else if (isDashList) {
                              return (
                                <motion.div
                                  key={pointIndex}
                                  className="flex items-start rounded-md hover:bg-slate-50 transition-colors duration-200 ml-4 md:ml-8"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: pointIndex * 0.1,
                                    duration: 0.5,
                                  }}
                                  viewport={{ once: true, margin: "-50px" }}
                                >
                                  <p className="text-slate-700 ">{trimmed}</p>
                                </motion.div>
                              );
                            } else {
                              return (
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
                                    {trimmed}
                                  </p>
                                </motion.div>
                              );
                            }
                          })}
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