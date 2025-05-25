import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const getQuestionPrompt = (difficulty, previousQuestions = []) => {
  const previousQuestionsText = previousQuestions
    .map((q, i) => `${i + 1}. ${q.question}`)
    .join("\n");

  return `
You are a personal finance quiz generator. Generate exactly 5 multiple-choice questions about personal finance.

- Exactly 3 questions must be of "${difficulty}" difficulty.
- The remaining 2 can be of any other difficulty.
- All the questions should be new and **must not repeat or closely resemble** the following previously generated questions:

${previousQuestionsText}

Format : 
- Each question must be an object with the following JSON schema:
  {
    "question": "string",
    "options": ["A. ...", "B. ...", "C. ...", "D. ..."],
    "answer": "A" or "B" OR "C" or "D", // Must match one of the option letters
    "explanation": "1-2 lines explaining why the correct answer is right.",
    "difficulty": "Easy" | "Medium" | "Hard"
  }

Strict output format:
- Return a JSON array of exactly 5 question objects.
- DO NOT include markdown, explanations, or text before or after the JSON.
- DO NOT wrap the JSON in code blocks.
- Ensure that options start with A., B., C., D. and all 4 are present in each question.
- The output must be strictly valid JSON parsable with JSON.parse().
`;
};

function parsePossiblyStringifiedJSON(input) {
  try {
    // First attempt: parse if it's already a JSON object or array
    const first = typeof input === "string" ? JSON.parse(input) : input;

    // If parsing gave us a string (i.e., still escaped), parse again
    if (typeof first === "string") {
      return JSON.parse(first);
    }

    // Otherwise, return the parsed object
    return first;
  } catch (error) {
    console.error("Failed to parse JSON:", error);
    return null;
  }
}

const API_KEY = import.meta.env.VITE_API_KEY; // Replace with your API key

