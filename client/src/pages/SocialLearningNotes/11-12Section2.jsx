import React, { useState, useEffect } from 'react';
import { Heart, Users, Shield, Smartphone, AlertTriangle, CheckCircle, MessageCircle, UserCheck, Zap, Eye, Target, Flag, Clock, Star } from 'lucide-react';

const Module2HumanDynamics = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [selectedAttachment, setSelectedAttachment] = useState(null);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [boundaryScripts, setBoundaryScripts] = useState(['', '', '']);
  const [socialMediaReflection, setSocialMediaReflection] = useState({
    curation: '',
    validation: ''
  });
  const [conflictAnalysis, setConflictAnalysis] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const attachmentStyles = [
    {
      type: "Secure",
      description: "Comfortable with intimacy and independence",
      response: "Seeks connection when upset",
      color: "from-green-500 to-emerald-500",
      icon: <Heart className="w-8 h-8 text-white" />
    },
    {
      type: "Anxious",
      description: "Seeks closeness but fears abandonment",
      response: "Becomes clingy when someone lets them down",
      color: "from-green-400 to-green-600",
      icon: <Users className="w-8 h-8 text-white" />
    },
    {
      type: "Avoidant",
      description: "Values independence over intimacy",
      response: "Withdraws when upset",
      color: "from-emerald-500 to-teal-500",
      icon: <Shield className="w-8 h-8 text-white" />
    }
  ];

  const practiceScenarios = [
    {
      situation: "A friend vents but never listens in return",
      challenge: "One-sided emotional exchange",
      icon: <MessageCircle className="w-6 h-6 text-green-600" />
    },
    {
      situation: "A classmate shares something that feels too personal too soon",
      challenge: "Inappropriate emotional boundaries",
      icon: <AlertTriangle className="w-6 h-6 text-green-600" />
    }
  ];

  const redFlagsVsGrowth = [
    {
      category: "Red Flags",
      items: ["Manipulation", "Control", "Emotional dismissal"],
      color: "from-red-100 to-red-50",
      borderColor: "border-red-300",
      textColor: "text-red-700",
      icon: <Flag className="w-8 h-8 text-red-600" />
    },
    {
      category: "Growth Zones",
      items: ["Honest feedback", "Respectful disagreements", "Healthy tension"],
      color: "from-green-100 to-emerald-50",
      borderColor: "border-green-300",
      textColor: "text-green-700",
      icon: <Target className="w-8 h-8 text-green-600" />
    }
  ];

  const handleBoundaryScriptChange = (index, value) => {
    const newScripts = [...boundaryScripts];
    newScripts[index] = value;
    setBoundaryScripts(newScripts);
  };

  return (
    <div
      id="s-2"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-2"] = el;
        }
      }}
      className="mb-10"
    >
        <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-600 to-green-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Users className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Navigating Human Dynamics
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              "Relate to Elevate" - Relationships are emotional ecosystems that shape who we become
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Introduction */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500">
          <div className="text-center mb-8">
            <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Understanding Emotional Ecosystems
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Relationships are not just social — they're emotional ecosystems that shape who we become. 
              Learn to navigate these connections with wisdom and authenticity.
            </p>
          </div>
        </div>

        {/* Section 1: Attachment Styles and Connection */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Attachment Styles and Connection
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The way you form bonds affects how you handle conflict, feedback, and trust.
            </p>
          </div>

          {/* Attachment Styles Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {attachmentStyles.map((style, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  selectedAttachment === index ? 'ring-4 ring-green-300' : ''
                }`}
                onClick={() => setSelectedAttachment(selectedAttachment === index ? null : index)}
              >
                <div className="text-center mb-6">
                  <div className={`bg-gradient-to-r ${style.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                    {style.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{style.type}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <p className="text-gray-700 font-medium">{style.description}</p>
                  </div>
                  
                  {selectedAttachment === index && (
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-4 border-l-4 border-emerald-400 animate-fade-in">
                      <div className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-2">
                        Typical Response
                      </div>
                      <p className="text-gray-700">{style.response}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Exploration Questions */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <Eye className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Explore Your Patterns
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-400">
                <h4 className="font-bold text-gray-800 mb-4">Reflection Question 1</h4>
                <p className="text-gray-700 mb-4">What's your default response when someone lets you down?</p>
                <textarea
                  className="w-full p-4 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                  rows="3"
                  placeholder="Reflect on your typical reaction..."
                />
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-emerald-400">
                <h4 className="font-bold text-gray-800 mb-4">Reflection Question 2</h4>
                <p className="text-gray-700 mb-4">Do you seek connection or withdraw when upset?</p>
                <textarea
                  className="w-full p-4 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                  rows="3"
                  placeholder="Think about your coping patterns..."
                />
              </div>
            </div>

            {/* Activity Suggestion */}
            <div className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-6">
              <div className="text-center">
                <UserCheck className="w-10 h-10 mx-auto mb-4 opacity-90" />
                <h4 className="text-xl font-bold mb-3">Discovery Activity</h4>
                <p className="text-green-100">
                  Take an online attachment style quiz and reflect: How does this affect your closest relationships?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Emotional Boundaries and Consent */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Emotional Boundaries and Consent
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Healthy relationships require emotional boundaries — knowing when to say yes, no, or not now.
            </p>
          </div>

          {/* Practice Scenarios */}
          <div className="grid md:grid-cols-2 gap-8">
            {practiceScenarios.map((scenario, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-xl border border-gray-100 cursor-pointer transition-all duration-300 hover:shadow-2xl ${
                  selectedScenario === index ? 'ring-4 ring-green-300 scale-105' : ''
                }`}
                onClick={() => setSelectedScenario(selectedScenario === index ? null : index)}
              >
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    {scenario.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{scenario.challenge}</h3>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                  <p className="text-gray-700 font-medium">{scenario.situation}</p>
                </div>
                
                {selectedScenario === index && (
                  <div className="mt-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-4 border-l-4 border-emerald-400 animate-fade-in">
                    <div className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-2">
                      How would you handle this?
                    </div>
                    <textarea
                      className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                      rows="3"
                      placeholder="Write your approach..."
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Boundary Script Bank Challenge */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="text-center mb-8">
              <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Boundary Script Bank Challenge
              </h3>
              <p className="text-gray-700 mt-4">
                Create 3 phrases you can use to assert your space respectfully
              </p>
            </div>
            
            <div className="space-y-6">
              {[1, 2, 3].map((num, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      {num}
                    </div>
                    <h4 className="font-bold text-gray-800">Boundary Script #{num}</h4>
                  </div>
                  <textarea
                    className="w-full p-4 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                    rows="2"
                    placeholder={`Example: "I want to be there for you, but I need a break right now."`}
                    value={boundaryScripts[index]}
                    onChange={(e) => handleBoundaryScriptChange(index, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Red Flags vs Growth Zones */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Red Flags vs. Growth Zones
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Not all discomfort is a sign to leave — sometimes it's a call to grow. Know the difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {redFlagsVsGrowth.map((category, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${category.color} rounded-2xl p-8 border-2 ${category.borderColor} shadow-xl`}
              >
                <div className="text-center mb-6">
                  {category.icon}
                  <h3 className={`text-2xl font-bold ${category.textColor} mt-4`}>{category.category}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          category.category === 'Red Flags' ? 'bg-red-500' : 'bg-green-500'
                        }`}></div>
                        <p className="text-gray-700 font-medium">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Discussion Prompt */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Discussion Prompt
              </h3>
              <p className="text-gray-700 mt-4">
                Write about a past conflict. Was it a red flag or a growth opportunity?
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <textarea
                className="w-full p-6 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                rows="6"
                placeholder="Reflect on a past conflict and analyze whether it was a warning sign or an opportunity for growth..."
                value={conflictAnalysis}
                onChange={(e) => setConflictAnalysis(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Section 4: Social Media and Identity Projection */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Social Media and Identity Projection
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Online spaces influence self-worth. The "performance self" often masks vulnerability.
            </p>
          </div>

          {/* Reflection Questions */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Your Online Persona</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                  <p className="text-gray-700 font-medium mb-3">What version of yourself do you curate online?</p>
                  <textarea
                    className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                    rows="3"
                    placeholder="Reflect on your online presence..."
                    value={socialMediaReflection.curation}
                    onChange={(e) => setSocialMediaReflection(prev => ({ ...prev, curation: e.target.value }))}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Validation Seeking</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                  <p className="text-gray-700 font-medium mb-3">How often do you edit your truth to gain validation?</p>
                  <textarea
                    className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                    rows="3"
                    placeholder="Think about authenticity vs approval..."
                    value={socialMediaReflection.validation}
                    onChange={(e) => setSocialMediaReflection(prev => ({ ...prev, validation: e.target.value }))}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 48-Hour Challenge */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-3xl p-8 md:p-12">
            <div className="text-center">
              <Clock className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                48-Hour Digital Detox Challenge
              </h3>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
                <p className="text-xl font-medium mb-4">
                  Go 48 hours without posting or viewing stories
                </p>
                <p className="text-green-100 text-sm mb-4">
                  Journal how it affects your sense of self and social comparison
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">48</div>
                    <div className="text-sm">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">0</div>
                    <div className="text-sm">Posts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Module Completion
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-6">
              Congratulations! You've learned to navigate human dynamics with greater awareness. 
              Remember: healthy relationships are built on understanding, boundaries, and authentic connection.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Relate</strong> + 
                <strong className="text-emerald-600"> Elevate</strong> = 
                <strong className="text-teal-600"> Meaningful Connections 🤝</strong>
              </p>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
    </div>
    
  );
};

export default Module2HumanDynamics;