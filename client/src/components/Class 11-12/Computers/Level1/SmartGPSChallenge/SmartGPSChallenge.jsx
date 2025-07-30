import React, { useState, useEffect, useCallback } from 'react';
import { Navigation, MapPin, Clock, AlertTriangle, Heart, Car, Zap, Info, Play, RotateCcw } from 'lucide-react';
import { useComputers } from "@/contexts/ComputersContext";
const GRID_SIZE = 10;
const CELL_SIZE = 50;
import { usePerformance } from "@/contexts/PerformanceContext"; //for performance

// Emergency types with different priorities and requirements
const EMERGENCY_TYPES = {
  HEART_ATTACK: {
    icon: Heart,
    color: 'bg-red-600',
    priority: 1,
    timeMultiplier: 2,
    name: 'Heart Attack',
    description: 'Critical - Needs fastest route',
    baseScore: 200
  },
  ACCIDENT: {
    icon: Car,
    color: 'bg-yellow-600',
    priority: 2,
    timeMultiplier: 1.2,
    name: 'Traffic Accident',
    description: 'Moderate - Can avoid heavy traffic',
    baseScore: 150
  },
  DISASTER: {
    icon: AlertTriangle,
    color: 'bg-orange-600',
    priority: 3,
    timeMultiplier: 1.5,
    name: 'Natural Disaster',
    description: 'High - Roads may be blocked',
    baseScore: 175
  }
};

// Traffic conditions affecting movement cost
const TRAFFIC_CONDITIONS = {
  CLEAR: { cost: 1, color: 'bg-green-200', name: 'Clear' },
  LIGHT: { cost: 1.5, color: 'bg-yellow-200', name: 'Light Traffic' },
  HEAVY: { cost: 2.5, color: 'bg-orange-200', name: 'Heavy Traffic' },
  BLOCKED: { cost: Infinity, color: 'bg-red-200', name: 'Blocked' }
};

// A* Algorithm Implementation
class AStarPathfinder {
  constructor(grid, start, goal, emergencyType) {
    this.grid = grid;
    this.start = start;
    this.goal = goal;
    this.emergencyType = emergencyType;
    this.openSet = [];
    this.closedSet = [];
    this.path = [];
  }

  heuristic(a, b) {
    // Manhattan distance with emergency priority weighting
    const distance = Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
    const priorityWeight = this.emergencyType.timeMultiplier;
    return distance * priorityWeight;
  }

  getNeighbors(node) {
    const neighbors = [];
    const directions = [
      { x: 0, y: -1 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 0 }
    ];

    for (let dir of directions) {
      const x = node.x + dir.x;
      const y = node.y + dir.y;

      if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE) {
        const neighbor = this.grid[y][x];
        if (neighbor.traffic !== 'BLOCKED') {
          neighbors.push(neighbor);
        }
      }
    }
    return neighbors;
  }

  findPath() {
    const startNode = this.grid[this.start.y][this.start.x];
    const goalNode = this.grid[this.goal.y][this.goal.x];

    startNode.g = 0;
    startNode.f = this.heuristic(startNode, goalNode);
    this.openSet.push(startNode);

    while (this.openSet.length > 0) {
      // Find node with lowest f score
      let current = this.openSet.reduce((min, node) =>
        node.f < min.f ? node : min
      );

      if (current.x === goalNode.x && current.y === goalNode.y) {
        // Reconstruct path
        this.path = [];
        let temp = current;
        while (temp.parent) {
          this.path.unshift(temp);
          temp = temp.parent;
        }
        this.path.unshift(startNode);
        return this.path;
      }

      this.openSet = this.openSet.filter(node => node !== current);
      this.closedSet.push(current);

      const neighbors = this.getNeighbors(current);
      for (let neighbor of neighbors) {
        if (this.closedSet.includes(neighbor)) continue;

        const tentativeG = current.g + TRAFFIC_CONDITIONS[neighbor.traffic].cost;

        if (!this.openSet.includes(neighbor)) {
          this.openSet.push(neighbor);
        } else if (tentativeG >= neighbor.g) {
          continue;
        }

        neighbor.parent = current;
        neighbor.g = tentativeG;
        neighbor.h = this.heuristic(neighbor, goalNode);
        neighbor.f = neighbor.g + neighbor.h;
      }
    }

    return []; // No path found
  }
}

