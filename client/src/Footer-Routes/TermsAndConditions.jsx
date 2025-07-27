import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  // You might be able to remove unused Lucide React imports if they are fully replaced
  FileText, // Keep this if it's your fallback icon
  ChevronRight,
  // Remaining Lucide icons if still used elsewhere, otherwise remove them
  // Shield, User, CreditCard, Copyright, Upload, AlertTriangle, Scale, Settings, CheckCircle2, Clock, Users
} from "lucide-react";
import UserAccountIcon from '../components/icon/UserAccountIcon.jsx';
import PlatformUsageIcon from '../components/icon/PlatformUsageIcon.jsx';
import SubscriptionIcon from '../components/icon/SubscriptionIcon.jsx';
import IntellectualIcon from '../components/icon/IntellectualIcon.jsx';
import UserContentIcon from '../components/icon/UserContentIcon.jsx';
import AccountTerminationIcon from '../components/icon/AccountTerminationIcon.jsx';
import ServiceIcon from '../components/icon/ServiceIcon.jsx';
import LiabilityIcon from '../components/icon/LiabilityIcon.jsx';
import GoverningIcon from '../components/icon/GoverningIcon.jsx';
import TermsUpdateIcon from '../components/icon/TermsUpdateIcon.jsx';
import Eligibility from '../components/icon/Eligibility.jsx';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const sectionIcons = {
  "Eligibility": Eligibility,
  "User Accounts": UserAccountIcon,
  "Platform Usage": PlatformUsageIcon,
  "Subscription & Payments": SubscriptionIcon,
  "Intellectual Property": IntellectualIcon,
  "User Content": UserContentIcon,
  "Account Termination": AccountTerminationIcon,
  "Service Disclaimers": ServiceIcon,
  "Liability Limits": LiabilityIcon,
  "Governing Law": GoverningIcon,
  "Terms Updates": TermsUpdateIcon
};


const termsSections = [
  {
    id: "eligibility",
    title: "Eligibility",
    subtitle: "Who can use EduManiax",
    content: [
      "EduManiax is designed for learners of all ages, with special consideration for younger users who require parental supervision.",
      "Users under 18 must have explicit parental or guardian consent before creating an account or accessing premium features.",
      "All users must provide accurate, complete information during registration and maintain the integrity of their account details.",
      "We reserve the right to verify user information and may request additional documentation to confirm eligibility."
    ],
  },
  {
    id: "accounts",
    title: "User Accounts",
    subtitle: "Managing your EduManiax account",
    content: [
      "Account creation is required to access personalized learning features, progress tracking, and premium content.",
      "You are solely responsible for maintaining the confidentiality and security of your login credentials.",
      "Any activities conducted through your account are your responsibility, whether authorized or unauthorized.",
      "Immediately notify our support team if you suspect any unauthorized access to your account.",
      "We may suspend or terminate accounts that violate our community guidelines or terms of service."
    ],
  },
  {
    id: "usage",
    title: "Platform Usage",
    subtitle: "Acceptable use guidelines",
    content: [
      "Use EduManiax exclusively for legitimate educational, learning, and personal development purposes.",
      "Respect our community by avoiding harassment, bullying, or inappropriate communication with other users.",
      "Do not attempt to circumvent, hack, or exploit any security measures or technical limitations of our platform.",
      "Refrain from uploading, sharing, or transmitting content that is illegal, harmful, offensive, or violates others' rights.",
      "Commercial use of our educational content requires explicit written permission from EduManiax."
    ],
  },
  {
    id: "payments",
    title: "Subscription & Payments",
    subtitle: "Billing and subscription terms",
    content: [
      "EduManiax offers both free educational content and premium subscription tiers with enhanced features.",
      "All subscription fees, billing cycles, and payment terms are clearly displayed before purchase completion.",
      "Subscriptions automatically renew unless cancelled at least 24 hours before the next billing cycle.",
      "We accept major payment methods and ensure secure processing through industry-standard encryption.",
      "Refund eligibility and processes are outlined in our separate Refund Policy, available in your account settings."
    ],
  },
  {
    id: "ip",
    title: "Intellectual Property",
    subtitle: "Content ownership and usage rights",
    content: [
      "All educational content, including videos, assessments, games, graphics, and curriculum materials, remains the exclusive property of EduManiax and our content partners.",
      "Users receive a limited, non-transferable license to access and use content solely for personal educational purposes.",
      "Reproduction, distribution, modification, or commercial use of our content is strictly prohibited without explicit written consent.",
      "Our trademarks, logos, and brand elements may not be used without prior authorization.",
      "We respect third-party intellectual property rights and expect the same from our users."
    ],
  },
  {
    id: "user-content",
    title: "User Content",
    subtitle: "Your submissions and creations",
    content: [
      "You retain full ownership of any original content, assignments, or creative work you submit through our platform.",
      "By uploading content, you grant EduManiax a worldwide, royalty-free license to display, distribute, and use your submissions in connection with our educational services.",
      "You are solely responsible for ensuring that your submissions comply with applicable laws and do not infringe on others' rights.",
      "We reserve the right to remove any user content that violates our community guidelines or terms of service.",
      "EduManiax may showcase exceptional student work (with appropriate permissions) to inspire and motivate other learners."
    ],
  },
  {
    id: "termination",
    title: "Account Termination",
    subtitle: "End of service conditions",
    content: [
      "Either party may terminate the service relationship at any time, with appropriate notice where required by law.",
      "We reserve the right to immediately suspend or terminate accounts that violate these terms, engage in fraudulent activity, or pose security risks.",
      "Upon termination, your access to premium features and content will cease, though you may retain access to any downloaded materials as permitted.",
      "Account data will be handled according to our Privacy Policy, with personal information deleted or anonymized as legally required.",
      "Certain provisions of these terms, including intellectual property rights and limitation of liability, survive account termination."
    ],
  },
  {
    id: "disclaimers",
    title: "Service Disclaimers",
    subtitle: "Important service limitations",
    content: [
      "EduManiax educational services are provided 'as-is' and 'as-available' without warranties of any kind, express or implied.",
      "While we strive for excellence, we cannot guarantee uninterrupted service, complete accuracy of all educational content, or compatibility with all devices.",
      "Educational outcomes depend on individual effort, engagement, and various personal factors beyond our control.",
      "Our platform supplements but does not replace formal education, professional instruction, or parental guidance.",
      "Users should verify important information and consult qualified professionals for specific educational or career advice."
    ],
  },
  {
    id: "liability",
    title: "Liability Limits",
    subtitle: "Legal responsibility boundaries",
    content: [
      "EduManiax's total liability for any claims related to our services is limited to the amount you paid for subscription fees in the 12 months preceding the claim.",
      "We are not liable for indirect, incidental, consequential, or punitive damages, including lost profits, data loss, or educational opportunity costs.",
      "Some jurisdictions do not allow certain liability limitations, so these restrictions may not apply to you.",
      "This limitation of liability applies regardless of the legal theory under which damages are claimed."
    ],
  },
  {
    id: "law",
    title: "Governing Law",
    subtitle: "Legal jurisdiction and dispute resolution",
    content: [
      "These Terms and Conditions are governed by and construed in accordance with the laws of India.",
      "Any disputes arising from these terms or your use of EduManiax will be subject to the exclusive jurisdiction of courts in New Delhi, India.",
      "We encourage users to contact our support team first to resolve any concerns before pursuing legal action.",
      "For international users, local consumer protection laws may provide additional rights that these terms cannot override."
    ],
  },
  {
    id: "updates",
    title: "Terms Updates",
    subtitle: "How we handle policy changes",
    content: [
      "We may periodically update these Terms and Conditions to reflect changes in our services, legal requirements, or industry best practices.",
      "Significant changes will be communicated through email notifications, platform announcements, or prominent notices on our website.",
      "Your continued use of EduManiax after any terms update constitutes acceptance of the revised terms.",
      "If you disagree with updated terms, you may terminate your account and discontinue using our services.",
      "We maintain a version history of our terms to ensure transparency about changes over time."
    ],
  }
];

