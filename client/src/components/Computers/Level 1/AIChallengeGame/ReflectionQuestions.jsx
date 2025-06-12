import React, { useState } from 'react';

export default function ReflectionQuestions() {
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (answers.q1 && answers.q2 && answers.q3) {
      setSubmitted(true);
    } else {
      alert('Please answer all questions before submitting.');
    }
  };

  return (
    <div className="mt-12 bg-white rounded-xl shadow-lg p-6 border-2 border-blue-200 space-y-6">
      <h2 className="text-2xl font-bold text-blue-600">🧠 Reflection Time!</h2>

      {!submitted ? (
        <div className="space-y-4 text-lg text-gray-800">
          <div>
            <label className="block mb-1 font-semibold">🤔 Which AI tool do you use the most?</label>
            <input
              type="text"
              name="q1"
              value={answers.q1}
              onChange={handleChange}
              className="w-full p-2 border border-blue-300 rounded"
              placeholder="E.g., Smartphone, Alexa..."
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">😮 Which one surprises you the most?</label>
            <input
              type="text"
              name="q2"
              value={answers.q2}
              onChange={handleChange}
              className="w-full p-2 border border-blue-300 rounded"
              placeholder="E.g., Smart TV suggesting shows..."
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">📵 Can you live without AI for a day? Why or why not?</label>
            <textarea
              name="q3"
              value={answers.q3}
              onChange={handleChange}
              className="w-full p-2 border border-blue-300 rounded"
              placeholder="Explain in your own words..."
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-6 py-2 rounded-full transition-all"
          >
            🚀 Submit Answers
          </button>
        </div>
      ) : (
        <div className="text-center text-xl text-green-700 font-semibold space-y-4">
          <p>🎉 Great job thinking about AI!</p>
          <p>🧑‍🏫 You're becoming an AI explorer!</p>
          <p>💡 Keep asking smart questions and keep learning!</p>
          <div className="text-6xl animate-bounce">🥳</div>
        </div>
      )}
    </div>
  );
}