const SmartGPSChallenge = () => {
  const { completeComputersChallenge } = useComputers();
  const [grid, setGrid] = useState([]);
  const [ambulancePos, setAmbulancePos] = useState({ x: 0, y: 0 });
  const [emergencies, setEmergencies] = useState([]);
  const [currentEmergency, setCurrentEmergency] = useState(null);
  const [path, setPath] = useState([]);
  const [gameState, setGameState] = useState('setup'); // setup, playing, completed
  const [score, setScore] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [pathSteps, setPathSteps] = useState([]);
  const [showAlgorithmInfo, setShowAlgorithmInfo] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);

  //for performance
  const { updatePerformance } = usePerformance();
  const [startTime] = useState(Date.now());

  // Initialize game grid
  const initializeGrid = useCallback(() => {
    const newGrid = [];
    for (let y = 0; y < GRID_SIZE; y++) {
      const row = [];
      for (let x = 0; x < GRID_SIZE; x++) {
        // Random traffic conditions with weighted distribution
        const random = Math.random();
        let trafficType;
        if (random < 0.4) trafficType = 'CLEAR';
        else if (random < 0.7) trafficType = 'LIGHT';
        else if (random < 0.9) trafficType = 'HEAVY';
        else trafficType = 'BLOCKED';

        row.push({
          x,
          y,
          traffic: trafficType,
          g: Infinity,
          h: 0,
          f: Infinity,
          parent: null,
          isHospital: false,
          isEmergency: false
        });
      }
      newGrid.push(row);
    }

    // Place hospital at bottom-right
    newGrid[GRID_SIZE - 1][GRID_SIZE - 1].isHospital = true;
    newGrid[GRID_SIZE - 1][GRID_SIZE - 1].traffic = 'CLEAR';

    // Ensure ambulance starting position is clear
    newGrid[0][0].traffic = 'CLEAR';

    return newGrid;
  }, []);

  // Generate emergency scenarios
  const generateEmergencies = useCallback(() => {
    const emergencyTypes = Object.keys(EMERGENCY_TYPES);
    const newEmergencies = [];

    for (let i = 0; i < 3; i++) {
      const type = emergencyTypes[i];
      let x, y;

      // Ensure emergencies are not placed at start or hospital
      do {
        x = Math.floor(Math.random() * (GRID_SIZE - 2)) + 1;
        y = Math.floor(Math.random() * (GRID_SIZE - 2)) + 1;
      } while ((x === 0 && y === 0) || (x === GRID_SIZE - 1 && y === GRID_SIZE - 1));

      newEmergencies.push({
        id: i,
        type,
        x,
        y,
        completed: false,
        ...EMERGENCY_TYPES[type]
      });
    }

    return newEmergencies.sort((a, b) => a.priority - b.priority);
  }, []);

  // Initialize game
  useEffect(() => {
    const newGrid = initializeGrid();
    const newEmergencies = generateEmergencies();

    setGrid(newGrid);
    setEmergencies(newEmergencies);
    setCurrentEmergency(newEmergencies[0]);
    setAmbulancePos({ x: 0, y: 0 });
  }, [initializeGrid, generateEmergencies]);

  // Calculate path using A*
  const calculatePath = useCallback(() => {
    if (!currentEmergency || !grid.length) return;

    // Reset grid pathfinding values
    const resetGrid = grid.map(row =>
      row.map(cell => ({
        ...cell,
        g: Infinity,
        h: 0,
        f: Infinity,
        parent: null
      }))
    );

    const pathfinder = new AStarPathfinder(
      resetGrid,
      ambulancePos,
      { x: currentEmergency.x, y: currentEmergency.y },
      currentEmergency
    );

    const foundPath = pathfinder.findPath();
    setPath(foundPath);
    setGrid(resetGrid);

    // Create step-by-step explanation
    const steps = foundPath.map((node, index) => ({
      step: index + 1,
      position: `(${node.x}, ${node.y})`,
      g: node.g?.toFixed(1) || '0',
      h: node.h?.toFixed(1) || '0',
      f: node.f?.toFixed(1) || '0',
      traffic: TRAFFIC_CONDITIONS[node.traffic].name
    }));
    setPathSteps(steps);
  }, [currentEmergency, grid, ambulancePos]);

  // Start pathfinding
  const startPathfinding = () => {
    if (gameState === 'setup') {
      setGameState('playing');
      calculatePath();
    }
  };

  // Move to next emergency
  const handleEmergencyComplete = () => {
    // Calculate score based on emergency type and time efficiency
    const pathLength = path.length;
    const timeBonus = Math.max(0, 100 - timeElapsed);
    const emergencyScore = currentEmergency.baseScore + timeBonus - (pathLength * 2);

    const nextEmergency = emergencies.find(e => !e.completed && e.id !== currentEmergency.id);

    if (nextEmergency) {
      setCurrentEmergency(nextEmergency);
      setAmbulancePos({ x: currentEmergency.x, y: currentEmergency.y });

      // Mark current emergency as completed
      setEmergencies(prev =>
        prev.map(e =>
          e.id === currentEmergency.id ? { ...e, completed: true } : e
        )
      );

      setScore(prev => prev + Math.max(50, emergencyScore));
      setPath([]);
      setPathSteps([]);
    } else {
      setGameState('completed');
      const finalScore = score + Math.max(50, emergencyScore);
      setScore(finalScore);
      completeComputersChallenge(0, 1); // mark as completed

      // ⏱️ Calculate final metrics
      const timeTakenSec = Math.floor((Date.now() - startTime) / 1000);
      const accuracy = Math.min(100, (finalScore / 600) * 100); // assuming 600 is max score
      const scaledScore = Math.min(10, (finalScore / 600) * 10); // assuming 600 is max score
      const avgResponseTimeSec = timeTakenSec / emergencies.length;
      const studyTimeMinutes = Math.floor(timeTakenSec / 60);

      // 📈 Update performance
      updatePerformance({
        moduleName: "Computers",
        topicName: "exploringSmartStrategiesInAI",
        score: scaledScore,
        accuracy,
        avgResponseTimeSec,
        studyTimeMinutes,
        completed: true,
        
      });
    }
  };

  // Reset game
  const resetGame = () => {
    const newGrid = initializeGrid();
    const newEmergencies = generateEmergencies();

    setGrid(newGrid);
    setEmergencies(newEmergencies);
    setCurrentEmergency(newEmergencies[0]);
    setAmbulancePos({ x: 0, y: 0 });
    setPath([]);
    setPathSteps([]);
    setScore(0);
    setTimeElapsed(0);
    setGameState('setup');
  };

  // Timer effect
  useEffect(() => {
    let interval;
    if (gameState === 'playing') {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameState]);

  // Get cell class based on state
  const getCellClass = (cell) => {
    let baseClass = 'w-12 h-12 border border-gray-400 relative flex items-center justify-center text-xs font-bold transition-all duration-200';

    // Traffic condition background
    baseClass += ` ${TRAFFIC_CONDITIONS[cell.traffic].color}`;

    // Path highlighting
    if (path.some(p => p.x === cell.x && p.y === cell.y)) {
      baseClass += ' ring-2 ring-blue-500 ring-opacity-80';
    }

    return baseClass;
  };

  if (!grid.length) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto p-4 bg-gray-50 min-h-screen">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
          <Navigation className="text-blue-600" />
          Smart GPS Challenge - A* Algorithm
        </h1>
        <p className="text-gray-600">Navigate emergency services using optimal pathfinding</p>
      </div>

      {/* Instructions Modal */}
      {showInstructions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
              <Info className="w-6 h-6" />
              How to Play
            </h2>

            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-semibold text-lg mb-2">🎯 Objective</h3>
                <p>You are an emergency dispatcher controlling an ambulance. Use the A* pathfinding algorithm to navigate through traffic and reach all emergencies in order of priority.</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">🚨 Emergency Types</h3>
                <ul className="space-y-1 ml-4">
                  <li>• <strong>Heart Attack (Red):</strong> Highest priority - 200 base points</li>
                  <li>• <strong>Traffic Accident (Yellow):</strong> Medium priority - 150 base points</li>
                  <li>• <strong>Natural Disaster (Orange):</strong> Lower priority - 175 base points</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">🚦 Traffic Conditions</h3>
                <ul className="space-y-1 ml-4">
                  <li>• <strong>Clear (Green):</strong> Normal speed (×1 cost)</li>
                  <li>• <strong>Light Traffic (Yellow):</strong> Slower (×1.5 cost)</li>
                  <li>• <strong>Heavy Traffic (Orange):</strong> Much slower (×2.5 cost)</li>
                  <li>• <strong>Blocked (Red):</strong> Impassable (∞ cost)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">🎮 How to Play</h3>
                <ol className="space-y-1 ml-4 list-decimal">
                  <li>Click "Start A* Pathfinding" to calculate the optimal route</li>
                  <li>The blue line shows the A* calculated path</li>
                  <li>Click "Arrive at Emergency" when ready to complete the mission</li>
                  <li>Repeat for all emergencies to complete the game</li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">🏆 Scoring</h3>
                <ul className="space-y-1 ml-4">
                  <li>• Base points per emergency type</li>
                  <li>• Time bonus: +100 points minus seconds elapsed</li>
                  <li>• Path efficiency: -2 points per grid cell in path</li>
                  <li>• Minimum 50 points per emergency</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">🤖 A* Algorithm</h3>
                <p>The A* algorithm finds the optimal path by evaluating each cell using:</p>
                <ul className="space-y-1 ml-4 mt-2">
                  <li>• <strong>g(n):</strong> Actual cost from start to current cell</li>
                  <li>• <strong>h(n):</strong> Heuristic estimate from current cell to goal</li>
                  <li>• <strong>f(n) = g(n) + h(n):</strong> Total estimated cost</li>
                </ul>
              </div>
            </div>

            <button
              onClick={() => setShowInstructions(false)}
              className="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4" />
              Start Game
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Game Board */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Emergency Response Grid</h2>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{Math.floor(timeElapsed / 60)}:{(timeElapsed % 60).toString().padStart(2, '0')}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="w-4 h-4" />
                  <span>Score: {score}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-10 gap-0 border-2 border-gray-600 mb-4">
              {grid.map((row, y) =>
                row.map((cell, x) => (
                  <div key={`${x}-${y}`} className={getCellClass(cell)}>
                    {/* Ambulance */}
                    {ambulancePos.x === x && ambulancePos.y === y && (
                      <div className="absolute inset-0 bg-blue-600 rounded flex items-center justify-center z-10">
                        <Navigation className="w-6 h-6 text-white" />
                      </div>
                    )}

                    {/* Hospital */}
                    {cell.isHospital && (
                      <div className="absolute inset-0 bg-green-600 rounded flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                    )}

                    {/* Emergency Sites */}
                    {emergencies.map(emergency => {
                      if (emergency.x === x && emergency.y === y) {
                        const EmergencyIcon = emergency.icon;
                        return (
                          <div key={emergency.id} className={`absolute inset-0 ${emergency.color} rounded flex items-center justify-center ${emergency.completed ? 'opacity-50' : ''}`}>
                            <EmergencyIcon className="w-6 h-6 text-white" />
                          </div>
                        );
                      }
                      return null;
                    })}

                    {/* Path indicators */}
                    {path.some(p => p.x === x && p.y === y) && (
                      <div className="absolute top-0 left-0 w-2 h-2 bg-blue-600 rounded-full"></div>
                    )}
                  </div>
                ))
              )}
            </div>

            <div className="flex gap-2 flex-wrap">
              {gameState === 'setup' && (
                <button
                  onClick={startPathfinding}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Start A* Pathfinding
                </button>
              )}

              {gameState === 'playing' && (
                <>
                  {path.length === 0 ? (
                    <button
                      onClick={calculatePath}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex items-center gap-2"
                    >
                      <Play className="w-4 h-4" />
                      Calculate Path to Emergency
                    </button>
                  ) : (
                    <button
                      onClick={handleEmergencyComplete}
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors animate-pulse"
                    >
                      🚨 Arrive at Emergency
                    </button>
                  )}
                </>
              )}

              {gameState === 'completed' && (
                <button
                  onClick={resetGame}
                  className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  New Game
                </button>
              )}

              <button
                onClick={() => setShowAlgorithmInfo(!showAlgorithmInfo)}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <Info className="w-4 h-4" />
                {showAlgorithmInfo ? 'Hide' : 'Show'} Algorithm Info
              </button>

              <button
                onClick={() => setShowInstructions(true)}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
              >
                Instructions
              </button>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="space-y-4">
          {/* Game Status */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Game Status</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>State:</span>
                <span className="font-medium capitalize">{gameState}</span>
              </div>
              <div className="flex justify-between">
                <span>Completed:</span>
                <span className="font-medium">{emergencies.filter(e => e.completed).length}/3</span>
              </div>
              {path.length > 0 && (
                <div className="flex justify-between">
                  <span>Path Length:</span>
                  <span className="font-medium">{path.length} cells</span>
                </div>
              )}
              {gameState === 'playing' && (
                <div className="mt-3 p-2 bg-blue-50 rounded text-blue-800">
                  {path.length === 0 ? (
                    <span className="text-xs">🔄 Click "Calculate Path" to find route</span>
                  ) : (
                    <span className="text-xs">🚨 Path calculated! Click "Arrive at Emergency"</span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Current Emergency */}
          {currentEmergency && (
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Current Emergency</h3>
              <div className={`${currentEmergency.color} text-white p-3 rounded`}>
                <div className="flex items-center gap-2 mb-1">
                  <currentEmergency.icon className="w-5 h-5" />
                  <span className="font-medium">{currentEmergency.name}</span>
                </div>
                <p className="text-sm opacity-90">{currentEmergency.description}</p>
                <p className="text-xs mt-1">Location: ({currentEmergency.x}, {currentEmergency.y})</p>
                <p className="text-xs">Base Score: {currentEmergency.baseScore} points</p>
              </div>
            </div>
          )}

          {/* Emergency Queue */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Emergency Queue</h3>
            <div className="space-y-2">
              {emergencies.map((emergency, index) => (
                <div key={emergency.id} className={`p-2 rounded border ${emergency.completed ? 'bg-gray-100 text-gray-500' : emergency.id === currentEmergency?.id ? 'bg-blue-50 border-blue-300' : 'bg-white'}`}>
                  <div className="flex items-center gap-2">
                    <emergency.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{emergency.name}</span>
                    {emergency.completed && <span className="text-xs text-green-600">✓</span>}
                    {emergency.id === currentEmergency?.id && <span className="text-xs text-blue-600">← Current</span>}
                  </div>
                  <p className="text-xs text-gray-600">Priority: {emergency.priority} | Points: {emergency.baseScore}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Traffic Conditions</h3>
            <div className="space-y-1">
              {Object.entries(TRAFFIC_CONDITIONS).map(([key, condition]) => (
                <div key={key} className="flex items-center gap-2 text-sm">
                  <div className={`w-4 h-4 border border-gray-400 ${condition.color}`}></div>
                  <span>{condition.name} (×{condition.cost === Infinity ? '∞' : condition.cost})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Algorithm Info */}
          {showAlgorithmInfo && (
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="text-lg font-semibold mb-2">A* Algorithm</h3>
              <div className="text-sm space-y-2">
                <p><strong>f(n) = g(n) + h(n)</strong></p>
                <p><strong>g(n):</strong> Actual cost from start</p>
                <p><strong>h(n):</strong> Heuristic estimate to goal</p>
                <p><strong>f(n):</strong> Total estimated cost</p>

                {pathSteps.length > 0 && (
                  <div className="mt-3">
                    <h4 className="font-semibold">Path Steps:</h4>
                    <div className="max-h-40 overflow-y-auto text-xs">
                      {pathSteps.map((step, index) => (
                        <div key={index} className="border-b py-1">
                          <div>Step {step.step}: {step.position}</div>
                          <div>g={step.g}, h={step.h}, f={step.f}</div>
                          <div>Traffic: {step.traffic}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Game Completion */}
      {gameState === 'completed' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Mission Complete!</h2>
            <p className="text-gray-700 mb-4">
              You successfully navigated all emergency scenarios using the A* algorithm!
            </p>
            <div className="text-lg font-semibold mb-4">
              Final Score: {score} | Time: {Math.floor(timeElapsed / 60)}:{(timeElapsed % 60).toString().padStart(2, '0')}
            </div>
            <button
              onClick={resetGame}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartGPSChallenge;