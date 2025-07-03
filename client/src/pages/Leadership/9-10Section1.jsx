import React, { useState, useEffect } from 'react';
import { Users, Crown, Heart, Target, Lightbulb, CheckCircle, Star, ArrowRight, Globe, Award, UserCheck, Zap } from 'lucide-react';

const Module1LeadershipFoundations = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentLeader, setCurrentLeader] = useState(0);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [currentTrait, setCurrentTrait] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards(Array.from({ length: 20 }, (_, i) => i));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLeader((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearTimeout(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTrait((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearTimeout(interval);
  }, []);

  const leadershipTraits = [
    {
      trait: "Vision",
      description: "Has a clear idea of what they want to improve",
      icon: <Target className="w-8 h-8" />,
      example: "Planning a school environmental project"
    },
    {
      trait: "Integrity",
      description: "Does the right thing, even when it's difficult",
      icon: <CheckCircle className="w-8 h-8" />,
      example: "Admitting mistakes and learning from them"
    },
    {
      trait: "Confidence",
      description: "Stands up for what they believe",
      icon: <Star className="w-8 h-8" />,
      example: "Speaking up against bullying"
    },
    {
      trait: "Empathy",
      description: "Understands others' feelings and perspectives",
      icon: <Heart className="w-8 h-8" />,
      example: "Helping a stressed classmate during exams"
    },
    {
      trait: "Responsibility",
      description: "Owns up to mistakes and finds solutions",
      icon: <UserCheck className="w-8 h-8" />,
      example: "Taking accountability for group project outcomes"
    },
    {
      trait: "Adaptability",
      description: "Stays calm and flexible during change",
      icon: <Zap className="w-8 h-8" />,
      example: "Adjusting plans when circumstances change"
    }
  ];

  const leadershipStyles = [
    {
      style: "Directive",
      description: "Leader gives clear, firm instructions",
      bestFor: "In emergencies or new/untrained teams",
      color: "from-green-500 to-emerald-600",
      icon: <Crown className="w-6 h-6" />
    },
    {
      style: "Democratic",
      description: "Leader encourages team to participate in decisions",
      bestFor: "For group projects and inclusive environments",
      color: "from-emerald-500 to-green-600",
      icon: <Users className="w-6 h-6" />
    },
    {
      style: "Servant",
      description: "Leader supports the needs of others first",
      bestFor: "When trust-building and empathy are key",
      color: "from-green-600 to-teal-600",
      icon: <Heart className="w-6 h-6" />
    },
    {
      style: "Transformational",
      description: "Leader inspires big change and vision",
      bestFor: "When launching campaigns or new initiatives",
      color: "from-teal-500 to-green-600",
      icon: <Lightbulb className="w-6 h-6" />
    }
  ];

  const realWorldLeaders = [
    {
      name: "Greta Thunberg",
      role: "Climate Activist",
      achievement: "No title or office, but sparked a global movement using her voice and values",
      image: "🌍",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Malala Yousafzai",
      role: "Education Advocate",
      achievement: "Faced danger to stand up for girls' education and became a global youth leader",
      image: "📚",
      color: "from-emerald-500 to-green-600"
    },
    {
      name: "Gitanjali Rao",
      role: "Young Scientist",
      achievement: "Invented a device to detect lead in water and now mentors other student innovators",
      image: "🔬",
      color: "from-green-600 to-teal-600"
    }
  ];

  return (
    <div
      id="m-1"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-1"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 animate-pulse">
                <Users className="w-20 h-20 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Foundations of Leadership
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8">
              From Influence to Impact - Discover what makes a true leader and how you can develop leadership skills
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-lg text-white/90 font-medium">
                Leadership is not about having a title - it's about inspiring others to achieve greatness together
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        
        {/* What is Leadership Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What is Leadership?
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500 max-w-4xl mx-auto">
              <p className="text-2xl text-gray-700 font-medium leading-relaxed">
                Leadership is the ability to guide, influence, or inspire individuals or groups to work towards a common goal.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  It's not just about giving instructions...
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: <Heart className="w-5 h-5" />, text: "Inspiring trust" },
                    { icon: <Target className="w-5 h-5" />, text: "Solving problems" },
                    { icon: <Star className="w-5 h-5" />, text: "Creating a vision" },
                    { icon: <Users className="w-5 h-5" />, text: "Helping others grow" }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-400 transform hover:scale-105 transition-all duration-300 ${
                        visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="text-green-600">
                        {item.icon}
                      </div>
                      <p className="text-lg font-medium text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-1">
                <div className="bg-white rounded-3xl p-8">
                  <div className="text-center">
                    <div className="text-8xl mb-6">👑</div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-8">Key Insight</h3>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-400">
                      <p className="text-lg text-gray-700 font-medium leading-relaxed">
                        You don't need a title to be a leader. You need <strong className="text-green-600">values</strong>, <strong className="text-emerald-600">vision</strong>, and the <strong className="text-teal-600">courage to act</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership vs Authority */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Leadership vs Authority
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the difference is crucial for becoming an effective leader
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border-l-4 border-red-400">
              <div className="flex items-center mb-6">
                <div className="bg-red-500 rounded-full p-3 mr-4">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Authority</h3>
              </div>
              <p className="text-lg text-gray-700 mb-4 font-medium">
                When people follow you because they <strong>have to</strong>
              </p>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <p className="text-gray-600">
                  <strong>Example:</strong> A school principal giving orders
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <div className="flex items-center mb-6">
                <div className="bg-green-500 rounded-full p-3 mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Leadership</h3>
              </div>
              <p className="text-lg text-gray-700 mb-4 font-medium">
                When people follow you because they <strong>want to</strong>
              </p>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <p className="text-gray-600">
                  <strong>Example:</strong> A respected classmate who always helps the team
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Types of Leadership */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Different Faces of Leadership
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border-l-4 border-green-500 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 mr-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Formal Leadership</h3>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  Comes with a position or title
                </p>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <p className="text-gray-600 font-medium">
                    Examples: School captain, club president
                  </p>
                </div>
                <p className="text-gray-600">
                  Has official responsibilities and power
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-8 border-l-4 border-emerald-500 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-4 mr-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Informal Leadership</h3>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  Happens when someone leads through behavior and influence
                </p>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <p className="text-gray-600 font-medium">
                    Example: A student who helps classmates understand difficult topics and brings people together during group tasks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Traits Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              🧠 Core Traits of Effective Leaders
            </h2>
          </div>

          {/* Featured Trait (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-3xl p-12 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-green-200">
                    {leadershipTraits[currentTrait].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-4xl font-bold mb-4">{leadershipTraits[currentTrait].trait}</h3>
                    <p className="text-xl opacity-90 mb-4">{leadershipTraits[currentTrait].description}</p>
                    <div className="bg-white/20 rounded-xl p-4">
                      <p className="text-sm">Example: <strong>{leadershipTraits[currentTrait].example}</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Traits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadershipTraits.map((trait, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentTrait === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentTrait(index)}
              >
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {trait.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{trait.trait}</h3>
                  <p className="text-gray-600 mb-4">{trait.description}</p>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <p className="text-sm text-gray-700 font-medium">{trait.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Styles */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              🧬 Leadership Styles
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Different leaders use different approaches, based on the situation, personality, and group dynamics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {leadershipStyles.map((style, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  selectedStyle === index ? 'ring-4 ring-green-300' : ''
                }`}
                onClick={() => setSelectedStyle(selectedStyle === index ? null : index)}
              >
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${style.color} rounded-full p-4 mr-4`}>
                    {style.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{style.style}</h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg text-gray-700">{style.description}</p>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border-l-4 border-green-400">
                    <p className="text-gray-700">
                      <strong className="text-green-600">Works best:</strong> {style.bestFor}
                    </p>
                  </div>
                  
                  {selectedStyle === index && (
                    <div className="bg-gray-50 rounded-xl p-4 animate-fade-in">
                      <p className="text-gray-600 font-medium">
                        💡 Remember: Good leaders shift styles when needed!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 text-center">
            <p className="text-xl text-gray-700 font-medium">
              <strong className="text-green-600">Key Insight:</strong> Good leaders shift styles when needed.
            </p>
          </div>
        </div>

        {/* Real-World Teen Examples */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              🔎 Real-World Teen Examples
            </h2>
            <p className="text-xl text-gray-600">
              Young leaders who changed the world
            </p>
          </div>

          {/* Featured Leader (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Featured Leader</div>
              <div className={`bg-gradient-to-r ${realWorldLeaders[currentLeader].color} text-white rounded-3xl p-12 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="text-8xl mb-6">{realWorldLeaders[currentLeader].image}</div>
                <h3 className="text-4xl font-bold mb-4">{realWorldLeaders[currentLeader].name}</h3>
                <p className="text-2xl opacity-90 mb-6">{realWorldLeaders[currentLeader].role}</p>
                <div className="bg-white/20 rounded-xl p-6">
                  <p className="text-lg">{realWorldLeaders[currentLeader].achievement}</p>
                </div>
              </div>
            </div>
          </div>

          {/* All Leaders Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {realWorldLeaders.map((leader, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentLeader === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
                onClick={() => setCurrentLeader(index)}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{leader.image}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{leader.name}</h3>
                  <p className="text-green-600 font-medium mb-4">{leader.role}</p>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-sm text-gray-700">{leader.achievement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership in Action */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              🛠️ Leadership in Action (For Students)
            </h2>
            <p className="text-xl text-gray-600">
              Ways you can practice leadership right now
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Users className="w-6 h-6" />, text: "Starting a club or campaign in school", color: "from-green-500 to-emerald-500" },
              { icon: <Heart className="w-6 h-6" />, text: "Mediating peer conflicts fairly", color: "from-emerald-500 to-green-500" },
              { icon: <UserCheck className="w-6 h-6" />, text: "Helping a classmate who is struggling", color: "from-green-600 to-emerald-600" },
              { icon: <Lightbulb className="w-6 h-6" />, text: "Proposing ideas to improve school life", color: "from-emerald-600 to-green-600" },
              { icon: <Globe className="w-6 h-6" />, text: "Volunteering for social causes", color: "from-green-500 to-teal-500" },
              { icon: <Target className="w-6 h-6" />, text: "Leading group projects effectively", color: "from-teal-500 to-green-500" }
            ].map((action, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index + 4) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`bg-gradient-to-r ${action.color} rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-white">
                    {action.icon}
                  </div>
                </div>
                <p className="text-center text-gray-700 font-medium">{action.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership is a Skill */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center">
            <div className="text-6xl mb-8">🔁</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Leadership is a Skill, Not a Status
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              You don't have to be "born a leader" — you become one through continuous growth and practice
            </p>
            
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { icon: <Target className="w-6 h-6" />, text: "Practice", description: "Take on leadership opportunities" },
                { icon: <Heart className="w-6 h-6" />, text: "Self-awareness", description: "Understand your strengths and weaknesses" },
                { icon: <Users className="w-6 h-6" />, text: "Learning from feedback", description: "Listen to others and improve" },
                { icon: <CheckCircle className="w-6 h-6" />, text: "Taking responsibility", description: "Own your decisions and actions" },
                { icon: <Star className="w-6 h-6" />, text: "Helping others grow", description: "Support your team's development" }
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">
                      {skill.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{skill.text}</h3>
                  <p className="text-sm text-gray-600">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

       {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-3xl p-8 md:p-12">
          <div className="text-center">
            <div className="text-6xl mb-8">🎯</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Key Takeaway
            </h2>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-2xl font-bold mb-6">
                Leadership is about inspiring others to take action — not through force, but by vision, values, and trust.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-3xl mb-2">👁️</div>
                  <h3 className="font-bold text-lg mb-2">Vision</h3>
                  <p className="text-green-100">Clear direction and purpose</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-3xl mb-2">⭐</div>
                  <h3 className="font-bold text-lg mb-2">Values</h3>
                  <p className="text-green-100">Strong moral principles</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-3xl mb-2">🤝</div>
                  <h3 className="font-bold text-lg mb-2">Trust</h3>
                  <p className="text-green-100">Building meaningful relationships</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              🧠 Challenge: Leadership Identity Mixer
            </h2>
            <div className="bg-white rounded-2xl p-6 max-w-2xl mx-auto shadow-lg">
              <p className="text-lg text-gray-700 font-medium">
                <strong className="text-green-600">Badge Earned:</strong> 🧠 Style Strategist
              </p>
            </div>
          </div>

          <LeadershipChallenge />
        </div>

        {/* Summary Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              📝 Module Summary
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">What You've Learned</h3>
              {[
                "Leadership is influence, not authority",
                "Different leadership styles for different situations", 
                "Core traits that make effective leaders",
                "Real examples of young leaders making impact",
                "How to practice leadership as a student"
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-l-4 border-green-400"
                >
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Ready for Next Module?</h3>
              <p className="text-xl mb-6 opacity-90">
                Now that you understand leadership foundations, let's explore how to communicate like a leader!
              </p>
              <div className="flex items-center space-x-3 bg-white/20 rounded-xl p-4">
                <ArrowRight className="w-6 h-6" />
                <span className="font-medium">Module 2: Communication & Emotional Intelligence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Leadership Challenge Component
const LeadershipChallenge = () => {
  const [currentTask, setCurrentTask] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState({});

  const challenges = [
    {
      title: "Scenario Matching",
      description: "Match the leadership style to the situation",
      scenarios: [
        {
          situation: "Your group is confused about a complex project and needs clear direction",
          options: ["Directive", "Democratic", "Servant", "Transformational"],
          correct: 0,
          explanation: "Directive leadership provides clear instructions when teams are confused or new to a task."
        },
        {
          situation: "Planning a school event where everyone should contribute ideas",
          options: ["Directive", "Democratic", "Servant", "Transformational"],
          correct: 1,
          explanation: "Democratic leadership encourages participation and input from all team members."
        },
        {
          situation: "A teammate is struggling and needs support",
          options: ["Directive", "Democratic", "Servant", "Transformational"],
          correct: 2,
          explanation: "Servant leadership focuses on supporting and helping team members grow."
        }
      ]
    },
    {
      title: "Leadership Values Reflection",
      description: "What values define your leadership?",
      isReflection: true,
      prompts: [
        "What causes do you care deeply about?",
        "How do you handle conflicts with friends?",
        "What would you change about your school if you could?",
        "How do you support teammates when they're struggling?"
      ]
    }
  ];

  const handleAnswerSelect = (taskIndex, scenarioIndex, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [`${taskIndex}-${scenarioIndex}`]: answerIndex
    });
    
    setShowResults({
      ...showResults,
      [`${taskIndex}-${scenarioIndex}`]: true
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-center space-x-4 mb-8">
        {challenges.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTask(index)}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              currentTask === index
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Task {index + 1}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {challenges[currentTask].title}
          </h3>
          <p className="text-gray-600">{challenges[currentTask].description}</p>
        </div>

        {challenges[currentTask].isReflection ? (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🤔</div>
              <p className="text-lg text-gray-700">
                Take a moment to reflect on these questions about your leadership style
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {challenges[currentTask].prompts.map((prompt, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-400"
                >
                  <p className="text-gray-700 font-medium mb-4">{prompt}</p>
                  <div className="bg-white rounded-lg p-3 min-h-[80px] border-2 border-dashed border-gray-200">
                    <p className="text-gray-400 text-sm">Think about your answer...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {challenges[currentTask].scenarios.map((scenario, scenarioIndex) => (
              <div
                key={scenarioIndex}
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-400"
              >
                <h4 className="text-lg font-bold text-gray-800 mb-4">
                  Scenario {scenarioIndex + 1}
                </h4>
                <p className="text-gray-700 mb-6 font-medium">
                  {scenario.situation}
                </p>
                
                <div className="grid md:grid-cols-2 gap-3 mb-4">
                  {scenario.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      onClick={() => handleAnswerSelect(currentTask, scenarioIndex, optionIndex)}
                      className={`p-3 rounded-lg text-left font-medium transition-all duration-300 ${
                        selectedAnswers[`${currentTask}-${scenarioIndex}`] === optionIndex
                          ? optionIndex === scenario.correct
                            ? 'bg-green-500 text-white'
                            : 'bg-red-400 text-white'
                          : 'bg-white hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {showResults[`${currentTask}-${scenarioIndex}`] && (
                  <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                    <div className="flex items-center space-x-2 mb-2">
                      {selectedAnswers[`${currentTask}-${scenarioIndex}`] === scenario.correct ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-red-400 flex items-center justify-center">
                          <span className="text-white text-xs">✗</span>
                        </div>
                      )}
                      <span className="font-medium text-gray-800">
                        {selectedAnswers[`${currentTask}-${scenarioIndex}`] === scenario.correct ? 'Correct!' : 'Not quite!'}
                      </span>
                    </div>
                    <p className="text-gray-600">{scenario.explanation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Module1LeadershipFoundations;