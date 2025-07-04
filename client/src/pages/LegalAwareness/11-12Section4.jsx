import React, { useState, useEffect } from 'react';
import { FileText, Users, Grip, Scale, CheckCircle, XCircle, AlertTriangle, BookOpen, Gavel, Shield, Eye, Target, ArrowRight, Clock, Star, Award } from 'lucide-react';

const Module4Contracts = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentExample, setCurrentExample] = useState(0);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const contractExamples = [
    {
      title: "Tuition Agreement",
      icon: <BookOpen className="w-8 h-8" />,
      description: "Student agrees to pay fees to tutor for lessons",
      parties: ["Student", "Tutor"],
      consideration: "Money for Education"
    },
    {
      title: "Website Terms",
      icon: <Eye className="w-8 h-8" />,
      description: "Clicking 'I agree' on website terms of service",
      parties: ["User", "Website"],
      consideration: "Data for Services"
    },
    {
      title: "Bike Sale",
      icon: <Grip className="w-8 h-8" />,
      description: "Selling a bike to a friend creates obligations",
      parties: ["Seller", "Buyer"],
      consideration: "Money for Bike"
    },
    {
      title: "Job Contract",
      icon: <Users className="w-8 h-8" />,
      description: "Employment agreement between company and employee",
      parties: ["Company", "Employee"],
      consideration: "Work for Salary"
    }
  ];

  const contractEssentials = [
    {
      title: "Offer and Acceptance",
      icon: <Grip className="w-8 h-8" />,
      description: "One party makes a clear offer, the other accepts it exactly",
      example: "I offer to sell my bike for ₹5000. You say 'Yes, I'll buy it.'",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Free Consent",
      icon: <CheckCircle className="w-8 h-8" />,
      description: "Both parties agree voluntarily without pressure or deceit",
      example: "No blackmail, fraud, or forcing someone to sign",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Lawful Consideration",
      icon: <Scale className="w-8 h-8" />,
      description: "Something of value must be exchanged between parties",
      example: "Money, goods, services, or a promise to do something",
      color: "from-teal-500 to-green-500"
    },
    {
      title: "Legal Purpose",
      icon: <Shield className="w-8 h-8" />,
      description: "The contract's purpose must be legal and not against public policy",
      example: "Cannot make contracts for illegal activities like drug dealing",
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Capacity to Contract",
      icon: <Users className="w-8 h-8" />,
      description: "Parties must be legally competent to enter contracts",
      example: "Generally adults of sound mind, not intoxicated or mentally impaired",
      color: "from-emerald-600 to-teal-600"
    }
  ];

  const remedies = [
    {
      title: "Damages",
      icon: <Target className="w-6 h-6" />,
      description: "Monetary compensation to cover losses from breach",
      detail: "Puts the injured party in the position they would have been if contract was performed"
    },
    {
      title: "Specific Performance",
      icon: <Gavel className="w-6 h-6" />,
      description: "Court order requiring fulfillment of contractual obligations",
      detail: "Used when damages are inadequate, like sale of unique property"
    },
    {
      title: "Injunction",
      icon: <Shield className="w-6 h-6" />,
      description: "Court order preventing a party from breaching contract",
      detail: "Stops someone from doing something that would violate the agreement"
    },
    {
      title: "Rescission",
      icon: <XCircle className="w-6 h-6" />,
      description: "Cancellation of contract, restoring original positions",
      detail: "Both parties return to where they were before the contract"
    }
  ];

  const quizQuestions = [
    {
      question: "What makes a contract legally binding?",
      options: [
        "Just making a promise",
        "Writing it down on paper",
        "Mutual agreement with consideration and legal purpose",
        "Having a lawyer present"
      ],
      correct: 2,
      explanation: "A contract needs mutual agreement, consideration (something of value exchanged), and a legal purpose to be binding."
    },
    {
      question: "Which of these is NOT an essential element of a valid contract?",
      options: [
        "Offer and Acceptance",
        "Written documentation",
        "Free Consent",
        "Lawful Consideration"
      ],
      correct: 1,
      explanation: "While written contracts are recommended, oral contracts are generally enforceable in India unless specifically required by law."
    }
  ];

  const handleQuizAnswer = (questionIndex, selectedAnswer) => {
    setSelectedQuiz({ questionIndex, selectedAnswer });
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 3000);
  };

  return (
    <div
      id="s-4"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-4"] = el;
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
                <FileText className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Law of Contracts
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Agreements That Run the World
            </p>
            <div className="mt-8 inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <Scale className="w-5 h-5" />
              <span className="text-lg font-medium">Learn Legal Fundamentals</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Learning Objectives */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mr-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              What You Will Learn
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <FileText className="w-6 h-6" />, text: "What is a contract and why it matters", color: "bg-green-100 text-green-600" },
              { icon: <CheckCircle className="w-6 h-6" />, text: "Essential elements of valid contracts", color: "bg-emerald-100 text-emerald-600" },
              { icon: <AlertTriangle className="w-6 h-6" />, text: "Void vs voidable contracts", color: "bg-teal-100 text-teal-600" },
              { icon: <Gavel className="w-6 h-6" />, text: "Breach of contract and remedies", color: "bg-green-100 text-green-600" }
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

        {/* What is a Contract */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                What is a Contract?
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A contract is a <strong className="text-green-600">legally binding agreement</strong> between two or more parties that creates mutual obligations enforceable by law.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <p className="text-gray-700"><strong>More than just a promise</strong> - backed by law</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <p className="text-gray-700"><strong>Provides security</strong> in relationships</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <p className="text-gray-700"><strong>Enforceable in court</strong> if broken</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-6xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center space-x-3">
                      <Grip className="w-5 h-5 text-green-600" />
                      <p className="text-gray-700 font-medium">Mutual Agreement</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <div className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-emerald-600" />
                      <p className="text-gray-700 font-medium">Consideration</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-teal-600" />
                      <p className="text-gray-700 font-medium">Lawful Object</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-life Examples */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Contracts in Daily Life
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contracts are everywhere around us. Here are some common examples:
            </p>
          </div>
          
          {/* Featured Example (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Featured Example</div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-center space-x-6 mb-6">
                  <div className="text-white">
                    {contractExamples[currentExample].icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-3xl font-bold mb-2">{contractExamples[currentExample].title}</h3>
                    <p className="text-xl opacity-90">{contractExamples[currentExample].description}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">Parties Involved:</p>
                    <p className="text-lg">{contractExamples[currentExample].parties.join(" & ")}</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">Consideration:</p>
                    <p className="text-lg">{contractExamples[currentExample].consideration}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Examples Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contractExamples.map((example, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  currentExample === index ? 'ring-4 ring-green-300 scale-105 bg-gradient-to-r from-green-100 to-emerald-100' : ''
                } ${
                  visibleCards.includes(index + 4) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setCurrentExample(index)}
              >
                <div className="text-green-600 mb-4 flex justify-center">
                  {example.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{example.title}</h3>
                <p className="text-sm text-gray-600">{example.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contract Essentials */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              5 Essential Elements of a Valid Contract
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-2xl mx-auto">
              <p className="text-xl text-gray-700">
                For an agreement to be legally binding, it must have all these elements:
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            {contractEssentials.map((essential, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index + 8) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className={`bg-gradient-to-r ${essential.color} rounded-full p-3`}>
                        <div className="text-white">
                          {essential.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{essential.title}</h3>
                        <p className="text-gray-600">{essential.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-400">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="text-2xl">💡</div>
                      <h4 className="text-lg font-bold text-gray-800">Example:</h4>
                    </div>
                    <p className="text-gray-700">{essential.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Void vs Voidable */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Void vs Voidable Contracts
            </h2>
            <p className="text-lg text-gray-600">Understanding the difference is crucial</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-red-500 rounded-full p-3">
                  <XCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Void Contracts</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">
                  <strong>Invalid from the beginning</strong> - have no legal effect
                </p>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                  <h4 className="font-bold text-red-800 mb-2">Examples:</h4>
                  <ul className="text-red-700 space-y-1">
                    <li>• Contract with intoxicated person</li>
                    <li>• Agreements for illegal activities</li>
                    <li>• Contracts with impossible conditions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-yellow-500 rounded-full p-3">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Voidable Contracts</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">
                  <strong>Valid but can be rescinded</strong> by one party due to defects
                </p>
                <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
                  <h4 className="font-bold text-yellow-800 mb-2">Examples:</h4>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• Consent obtained by blackmail</li>
                    <li>• Agreements made under fraud</li>
                    <li>• Contracts with undue influence</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Breach and Remedies */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Breach of Contract & Remedies
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400 max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 mb-4">
                When someone fails to fulfill their contractual obligations without lawful excuse, it's called a <strong className="text-green-600">breach of contract</strong>.
              </p>
              <p className="text-lg text-gray-600">
                The law provides several remedies to help the injured party.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {remedies.map((remedy, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                    <div className="text-white">
                      {remedy.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{remedy.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{remedy.description}</p>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                  <p className="text-sm text-gray-600">{remedy.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Quiz */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🧠</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Test Your Knowledge
            </h2>
          </div>
          
          <div className="space-y-8">
            {quizQuestions.map((quiz, questionIndex) => (
              <div key={questionIndex} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
                <h3 className="text-xl font-bold text-gray-800 mb-6">{quiz.question}</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {quiz.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      onClick={() => handleQuizAnswer(questionIndex, optionIndex)}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                        selectedQuiz?.questionIndex === questionIndex && selectedQuiz?.selectedAnswer === optionIndex
                          ? optionIndex === quiz.correct
                            ? 'bg-green-100 border-green-500 text-green-800'
                            : 'bg-red-100 border-red-500 text-red-800'
                          : 'bg-white border-gray-300 hover:border-green-400 hover:bg-green-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedQuiz?.questionIndex === questionIndex && selectedQuiz?.selectedAnswer === optionIndex
                            ? optionIndex === quiz.correct
                              ? 'bg-green-500 border-green-500'
                              : 'bg-red-500 border-red-500'
                            : 'border-gray-400'
                        }`}>
                          {selectedQuiz?.questionIndex === questionIndex && selectedQuiz?.selectedAnswer === optionIndex && (
                            optionIndex === quiz.correct ? (
                              <CheckCircle className="w-4 h-4 text-white" />
                            ) : (
                              <XCircle className="w-4 h-4 text-white" />
                            )
                          )}
                        </div>
                        <span className="font-medium">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
                {selectedQuiz?.questionIndex === questionIndex && showFeedback && (
                  <div className={`p-4 rounded-lg ${
                    selectedQuiz.selectedAnswer === quiz.correct 
                      ? 'bg-green-100 border-green-500 text-green-800' 
                      : 'bg-red-100 border-red-500 text-red-800'
                  } border-2 animate-fade-in`}>
                    <div className="flex items-center space-x-3 mb-2">
                      {selectedQuiz.selectedAnswer === quiz.correct ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-600" />
                      )}
                      <span className="font-bold">
                        {selectedQuiz.selectedAnswer === quiz.correct ? 'Correct!' : 'Incorrect!'}
                      </span>
                    </div>
                    <p>{quiz.explanation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">📚</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Key Takeaways
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Remember</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Contracts are legally binding agreements with mutual obligations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Five essential elements must be present for validity</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Oral contracts are generally enforceable in India</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Void contracts are invalid from the beginning</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Apply</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Always read contracts carefully before signing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Ensure all essential elements are present</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Keep written records of important agreements</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Seek legal advice for complex contracts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Important Laws */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 inline-block mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Important Legal Framework
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-green-500 rounded-full p-3">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Indian Contract Act, 1872</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">
                  The foundation of contract law in India, detailing comprehensive rules on:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span>Formation of contracts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span>Performance obligations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span>Breach and remedies</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-emerald-400">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-emerald-500 rounded-full p-3">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Written vs Oral Contracts</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Understanding when contracts must be in writing:
                </p>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-green-600 mb-2">Must be Written:</h4>
                  <p className="text-gray-700">Contracts related to immovable property</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-emerald-600 mb-2">Can be Oral:</h4>
                  <p className="text-gray-700">Most other contracts (but written is recommended)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Types of Contracts */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Types of Contracts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contracts can be classified in different ways based on their formation and expression
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 inline-block mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Express Contracts</h3>
                <p className="text-gray-600">Terms are clearly stated</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                  <h4 className="font-bold text-green-600 mb-2">Characteristics:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Terms explicitly mentioned</li>
                    <li>• Written or spoken clearly</li>
                    <li>• No guesswork required</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-2">Example:</h4>
                  <p className="text-gray-700">
                    "I will sell you my bike for ₹5,000. Payment due on delivery."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full p-4 inline-block mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Implied Contracts</h3>
                <p className="text-gray-600">Terms inferred from actions</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 border-l-4 border-emerald-400">
                  <h4 className="font-bold text-emerald-600 mb-2">Characteristics:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Terms not explicitly stated</li>
                    <li>• Inferred from conduct</li>
                    <li>• Based on circumstances</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-2">Example:</h4>
                  <p className="text-gray-700">
                    "Ordering food in a restaurant implies you agree to pay for it."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Why Contract Law Matters
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Business Security</h3>
              <p className="text-gray-600">
                Contracts provide legal protection for business deals and partnerships
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Trust Building</h3>
              <p className="text-gray-600">
                Clear agreements build trust between parties and reduce conflicts
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Legal Protection</h3>
              <p className="text-gray-600">
                Courts can enforce contracts, ensuring fairness and justice
              </p>
            </div>
          </div>
        </div>

        {/* Module Summary */}
        <div className="bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">📋</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Module Summary
              </h2>
              <p className="text-xl text-green-100">
                You've mastered the fundamentals of contract law!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">What We Covered:</h3>
                <ul className="space-y-2 text-green-100">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Definition and importance of contracts</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Real-life examples and applications</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Five essential elements for validity</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Void vs voidable contracts</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span>Breach of contract and remedies</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Next Steps:</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 rounded-full p-2">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-green-100">Practice identifying contracts in daily life</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-emerald-500 rounded-full p-2">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-green-100">Review the Indian Contract Act, 1872</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-teal-500 rounded-full p-2">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-green-100">Move to the next module</span>
                  </div>
                </div>
              </div>
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

export default Module4Contracts;