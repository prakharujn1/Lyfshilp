import React, { useState, useEffect } from 'react';
import { Scale, Book, Users, Heart, Gavel, ArrowRight, CheckCircle, AlertTriangle, Lightbulb, Quote } from 'lucide-react';

const Module1Jurisprudence = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const conceptCards = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Law",
      description: "System of rules enforced by government",
      detail: "Provides guidelines on what is permitted, prohibited, or obligatory",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Morality", 
      description: "Personal beliefs about right and wrong",
      detail: "Guided by conscience and cultural norms",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Religion",
      description: "Faith-based beliefs and practices",
      detail: "Often involving worship of a higher power",
      color: "from-green-600 to-teal-600"
    }
  ];

  const lawTypes = [
    {
      type: "Natural Law",
      description: "Rights inherent in human nature",
      examples: ["Right to life", "Right to liberty", "Right to equality"],
      icon: "🌱"
    },
    {
      type: "Man-Made Law",
      description: "Laws formally created by governments", 
      examples: ["Constitution", "Acts of Parliament", "Rules & Regulations"],
      icon: "⚖️"
    }
  ];

  return (
    <div
      id="s-1"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-1"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-700 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">⚖️</div>
          <div className="absolute bottom-10 right-10 text-5xl">📚</div>
          <div className="absolute top-1/2 left-1/4 text-4xl">🏛️</div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Scale className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Introduction to Jurisprudence
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Discover why law exists and how it shapes our society
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium">
                Philosophy of Law
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium">
                Legal Systems
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium">
                Justice & Morality
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* What is Law and Jurisprudence */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              What is Law? What is Jurisprudence?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border-l-4 border-green-500">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                    <Gavel className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Law</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A comprehensive and organized system of <strong className="text-green-600">rules created and enforced</strong> by a governing authority to regulate behavior, maintain order, protect rights, and ensure justice in society.
                </p>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <p className="text-sm text-gray-600">
                    <strong className="text-green-600">Without law:</strong> Society would face chaos, as individuals could act without restraint, potentially harming others.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-8 border-l-4 border-emerald-500">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-full p-3">
                    <Book className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Jurisprudence</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The <strong className="text-emerald-600">philosophy or science of law</strong>. It explores fundamental questions about the nature, interpretation, and purpose of law in society.
                </p>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center space-x-3 mb-2">
                    <Quote className="w-5 h-5 text-emerald-600" />
                    <p className="text-sm font-medium text-gray-800">Etymology</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    <em>Juris</em> (law) + <em>Prudentia</em> (wisdom) = <strong>Wisdom of Law</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Law vs Morality vs Religion */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Law vs Morality vs Religion
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Though related, these three concepts are distinct ways of governing human behavior
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {conceptCards.map((concept, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${concept.color} text-white rounded-3xl p-8 transform hover:scale-105 transition-all duration-500 shadow-xl ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {concept.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{concept.title}</h3>
                <p className="text-lg opacity-90 mb-4">{concept.description}</p>
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="text-sm">{concept.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Practical Example */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-gray-800">Practical Example</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-400">
                <h4 className="font-bold text-green-700 mb-2">Law Against Theft</h4>
                <p className="text-gray-600 text-sm">Enforceable by courts with legal penalties</p>
              </div>
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border-l-4 border-emerald-400">
                <h4 className="font-bold text-emerald-700 mb-2">Moral Belief Against Lying</h4>
                <p className="text-gray-600 text-sm">No legal punishment but social disapproval</p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 border-l-4 border-teal-400">
                <h4 className="font-bold text-teal-700 mb-2">Religious Teaching</h4>
                <p className="text-gray-600 text-sm">Spiritual enforcement and guidance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Landmark Case Highlight */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
              <Gavel className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Landmark Case Study
            </h3>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h4 className="text-xl font-bold text-green-700 mb-4">
              Naz Foundation v. NCT of Delhi (2009)
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Delhi High Court struck down laws criminalizing consensual homosexual acts, emphasizing that 
              <strong className="text-green-600"> legal validity cannot be based purely on prevailing moral opinions</strong>, 
              especially when those laws infringe on constitutional rights such as equality and privacy.
            </p>
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-sm font-medium text-gray-800">
                  Key Principle: Law must transcend subjective morality when it conflicts with fundamental rights
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Natural Law vs Man-Made Law */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Natural Law vs Man-Made Law
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {lawTypes.map((lawType, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{lawType.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{lawType.type}</h3>
                  <p className="text-gray-600">{lawType.description}</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-700 mb-3">Examples:</h4>
                  {lawType.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-gray-700">{example}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
            <div className="flex items-center space-x-3 mb-4">
              <Lightbulb className="w-6 h-6 text-green-600" />
              <h4 className="text-lg font-bold text-gray-800">Indian Constitution Example</h4>
            </div>
            <p className="text-gray-700">
              The Indian Constitution embodies <strong className="text-green-600">both ideas</strong>: it codifies man-made laws 
              while recognizing fundamental rights that are considered natural or inherent to human dignity.
            </p>
          </div>
        </div>

        {/* Law and Justice */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4">
                <Scale className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Law and Justice
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Law aims to administer <strong className="text-green-600">justice</strong> — fairness, equality, and the protection of rights. 
                However, justice is a broader and sometimes subjective moral ideal.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  <h4 className="font-bold text-gray-800">Important Note</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Laws may be imperfect or outdated and might not always deliver what is morally just.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Historical Example</h4>
              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                  <h5 className="font-semibold text-red-700">Apartheid Laws in South Africa</h5>
                  <p className="text-red-600 text-sm mt-2">
                    Legally enforced racial segregation, but morally unjust and discriminatory
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                  <p className="text-green-700 text-sm">
                    <strong>Nelson Mandela</strong> was imprisoned under these laws, highlighting the dissonance between law and justice
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Laws Change */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Laws Change
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Laws are not static; they evolve with changes in society's values, technology, and needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Decriminalization of Homosexuality",
                case: "Navtej Singh Johar v. Union of India (2018)",
                description: "Reflecting growing acceptance of LGBTQ+ rights",
                icon: "🏳️‍🌈"
              },
              {
                title: "Transgender Identity Recognition",
                case: "Legal Recognition",
                description: "Granting rights and protections to marginalized communities",
                icon: "⚧️"
              },
              {
                title: "Digital Privacy Laws",
                case: "Emerging Legislation",
                description: "Protecting citizens in the internet age",
                icon: "🔒"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-sm text-green-600 font-medium">{item.case}</p>
                </div>
                <p className="text-gray-600 text-sm text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-4xl mb-6">🎯</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Key Takeaways
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <p className="text-gray-700 font-medium">
                  Jurisprudence is the <strong className="text-green-600">wisdom behind law</strong> - helping us understand why laws exist
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <p className="text-gray-700 font-medium">
                  Laws must evolve with society to maintain <strong className="text-green-600">justice and fairness</strong>
                </p>
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

export default Module1Jurisprudence;