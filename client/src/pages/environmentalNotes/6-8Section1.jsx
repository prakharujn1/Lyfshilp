// import React, { useState, useEffect } from 'react';

// const Module1 = ({ topicRefs }) => {
//   const [visibleCards, setVisibleCards] = useState([]);
//   const [activeComponent, setActiveComponent] = useState(0);
//   const [activeSphere, setActiveSphere] = useState(0);

//   const environmentComponents = [
//     {
//       title: "Natural Environment",
//       icon: "🌿",
//       color: "from-green-400 to-emerald-500",
//       bgColor: "bg-green-50",
//       textColor: "text-green-700",
//       description: "Elements found in nature — created without human involvement",
//       examples: ["🌳 Trees and forests", "🏔️ Mountains and valleys", "🌊 Rivers and oceans", "🦋 Animals and insects"],
//       biotic: ["Animals", "Plants", "Fungi", "Bacteria", "Humans"],
//       abiotic: ["Water", "Air", "Temperature", "Sunlight", "Rocks", "Soil"]
//     },
//     {
//       title: "Human-Made Environment",
//       icon: "🏗️",
//       color: "from-blue-400 to-indigo-500",
//       bgColor: "bg-blue-50",
//       textColor: "text-blue-700",
//       description: "Things humans have constructed to meet their needs",
//       examples: ["🏠 Houses and buildings", "🌉 Bridges and roads", "🏭 Factories and dams", "📱 Technology and vehicles"]
//     },
//     {
//       title: "Social Environment",
//       icon: "👥",
//       color: "from-purple-400 to-pink-500",
//       bgColor: "bg-purple-50",
//       textColor: "text-purple-700",
//       description: "How people live together and the systems they create",
//       examples: ["👨‍👩‍👧‍👦 Family and communities", "🏫 Schools and institutions", "⚖️ Laws and governments", "🎭 Traditions and cultures"]
//     }
//   ];

//   const earthSpheres = [
//     {
//       name: "Lithosphere",
//       subtitle: "The solid outer layer (land)",
//       icon: "🏔️",
//       color: "from-amber-400 to-orange-500",
//       bgColor: "bg-amber-50",
//       description: "Composed of rocks, mountains, and soil. Supports agriculture, forests, and human settlements.",
//       includes: ["🏔️ Mountains", "🏜️ Deserts", "🌾 Plains", "⛰️ Plateaus"],
//       importance: "Provides minerals, metals, and the land we live and farm on."
//     },
//     {
//       name: "Hydrosphere",
//       subtitle: "All water bodies",
//       icon: "🌊",
//       color: "from-blue-400 to-cyan-500",
//       bgColor: "bg-blue-50",
//       description: "Oceans, rivers, lakes, glaciers, groundwater. Covers 71% of Earth's surface.",
//       includes: ["🌊 Oceans", "🏞️ Rivers", "🏔️ Glaciers", "💧 Groundwater"],
//       importance: "Supports marine life and is essential for drinking, farming, and industry."
//     },
//     {
//       name: "Atmosphere",
//       subtitle: "The blanket of gases",
//       icon: "🌬️",
//       color: "from-sky-400 to-blue-500",
//       bgColor: "bg-sky-50",
//       description: "Composed of oxygen, nitrogen, carbon dioxide, etc. Protects Earth from harmful solar rays.",
//       includes: ["💨 Oxygen", "🌫️ Nitrogen", "☁️ Carbon dioxide", "🌤️ Weather systems"],
//       importance: "Allows breathing, rainfall, and climate regulation."
//     },
//     {
//       name: "Biosphere",
//       subtitle: "The zone of life",
//       icon: "🌱",
//       color: "from-green-400 to-emerald-500",
//       bgColor: "bg-green-50",
//       description: "The narrow area where all spheres interact and support life.",
//       includes: ["🌲 Forests", "🌊 Marine ecosystems", "🏜️ Desert life", "🌾 Grasslands"],
//       importance: "The only known region in the universe that supports life as we know it."
//     }
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const id = entry.target.getAttribute('data-card');
//             setVisibleCards(prev => [...new Set([...prev, id])]);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll('[data-card]').forEach(card => {
//       observer.observe(card);
//     });

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveComponent((prev) => (prev + 1) % environmentComponents.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveSphere((prev) => (prev + 1) % earthSpheres.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div
//       id="environment-module-1"
//       ref={(el) => {
//         if (topicRefs?.current) {
//           topicRefs.current["environment-module-1"] = el;
//         }
//       }}
//       className="mb-10"
//     >
//       {/* Hero Section */}
//       <div className="relative overflow-hidden bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white">
//         <div className="absolute inset-0 bg-black opacity-20"></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 animate-pulse"></div>
//         <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
//           <div className="text-center">
//             <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full mb-8 animate-bounce">
//               <span className="text-5xl">🌍</span>
//             </div>
//             <div className="inline-block bg-white bg-opacity-20 px-6 py-2 rounded-full text-sm font-semibold mb-4">
//               📚 Module 1
//             </div>
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
//               Environment & Its Components
//             </h1>
//             <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
//               Discover the amazing web of life around us — from towering mountains to tiny bacteria! 🕸️✨
//             </p>
//           </div>
//         </div>
//         <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 py-16">
//         {/* What is Environment Section */}
//         <div 
//           data-card="environment-intro"
//           className={`mb-20 transform transition-all duration-1000 ${visibleCards.includes('environment-intro') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
//         >
//           <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-green-100 overflow-hidden relative">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-full transform translate-x-16 -translate-y-16"></div>
            
//             <div className="flex items-center mb-10">
//               <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mr-6 shadow-lg">
//                 <span className="text-4xl">🌎</span>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
//                 What is the Environment?
//               </h2>
//             </div>
            
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <div className="space-y-6">
//                 <p className="text-lg text-gray-700 leading-relaxed">
//                   The <span className="font-bold text-green-600 bg-green-100 px-2 py-1 rounded">environment</span> is the combination of all things — 
//                   <strong className="text-blue-600"> living</strong> and <strong className="text-purple-600">non-living</strong> — that exist around us and interact with each other.
//                 </p>
                
//                 <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border-l-4 border-green-400">
//                   <h3 className="text-xl font-bold text-gray-800 mb-4">🏠 It provides life's essentials:</h3>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="flex items-center gap-3">
//                       <span className="text-2xl">💨</span>
//                       <span className="text-gray-700">Air to breathe</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <span className="text-2xl">💧</span>
//                       <span className="text-gray-700">Water to drink</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <span className="text-2xl">🍎</span>
//                       <span className="text-gray-700">Food to eat</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <span className="text-2xl">🏠</span>
//                       <span className="text-gray-700">Shelter to live</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 border border-purple-200">
//                   <div className="flex items-start gap-4">
//                     <span className="text-3xl">🕸️</span>
//                     <div>
//                       <h4 className="font-bold text-purple-800 mb-2">Think of it like a giant web</h4>
//                       <p className="text-purple-700 italic">"Each thread is important. Break one, and the whole web trembles."</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="relative">
//                 <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8 relative overflow-hidden">
//                   <div className="absolute inset-0 bg-gradient-to-br from-green-200/50 to-blue-200/50 animate-pulse"></div>
//                   <div className="relative text-center space-y-6">
//                     <h3 className="text-2xl font-bold text-gray-800 mb-6">Environment includes:</h3>
//                     <div className="space-y-4">
//                       <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
//                         <span className="text-2xl mb-2 block">🌿</span>
//                         <h4 className="font-semibold text-green-700">Natural elements</h4>
//                         <p className="text-sm text-gray-600">Trees, rivers, mountains, animals</p>
//                       </div>
//                       <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
//                         <span className="text-2xl mb-2 block">🏗️</span>
//                         <h4 className="font-semibold text-blue-700">Human-made structures</h4>
//                         <p className="text-sm text-gray-600">Buildings, roads, vehicles</p>
//                       </div>
//                       <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
//                         <span className="text-2xl mb-2 block">👥</span>
//                         <h4 className="font-semibold text-purple-700">Social systems</h4>
//                         <p className="text-sm text-gray-600">Communities, schools, cultures</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Components of Environment */}
//         <div 
//           data-card="components"
//           className={`mb-20 transform transition-all duration-1000 delay-200 ${visibleCards.includes('components') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
//         >
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//               🔍 Components of the Environment
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               We can divide the environment into <strong className="text-indigo-600">three broad categories</strong>, based on origin and influence
//             </p>
//           </div>

//           {/* Interactive Component Selector */}
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             {environmentComponents.map((component, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveComponent(index)}
//                 className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
//                   activeComponent === index
//                     ? `bg-gradient-to-r ${component.color} text-white shadow-lg scale-105`
//                     : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                 }`}
//               >
//                 {component.icon} {component.title}
//               </button>
//             ))}
//           </div>

//           {/* Active Component Display */}
//           <div className={`${environmentComponents[activeComponent].bgColor} rounded-3xl p-8 md:p-12 transition-all duration-500 border border-opacity-20`}>
//             <div className="grid lg:grid-cols-2 gap-12 items-center">
//               <div>
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className={`w-16 h-16 bg-gradient-to-r ${environmentComponents[activeComponent].color} rounded-2xl flex items-center justify-center`}>
//                     <span className="text-3xl">{environmentComponents[activeComponent].icon}</span>
//                   </div>
//                   <h3 className={`text-3xl font-bold ${environmentComponents[activeComponent].textColor}`}>
//                     {environmentComponents[activeComponent].title}
//                   </h3>
//                 </div>
                
//                 <p className="text-lg text-gray-700 mb-8 leading-relaxed">
//                   {environmentComponents[activeComponent].description}
//                 </p>

//                 <div className="space-y-3">
//                   {environmentComponents[activeComponent].examples.map((example, idx) => (
//                     <div key={idx} className="flex items-center gap-3 text-gray-700">
//                       <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
//                       <span>{example}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="space-y-6">
//                 {activeComponent === 0 && (
//                   <div className="space-y-6">
//                     <div className="bg-white rounded-2xl p-6 shadow-lg">
//                       <h4 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
//                         <span className="text-2xl">🌱</span>
//                         Biotic Components (Living)
//                       </h4>
//                       <div className="flex flex-wrap gap-2">
//                         {environmentComponents[0].biotic.map((item, idx) => (
//                           <span key={idx} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
//                             {item}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
                    
//                     <div className="bg-white rounded-2xl p-6 shadow-lg">
//                       <h4 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
//                         <span className="text-2xl">🪨</span>
//                         Abiotic Components (Non-living)
//                       </h4>
//                       <div className="flex flex-wrap gap-2">
//                         {environmentComponents[0].abiotic.map((item, idx) => (
//                           <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
//                             {item}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-6 border border-green-200">
//                       <div className="flex items-start gap-3">
//                         <span className="text-2xl">🧪</span>
//                         <div>
//                           <h5 className="font-bold text-gray-800 mb-2">Example in Action:</h5>
//                           <p className="text-gray-700 italic">
//                             A forest contains trees (biotic), soil and water (abiotic), and both interact to form an ecosystem.
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {activeComponent === 1 && (
//                   <div className="bg-white rounded-2xl p-6 shadow-lg">
//                     <div className="text-center">
//                       <span className="text-6xl mb-4 block animate-pulse">🏙️</span>
//                       <h4 className="text-xl font-bold text-blue-700 mb-4">Impact on Nature</h4>
//                       <p className="text-gray-700">
//                         These elements <strong className="text-red-600">alter</strong> the natural environment and sometimes 
//                         disturb its balance — for example, buildings replacing green areas.
//                       </p>
//                     </div>
//                   </div>
//                 )}

//                 {activeComponent === 2 && (
//                   <div className="bg-white rounded-2xl p-6 shadow-lg">
//                     <div className="text-center">
//                       <span className="text-6xl mb-4 block animate-pulse">🤝</span>
//                       <h4 className="text-xl font-bold text-purple-700 mb-4">Why it matters</h4>
//                       <p className="text-gray-700">
//                         A peaceful, supportive social environment promotes better mental health, 
//                         cooperation, and sustainable living.
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Earth's Four Spheres */}
//         <div 
//           data-card="spheres"
//           className={`mb-20 transform transition-all duration-1000 delay-400 ${visibleCards.includes('spheres') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
//         >
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//               🌳 Earth's Four Main Spheres
//             </h2>
//             <p className="text-xl text-gray-600 max-w-4xl mx-auto">
//               Each part of the natural world plays a specific role in supporting life. 
//               These are the <strong className="text-blue-600">four main spheres</strong> of Earth's environment.
//             </p>
//           </div>

//           {/* Sphere Navigation */}
//           <div className="flex flex-wrap justify-center gap-3 mb-12">
//             {earthSpheres.map((sphere, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveSphere(index)}
//                 className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
//                   activeSphere === index
//                     ? `bg-gradient-to-r ${sphere.color} text-white shadow-lg scale-105`
//                     : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                 }`}
//               >
//                 {sphere.icon} {sphere.name}
//               </button>
//             ))}
//           </div>

//           {/* Active Sphere Display */}
//           <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
//             <div className={`bg-gradient-to-r ${earthSpheres[activeSphere].color} p-8 text-white text-center`}>
//               <span className="text-6xl mb-4 block animate-bounce">{earthSpheres[activeSphere].icon}</span>
//               <h3 className="text-3xl md:text-4xl font-bold mb-2">{earthSpheres[activeSphere].name}</h3>
//               <p className="text-xl opacity-90">{earthSpheres[activeSphere].subtitle}</p>
//             </div>
            
//             <div className="p-8 md:p-12">
//               <div className="grid lg:grid-cols-2 gap-12">
//                 <div className="space-y-6">
//                   <p className="text-lg text-gray-700 leading-relaxed">
//                     {earthSpheres[activeSphere].description}
//                   </p>
                  
//                   <div className={`${earthSpheres[activeSphere].bgColor} rounded-2xl p-6 border border-opacity-20`}>
//                     <h4 className="text-xl font-bold text-gray-800 mb-4">🔍 Includes:</h4>
//                     <div className="grid grid-cols-2 gap-3">
//                       {earthSpheres[activeSphere].includes.map((item, idx) => (
//                         <div key={idx} className="flex items-center gap-2">
//                           <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
//                           <span className="text-gray-700">{item}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-l-4 border-yellow-400">
//                   <div className="flex items-start gap-4">
//                     <span className="text-3xl">💡</span>
//                     <div>
//                       <h4 className="text-xl font-bold text-yellow-800 mb-3">Why it matters:</h4>
//                       <p className="text-gray-700 leading-relaxed">
//                         {earthSpheres[activeSphere].importance}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Interconnection Warning */}
//         <div 
//           data-card="warning"
//           className={`transform transition-all duration-1000 delay-600 ${visibleCards.includes('warning') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
//         >
//           <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 border-l-4 border-red-400">
//             <div className="flex items-start gap-6">
//               <div className="bg-red-100 rounded-full p-4 flex-shrink-0">
//                 <span className="text-4xl">⚠️</span>
//               </div>
//               <div>
//                 <h3 className="text-3xl font-bold text-red-800 mb-4">🌐 Everything is Connected!</h3>
//                 <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//                   When one component is damaged, others suffer too. This interconnection makes our environment both beautiful and fragile.
//                 </p>
                
//                 <div className="bg-white rounded-2xl p-6 shadow-md">
//                   <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
//                     <span className="text-2xl">🌲➡️🌍</span>
//                     Chain Reaction Example:
//                   </h4>
//                   <div className="space-y-3 text-gray-700">
//                     <div className="flex items-center gap-3">
//                       <span className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center text-red-600 font-bold text-sm">1</span>
//                       <span>Cutting forests (lithosphere)</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <span className="w-6 h-6 bg-red-300 rounded-full flex items-center justify-center text-red-700 font-bold text-sm">2</span>
//                       <span>Affects air quality (atmosphere)</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <span className="w-6 h-6 bg-red-400 rounded-full flex items-center justify-center text-red-800 font-bold text-sm">3</span>
//                       <span>Leads to floods (hydrosphere)</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</span>
//                       <span>Harms animals (biosphere)</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Module1;


import React, { useState, useEffect } from "react";

const environmentTypes = [
  {
    id: 1,
    title: "Natural Environment",
    icon: "🌿",
    color: "emerald",
    bgGradient: "from-emerald-50 to-green-100",
    borderColor: "border-emerald-300",
    textColor: "text-emerald-800",
    description: "Elements found in nature — created without human involvement",
    components: {
      biotic: ["Animals", "Plants", "Fungi", "Bacteria", "Humans"],
      abiotic: ["Water", "Air", "Temperature", "Sunlight", "Rocks", "Soil"]
    },
    example: "A forest contains trees (biotic), soil and water (abiotic), and both interact to form an ecosystem."
  },
  {
    id: 2,
    title: "Human-Made Environment",
    icon: "🏗️",
    color: "blue",
    bgGradient: "from-blue-50 to-cyan-100",
    borderColor: "border-blue-300",
    textColor: "text-blue-800",
    description: "Things that humans have constructed to meet their needs",
    examples: [
      "Houses, bridges, roads",
      "Factories, dams, railways", 
      "Technology: Mobiles, satellites, vehicles"
    ],
    impact: "These elements alter the natural environment and sometimes disturb its balance — for example, buildings replacing green areas."
  },
  {
    id: 3,
    title: "Social Environment",
    icon: "🤝",
    color: "purple",
    bgGradient: "from-purple-50 to-pink-100",
    borderColor: "border-purple-300",
    textColor: "text-purple-800",
    description: "How people live together and the systems they create to manage society",
    includes: [
      "Family, schools, communities",
      "Traditions, cultures, values",
      "Laws, institutions, governments"
    ],
    importance: "A peaceful, supportive social environment promotes better mental health, cooperation, and sustainable living."
  }
];

const spheres = [
  {
    id: 1,
    name: "Lithosphere",
    subtitle: "The solid outer layer (land)",
    icon: "🏔️",
    color: "amber",
    bgGradient: "from-amber-50 to-orange-100",
    borderColor: "border-amber-400",
    textColor: "text-amber-800",
    description: "Composed of rocks, mountains, and soil. Supports agriculture, forests, human settlements.",
    includes: "Deserts, plains, plateaus, and mountains",
    importance: "Provides minerals, metals, and the land we live and farm on",
    coverage: "29% of Earth's surface"
  },
  {
    id: 2,
    name: "Hydrosphere",
    subtitle: "All water bodies",
    icon: "🌊",
    color: "blue",
    bgGradient: "from-blue-50 to-cyan-100",
    borderColor: "border-blue-400",
    textColor: "text-blue-800",
    description: "Oceans, rivers, lakes, glaciers, groundwater.",
    includes: "All forms of water on Earth",
    importance: "Supports marine life and is essential for drinking, farming, and industry",
    coverage: "71% of Earth's surface"
  },
  {
    id: 3,
    name: "Atmosphere",
    subtitle: "The blanket of gases",
    icon: "🌬️",
    color: "indigo",
    bgGradient: "from-indigo-50 to-blue-100",
    borderColor: "border-indigo-400",
    textColor: "text-indigo-800",
    description: "Composed of oxygen, nitrogen, carbon dioxide, etc. Protects Earth from harmful solar rays.",
    includes: "Multiple layers of gases surrounding Earth",
    importance: "Allows breathing, rainfall, and climate regulation",
    coverage: "Extends ~10,000 km above Earth"
  },
  {
    id: 4,
    name: "Biosphere",
    subtitle: "The \"zone of life\"",
    icon: "🌱",
    color: "green",
    bgGradient: "from-green-50 to-emerald-100",
    borderColor: "border-green-400",
    textColor: "text-green-800",
    description: "The narrow area where lithosphere, atmosphere, and hydrosphere interact and support life.",
    includes: "All ecosystems — forests, oceans, deserts, grasslands",
    importance: "The only known region in the universe that supports life as we know it",
    coverage: "Thin layer where all life exists"
  }
];

const Module1 = ({ topicRefs }) => {
  const [activeEnvironment, setActiveEnvironment] = useState(null);
  const [activeSphere, setActiveSphere] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      id="1"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["1"] = el;
        }
      }}
      className="mb-12"
    >
      <div className="p-6 md:p-10 max-w-7xl mx-auto text-gray-800">
        
        {/* Hero Section */}
        <div className={`relative bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 mb-12 overflow-hidden transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-8 right-8 text-4xl opacity-30 animate-bounce">🌍</div>
          <div className="absolute bottom-8 left-8 text-3xl opacity-30 animate-pulse">🌿</div>
          <div className="absolute top-16 left-16 text-2xl opacity-20 animate-spin">🌟</div>
          <div className="absolute bottom-16 right-16 text-3xl opacity-25 animate-pulse">🏔️</div>
          
          <div className="relative z-10 text-center text-white">
            <div className="text-6xl md:text-8xl mb-4 animate-bounce">🧭</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-green-200">
              Environment & Its Components
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-4xl mx-auto leading-relaxed">
              Discover the fascinating world around us and how every element connects in nature's grand design
            </p>
          </div>
        </div>

        {/* What is Environment */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 border-l-4 border-cyan-400 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-800 mb-6 flex items-center gap-3">
              <span className="text-4xl">📌</span>
              What is the Environment?
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                  The <strong className="text-cyan-700">environment</strong> is the combination of all things—
                  <span className="font-semibold text-green-600">living</span> and 
                  <span className="font-semibold text-blue-600"> non-living</span>—that exist around us and interact with each other.
                </p>
                
                <div className="bg-white rounded-xl p-6 shadow-md border border-cyan-100 mb-6">
                  <h3 className="text-xl font-semibold text-cyan-700 mb-4">👉 It includes:</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <div className="text-2xl mb-2">🌳</div>
                      <h4 className="font-semibold text-green-700 mb-1">Natural elements</h4>
                      <p className="text-sm text-green-600">Trees, rivers, mountains, animals</p>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="text-2xl mb-2">🏗️</div>
                      <h4 className="font-semibold text-blue-700 mb-1">Human-made structures</h4>
                      <p className="text-sm text-blue-600">Buildings, roads, vehicles</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <div className="text-2xl mb-2">🏫</div>
                      <h4 className="font-semibold text-purple-700 mb-1">Social systems</h4>
                      <p className="text-sm text-purple-600">Communities, schools, cultures</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200 shadow-md">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🕸️</div>
                  <h3 className="text-lg font-bold text-orange-700">Nature's Web</h3>
                </div>
                <blockquote className="text-center italic text-gray-700 border-l-4 border-orange-300 pl-4">
                  "Think of the environment as a giant web — each thread is important. Break one, and the whole web trembles."
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Environment Types */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              🔍 Components of the Environment
            </span>
          </h2>
          <p className="text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            We can divide the environment into <strong>three broad categories</strong>, based on origin and influence
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            {environmentTypes.map((env, index) => (
              <div
                key={env.id}
                className={`bg-gradient-to-br ${env.bgGradient} rounded-2xl p-6 border ${env.borderColor} 
                         shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2
                         ${activeEnvironment === env.id ? 'ring-4 ring-offset-2 ring-opacity-50 scale-105' : ''}`}
                onClick={() => setActiveEnvironment(activeEnvironment === env.id ? null : env.id)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3 animate-pulse">{env.icon}</div>
                  <h3 className={`text-xl font-bold ${env.textColor} mb-2`}>
                    {env.title}
                  </h3>
                </div>
                
                <p className="text-gray-700 mb-4 text-center text-sm">
                  {env.description}
                </p>

                {activeEnvironment === env.id && (
                  <div className="mt-4 space-y-3 animate-in slide-in-from-top duration-300">
                    {env.components && (
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/70 rounded-lg p-3">
                          <h4 className="font-semibold text-green-700 text-sm mb-2">🌱 Biotic (Living)</h4>
                          <ul className="text-xs space-y-1">
                            {env.components.biotic.map((item, idx) => (
                              <li key={idx} className="flex items-center gap-1">
                                <span className="text-green-500">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <h4 className="font-semibold text-blue-700 text-sm mb-2">🪨 Abiotic (Non-living)</h4>
                          <ul className="text-xs space-y-1">
                            {env.components.abiotic.map((item, idx) => (
                              <li key={idx} className="flex items-center gap-1">
                                <span className="text-blue-500">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    
                    {env.examples && (
                      <div className="bg-white/70 rounded-lg p-3">
                        <h4 className="font-semibold text-gray-700 text-sm mb-2">🧱 Examples:</h4>
                        {env.examples.map((example, idx) => (
                          <p key={idx} className="text-xs text-gray-600 mb-1">• {example}</p>
                        ))}
                      </div>
                    )}
                    
                    {env.includes && (
                      <div className="bg-white/70 rounded-lg p-3">
                        <h4 className="font-semibold text-gray-700 text-sm mb-2">🤝 Includes:</h4>
                        {env.includes.map((item, idx) => (
                          <p key={idx} className="text-xs text-gray-600 mb-1">• {item}</p>
                        ))}
                      </div>
                    )}

                    {env.example && (
                      <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-3">
                        <h4 className="font-semibold text-gray-700 text-sm mb-1">🧪 Example:</h4>
                        <p className="text-xs text-gray-700">{env.example}</p>
                      </div>
                    )}

                    {env.impact && (
                      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-3">
                        <h4 className="font-semibold text-orange-700 text-sm mb-1">⚠️ Impact:</h4>
                        <p className="text-xs text-gray-700">{env.impact}</p>
                      </div>
                    )}

                    {env.importance && (
                      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-3">
                        <h4 className="font-semibold text-purple-700 text-sm mb-1">👥 Why it matters:</h4>
                        <p className="text-xs text-gray-700">{env.importance}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Earth's Spheres */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              🌳 Subdivisions of the Natural Environment
            </span>
          </h2>
          <p className="text-center text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
            Each part of the natural world plays a specific role in supporting life. 
            These are the <strong>four main spheres</strong> of Earth's environment
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {spheres.map((sphere, index) => (
              <div
                key={sphere.id}
                className={`bg-gradient-to-br ${sphere.bgGradient} rounded-2xl p-6 border-2 ${sphere.borderColor} 
                         shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group
                         ${activeSphere === sphere.id ? 'ring-4 ring-offset-2 ring-opacity-50 scale-105' : ''}`}
                onClick={() => setActiveSphere(activeSphere === sphere.id ? null : sphere.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {sphere.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold ${sphere.textColor} mb-1`}>
                      {sphere.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-600">{sphere.subtitle}</p>
                  </div>
                  <div className="bg-white/80 rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-gray-700">{sphere.coverage}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {sphere.description}
                </p>

                {activeSphere === sphere.id && (
                  <div className="mt-4 space-y-3 animate-in slide-in-from-top duration-300">
                    <div className="bg-white/70 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        📍 Includes: 
                      </h4>
                      <p className="text-sm text-gray-700">{sphere.includes}</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-white/70 to-white/50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                        🔎 Why it matters:
                      </h4>
                      <p className="text-sm text-gray-700">{sphere.importance}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Interconnection Message */}
          <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border-l-4 border-red-400 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="text-4xl">⚠️</div>
              <div>
                <h3 className="text-xl font-bold text-red-700 mb-2">Everything is Connected!</h3>
                <p className="text-gray-700 leading-relaxed">
                  When one component is damaged, others suffer too. For example: cutting forests (lithosphere) 
                  affects air quality (atmosphere), leads to floods (hydrosphere), and harms animals (biosphere).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Summary */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white text-center shadow-2xl">
          <div className="text-5xl mb-4 animate-bounce">🌟</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            The Environment: Our Shared Home
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto leading-relaxed">
            Understanding our environment is the first step toward <strong>protecting</strong> and <strong>preserving</strong> it. 
            Every element—from the tiniest bacteria to the mightiest mountain—plays a crucial role in the web of life.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-3xl mb-2">🌍</div>
              <p className="font-semibold">One Planet</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-3xl mb-2">🤝</div>
              <p className="font-semibold">Shared Responsibility</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-3xl mb-2">🌱</div>
              <p className="font-semibold">Bright Future</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Module1;