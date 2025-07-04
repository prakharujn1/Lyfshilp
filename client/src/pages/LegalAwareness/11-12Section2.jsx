import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, Users, Scale, Target, Home, Dog, Coffee, AlertCircle, CheckCircle, XCircle, Lightbulb, FileText, Hammer } from 'lucide-react';

const Module2Torts = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [selectedExample, setSelectedExample] = useState(0);
  const [selectedDefense, setSelectedDefense] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedExample((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const tortExamples = [
    {
      title: "Defamation on Social Media",
      icon: "📱",
      scenario: "Someone publishes false statements damaging another person's reputation online",
      consequences: "Loss of job opportunities, social humiliation, mental distress",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Slipping on Unmarked Wet Floor", 
      icon: "⚠️",
      scenario: "Person slips and injures themselves due to store owner's negligence",
      consequences: "Physical injury, medical expenses, loss of income",
      color: "from-emerald-500 to-green-600"
    },
    {
      title: "Dog Bite in Public Place",
      icon: "🐕",
      scenario: "Dog owner fails to control their pet and it bites someone",
      consequences: "Physical injury, medical treatment, potential infection",
      color: "from-green-600 to-teal-600"
    }
  ];

  const defenses = [
    {
      name: "Voluntary Assumption of Risk",
      latin: "Volenti non fit injuria",
      description: "If a person knowingly accepts risks, they cannot later sue for injury",
      example: "Spectator at cricket match injured by ball cannot sue stadium",
      icon: <Target className="w-6 h-6" />
    },
    {
      name: "Act of God",
      latin: "Natural Events",
      description: "Uncontrollable natural events may absolve defendant of liability",
      example: "Damage due to floods, earthquakes, or lightning strikes",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      name: "Necessity",
      latin: "Greater Good",
      description: "Causing harm to prevent greater harm is a valid defense",
      example: "Breaking door to save child trapped in burning house",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const landmarkCases = [
    {
      title: "Donoghue v. Stevenson (1932)",
      facts: "Woman found decomposed snail in ginger beer bottle and fell ill",
      principle: "Duty of Care - manufacturers owe duty to consumers for product safety",
      impact: "Foundation of modern negligence law worldwide",
      icon: "⚖️"
    },
    {
      title: "McDonald's Hot Coffee Case",
      facts: "Woman suffered severe burns from excessively hot coffee",
      principle: "Negligence in serving dangerously hot products without warnings",
      impact: "Established standards for product safety warnings",
      icon: "☕"
    },
    {
      title: "Rylands v. Fletcher (1868)",
      facts: "Defendant's reservoir burst and flooded claimant's mine",
      principle: "Strict liability for inherently dangerous activities",
      impact: "Legal principle of strict liability without proving negligence",
      icon: "🏭"
    }
  ];

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
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-700 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">⚖️</div>
          <div className="absolute bottom-10 right-10 text-5xl">🛡️</div>
          <div className="absolute top-1/2 left-1/4 text-4xl">⚠️</div>
          <div className="absolute top-1/3 right-1/4 text-4xl">📋</div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Shield className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Law of Torts
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Everyday Wrongs & Civil Justice - Understanding how law protects individuals
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium">
                Civil Wrongs
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium">
                Negligence
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium">
                Compensation
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* What is a Tort */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              What is a Tort?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border-l-4 border-green-500">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                    <AlertCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Civil Wrong</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A tort is essentially a <strong className="text-green-600">civil wrong</strong> — an act or omission that causes harm or loss to another person, for which the injured party can seek compensation through the courts.
                </p>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center space-x-3 mb-2">
                    <Lightbulb className="w-5 h-5 text-green-600" />
                    <p className="text-sm font-medium text-gray-800">Etymology</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    From Latin <em>"tortus"</em> meaning <strong className="text-green-600">"twisted" or "wrong"</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-gray-800">Purpose of Tort Law</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-gray-700">Provide relief to victims</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-gray-700">Deter others from similar wrongs</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-gray-700">Allow individuals to claim remedies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Difference */}
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 border-l-4 border-emerald-400">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">⚖️</div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">Criminal Law</h4>
                <p className="text-gray-600 text-sm">State prosecutes offenses</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">Tort Law</h4>
                <p className="text-gray-600 text-sm">Individuals claim remedies for personal wrongs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Examples of Torts */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Examples of Torts
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real-life situations where tort law protects individuals
            </p>
          </div>

          {/* Featured Example (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Featured Example</div>
              <div className={`bg-gradient-to-r ${tortExamples[selectedExample].color} text-white rounded-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="text-6xl mb-4">{tortExamples[selectedExample].icon}</div>
                <h3 className="text-2xl font-bold mb-4">{tortExamples[selectedExample].title}</h3>
                <div className="bg-white/20 rounded-lg p-4 mb-4">
                  <p className="text-sm font-medium">Scenario:</p>
                  <p className="text-sm">{tortExamples[selectedExample].scenario}</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="text-sm font-medium">Potential Consequences:</p>
                  <p className="text-sm">{tortExamples[selectedExample].consequences}</p>
                </div>
              </div>
            </div>
          </div>

          {/* All Examples Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {tortExamples.map((example, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${example.color} text-white rounded-2xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  selectedExample === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setSelectedExample(index)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{example.icon}</div>
                  <h4 className="text-lg font-bold mb-3">{example.title}</h4>
                  <div className="bg-white/20 rounded-lg p-3">
                    <p className="text-xs">{example.scenario}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Negligence Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Negligence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The most common basis for tort claims
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">What is Negligence?</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Negligence occurs when someone fails to exercise <strong className="text-green-600">reasonable care</strong> to avoid causing injury or loss to another.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <Target className="w-5 h-5 text-green-600" />
                    <h4 className="font-bold text-gray-800">The Test</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Would a <strong className="text-green-600">"reasonable person"</strong> in the same situation have acted differently?
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Landmark Case</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                    <h5 className="font-semibold text-green-700">Donoghue v. Stevenson (1932)</h5>
                    <p className="text-green-600 text-sm mt-2">
                      Woman found decomposed snail in ginger beer bottle and fell ill
                    </p>
                  </div>
                  <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded">
                    <h5 className="font-semibold text-emerald-700">Established Principle</h5>
                    <p className="text-emerald-600 text-sm mt-2">
                      <strong>Duty of Care</strong> - manufacturers owe duty to consumers to ensure products are safe
                    </p>
                  </div>
                  <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded">
                    <p className="text-teal-700 text-sm">
                      This principle is now the <strong>foundation of negligence law worldwide</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Defenses in Tort */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Defenses in Tort
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Legal defenses that can protect against tort liability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {defenses.map((defense, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 cursor-pointer ${
                  selectedDefense === index ? 'border-green-400 ring-4 ring-green-100' : 'border-gray-100'
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => setSelectedDefense(index)}
              >
                <div className="text-center mb-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-white">
                    {defense.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{defense.name}</h4>
                  <p className="text-sm text-green-600 font-medium italic">({defense.latin})</p>
                </div>
                <p className="text-gray-700 text-sm mb-4 text-center">{defense.description}</p>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600"><strong>Example:</strong> {defense.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Landmark Cases */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Famous Tort Cases
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {landmarkCases.map((case_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{case_.icon}</div>
                  <h4 className="font-bold text-gray-800 mb-2">{case_.title}</h4>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-600"><strong>Facts:</strong> {case_.facts}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-xs text-green-700"><strong>Principle:</strong> {case_.principle}</p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-3">
                    <p className="text-xs text-emerald-700"><strong>Impact:</strong> {case_.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Remedies Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4">
                <Hammer className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Remedies in Tort Law
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How victims can seek justice and compensation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <h4 className="font-bold text-gray-800">Compensation through Damages</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Monetary compensation to cover medical expenses, lost income, pain and suffering, and other losses caused by the tortfeasor.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <h4 className="font-bold text-gray-800">Injunctions</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Court orders to prevent someone from continuing harmful acts or compelling them to take specific actions.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Case Example: Rylands v. Fletcher</h4>
              <div className="space-y-3">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                  <p className="text-blue-700 text-sm">
                    <strong>Facts:</strong> Defendant's reservoir burst and flooded claimant's mine
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded">
                  <p className="text-green-700 text-sm">
                    <strong>Ruling:</strong> Strict liability even without negligence for inherently dangerous activities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-4xl mb-6">🎯</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Remember This
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <p className="text-gray-700 font-medium">
                  Torts are <strong className="text-green-600">civil wrongs</strong> that allow individuals to seek compensation
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <p className="text-gray-700 font-medium">
                  <strong className="text-green-600">Negligence</strong> is the most common tort requiring duty of care
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <p className="text-gray-700 font-medium">
                  Tort law provides <strong className="text-green-600">relief and deterrence</strong> for everyday wrongs
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

export default Module2Torts;