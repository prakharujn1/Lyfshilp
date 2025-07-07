import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Eye, Brain, Zap, AlertTriangle, Target, Clock } from 'lucide-react';

const AutonomousCarVision = () => {
    const [gameState, setGameState] = useState('menu'); // menu, playing, paused, gameOver
    const [scenario, setScenario] = useState(0);
    const [score, setScore] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    const [safetyScore, setSafetyScore] = useState(100);
    const [currentObjects, setCurrentObjects] = useState([]);
    const [timeRemaining, setTimeRemaining] = useState(5000); // 5 seconds instead of 0.1
    const [cnnLayer, setCnnLayer] = useState('convolution');
    const [gameTimer, setGameTimer] = useState(0);
    const [showHint, setShowHint] = useState(true);
    const [totalDetected, setTotalDetected] = useState(0);
    const [totalObjects, setTotalObjects] = useState(0);
    const [cnnExplanation, setCnnExplanation] = useState('');
    const canvasRef = useRef(null);
    const gameLoopRef = useRef(null);

    const scenarios = [
        { name: "Sunny Day - Easy Street", difficulty: 1, weather: "clear", objects: 2, description: "Perfect visibility, few objects" },
        { name: "Suburban Road", difficulty: 1, weather: "clear", objects: 3, description: "More traffic, still clear" },
        { name: "Light Rain", difficulty: 2, weather: "rain", objects: 3, description: "Slightly reduced visibility" },
        { name: "Busy Street", difficulty: 2, weather: "clear", objects: 4, description: "Multiple vehicles" },
        { name: "School Zone", difficulty: 3, weather: "school", objects: 4, description: "Children present - be careful!" },
        { name: "Evening Drive", difficulty: 2, weather: "night", objects: 3, description: "Reduced lighting" },
        { name: "Construction Area", difficulty: 3, weather: "construction", objects: 4, description: "Temporary signs and barriers" },
        { name: "Highway Traffic", difficulty: 3, weather: "clear", objects: 5, description: "Fast-moving vehicles" },
        { name: "Foggy Morning", difficulty: 4, weather: "fog", objects: 4, description: "Limited visibility" },
        { name: "Complex Intersection", difficulty: 4, weather: "clear", objects: 6, description: "Multiple objects and signs" }
    ];

    const objectTypes = {
        car: { color: '#3B82F6', priority: 2, points: 10, description: "Regular vehicle" },
        truck: { color: '#EF4444', priority: 3, points: 15, description: "Large vehicle" },
        pedestrian: { color: '#10B981', priority: 5, points: 25, description: "Person walking" },
        child: { color: '#F59E0B', priority: 5, points: 50, description: "Child - HIGH PRIORITY!" },
        traffic_sign: { color: '#8B5CF6', priority: 4, points: 20, description: "Important road sign" },
        traffic_light: { color: '#EC4899', priority: 4, points: 20, description: "Traffic control" },
        bicycle: { color: '#06B6D4', priority: 3, points: 15, description: "Cyclist" },
        motorcycle: { color: '#84CC16', priority: 3, points: 15, description: "Motorbike" }
    };

    const cnnLayers = {
        convolution: {
            name: "Convolution Layer",
            description: "🔍 Finding edges and basic shapes in the image",
            explanation: "The CNN is scanning the image for basic features like edges, corners, and simple patterns. Think of it like highlighting important details.",
            color: "#3B82F6",
            icon: "👁️"
        },
        pooling: {
            name: "Pooling Layer",
            description: "📉 Simplifying the image while keeping important features",
            explanation: "The CNN is making the image smaller but keeping the most important information. It's like creating a summary of what it found.",
            color: "#10B981",
            icon: "🔄"
        },
        fullyConnected: {
            name: "Classification Layer",
            description: "🧠 Making the final decision about what each object is",
            explanation: "The CNN is now deciding: 'This looks like a car', 'This looks like a person'. It's making the final classification.",
            color: "#F59E0B",
            icon: "🎯"
        }
    };

    // Generate random objects for scenario
    const generateObjects = (scenarioIndex) => {
        const objects = [];
        const objectTypeKeys = Object.keys(objectTypes);
        const currentScenario = scenarios[scenarioIndex];

        if (!currentScenario) return objects;

        const numObjects = currentScenario.objects;

        // Ensure at least one high-priority object in challenging scenarios
        if (scenarioIndex >= 4) {
            objects.push({
                id: 0,
                type: Math.random() > 0.5 ? 'pedestrian' : 'child',
                x: Math.random() * 300 + 50,
                y: Math.random() * 150 + 100,
                width: 40,
                height: 60,
                detected: false,
                pulsing: false
            });
        }

        for (let i = objects.length; i < numObjects; i++) {
            const type = objectTypeKeys[Math.floor(Math.random() * objectTypeKeys.length)];
            objects.push({
                id: i,
                type,
                x: Math.random() * 350 + 50,
                y: Math.random() * 180 + 80,
                width: type === 'child' ? 30 : type === 'pedestrian' ? 35 : 40 + Math.random() * 20,
                height: type === 'child' ? 45 : type === 'pedestrian' ? 55 : 40 + Math.random() * 20,
                detected: false,
                pulsing: false
            });
        }

        return objects;
    };

    // Draw road scene with better visuals
    const drawScene = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const currentScenario = scenarios[scenario];
        if (!currentScenario) return;

        // Draw background based on weather
        let bgColor = '#87CEEB'; // Clear sky
        if (currentScenario.weather === 'rain') bgColor = '#4B5563';
        else if (currentScenario.weather === 'night') bgColor = '#1F2937';
        else if (currentScenario.weather === 'fog') bgColor = '#9CA3AF';
        else if (currentScenario.weather === 'construction') bgColor = '#FCD34D';
        else if (currentScenario.weather === 'school') bgColor = '#93C5FD';

        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw road
        ctx.fillStyle = '#374151';
        ctx.fillRect(0, canvas.height - 120, canvas.width, 120);

        // Draw lane markings
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 3;
        ctx.setLineDash([15, 15]);
        for (let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.moveTo(0, canvas.height - 90 + i * 30);
            ctx.lineTo(canvas.width, canvas.height - 90 + i * 30);
            ctx.stroke();
        }

        // Draw sidewalks
        ctx.fillStyle = '#D1D5DB';
        ctx.fillRect(0, canvas.height - 140, canvas.width, 20);

        // Draw objects with better visibility
        currentObjects.forEach(obj => {
            const objType = objectTypes[obj.type];

            // Pulsing effect for undetected objects
            if (!obj.detected && showHint && (obj.type === 'pedestrian' || obj.type === 'child')) {
                const pulse = Math.sin(Date.now() * 0.005) * 0.3 + 0.7;
                ctx.globalAlpha = pulse;
            } else {
                ctx.globalAlpha = 1;
            }

            ctx.fillStyle = obj.detected ? '#22C55E' : objType.color;
            ctx.fillRect(obj.x, obj.y, obj.width, obj.height);

            // Draw detection box if detected
            if (obj.detected) {
                ctx.strokeStyle = '#22C55E';
                ctx.lineWidth = 4;
                ctx.setLineDash([]);
                ctx.strokeRect(obj.x - 3, obj.y - 3, obj.width + 6, obj.height + 6);

                // Draw checkmark
                ctx.fillStyle = '#22C55E';
                ctx.font = 'bold 20px Arial';
                ctx.fillText('✓', obj.x + obj.width - 15, obj.y - 5);
            }

            // Draw object label with background
            ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
            ctx.fillRect(obj.x, obj.y - 25, obj.width, 20);

            ctx.fillStyle = '#FFFFFF';
            ctx.font = 'bold 12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(
                obj.type.replace('_', ' ').toUpperCase(),
                obj.x + obj.width / 2,
                obj.y - 10
            );
            ctx.textAlign = 'left';
        });

        ctx.globalAlpha = 1;

        // Draw CNN layer visualization
        drawCNNVisualization(ctx);

        // Draw hint text
        if (showHint && currentObjects.some(obj => !obj.detected)) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.fillRect(10, canvas.height - 80, 300, 60);

            ctx.fillStyle = '#FFFFFF';
            ctx.font = 'bold 14px Arial';
            ctx.fillText('💡 Hint: Click on objects to detect them!', 20, canvas.height - 55);
            ctx.font = '12px Arial';
            ctx.fillText('Green boxes = detected ✓', 20, canvas.height - 35);
        }
    };

    const drawCNNVisualization = (ctx) => {
        const x = 20;
        const y = 20;
        const layerInfo = cnnLayers[cnnLayer];

        // Draw CNN layer panel
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(x, y, 400, 80);

        // Draw layer icon and info
        ctx.fillStyle = layerInfo.color;
        ctx.fillRect(x + 10, y + 10, 20, 20);

        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 16px Arial';
        ctx.fillText(layerInfo.icon + ' ' + layerInfo.name, x + 40, y + 25);

        ctx.font = '12px Arial';
        ctx.fillText(layerInfo.description, x + 40, y + 40);
        ctx.fillText(layerInfo.explanation, x + 40, y + 55);

        // Draw progress bar
        const progress = (scenario + 1) / scenarios.length;
        ctx.fillStyle = '#374151';
        ctx.fillRect(x + 10, y + 65, 380, 8);
        ctx.fillStyle = layerInfo.color;
        ctx.fillRect(x + 10, y + 65, 380 * progress, 8);
    };

    // Handle object detection with better feedback
    const handleObjectClick = (event) => {
        if (gameState !== 'playing') return;

        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;

        // Find the clicked object
        const clickedObject = currentObjects.find(obj =>
            x >= obj.x && x <= obj.x + obj.width &&
            y >= obj.y && y <= obj.y + obj.height &&
            !obj.detected
        );

        if (clickedObject) {
            const updatedObjects = currentObjects.map(obj =>
                obj.id === clickedObject.id ? { ...obj, detected: true } : obj
            );
            setCurrentObjects(updatedObjects);

            const points = objectTypes[clickedObject.type].points;
            setScore(prev => prev + points);
            setTotalDetected(prev => prev + 1);

            setCnnExplanation(`Great! The CNN successfully classified this ${clickedObject.type.replace('_', ' ')} using ${cnnLayer} processing.`);

            const detectedCount = updatedObjects.filter(obj => obj.detected).length;
            const totalCount = updatedObjects.length;
            setAccuracy(Math.round((detectedCount / totalCount) * 100));

            if (clickedObject.type === 'child' || clickedObject.type === 'pedestrian') {
                setSafetyScore(prev => Math.min(100, prev + 5));
            }

            if (detectedCount === totalCount) {
                setTimeout(() => {
                    nextScenario();
                }, 1000);
            }
        }
    };

    const nextScenario = () => {
        if (scenario < scenarios.length - 1) {
            setScenario(prev => prev + 1);
            setCurrentObjects(generateObjects(scenario + 1));
            setTimeRemaining(5000 + (scenario + 1) * 1000); // More time for harder scenarios
            setTotalObjects(prev => prev + scenarios[scenario + 1].objects);

            // Cycle through CNN layers
            const layers = Object.keys(cnnLayers);
            const currentIndex = layers.indexOf(cnnLayer);
            setCnnLayer(layers[(currentIndex + 1) % layers.length]);

            setCnnExplanation(`Now processing with ${cnnLayers[layers[(currentIndex + 1) % layers.length]].name}...`);
        } else {
            setGameState('gameOver');
        }
    };

    const startGame = () => {
        setGameState('playing');
        setScenario(0);
        setScore(0);
        setAccuracy(0);
        setSafetyScore(100);
        setGameTimer(0);
        setTotalDetected(0);
        setTotalObjects(scenarios[0].objects);
        setCurrentObjects(generateObjects(0));
        setTimeRemaining(5000);
        setCnnLayer('convolution');
        setCnnExplanation('CNN starting analysis with Convolution Layer...');
        setShowHint(true);
    };

    const resetGame = () => {
        setGameState('menu');
        setScenario(0);
        setScore(0);
        setAccuracy(0);
        setSafetyScore(100);
        setGameTimer(0);
        setCurrentObjects([]);
        setCnnExplanation('');
    };

    // Game loop with slower timing
    useEffect(() => {
        if (gameState === 'playing') {
            gameLoopRef.current = setInterval(() => {
                setGameTimer(prev => prev + 1);
                setTimeRemaining(prev => {
                    if (prev <= 0) {
                        // Time's up, reduce safety score and move to next scenario
                        setSafetyScore(s => Math.max(0, s - 15));
                        setCnnExplanation('Time expired! CNN needs more processing time for better accuracy.');
                        setTimeout(() => {
                            nextScenario();
                        }, 1500);
                        return 0;
                    }
                    return prev - 50; // Slower countdown
                });
            }, 50);
        } else {
            clearInterval(gameLoopRef.current);
        }

        return () => clearInterval(gameLoopRef.current);
    }, [gameState, scenario]);

    // Draw scene
    useEffect(() => {
        drawScene();
    }, [currentObjects, cnnLayer, scenario, showHint]);

    const getPerformanceGrade = () => {
        if (accuracy >= 90 && safetyScore >= 85) return 'A+';
        if (accuracy >= 80 && safetyScore >= 75) return 'A';
        if (accuracy >= 70 && safetyScore >= 65) return 'B';
        if (accuracy >= 60 && safetyScore >= 55) return 'C';
        return 'D';
    };

    const overallAccuracy = totalObjects > 0 ? Math.round((totalDetected / totalObjects) * 100) : 0;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold text-white mb-2">
                        🚗 Learn CNN with Self-Driving Cars
                    </h1>
                    <p className="text-blue-200 text-lg">
                        Discover how Convolutional Neural Networks detect objects in real-time
                    </p>
                </div>

                {gameState === 'menu' && (
                    <div className="bg-slate-800 rounded-xl p-8 text-center">
                        <div className="mb-6">
                            <Brain className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                            <h2 className="text-2xl font-bold text-white mb-4">
                                🎓 CNN Learning Adventure
                            </h2>
                            <p className="text-gray-300 mb-6 text-lg">
                                Learn how self-driving cars "see" the world through Convolutional Neural Networks!
                                Click on objects to help the AI detect them safely.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-slate-700 p-6 rounded-lg">
                                <div className="text-4xl mb-3">👁️</div>
                                <h3 className="text-white font-semibold mb-2">Easy to Learn</h3>
                                <p className="text-gray-400">Just click on objects you see! The game teaches you CNN concepts step by step.</p>
                            </div>
                            <div className="bg-slate-700 p-6 rounded-lg">
                                <div className="text-4xl mb-3">🧠</div>
                                <h3 className="text-white font-semibold mb-2">Understand CNN</h3>
                                <p className="text-gray-400">See how CNNs process images through Convolution, Pooling, and Classification layers.</p>
                            </div>
                            <div className="bg-slate-700 p-6 rounded-lg">
                                <div className="text-4xl mb-3">🚗</div>
                                <h3 className="text-white font-semibold mb-2">Real-World AI</h3>
                                <p className="text-gray-400">Learn the same technology that powers actual self-driving cars!</p>
                            </div>
                        </div>

                        {/* Simple Instructions */}
                        <div className="bg-slate-700 rounded-lg p-6 mb-6">
                            <h3 className="text-xl font-bold text-white mb-4">
                                🎮 How to Play (It's Easy!)
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                                        <div className="text-left">
                                            <h4 className="text-white font-semibold">Click on Objects</h4>
                                            <p className="text-gray-400 text-sm">See a car, person, or sign? Just click it!</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                                        <div className="text-left">
                                            <h4 className="text-white font-semibold">Learn CNN Layers</h4>
                                            <p className="text-gray-400 text-sm">Watch how AI processes each image step by step</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                                        <div className="text-left">
                                            <h4 className="text-white font-semibold">Keep Everyone Safe</h4>
                                            <p className="text-gray-400 text-sm">Prioritize detecting people, especially children!</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                                        <div className="text-left">
                                            <h4 className="text-white font-semibold">Complete 10 Scenarios</h4>
                                            <p className="text-gray-400 text-sm">From easy sunny days to challenging weather</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={startGame}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-xl transition-colors"
                        >
                            <Play className="inline w-6 h-6 mr-2" />
                            Start Learning CNN!
                        </button>
                    </div>
                )}

                {gameState === 'playing' && (
                    <div className="space-y-4">
                        {/* Simple Game Stats */}
                        <div className="bg-slate-800 rounded-xl p-4">
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-400">{scenario + 1}/10</div>
                                    <div className="text-sm text-gray-400">Scenario</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-green-400">{Math.round(timeRemaining / 1000)}s</div>
                                    <div className="text-sm text-gray-400">Time Left</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-yellow-400">{currentObjects.filter(obj => obj.detected).length}/{currentObjects.length}</div>
                                    <div className="text-sm text-gray-400">Detected</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-purple-400">{score}</div>
                                    <div className="text-sm text-gray-400">Score</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-orange-400">{overallAccuracy}%</div>
                                    <div className="text-sm text-gray-400">Accuracy</div>
                                </div>
                            </div>
                        </div>

                        {/* Current Scenario with description */}
                        <div className="bg-slate-800 rounded-xl p-4">
                            <h3 className="text-white font-semibold mb-2">
                                📍 {scenarios[scenario]?.name || 'Loading...'}
                            </h3>
                            <p className="text-gray-400 mb-2">{scenarios[scenario]?.description || ''}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-400">
                                <span>Difficulty: {'⭐'.repeat(scenarios[scenario]?.difficulty || 0)}</span>
                                <span>Objects to find: {scenarios[scenario]?.objects || 0}</span>
                            </div>
                        </div>

                        {/* Game Canvas */}
                        <div className="bg-slate-800 rounded-xl p-4">
                            <canvas
                                ref={canvasRef}
                                width={800}
                                height={400}
                                className="border border-slate-600 rounded-lg cursor-pointer w-full max-w-full"
                                onClick={handleObjectClick}
                            />
                        </div>

                        {/* CNN Explanation */}
                        {cnnExplanation && (
                            <div className="bg-slate-800 rounded-xl p-4">
                                <h3 className="text-white font-semibold mb-2">🧠 CNN is thinking...</h3>
                                <p className="text-gray-300">{cnnExplanation}</p>
                            </div>
                        )}

                        {/* Simple Controls */}
                        <div className="text-center">
                            <button
                                onClick={() => setShowHint(!showHint)}
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg mr-4"
                            >
                                {showHint ? 'Hide Hints' : 'Show Hints'}
                            </button>
                            <button
                                onClick={() => setGameState('paused')}
                                className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-lg mr-4"
                            >
                                <Pause className="inline w-4 h-4 mr-2" />
                                Pause
                            </button>
                            <button
                                onClick={resetGame}
                                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg"
                            >
                                <RotateCcw className="inline w-4 h-4 mr-2" />
                                Restart
                            </button>
                        </div>
                    </div>
                )}

                {gameState === 'gameOver' && (
                    <div className="bg-slate-800 rounded-xl p-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            🎉 Congratulations! You've mastered CNN!
                        </h2>
                        <p className="text-gray-300 mb-6">
                            You've successfully learned how Convolutional Neural Networks work in self-driving cars!
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div className="bg-slate-700 p-6 rounded-lg">
                                <div className="text-3xl font-bold text-blue-400 mb-2">{overallAccuracy}%</div>
                                <div className="text-white">Overall Accuracy</div>
                                <div className="text-gray-400 text-sm">
                                    {overallAccuracy >= 80 ? 'Excellent!' : overallAccuracy >= 60 ? 'Good!' : 'Keep practicing!'}
                                </div>
                            </div>
                            <div className="bg-slate-700 p-6 rounded-lg">
                                <div className="text-3xl font-bold text-green-400 mb-2">{safetyScore}</div>
                                <div className="text-white">Safety Score</div>
                                <div className="text-gray-400 text-sm">
                                    {safetyScore >= 80 ? 'Very Safe!' : safetyScore >= 60 ? 'Safe' : 'Be more careful!'}
                                </div>
                            </div>
                            <div className="bg-slate-700 p-6 rounded-lg">
                                <div className="text-3xl font-bold text-purple-400 mb-2">{score}</div>
                                <div className="text-white">Total Score</div>
                                <div className="text-gray-400 text-sm">Points Earned</div>
                            </div>
                        </div>

                        <div className="bg-slate-700 rounded-lg p-6 mb-6">
                            <h3 className="text-xl font-semibold text-white mb-3">
                                🎓 What You Learned About CNNs:
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                <div className="bg-slate-600 p-3 rounded">
                                    <div className="text-blue-400 font-bold mb-1">👁️ Convolution Layer</div>
                                    <div className="text-gray-300">Detects edges and basic shapes</div>
                                </div>
                                <div className="bg-slate-600 p-3 rounded">
                                    <div className="text-green-400 font-bold mb-1">🔄 Pooling Layer</div>
                                    <div className="text-gray-300">Reduces size, keeps important features</div>
                                </div>
                                <div className="bg-slate-600 p-3 rounded">
                                    <div className="text-yellow-400 font-bold mb-1">🎯 Classification Layer</div>
                                    <div className="text-gray-300">Makes final object identification</div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={resetGame}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg"
                        >
                            <RotateCcw className="inline w-5 h-5 mr-2" />
                            Play Again
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AutonomousCarVision;