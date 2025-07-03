import React, { useState, useEffect } from 'react';
import { Search, Target, Zap, Brain, TreePine, Route, Cpu, ChevronRight, Play, Pause, RotateCcw, Trophy, Lightbulb, MapPin, GitBranch, TrendingUp, Shuffle, Users, Gamepad2, Bot, Network, BookOpen, CheckCircle, AlertTriangle, Info, Clock } from 'lucide-react';

const Module7AIAlgorithms = ({ topicRefs }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [currentAlgorithm, setCurrentAlgorithm] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedComparison, setSelectedComparison] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards(Array.from({length: 20}, (_, i) => i));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentAlgorithm((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const searchAlgorithms = [
    {
      name: "Breadth-First Search (BFS)",
      description: "Explores all possibilities level by level",
      icon: <TreePine className="w-8 h-8" />,
      color: "from-green-400 to-emerald-500",
      example: "Finding shortest path in social networks",
      pros: ["Guarantees shortest path", "Complete solution"],
      cons: ["Uses lots of memory", "Can be slow"]
    },
    {
      name: "Depth-First Search (DFS)",
      description: "Goes deep into one path before backtracking",
      icon: <GitBranch className="w-8 h-8" />,
      color: "from-emerald-500 to-green-600",
      example: "Website crawling and maze solving",
      pros: ["Uses less memory", "Good for deep solutions"],
      cons: ["May not find shortest path", "Can get stuck"]
    },
    {
      name: "A* Algorithm",
      description: "Smart search using past cost + future estimate",
      icon: <Route className="w-8 h-8" />,
      color: "from-green-500 to-teal-600",
      example: "GPS navigation and game pathfinding",
      pros: ["Finds optimal solution", "Very efficient"],
      cons: ["Needs good heuristic", "Uses more memory"]
    },
    {
      name: "AO* Algorithm",
      description: "Breaks problems into smaller sub-problems",
      icon: <Target className="w-8 h-8" />,
      color: "from-teal-500 to-green-700",
      example: "Project management and medical diagnosis",
      pros: ["Handles complex problems", "Natural for sub-goals"],
      cons: ["Complex to implement", "May not be optimal"]
    }
  ];

  const optimizationAlgorithms = [
    {
      name: "Hill Climbing",
      description: "Improves solution by making small changes",
      icon: <TrendingUp className="w-6 h-6" />,
      example: "Tuning radio frequency for best signal",
      steps: ["Start with random solution", "Make small changes", "Keep better results", "Repeat until no improvement"]
    },
    {
      name: "Simulated Annealing",
      description: "Like hill climbing but sometimes accepts worse solutions",
      icon: <Zap className="w-6 h-6" />,
      example: "Factory layout optimization",
      steps: ["Start with high temperature", "Gradually cool down", "Accept some worse solutions", "Converge to good solution"]
    },
    {
      name: "Genetic Algorithm",
      description: "Mimics natural evolution to find optimal solutions",
      icon: <Users className="w-6 h-6" />,
      example: "Car design and drug discovery",
      steps: ["Create population", "Evaluate fitness", "Select best parents", "Create offspring with mutations"]
    }
  ];

  const applicationTable = [
    { problem: "Shortest Path", algorithm: "A*", example: "GPS Navigation", color: "bg-green-100 text-green-800" },
    { problem: "Game Playing", algorithm: "Minimax + Alpha-Beta", example: "Chess, Checkers", color: "bg-emerald-100 text-emerald-800" },
    { problem: "Optimization", algorithm: "Genetic Algorithm", example: "Design Problems", color: "bg-teal-100 text-teal-800" },
    { problem: "Pattern Recognition", algorithm: "Neural Networks", example: "Image Recognition", color: "bg-green-200 text-green-900" },
    { problem: "Decision Making", algorithm: "Decision Trees", example: "Medical Diagnosis", color: "bg-emerald-200 text-emerald-900" },
    { problem: "Local Optimization", algorithm: "Hill Climbing", example: "Parameter Tuning", color: "bg-teal-200 text-teal-900" }
  ];

  return (
    <div
      id="s-7"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["s-7"] = el;
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
                <Brain className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              AI Algorithms
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Master the fundamental algorithms that power artificial intelligence - from search techniques to optimization methods
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Search className="w-6 h-6" />, text: "Search Algorithms (BFS, DFS, A*)", color: "bg-green-100 text-green-600" },
              { icon: <TrendingUp className="w-6 h-6" />, text: "Optimization Techniques", color: "bg-emerald-100 text-emerald-600" },
              { icon: <Gamepad2 className="w-6 h-6" />, text: "Game-Playing Algorithms", color: "bg-teal-100 text-teal-600" },
              { icon: <Network className="w-6 h-6" />, text: "Machine Learning Basics", color: "bg-green-200 text-green-700" }
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
                  <p className="font-semibold text-sm">{objective.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="flex items-start space-x-6">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 flex-shrink-0">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Think of AI Algorithms as Problem-Solving Strategies
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Just like you might use different strategies to solve a puzzle, AI systems use different algorithms to tackle various problems. Each algorithm has its strengths and is suited for specific types of challenges.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <Search className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="font-semibold text-gray-800">Find Solutions</p>
                  </div>
                  <div className="text-center">
                    <Target className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <p className="font-semibold text-gray-800">Make Predictions</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                    <p className="font-semibold text-gray-800">Optimize Outcomes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Algorithms Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              🔍 Search Algorithms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These algorithms help AI systems find the best path or solution from many possible options
            </p>
          </div>

          {/* Interactive Algorithm Showcase */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-800">Interactive Algorithm Explorer</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>
                <button
                  onClick={() => setCurrentAlgorithm(0)}
                  className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-200 transition-all duration-300"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className={`bg-gradient-to-r ${searchAlgorithms[currentAlgorithm].color} text-white rounded-2xl p-8 transform hover:scale-105 transition-all duration-500`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 rounded-full p-3">
                      {searchAlgorithms[currentAlgorithm].icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold">{searchAlgorithms[currentAlgorithm].name}</h4>
                      <p className="text-lg opacity-90">{searchAlgorithms[currentAlgorithm].description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{currentAlgorithm + 1}/4</div>
                  </div>
                </div>

                <div className="bg-white/20 rounded-xl p-6 mb-6">
                  <p className="text-lg">
                    <strong>Real-world Example:</strong> {searchAlgorithms[currentAlgorithm].example}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/20 rounded-xl p-4">
                    <h5 className="font-bold mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Advantages
                    </h5>
                    <ul className="space-y-1">
                      {searchAlgorithms[currentAlgorithm].pros.map((pro, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4">
                    <h5 className="font-bold mb-3 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Disadvantages
                    </h5>
                    <ul className="space-y-1">
                      {searchAlgorithms[currentAlgorithm].cons.map((con, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Algorithm Selection Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {searchAlgorithms.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAlgorithm(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentAlgorithm === index ? 'bg-green-500 scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* A* Algorithm Deep Dive */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                    <Route className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    A* Algorithm: The Smart Navigator
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A* (A-Star) is like having a smart GPS that considers both <strong className="text-green-600">where you've been</strong> and <strong className="text-emerald-600">where you're going</strong> to find the optimal path.
                  </p>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">The Magic Formula</h4>
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-gray-800 mb-2">
                        f(n) = g(n) + h(n)
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="font-bold text-green-600">g(n)</div>
                          <div>Cost from start</div>
                        </div>
                        <div>
                          <div className="font-bold text-emerald-600">h(n)</div>
                          <div>Estimated cost to goal</div>
                        </div>
                        <div>
                          <div className="font-bold text-teal-600">f(n)</div>
                          <div>Total estimated cost</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">Real-World Applications</h4>
                <div className="space-y-4">
                  {[
                    { icon: <MapPin className="w-6 h-6" />, title: "GPS Navigation", desc: "Google Maps finding fastest routes", color: "text-green-600" },
                    { icon: <Gamepad2 className="w-6 h-6" />, title: "Video Games", desc: "NPCs navigating around obstacles", color: "text-emerald-600" },
                    { icon: <Bot className="w-6 h-6" />, title: "Robotics", desc: "Autonomous robots in warehouses", color: "text-teal-600" }
                  ].map((app, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                      <div className={`${app.color} mt-1`}>
                        {app.icon}
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800">{app.title}</h5>
                        <p className="text-gray-600 text-sm">{app.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optimization Algorithms */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              ⚡ Optimization Algorithms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These algorithms help find the best solution among many possibilities - like finding the perfect recipe!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {optimizationAlgorithms.map((algorithm, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-300 ${
                  visibleCards.includes(index + 10) ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 10) * 200}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    {algorithm.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{algorithm.name}</h3>
                  <p className="text-gray-600">{algorithm.description}</p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 mb-6">
                  <h4 className="font-semibold text-green-700 mb-2">Example:</h4>
                  <p className="text-sm text-gray-700">{algorithm.example}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">How it works:</h4>
                  <div className="space-y-2">
                    {algorithm.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start space-x-3">
                        <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {stepIndex + 1}
                        </div>
                        <p className="text-sm text-gray-700">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Genetic Algorithm Deep Dive */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">🧬</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Genetic Algorithm: Evolution in Action
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Just like nature evolves better species over time, genetic algorithms evolve better solutions!
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: "Population", icon: <Users className="w-6 h-6" />, desc: "Group of random solutions", color: "bg-green-100 text-green-600" },
                { step: "Fitness", icon: <Trophy className="w-6 h-6" />, desc: "Evaluate how good each solution is", color: "bg-emerald-100 text-emerald-600" },
                { step: "Selection", icon: <Target className="w-6 h-6" />, desc: "Choose the best solutions as parents", color: "bg-teal-100 text-teal-600" },
                { step: "Crossover", icon: <Shuffle className="w-6 h-6" />, desc: "Combine parents to create offspring", color: "bg-green-200 text-green-700" },
                { step: "Mutation", icon: <Zap className="w-6 h-6" />, desc: "Add random changes for variety", color: "bg-emerald-200 text-emerald-700" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`${item.color} rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{item.step}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                  {index < 4 && (
                    <ChevronRight className="w-6 h-6 text-gray-400 mx-auto mt-4 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Game-Playing Algorithms */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              🎮 Game-Playing Algorithms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Special algorithms designed for strategic thinking in competitive scenarios
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Minimax Algorithm</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Used for two-player games where one player tries to maximize their score while the other minimizes it.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-green-700 mb-3">How it thinks:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center"><div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>Look ahead several moves</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>Assume opponent plays optimally</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>Choose move with best worst-case outcome</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-gray-800">Examples:</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">♟️</div>
                    <p className="text-sm font-medium">Chess Programs</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">⚫</div>
                    <p className="text-sm font-medium">Checkers AI</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full p-3">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Alpha-Beta Pruning</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                An improvement to minimax that eliminates branches that won't affect the final decision - making it much faster!
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-emerald-700 mb-3">Smart optimization:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>Uses alpha (best for maximizer) and beta (best for minimizer)</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>Cuts off branches that can't improve current best</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>Significantly reduces search time</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-700 mb-2">🚀</div>
                  <p className="text-sm text-gray-700">
                    <strong>Result:</strong> Modern chess engines can search much deeper using alpha-beta pruning!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Machine Learning Algorithms */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              🧠 Machine Learning Algorithms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Algorithms that help computers learn and improve from experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                  <TreePine className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Decision Trees</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Make decisions by asking a series of yes/no questions, just like a flowchart!
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-green-700 mb-3">Medical Example:</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center">
                    <Info className="w-4 h-4 text-green-600 mr-2" />
                    <span>Do you have fever? → <strong>Yes</strong></span>
                  </div>
                  <div className="flex items-center ml-6">
                    <Info className="w-4 h-4 text-emerald-600 mr-2" />
                    <span>Do you have cough? → <strong>Yes</strong></span>
                  </div>
                  <div className="flex items-center ml-12">
                    <CheckCircle className="w-4 h-4 text-teal-600 mr-2" />
                    <span><strong>Diagnosis: Possible flu</strong></span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-gray-800">Other Applications:</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">🏦</div>
                    <p className="text-sm font-medium">Loan Approval</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">📧</div>
                    <p className="text-sm font-medium">Spam Detection</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full p-3">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Neural Networks</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Mimic how the human brain processes information through layers of artificial neurons.
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-emerald-700 mb-3">How they work:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>Information flows through layers</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>Each connection has a weight</li>
                  <li className="flex items-center"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>Networks learn by adjusting weights</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-gray-800">Applications:</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">📸</div>
                    <p className="text-sm font-medium">Image Recognition</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">🎬</div>
                    <p className="text-sm font-medium">Netflix Recommendations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Algorithm Comparison Table */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              🎯 When to Use Which Algorithm?
            </h2>
            <p className="text-lg text-gray-600">Choose the right tool for the job!</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-green-100 to-emerald-100">
                  <th className="px-6 py-4 text-left font-bold text-gray-800">Problem Type</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-800">Best Algorithm</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-800">Example</th>
                </tr>
              </thead>
              <tbody>
                {applicationTable.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 ${
                      visibleCards.includes(index + 15) ? 'animate-fade-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${(index + 15) * 100}ms` }}
                  >
                    <td className="px-6 py-4">
                      <span className="font-semibold text-gray-800">{row.problem}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${row.color}`}>
                        {row.algorithm}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Algorithm Complexity */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-400">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <Clock className="w-6 h-6 text-green-600 mr-3" />
              Time Complexity (Speed)
            </h3>
            <div className="space-y-4">
              {[
                { name: "Hill Climbing", speed: "Very Fast", desc: "Quick but may not find best solution", color: "bg-green-200" },
                { name: "A* Algorithm", speed: "Fast", desc: "Faster than BFS with good heuristic", color: "bg-emerald-200" },
                { name: "BFS/DFS", speed: "Medium", desc: "Depends on problem size", color: "bg-teal-200" },
                { name: "Genetic Algorithm", speed: "Slow", desc: "Thorough but takes time", color: "bg-green-300" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <div>
                    <div className="font-semibold text-gray-800">{item.name}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${item.color}`}>
                    {item.speed}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border-l-4 border-emerald-400">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <Cpu className="w-6 h-6 text-emerald-600 mr-3" />
              Space Complexity (Memory)
            </h3>
            <div className="space-y-4">
              {[
                { name: "DFS", memory: "Low", desc: "Uses minimal memory", color: "bg-emerald-200" },
                { name: "A*", memory: "Medium", desc: "Moderate memory usage", color: "bg-teal-200" },
                { name: "Genetic Algorithm", memory: "Medium-High", desc: "Stores population of solutions", color: "bg-emerald-300" },
                { name: "BFS", memory: "High", desc: "Stores all nodes at current level", color: "bg-teal-300" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                  <div>
                    <div className="font-semibold text-gray-800">{item.name}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${item.color}`}>
                    {item.memory}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-l-4 border-green-400">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Key Takeaways
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: <Search className="w-8 h-8" />,
                  title: "Search Algorithms",
                  desc: "Help find paths and solutions efficiently",
                  color: "bg-green-100 text-green-600"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Optimization",
                  desc: "Find the best among many options",
                  color: "bg-emerald-100 text-emerald-600"
                },
                {
                  icon: <Gamepad2 className="w-8 h-8" />,
                  title: "Game Algorithms",
                  desc: "Make strategic decisions in competition",
                  color: "bg-teal-100 text-teal-600"
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Learning",
                  desc: "Help systems improve over time",
                  color: "bg-green-200 text-green-700"
                }
              ].map((takeaway, index) => (
                <div key={index} className={`${takeaway.color} rounded-2xl p-6 text-center`}>
                  <div className="flex justify-center mb-4">
                    {takeaway.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{takeaway.title}</h3>
                  <p className="text-sm">{takeaway.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm max-w-3xl mx-auto mt-8">
              <p className="text-lg text-gray-700 font-medium">
                Understanding these algorithms helps us appreciate how AI systems work and choose the right approach for different problems. As AI continues to evolve, these fundamental algorithms remain the foundation for more advanced techniques!
              </p>
            </div>
          </div>
        </div>

        {/* Final Note */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-3xl p-8 md:p-12">
          <div className="text-center">
            <div className="text-5xl mb-6">🚀</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              The Future is in Your Hands
            </h2>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8">
              As we conclude our exploration of AI algorithms, remember that you're not just learning about technology—you're glimpsing the future you'll help shape. These algorithms are the building blocks of artificial intelligence that's transforming every aspect of human life.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: <Lightbulb className="w-8 h-8" />,
                  title: "Stay Curious",
                  desc: "Technology evolves rapidly, but problem-solving principles remain constant"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Think Critically",
                  desc: "Question assumptions, understand data patterns, consider ethical implications"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Be Responsible",
                  desc: "Ensure AI serves humanity's best interests in whatever field you pursue"
                }
              ].map((principle, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {principle.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{principle.title}</h3>
                  <p className="text-sm opacity-90">{principle.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-lg font-medium">
                The future needs minds like yours—informed, questioning, and ready to ensure that artificial intelligence serves humanity's best interests. 
                <br />
                <strong className="text-green-200">Keep learning, keep questioning, and remember: the most important intelligence will always be your own.</strong>
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

export default Module7AIAlgorithms;