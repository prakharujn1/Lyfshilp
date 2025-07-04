import React, { useState, useEffect } from 'react';
import { Scale, BookOpen, Gavel, Users, FileText, Clock, Eye, Shield, AlertTriangle, CheckCircle, ArrowRight, Star, Brain, Target } from 'lucide-react';

const Module5LegalTerms = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentTerm, setCurrentTerm] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('latin');
  const [showDefinition, setShowDefinition] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const latinTerms = [
    {
      term: "Mens Rea",
      translation: "guilty mind",
      definition: "The intention or knowledge of wrongdoing that constitutes part of a crime.",
      example: "To be guilty of theft, a person must intentionally take someone else's property.",
      icon: <Brain className="w-6 h-6" />
    },
    {
      term: "Actus Reus",
      translation: "guilty act",
      definition: "The actual physical act of committing the crime.",
      example: "Both mens rea and actus reus must generally be proven for criminal liability.",
      icon: <Target className="w-6 h-6" />
    },
    {
      term: "Habeas Corpus",
      translation: "you shall have the body",
      definition: "A legal order requiring a detained person to be brought before the court.",
      example: "This protects against illegal imprisonment.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      term: "Ignorantia juris non excusat",
      translation: "ignorance of the law is no excuse",
      definition: "You can't avoid legal responsibility just because you didn't know the law.",
      example: "Everyone is presumed to know the law, so claiming ignorance won't protect you.",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      term: "Res Ipsa Loquitur",
      translation: "the thing speaks for itself",
      definition: "Used in tort law when the facts imply negligence without direct proof.",
      example: "A surgical instrument left inside a patient.",
      icon: <Eye className="w-6 h-6" />
    },
    {
      term: "Audi alteram partem",
      translation: "hear the other side",
      definition: "The principle of natural justice—both sides in a dispute must be heard.",
      example: "It ensures fairness in legal proceedings.",
      icon: <Scale className="w-6 h-6" />
    },
    {
      term: "Sub Judice",
      translation: "under judgment",
      definition: "A matter currently under trial or consideration by a court.",
      example: "Public discussion should be cautious when a case is sub judice.",
      icon: <Gavel className="w-6 h-6" />
    },
    {
      term: "In Camera",
      translation: "in private",
      definition: "Court proceedings held privately, away from public and press.",
      example: "Often used for sensitive matters involving minors.",
      icon: <Eye className="w-6 h-6" />
    }
  ];

  const courtTerms = [
    {
      term: "Plaintiff",
      definition: "The person who brings a lawsuit seeking a legal remedy.",
      example: "The plaintiff filed the case against the company.",
      icon: <Users className="w-6 h-6" />
    },
    {
      term: "Defendant",
      definition: "The person against whom the suit is filed.",
      example: "The defendant must respond to the allegations.",
      icon: <Users className="w-6 h-6" />
    },
    {
      term: "Jurisdiction",
      definition: "The legal authority of a court to hear and decide a case.",
      example: "Depends on location, subject matter, and monetary value involved.",
      icon: <Scale className="w-6 h-6" />
    },
    {
      term: "Writ",
      definition: "A formal written order issued by a court to enforce fundamental rights.",
      example: "Examples include Habeas Corpus, Mandamus, and Certiorari.",
      icon: <FileText className="w-6 h-6" />
    }
  ];

  const contractTerms = [
    {
      term: "Void ab initio",
      definition: "Void from the beginning - invalid and has no legal effect from the outset.",
      example: "The contract was declared void ab initio due to fraud.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      term: "Force majeure",
      definition: "A clause that frees parties from liability due to extraordinary circumstances.",
      example: "Natural disasters, war, or pandemics preventing contract performance.",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      term: "Privity of contract",
      definition: "Only parties involved in a contract can sue or be sued on it.",
      example: "Third parties usually cannot enforce or challenge contract terms.",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const criminalTerms = [
    {
      term: "FIR",
      definition: "First Information Report - the first written report made by police.",
      example: "Filed when police receive information about a cognizable offence.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      term: "Cognizable Offence",
      definition: "A serious offence where police can investigate and arrest without court approval.",
      example: "Murder, robbery, and other serious crimes.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      term: "Bail",
      definition: "Temporary release of an accused person awaiting trial.",
      example: "Usually under conditions like surrendering passport or regular court appearances.",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  const legalReadingTerms = [
    {
      term: "Ratio decidendi",
      definition: "The legal reasoning or principle on which a court's decision is based.",
      example: "This forms a binding precedent for future cases.",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      term: "Obiter dicta",
      definition: "Comments by judges not essential to the decision and not legally binding.",
      example: "May be persuasive but not binding in future cases.",
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  const categories = [
    { id: 'latin', name: 'Latin Terms', icon: <BookOpen className="w-6 h-6" />, data: latinTerms },
    { id: 'court', name: 'Court Terms', icon: <Gavel className="w-6 h-6" />, data: courtTerms },
    { id: 'contract', name: 'Contract & Tort', icon: <FileText className="w-6 h-6" />, data: contractTerms },
    { id: 'criminal', name: 'Criminal Law', icon: <Shield className="w-6 h-6" />, data: criminalTerms },
    { id: 'reading', name: 'Legal Reading', icon: <BookOpen className="w-6 h-6" />, data: legalReadingTerms }
  ];

  const toggleDefinition = (termIndex) => {
    setShowDefinition(prev => ({
      ...prev,
      [termIndex]: !prev[termIndex]
    }));
  };

  const getCurrentData = () => {
    return categories.find(cat => cat.id === selectedCategory)?.data || [];
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
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-700 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Scale className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Legal Terminologies & Jargon
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Speaking the Law - Master the language of legal professionals
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Introduction */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 mx-auto mb-4 w-fit">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Learn Legal Language?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Legal professionals use specific terms and phrases that might sound confusing at first. 
              Understanding these terms helps you decode legal language quickly and communicate effectively in legal contexts.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
            <div className="flex items-center space-x-4 mb-4">
              <Star className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800">Did You Know?</h3>
            </div>
            <p className="text-gray-700 text-lg">
              Many legal terms come from <strong className="text-green-600">Latin</strong> because legal principles 
              originated in Roman law and have been carried forward through centuries!
            </p>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            Choose a Category to Explore
          </h2>
          
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg scale-105'
                    : 'bg-gradient-to-r from-green-50 to-emerald-50 text-gray-700 hover:from-green-100 hover:to-emerald-100'
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className={`p-3 rounded-full ${
                    selectedCategory === category.id ? 'bg-white/20' : 'bg-green-200'
                  }`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-sm text-center">{category.name}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Terms Display */}
        <div className="space-y-6">
          {getCurrentData().map((term, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-102 ${
                visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3 flex-shrink-0">
                  {term.icon}
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{term.term}</h3>
                    <button
                      onClick={() => toggleDefinition(index)}
                      className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full font-semibold hover:from-green-200 hover:to-emerald-200 transition-all duration-300"
                    >
                      {showDefinition[index] ? 'Hide Details' : 'Show Details'}
                    </button>
                  </div>
                  
                  {term.translation && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 mb-4 border-l-4 border-green-400">
                      <p className="text-green-700 font-medium">
                        <strong>Translation:</strong> {term.translation}
                      </p>
                    </div>
                  )}
                  
                  {(showDefinition[index] || !term.translation) && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-2">Definition:</h4>
                        <p className="text-gray-700">{term.definition}</p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-4 border-l-4 border-emerald-400">
                        <h4 className="font-semibold text-gray-800 mb-2">Example:</h4>
                        <p className="text-gray-700">{term.example}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Key Takeaways
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="bg-green-100 rounded-full p-3 w-fit mb-4">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Master the Basics</h3>
              <p className="text-gray-600">
                Start with common Latin terms like <strong>Mens Rea</strong> and <strong>Actus Reus</strong> - 
                they form the foundation of criminal law.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="bg-emerald-100 rounded-full p-3 w-fit mb-4">
                <Scale className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Context Matters</h3>
              <p className="text-gray-600">
                Understanding when and how these terms are used helps you navigate legal documents and discussions confidently.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="bg-teal-100 rounded-full p-3 w-fit mb-4">
                <Target className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Practice Makes Perfect</h3>
              <p className="text-gray-600">
                Try using these terms in context and look for them in legal news articles to reinforce your learning.
              </p>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-4xl mb-4">⚖️</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              You're Now Speaking Legal!
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-6">
              With these terms in your vocabulary, you can better understand legal documents, 
              court proceedings, and professional legal discussions.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                Remember: <strong className="text-green-600">Legal language</strong> is a tool for precision and clarity. 
                <strong className="text-emerald-600"> Master it</strong> and you'll unlock the door to legal understanding! 🔑
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

export default Module5LegalTerms;