import React, { useState, useEffect } from 'react';
import { Scale, Brain, Heart, Eye, Clock, AlertTriangle, CheckCircle, Target, TrendingUp, Users, Shield, Lightbulb, BookOpen, Calendar, Star } from 'lucide-react';

const Module5EthicalReasoning = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [selectedFramework, setSelectedFramework] = useState(null);
  const [dilemmaResponse, setDilemmaResponse] = useState('');
  const [selectedDilemmaOption, setSelectedDilemmaOption] = useState(null);
  const [longTermAnalysis, setLongTermAnalysis] = useState({
    choice: '',
    outcomes: ['', '', '']
  });
  const [dailyDecisions, setDailyDecisions] = useState([
    { decision: '', impact: '', learning: '' },
    { decision: '', impact: '', learning: '' },
    { decision: '', impact: '', learning: '' }
  ]);
  const [collegeAnalysis, setCollegeAnalysis] = useState({
    emotional: '',
    logical: '',
    values: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const decisionFramework = [
    {
      layer: "Gut",
      element: "Emotion",
      description: "What feels right intuitively?",
      color: "from-red-500 to-red-600",
      icon: <Heart className="w-8 h-8 text-white" />,
      questions: ["How does this decision make me feel?", "What is my intuition telling me?", "Do I feel excited or anxious about this choice?"]
    },
    {
      layer: "Head",
      element: "Logic",
      description: "What makes rational sense?",
      color: "from-blue-500 to-blue-600",
      icon: <Brain className="w-8 h-8 text-white" />,
      questions: ["What are the facts and data?", "What are the pros and cons?", "What would a logical person choose?"]
    },
    {
      layer: "Heart",
      element: "Values",
      description: "What aligns with who I want to be?",
      color: "from-green-500 to-emerald-500",
      icon: <Scale className="w-8 h-8 text-white" />,
      questions: ["Does this align with my core values?", "What kind of person does this choice make me?", "Will I be proud of this decision in 10 years?"]
    }
  ];

  const dilemmaOptions = [
    {
      choice: "Report the cheating",
      reasoning: "Uphold academic integrity and fairness",
      consequences: "Friend may be angry, but maintains honest academic environment"
    },
    {
      choice: "Talk to friend privately first",
      reasoning: "Give them a chance to self-report and make it right",
      consequences: "Preserves friendship while encouraging accountability"
    },
    {
      choice: "Stay silent",
      reasoning: "Avoid conflict and maintain friendship",
      consequences: "Enables dishonesty and unfair advantage over other students"
    }
  ];

  const longTermThinkingExamples = [
    {
      choice: "Social media use",
      timeFrame: "5 years",
      potentialOutcomes: [
        "Decreased attention span and focus",
        "Reduced real-world social skills",
        "Increased anxiety from comparison"
      ]
    },
    {
      choice: "Procrastination habits",
      timeFrame: "5 years",
      potentialOutcomes: [
        "Missed opportunities due to poor preparation",
        "Increased stress and lower quality work",
        "Reputation for unreliability"
      ]
    },
    {
      choice: "Friend group choices",
      timeFrame: "5 years",
      potentialOutcomes: [
        "Character shaped by peer influence",
        "Opportunities limited or expanded by connections",
        "Habits and values influenced by social circle"
      ]
    }
  ];

  const handleDailyDecisionChange = (index, field, value) => {
    const newDecisions = [...dailyDecisions];
    newDecisions[index][field] = value;
    setDailyDecisions(newDecisions);
  };

  const handleLongTermOutcomeChange = (index, value) => {
    const newOutcomes = [...longTermAnalysis.outcomes];
    newOutcomes[index] = value;
    setLongTermAnalysis(prev => ({ ...prev, outcomes: newOutcomes }));
  };

  return (
    <div
      id="s-5"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-5"] = el;
        }
      }}
      className="mb-10"
    >
        <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-800 via-green-700 to-emerald-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Scale className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ethical Reasoning & Consequential Thinking
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Master the art of making decisions that align with your values and create positive long-term outcomes
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Introduction */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500">
          <div className="text-center mb-8">
            <Lightbulb className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              The Foundation of Wise Decision-Making
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Every choice you make shapes who you become. Learn to make decisions that honor your values, 
              consider long-term consequences, and contribute to the greater good.
            </p>
          </div>
        </div>

        {/* Section 1: Layers of Every Decision */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Layers of Every Decision
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Good decisions blend emotion, logic, and values. Skipping any layer weakens outcomes.
            </p>
          </div>

          {/* Decision Framework */}
          <div className="grid md:grid-cols-3 gap-8">
            {decisionFramework.map((layer, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  selectedFramework === index ? 'ring-4 ring-green-300' : ''
                }`}
                onClick={() => setSelectedFramework(selectedFramework === index ? null : index)}
              >
                <div className="text-center mb-6">
                  <div className={`bg-gradient-to-r ${layer.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                    {layer.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{layer.layer}</h3>
                  <p className="text-lg text-gray-600 mt-2">({layer.element})</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <p className="text-gray-700 font-medium text-center">{layer.description}</p>
                  </div>
                  
                  {selectedFramework === index && (
                    <div className="space-y-3 animate-fade-in">
                      <div className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-3 text-center">
                        Key Questions
                      </div>
                      {layer.questions.map((question, qIndex) => (
                        <div key={qIndex} className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-3 border-l-4 border-emerald-400">
                          <p className="text-gray-700 text-sm">{question}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Framework Example: College Major Choice */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Framework in Action: Choosing a College Major
              </h3>
              <p className="text-gray-700 mt-4">
                Apply the three-layer framework to a real decision
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-6 border border-red-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="w-6 h-6 text-red-600" />
                  <h4 className="font-bold text-red-700">Gut (Emotion)</h4>
                </div>
                <p className="text-red-600 text-sm mb-4">What feels right emotionally?</p>
                <textarea
                  className="w-full p-3 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-300 focus:border-transparent resize-none"
                  rows="3"
                  placeholder="What subjects excite you? What feels natural and engaging?"
                  value={collegeAnalysis.emotional}
                  onChange={(e) => setCollegeAnalysis(prev => ({ ...prev, emotional: e.target.value }))}
                />
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Brain className="w-6 h-6 text-blue-600" />
                  <h4 className="font-bold text-blue-700">Head (Logic)</h4>
                </div>
                <p className="text-blue-600 text-sm mb-4">What makes logical sense for career?</p>
                <textarea
                  className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent resize-none"
                  rows="3"
                  placeholder="Job market, salary prospects, required skills..."
                  value={collegeAnalysis.logical}
                  onChange={(e) => setCollegeAnalysis(prev => ({ ...prev, logical: e.target.value }))}
                />
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Scale className="w-6 h-6 text-green-600" />
                  <h4 className="font-bold text-green-700">Heart (Values)</h4>
                </div>
                <p className="text-green-600 text-sm mb-4">What honors your purpose?</p>
                <textarea
                  className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                  rows="3"
                  placeholder="Impact you want to make, contribution to society..."
                  value={collegeAnalysis.values}
                  onChange={(e) => setCollegeAnalysis(prev => ({ ...prev, values: e.target.value }))}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Moral Dilemmas in Real Life */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Moral Dilemmas in Real Life
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Ethical dilemmas don't always have perfect answers. Practice making difficult choices with integrity.
            </p>
          </div>

          {/* Scenario Practice */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Scenario Practice
              </h3>
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6 mt-6 border-l-4 border-amber-400">
                <p className="text-lg text-amber-800 font-medium">
                  "You witness a friend cheating during an online exam. What do you do?"
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              {dilemmaOptions.map((option, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 ${
                    selectedDilemmaOption === index 
                      ? 'border-green-400 ring-2 ring-green-300 scale-105' 
                      : 'border-green-200 hover:border-green-300'
                  }`}
                  onClick={() => setSelectedDilemmaOption(selectedDilemmaOption === index ? null : index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`rounded-full w-8 h-8 flex items-center justify-center font-bold ${
                      selectedDilemmaOption === index ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 mb-2">{option.choice}</h4>
                      <p className="text-gray-700 mb-3">{option.reasoning}</p>
                      
                      {selectedDilemmaOption === index && (
                        <div className="bg-white rounded-lg p-4 mt-4 border border-green-200 animate-fade-in">
                          <div className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">
                            Potential Consequences
                          </div>
                          <p className="text-gray-700">{option.consequences}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4 text-center">Discuss: Short-term comfort vs long-term consequences</h4>
              <p className="text-green-100 text-center mb-4">What kind of person do you want to be?</p>
              <textarea
                className="w-full p-4 rounded-lg text-gray-800 focus:ring-2 focus:ring-green-300 resize-none"
                rows="4"
                placeholder="Reflect on your choice and reasoning..."
                value={dilemmaResponse}
                onChange={(e) => setDilemmaResponse(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Section 3: Long-Term Thinking */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Long-Term Thinking
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Not all decisions show consequences immediately. Mature thinking asks: "What will this choice cost me in 5 years?"
            </p>
          </div>

          {/* Long-term Examples */}
          <div className="grid md:grid-cols-3 gap-8">
            {longTermThinkingExamples.map((example, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{example.choice}</h3>
                  <p className="text-gray-600 mt-2">Impact in {example.timeFrame}</p>
                </div>
                
                <div className="space-y-3">
                  {example.potentialOutcomes.map((outcome, outcomeIndex) => (
                    <div key={outcomeIndex} className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-3 border-l-4 border-amber-400">
                      <p className="text-gray-700 text-sm">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Personal Long-term Analysis Challenge */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="text-center mb-8">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Challenge: Your Personal Long-term Analysis
              </h3>
              <p className="text-gray-700 mt-4">
                Think of one choice you're making now and analyze 3 possible long-term outcomes
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-gray-800 mb-4">Current Choice You're Making:</h4>
                <input
                  type="text"
                  className="w-full p-4 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent"
                  placeholder="e.g., How much time I spend on social media, my study habits, friend group choices..."
                  value={longTermAnalysis.choice}
                  onChange={(e) => setLongTermAnalysis(prev => ({ ...prev, choice: e.target.value }))}
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((num, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        {num}
                      </div>
                      <h4 className="font-bold text-gray-800">Possible Outcome #{num}</h4>
                    </div>
                    <textarea
                      className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                      rows="4"
                      placeholder="What could happen in 5 years if you continue this choice?"
                      value={longTermAnalysis.outcomes[index]}
                      onChange={(e) => handleLongTermOutcomeChange(index, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Owning the Outcomes */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Owning the Outcomes
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Blaming others is easy. But you grow when you take full ownership of your choices.
            </p>
          </div>

          {/* Daily Ownership Practice */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Daily Ownership Practice
              </h3>
              <p className="text-gray-700 mt-4">
                Each night, reflect on your decisions and their impact
              </p>
            </div>
            
            <div className="space-y-8">
              {[1, 2, 3].map((day, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                  <div className="flex items-center space-x-3 mb-6">
                    <Calendar className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-gray-800">Reflection Entry #{day}</h4>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        One decision I made:
                      </label>
                      <textarea
                        className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                        rows="3"
                        placeholder="Describe a specific choice you made today..."
                        value={dailyDecisions[index].decision}
                        onChange={(e) => handleDailyDecisionChange(index, 'decision', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Its impact:
                      </label>
                      <textarea
                        className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                        rows="3"
                        placeholder="What happened as a result? How did it affect you or others?"
                        value={dailyDecisions[index].impact}
                        onChange={(e) => handleDailyDecisionChange(index, 'impact', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        What I learned:
                      </label>
                      <textarea
                        className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                        rows="3"
                        placeholder="What insight did you gain? What would you do differently?"
                        value={dailyDecisions[index].learning}
                        onChange={(e) => handleDailyDecisionChange(index, 'learning', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-6 text-center">
              <h4 className="text-xl font-bold mb-3">The Ownership Mindset</h4>
              <p className="text-green-100">
                "I am responsible for my choices and their consequences. Every decision is an opportunity to grow and align with my values."
              </p>
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
              Congratulations! You've developed a framework for ethical reasoning and consequential thinking. 
              Remember: every choice is a chance to become the person you aspire to be.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                <strong className="text-red-600">Emotion</strong> + 
                <strong className="text-blue-600"> Logic</strong> + 
                <strong className="text-green-600"> Values</strong> = 
                <strong className="text-green-700"> Wise Decisions ⚖️</strong>
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

export default Module5EthicalReasoning;