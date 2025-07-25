import React, { useState, useEffect, useCallback } from 'react';
import { Car, Eye, Brain, Clock, Target, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { useComputers } from "@/contexts/ComputersContext";
import { usePerformance } from "@/contexts/PerformanceContext"; //for performance
const AutonomousCarVisionGame = () => {
  const { completeComputersChallenge } = useComputers();
  const [gameState, setGameState] = useState('menu'); // menu, playing, results
  const [currentScenario, setCurrentScenario] = useState(0);
  const [score, setScore] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [selectedObjects, setSelectedObjects] = useState([]);
  const [gameStats, setGameStats] = useState({
    correctDetections: 0,
    totalDetections: 0,
    safetyIncidents: 0,
    completedScenarios: 0
  });

  //for performance
  const { updateComputersPerformance } = usePerformance();
  const [startTime] = useState(Date.now());


  // Simplified road scenarios with objects to detect
  const scenarios = [
    {
      id: 1,
      title: "Clear Highway",
      description: "Perfect visibility, standard conditions",
      difficulty: "Easy",
      objects: [
        { type: "car", x: 20, y: 40, label: "Blue Car" },
        { type: "sign", x: 80, y: 20, label: "Speed Limit 65" },
        { type: "lane", x: 50, y: 80, label: "Lane Marking" }
      ],
      requiredObjects: ["car", "sign", "lane"],
      safetyObjects: [],
      background: "linear-gradient(to bottom, #87CEEB 0%, #87CEEB 30%, #90EE90 30%, #90EE90 100%)"
    },
    {
      id: 2,
      title: "School Zone",
      description: "Children present, reduced speed zone",
      difficulty: "Medium",
      objects: [
        { type: "pedestrian", x: 30, y: 60, label: "Child", safety: true },
        { type: "sign", x: 70, y: 25, label: "School Zone" },
        { type: "car", x: 60, y: 45, label: "School Bus" },
        { type: "crosswalk", x: 40, y: 75, label: "Crosswalk" }
      ],
      requiredObjects: ["pedestrian", "sign", "car", "crosswalk"],
      safetyObjects: ["pedestrian"],
      background: "linear-gradient(to bottom, #87CEEB 0%, #87CEEB 30%, #98FB98 30%, #98FB98 100%)"
    },
    {
      id: 3,
      title: "City Intersection",
      description: "Traffic lights, multiple vehicles",
      difficulty: "Medium",
      objects: [
        { type: "traffic_light", x: 15, y: 15, label: "Red Light", safety: true },
        { type: "car", x: 40, y: 50, label: "Taxi" },
        { type: "pedestrian", x: 25, y: 65, label: "Pedestrian", safety: true },
        { type: "motorcycle", x: 75, y: 55, label: "Motorcycle" }
      ],
      requiredObjects: ["traffic_light", "car", "pedestrian", "motorcycle"],
      safetyObjects: ["traffic_light", "pedestrian"],
      background: "linear-gradient(to bottom, #696969 0%, #696969 30%, #A9A9A9 30%, #A9A9A9 100%)"
    },
    {
      id: 4,
      title: "Construction Zone",
      description: "Temporary signs, workers present",
      difficulty: "Hard",
      objects: [
        { type: "construction", x: 50, y: 30, label: "Construction Sign" },
        { type: "worker", x: 35, y: 55, label: "Construction Worker", safety: true },
        { type: "cone", x: 65, y: 65, label: "Traffic Cone" },
        { type: "truck", x: 20, y: 45, label: "Construction Truck" }
      ],
      requiredObjects: ["construction", "worker", "cone", "truck"],
      safetyObjects: ["worker"],
      background: "linear-gradient(to bottom, #B8860B 0%, #B8860B 30%, #D2691E 30%, #D2691E 100%)"
    },
    {
      id: 5,
      title: "Rainy Night",
      description: "Poor visibility, wet roads",
      difficulty: "Hard",
      objects: [
        { type: "car", x: 30, y: 40, label: "Car with Headlights" },
        { type: "sign", x: 80, y: 20, label: "Stop Sign" },
        { type: "pedestrian", x: 60, y: 70, label: "Pedestrian with Umbrella", safety: true },
        { type: "lane", x: 50, y: 85, label: "Wet Lane Marking" }
      ],
      requiredObjects: ["car", "sign", "pedestrian", "lane"],
      safetyObjects: ["pedestrian"],
      background: "linear-gradient(to bottom, #2F4F4F 0%, #2F4F4F 30%, #36454F 30%, #36454F 100%)"
    }
  ];

  const objectIcons = {
    car: "🚗",
    sign: "🛑",
    lane: "🛣️",
    pedestrian: "🚶",
    crosswalk: "🚸",
    traffic_light: "🚦",
    motorcycle: "🏍️",
    construction: "🚧",
    worker: "👷",
    cone: "🧡",
    truck: "🚛"
  };

  const cnnLayers = [
    { name: "Input Layer", description: "Raw image data", active: false },
    { name: "Conv Layer 1", description: "Edge detection", active: false },
    { name: "Pooling Layer 1", description: "Reduce size", active: false },
    { name: "Conv Layer 2", description: "Shape detection", active: false },
    { name: "Pooling Layer 2", description: "Feature extraction", active: false },
    { name: "Fully Connected", description: "Classification", active: false },
    { name: "Output Layer", description: "Decision making", active: false }
  ];

  const [activeLayers, setActiveLayers] = useState(cnnLayers);

  // Timer countdown
  useEffect(() => {
    let interval;
    if (gameState === 'playing' && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0 && gameState === 'playing') {
      handleScenarioComplete();
    }
    return () => clearInterval(interval);
  }, [gameState, timeRemaining]);

  // Animate CNN layers
  useEffect(() => {
    if (gameState === 'playing') {
      const animateLayer = (index) => {
        setActiveLayers(prev =>
          prev.map((layer, i) => ({
            ...layer,
            active: i <= index
          }))
        );
      };

      const interval = setInterval(() => {
        const layerIndex = Math.floor((10 - timeRemaining) / 1.5);
        if (layerIndex < cnnLayers.length) {
          animateLayer(layerIndex);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [timeRemaining, gameState]);

  const startGame = () => {
    setGameState('playing');
    setCurrentScenario(0);
    setScore(0);
    setAccuracy(0);
    setGameStats({
      correctDetections: 0,
      totalDetections: 0,
      safetyIncidents: 0,
      completedScenarios: 0
    });
    startScenario();
  };

  const startScenario = () => {
    setTimeRemaining(10);
    setSelectedObjects([]);
    setActiveLayers(cnnLayers.map(layer => ({ ...layer, active: false })));
  };

  const handleObjectClick = (objectType) => {
    if (selectedObjects.includes(objectType)) {
      setSelectedObjects(prev => prev.filter(obj => obj !== objectType));
    } else {
      setSelectedObjects(prev => [...prev, objectType]);
    }
  };

  const handleScenarioComplete = () => {
    const scenario = scenarios[currentScenario];
    const correctObjects = selectedObjects.filter(obj => scenario.requiredObjects.includes(obj));
    const missedSafetyObjects = scenario.safetyObjects.filter(obj => !selectedObjects.includes(obj));

    const scenarioAccuracy = (correctObjects.length / scenario.requiredObjects.length) * 100;
    const safetyIncidents = missedSafetyObjects.length;

    setGameStats(prev => ({
      ...prev,
      correctDetections: prev.correctDetections + correctObjects.length,
      totalDetections: prev.totalDetections + scenario.requiredObjects.length,
      safetyIncidents: prev.safetyIncidents + safetyIncidents,
      completedScenarios: prev.completedScenarios + 1
    }));

    const newScore = score + (correctObjects.length * 10) - (safetyIncidents * 20);
    setScore(Math.max(0, newScore));

    if (currentScenario < scenarios.length - 1) {
      setTimeout(() => {
        setCurrentScenario(prev => prev + 1);
        startScenario();
      }, 2000);
    } else {
      // Game complete
      const finalAccuracy = ((gameStats.correctDetections + correctObjects.length) /
        (gameStats.totalDetections + scenario.requiredObjects.length)) * 100;
      setAccuracy(finalAccuracy);

      if (finalAccuracy >= 95 && (gameStats.safetyIncidents + missedSafetyObjects.length) === 0) {
        completeComputersChallenge(1, 3);
      }

      const endTime = Date.now();
      const totalTimeSec = (endTime - startTime) / 1000;
      const maxPossibleScore = 5 * 4 * 10; // 5 scenarios × 4 required objects × 10 points
      const scoreOutOf10 = parseFloat(((score / maxPossibleScore) * 10).toFixed(2));

      updateComputersPerformance({
        score: scoreOutOf10,
        accuracy: parseFloat(finalAccuracy.toFixed(2)),
        avgResponseTimeSec: parseFloat((totalTimeSec / gameStats.totalDetections).toFixed(2)),
        studyTimeMinutes: parseFloat((totalTimeSec / 60).toFixed(2)),
        completed: hasWon
      });

      setTimeout(() => {
        setGameState('results');
      }, 2000);

    }
  };

  const scenario = scenarios[currentScenario];
  const isGameComplete = gameStats.completedScenarios === scenarios.length;
  const hasWon = accuracy >= 95 && gameStats.safetyIncidents === 0;

  if (gameState === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-white">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Car className="w-16 h-16 mr-4 text-blue-400" />
              <Eye className="w-16 h-16 mr-4 text-green-400" />
              <Brain className="w-16 h-16 text-purple-400" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Autonomous Car Vision System</h1>
            <p className="text-xl text-gray-300 mb-8">
              Learn CNN algorithms by training an AI system to recognize objects on the road
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/5 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Target className="w-6 h-6 mr-2" />
                Game Objectives
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li>• Detect and classify road objects in 10 seconds</li>
                <li>• Achieve 95%+ accuracy across 5 scenarios</li>
                <li>• Prioritize safety-critical objects</li>
                <li>• Learn CNN layer functions</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Brain className="w-6 h-6 mr-2" />
                CNN Layers
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li>• Convolution: Edge detection</li>
                <li>• Pooling: Feature extraction</li>
                <li>• Fully Connected: Classification</li>
                <li>• Output: Decision making</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={startGame}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 
                         text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-200 
                         transform hover:scale-105 shadow-lg"
            >
              Start Vision Training
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'results') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-white text-center">
          <div className="mb-8">
            {hasWon ? (
              <CheckCircle className="w-24 h-24 mx-auto mb-4 text-green-400" />
            ) : (
              <XCircle className="w-24 h-24 mx-auto mb-4 text-red-400" />
            )}
            <h1 className="text-4xl font-bold mb-4">
              {hasWon ? "Mission Complete!" : "Training Required"}
            </h1>
            <p className="text-xl text-gray-300">
              {hasWon
                ? "Your CNN system is ready for autonomous driving!"
                : "Your system needs more training to meet safety standards."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/5 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Performance Metrics</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Detection Accuracy:</span>
                  <span className={accuracy >= 95 ? "text-green-400" : "text-red-400"}>
                    {accuracy.toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Safety Incidents:</span>
                  <span className={gameStats.safetyIncidents === 0 ? "text-green-400" : "text-red-400"}>
                    {gameStats.safetyIncidents}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Scenarios Completed:</span>
                  <span className="text-blue-400">{gameStats.completedScenarios}/5</span>
                </div>
                <div className="flex justify-between">
                  <span>Final Score:</span>
                  <span className="text-purple-400">{score}</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">CNN Learning Summary</h2>
              <div className="space-y-2 text-left">
                <p className="text-gray-300">
                  <strong>Convolution Layers:</strong> Detected edges and basic shapes in road scenes
                </p>
                <p className="text-gray-300">
                  <strong>Pooling Layers:</strong> Reduced image complexity while preserving important features
                </p>
                <p className="text-gray-300">
                  <strong>Fully Connected:</strong> Combined features to classify objects
                </p>
                <p className="text-gray-300">
                  <strong>Output Layer:</strong> Made driving decisions based on classifications
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setGameState('menu')}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 
                       text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-200 
                       transform hover:scale-105 shadow-lg"
          >
            Return to Menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 mb-4 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Scenario {currentScenario + 1}: {scenario.title}</h2>
              <p className="text-gray-300">{scenario.description}</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <Clock className="w-6 h-6 mx-auto mb-1" />
                <div className="text-xl font-bold">{timeRemaining}s</div>
              </div>
              <div className="text-center">
                <Target className="w-6 h-6 mx-auto mb-1" />
                <div className="text-xl font-bold">{score}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {/* Road Scene */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-white mb-2">Road Scene Analysis</h3>
              <div
                className="relative w-full h-80 rounded-lg overflow-hidden cursor-crosshair"
                style={{ background: scenario.background }}
              >
                {scenario.objects.map((obj, index) => (
                  <div
                    key={index}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer
                               transition-all duration-200 hover:scale-110 ${selectedObjects.includes(obj.type)
                        ? 'ring-4 ring-blue-400 bg-blue-400/20'
                        : 'hover:bg-white/20'
                      } ${obj.safety ? 'ring-2 ring-red-400' : ''} 
                               rounded-lg p-2 text-2xl`}
                    style={{ left: `${obj.x}%`, top: `${obj.y}%` }}
                    onClick={() => handleObjectClick(obj.type)}
                    title={obj.label}
                  >
                    {objectIcons[obj.type] || '🔍'}
                  </div>
                ))}
              </div>
            </div>

            {/* Object Detection Panel */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Detected Objects</h3>
              <div className="grid grid-cols-4 gap-2">
                {Object.entries(objectIcons).map(([type, icon]) => (
                  <button
                    key={type}
                    onClick={() => handleObjectClick(type)}
                    className={`p-3 rounded-lg text-2xl transition-all duration-200 ${selectedObjects.includes(type)
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CNN Visualization */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
              <Brain className="w-5 h-5 mr-2" />
              CNN Processing
            </h3>
            <div className="space-y-3">
              {activeLayers.map((layer, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg transition-all duration-500 ${layer.active
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-400'
                    }`}
                >
                  <div className="font-semibold">{layer.name}</div>
                  <div className="text-sm opacity-80">{layer.description}</div>
                </div>
              ))}
            </div>

            {/* Safety Alerts */}
            <div className="mt-4 p-3 bg-red-500/20 rounded-lg">
              <div className="flex items-center text-red-400 mb-2">
                <AlertTriangle className="w-4 h-4 mr-2" />
                <span className="font-semibold">Safety Priority</span>
              </div>
              <div className="text-sm text-gray-300">
                Always detect pedestrians, traffic lights, and construction workers first!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutonomousCarVisionGame;