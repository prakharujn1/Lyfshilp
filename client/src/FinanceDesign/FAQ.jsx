import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  ChevronDown, 
  BookOpen, 
  Clock, 
  Award, 
  Shield,
  Users,
  GraduationCap,
  Star,
  MessageCircle,
  X,
  HelpCircle,
  Sparkles,
  TrendingUp,
  ArrowRight
} from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { name: "All", icon: HelpCircle, color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-50", textColor: "text-blue-700" },
    { name: "Courses", icon: BookOpen, color: "from-emerald-500 to-teal-500", bgColor: "bg-emerald-50", textColor: "text-emerald-700" },
    { name: "Learning", icon: GraduationCap, color: "from-purple-500 to-violet-500", bgColor: "bg-purple-50", textColor: "text-purple-700" },
    { name: "Certificates", icon: Award, color: "from-amber-500 to-orange-500", bgColor: "bg-amber-50", textColor: "text-amber-700" },
    { name: "Support", icon: Shield, color: "from-rose-500 to-pink-500", bgColor: "bg-rose-50", textColor: "text-rose-700" }
  ];

  const faqs = [
    {
      id: 1,
      category: "Courses",
      question: "What makes EduManiax courses truly unique?",
      answer: "Our courses blend cutting-edge interactive learning with real-world applications through gamification, AI-powered personalized learning paths, and adaptive assessments. Every piece of content is crafted by industry veterans and continuously updated to reflect the latest trends and best practices in your field.",
      icon: BookOpen,
      popularity: 95,
      trending: true
    },
    {
      id: 2,
      category: "Learning",
      question: "How long does it take to complete a typical course?",
      answer: "Course duration is designed around your lifestyle and learning goals. Most courses span 4-8 weeks with 3-5 hours of focused study per week. Our adaptive platform learns your pace and adjusts accordingly - ambitious learners often finish early, while others prefer a deeper, more thorough exploration of concepts.",
      icon: Clock,
      popularity: 88,
      trending: false
    },
    {
      id: 3,
      category: "Support",
      question: "What if I'm not completely satisfied?",
      answer: "We stand behind every learning experience with our comprehensive 30-day satisfaction guarantee. If you're not thriving in your course, we'll provide a complete refund with zero hassle. Plus, you'll have ongoing access to our vibrant community forums and direct mentor support throughout your journey.",
      icon: Shield,
      popularity: 90,
      trending: false
    },
    {
      id: 4,
      category: "Learning",
      question: "Can I learn seamlessly on mobile devices?",
      answer: "Yes! Our platform is meticulously optimized for mobile-first learning. Access courses, tackle interactive quizzes, track detailed progress, and engage in community discussions from any device. Your learning journey syncs flawlessly across all your devices with offline capabilities for learning on-the-go.",
      icon: Users,
      popularity: 85,
      trending: false
    },
    {
      id: 5,
      category: "Support",
      question: "How do I get instant help when I'm stuck?",
      answer: "Support is always within reach through multiple channels: 24/7 intelligent chat support, thriving community forums, weekly instructor office hours, and collaborative peer study groups. Our AI learning companion provides instant assistance with common questions and intelligently guides you to the perfect resources.",
      icon: MessageCircle,
      popularity: 87,
      trending: false
    },
    {
      id: 6,
      category: "Certificates",
      question: "Can I showcase my certificates professionally?",
      answer: "Definitely! Our stunning digital certificates are designed for maximum impact across professional networks. Seamlessly add them to LinkedIn, showcase them in portfolios, or share achievements on social platforms. Each certificate includes blockchain verification for unquestionable authenticity and credibility.",
      icon: Star,
      popularity: 82,
      trending: true
    }
  ];

  const filteredFAQs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const faqItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingAnimation = {
    y: [-2, 2, -2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/30 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-300/20 rounded-full blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-purple-200/30 to-pink-300/20 rounded-full blur-3xl"
          animate={{
            y: [2, -2, 2],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
        {/* Enhanced Header Section */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md border border-blue-200/60 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg hover:shadow-xl transition-all duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={18} className="text-blue-500" />
            </motion.div>
            Got Questions? We've Got Expert Answers
          </motion.div>
          
          <motion.h1 
            className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-none"
            variants={itemVariants}
          >
            Frequently Asked
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              Questions
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Everything you need to know about your learning journey with EduManiax. 
            <br className="hidden sm:block" />
            Can't find what you're looking for? 
            <motion.span 
              className="text-blue-600 font-semibold cursor-pointer hover:text-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              {" "}Our support wizards are standing by! ✨
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Enhanced Search and Filter Section */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="bg-white/90 backdrop-blur-xl border border-slate-200/60 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
            variants={itemVariants}
            whileHover={{ y: -4 }}
          >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Enhanced Search Bar */}
              <div className="flex-1 relative group">
                <motion.div
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                >
                  <Search size={22} />
                </motion.div>
                <input
                  type="text"
                  placeholder="Search your question... ✨"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-12 py-4 bg-slate-50/80 border border-slate-200/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-300 focus:bg-white transition-all duration-300 text-lg placeholder-slate-400"
                />
                <AnimatePresence>
                  {searchTerm && (
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      onClick={() => setSearchTerm("")}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-slate-100"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X size={20} />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

              {/* Enhanced Category Filter */}
              <div className="flex gap-3 overflow-x-auto pb-2 lg:pb-0">
                {categories.map((category, index) => {
                  const Icon = category.icon;
                  const isSelected = selectedCategory === category.name;
                  
                  return (
                    <motion.button
                      key={category.name}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`flex items-center gap-3 px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 whitespace-nowrap relative overflow-hidden ${
                        isSelected
                          ? `${category.bgColor} ${category.textColor} shadow-lg ring-2 ring-blue-200`
                          : "bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 hover:shadow-md"
                      }`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {isSelected && (
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-10`}
                          layoutId="categoryHighlight"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <Icon size={18} />
                      {category.name}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced FAQ Items */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => {
                const Icon = faq.icon;
                const isOpen = openIndex === faq.id;
                const category = categories.find(cat => cat.name === faq.category);
                
                return (
                  <motion.div
                    key={faq.id}
                    layout
                    variants={faqItemVariants}
                    className="group"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <motion.div 
                      className={`bg-white/90 backdrop-blur-xl border border-slate-200/60 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                        isOpen ? "ring-2 ring-blue-500/30 shadow-2xl" : ""
                      }`}
                      initial={false}
                      animate={{
                        scale: isOpen ? 1.02 : 1,
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <motion.button
                        className="w-full p-8 flex items-center gap-6 text-left hover:bg-slate-50/50 transition-colors duration-300"
                        onClick={() => setOpenIndex(isOpen ? null : faq.id)}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Enhanced Icon */}
                        <motion.div 
                          className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${category?.color} rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden`}
                          whileHover={{ 
                            scale: 1.1,
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.5 }
                          }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            animate={isOpen ? { scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <Icon size={24} className="text-white relative z-10" />
                        </motion.div>

                        {/* Enhanced Question Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-700 transition-colors duration-200">
                              {faq.question}
                            </h3>
                            {faq.trending && (
                              <motion.div
                                className="flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <TrendingUp size={12} />
                                HOT
                              </motion.div>
                            )}
                          </div>
                          <div className="flex items-center gap-6 text-sm text-slate-500">
                            <motion.span 
                              className="flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1 rounded-full font-medium"
                              whileHover={{ scale: 1.05 }}
                            >
                              <Star size={14} className="text-amber-500" fill="currentColor" />
                              {faq.popularity}% helpful
                            </motion.span>
                            <span className={`px-3 py-1 ${category?.bgColor} ${category?.textColor} rounded-full text-xs font-semibold`}>
                              {faq.category}
                            </span>
                          </div>
                        </div>

                        {/* Enhanced Expand Icon */}
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="flex-shrink-0 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-blue-100 group-hover:text-blue-600 transition-all duration-200"
                        >
                          <ChevronDown size={20} />
                        </motion.div>
                      </motion.button>

                      {/* Enhanced Answer */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ 
                              duration: 0.5, 
                              ease: [0.25, 0.46, 0.45, 0.94],
                              opacity: { delay: 0.1 }
                            }}
                            className="overflow-hidden"
                          >
                            <motion.div 
                              className="px-8 pb-8 pl-24"
                              initial={{ y: -20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              <div className={`bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 rounded-2xl p-8 border-l-4 border-gradient-to-b ${category?.color} shadow-inner relative overflow-hidden`}>
                                <motion.div
                                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"
                                  initial={{ scaleX: 0 }}
                                  animate={{ scaleX: 1 }}
                                  transition={{ duration: 0.8, ease: "easeOut" }}
                                />
                                <p className="text-slate-700 leading-relaxed text-lg">
                                  {faq.answer}
                                </p>
                                <motion.div
                                  className="mt-6 flex items-center text-blue-600 font-medium text-sm cursor-pointer hover:text-blue-700 transition-colors"
                                  whileHover={{ x: 5 }}
                                >
                                  Was this helpful? Let us know
                                  <ArrowRight size={16} className="ml-2" />
                                </motion.div>
                              </div>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                className="text-center py-20"
              >
                <motion.div 
                  className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Search size={36} className="text-slate-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">No results found</h3>
                <p className="text-slate-600 mb-8 text-lg max-w-md mx-auto">
                  We couldn't find any FAQs matching "<span className="font-semibold text-blue-600">{searchTerm}</span>". 
                  Try adjusting your search or browse by category.
                </p>
                <motion.button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Clear Search & Start Over
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Contact Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Animated Background Elements */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            
            <div className="text-center relative z-10">
              <motion.div 
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <MessageCircle size={36} className="text-white" />
              </motion.div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">Still have questions?</h3>
              <p className="text-blue-100 mb-10 max-w-3xl mx-auto text-xl leading-relaxed">
                Can't find the answer you're looking for? Our friendly learning success team is here to guide you 
                every step of the way on your educational journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button 
                  className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold hover:bg-blue-50 transition-colors duration-200 shadow-xl hover:shadow-2xl text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle size={22} />
                  Chat with Support
                </motion.button>
                <motion.button 
                  className="inline-flex items-center gap-3 bg-blue-700/80 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-800/80 transition-colors duration-200 border border-white/20 text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse Help Center
                  <ArrowRight size={22} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;