const QuizApp = () => {
  const [questionData, setQuestionData] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [feedback, setFeedback] = useState(null); // "correct" | "incorrect"
  const [explanationShown, setExplanationShown] = useState(false);
  const [scoreHistory, setScoreHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [questionsAsked, setQuestionsAsked] = useState([]);
  const [questionsAttempted, setQuestionsAttempted] = useState(0);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [difficulty, setDifficulty] = useState("Easy");
  const [trial, setTrial] = useState(0);

  const fetchQuestion = async (difficulty, previousQuestions = []) => {
    setLoading(true);
    setFeedback(null);
    setExplanationShown(false);
    setSelectedOption("");
    try {
      let parsedQuestions;

      do {
        console.log("Trial", trial);
        setTrial((prev) => prev + 1);

        const res = await axios.post(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
          {
            contents: [
              {
                parts: [
                  { text: getQuestionPrompt(difficulty, previousQuestions) },
                ],
              },
            ],
          }
        );

        const raw = res.data.candidates[0]?.content?.parts[0]?.text;
        parsedQuestions = parsePossiblyStringifiedJSON(raw);
        console.log(parsedQuestions);

        if (trial == 5) {
          setTrial(0);
          break;
        }
      } while (
        parsedQuestions.some((newQ) =>
          questionsAsked.some((oldQ) => oldQ.question === newQ.question)
        )
      );

      console.log(
        "Question Reapeated ?",
        parsedQuestions.some((newQ) =>
          questionsAsked.some((oldQ) => oldQ.question === newQ.question)
        )
      );

      setQuestionsAsked((prev) => [...prev, ...parsedQuestions]);
      setQuestionData(parsedQuestions);
    } catch (error) {
      console.error("Error fetching question:", error);
    }
    setLoading(false);
  };

  const handleSubmit = () => {
    if (!selectedOption) return;

    const isCorrect =
      selectedOption.trim().charAt(0) ===
      questionData[currentQuestionIndex].answer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setFeedback(isCorrect ? "correct" : "incorrect");
    setScoreHistory((prev) => [...prev, isCorrect]);
    setQuestionsAttempted((prev) => prev + 1);
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
    setFeedback(null);
    setExplanationShown(false);
    setSelectedOption("");

    if (currentQuestionIndex == 4) {
      return;
    }
  };

  const handleRestart = () => {
    setQuestionsAttempted(0);
    setCurrentQuestionIndex(0);
    setFeedback(null);
    setExplanationShown(false);
    setQuestionData(null);
    setScore(0);
  };

  useEffect(() => {
    if (questionsAttempted <= 4) {
      return;
    }

    if (questionsAttempted > 4) {
      if (score < 3) {
        setDifficulty("Easy");
      } else if (score > 4) {
        setDifficulty("Difficult");
      } else {
        setDifficulty("Medium");
      }
    }
  }, [questionsAttempted, score]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center my-6">
        <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
        <p className="mt-3 text-gray-600 text-2xl">Fetching questions...</p>
      </div>
    );
  }

  if (questionsAttempted > 4) {
    return (
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Quiz finished</h2>
        <p className="text-xl font-bold text-center">
          Your score : {score}/{questionsAttempted}
        </p>
        <div className=" flex justify-center items-center">
          <button
            className="bg-red-500 text-white p-3 rounded-lg mt-3"
            onClick={handleRestart}
          >
            Restart Quiz!
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-w-[250px]  max-w-screen p-5">
      <div className="bg-white p-8 min-w-3/4 min-h-[50px] rounded-xl">
        <h2 className="font-bold text-2xl text-black text-center mb-5">
          🧠 Adaptive Quiz
        </h2>

        {!questionData && (
          <div className="flex items-center justify-center">
            <button
              className="bg-sky-300 text-white p-5 rounded-lg"
              onClick={() => fetchQuestion(difficulty)}
              disabled={loading}
            >
              Start Quiz
            </button>
          </div>
        )}

        {questionData && (
          <>
            <p className="mb-5 wrap-break-word">
              <strong>Q:</strong> {questionData[currentQuestionIndex].question}
            </p>
            {questionData[currentQuestionIndex].options.map((opt, idx) => (
              <div key={idx}>
                <label>
                  <input
                    type="radio"
                    value={opt}
                    checked={selectedOption === opt}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    disabled={feedback !== null}
                  />
                  <span className="font-bold mr-2">
                    {opt.trim().charAt(0)}.
                  </span>
                  {opt.slice(2)}
                </label>
              </div>
            ))}

            {!feedback && (
              <button
                className={`bg-purple-500 text-yellow-300 p-3 rounded-lg ${
                  selectedOption === ""
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                } `}
                onClick={handleSubmit}
                style={{ marginTop: 10 }}
              >
                Submit
              </button>
            )}

            {feedback === "correct" && (
              <>
                <p className="text-green-400 mb-3">✅ Good job!</p>
                <button
                  className="bg-purple-500 text-yellow-300 p-3 rounded-lg"
                  onClick={handleNext}
                >
                  Next Question
                </button>
              </>
            )}

            {feedback === "incorrect" && (
              <>
                <p className="text-red-500 mb-5">❌ Incorrect</p>
                {!explanationShown ? (
                  <div className="flex items-center space-x-3">
                    <div>
                      <button
                        className="bg-purple-500 text-yellow-300 p-3 rounded-lg"
                        onClick={() => setExplanationShown(true)}
                      >
                        Show Explanation
                      </button>
                    </div>

                    <div>
                      <button
                        className="bg-purple-500 text-yellow-300 p-3 rounded-lg"
                        onClick={handleNext}
                      >
                        Next Question
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="gap-6">
                    <div className="p-3 mb-3 bg-yellow-200 border-b-red-400 rounded-lg">
                      <p className="  text-black ">
                        <strong>Explanation:</strong>{" "}
                        <span>
                          Correct Answer :{" "}
                          {questionData[currentQuestionIndex].answer}
                        </span>
                      </p>
                      <p>{questionData[currentQuestionIndex].explanation}</p>
                    </div>
                    <button
                      className="bg-purple-500 text-yellow-300 p-3 rounded-lg"
                      onClick={handleNext}
                    >
                      Next Question
                    </button>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
