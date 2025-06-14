// import React, { useState, useEffect } from 'react';
// import { AlertTriangle, Factory, Car, Droplets, TreePine, Trash2, Thermometer, Skull, Fish, Sprout, TrendingUp, Eye, EyeOff, Globe } from 'lucide-react';

// const Module3 = ({ topicRefs }) => {
//   const [visibleCards, setVisibleCards] = useState(new Set());
//   const [activeTab, setActiveTab] = useState('pollution');

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setVisibleCards(prev => new Set([...prev, entry.target.id]));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const cards = document.querySelectorAll('.animate-card');
//     cards.forEach(card => observer.observe(card));

//     return () => observer.disconnect();
//   }, []);

//   const pollutionTypes = [
//     {
//       id: 'air',
//       title: 'Air Pollution',
//       icon: <Factory className="w-8 h-8" />,
//       gradient: 'from-gray-400 to-slate-600',
//       bgColor: 'bg-gray-50',
//       borderColor: 'border-gray-200',
//       causes: ['Vehicle emissions', 'Industrial smoke', 'Burning garbage', 'Construction dust'],
//       example: 'Delhi\'s toxic smog in winter, often compared to smoking multiple cigarettes a day',
//       harms: ['Causes asthma, bronchitis, and even cancer', 'Damages crops and reduces visibility', 'Contributes to climate change'],
//       emoji: '🏭'
//     },
//     {
//       id: 'water',
//       title: 'Water Pollution',
//       icon: <Droplets className="w-8 h-8" />,
//       gradient: 'from-blue-400 to-cyan-600',
//       bgColor: 'bg-blue-50',
//       borderColor: 'border-blue-200',
//       causes: ['Industrial waste in rivers', 'Sewage discharge', 'Harmful chemicals in farming'],
//       example: 'Yamuna River -- declared "dead" in many stretches due to toxic foam and waste',
//       harms: ['Aquatic animals die due to lack of oxygen', 'Drinking water becomes unsafe', 'Groundwater becomes unusable'],
//       emoji: '💧'
//     },
//     {
//       id: 'soil',
//       title: 'Soil Degradation',
//       icon: <Sprout className="w-8 h-8" />,
//       gradient: 'from-amber-400 to-orange-600',
//       bgColor: 'bg-amber-50',
//       borderColor: 'border-amber-200',
//       causes: ['Overuse of chemical fertilizers', 'Mining activities', 'Deforestation'],
//       example: 'Punjab\'s over-farmed land now suffers from falling productivity',
//       harms: ['Soil loses nutrients and becomes infertile', 'Affects food security and farmer income', 'Leads to desertification'],
//       emoji: '🌱'
//     },
//     {
//       id: 'deforestation',
//       title: 'Deforestation',
//       icon: <TreePine className="w-8 h-8" />,
//       gradient: 'from-green-400 to-emerald-600',
//       bgColor: 'bg-green-50',
//       borderColor: 'border-green-200',
//       causes: ['Cutting forests for agriculture', 'Mining operations', 'Infrastructure development'],
//       example: 'Amazon Rainforest — called "Earth\'s lungs" — is shrinking alarmingly',
//       harms: ['Loss of biodiversity and tribal homes', 'Less carbon absorption → more global warming', 'Landslides and disrupted rainfall'],
//       emoji: '🌳'
//     },
//     {
//       id: 'waste',
//       title: 'Waste Overload',
//       icon: <Trash2 className="w-8 h-8" />,
//       gradient: 'from-red-400 to-pink-600',
//       bgColor: 'bg-red-50',
//       borderColor: 'border-red-200',
//       causes: ['Excessive plastic use', 'Lack of recycling', 'Rise in e-waste from gadgets'],
//       example: 'Urban landfills in cities like Mumbai and Ghazipur have turned into toxic mountains',
//       harms: ['Toxic chemicals seep into soil and groundwater', 'Air pollution from burning waste', 'Marine life dies from plastic ingestion'],
//       emoji: '🗑️'
//     }
//   ];

//   const consequences = [
//     {
//       title: 'Wildlife Extinction',
//       description: 'Animals lose homes, food, and shelter — over 1 million species are at risk',
//       icon: '🐯',
//       color: 'from-orange-400 to-red-500'
//     },
//     {
//       title: 'Human Health Crisis',
//       description: 'Polluted air and water cause respiratory illnesses, skin diseases, and more',
//       icon: '🫁',
//       color: 'from-red-400 to-pink-500'
//     },
//     {
//       title: 'Climate Disasters',
//       description: 'Deforestation and climate disruption lead to unpredictable rainfall',
//       icon: '💧',
//       color: 'from-blue-400 to-indigo-500'
//     },
//     {
//       title: 'Resource Scarcity',
//       description: 'Freshwater, fertile land, and clean air are all becoming scarce',
//       icon: '🔋',
//       color: 'from-green-400 to-emerald-500'
//     }
//   ];

//   return (
//     <div
//       id="3"
//       ref={(el) => {
//         if (topicRefs?.current) {
//           topicRefs.current["3"] = el;
//         }
//       }}
//       className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100"
//     >
//       {/* Hero Section */}
//       <div className="relative overflow-hidden bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 py-16 px-6">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="relative max-w-6xl mx-auto text-center">
//           <div className="animate-bounce mb-6">
//             <AlertTriangle className="w-16 h-16 text-white mx-auto" />
//           </div>
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
//             🏭 Human Impact on Environment
//           </h1>
//           <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
//             Understanding how our activities are changing the planet we call home
//           </p>
//         </div>
//         <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-12">
//         {/* Introduction */}
//         <div className="text-center mb-16">
//           <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
//             <Globe className="w-12 h-12 text-blue-600" />
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//             🌐 Understanding the Human Footprint
//           </h2>
//           <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
//             <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
//               Humans depend on nature for survival — food, air, water, and shelter. But over time, our activities have started to 
//               <span className="font-semibold text-red-600"> disturb the balance</span> of ecosystems.
//             </p>
//             <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400 mt-6">
//               <p className="text-lg text-gray-700 italic">
//                 💡 <strong>Think of Earth as a house:</strong> If we keep breaking windows, overusing electricity, and dumping garbage in rooms, 
//                 it won't remain livable. That's what we're doing on a global scale.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Major Types of Environmental Degradation */}
//         <div className="mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
//             🌫️ Major Types of Environmental Degradation
//           </h2>
          
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {pollutionTypes.map((pollution, index) => (
//               <div
//                 key={pollution.id}
//                 id={`card-${pollution.id}`}
//                 className={`animate-card bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
//                   visibleCards.has(`card-${pollution.id}`) 
//                     ? 'translate-y-0 opacity-100' 
//                     : 'translate-y-10 opacity-0'
//                 }`}
//                 style={{ transitionDelay: `${index * 100}ms` }}
//               >
//                 <div className={`h-32 bg-gradient-to-r ${pollution.gradient} flex items-center justify-center`}>
//                   <div className="text-6xl">{pollution.emoji}</div>
//                 </div>
                
//                 <div className="p-6">
//                   <div className="flex items-center mb-4">
//                     <div className="text-white p-2 rounded-lg mr-3" style={{ background: `linear-gradient(135deg, ${pollution.gradient.split(' ')[1]}, ${pollution.gradient.split(' ')[3]})` }}>
//                       {pollution.icon}
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-800">{pollution.title}</h3>
//                   </div>

//                   <div className="space-y-4">
//                     <div className={`p-4 ${pollution.bgColor} rounded-lg ${pollution.borderColor} border-l-4`}>
//                       <h4 className="font-semibold text-gray-700 mb-2">🚫 Main Causes:</h4>
//                       <ul className="text-sm text-gray-600 space-y-1">
//                         {pollution.causes.map((cause, idx) => (
//                           <li key={idx} className="flex items-start">
//                             <span className="text-red-500 mr-2">•</span>
//                             {cause}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-300">
//                       <h4 className="font-semibold text-gray-700 mb-2">📍 Real Example:</h4>
//                       <p className="text-sm text-gray-600 italic">{pollution.example}</p>
//                     </div>

//                     <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-300">
//                       <h4 className="font-semibold text-red-700 mb-2">⚠️ Harmful Effects:</h4>
//                       <ul className="text-sm text-red-600 space-y-1">
//                         {pollution.harms.map((harm, idx) => (
//                           <li key={idx} className="flex items-start">
//                             <span className="text-red-500 mr-2">•</span>
//                             {harm}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Consequences Section */}
//         <div className="mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
//             ⚠️ Consequences of Environmental Damage
//           </h2>
//           <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
//             When we harm nature, the damage doesn't stay in one place — it spreads across systems:
//           </p>

//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//             {consequences.map((consequence, index) => (
//               <div
//                 key={index}
//                 className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
//               >
//                 <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${consequence.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
//                   {consequence.icon}
//                 </div>
//                 <h3 className="text-lg font-bold text-gray-800 mb-3">{consequence.title}</h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">{consequence.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Plastic Crisis Data */}
//         <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="text-6xl mb-6">📊</div>
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               The Plastic Crisis in India
//             </h2>
            
//             <div className="grid md:grid-cols-3 gap-8 mb-8">
//               <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
//                 <div className="text-4xl font-bold mb-2">3.5M</div>
//                 <div className="text-lg">Tonnes of plastic waste annually</div>
//               </div>
//               <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
//                 <div className="text-4xl font-bold mb-2">60%</div>
//                 <div className="text-lg">Non-recyclable plastic</div>
//               </div>
//               <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
//                 <div className="text-4xl font-bold mb-2">100%</div>
//                 <div className="text-lg">Of us are affected</div>
//               </div>
//             </div>

//             <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left">
//               <h3 className="text-xl font-bold mb-4 text-center">🚨 The Reality Check:</h3>
//               <ul className="space-y-3 text-lg">
//                 <li className="flex items-start">
//                   <span className="text-yellow-300 mr-3">•</span>
//                   Plastic bags clog drains, causing urban floods
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-yellow-300 mr-3">•</span>
//                   Marine animals mistake plastic for food
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-yellow-300 mr-3">•</span>
//                   Microplastics have been found in human blood
//                 </li>
//               </ul>
//               <div className="mt-6 p-4 bg-yellow-400/20 rounded-xl">
//                 <p className="text-xl font-semibold text-center">
//                   🔄 Translation: We're not just polluting nature — we're polluting ourselves.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className="mt-16 text-center">
//           <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl p-8 md:p-12 text-white">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               🌍 Every Action Counts
//             </h2>
//             <p className="text-xl mb-8 max-w-3xl mx-auto">
//               Understanding the problem is the first step. Next comes action — and that's where YOU come in!
//             </p>
//             <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl p-6">
//               <p className="text-lg italic">
//                 "The Earth does not belong to us; we belong to the Earth. All things are connected like the blood that unites one family."
//               </p>
//               <p className="text-sm mt-2 opacity-80">- Chief Seattle</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Module3;


import React, { useState } from "react";

const degradationTypes = [
  {
    id: 1,
    title: "Air Pollution",
    icon: "🌫️",
    color: "gray",
    cause: "Vehicle emissions, industrial smoke, burning garbage, construction dust",
    example: "Delhi's toxic smog in winter, often compared to smoking multiple cigarettes a day",
    harms: [
      "Causes asthma, bronchitis, and even cancer",
      "Damages crops and reduces visibility", 
      "Contributes to climate change (via greenhouse gases)"
    ],
    bgGradient: "from-gray-50 to-slate-100",
    borderColor: "border-gray-300",
    textColor: "text-gray-800",
    accentColor: "text-gray-600"
  },
  {
    id: 2,
    title: "Water Pollution",
    icon: "💧",
    color: "blue",
    cause: "Industrial waste dumped in rivers, sewage discharge, use of harmful chemicals in farming",
    example: "Yamuna River -- declared 'dead' in many stretches due to toxic foam and waste",
    harms: [
      "Aquatic animals die due to lack of oxygen",
      "Drinking water becomes unsafe",
      "Groundwater becomes unusable"
    ],
    bgGradient: "from-blue-50 to-cyan-100",
    borderColor: "border-blue-300",
    textColor: "text-blue-800",
    accentColor: "text-blue-600"
  },
  {
    id: 3,
    title: "Soil Degradation",
    icon: "🌱",
    color: "brown",
    cause: "Overuse of chemical fertilizers and pesticides, mining, and deforestation",
    example: "Punjab's over-farmed land now suffers from falling productivity",
    harms: [
      "Soil loses nutrients and becomes infertile",
      "Affects food security and farmer income",
      "Leads to desertification in extreme cases"
    ],
    bgGradient: "from-amber-50 to-orange-100",
    borderColor: "border-amber-300",
    textColor: "text-amber-800",
    accentColor: "text-amber-600"
  },
  {
    id: 4,
    title: "Deforestation",
    icon: "🌳",
    color: "green",
    cause: "Cutting forests for agriculture, mining, infrastructure",
    example: "Amazon Rainforest --- called 'Earth's lungs' --- is shrinking alarmingly",
    harms: [
      "Loss of biodiversity and tribal homes",
      "Less carbon absorption → more global warming",
      "Landslides and disrupted rainfall patterns"
    ],
    bgGradient: "from-green-50 to-emerald-100",
    borderColor: "border-green-300",
    textColor: "text-green-800",
    accentColor: "text-green-600"
  },
  {
    id: 5,
    title: "Waste Overload",
    icon: "🗑️",
    color: "red",
    cause: "Excessive use of plastic, lack of recycling, rise in e-waste from gadgets",
    example: "Urban landfills in cities like Mumbai and Ghazipur have turned into toxic mountains",
    harms: [
      "Toxic chemicals seep into soil and groundwater",
      "Air pollution from burning waste",
      "Marine life dies from plastic ingestion"
    ],
    bgGradient: "from-red-50 to-pink-100",
    borderColor: "border-red-300",
    textColor: "text-red-800",
    accentColor: "text-red-600"
  }
];

const consequences = [
  {
    icon: "🐯",
    title: "Wildlife Extinction",
    description: "Animals lose homes, food, and shelter — over 1 million species are at risk",
    color: "orange"
  },
  {
    icon: "🫁",
    title: "Human Health",
    description: "Polluted air and water cause respiratory illnesses, skin diseases, and more",
    color: "red"
  },
  {
    icon: "💧",
    title: "Floods and Droughts",
    description: "Deforestation and climate disruption lead to unpredictable rainfall",
    color: "blue"
  },
  {
    icon: "🔋",
    title: "Resource Scarcity",
    description: "Freshwater, fertile land, and clean air are all becoming scarce",
    color: "purple"
  }
];

const Module3 = ({ topicRefs }) => {
  const [activeDegradation, setActiveDegradation] = useState(null);
  const [showPlasticData, setShowPlasticData] = useState(false);

  return (
    <div
      id="3"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["3"] = el;
        }
      }}
      className="mb-12"
    >
      <div className="p-6 md:p-10 max-w-7xl mx-auto text-gray-800">
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 rounded-3xl p-8 md:p-12 mb-12 overflow-hidden">
          <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
          <div className="relative z-10 text-center text-white">
            <div className="text-6xl md:text-8xl mb-4 animate-bounce">🏭</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-red-200">
              Human Impact on the Environment
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed">
              Understanding how our activities affect the delicate balance of nature
            </p>
          </div>
          <div className="absolute top-4 right-4 text-4xl opacity-30 animate-pulse">⚠️</div>
          <div className="absolute bottom-4 left-4 text-3xl opacity-30 animate-spin">🌪️</div>
          <div className="absolute top-1/2 left-8 text-2xl opacity-20 animate-bounce">🏗️</div>
        </div>

        {/* Understanding Human Footprint */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border-l-4 border-purple-400 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6 flex items-center gap-3">
              <span className="text-4xl">🌐</span>
              Understanding the Human Footprint
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                  Humans depend on nature for survival — food, air, water, and shelter. But over time, 
                  our activities have started to disturb the balance of ecosystems.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  This damage is called <span className="font-bold text-purple-600">environmental degradation</span> — 
                  when nature's ability to function healthily is weakened.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-md border border-purple-100">
                <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center gap-2">
                  🏠 Earth as a House Analogy
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 font-bold text-xl">🔨</span>
                    <p>Breaking windows = Air pollution</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-yellow-500 font-bold text-xl">⚡</span>
                    <p>Overusing electricity = Resource depletion</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-brown-500 font-bold text-xl">🗑️</span>
                    <p>Dumping garbage = Waste pollution</p>
                  </div>
                  <div className="mt-4 p-3 bg-red-50 rounded-lg border-l-3 border-red-400">
                    <p className="text-red-700 font-medium">Result: House becomes unlivable!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Major Types of Environmental Degradation */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              🌫️ Major Types of Environmental Degradation
            </span>
          </h2>
          <p className="text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's explore how different human activities are harming specific aspects of the environment
          </p>

          <div className="space-y-6">
            {degradationTypes.map((type, index) => (
              <div
                key={type.id}
                className={`bg-gradient-to-br ${type.bgGradient} rounded-2xl border ${type.borderColor} shadow-lg 
                         hover:shadow-xl transition-all duration-300 overflow-hidden
                         ${activeDegradation === type.id ? 'ring-4 ring-offset-2 ring-opacity-50' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setActiveDegradation(activeDegradation === type.id ? null : type.id)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl animate-pulse">{type.icon}</div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold ${type.textColor} mb-2`}>
                        {type.title}
                      </h3>
                      <p className={`${type.accentColor} font-medium`}>
                        <strong>Cause:</strong> {type.cause}
                      </p>
                    </div>
                    <div className="text-2xl text-gray-400">
                      {activeDegradation === type.id ? '▼' : '▶'}
                    </div>
                  </div>

                  {activeDegradation === type.id && (
                    <div className="mt-6 space-y-4 animate-in slide-in-from-top duration-300">
                      <div className="bg-white/70 rounded-lg p-4 border border-white/50">
                        <h4 className={`font-semibold ${type.textColor} mb-2 flex items-center gap-2`}>
                          <span className="text-xl">🔍</span>
                          Example:
                        </h4>
                        <p className="text-gray-700 italic">{type.example}</p>
                      </div>
                      
                      <div className="bg-white/70 rounded-lg p-4 border border-white/50">
                        <h4 className={`font-semibold ${type.textColor} mb-3 flex items-center gap-2`}>
                          <span className="text-xl">🚫</span>
                          Harmful Effects:
                        </h4>
                        <div className="space-y-2">
                          {type.harms.map((harm, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span className="text-red-500 mt-1">•</span>
                              <p className="text-gray-700">{harm}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consequences Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              ⚠️ Consequences of Environmental Damage
            </span>
          </h2>
          <p className="text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            When we harm nature, the damage doesn't stay in one place — it spreads across systems
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consequences.map((consequence, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-${consequence.color}-50 to-${consequence.color}-100 
                         rounded-2xl p-6 border border-${consequence.color}-200 shadow-lg 
                         hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 text-center animate-bounce">{consequence.icon}</div>
                <h3 className={`text-lg font-bold text-${consequence.color}-700 mb-3 text-center`}>
                  {consequence.title}
                </h3>
                <p className="text-gray-700 text-center text-sm">
                  {consequence.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Plastic Crisis Data */}
        <div className="mb-12">
          <div 
            className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 text-white cursor-pointer shadow-2xl hover:shadow-3xl transition-all duration-300"
            onClick={() => setShowPlasticData(!showPlasticData)}
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
                  <span className="text-4xl">📊</span>
                  Data Insight: The Plastic Crisis in India
                </h2>
                <p className="text-xl opacity-90">Click to explore the shocking numbers</p>
              </div>
              <div className="text-3xl animate-pulse">
                {showPlasticData ? '▼' : '▶'}
              </div>
            </div>

            {showPlasticData && (
              <div className="mt-8 space-y-6 animate-in slide-in-from-top duration-500">
                <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-center mb-6">
                    <div className="text-6xl font-bold mb-2">3.5M</div>
                    <p className="text-xl">tonnes of plastic waste annually</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/20 rounded-lg p-4">
                      <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <span className="text-2xl">♻️</span>
                        Non-Recyclable Waste
                      </h4>
                      <div className="text-3xl font-bold">60%</div>
                      <p className="text-sm opacity-90">of plastic waste cannot be recycled</p>
                    </div>
                    
                    <div className="bg-white/20 rounded-lg p-4">
                      <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                        <span className="text-2xl">🩸</span>
                        In Our Bodies
                      </h4>
                      <p className="text-sm opacity-90">Microplastics found in human blood</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-white/10 rounded-lg p-3">
                    <span className="text-2xl">🌊</span>
                    <p>Plastic bags clog drains, causing urban floods</p>
                  </div>
                  <div className="flex items-start gap-3 bg-white/10 rounded-lg p-3">
                    <span className="text-2xl">🐟</span>
                    <p>Marine animals mistake plastic for food</p>
                  </div>
                  <div className="flex items-start gap-3 bg-white/10 rounded-lg p-3">
                    <span className="text-2xl">🔬</span>
                    <p>Microplastics contaminate our food chain</p>
                  </div>
                </div>

                <div className="bg-yellow-400/20 rounded-xl p-4 border border-yellow-300/30">
                  <p className="text-center text-lg font-semibold">
                    🚨 <em>Translation: We're not just polluting nature — we're polluting ourselves.</em>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white text-center shadow-2xl">
          <div className="text-5xl mb-4">🌍</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            The Time to Act is NOW
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
            Every action we take today shapes the world of tomorrow. Small changes in our daily habits 
            can create ripples of positive impact across the entire planet.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
            <span className="text-2xl">💪</span>
            <span className="font-semibold">Be Part of the Solution!</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Module3;