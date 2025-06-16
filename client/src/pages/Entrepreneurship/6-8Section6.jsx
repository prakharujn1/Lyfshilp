import React, { useState, useEffect } from 'react';

const Module6 = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentEthicalDilemma, setCurrentEthicalDilemma] = useState(0);
  const [hoveredImpact, setHoveredImpact] = useState(null);

  const ethicalDilemmas = [
    { 
      scenario: "AI hiring system rejects qualified candidates", 
      issue: "Bias", 
      icon: "⚖️",
      color: "from-red-400 to-pink-500"
    },
    { 
      scenario: "AI recommends content but won't explain why", 
      issue: "Transparency", 
      icon: "🔍",
      color: "from-blue-400 to-indigo-500"
    },
    { 
      scenario: "Self-driving car causes accident", 
      issue: "Accountability", 
      icon: "🚗",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  const socialImpacts = [
    {
      title: "Job Creation",
      icon: "🚀",
      positive: "New AI jobs: data scientists, prompt engineers",
      negative: "Some traditional roles may be automated",
      color: "bg-green-100 hover:bg-green-200"
    },
    {
      title: "Accessibility", 
      icon: "♿",
      positive: "AI helps people with disabilities navigate better",
      negative: "Not everyone has access to AI tools",
      color: "bg-blue-100 hover:bg-blue-200"
    },
    {
      title: "Privacy",
      icon: "🔐", 
      positive: "AI can protect data with encryption",
      negative: "AI systems collect vast amounts of personal data",
      color: "bg-purple-100 hover:bg-purple-200"
    }
  ];

  const caseStudies = [
    {
      field: "Healthcare",
      icon: "🏥",
      benefit: "AI helps doctors diagnose diseases faster and more accurately",
      concern: "Patient data privacy and potential misdiagnosis",
      example: "AI can spot cancer in X-rays that doctors might miss",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      field: "Education", 
      icon: "🎓",
      benefit: "Personalized learning adapts to each student's pace",
      concern: "Potential bias in grading and reduced human interaction",
      example: "AI tutors available 24/7 to help with homework",
      gradient: "from-blue-400 to-cyan-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentEthicalDilemma((prev) => (prev + 1) % ethicalDilemmas.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-card');
            setVisibleCards(prev => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-card]').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="6"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["6"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6 animate-pulse">
              <span className="text-4xl">⚖️</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Ethics & Social Impact
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Using AI responsibly to build a better world! 🌍✨
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Ethical Considerations */}
        <div 
          data-card="ethics"
          className={`mb-16 transform transition-all duration-1000 ${visibleCards.includes('ethics') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-purple-100">
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">🤔</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Ethical Considerations
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                With great AI power comes great responsibility! Let's explore the key ethical challenges.
              </p>
            </div>

            {/* Interactive Ethical Dilemmas */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                {ethicalDilemmas.map((dilemma, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      currentEthicalDilemma === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                  >
                    <div className={`h-full bg-gradient-to-r ${dilemma.color} rounded-2xl p-8 text-white flex items-center justify-between`}>
                      <div className="flex-1">
                        <div className="flex items-center mb-4">
                          <span className="text-5xl mr-4">{dilemma.icon}</span>
                          <h3 className="text-2xl font-bold">{dilemma.issue}</h3>
                        </div>
                        <p className="text-xl opacity-90">{dilemma.scenario}</p>
                      </div>
                      <div className="text-6xl opacity-30">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Dots indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {ethicalDilemmas.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentEthicalDilemma === index ? 'bg-purple-600 w-8' : 'bg-gray-300'
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Ethical Principles Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-200">
                <div className="text-center">
                  <span className="text-4xl mb-3 block">⚖️</span>
                  <h3 className="text-xl font-bold text-red-700 mb-3">Bias & Fairness</h3>
                  <p className="text-gray-700">AI systems can inherit biases from their creators or data, leading to unfair treatment.</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                <div className="text-center">
                  <span className="text-4xl mb-3 block">🔍</span>
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Transparency</h3>
                  <p className="text-gray-700">Users should understand how AI makes decisions that affect them.</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
                <div className="text-center">
                  <span className="text-4xl mb-3 block">🎯</span>
                  <h3 className="text-xl font-bold text-orange-700 mb-3">Accountability</h3>
                  <p className="text-gray-700">Who is responsible when AI makes a mistake or causes harm?</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Impact */}
        <div 
          data-card="impact"
          className={`mb-16 transform transition-all duration-1000 delay-200 ${visibleCards.includes('impact') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-indigo-200">
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">🌍</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Social Impact of AI
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                AI is reshaping society in both positive and challenging ways. Let's explore both sides!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {socialImpacts.map((impact, index) => (
                <div 
                  key={index}
                  className={`${impact.color} rounded-2xl p-6 transition-all duration-300 cursor-pointer transform hover:-translate-y-2`}
                  onMouseEnter={() => setHoveredImpact(index)}
                  onMouseLeave={() => setHoveredImpact(null)}
                >
                  <div className="text-center">
                    <span className="text-5xl mb-4 block">{impact.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{impact.title}</h3>
                    
                    <div className={`transition-all duration-300 ${hoveredImpact === index ? 'opacity-100' : 'opacity-70'}`}>
                      <div className="mb-3">
                        <div className="text-sm font-semibold text-green-700 mb-1">✅ Positive Impact:</div>
                        <p className="text-sm text-gray-700">{impact.positive}</p>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-red-700 mb-1">⚠️ Challenge:</div>
                        <p className="text-sm text-gray-700">{impact.negative}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Responsible AI Use */}
        <div 
          data-card="responsible"
          className={`mb-16 transform transition-all duration-1000 delay-400 ${visibleCards.includes('responsible') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-green-100">
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">🛡️</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                How to Use AI Responsibly
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                As future AI innovators, here's your guide to building ethical AI systems!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl border border-green-200">
                  <span className="text-3xl">✅</span>
                  <div>
                    <h3 className="font-bold text-green-800 mb-2">Design Fair Systems</h3>
                    <p className="text-gray-700">Ensure AI systems are fair, transparent, and accountable to all users.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <span className="text-3xl">📚</span>
                  <div>
                    <h3 className="font-bold text-blue-800 mb-2">Educate Users</h3>
                    <p className="text-gray-700">Help people understand how AI works and how it affects them.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <span className="text-3xl">🤝</span>
                  <div>
                    <h3 className="font-bold text-purple-800 mb-2">Promote Inclusivity</h3>
                    <p className="text-gray-700">Make sure everyone can benefit from AI innovations, regardless of background.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-xl border border-orange-200">
                  <span className="text-3xl">🔒</span>
                  <div>
                    <h3 className="font-bold text-orange-800 mb-2">Protect Privacy</h3>
                    <p className="text-gray-700">Safeguard user data and respect people's right to privacy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div 
          data-card="cases"
          className={`mb-16 transform transition-all duration-1000 delay-600 ${visibleCards.includes('cases') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-12">
              <span className="text-6xl mb-4 block">📋</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Real-World Case Studies
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Let's examine how AI is being used in different fields and the ethical considerations involved.
              </p>
            </div>

            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className={`bg-gradient-to-r ${study.gradient} p-6 text-white`}>
                    <div className="flex items-center">
                      <span className="text-4xl mr-4">{study.icon}</span>
                      <h3 className="text-2xl font-bold">AI in {study.field}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                        <h4 className="font-bold text-green-800 mb-2 flex items-center">
                          <span className="mr-2">🌟</span>Benefits
                        </h4>
                        <p className="text-gray-700 mb-3">{study.benefit}</p>
                        <div className="bg-white rounded-lg p-3 border border-green-100">
                          <p className="text-sm text-gray-600 italic">💡 Example: {study.example}</p>
                        </div>
                      </div>
                      
                      <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                        <h4 className="font-bold text-red-800 mb-2 flex items-center">
                          <span className="mr-2">⚠️</span>Concerns
                        </h4>
                        <p className="text-gray-700">{study.concern}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Future Responsibility */}
        <div 
          data-card="future"
          className={`transform transition-all duration-1000 delay-800 ${visibleCards.includes('future') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center">
              <span className="text-6xl mb-4 block">🚀</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Role as Future AI Leaders
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
                You have the power to shape how AI develops and impacts society. 
                Use this knowledge to build technology that makes the world better for everyone!
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="bg-white bg-opacity-20 rounded-xl p-4">
                  <span className="text-3xl block mb-2">🎯</span>
                  <p className=" text-black font-semibold">Think ethically first</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-4">
                  <span className="text-3xl block mb-2">🤝</span>
                  <p className=" text-black font-semibold">Include everyone</p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-xl p-4">
                  <span className="text-3xl block mb-2">🌍</span>
                  <p className=" text-black font-semibold">Build for good</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Module6;