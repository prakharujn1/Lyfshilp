import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  CreditCard, 
  Clock, 
  Shield, 
  CheckCircle, 
  XCircle, 
  Mail, 
  Phone, 
  Globe, 
  AlertTriangle,
  DollarSign,
  Calendar,
  FileText,
  ArrowRight,
  Info,
  Zap,
  Heart,
  Star,
  Award,
  Banknote,
  Timer
} from "lucide-react";

const FloatingElement = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
    animate={{ 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      y: [0, -15, 0]
    }}
    transition={{ 
      duration: 1, 
      delay,
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const PolicyCard = ({ 
  icon, 
  title, 
  description, 
  items, 
  delay, 
  gradient,
  iconBg,
  isHighlighted = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group relative ${isHighlighted ? 'lg:col-span-2' : ''}`}
    >
      <div className={`absolute inset-0 ${gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700`} />
      <div className={`relative bg-white/80 backdrop-blur-xl border ${isHighlighted ? 'border-blue-200' : 'border-white/60'} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${isHighlighted ? 'ring-2 ring-blue-100' : ''}`}>
        <motion.div
          animate={{ 
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`inline-flex p-4 rounded-2xl ${iconBg} shadow-lg mb-6`}
        >
          {React.cloneElement(icon, { className: "w-8 h-8 text-white" })}
        </motion.div>
        
        <h3 className={`text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors ${isHighlighted ? 'text-blue-700' : 'text-gray-800'}`}>
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
          {description}
        </p>
        
        <div className="space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="mt-1 flex-shrink-0">
                {item.type === 'check' ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : item.type === 'cross' ? (
                  <XCircle className="w-5 h-5 text-red-500" />
                ) : item.type === 'warning' ? (
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                ) : (
                  <Info className="w-5 h-5 text-blue-500" />
                )}
              </div>
              <span className="text-gray-700 leading-relaxed">{item.text}</span>
            </motion.div>
          ))}
        </div>

        {isHighlighted && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + 0.5 }}
            className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100"
          >
            <div className="flex items-center gap-3 mb-3">
              <Star className="w-6 h-6 text-yellow-500" />
              <span className="font-semibold text-gray-800">Pro Tip</span>
            </div>
            <p className="text-gray-600 text-sm">
              To ensure the fastest refund processing, include your transaction ID, 
              registered email, and a brief reason when contacting our support team.
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const ProcessStep = ({ number, title, description, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="relative"
  >
    <div className="flex items-start gap-6">
      <div className="flex-shrink-0">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">{number}</span>
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
            {React.cloneElement(icon, { className: "w-4 h-4 text-blue-600" })}
          </div>
        </div>
      </div>
      <div className="flex-1 pt-2">
        <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

const ContactCard = ({ icon, title, value, href, gradient, delay }) => (
  <motion.a
    href={href}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05, y: -5 }}
    transition={{ duration: 0.6, delay }}
    className="block"
  >
    <div className={`relative bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group`}>
      <div className={`absolute inset-0 ${gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
      <div className="relative">
        <div className={`inline-flex p-3 rounded-xl ${gradient} shadow-md mb-4`}>
          {React.cloneElement(icon, { className: "w-6 h-6 text-white" })}
        </div>
        <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
        <p className="text-gray-600 text-sm">{value}</p>
      </div>
    </div>
  </motion.a>
);

const RefundPolicy = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const policyData = [
    {
      icon: <Calendar />,
      title: "General Refund Terms",
      description: "Understanding the basic terms and conditions that apply to all refund requests.",
      iconBg: "bg-gradient-to-r from-blue-500 to-blue-600",
      gradient: "bg-gradient-to-r from-blue-400 to-blue-600",
      items: [
        { type: 'check', text: 'Refunds provided only for eligible subscription-based or one-time purchase services' },
        { type: 'warning', text: 'Refund requests must be raised within 14 days of the original payment date' },
        { type: 'cross', text: 'Services already availed or sessions already conducted are non-refundable' },
        { type: 'info', text: 'All refund requests must be sent to support@edumaniax.com with relevant details (transaction ID, reason for refund, and registered user email)' }
      ],
      delay: 0.2
    },
    {
      icon: <DollarSign />,
      title: "Refund Amount",
      description: "Transparent breakdown of how your refund amount is calculated and what deductions apply.",
      iconBg: "bg-gradient-to-r from-green-500 to-green-600",
      gradient: "bg-gradient-to-r from-green-400 to-green-600",
      items: [
        { type: 'info', text: 'EduManiax will deduct 10% of the total paid amount as a non-refundable component representing Goods and Services Tax (GST) that has already been paid by us as a registered service provider' },
        { type: 'check', text: 'The remaining 90% of the paid amount will be refunded to your original payment method after verification of the claim' }
      ],
      delay: 0.4
    },
    {
      icon: <Timer />,
      title: "Processing Time",
      description: "Clear timeline for when you can expect to receive your refund.",
      iconBg: "bg-gradient-to-r from-purple-500 to-purple-600",
      gradient: "bg-gradient-to-r from-purple-400 to-purple-600",
      items: [
        { type: 'check', text: 'Refunds will be processed within 7 to 10 business days from the date of approval' },
        { type: 'warning', text: 'The actual refund time may vary depending on your bank or payment provider' }
      ],
      delay: 0.6,
      isHighlighted: true
    },
    {
      icon: <XCircle />,
      title: "Non-Refundable Situations",
      description: "Specific situations where refunds cannot be processed to ensure fair usage policies.",
      iconBg: "bg-gradient-to-r from-red-500 to-red-600",
      gradient: "bg-gradient-to-r from-red-400 to-red-600",
      items: [
        { type: 'cross', text: 'If services or digital content have already been accessed or used' },
        { type: 'cross', text: 'If the request is made after 14 days from the purchase' },
        { type: 'cross', text: 'If any policy violation or misuse of platform services is detected' },
        { type: 'cross', text: 'If payment was made under a non-refundable promotional or discounted offer' }
      ],
      delay: 0.8
    }
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Submit Request',
      description: 'Email us at support@edumaniax.com with your transaction details and refund reason.',
      icon: <Mail />
    },
    {
      number: '2',
      title: 'Review & Verification',
      description: 'Our team reviews your request and verifies eligibility within 2-3 business days.',
      icon: <FileText />
    },
    {
      number: '3',
      title: 'Processing',
      description: 'Once approved, refund is processed to your original payment method.',
      icon: <CreditCard />
    },
    {
      number: '4',
      title: 'Confirmation',
      description: 'You receive email confirmation with refund details and tracking information.',
      icon: <CheckCircle />
    }
  ];

  const contactMethods = [
    {
      icon: <Mail />,
      title: 'Email Support',
      value: 'service.excellence@lyfshilpacademy.com',
      href: 'mailto:service.excellence@lyfshilpacademy.com',
      gradient: 'bg-gradient-to-r from-blue-500 to-blue-600'
    },
    {
      icon: <Phone />,
      title: 'Phone Support',
      value: '+91 85950 34205',
      href: 'tel:+91 8595034205',
      gradient: 'bg-gradient-to-r from-green-500 to-green-600'
    },
    
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-32 left-16 w-80 h-80 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-96 right-20 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-15"
        />
      </div>

      {/* Floating Elements */}
      <FloatingElement className="absolute top-40 right-24 text-green-300" delay={0.5}>
        <Banknote className="w-16 h-16" />
      </FloatingElement>
      <FloatingElement className="absolute top-80 left-20 text-blue-300" delay={1}>
        <Shield className="w-14 h-14" />
      </FloatingElement>
      <FloatingElement className="absolute bottom-48 right-36 text-purple-300" delay={1.5}>
        <Award className="w-12 h-12" />
      </FloatingElement>

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
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-green-200 px-8 py-4 rounded-full shadow-lg mb-8"
          >
            <CreditCard className="w-8 h-8 text-green-600" />
            <span className="font-semibold text-green-700 text-lg">Refund Policy</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 via-green-600 to-blue-600 bg-clip-text text-transparent mb-8"
          >
            Fair & Transparent
            <br />
            <span className="text-4xl md:text-6xl">Refund Process</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            At EduManiax, we are committed to ensuring satisfaction with our educational and recreational services. 
            However, we understand that there may be circumstances requiring a refund. Our refund policy 
            is designed to be fair, clear, and straightforward—ensuring you have peace of mind 
            with every purchase while supporting our mission to provide quality education.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-2xl text-gray-800 mb-1">14 Days</h3>
              <p className="text-gray-600 text-sm">Refund Window</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-2xl text-gray-800 mb-1">90%</h3>
              <p className="text-gray-600 text-sm">Refund Amount</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-2xl text-gray-800 mb-1">7-10</h3>
              <p className="text-gray-600 text-sm">Business Days</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Policy Cards */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {policyData.map((policy, index) => (
              <PolicyCard key={index} {...policy} />
            ))}
          </div>
        </div>

        {/* Refund Process */}
        <div className="max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Simple 4-Step Refund Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've streamlined our refund process to make it as quick and hassle-free as possible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} {...step} delay={index * 0.2} />
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-12 shadow-xl">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Need Help with Your Refund?
              </h3>
              
              <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                Our dedicated support team is here to assist you through every step of the refund process. 
                We're committed to resolving your concerns quickly and fairly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {contactMethods.map((method, index) => (
                <ContactCard key={index} {...method} delay={index * 0.2} />
              ))}
            </div>

            
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundPolicy;