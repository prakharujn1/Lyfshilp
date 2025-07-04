import React, { useState, useEffect } from 'react';
import { Scale, Gavel, Shield, Users, Eye, BookOpen, ArrowRight, CheckCircle, AlertCircle, Star, Trophy, Flag, Target } from 'lucide-react';

const Module6LegalAwareness = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentCase, setCurrentCase] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCase((prev) => (prev + 1) % landmarkCases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const landmarkCases = [
    {
      id: 1,
      title: "Kesavananda Bharati v. State of Kerala (1973)",
      year: "1973",
      icon: <Shield className="w-8 h-8" />,
      keyPoint: "Basic Structure Doctrine",
      facts: "Kesavananda Bharati, head of a religious mutt in Kerala, challenged the Kerala government's attempts to restrict his property rights by enacting land reform laws. This was part of a larger conflict over Parliament's power to amend the Constitution, especially the fundamental rights.",
      legalIssue: "Does Parliament have unlimited power to amend any part of the Constitution, including fundamental rights and the Constitution's core principles?",
      judgment: "The Supreme Court ruled in a 7-6 split that Parliament can amend the Constitution but cannot alter its 'basic structure' — the essential features like democracy, secularism, and separation of powers. This 'Basic Structure Doctrine' ensures that certain fundamental principles remain inviolable, even by constitutional amendments, protecting the Constitution's spirit from political whims.",
      significance: "Established the Basic Structure Doctrine that protects the Constitution's core principles"
    },
    {
      id: 2,
      title: "Maneka Gandhi v. Union of India (1978)",
      year: "1978",
      icon: <Users className="w-8 h-8" />,
      keyPoint: "Right to Personal Liberty",
      facts: "The government impounded Maneka Gandhi's passport without giving her any prior notice or reasons, effectively restricting her freedom to travel. She challenged this action under Article 21, which guarantees the right to life and personal liberty.",
      legalIssue: "Does the government's action violate the right to personal liberty guaranteed by the Constitution? What is the scope of 'procedure established by law' under Article 21?",
      judgment: "The Supreme Court expanded the meaning of personal liberty under Article 21, stating it includes the right to travel abroad. It held that any restriction must follow a procedure that is fair, just, and reasonable, introducing a concept similar to the American 'due process.' This ruling shifted Indian constitutional law from a narrow to a more expansive and protective interpretation of personal rights.",
      significance: "Expanded the scope of personal liberty and introduced due process concept"
    },
    {
      id: 3,
      title: "Olga Tellis v. Bombay Municipal Corporation (1985)",
      year: "1985",
      icon: <Shield className="w-8 h-8" />,
      keyPoint: "Right to Livelihood",
      facts: "Many pavement dwellers in Mumbai lived in extremely poor conditions. The municipal corporation decided to evict them without offering any alternative housing or rehabilitation. The affected people challenged this action, citing their right to life and livelihood.",
      legalIssue: "Does eviction without providing alternative shelter violate the right to life and livelihood guaranteed under Article 21 of the Constitution?",
      judgment: "The Supreme Court ruled that the right to life includes the right to livelihood. Evicting people without rehabilitation violates their constitutional rights. The case marked a major step in recognizing socio-economic rights and making the state accountable for protecting vulnerable communities.",
      significance: "Recognized right to livelihood as part of right to life"
    },
    {
      id: 4,
      title: "S. R. Bommai v. Union of India (1994)",
      year: "1994",
      icon: <Scale className="w-8 h-8" />,
      keyPoint: "Federalism Protection",
      facts: "The central government dismissed several state governments using Article 356 of the Constitution, which allows President's Rule if a state government fails to comply with constitutional provisions. Many such dismissals were seen as politically motivated and arbitrary.",
      legalIssue: "What are the limits on the central government's power to dismiss state governments? How to prevent misuse of Article 356?",
      judgment: "The Supreme Court ruled that the power under Article 356 is subject to judicial review and cannot be exercised arbitrarily. It established that federalism is a basic feature of the Constitution and outlined strict conditions for dismissal, safeguarding state autonomy and ensuring checks on central power.",
      significance: "Protected federalism and limited central government's dismissal powers"
    },
    {
      id: 5,
      title: "Vishaka v. State of Rajasthan (1997)",
      year: "1997",
      icon: <Users className="w-8 h-8" />,
      keyPoint: "Women's Rights at Workplace",
      facts: "Bhanwari Devi, a social worker in Rajasthan, was gang-raped for trying to prevent child marriage in her village. At that time, there was no specific law against sexual harassment at the workplace.",
      legalIssue: "In absence of specific legislation, how should sexual harassment at the workplace be addressed? What measures can be adopted to protect women?",
      judgment: "The Supreme Court issued Vishaka Guidelines, defining sexual harassment and mandating preventive and redressal mechanisms in workplaces across India. These guidelines acted as law until the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 was enacted. This case was a landmark in women's rights and workplace safety.",
      significance: "Established workplace safety guidelines for women"
    },
    {
      id: 6,
      title: "Minerva Mills Ltd. v. Union of India (1980)",
      year: "1980",
      icon: <Shield className="w-8 h-8" />,
      keyPoint: "Constitutional Balance",
      facts: "The government passed the 42nd Amendment, which tried to give unlimited power to Parliament to amend the Constitution, including fundamental rights. Minerva Mills challenged this on the grounds that it violated the basic structure of the Constitution.",
      legalIssue: "Can Parliament curtail fundamental rights and alter the Constitution's basic structure through amendments?",
      judgment: "The Supreme Court struck down parts of the 42nd Amendment, reaffirming the Basic Structure Doctrine from Kesavananda Bharati. It emphasized the balance between Fundamental Rights and Directive Principles of State Policy, ensuring neither can override the other completely. This case strengthened constitutional safeguards and reasserted judicial review.",
      significance: "Reinforced Basic Structure Doctrine and constitutional balance"
    },
    {
      id: 7,
      title: "Shreya Singhal v. Union of India (2015)",
      year: "2015",
      icon: <Eye className="w-8 h-8" />,
      keyPoint: "Digital Rights",
      facts: "Shreya Singhal challenged Section 66A of the Information Technology Act, which criminalized sending 'offensive' messages online. The law was widely criticized for vague wording and being used to suppress free speech on social media.",
      legalIssue: "Does Section 66A violate the constitutional right to freedom of speech and expression under Article 19(1)(a)?",
      judgment: "The Supreme Court struck down Section 66A as unconstitutional, stating it was vague, overbroad, and a serious threat to free speech. The ruling reaffirmed the importance of freedom of expression in a digital age and set limits on state power over online communication.",
      significance: "Protected freedom of speech in the digital age"
    },
    {
      id: 8,
      title: "Navtej Singh Johar v. Union of India (2018)",
      year: "2018",
      icon: <Users className="w-8 h-8" />,
      keyPoint: "LGBTQ+ Rights",
      facts: "A group of petitioners, including Navtej Singh Johar, challenged Section 377 of the Indian Penal Code, which criminalized consensual homosexual acts between adults. The law was widely seen as discriminatory and violating fundamental rights.",
      legalIssue: "Does Section 377 violate the fundamental rights to equality, freedom of expression, and personal liberty guaranteed under the Constitution?",
      judgment: "The Supreme Court unanimously struck down the part of Section 377 that criminalized consensual same-sex relations among adults, declaring it unconstitutional. The court emphasized dignity, privacy, and autonomy, affirming that sexual orientation is an essential attribute of personal identity and that the LGBTQ+ community deserves equal rights and protection under the law. This ruling marked a historic step towards equality and non-discrimination.",
      significance: "Recognized LGBTQ+ rights and struck down discriminatory law"
    }
  ];

  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const CaseCard = ({ caseData, index, isActive = false }) => (
    <div className={`bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 transform transition-all duration-500 hover:scale-105 ${
      isActive ? 'ring-4 ring-green-300 scale-105' : ''
    } ${
      visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
    }`}
    style={{ animationDelay: `${index * 150}ms` }}>
      <div className="flex items-center justify-between mb-6">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 text-white">
          {caseData.icon}
        </div>
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-4 py-2">
          <span className="text-green-700 font-bold">{caseData.year}</span>
        </div>
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
        {caseData.title}
      </h3>
      
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 mb-6 border-l-4 border-green-400">
        <h4 className="font-bold text-green-700 mb-2">Key Point:</h4>
        <p className="text-green-600 font-medium">{caseData.keyPoint}</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-gray-800 mb-2 flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-green-600" />
            Facts:
          </h4>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">{caseData.facts}</p>
        </div>
        
        <div>
          <h4 className="font-bold text-gray-800 mb-2 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2 text-emerald-600" />
            Legal Issue:
          </h4>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">{caseData.legalIssue}</p>
        </div>
        
        <div>
          <h4 className="font-bold text-gray-800 mb-2 flex items-center">
            <Gavel className="w-5 h-5 mr-2 text-green-600" />
            Judgment:
          </h4>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">{caseData.judgment}</p>
        </div>
        
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4 mt-4">
          <h4 className="font-bold text-green-700 mb-2 flex items-center">
            <Star className="w-5 h-5 mr-2" />
            Significance:
          </h4>
          <p className="text-green-600 font-medium">{caseData.significance}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div
      id="s-6"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-6"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Scale className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Legal Awareness
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Landmark Cases in India: Facts, Legal Issues & Judgments
            </p>
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
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Gavel className="w-6 h-6" />, text: "Understanding landmark legal cases in India", color: "bg-green-100 text-green-600" },
              { icon: <Scale className="w-6 h-6" />, text: "How these cases shaped our legal system", color: "bg-emerald-100 text-emerald-600" },
              { icon: <Shield className="w-6 h-6" />, text: "Constitutional principles and citizen rights", color: "bg-teal-100 text-teal-600" }
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

        {/* Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Why Study Legal Cases?
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Legal cases are like <strong className="text-green-600">building blocks</strong> of our legal system. 
                Each landmark case creates new rules and protections that affect millions of people.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <Scale className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-bold text-gray-800">Understanding Legal Cases:</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>• <strong className="text-green-600">Facts:</strong> What happened?</li>
                  <li>• <strong className="text-emerald-600">Legal Issue:</strong> What was the problem?</li>
                  <li>• <strong className="text-teal-600">Judgment:</strong> What did the court decide?</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center">
                <div className="text-6xl mb-4">⚖️</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Legal System</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Protects citizen rights</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Ensures justice for all</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-teal-400">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <p className="text-gray-700 font-medium">Maintains social order</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Case (Auto-rotating) */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="text-lg text-gray-600 mb-4">Featured Case</div>
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500">
              <div className="flex items-center justify-center space-x-6 mb-6">
                <div className="bg-white/20 rounded-full p-4">
                  {landmarkCases[currentCase].icon}
                </div>
                <div className="text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{landmarkCases[currentCase].title}</h3>
                  <p className="text-xl opacity-90 mb-2">{landmarkCases[currentCase].keyPoint}</p>
                  <div className="bg-white/20 rounded-lg p-3">
                    <p className="text-sm font-medium">{landmarkCases[currentCase].significance}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center space-x-2">
                {landmarkCases.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentCase === index ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All Cases Grid */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Landmark Cases in Detail
            </h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-400 max-w-2xl mx-auto">
              <p className="text-lg text-gray-700">
                Explore the cases that shaped India's legal landscape
              </p>
            </div>
          </div>
          
          <div className="grid gap-8">
            {landmarkCases.map((caseData, index) => (
              <CaseCard
                key={caseData.id}
                caseData={caseData}
                index={index}
                isActive={currentCase === index}
              />
            ))}
          </div>
        </div>

        {/* Interactive Quiz Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🧠</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Test Your Knowledge
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Sample Quiz Questions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Which case established the Basic Structure Doctrine?
              </h3>
              <div className="space-y-3">
                {[
                  { id: 'a', text: 'Maneka Gandhi v. Union of India', correct: false },
                  { id: 'b', text: 'Kesavananda Bharati v. State of Kerala', correct: true },
                  { id: 'c', text: 'Vishaka v. State of Rajasthan', correct: false },
                  { id: 'd', text: 'Olga Tellis v. Bombay Municipal Corporation', correct: false }
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswerSelect('q1', option.id)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                      selectedAnswers.q1 === option.id
                        ? option.correct
                          ? 'border-green-500 bg-green-100 text-green-700'
                          : 'border-red-500 bg-red-100 text-red-700'
                        : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option.text}</span>
                      {selectedAnswers.q1 === option.id && (
                        option.correct ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-red-600" />
                        )
                      )}
                    </div>
                  </button>
                ))}
              </div>
              {selectedAnswers.q1 && (
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <p className="text-green-700 font-medium">
                    {selectedAnswers.q1 === 'b' ? 
                      '✅ Correct! The Kesavananda Bharati case (1973) established the Basic Structure Doctrine.' :
                      '❌ Incorrect. The correct answer is Kesavananda Bharati v. State of Kerala (1973).'
                    }
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Which case expanded the meaning of personal liberty under Article 21?
              </h3>
              <div className="space-y-3">
                {[
                  { id: 'a', text: 'Maneka Gandhi v. Union of India', correct: true },
                  { id: 'b', text: 'S. R. Bommai v. Union of India', correct: false },
                  { id: 'c', text: 'Shreya Singhal v. Union of India', correct: false },
                  { id: 'd', text: 'Minerva Mills v. Union of India', correct: false }
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswerSelect('q2', option.id)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                      selectedAnswers.q2 === option.id
                        ? option.correct
                          ? 'border-green-500 bg-green-100 text-green-700'
                          : 'border-red-500 bg-red-100 text-red-700'
                        : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option.text}</span>
                      {selectedAnswers.q2 === option.id && (
                        option.correct ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-red-600" />
                        )
                      )}
                    </div>
                  </button>
                ))}
              </div>
              {selectedAnswers.q2 && (
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <p className="text-green-700 font-medium">
                    {selectedAnswers.q2 === 'a' ? 
                      '✅ Correct! The Maneka Gandhi case (1978) expanded the meaning of personal liberty to include the right to travel abroad.' :
                      '❌ Incorrect. The correct answer is Maneka Gandhi v. Union of India (1978).'
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-4xl mb-4">🏛️</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Key Takeaways
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm transform hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-bold text-green-600 mb-3">Constitutional Protection</h3>
                <p className="text-gray-700">
                  These cases show how the Constitution protects citizen rights and maintains the balance of power.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm transform hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-bold text-emerald-600 mb-3">Judicial Review</h3>
                <p className="text-gray-700">
                  The Supreme Court acts as the guardian of the Constitution, ensuring no law violates fundamental rights.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm transform hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-bold text-teal-600 mb-3">Social Justice</h3>
                <p className="text-gray-700">
                  Legal cases have advanced social justice, protecting marginalized communities and ensuring equality.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm transform hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-bold text-green-600 mb-3">Living Constitution</h3>
                <p className="text-gray-700">
                  The Constitution evolves through judicial interpretation, adapting to modern challenges while preserving core values.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline of Cases */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Timeline of Landmark Cases
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how these important cases shaped India's legal landscape over the decades
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 to-emerald-400 rounded-full hidden md:block"></div>
            
            <div className="space-y-8">
              {[
                { year: "1973", title: "Kesavananda Bharati", desc: "Basic Structure Doctrine", color: "bg-green-100 text-green-600" },
                { year: "1978", title: "Maneka Gandhi", desc: "Expanded Personal Liberty", color: "bg-emerald-100 text-emerald-600" },
                { year: "1980", title: "Minerva Mills", desc: "Constitutional Balance", color: "bg-teal-100 text-teal-600" },
                { year: "1985", title: "Olga Tellis", desc: "Right to Livelihood", color: "bg-green-100 text-green-600" },
                { year: "1994", title: "S. R. Bommai", desc: "Federalism Protection", color: "bg-emerald-100 text-emerald-600" },
                { year: "1997", title: "Vishaka", desc: "Women's Workplace Rights", color: "bg-teal-100 text-teal-600" },
                { year: "2015", title: "Shreya Singhal", desc: "Digital Rights", color: "bg-green-100 text-green-600" },
                { year: "2018", title: "Navtej Singh Johar", desc: "LGBTQ+ Rights", color: "bg-emerald-100 text-emerald-600" }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:space-x-8`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`${item.color} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 shadow-lg`}>
                      <div className="text-2xl font-bold mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-80">{item.desc}</p>
                    </div>
                  </div>
                  <div className="relative z-10 my-4 md:my-0">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Module Summary */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center">
            <div className="text-4xl mb-6">🎯</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Module Summary
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl mb-8 text-green-100 leading-relaxed">
                You've now learned about the most important legal cases in India's history. 
                These landmark judgments continue to protect our rights and shape our society today.
              </p>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">What Makes These Cases Special?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl mb-3">⚖️</div>
                    <h4 className="font-bold mb-2">Justice</h4>
                    <p className="text-sm text-green-100">Ensured fair treatment for all citizens</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">🛡️</div>
                    <h4 className="font-bold mb-2">Protection</h4>
                    <p className="text-sm text-green-100">Safeguarded fundamental rights</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">🌱</div>
                    <h4 className="font-bold mb-2">Progress</h4>
                    <p className="text-sm text-green-100">Adapted law to changing times</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center justify-center space-x-4">
                  <Flag className="w-8 h-8 text-green-200" />
                  <p className="text-lg font-medium">
                    Remember: These cases show how our legal system protects everyone's rights and ensures justice for all!
                  </p>
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

export default Module6LegalAwareness;