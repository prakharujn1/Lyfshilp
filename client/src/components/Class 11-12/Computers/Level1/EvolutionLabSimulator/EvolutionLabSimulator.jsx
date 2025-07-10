import React, { useState, useEffect, useCallback } from 'react';
import { Play, Pause, RotateCcw, Zap, Droplets, Bug, TrendingUp, Settings } from 'lucide-react';
import { useComputers } from "@/contexts/ComputersContext";

const EvolutionLabSimulator = () => {
  const { completeComputersChallenge } = useComputers();
  const [population, setPopulation] = useState([]);
  const [generation, setGeneration] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentEnvironment, setCurrentEnvironment] = useState('normal');
  const [generationHistory, setGenerationHistory] = useState([]);
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [evolutionSpeed, setEvolutionSpeed] = useState(1000);
  const [maxGenerations, setMaxGenerations] = useState(100);
  const [showSettings, setShowSettings] = useState(false);

  // Create initial population
  const createRandomCrop = (id) => ({
    id,
    droughtResistance: Math.floor(Math.random() * 100),
    yieldCapacity: Math.floor(Math.random() * 100),
    pestResistance: Math.floor(Math.random() * 100),
    growthSpeed: Math.floor(Math.random() * 100),
    fitness: 0,
    age: 0
  });

  const initializePopulation = useCallback(() => {
    const newPopulation = Array.from({ length: 20 }, (_, i) => createRandomCrop(i));
    setPopulation(newPopulation);
    setGeneration(0);
    setGenerationHistory([]);
    setCurrentEnvironment('normal');
    setIsRunning(false);
  }, []);

  // Calculate fitness based on environment with more realistic challenges
  const calculateFitness = (crop, environment) => {
    let fitness = 0;

    switch (environment) {
      case 'drought':
        // Drought severely penalizes low drought resistance
        const droughtPenalty = crop.droughtResistance < 30 ? (30 - crop.droughtResistance) * 0.5 : 0;
        fitness = crop.droughtResistance * 0.4 + crop.yieldCapacity * 0.3 + crop.growthSpeed * 0.2 + crop.pestResistance * 0.1 - droughtPenalty;
        break;
      case 'pest':
        // Pest attacks severely penalize low pest resistance
        const pestPenalty = crop.pestResistance < 25 ? (25 - crop.pestResistance) * 0.6 : 0;
        fitness = crop.pestResistance * 0.4 + crop.yieldCapacity * 0.25 + crop.droughtResistance * 0.2 + crop.growthSpeed * 0.15 - pestPenalty;
        break;
      case 'market':
        // Market demands high yield and speed, but also consistency
        const yieldSpeedProduct = (crop.yieldCapacity * crop.growthSpeed) / 100;
        fitness = yieldSpeedProduct * 0.5 + crop.yieldCapacity * 0.25 + crop.growthSpeed * 0.15 + (crop.droughtResistance + crop.pestResistance) * 0.05;
        break;
      default:
        // Normal environment requires balance - penalizes specialization
        const avgTrait = (crop.droughtResistance + crop.yieldCapacity + crop.pestResistance + crop.growthSpeed) / 4;
        const variance = Math.pow(crop.droughtResistance - avgTrait, 2) +
          Math.pow(crop.yieldCapacity - avgTrait, 2) +
          Math.pow(crop.pestResistance - avgTrait, 2) +
          Math.pow(crop.growthSpeed - avgTrait, 2);
        const balancePenalty = Math.sqrt(variance) * 0.05;
        fitness = avgTrait - balancePenalty;
    }

    // Add some randomness to simulate real-world unpredictability
    const randomFactor = (Math.random() - 0.5) * 5;
    fitness += randomFactor;

    return Math.min(100, Math.max(0, fitness));
  };

  // Selection: More competitive tournament selection
  const selectParent = (population) => {
    const tournamentSize = 5; // Increased from 3 to make selection more competitive
    const tournament = [];

    for (let i = 0; i < tournamentSize; i++) {
      const randomIndex = Math.floor(Math.random() * population.length);
      tournament.push(population[randomIndex]);
    }

    // Sort by fitness and add some randomness to selection
    tournament.sort((a, b) => b.fitness - a.fitness);

    // 60% chance to pick best, 25% second best, 15% third best
    const rand = Math.random();
    if (rand < 0.6) return tournament[0];
    if (rand < 0.85) return tournament[1];
    return tournament[2];
  };

  // Crossover: Multi-point crossover with blending
  const crossover = (parent1, parent2) => {
    const traits = ['droughtResistance', 'yieldCapacity', 'pestResistance', 'growthSpeed'];
    const child = {};

    traits.forEach(trait => {
      // 70% chance for average of parents, 30% chance for random selection
      if (Math.random() < 0.7) {
        // Blend traits from both parents
        child[trait] = (parent1[trait] + parent2[trait]) / 2;
      } else {
        // Randomly pick from one parent
        child[trait] = Math.random() < 0.5 ? parent1[trait] : parent2[trait];
      }
    });

    return child;
  };

  // Mutation: More conservative and realistic mutation
  const mutate = (crop) => {
    const mutationRate = 0.15; // Increased mutation rate
    const mutationStrength = 8; // Reduced strength for smaller changes
    const traits = ['droughtResistance', 'yieldCapacity', 'pestResistance', 'growthSpeed'];

    const mutatedCrop = { ...crop };

    traits.forEach(trait => {
      if (Math.random() < mutationRate) {
        // Gaussian mutation for more realistic changes
        const change = (Math.random() + Math.random() - 1) * mutationStrength;
        mutatedCrop[trait] = Math.max(0, Math.min(100, mutatedCrop[trait] + change));
      }
    });

    // Occasionally introduce beneficial mutations
    if (Math.random() < 0.05) {
      const randomTrait = traits[Math.floor(Math.random() * traits.length)];
      mutatedCrop[randomTrait] = Math.min(100, mutatedCrop[randomTrait] + Math.random() * 15);
    }

    return mutatedCrop;
  };

  // Evolution step
  const evolveGeneration = useCallback(() => {
    if (population.length === 0) return;

    // Stop if reached max generations
    if (generation >= maxGenerations) {
      setIsRunning(false);
      completeComputersChallenge(0,2); // ✅ Challenge completed due to generation limit
      return;
    }

    // Calculate fitness for current population
    const evaluatedPopulation = population.map(crop => ({
      ...crop,
      fitness: calculateFitness(crop, currentEnvironment)
    }));

    // Record generation statistics
    const avgFitness = evaluatedPopulation.reduce((sum, crop) => sum + crop.fitness, 0) / evaluatedPopulation.length;
    const maxFitness = Math.max(...evaluatedPopulation.map(crop => crop.fitness));

    setGenerationHistory(prev => [...prev, {
      generation: generation + 1,
      avgFitness,
      maxFitness,
      environment: currentEnvironment
    }]);

    // Stop if victory condition is met (made more challenging)
    if (avgFitness >= 85 && maxFitness >= 90) {
      setIsRunning(false);
      completeComputersChallenge(0,2); // ✅ Challenge completed due to success
    }

    // Create new generation
    const newPopulation = [];

    for (let i = 0; i < 20; i++) {
      const parent1 = selectParent(evaluatedPopulation);
      const parent2 = selectParent(evaluatedPopulation);

      let child = crossover(parent1, parent2);
      child = mutate(child);
      child.id = i;
      child.age = 0;

      newPopulation.push(child);
    }

    setPopulation(newPopulation);
    setGeneration(prev => prev + 1);

    // Change environment every 5 generations (increased from 3)
    if ((generation + 1) % 5 === 0) {
      const environments = ['normal', 'drought', 'pest', 'market'];
      const nextEnv = environments[(Math.floor((generation + 1) / 5)) % environments.length];
      setCurrentEnvironment(nextEnv);
    }
  }, [population, generation, currentEnvironment, maxGenerations]);

  // Auto-evolution effect
  useEffect(() => {
    if (isRunning && population.length > 0) {
      const interval = setInterval(evolveGeneration, evolutionSpeed);
      return () => clearInterval(interval);
    }
  }, [isRunning, evolveGeneration, evolutionSpeed]);

  // Initialize on mount
  useEffect(() => {
    initializePopulation();
  }, [initializePopulation]);

  const getEnvironmentIcon = (env) => {
    switch (env) {
      case 'drought': return <Droplets className="w-4 h-4 text-orange-500" />;
      case 'pest': return <Bug className="w-4 h-4 text-red-500" />;
      case 'market': return <TrendingUp className="w-4 h-4 text-green-500" />;
      default: return <div className="w-4 h-4 bg-blue-500 rounded-full" />;
    }
  };

  const getEnvironmentColor = (env) => {
    switch (env) {
      case 'drought': return 'bg-orange-100 border-orange-300';
      case 'pest': return 'bg-red-100 border-red-300';
      case 'market': return 'bg-green-100 border-green-300';
      default: return 'bg-blue-100 border-blue-300';
    }
  };

  const getCropColor = (fitness) => {
    if (fitness >= 80) return 'bg-green-500';
    if (fitness >= 60) return 'bg-yellow-500';
    if (fitness >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const currentAvgFitness = population.length > 0 ?
    population.reduce((sum, crop) => sum + calculateFitness(crop, currentEnvironment), 0) / population.length : 0;

  const victoryCondition = currentAvgFitness >= 85 && population.length > 0 &&
    Math.max(...population.map(crop => calculateFitness(crop, currentEnvironment))) >= 90;
  const isComplete = generation >= maxGenerations || victoryCondition;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🧬 Evolution Lab Simulator</h1>
          <p className="text-gray-600">Genetic Algorithm Demonstration: Evolving the Perfect Crop</p>
        </div>

        {/* Instructions Panel */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">📋 How to Play & Instructions</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Game Controls */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">🎮 Game Controls</h3>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• <strong>Start Evolution:</strong> Begin automatic evolution</li>
                <li>• <strong>Next Generation:</strong> Manually advance one generation</li>
                <li>• <strong>Reset:</strong> Start with new random population</li>
                <li>• <strong>Settings:</strong> Adjust evolution speed & max generations</li>
                <li>• <strong>Click Crops:</strong> View detailed genetic traits</li>
              </ul>
            </div>

            {/* Crop Colors */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">🎨 Crop Color Guide</h3>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• <span className="inline-block w-3 h-3 bg-green-500 rounded mr-2"></span><strong>Green (80-100%):</strong> Excellent fitness</li>
                <li>• <span className="inline-block w-3 h-3 bg-yellow-500 rounded mr-2"></span><strong>Yellow (60-79%):</strong> Good fitness</li>
                <li>• <span className="inline-block w-3 h-3 bg-orange-500 rounded mr-2"></span><strong>Orange (40-59%):</strong> Average fitness</li>
                <li>• <span className="inline-block w-3 h-3 bg-red-500 rounded mr-2"></span><strong>Red (0-39%):</strong> Poor fitness</li>
              </ul>
            </div>

            {/* How It Works */}
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">⚙️ Genetic Algorithm</h3>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• <strong>Selection:</strong> Best crops become parents</li>
                <li>• <strong>Crossover:</strong> Combine traits from 2 parents</li>
                <li>• <strong>Mutation:</strong> Random trait changes (10% chance)</li>
                <li>• <strong>Environment:</strong> Changes every 5 generations</li>
                <li>• <strong>Goal:</strong> 85% average + 90% best fitness</li>
              </ul>
            </div>
          </div>

          {/* Traits & Environments */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-4 border-t">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">🌱 Crop Traits</h3>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• <strong>Drought Resistance:</strong> Survives dry conditions</li>
                <li>• <strong>Yield Capacity:</strong> Amount of food produced</li>
                <li>• <strong>Pest Resistance:</strong> Survives insect attacks</li>
                <li>• <strong>Growth Speed:</strong> How quickly crops mature</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-700 mb-2">🌍 Environment Challenges</h3>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• <strong>Normal:</strong> Balanced scoring of all traits</li>
                <li>• <strong>Drought:</strong> Emphasizes drought resistance (50%)</li>
                <li>• <strong>Pest Attack:</strong> Emphasizes pest resistance (50%)</li>
                <li>• <strong>Market Demand:</strong> Emphasizes yield & speed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsRunning(!isRunning)}
                disabled={isComplete}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${isRunning ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-green-500 hover:bg-green-600 text-white'
                  } disabled:bg-gray-300 disabled:cursor-not-allowed`}
              >
                {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isRunning ? 'Stop' : 'Start'} Evolution
              </button>

              <button
                onClick={evolveGeneration}
                disabled={isRunning || isComplete}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                <Zap className="w-4 h-4" />
                Next Generation
              </button>

              <button
                onClick={initializePopulation}
                className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="flex items-center gap-2 px-3 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                <Settings className="w-4 h-4" />
                Settings
              </button>
            </div>
          </div>

          {/* Settings Panel */}
          {showSettings && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <label className="text-sm font-medium">Evolution Speed:</label>
                  <select
                    value={evolutionSpeed}
                    onChange={(e) => setEvolutionSpeed(Number(e.target.value))}
                    className="px-3 py-1 border rounded-lg"
                  >
                    <option value={2000}>Slow (2s)</option>
                    <option value={1000}>Normal (1s)</option>
                    <option value={500}>Fast (0.5s)</option>
                    <option value={200}>Very Fast (0.2s)</option>
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <label className="text-sm font-medium">Max Generations:</label>
                  <select
                    value={maxGenerations}
                    onChange={(e) => setMaxGenerations(Number(e.target.value))}
                    className="px-3 py-1 border rounded-lg"
                  >
                    <option value={50}>50 Generations</option>
                    <option value={100}>100 Generations</option>
                    <option value={200}>200 Generations</option>
                    <option value={500}>500 Generations</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Status Panel */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <div className="text-2xl font-bold text-gray-800">{generation}</div>
            <div className="text-sm text-gray-600">Generation</div>
            <div className="text-xs text-gray-500">Max: {maxGenerations}</div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-lg">
            <div className="text-2xl font-bold text-blue-600">{currentAvgFitness.toFixed(1)}%</div>
            <div className="text-sm text-gray-600">Average Fitness</div>
            <div className="text-xs text-gray-500">Goal: 85% avg + 90% best</div>
          </div>

          <div className={`rounded-xl p-4 shadow-lg border-2 ${getEnvironmentColor(currentEnvironment)}`}>
            <div className="flex items-center gap-2 mb-1">
              {getEnvironmentIcon(currentEnvironment)}
              <div className="text-sm font-medium capitalize">{currentEnvironment}</div>
            </div>
            <div className="text-xs text-gray-600">Current Environment</div>
            <div className="text-xs text-gray-500">Changes every 3 gen</div>
          </div>

          <div className={`rounded-xl p-4 shadow-lg ${victoryCondition ? 'bg-green-100 border-2 border-green-300' : 'bg-gray-100'}`}>
            <div className="text-2xl">{victoryCondition ? '🏆' : '🎯'}</div>
            <div className="text-sm text-gray-600">
              {victoryCondition ? 'Victory!' : 'Goal: 90% Fitness'}
            </div>
          </div>

          <div className={`rounded-xl p-4 shadow-lg ${isComplete ? 'bg-yellow-100 border-2 border-yellow-300' : 'bg-gray-100'}`}>
            <div className="text-2xl">{isComplete ? '⏹️' : '▶️'}</div>
            <div className="text-sm text-gray-600">
              {isComplete ? 'Complete!' : 'Running'}
            </div>
          </div>
        </div>

        {/* Population Grid */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Current Population (Click to Analyze)</h2>
            <div className="text-sm text-gray-600">
              20 crops | Colors indicate fitness levels
            </div>
          </div>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
            {population.map((crop, index) => {
              const fitness = calculateFitness(crop, currentEnvironment);
              return (
                <div
                  key={crop.id}
                  onClick={() => setSelectedCrop(crop)}
                  className={`relative w-12 h-12 rounded-lg cursor-pointer transition-all hover:scale-110 hover:shadow-lg ${getCropColor(fitness)} ${selectedCrop?.id === crop.id ? 'ring-2 ring-blue-500' : ''
                    }`}
                  title={`Crop ${index + 1} - Fitness: ${fitness.toFixed(1)}%`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{fitness.toFixed(0)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed View */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Crop Details */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">🔬 Crop Genetic Analysis</h2>
            {selectedCrop ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold">Crop ID: {selectedCrop.id}</div>
                  <div className={`px-3 py-1 rounded-full text-white text-sm ${getCropColor(calculateFitness(selectedCrop, currentEnvironment))}`}>
                    {calculateFitness(selectedCrop, currentEnvironment).toFixed(1)}% Fitness
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { name: 'Drought Resistance', value: selectedCrop.droughtResistance, color: 'bg-orange-500', icon: '🌵' },
                    { name: 'Yield Capacity', value: selectedCrop.yieldCapacity, color: 'bg-green-500', icon: '🌾' },
                    { name: 'Pest Resistance', value: selectedCrop.pestResistance, color: 'bg-red-500', icon: '🛡️' },
                    { name: 'Growth Speed', value: selectedCrop.growthSpeed, color: 'bg-blue-500', icon: '⚡' }
                  ].map((trait) => (
                    <div key={trait.name} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium flex items-center gap-1">
                          {trait.icon} {trait.name}
                        </span>
                        <span className="text-sm font-bold">{trait.value.toFixed(1)}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${trait.color} transition-all duration-300`}
                          style={{ width: `${trait.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <div className="text-4xl mb-2">🔬</div>
                <div>Click on any crop above to view its genetic traits</div>
                <div className="text-sm mt-2">Colors indicate fitness: Red (poor) → Yellow → Green (excellent)</div>
              </div>
            )}
          </div>

          {/* Evolution Progress */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">📈 Evolution Progress</h2>
            {generationHistory.length > 0 ? (
              <div className="space-y-4">
                <div className="h-40 relative bg-gray-50 rounded-lg p-2">
                  <svg className="w-full h-full" viewBox="0 0 400 140">
                    {/* Grid lines */}
                    {[0, 25, 50, 75, 100].map(value => (
                      <line
                        key={value}
                        x1="0"
                        y1={130 - (value / 100) * 120}
                        x2="400"
                        y2={130 - (value / 100) * 120}
                        stroke="#e5e7eb"
                        strokeWidth="1"
                      />
                    ))}

                    {/* Progress line */}
                    {generationHistory.map((point, index) => {
                      const x = (index / Math.max(generationHistory.length - 1, 1)) * 380 + 10;
                      const y = 130 - (point.avgFitness / 100) * 120;
                      const nextPoint = generationHistory[index + 1];

                      return (
                        <g key={index}>
                          {nextPoint && (
                            <line
                              x1={x}
                              y1={y}
                              x2={(index + 1) / Math.max(generationHistory.length - 1, 1) * 380 + 10}
                              y2={130 - (nextPoint.avgFitness / 100) * 120}
                              stroke="#3b82f6"
                              strokeWidth="2"
                            />
                          )}
                          <circle cx={x} cy={y} r="3" fill="#3b82f6" />
                        </g>
                      );
                    })}

                    {/* Victory line */}
                    <line
                      x1="0"
                      y1={130 - (90 / 100) * 120}
                      x2="400"
                      y2={130 - (90 / 100) * 120}
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="font-semibold text-blue-800">Current Generation</div>
                    <div className="text-blue-600">{generationHistory[generationHistory.length - 1]?.avgFitness.toFixed(1)}% average fitness</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="font-semibold text-green-800">Best Ever</div>
                    <div className="text-green-600">{Math.max(...generationHistory.map(g => g.maxFitness)).toFixed(1)}% max fitness</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <div className="text-4xl mb-2">📊</div>
                <div>Evolution progress will appear here</div>
                <div className="text-sm mt-2">Start evolution to see fitness improvement over generations</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvolutionLabSimulator;