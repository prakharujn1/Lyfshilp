import React, { useState, useRef, useEffect } from 'react';
import { Camera, Upload, Brain, Calendar, Trophy, BookOpen, Target, CheckCircle, Clock, Star, Award, Lightbulb, RefreshCw } from 'lucide-react';

const PersonalStudyBuddy = () => {
  const [activeTab, setActiveTab] = useState('homework');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [recognizedProblems, setRecognizedProblems] = useState([]);

  const [studySchedule, setStudySchedule] = useState([]);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState({
    math: 75,
    science: 60,
    history: 45,
    english: 80
  });
  const [badges, setBadges] = useState(['First Problem Solved', 'Study Streak 3 Days']);
  const fileInputRef = useRef(null);

  // Mock image recognition for math problems
  const recognizeMathProblem = (imageData) => {
    const problems = [
      {
        type: 'algebra',
        equation: '2x + 5 = 15',
        solution: [
          'First, subtract 5 from both sides: 2x = 10',
          'Then, divide both sides by 2: x = 5',
          'Check: 2(5) + 5 = 15 ✓'
        ]
      },
      {
        type: 'arithmetic',
        equation: '24 ÷ 6 + 3 × 2',
        solution: [
          'Follow order of operations (PEMDAS)',
          'Division first: 24 ÷ 6 = 4',
          'Multiplication: 3 × 2 = 6',
          'Addition: 4 + 6 = 10'
        ]
      },
      {
        type: 'geometry',
        equation: 'Area of triangle with base 8 and height 6',
        solution: [
          'Use formula: Area = (1/2) × base × height',
          'Area = (1/2) × 8 × 6',
          'Area = 24 square units'
        ]
      }
    ];

    return problems; // return all problems

  };

  // Generate study schedule
  const generateStudySchedule = (subject, examDate, currentDate) => {
    const daysUntilExam = Math.ceil((new Date(examDate) - new Date(currentDate)) / (1000 * 60 * 60 * 24));
    const schedule = [];

    if (daysUntilExam > 0) {
      const studyPlans = {
        math: ['Review algebra basics', 'Practice word problems', 'Work on geometry', 'Take practice test', 'Review mistakes'],
        science: ['Read chapter notes', 'Study diagrams', 'Practice formulas', 'Lab review', 'Final review'],
        history: ['Timeline review', 'Key events study', 'Practice essays', 'Map work', 'Final review'],
        english: ['Grammar practice', 'Vocabulary review', 'Essay writing', 'Reading comprehension', 'Final review']
      };

      const plans = studyPlans[subject] || studyPlans.math;

      for (let i = 0; i < Math.min(daysUntilExam, 5); i++) {
        const date = new Date(currentDate);
        date.setDate(date.getDate() + i);
        schedule.push({
          date: date.toLocaleDateString(),
          activity: plans[i % plans.length],
          duration: '1-2 hours',
          completed: i < 2 // Mock some as completed
        });
      }
    }

    return schedule;
  };

  // Generate quiz questions
  const generateQuiz = (topic, difficulty) => {
    const quizData = {
      algebra: {
        easy: [
          {
            question: "What is the value of x in: x + 3 = 7?",
            options: ["3", "4", "5", "6"],
            correct: 1,
            explanation: "Subtract 3 from both sides: x = 7 - 3 = 4"
          },
          {
            question: "Solve: 2x = 10",
            options: ["3", "4", "5", "6"],
            correct: 2,
            explanation: "Divide both sides by 2: x = 10 ÷ 2 = 5"
          }
        ],
        medium: [
          {
            question: "What is x in: 3x - 4 = 11?",
            options: ["3", "4", "5", "6"],
            correct: 2,
            explanation: "Add 4 to both sides: 3x = 15, then divide by 3: x = 5"
          }
        ]
      },
      geometry: {
        easy: [
          {
            question: "What is the area of a rectangle with width 4 and height 6?",
            options: ["20", "24", "28", "32"],
            correct: 1,
            explanation: "Area = width × height = 4 × 6 = 24"
          }
        ]
      }
    };

    const questions = quizData[topic]?.[difficulty] || quizData.algebra.easy;
    return questions.slice(0, 3); // Return 3 questions
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        // Simulate image recognition
        setTimeout(() => {
          const problem = recognizeMathProblem(e.target.result);
          setRecognizedProblems(recognizeMathProblem(e.target.result));
        }, 1500);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateSchedule = () => {
    const subject = document.getElementById('schedule-subject').value;
    const examDate = document.getElementById('exam-date').value;
    const currentDate = new Date().toISOString().split('T')[0];

    if (subject && examDate) {
      const schedule = generateStudySchedule(subject, examDate, currentDate);
      setStudySchedule(schedule);
    }
  };

  const handleGenerateQuiz = () => {
    const topic = document.getElementById('quiz-topic').value;
    const difficulty = document.getElementById('quiz-difficulty').value;

    if (topic && difficulty) {
      const questions = generateQuiz(topic, difficulty);
      setQuizQuestions(questions);
      setCurrentQuizIndex(0);
      setShowAnswer(false);
      setScore(0);
    }
  };

  const handleAnswerSubmit = () => {
    if (userAnswer !== '' && !showAnswer) {
      const correct = parseInt(userAnswer) === quizQuestions[currentQuizIndex].correct;
      if (correct) {
        setScore(score + 1);
      }
      setShowAnswer(true);
    }
  };

  const nextQuestion = () => {
    if (currentQuizIndex < quizQuestions.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setUserAnswer('');
      setShowAnswer(false);
    }
  };

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${activeTab === id
        ? 'bg-blue-500 text-white shadow-lg'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
    >
      <Icon size={20} />
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            <Brain className="inline mr-2 text-blue-500" />
            Personal Study Buddy
          </h1>
          <p className="text-gray-600">AI-Powered Study Assistant</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <TabButton id="homework" label="Homework Helper" icon={BookOpen} />
          <TabButton id="schedule" label="Study Planner" icon={Calendar} />
          <TabButton id="quiz" label="Quiz Generator" icon={Target} />
          <TabButton id="progress" label="Progress Tracker" icon={Trophy} />
        </div>

        {/* Content Areas */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          {activeTab === 'homework' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                <Camera className="inline mr-2 text-blue-500" />
                Math Problem Scanner
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      ref={fileInputRef}
                      className="hidden"
                    />
                    <button
                      onClick={() => {
                        const sampleImage = './homework.png';
                        setUploadedImage(sampleImage);
                        setRecognizedProblems([]); // Reset previous result
                        setTimeout(() => {
                          const problem = recognizeMathProblem(sampleImage);
                          setRecognizedProblems(problem);
                        }, 1500);
                      }}
                      className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 mx-auto"
                    >
                      <Upload size={20} />
                      Upload Math Problem
                    </button>
                    <p className="text-gray-500 mt-2">Upload a photo of your math homework</p>
                  </div>

                  {uploadedImage && (
                    <div className="border rounded-lg p-4">
                      <img
                        src={uploadedImage}
                        alt="Uploaded problem"
                        className="max-w-full h-auto rounded"
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  {recognizedProblems.length > 0 ? (
                    <div className="space-y-6">
                      {recognizedProblems.map((problem, idx) => (
                        <div key={idx} className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <h3 className="font-semibold text-green-800 mb-2">
                            <CheckCircle className="inline mr-2" size={20} />
                            Problem Recognized!
                          </h3>
                          <div className="bg-white p-4 rounded border">
                            <p className="font-mono text-lg mb-4">{problem.equation}</p>
                            <div className="space-y-2">
                              <h4 className="font-semibold text-gray-700">Step-by-step solution:</h4>
                              {problem.solution.map((step, index) => (
                                <div key={index} className="flex items-start gap-2">
                                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                    {index + 1}
                                  </span>
                                  <span className="text-gray-700">{step}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : uploadedImage ? (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-blue-800">
                        <RefreshCw className="animate-spin" size={20} />
                        <span>Analyzing your problem...</span>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-700 mb-2">
                        <Lightbulb className="inline mr-2" size={20} />
                        How it works:
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Upload a clear photo of your math problem</li>
                        <li>• AI recognizes equations and problems</li>
                        <li>• Get step-by-step solution hints</li>
                        <li>• Learn the process, not just the answer</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                <Calendar className="inline mr-2 text-blue-500" />
                Study Schedule Creator
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-4">Create Your Study Plan</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Subject
                        </label>
                        <select
                          id="schedule-subject"
                          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select Subject</option>
                          <option value="math">Mathematics</option>
                          <option value="science">Science</option>
                          <option value="history">History</option>
                          <option value="english">English</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Exam Date
                        </label>
                        <input
                          type="date"
                          id="exam-date"
                          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <button
                        onClick={handleCreateSchedule}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        Generate Study Schedule
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {studySchedule.length > 0 ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h3 className="font-semibold text-green-800 mb-4">
                        <Clock className="inline mr-2" size={20} />
                        Your Study Schedule
                      </h3>
                      <div className="space-y-3">
                        {studySchedule.map((day, index) => (
                          <div
                            key={index}
                            className={`p-3 rounded-lg border ${day.completed
                              ? 'bg-green-100 border-green-300'
                              : 'bg-white border-gray-200'
                              }`}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium text-gray-800">{day.date}</p>
                                <p className="text-gray-600">{day.activity}</p>
                                <p className="text-sm text-gray-500">{day.duration}</p>
                              </div>
                              {day.completed && (
                                <CheckCircle className="text-green-500" size={24} />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-700 mb-2">
                        <Star className="inline mr-2" size={20} />
                        Smart Study Planning
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• AI creates personalized study schedules</li>
                        <li>• Optimizes study time based on exam date</li>
                        <li>• Breaks down complex topics into manageable chunks</li>
                        <li>• Suggests optimal study duration and breaks</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'quiz' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                <Target className="inline mr-2 text-blue-500" />
                Quiz Generator
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-4">Generate Practice Quiz</h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Topic
                        </label>
                        <select
                          id="quiz-topic"
                          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select Topic</option>
                          <option value="algebra">Algebra</option>
                          <option value="geometry">Geometry</option>
                          <option value="arithmetic">Arithmetic</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Difficulty
                        </label>
                        <select
                          id="quiz-difficulty"
                          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select Difficulty</option>
                          <option value="easy">Easy</option>
                          <option value="medium">Medium</option>
                          <option value="hard">Hard</option>
                        </select>
                      </div>
                      <button
                        onClick={handleGenerateQuiz}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        Generate Quiz
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {quizQuestions.length > 0 ? (
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-purple-800">
                          Question {currentQuizIndex + 1} of {quizQuestions.length}
                        </h3>
                        <div className="text-sm text-purple-600">
                          Score: {score}/{quizQuestions.length}
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-lg border">
                        <p className="font-medium text-gray-800 mb-4">
                          {quizQuestions[currentQuizIndex].question}
                        </p>

                        <div className="space-y-2 mb-4">
                          {quizQuestions[currentQuizIndex].options.map((option, index) => (
                            <label key={index} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="radio"
                                name="quiz-answer"
                                value={index}
                                checked={userAnswer == index}
                                onChange={(e) => setUserAnswer(e.target.value)}
                                disabled={showAnswer}
                                className="text-blue-500"
                              />
                              <span className={`${showAnswer && index === quizQuestions[currentQuizIndex].correct
                                ? 'text-green-600 font-semibold'
                                : showAnswer && userAnswer == index && index !== quizQuestions[currentQuizIndex].correct
                                  ? 'text-red-600'
                                  : 'text-gray-700'
                                }`}>
                                {option}
                              </span>
                            </label>
                          ))}
                        </div>

                        {!showAnswer ? (
                          <button
                            onClick={handleAnswerSubmit}
                            disabled={userAnswer === ''}
                            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50"
                          >
                            Submit Answer
                          </button>
                        ) : (
                          <div className="space-y-3">
                            <div className="p-3 bg-blue-50 rounded-lg">
                              <p className="text-sm text-blue-800">
                                <strong>Explanation:</strong> {quizQuestions[currentQuizIndex].explanation}
                              </p>
                            </div>
                            {currentQuizIndex < quizQuestions.length - 1 ? (
                              <button
                                onClick={nextQuestion}
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                              >
                                Next Question
                              </button>
                            ) : (
                              <div className="text-center p-4 bg-green-50 rounded-lg">
                                <p className="text-green-800 font-semibold">
                                  Quiz Complete! Final Score: {score}/{quizQuestions.length}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-700 mb-2">
                        <Target className="inline mr-2" size={20} />
                        Adaptive Quiz Generation
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• AI generates questions based on your topic</li>
                        <li>• Multiple difficulty levels available</li>
                        <li>• Instant feedback with explanations</li>
                        <li>• Track your progress and improve</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'progress' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                <Trophy className="inline mr-2 text-blue-500" />
                Progress Tracker
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-4">Subject Progress</h3>
                    <div className="space-y-4">
                      {Object.entries(progress).map(([subject, percentage]) => (
                        <div key={subject} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-700 capitalize">{subject}</span>
                            <span className="text-sm text-gray-500">{percentage}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all duration-500 ${percentage >= 75 ? 'bg-green-500' :
                                percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                                }`}
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-800 mb-4">
                      <Award className="inline mr-2" size={20} />
                      Your Badges
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {badges.map((badge, index) => (
                        <div key={index} className="bg-white p-3 rounded-lg border border-yellow-300 text-center">
                          <Trophy className="mx-auto mb-2 text-yellow-600" size={24} />
                          <p className="text-sm font-medium text-yellow-800">{badge}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 mb-3">
                      <Lightbulb className="inline mr-2" size={20} />
                      Study Tips
                    </h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Take a 5-minute break every 25 minutes</li>
                      <li>• History needs more attention - try flashcards</li>
                      <li>• Great job with English! Keep it up!</li>
                      <li>• Practice math problems daily for better retention</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600">
          <p>AI-Powered Study Assistant • Making Learning Smarter</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalStudyBuddy;