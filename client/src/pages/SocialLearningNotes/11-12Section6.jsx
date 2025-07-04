import React, { useState } from 'react';
import { Users, Star, Map, Compass, Heart, Eye, Target, TrendingUp, CheckCircle, Crown, Trophy, Globe } from 'lucide-react';

const Module6EvolvingIdentity = ({ topicRefs }) => {
  const [identityEvolution, setIdentityEvolution] = useState({
    pastSelf: '',
    emergingSelf: ''
  });
  const [legacyWords, setLegacyWords] = useState(['', '', '']);
  const [futureMap, setFutureMap] = useState({
    values: '',
    vision: '',
    buildHabits: '',
    breakHabits: '',
    people: ''
  });

  const handleLegacyWordChange = (index, value) => {
    const newWords = [...legacyWords];
    newWords[index] = value;
    setLegacyWords(newWords);
  };

  const getCompletionPercentage = () => {
    const totalFields = Object.values(futureMap).length;
    const filledFields = Object.values(futureMap).filter(value => value.trim() !== '').length;
    return Math.round((filledFields / totalFields) * 100);
  };

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
        <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-800 via-green-700 to-emerald-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                <Star className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Evolving Identity & Legacy
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              "Who Am I Becoming?" - Shape your identity with intention and create a meaningful legacy
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        {/* Introduction */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-500">
          <div className="text-center mb-8">
            <Compass className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Your Identity is Your Greatest Creation
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              You are not a fixed story. You are an evolving masterpiece, constantly growing, 
              learning, and becoming. This final module helps you take conscious control of that evolution.
            </p>
          </div>
        </div>

        {/* Section 1: Identity as a Journey */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <Map className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Identity as a Journey, Not a Label
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              You are allowed to evolve. You are not a fixed story.
            </p>
          </div>

          {/* Past vs Emerging Self Activity */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Past-You vs Emerging-You
              </h3>
              <p className="text-gray-700 mt-4">
                Reflect on how you have evolved and who you are becoming
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
                <div className="flex items-center space-x-3 mb-6">
                  <Eye className="w-8 h-8 text-blue-600" />
                  <h4 className="text-2xl font-bold text-blue-700">Past Version of You</h4>
                </div>
                <p className="text-blue-600 mb-4">What beliefs, habits, or behaviors have you outgrown?</p>
                <textarea
                  className="w-full p-4 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent resize-none"
                  rows="6"
                  placeholder="Think about how you used to think, act, or see the world. What has changed?"
                  value={identityEvolution.pastSelf}
                  onChange={(e) => setIdentityEvolution(prev => ({ ...prev, pastSelf: e.target.value }))}
                />
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-2xl p-8 border border-green-200">
                <div className="flex items-center space-x-3 mb-6">
                  <Star className="w-8 h-8 text-green-600" />
                  <h4 className="text-2xl font-bold text-green-700">Emerging You</h4>
                </div>
                <p className="text-green-600 mb-4">What are you currently stepping into or developing?</p>
                <textarea
                  className="w-full p-4 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                  rows="6"
                  placeholder="What new qualities, perspectives, or capabilities are you developing?"
                  value={identityEvolution.emergingSelf}
                  onChange={(e) => setIdentityEvolution(prev => ({ ...prev, emergingSelf: e.target.value }))}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Legacy Thinking */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Legacy Thinking
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Your legacy is not about fame — it is the impact you leave on people and places.
            </p>
          </div>

          {/* Personal Legacy Reflection */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <Crown className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Your Legacy Vision
              </h3>
              <p className="text-gray-700 mt-4">
                If someone described you in 3 words after graduation, what would you want them to say?
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((num, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-white font-bold">
                      {num}
                    </div>
                    <input
                      type="text"
                      className="w-full p-3 border border-green-200 rounded-lg text-center focus:ring-2 focus:ring-green-300 focus:border-transparent font-semibold"
                      placeholder={`Word ${num}`}
                      value={legacyWords[index]}
                      onChange={(e) => handleLegacyWordChange(index, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Designing the Future Self */}
        <div className="space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-full p-3">
                <Compass className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Designing the Future Self
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Do not just imagine your future — design it.
            </p>
          </div>

          {/* Future Self Map */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="text-center mb-8">
              <Map className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Your Future Self Map
              </h3>
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-4 mt-4 max-w-md mx-auto">
                <div className="text-3xl font-bold">{getCompletionPercentage()}%</div>
                <div className="text-green-100 text-sm">Map Completion</div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="w-6 h-6 text-green-600" />
                  <h4 className="font-bold text-gray-800">Core Values</h4>
                </div>
                <textarea
                  className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                  rows="4"
                  placeholder="What principles will guide your decisions?"
                  value={futureMap.values}
                  onChange={(e) => setFutureMap(prev => ({ ...prev, values: e.target.value }))}
                />
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="w-6 h-6 text-green-600" />
                  <h4 className="font-bold text-gray-800">Personal Vision</h4>
                </div>
                <textarea
                  className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                  rows="4"
                  placeholder="What do you want to achieve?"
                  value={futureMap.vision}
                  onChange={(e) => setFutureMap(prev => ({ ...prev, vision: e.target.value }))}
                />
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <h4 className="font-bold text-gray-800">Habits to Build</h4>
                </div>
                <textarea
                  className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
                  rows="4"
                  placeholder="What daily practices will help you grow?"
                  value={futureMap.buildHabits}
                  onChange={(e) => setFutureMap(prev => ({ ...prev, buildHabits: e.target.value }))}
                />
              </div>

              <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-6 border border-red-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="w-6 h-6 text-red-600" />
                  <h4 className="font-bold text-gray-800">Habits to Break</h4>
                </div>
                <textarea
                  className="w-full p-3 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-300 focus:border-transparent resize-none"
                  rows="4"
                  placeholder="What behaviors hold you back?"
                  value={futureMap.breakHabits}
                  onChange={(e) => setFutureMap(prev => ({ ...prev, breakHabits: e.target.value }))}
                />
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                  <h4 className="font-bold text-gray-800">People to Surround Yourself With</h4>
                </div>
                <textarea
                  className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent resize-none"
                  rows="4"
                  placeholder="What types of people support your growth?"
                  value={futureMap.people}
                  onChange={(e) => setFutureMap(prev => ({ ...prev, people: e.target.value }))}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Course Completion */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              🎉 Congratulations! Course Complete 🎉
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-6">
              You have completed all 6 modules of Social-Emotional Learning! You now have the tools to master 
              your inner world, navigate relationships, handle pressure, lead yourself, make ethical decisions, 
              and consciously evolve your identity.
            </p>
            
            <div className="bg-white rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Your SEL Journey</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-gray-800">Module 1:</span>
                  </div>
                  <p className="text-gray-600 text-sm">Mastering Inner Awareness</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-gray-800">Module 2:</span>
                  </div>
                  <p className="text-gray-600 text-sm">Navigating Human Dynamics</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-gray-800">Module 3:</span>
                  </div>
                  <p className="text-gray-600 text-sm">Emotional Mastery Under Pressure</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-gray-800">Module 4:</span>
                  </div>
                  <p className="text-gray-600 text-sm">Self-Leadership & High Performance</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-gray-800">Module 5:</span>
                  </div>
                  <p className="text-gray-600 text-sm">Ethical Reasoning & Consequences</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-gray-800">Module 6:</span>
                  </div>
                  <p className="text-gray-600 text-sm">Evolving Identity & Legacy</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-6 max-w-2xl mx-auto">
              <Crown className="w-10 h-10 mx-auto mb-4 opacity-90" />
              <p className="text-xl font-medium">
                <strong className="text-green-200">Know Thyself</strong> + 
                <strong className="text-emerald-200"> Lead Thyself</strong> + 
                <strong className="text-white"> Impact the World</strong>
              </p>
              <p className="text-green-100 mt-3 text-sm">
                You are now equipped to create positive change in yourself and the world around you. 
                Your journey of growth continues!
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
    
  );
};

export default Module6EvolvingIdentity;