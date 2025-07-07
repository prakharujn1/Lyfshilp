import React, { useState, useEffect } from 'react';
import { MessageSquare, Brain, Target, Trophy, Users, TrendingUp, Settings, Play, Bot, User, CheckCircle, AlertCircle, Clock, Star } from 'lucide-react';

const CustomerServiceChatbotBuilder = () => {
    const [gameState, setGameState] = useState('training'); // training, testing, results
    const [botTraining, setBotTraining] = useState({
        orderStatus: 0,
        returns: 0,
        productInfo: 0,
        techSupport: 0,
        complaints: 0
    });
    const [currentScenario, setCurrentScenario] = useState(null);
    const [conversationHistory, setConversationHistory] = useState([]);
    const [metrics, setMetrics] = useState({
        satisfaction: 0,
        resolutionRate: 0,
        relevanceScore: 0,
        completionRate: 0
    });
    const [scenarios, setScenarios] = useState([]);
    const [currentInput, setCurrentInput] = useState('');
    const [gameProgress, setGameProgress] = useState({
        scenariosCompleted: 0,
        totalScenarios: 10,
        currentLevel: 1
    });

    // Training data and scenarios
    const trainingExamples = {
        orderStatus: [
            "Where is my package?", "Track my order", "Order status update",
            "When will my order arrive?", "Shipping information", "Delivery tracking"
        ],
        returns: [
            "I want to return this", "Refund policy", "How to return item",
            "Exchange product", "Money back guarantee", "Return shipping"
        ],
        productInfo: [
            "Tell me about this laptop", "What colors available?", "Product specifications",
            "Size chart", "Product reviews", "Compare products"
        ],
        techSupport: [
            "App not working", "Login problems", "Website issues",
            "Payment not processing", "Account locked", "Technical difficulties"
        ],
        complaints: [
            "Poor service", "Damaged item", "Very disappointed",
            "Terrible experience", "Quality issues", "Unsatisfied customer"
        ]
    };

    const customerScenarios = [
        {
            id: 1,
            type: 'simple',
            intent: 'returns',
            customerMessage: "What's your return policy?",
            context: { orderHistory: [], customerType: 'new' },
            expectedResponse: 'policy explanation',
            difficulty: 'easy'
        },
        {
            id: 2,
            type: 'complex',
            intent: 'multiple',
            customerMessage: "My order #12345 arrived damaged AND I want to return another item I bought last week",
            context: { orderHistory: ['#12345', '#12340'], customerType: 'returning' },
            expectedResponse: 'multi-step resolution',
            difficulty: 'hard'
        },
        {
            id: 3,
            type: 'frustrated',
            intent: 'complaints',
            customerMessage: "This is ridiculous! Your app keeps crashing and I can't even place an order!",
            context: { attemptCount: 3, customerType: 'frustrated' },
            expectedResponse: 'empathetic + escalation',
            difficulty: 'medium'
        },
        {
            id: 4,
            type: 'simple',
            intent: 'productInfo',
            customerMessage: "Can you tell me the difference between the iPhone 15 and iPhone 15 Pro?",
            context: { viewedProducts: ['iPhone 15', 'iPhone 15 Pro'], customerType: 'comparing' },
            expectedResponse: 'detailed comparison',
            difficulty: 'medium'
        },
        {
            id: 5,
            type: 'simple',
            intent: 'orderStatus',
            customerMessage: "Where is my order? I placed it 3 days ago.",
            context: { orderNumber: '#12347', orderDate: '3 days ago' },
            expectedResponse: 'tracking information',
            difficulty: 'easy'
        }
    ];

    useEffect(() => {
        setScenarios(customerScenarios);
    }, []);

    const trainBot = (intent) => {
        setBotTraining(prev => ({
            ...prev,
            [intent]: Math.min(prev[intent] + 20, 100)
        }));
    };

    const classifyIntent = (message) => {
        const words = message.toLowerCase().split(' ');
        const intentScores = {
            orderStatus: 0,
            returns: 0,
            productInfo: 0,
            techSupport: 0,
            complaints: 0
        };

        // Simple keyword-based classification (simulating NLP)
        Object.keys(trainingExamples).forEach(intent => {
            trainingExamples[intent].forEach(example => {
                const exampleWords = example.toLowerCase().split(' ');
                const commonWords = words.filter(word => exampleWords.includes(word));
                intentScores[intent] += commonWords.length * (botTraining[intent] / 100);
            });
        });

        return Object.keys(intentScores).reduce((a, b) =>
            intentScores[a] > intentScores[b] ? a : b
        );
    };

    const generateResponse = (intent, message, context) => {
        const responses = {
            orderStatus: [
                "I'd be happy to help track your order! Let me look that up for you.",
                "I can see your order is currently in transit. Expected delivery is within 2-3 business days.",
                "Your package is out for delivery today! You should receive it by end of day."
            ],
            returns: [
                "Our return policy allows returns within 30 days of purchase. Items must be in original condition.",
                "I can help you start a return. Would you like me to email you a return label?",
                "For returns, you can either drop off at any of our locations or schedule a pickup."
            ],
            productInfo: [
                "I'd be happy to provide product information! What specific details would you like to know?",
                "The iPhone 15 Pro features a titanium design and advanced camera system compared to the standard iPhone 15.",
                "This laptop comes in three colors: Silver, Space Gray, and Gold. Would you like detailed specs?"
            ],
            techSupport: [
                "I'm sorry you're experiencing technical difficulties. Let me help troubleshoot this issue.",
                "Try clearing your browser cache and cookies, then log in again. If that doesn't work, I can escalate to our tech team.",
                "For login issues, please verify your email and try resetting your password."
            ],
            complaints: [
                "I sincerely apologize for the poor experience. I want to make this right for you.",
                "I understand your frustration, and I'm here to help resolve this issue immediately.",
                "Let me connect you with a supervisor who can provide additional assistance."
            ]
        };

        const baseResponse = responses[intent] || responses.techSupport;
        const contextualResponse = baseResponse[Math.floor(Math.random() * baseResponse.length)];

        // Add escalation logic for complex/frustrated customers
        if (context.customerType === 'frustrated' || intent === 'complaints') {
            return contextualResponse + " I'm also connecting you with a specialist who can provide personalized assistance.";
        }

        return contextualResponse;
    };

    const handleCustomerMessage = (message) => {
        const intent = classifyIntent(message);
        const response = generateResponse(intent, message, currentScenario?.context || {});

        const newConversation = [
            ...conversationHistory,
            { sender: 'customer', message, timestamp: new Date().toLocaleTimeString() },
            { sender: 'bot', message: response, intent, timestamp: new Date().toLocaleTimeString() }
        ];

        setConversationHistory(newConversation);

        // Calculate metrics based on response quality
        const satisfaction = calculateSatisfaction(intent, currentScenario);
        const resolved = intent === currentScenario?.intent || currentScenario?.intent === 'multiple';

        setMetrics(prev => ({
            satisfaction: Math.min(prev.satisfaction + satisfaction, 100),
            resolutionRate: resolved ? Math.min(prev.resolutionRate + 10, 100) : prev.resolutionRate,
            relevanceScore: Math.min(prev.relevanceScore + (resolved ? 15 : 5), 100),
            completionRate: Math.min(prev.completionRate + 8, 100)
        }));
    };

    const calculateSatisfaction = (detectedIntent, scenario) => {
        if (!scenario) return 5;

        const correctIntent = detectedIntent === scenario.intent;
        const trainingLevel = botTraining[detectedIntent] || 0;

        if (correctIntent && trainingLevel > 70) return 15;
        if (correctIntent && trainingLevel > 40) return 10;
        return 5;
    };

    const startTesting = () => {
        if (Object.values(botTraining).every(level => level >= 40)) {
            setGameState('testing');
            setCurrentScenario(scenarios[0]);
            setConversationHistory([]);
        }
    };

    const nextScenario = () => {
        const nextIndex = gameProgress.scenariosCompleted + 1;
        if (nextIndex < scenarios.length) {
            setCurrentScenario(scenarios[nextIndex]);
            setGameProgress(prev => ({
                ...prev,
                scenariosCompleted: nextIndex
            }));
            setConversationHistory([]);
        } else {
            setGameState('results');
        }
    };

    const resetGame = () => {
        setGameState('training');
        setBotTraining({
            orderStatus: 0,
            returns: 0,
            productInfo: 0,
            techSupport: 0,
            complaints: 0
        });
        setMetrics({
            satisfaction: 0,
            resolutionRate: 0,
            relevanceScore: 0,
            completionRate: 0
        });
        setConversationHistory([]);
        setGameProgress({
            scenariosCompleted: 0,
            totalScenarios: 10,
            currentLevel: 1
        });
    };

    const isVictoryAchieved = () => {
        return metrics.satisfaction >= 85 && metrics.resolutionRate >= 70;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
                        <Bot className="text-blue-600" size={40} />
                        Customer Service Chatbot Builder
                    </h1>
                    <p className="text-lg text-gray-600">Train your AI chatbot using NLP and Transformer Models</p>
                    <p className="text-sm text-gray-500 mt-2 italic">
                        📘 Instructions: First, train the bot on different customer intents to at least 40%. Then, proceed to test it on real-world customer scenarios.
                    </p>
                </div>

                {/* Game State: Training */}
                {gameState === 'training' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Training Panel */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Brain className="text-purple-600" />
                                Intent Classification Training
                            </h2>
                            <p className="text-sm text-gray-500 mb-4">
                                Click "Train" for each intent using NLP examples. Reach at least 40% training level for all intents to unlock customer testing.
                            </p>

                            <div className="space-y-4">
                                {Object.entries(botTraining).map(([intent, level]) => (
                                    <div key={intent} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium capitalize">{intent.replace(/([A-Z])/g, ' $1')}</span>
                                            <span className="text-sm text-gray-600">{level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-3">
                                            <div
                                                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                                                style={{ width: `${level}%` }}
                                            />
                                        </div>
                                        <button
                                            onClick={() => trainBot(intent)}
                                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            Train {intent.replace(/([A-Z])/g, ' $1')}
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6">
                                <button
                                    onClick={startTesting}
                                    disabled={!Object.values(botTraining).every(level => level >= 40)}
                                    className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    <Play size={20} />
                                    Start Customer Testing
                                </button>
                                <p className="text-sm text-gray-600 mt-2 text-center">
                                    Train all intents to 40% or higher to begin testing
                                </p>
                            </div>
                        </div>

                        {/* Training Examples */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Target className="text-orange-600" />
                                Training Examples
                            </h2>
                            <div className="space-y-4">
                                {Object.entries(trainingExamples).map(([intent, examples]) => (
                                    <div key={intent} className="border rounded-lg p-4">
                                        <h3 className="font-bold text-lg mb-2 capitalize">{intent.replace(/([A-Z])/g, ' $1')}</h3>
                                        <div className="grid grid-cols-1 gap-2">
                                            {examples.slice(0, 3).map((example, idx) => (
                                                <div key={idx} className="bg-gray-50 p-2 rounded text-sm">
                                                    "{example}"
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Game State: Testing */}
                {gameState === 'testing' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Chat Interface */}
                        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                    <MessageSquare className="text-blue-600" />
                                    Customer Conversation
                                </h2>
                                
                                <p className="text-sm text-gray-600 mb-2">
                                    🧠 Use the scenario below to test your chatbot. Try different messages to handle the customer's issue clearly and kindly. The more you chat, the better the system can measure how well your bot performs in terms of satisfaction, resolution rate, relevance, and conversation completion. Your goal is to make the bot more reliable!
                                </p>
                                <div className="text-sm text-gray-600">
                                    Scenario {gameProgress.scenariosCompleted + 1} of {scenarios.length}
                                </div>
                            </div>

                            {/* Current Scenario */}
                            {currentScenario && (
                                <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                                    <h3 className="font-bold text-lg mb-2">Current Scenario:</h3>
                                    <p className="text-gray-700 mb-2">{currentScenario.customerMessage}</p>
                                    <div className="text-sm text-gray-600">
                                        <span className="font-medium">Type:</span> {currentScenario.type} |
                                        <span className="font-medium"> Difficulty:</span> {currentScenario.difficulty}
                                    </div>
                                </div>
                            )}

                            {/* Conversation History */}
                            <div className="bg-gray-50 p-4 rounded-lg mb-4 h-64 overflow-y-auto">
                                {conversationHistory.length === 0 && (
                                    <div className="text-center text-gray-500 py-8">
                                        <Bot size={48} className="mx-auto mb-4 text-gray-400" />
                                        <p>Conversation will appear here...</p>
                                    </div>
                                )}
                                {conversationHistory.map((msg, idx) => (
                                    <div key={idx} className={`mb-3 ${msg.sender === 'customer' ? 'text-right' : 'text-left'}`}>
                                        <div className={`inline-block p-3 rounded-lg max-w-xs ${msg.sender === 'customer'
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-white border border-gray-300'
                                            }`}>
                                            <p className="text-sm">{msg.message}</p>
                                            <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                                            {msg.intent && (
                                                <p className="text-xs opacity-70 mt-1">Intent: {msg.intent}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Input Area */}
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={currentInput}
                                    onChange={(e) => setCurrentInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && currentInput.trim() && (handleCustomerMessage(currentInput), setCurrentInput(''))}
                                    placeholder="Type customer message..."
                                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    onClick={() => currentInput.trim() && (handleCustomerMessage(currentInput), setCurrentInput(''))}
                                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Send
                                </button>
                            </div>

                            <div className="mt-4 flex justify-between">
                                <button
                                    onClick={nextScenario}
                                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                                >
                                    Next Scenario
                                </button>
                                <button
                                    onClick={() => setGameState('results')}
                                    className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                                >
                                    View Results
                                </button>
                            </div>
                        </div>

                        {/* Metrics Panel */}
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <TrendingUp className="text-green-600" />
                                Live Metrics
                            </h2>
                            <p className="text-sm text-gray-500 mb-4">
                                📊 Track your bot’s performance here. Aim for ≥ 85% satisfaction and ≥ 70% resolution to win.
                            </p>
                            <div className="space-y-4">
                                {Object.entries(metrics).map(([metric, value]) => (
                                    <div key={metric} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium capitalize">{metric.replace(/([A-Z])/g, ' $1')}</span>
                                            <span className="text-sm font-bold">{Math.round(value)}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-3">
                                            <div
                                                className={`h-3 rounded-full transition-all duration-300 ${value >= 85 ? 'bg-green-600' : value >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                                                    }`}
                                                style={{ width: `${value}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                <h3 className="font-bold text-lg mb-2">Victory Condition</h3>
                                <div className="text-sm space-y-1">
                                    <div className="flex items-center gap-2">
                                        {metrics.satisfaction >= 85 ? <CheckCircle className="text-green-600" size={16} /> : <Clock className="text-gray-400" size={16} />}
                                        <span>Customer Satisfaction ≥ 85%</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {metrics.resolutionRate >= 70 ? <CheckCircle className="text-green-600" size={16} /> : <Clock className="text-gray-400" size={16} />}
                                        <span>Resolution Rate ≥ 70%</span>
                                    </div>
                                </div>
                            </div>

                            {isVictoryAchieved() && (
                                <div className="mt-4 p-4 bg-green-50 rounded-lg text-center">
                                    <Trophy className="mx-auto text-yellow-600 mb-2" size={32} />
                                    <h3 className="font-bold text-green-800">Victory Achieved!</h3>
                                    <p className="text-sm text-green-700">Your chatbot is ready for deployment!</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Game State: Results */}
                {gameState === 'results' && (
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                        <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-2">
                            <Trophy className="text-yellow-600" />
                            Final Results
                        </h2>
                        <p className="text-sm text-gray-500 mb-6 italic">
                            🎯 Final evaluation based on your chatbot’s real-time decisions and user satisfaction during simulations.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                            {Object.entries(metrics).map(([metric, value]) => (
                                <div key={metric} className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">{Math.round(value)}%</div>
                                    <div className="text-sm text-gray-600 capitalize">{metric.replace(/([A-Z])/g, ' $1')}</div>
                                </div>
                            ))}
                        </div>

                        <div className="mb-8">
                            {isVictoryAchieved() ? (
                                <div className="bg-green-50 p-6 rounded-lg">
                                    <Star className="mx-auto text-yellow-500 mb-4" size={48} />
                                    <h3 className="text-2xl font-bold text-green-800 mb-2">Congratulations!</h3>
                                    <p className="text-green-700">Your chatbot achieved the victory condition and is ready for deployment!</p>
                                </div>
                            ) : (
                                <div className="bg-yellow-50 p-6 rounded-lg">
                                    <AlertCircle className="mx-auto text-orange-500 mb-4" size={48} />
                                    <h3 className="text-2xl font-bold text-orange-800 mb-2">Almost There!</h3>
                                    <p className="text-orange-700">Keep training to reach 85% satisfaction and 70% resolution rate.</p>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={resetGame}
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-bold"
                        >
                            Play Again
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CustomerServiceChatbotBuilder;