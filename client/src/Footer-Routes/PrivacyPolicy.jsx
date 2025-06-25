import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Shield, 
  Database, 
  Users, 
  Globe, 
  Lock, 
  Eye, 
  Settings, 
  Heart,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  Calendar,
  CreditCard,
  Activity,
  FileText,
  Zap,
  Award
} from "lucide-react";

const FloatingShape = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
    animate={{ 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      y: [0, -10, 0]
    }}
    transition={{ 
      duration: 0.8, 
      delay,
      y: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const FeatureCard = ({ icon, title, description, items, delay, gradient }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <div className={`absolute inset-0 ${gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
      <div className="relative bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`inline-flex p-4 rounded-2xl ${gradient} shadow-lg mb-6`}
        >
          {React.cloneElement(icon, { className: "w-8 h-8 text-white" })}
        </motion.div>
        
        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-3">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + index * 0.1 }}
              className="flex items-center gap-3 text-gray-700"
            >
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const DataTypeIcon = ({ icon, label, color }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -5 }}
    className="flex flex-col items-center gap-2 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 shadow-sm hover:shadow-md transition-all"
  >
    <div className={`p-3 rounded-xl ${color}`}>
      {React.cloneElement(icon, { className: "w-6 h-6 text-white" })}
    </div>
    <span className="text-sm font-medium text-gray-700">{label}</span>
  </motion.div>
);

const TrustBadge = ({ icon, title, subtitle, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100"
  >
    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
      {React.cloneElement(icon, { className: "w-6 h-6 text-white" })}
    </div>
    <div>
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
  </motion.div>
);

const PrivacyPolicy = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const dataTypes = [
    { icon: <Mail />, label: "Name & Email", color: "bg-gradient-to-r from-blue-500 to-blue-600" },
    { icon: <Phone />, label: "Class/Grade", color: "bg-gradient-to-r from-green-500 to-green-600" },
    { icon: <Calendar />, label: "Progress Data", color: "bg-gradient-to-r from-purple-500 to-purple-600" },
    { icon: <CreditCard />, label: "Browser Info", color: "bg-gradient-to-r from-red-500 to-red-600" },
    { icon: <Activity />, label: "Usage Analytics", color: "bg-gradient-to-r from-orange-500 to-orange-600" },
    { icon: <Settings />, label: "Cookies", color: "bg-gradient-to-r from-teal-500 to-teal-600" }
  ];

  const trustBadges = [
    { icon: <Shield />, title: "SSL Encryption", subtitle: "Secure browsing protection" },
    { icon: <Lock />, title: "Limited Access", subtitle: "Authorized staff only" },
    { icon: <Award />, title: "Student Safety", subtitle: "Ages 10-18 focused design" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-96 right-10 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20"
        />
      </div>

      {/* Floating Shapes */}
      <FloatingShape className="absolute top-32 right-20 text-blue-300" delay={0.5}>
        <Shield className="w-16 h-16" />
      </FloatingShape>
      <FloatingShape className="absolute top-80 left-16 text-purple-300" delay={1}>
        <Lock className="w-12 h-12" />
      </FloatingShape>
      <FloatingShape className="absolute bottom-40 right-32 text-green-300" delay={1.5}>
        <Heart className="w-14 h-14" />
      </FloatingShape>

      <div className="relative z-10 px-6 md:px-12 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-6xl mx-auto text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-blue-200 px-8 py-4 rounded-full shadow-lg mb-8"
          >
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="font-semibold text-blue-700 text-lg">Privacy Policy</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-8"
          >
            Privacy Policy
            <br />
            <span className="text-4xl md:text-6xl">Edumaniax</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4"
          >
            Effective Date: June 20, 2025
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Last Updated: June 20, 2025
          </motion.p>

          {/* Data Types Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto mb-16"
          >
            {dataTypes.map((type, index) => (
              <DataTypeIcon key={index} {...type} />
            ))}
          </motion.div>
        </motion.div>

        {/* Trust Badges */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {trustBadges.map((badge, index) => (
              <TrustBadge key={index} {...badge} delay={index * 0.2} />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <FeatureCard
              icon={<Database />}
              title="1. Information We Collect"
              description="We may collect the following types of information from users:"
              items={[
                "Personal Information: Name (first name or username only), Email address (if required for login), Class or grade level (for personalized content)",
                "Non-Personal Information: Browser type and device information, Pages visited and time spent on site",
                "Progress in games, quizzes, and modules, IP address (used for regional access control)",
                "We do not knowingly collect sensitive personal data such as phone numbers, addresses, or payment information"
              ]}
              delay={0.2}
              gradient="bg-gradient-to-r from-blue-500 to-blue-600"
            />

            <FeatureCard
              icon={<Zap />}
              title="2. How We Use Your Information"
              description="We use your information to:"
              items={[
                "Provide access to educational content",
                "Track student progress and activity completion",
                "Improve our platform's user experience and performance",
                "Respond to inquiries or feedback",
                "Notify users of updates or new content",
                "We do not sell or rent your personal information to third parties"
              ]}
              delay={0.4}
              gradient="bg-gradient-to-r from-purple-500 to-purple-600"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <FeatureCard
              icon={<Settings />}
              title="3. Use of Cookies"
              description="We use cookies and similar technologies to:"
              items={[
                "Keep you logged in",
                "Save progress on challenges and modules",
                "Understand site usage patterns to improve user experience",
                "You can disable cookies in your browser settings, but doing so may affect the functionality of some features"
              ]}
              delay={0.6}
              gradient="bg-gradient-to-r from-green-500 to-green-600"
            />

            <FeatureCard
              icon={<Lock />}
              title="4. Data Protection"
              description="We implement standard security practices to protect your data:"
              items={[
                "SSL encryption for secure browsing",
                "Limited access to user data by authorized staff only",
                "Routine monitoring to detect and prevent unauthorized access",
                "Despite our best efforts, no method of transmission over the internet is 100% secure"
              ]}
              delay={0.8}
              gradient="bg-gradient-to-r from-red-500 to-red-600"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <FeatureCard
              icon={<Users />}
              title="5. Children's Privacy"
              description="Edumaniax is designed for students aged 10-18 (Classes 6-12)."
              items={[
                "We do not knowingly collect more data than necessary for educational purposes",
                "If you are a parent or guardian and believe your child has provided more information than required, please contact us for assistance"
              ]}
              delay={1.0}
              gradient="bg-gradient-to-r from-orange-500 to-orange-600"
            />

            <FeatureCard
              icon={<Globe />}
              title="6. Third-Party Services"
              description="We may use third-party services that may collect basic technical information."
              items={[
                "Analytics tools or embedded tools such as Canva, Google Forms, etc.",
                "These services operate under their own privacy policies"
              ]}
              delay={1.2}
              gradient="bg-gradient-to-r from-teal-500 to-teal-600"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <FeatureCard
              icon={<Eye />}
              title="7. Your Rights and Choices"
              description="You have the right to:"
              items={[
                "Request access to the data we store about you",
                "Request corrections or deletion of your data",
                "Opt out of any non-essential communications",
                "To make such a request, please contact us at: edumaniax.support@gmail.com"
              ]}
              delay={1.4}
              gradient="bg-gradient-to-r from-indigo-500 to-indigo-600"
            />

            <FeatureCard
              icon={<FileText />}
              title="8. Changes to This Policy"
              description="We may update this Privacy Policy from time to time."
              items={[
                "All updates will be posted on this page with the revised date",
                "Continued use of the website after changes implies your acceptance of the revised policy"
              ]}
              delay={1.6}
              gradient="bg-gradient-to-r from-pink-500 to-pink-600"
            />
          </div>
        </div>

        {/* Contact & Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mt-20"
        >
          <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-12 shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              9. Contact Us
            </h3>
            
            <p className="text-gray-600 mb-8 text-lg">
              If you have any questions about this Privacy Policy, please contact:
            </p>

            <motion.a
              href="mailto:service.excellence@lyfshilpacademy.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Mail className="w-5 h-5" />
              service.excellence@lyfshilpacademy.com
              <ArrowRight className="w-5 h-5" />
            </motion.a>

           
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;