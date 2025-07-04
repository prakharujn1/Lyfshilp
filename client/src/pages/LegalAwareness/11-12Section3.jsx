import React, { useState, useEffect } from 'react';
import { Gavel, Shield, Users, Eye, Brain, AlertTriangle, Scale, FileText, UserCheck, Clock, ArrowRight, CheckCircle, XCircle, Lightbulb, Target, Smartphone } from 'lucide-react';

const Module3CriminalLaw = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedActor, setSelectedActor] = useState(0);
  const [selectedOffense, setSelectedOffense] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2, 3, 4, 5, 6, 7]);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 7);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const crimeVsCivil = [
    {
      aspect: "Nature of Wrong",
      crime: "Offenses against society as a whole",
      civil: "Private wrongs affecting individuals",
      icon: <Users className="w-6 h-6" />
    },
    {
      aspect: "Purpose",
      crime: "Punish and deter to maintain public order",
      civil: "Compensate victim or restore rights",
      icon: <Target className="w-6 h-6" />
    },
    {
      aspect: "Parties Involved",
      crime: "State prosecutes the accused",
      civil: "Injured party sues the wrongdoer",
      icon: <Scale className="w-6 h-6" />
    },
    {
      aspect: "Standard of Proof",
      crime: "Beyond a reasonable doubt",
      civil: "Balance of probabilities",
      icon: <Eye className="w-6 h-6" />
    },
    {
      aspect: "Consequences",
      crime: "Imprisonment, fines, punishment",
      civil: "Compensation, injunctions",
      icon: <Gavel className="w-6 h-6" />
    }
  ];

  const crimeElements = [
    {
      latin: "Actus Reus",
      english: "Guilty Act",
      description: "The physical action or unlawful omission that breaches the law",
      example: "Actually taking someone's property without permission",
      icon: "🏃‍♂️",
      color: "from-green-500 to-emerald-600"
    },
    {
      latin: "Mens Rea",
      english: "Guilty Mind",
      description: "The mental intent to commit a crime",
      example: "Knowing that taking the property is wrong and illegal",
      icon: "🧠",
      color: "from-emerald-500 to-green-600"
    }
  ];

  const keyActors = [
    {
      role: "Police",
      description: "Frontline agency responsible for investigating crimes",
      responsibilities: ["Investigating alleged crimes", "Collecting evidence", "Arresting suspects"],
      icon: "👮‍♂️",
      color: "from-green-500 to-emerald-600"
    },
    {
      role: "Prosecutors",
      description: "Represent the state in court",
      responsibilities: ["Present evidence in court", "Prove accused's guilt", "Represent public interest"],
      icon: "⚖️",
      color: "from-emerald-500 to-green-600"
    },
    {
      role: "Defense Lawyers",
      description: "Defend the accused",
      responsibilities: ["Challenge evidence", "Protect accused's rights", "Present defense case"],
      icon: "🛡️",
      color: "from-green-600 to-teal-600"
    },
    {
      role: "Judges",
      description: "Oversee the trial process",
      responsibilities: ["Ensure fair procedures", "Interpret the law", "Deliver verdicts and sentences"],
      icon: "👨‍⚖️",
      color: "from-teal-500 to-green-600"
    }
  ];

  const trialSteps = [
    { step: "FIR", description: "First Information Report filed with police", icon: "📋" },
    { step: "Investigation", description: "Police collect evidence and record statements", icon: "🔍" },
    { step: "Arrest", description: "Suspect arrested if reasonable suspicion exists", icon: "👮‍♂️" },
    { step: "Bail", description: "Temporary release pending trial under conditions", icon: "🔓" },
    { step: "Trial", description: "Both sides present cases, examine witnesses", icon: "⚖️" },
    { step: "Judgment", description: "Judge delivers verdict of guilty or not guilty", icon: "📜" },
    { step: "Appeal", description: "Either party can challenge decision in higher court", icon: "🏛️" }
  ];

  const commonOffenses = [
    {
      category: "Cybercrime",
      description: "Crimes involving computers and internet",
      examples: ["Hacking", "Identity theft", "Phishing", "Cyberbullying"],
      icon: "💻",
      color: "from-green-500 to-emerald-600"
    },
    {
      category: "Assault and Battery",
      description: "Physical harm or threat of harm",
      examples: ["Threatening someone", "Physical contact causing harm", "Intimidation"],
      icon: "⚡",
      color: "from-emerald-500 to-green-600"
    },
    {
      category: "Theft and Robbery",
      description: "Taking someone's property unlawfully",
      examples: ["Taking property without consent", "Using force to steal", "Burglary"],
      icon: "🎯",
      color: "from-green-600 to-teal-600"
    },
    {
      category: "Juvenile Offenses",
      description: "Crimes committed by minors (under 18)",
      examples: ["Focus on rehabilitation", "Special juvenile courts", "Different treatment"],
      icon: "👶",
      color: "from-teal-500 to-green-600"
    }
  ];

  return (
    <div
      id="s-3"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-3"] = el;
        }
      }}
      className="mb-10"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-700 to-green-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">⚖️</div>
          <div className="absolute bottom-10 right-10 text-5xl">👮‍♂️</div>
          <div className="absolute top-1/2 left-1/4 text-4xl">🏛️</div>
          <div className="absolute top-1/3 right-1/4 text-4xl">📜</div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Gavel className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Criminal Law
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Crime, Punishment & Process - Understanding how society deals with wrongdoing
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium">
                Public Order
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium">
                Justice System
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium">
                Rights & Duties
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Crime vs Civil Wrong */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Crime vs Civil Wrong
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the key differences between criminal and civil law
            </p>
          </div>

          <div className="space-y-6">
            {crimeVsCivil.map((comparison, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="grid lg:grid-cols-4 gap-6 items-center">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-2 text-white">
                      {comparison.icon}
                    </div>
                    <h4 className="font-bold text-gray-800">{comparison.aspect}</h4>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                    <p className="text-sm text-red-700 font-medium">Criminal Law</p>
                    <p className="text-xs text-red-600">{comparison.crime}</p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <p className="text-sm text-blue-700 font-medium">Civil Law</p>
                    <p className="text-xs text-blue-600">{comparison.civil}</p>
                  </div>
                  <div className="text-center">
                    <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Examples Section */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
            <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">Examples</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">🚨</div>
                  <h5 className="font-bold text-red-700">Criminal Cases</h5>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">• Murder, theft, rape</p>
                  <p className="text-sm text-gray-700">• Prosecuted by the State</p>
                  <p className="text-sm text-gray-700">• Can lead to imprisonment</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">⚖️</div>
                  <h5 className="font-bold text-blue-700">Civil Cases</h5>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">• Defamation, negligence, trespass</p>
                  <p className="text-sm text-gray-700">• Individuals sue for damages</p>
                  <p className="text-sm text-gray-700">• Results in compensation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Basic Elements of Crime */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Basic Elements of Crime
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every crime generally requires two key elements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {crimeElements.map((element, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${element.color} text-white rounded-3xl p-8 shadow-xl hover:scale-105 transition-all duration-500 ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{element.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{element.latin}</h3>
                  <p className="text-lg opacity-90">({element.english})</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Definition:</h4>
                    <p className="text-sm">{element.description}</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Example:</h4>
                    <p className="text-sm">{element.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border-l-4 border-amber-400">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              <h4 className="text-lg font-bold text-gray-800">Important Principle</h4>
            </div>
            <p className="text-gray-700 text-center">
              <strong className="text-amber-600">Both elements must coexist</strong> - accidentally injuring someone by slipping is not assault 
              unless there was <strong className="text-amber-600">intention or recklessness</strong>. This prevents punishing honest mistakes as crimes.
            </p>
          </div>
        </div>

        {/* Key Actors in Criminal Law */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Key Actors in Criminal Law
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The people who make the criminal justice system work
            </p>
          </div>

          {/* Featured Actor (Auto-rotating) */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Featured Role</div>
              <div className={`bg-gradient-to-r ${keyActors[selectedActor].color} text-white rounded-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500`}>
                <div className="text-6xl mb-4">{keyActors[selectedActor].icon}</div>
                <h3 className="text-2xl font-bold mb-4">{keyActors[selectedActor].role}</h3>
                <p className="text-lg opacity-90 mb-6">{keyActors[selectedActor].description}</p>
                <div className="bg-white/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Key Responsibilities:</h4>
                  <div className="space-y-2">
                    {keyActors[selectedActor].responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <p className="text-sm">{resp}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Actors Grid */}
          <div className="grid md:grid-cols-4 gap-4">
            {keyActors.map((actor, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${actor.color} text-white rounded-2xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  selectedActor === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedActor(index)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{actor.icon}</div>
                  <h4 className="text-lg font-bold mb-2">{actor.role}</h4>
                  <div className="bg-white/20 rounded-lg p-2">
                    <p className="text-xs">{actor.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-400">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-green-600" />
              <h4 className="text-lg font-bold text-gray-800">Why This Division Matters</h4>
            </div>
            <p className="text-gray-700 text-center">
              This division of roles <strong className="text-green-600">safeguards fairness and justice</strong> in the criminal process by ensuring checks and balances.
            </p>
          </div>
        </div>

        {/* Criminal Trial Process */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Criminal Trial Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The journey from complaint to verdict
            </p>
          </div>

          {/* Process Flow */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <div className="text-lg text-gray-600 mb-4">Current Step</div>
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-6 max-w-xl mx-auto">
                <div className="text-4xl mb-3">{trialSteps[currentStep].icon}</div>
                <h3 className="text-xl font-bold mb-2">{trialSteps[currentStep].step}</h3>
                <p className="text-sm opacity-90">{trialSteps[currentStep].description}</p>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-8">
              {trialSteps.map((step, index) => (
                <div
                  key={index}
                  className={`text-center p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                    currentStep === index 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white scale-110' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  <div className="text-2xl mb-1">{step.icon}</div>
                  <p className="text-xs font-medium">{step.step}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-l-4 border-green-400">
              <h4 className="font-bold text-gray-800 mb-2">Process Note:</h4>
              <p className="text-gray-700 text-sm">
                India's criminal procedure is rooted in British common law but has adapted to Indian social and legal contexts, 
                including specific provisions for vulnerable groups and speedy trials.
              </p>
            </div>
          </div>
        </div>

        {/* Common Offenses */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Common Offenses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modern crimes and how they're handled
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonOffenses.map((offense, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${offense.color} text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  selectedOffense === index ? 'ring-4 ring-green-300 scale-105' : ''
                } ${
                  visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setSelectedOffense(index)}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{offense.icon}</div>
                  <h4 className="text-lg font-bold mb-2">{offense.category}</h4>
                  <p className="text-sm opacity-90">{offense.description}</p>
                </div>
                <div className="space-y-2">
                  {offense.examples.map((example, idx) => (
                    <div key={idx} className="bg-white/20 rounded p-2">
                      <p className="text-xs">{example}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-l-4 border-blue-400">
            <div className="flex items-center space-x-3 mb-4">
              <Smartphone className="w-6 h-6 text-blue-600" />
              <h4 className="text-lg font-bold text-gray-800">Special Note on Juvenile Offenses</h4>
            </div>
            <p className="text-gray-700">
              The legal system recognizes that <strong className="text-blue-600">children require different treatment</strong> than adults. 
              Offenders below 18 are dealt with under the <strong className="text-blue-600">Juvenile Justice Act</strong>, focusing more on 
              <strong className="text-blue-600"> rehabilitation than punishment</strong> to allow reform and reintegration into society.
            </p>
          </div>
        </div>

        {/* Landmark Case Study */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">⚖️</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Landmark Case Study
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded">
                  <h4 className="text-xl font-bold text-red-700 mb-4">The Nirbhaya Case (2012)</h4>
                  <p className="text-red-600 text-sm mb-4">
                    A brutal gang rape case in Delhi that sparked nationwide protests demanding stronger laws for women's safety.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Public Impact:</h5>
                    <p className="text-gray-600 text-sm">Led to massive protests and demands for legal reform</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                  <h4 className="text-lg font-bold text-green-700 mb-4">Legal Reforms (2013)</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <p className="text-sm text-gray-700">Harsher punishments including death penalty</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <p className="text-sm text-gray-700">Fast-track courts for speedy trials</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <p className="text-sm text-gray-700">Better victim support services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-6 border-l-4 border-emerald-400">
              <div className="flex items-center space-x-3 mb-3">
                <Lightbulb className="w-5 h-5 text-emerald-600" />
                <h5 className="font-bold text-gray-800">Key Lesson</h5>
              </div>
              <p className="text-gray-700 text-sm">
                This case demonstrates how <strong className="text-emerald-600">public outrage and legal advocacy</strong> can lead to 
                <strong className="text-emerald-600"> meaningful criminal law reform</strong> to better protect victims and ensure justice.
              </p>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-4xl mb-6">🎯</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Key Takeaways
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <p className="text-gray-700 font-medium">
                  Criminal law protects <strong className="text-green-600">society as a whole</strong> by punishing public wrongs
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <p className="text-gray-700 font-medium">
                  Every crime needs both <strong className="text-green-600">guilty act and guilty mind</strong>
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <p className="text-gray-700 font-medium">
                  The criminal justice system has <strong className="text-green-600">multiple safeguards</strong> to ensure fairness
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

export default Module3CriminalLaw;