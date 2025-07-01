import React, { useState, useEffect } from 'react';
import { Shield, Eye, Users, Scale, CheckCircle, AlertTriangle, Target, Award, Lightbulb, ArrowRight, Star, Flag } from 'lucide-react';

const Module7EthicsBias = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentBiasExample, setCurrentBiasExample] = useState(0);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [challengeStep, setChallengeStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBiasExample((prev) => (prev + 1) % biasExamples.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const biasExamples = [
    {
      title: "Favoritism",
      description: "Always picking the same person for opportunities",
      example: "Only choosing friends for group projects",
      solution: "Rotate responsibilities fairly",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Stereotyping",
      description: "Making assumptions based on appearance or background",
      example: "Assuming someone can't lead because they're quiet",
      solution: "Judge people by their actions, not assumptions",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Confirmation Bias",
      description: "Only listening to opinions that match yours",
      example: "Ignoring feedback that challenges your ideas",
      solution: "Actively seek diverse perspectives",
      color: "from-teal-500 to-green-600"
    }
  ];

  const scenarios = [
    {
      id: 1,
      title: "The Popular Decision",
      situation: "Your friend wants to exclude a new student from your group project because 'they're weird.' Everyone agrees.",
      options: [
        { text: "Go with the majority to avoid conflict", correct: false },
        { text: "Speak up and include the new student", correct: true },
        { text: "Stay silent but feel bad about it", correct: false }
      ],
      explanation: "A fair leader stands up for inclusion, even when it's unpopular. This is moral courage in action."
    },
    {
      id: 2,
      title: "The Bias Trap",
      situation: "Two students volunteer for class president. One is popular and outgoing, the other is quiet but has great ideas.",
      options: [
        { text: "Support the popular one - they'll win anyway", correct: false },
        { text: "Encourage people to listen to both candidates' ideas", correct: true },
        { text: "Don't get involved in politics", correct: false }
      ],
      explanation: "Fair leaders help ensure all voices are heard, not just the loudest ones."
    }
  ];

  const handleScenarioAnswer = (scenarioId, optionIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [scenarioId]: optionIndex
    }));
  };

  return (
    <div
      id="m-7"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["m-7"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Shield className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Ethics, Bias & Inclusive Leadership
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Learn to be actively fair and lead with moral courage
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Learning Objectives */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3 mr-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What You Will Learn
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Eye className="w-6 h-6" />, text: "Recognizing hidden bias in teams", color: "bg-green-100 text-green-600" },
              { icon: <Users className="w-6 h-6" />, text: "Standing up for fairness and inclusion", color: "bg-emerald-100 text-emerald-600" },
              { icon: <Shield className="w-6 h-6" />, text: "Practicing moral courage", color: "bg-teal-100 text-teal-600" }
            ].map((objective, index) => (
              <div
                key={index}
                className={`${objective.color} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center space-x-3">
                  {objective.icon}
                  <p className="font-semibold text-lg">{objective.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Dive Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Be Actively Fair
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-500">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Fair leaders aren't <strong className="text-red-500">neutral</strong> — they are <strong className="text-green-600">actively fair</strong>.
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="w-5 h-5 text-green-600" />
                    <p className="text-gray-700 font-medium">Call out injustice</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-emerald-600" />
                    <p className="text-gray-700 font-medium">Make room for all voices</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <Eye className="w-5 h-5 text-teal-600" />
                    <p className="text-gray-700 font-medium">Ensure diversity isn't just invited — it's heard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-6xl mb-4">⚖️</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Neutral vs. Fair</h3>
                <div className="space-y-4">
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Neutral: "It's not my problem"</p>
                    </div>
                  </div>
                  <ArrowRight className="w-8 h-8 text-green-600 mx-auto" />
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Fair: "I'll make it right"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Concepts */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Key Concepts
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Moral Courage",
                description: "Doing the right thing even when it's hard or unpopular",
                icon: <Shield className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500",
                example: "Standing up for someone being bullied"
              },
              {
                title: "Diversity of Thought",
                description: "Valuing different perspectives and ideas from everyone",
                icon: <Lightbulb className="w-8 h-8" />,
                color: "from-emerald-500 to-teal-500",
                example: "Asking quiet team members for their opinions"
              },
              {
                title: "Fairness Audit",
                description: "Regularly checking if your decisions are truly fair to everyone",
                icon: <CheckCircle className="w-8 h-8" />,
                color: "from-teal-500 to-green-600",
                example: "Making sure everyone gets equal opportunities"
              }
            ].map((concept, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index + 3) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 3) * 200}ms` }}
              >
                <div className={`bg-gradient-to-r ${concept.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                  {concept.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{concept.title}</h3>
                <p className="text-gray-600 text-center mb-4">{concept.description}</p>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border-l-4 border-green-400">
                  <p className="text-sm text-gray-700 font-medium">Example: {concept.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bias Detection Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Spot the Bias
            </h2>
            <p className="text-lg text-gray-600">Learn to recognize common biases that affect fair leadership</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <div className="text-lg text-gray-600 mb-4">Currently Highlighting</div>
              <div className={`bg-gradient-to-r ${biasExamples[currentBiasExample].color} text-white rounded-2xl p-8 transform hover:scale-105 transition-all duration-500`}>
                <h3 className="text-3xl font-bold mb-4">{biasExamples[currentBiasExample].title}</h3>
                <p className="text-xl mb-4">{biasExamples[currentBiasExample].description}</p>
                <div className="bg-white/20 rounded-lg p-4 mb-4">
                  <p className="text-sm"><strong>Example:</strong> {biasExamples[currentBiasExample].example}</p>
                </div>
                <div className="bg-white/30 rounded-lg p-4">
                  <p className="text-sm"><strong>Solution:</strong> {biasExamples[currentBiasExample].solution}</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              {biasExamples.map((bias, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    currentBiasExample === index 
                      ? 'border-green-400 bg-green-50 scale-105' 
                      : 'border-gray-200 bg-gray-50 hover:border-green-300'
                  }`}
                  onClick={() => setCurrentBiasExample(index)}
                >
                  <h4 className="font-bold text-gray-800 text-center">{bias.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Challenge */}
        <div className="space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-12 h-12 text-green-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Challenge: Bias Detective 🛡️
              </h2>
            </div>
            <p className="text-lg text-gray-600">Practice identifying bias and choosing fair responses</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {scenarios.map((scenario, index) => (
              <div key={scenario.id} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{scenario.title}</h3>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-6 border-l-4 border-green-400">
                  <p className="text-gray-700">{scenario.situation}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <p className="font-semibold text-gray-800">What would you do?</p>
                  {scenario.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      onClick={() => handleScenarioAnswer(scenario.id, optionIndex)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                        selectedAnswers[scenario.id] === optionIndex
                          ? option.correct
                            ? 'border-green-500 bg-green-50 text-green-800'
                            : 'border-red-400 bg-red-50 text-red-800'
                          : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        {selectedAnswers[scenario.id] === optionIndex && (
                          option.correct ? 
                            <CheckCircle className="w-5 h-5 text-green-600" /> :
                            <AlertTriangle className="w-5 h-5 text-red-500" />
                        )}
                        <span>{option.text}</span>
                      </div>
                    </button>
                  ))}
                </div>
                
                {selectedAnswers[scenario.id] !== undefined && (
                  <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                    <p className="text-blue-800 font-medium">💡 {scenario.explanation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500">
          <div className="text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-6">
              True leadership means having the courage to do what's right, even when it's difficult or unpopular.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-green-600">Fair Leadership</strong> = 
                <strong className="text-emerald-600"> Moral Courage</strong> + 
                <strong className="text-teal-600"> Active Inclusion</strong>
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
  );
};

export default Module7EthicsBias;