export default function ModernTermsPage() {
  const [activeSection, setActiveSection] = useState("eligibility");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = termsSections.map(section => document.getElementById(section.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(termsSections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden bg-white border-b border-slate-200"
        style={{ opacity, scale }}
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

              <div className="w-6 h-6 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: "url('/public/rotation.svg')" }} />

              Last Updated on June 2025
            </motion.div>

            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-white mb-6 " style={{ fontFamily: '"Sigmar", sans-serif' }}
              variants={itemVariants}
            >
              Terms & Conditions
            </motion.h1>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 -mt-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Table of Contents - Sticky Sidebar */}
          <div className="lg:w-80 lg:shrink-0">
            <div className="lg:sticky lg:top-8">
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#0F172B] mb-4 flex items-center gap-2">
                  <FileText size={20} />
                  Quick Navigation
                </h3>
                <nav className="space-y-1">
                  {termsSections.map((section, index) => {
                    const Icon = sectionIcons[section.title] || FileText;
                    // Determine the fill color based on activeSection
                    const iconFillColor = activeSection === section.id ? '#068F36' : '#90A1B9';

                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center gap-3 group ${
                          activeSection === section.id
                            ? 'bg-[#E6F4EB] text-[#068F36] border border-blue-200'
                            : 'hover:bg-slate-50 text-[#45556C] hover:text-slate-900'
                        }`}
                      >
                        {/* Pass the fill prop directly to your custom Icon component */}
                        <Icon size={18} fill={iconFillColor} /> {/* Removed redundant className */}
                        <div className="flex-1">
                          <div className="font-medium text-sm">{section.title}</div>
                          <div className="text-xs opacity-70">{section.subtitle}</div>
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
                  // Determine the fill color for the main content icons as well
                  const contentIconFillColor = '#068F36'; // Static fill for these icons as per your original code's intention

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
                            {/* Pass the fill prop here too */}
                            <Icon size={24} fill={contentIconFillColor} /> {/* Removed redundant className */}
                          </div>
                          <div className="flex-1">
                            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                              {index + 1}. {section.title}
                            </h2>
                            <p className="text-lg text-slate-600 ml-7 lg:ml-9">{section.subtitle}</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {section.content.map((point, pointIndex) => (
                            <motion.div
                              key={pointIndex}
                              className="flex items-start gap-3 p-1 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: pointIndex * 0.1, duration: 0.5 }}
                              viewport={{ once: true, margin: "-50px" }}
                            >
                              <div className="flex-shrink-0 w-2 h-2 bg-[#068F36] rounded-full mt-3" />
                              <p className="text-[#0000008A] leading-relaxed">{point}</p>
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