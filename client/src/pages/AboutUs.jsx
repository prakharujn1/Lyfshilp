import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Lightbulb,
  Target,
  Users,
  Rocket,
  Award,
  Heart,
  BookOpen,
  Zap,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
  TrendingUp,
  Shield,
  Brain,
  Code,
  Gamepad2,
  GraduationCap,
  School,
  Home,
  UserCheck,
  ChevronDown,
  Eye,
  Compass,
  Building,
  Play,
} from "lucide-react";

const FloatingShape = ({ children, className, delay = 0, duration = 3 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
    animate={{
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: [0, -15, 0],
    }}
    transition={{
      duration: 0.8,
      delay,
      y: {
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const AnimatedCard = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 60, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ y: -8, scale: 1.02 }}
    className={`group ${className}`}
  >
    {children}
  </motion.div>
);

const ValueCard = ({ icon, title, description, gradient, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedCard delay={delay} className="relative">
      <div
        className={`absolute inset-0 ${gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
      />
      <div
        className="relative bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0, scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`inline-flex p-4 rounded-2xl ${gradient} shadow-lg mb-6`}
        >
          {React.cloneElement(icon, { className: "w-8 h-8 text-white" })}
        </motion.div>

        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </AnimatedCard>
  );
};

const FeatureHighlight = ({
  icon,
  title,
  description,
  items,
  reverse = false,
  delay = 0,
}) => (
  <AnimatedCard delay={delay} className="mb-20">
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-12`}
    >
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
            {React.cloneElement(icon, { className: "w-8 h-8 text-white" })}
          </div>
          <h3 className="text-3xl font-bold text-gray-800">{title}</h3>
        </div>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          {description}
        </p>

        <div className="space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: reverse ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + index * 0.1 }}
              className="flex items-center gap-3"
            >
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="relative bg-black/10 rounded-3xl backdrop-blur-2xl p-10 shadow-xl border border-white/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-blue-400/10 via-transparent to-transparent animate-pulse opacity-30" />
          <div className="grid grid-cols-2 gap-6 relative z-10">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: delay + i * 0.2 }}
                className="rounded-xl bg-white/20 border border-white/10 backdrop-blur-xl p-6 shadow-inner hover:shadow-lg transition"
              >
                <div className="w-16 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 mb-4" />
                <div className="h-3 w-full bg-white/30 rounded mb-2" />
                <div className="h-3 w-3/4 bg-white/20 rounded" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </AnimatedCard>
);

const AudienceCard = ({ icon, title, description, color, delay = 0 }) => (
  <AnimatedCard delay={delay}>
    <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`inline-flex p-6 rounded-full ${color} shadow-lg mb-6`}
      >
        {React.cloneElement(icon, { className: "w-10 h-10 text-white" })}
      </motion.div>

      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </AnimatedCard>
);

const StatCard = ({ number, label, suffix = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    className="text-center"
  >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: delay + 0.2 }}
      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
    >
      {number}
      {suffix}
    </motion.div>
    <div className="text-gray-600 font-medium">{label}</div>
  </motion.div>
);



const AboutUs = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const y3 = useTransform(scrollY, [0, 500], [0, -200]);
  const navigate = useNavigate();

  const differentiators = [
    {
      icon: <BookOpen />,
      title: "Curriculum-Aligned, Future-Focused",
      description:
        "Our content seamlessly integrates with existing curricula while preparing students for tomorrow's challenges.",
      gradient: "bg-gradient-to-r from-blue-500 to-blue-600",
    },
    {
      icon: <Gamepad2 />,
      title: "Gamified & Interactive Design",
      description:
        "Learning becomes an adventure with our gamified approach that keeps students engaged and motivated.",
      gradient: "bg-gradient-to-r from-purple-500 to-purple-600",
    },
    {
      icon: <Brain />,
      title: "Age-Smart Content Structure",
      description:
        "Every lesson is carefully crafted to match cognitive development stages and learning preferences.",
      gradient: "bg-gradient-to-r from-green-500 to-green-600",
    },
    {
      icon: <Code />,
      title: "Hands-On Project-Based Learning",
      description:
        "Students don't just learn concepts—they build, create, and solve real-world problems.",
      gradient: "bg-gradient-to-r from-red-500 to-red-600",
    },
    {
      icon: <Globe />,
      title: "Real-World Relevance",
      description:
        "Every skill and concept connects directly to practical applications students will use in their future careers.",
      gradient: "bg-gradient-to-r from-orange-500 to-orange-600",
    },
  ];

  const offerings = [
    {
      icon: <Rocket />,
      title: "Entrepreneurship Programs",
      description:
        "Comprehensive programs that teach students how to identify opportunities, develop business ideas, and turn concepts into reality.",
      items: [
        "Business fundamentals and market analysis",
        "Idea validation and prototype development",
        "Financial literacy and resource management",
        "Pitch development and presentation skills",
      ],
    },
    {
      icon: <Users />,
      title: "Leadership & Life Skills",
      description:
        "Essential life skills that prepare students for success in any field, from communication to critical thinking.",
      items: [
        "Communication and interpersonal skills",
        "Critical thinking and problem-solving",
        "Time management and productivity",
        "Emotional intelligence and resilience",
      ],
    },
    {
      icon: <Zap />,
      title: "AI, Ethics & Innovation",
      description:
        "Cutting-edge programs that explore the intersection of technology, ethics, and human values.",
      items: [
        "AI fundamentals and practical applications",
        "Digital ethics and responsible technology use",
        "Innovation methodologies and design thinking",
        "Future technology trends and implications",
      ],
    },
  ];

  const audiences = [
    {
      icon: <GraduationCap />,
      title: "Students (Classes 6-12)",
      description:
        "Empowering young minds with the skills, knowledge, and confidence to become tomorrow's leaders and innovators.",
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
    },
    {
      icon: <UserCheck />,
      title: "Educators & Teachers",
      description:
        "Supporting educators with modern tools, resources, and methodologies to create engaging and impactful learning experiences.",
      color: "bg-gradient-to-r from-green-500 to-green-600",
    },
    {
      icon: <School />,
      title: "Schools & Institutions",
      description:
        "Partnering with educational institutions to transform traditional learning environments into innovation hubs.",
      color: "bg-gradient-to-r from-purple-500 to-purple-600",
    },
    {
      icon: <Home />,
      title: "Parents & Families",
      description:
        "Involving families in the learning journey with resources and insights to support student growth at home.",
      color: "bg-gradient-to-r from-red-500 to-red-600",
    },
  ];

  return (
   <div className="">
     <div className="relative px-15 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-32 left-20 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-96 right-32 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-25"
        />
        <motion.div
          style={{ y: y3 }}
          className="absolute bottom-32 left-32 w-64 h-64 bg-gradient-to-r from-green-200 to-blue-200 rounded-full blur-3xl opacity-20"
        />
      </div>

      {/* Floating Shapes */}
      <FloatingShape
        className="absolute top-40 right-20 text-blue-300"
        delay={0.5}
      >
        <Lightbulb className="w-16 h-16" />
      </FloatingShape>
      <FloatingShape
        className="absolute top-96 left-16 text-purple-300"
        delay={1}
        duration={4}
      >
        <Sparkles className="w-12 h-12" />
      </FloatingShape>
      <FloatingShape
        className="absolute bottom-80 right-40 text-green-300"
        delay={1.5}
        duration={3.5}
      >
        <Rocket className="w-14 h-14" />
      </FloatingShape>
      <FloatingShape
        className="absolute top-1/2 left-8 text-orange-300"
        delay={2}
        duration={5}
      >
        <Heart className="w-10 h-10" />
      </FloatingShape>

      <div className="relative z-10 px-6 md:px-12 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-7xl mx-auto text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-blue-200 px-8 py-4 rounded-full shadow-lg mb-8"
          >
            <Sparkles className="w-8 h-8 text-blue-600" />
            <span className="font-semibold text-blue-700 text-lg">
              Welcome to EduManiax
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-8xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Fueling the Future
            </span>
            <br />
            <span className="text-4xl md:text-6xl bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
              of Learning
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            More than just a platform—we're a movement to reimagine education
            for the 21st century. Where students don't just memorize answers,
            they build solutions, lead initiatives, and create their future.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-16"
          >
            <StatCard
              number="10,000"
              suffix="+"
              label="Students Empowered"
              delay={0.2}
            />
            <StatCard
              number="500"
              suffix="+"
              label="Schools Connected"
              delay={0.4}
            />
            <StatCard
              number="95"
              suffix="%"
              label="Student Satisfaction"
              delay={0.6}
            />
            <StatCard number="24/7" label="Learning Support" delay={0.8} />
          </motion.div>

          {/* Core Philosophy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-12 shadow-xl max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Philosophy
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed italic">
              "Let students build, lead, fail, adapt, and grow—just like they
              will in the real world."
            </p>
          </motion.div>
        </motion.div>

        {/* Mission Section */}
        <section id="mission" className="max-w-7xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-blue-200 px-6 py-3 rounded-full shadow-lg mb-6">
              <Target className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-blue-700">Our Mission</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Building Tomorrow's
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Leaders
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedCard delay={0.2}>
              <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-10 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Transformative Learning Ecosystem
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We're building more than an educational platform—we're
                  creating an ecosystem where students don't just memorize
                  answers, they ask questions, take risks, design solutions, and
                  develop the courage to act on their ideas.
                </p>

                <div className="space-y-4">
                  {[
                    "Equip students with entrepreneurial mindset from early age",
                    "Create future-ready learners who are adaptive and resilient",
                    "Provide educators with engaging, dynamic teaching tools",
                    "Encourage innovation and self-driven learning everywhere",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl blur-2xl opacity-30" />
                <div className="relative bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-xl">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      {
                        icon: <Brain />,
                        label: "Critical Thinking",
                        color: "from-blue-500 to-blue-600",
                      },
                      {
                        icon: <Rocket />,
                        label: "Innovation",
                        color: "from-purple-500 to-purple-600",
                      },
                      {
                        icon: <Users />,
                        label: "Leadership",
                        color: "from-green-500 to-green-600",
                      },
                      {
                        icon: <Heart />,
                        label: "Empathy",
                        color: "from-red-500 to-red-600",
                      },
                    ].map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-2xl p-6 text-center shadow-lg"
                      >
                        <div
                          className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${skill.color} mb-4`}
                        >
                          {React.cloneElement(skill.icon, {
                            className: "w-6 h-6 text-white",
                          })}
                        </div>
                        <h4 className="font-semibold text-gray-700">
                          {skill.label}
                        </h4>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section id="difference" className="max-w-7xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-blue-200 px-6 py-3 rounded-full shadow-lg mb-6">
              <Sparkles className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-blue-700">
                What Makes Us Different
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Beyond Traditional
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                {" "}
                Learning
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We go beyond theory. Every course, challenge, and activity is
              crafted to make learning deeply engaging, experiential, and
              skill-focused.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <ValueCard
                key={index}
                icon={diff.icon}
                title={diff.title}
                description={diff.description}
                gradient={diff.gradient}
                delay={index * 0.2}
              />
            ))}
          </div>
        </section>

        {/* What We Offer */}
        <section id="offerings" className="max-w-7xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-blue-200 px-6 py-3 rounded-full shadow-lg mb-6">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-blue-700">What We Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Comprehensive Learning
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Solutions
              </span>
            </h2>
          </motion.div>

          <div className="space-y-20">
            {offerings.map((offering, index) => (
              <FeatureHighlight
                key={index}
                icon={offering.icon}
                title={offering.title}
                description={offering.description}
                items={offering.items}
                reverse={index % 2 === 1}
                delay={index * 0.2}
              />
            ))}
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="max-w-7xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-blue-200 px-6 py-3 rounded-full shadow-lg mb-6">
              <Eye className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-blue-700">Our Vision</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Comprehensive Learning
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Solutions
              </span>
            </h2>
          </motion.div>

          <div className="space-y-20">
            {offerings.map((offering, index) => (
              <FeatureHighlight
                key={index}
                icon={offering.icon}
                title={offering.title}
                description={offering.description}
                items={offering.items}
                reverse={index % 2 === 1}
                delay={index * 0.2}
              />
            ))}
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="max-w-7xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-blue-200 px-6 py-3 rounded-full shadow-lg mb-6">
              <Eye className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-blue-700">Our Vision</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Shaping Tomorrow's
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                {" "}
                World
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedCard delay={0.2}>
              <div className="space-y-8">
                <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Active Creators
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    We envision a world where students are not just passive
                    learners but active creators, leaders, and innovators—where
                    every child sees themselves as capable of building something
                    meaningful.
                  </p>
                </div>

                <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Future-Ready Generation
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    A generation of students who understand business, ethics,
                    and impact by the time they leave school— equipped with both
                    knowledge and wisdom.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 rounded-3xl blur-2xl opacity-30" />
                <div className="relative bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-10 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                    EduManiax Dreams Of
                  </h3>

                  <div className="space-y-6">
                    {[
                      {
                        icon: <Lightbulb className="w-6 h-6" />,
                        title: "Innovative Classrooms",
                        description: "Where ideas are as valued as grades",
                      },
                      {
                        icon: <Globe className="w-6 h-6" />,
                        title: "Global Impact",
                        description:
                          "Education measured by capability and contribution",
                      },
                      {
                        icon: <Heart className="w-6 h-6" />,
                        title: "Meaningful Learning",
                        description:
                          "Every student building something that matters",
                      },
                    ].map((dream, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.2 }}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100"
                      >
                        <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white">
                          {dream.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-1">
                            {dream.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {dream.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Who We Serve */}
        <section id="audience" className="max-w-7xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-blue-200 px-6 py-3 rounded-full shadow-lg mb-6">
              <Users className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-blue-700">Who We Serve</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              Our Learning
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {" "}
                Community
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Built to support a wide ecosystem of learners and educators,
              creating connections that amplify learning impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {audiences.map((audience, index) => (
              <AudienceCard
                key={index}
                icon={audience.icon}
                title={audience.title}
                description={audience.description}
                color={audience.color}
                delay={index * 0.2}
              />
            ))}
          </div>
        </section>

        {/* Why EduManiax */}
        <section className="max-w-7xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-blue-200 px-6 py-3 rounded-full shadow-lg mb-6">
              <Shield className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-blue-700">
                Why EduManiax?
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              The Future Demands
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                {" "}
                More
              </span>
            </h2>
          </motion.div>

          <AnimatedCard delay={0.2}>
            <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-12 shadow-xl text-center">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                Because the future demands more than rote learning. It demands
                adaptability, initiative, empathy, and creativity—and these
                aren't taught by chance.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: <Play className="w-8 h-8" />,
                    title: "Experimentation Space",
                    description:
                      "Where young minds can experiment and grow safely",
                  },
                  {
                    icon: <Zap className="w-8 h-8" />,
                    title: "Modern Tools",
                    description: "Easy-to-use tools for 21st-century learning",
                  },
                  {
                    icon: <TrendingUp className="w-8 h-8" />,
                    title: "Growth Over Perfection",
                    description:
                      "Valuing growth over perfection, ideas over memorization",
                  },
                ].map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.2 }}
                    className="text-center"
                  >
                    <div className="inline-flex p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4">
                      {React.cloneElement(reason.icon, {
                        className: "w-8 h-8 text-white",
                      })}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedCard>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto mb-16">
          <AnimatedCard delay={0.2}>
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6"
                >
                  <Sparkles className="w-12 h-12" />
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  EduManiax - Igniting Minds. Empowering Futures.
                </h2>

                <p className="text-2xl md:text-3xl font-light mb-8 opacity-90">
                  Let's build a world where every student believes:
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-2xl md:text-3xl font-bold italic mb-8"
                >
                  "I can create, I can lead, I can make a difference."
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => navigate("/register")}
                >
                  Start Your Journey
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
          </AnimatedCard>
        </section>
      </div>
    </div>
   </div>
  );
};

export default AboutUs;
