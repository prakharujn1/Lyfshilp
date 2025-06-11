import React from "react";

const TestUrSkills = ({ topicRefs }) => {
  return (
    <div
      id="7"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["7"] = el;
        }
      }}
      className="mb-10"
    >
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white p-6 text-gray-800">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-yellow-700 text-center">
          🧠 Module 7: Test Your AI Skills (Comprehensive Exercises)
        </h1>

        <section className="bg-white p-6 rounded-2xl shadow-lg space-y-6 border border-yellow-200">
          <h2 className="text-2xl font-semibold text-yellow-600">
            📝 Knowledge Check - Questions
          </h2>

          <div className="space-y-4 text-lg">
            <p>
              <strong>
                1. What does AI stand for, and why is it called "artificial"?
              </strong>
              <br />
              ____________________________________________ <br />
              <span className="text-gray-500">
                (Think: What makes it different from human intelligence?)
              </span>
            </p>
            <p>
              <strong>
                2. Name three AI applications you used this week and explain how
                they helped you:
              </strong>
              <br />
              ____________________________________________ <br />
              <span className="text-gray-500">
                (Think: Your phone, apps, games, websites)
              </span>
            </p>
            <p>
              <strong>
                3. Can AI feel emotions like happiness or sadness? Explain:
              </strong>
              <br />
              ____________________________________________ <br />
              <span className="text-gray-500">
                (Think: Example and how AI works)
              </span>
            </p>
            <p>
              <strong>
                4. Explain how Machine Learning works using your handwriting as
                an example:
              </strong>
              <br />
              ____________________________________________ <br />
              <span className="text-gray-500">
                (Think: Training, data, improvement)
              </span>
            </p>
            <p>
              <strong>
                5. If you had an AI friend, what would it do for you?
              </strong>
              <br />
              ____________________________________________ <br />
              <span className="text-gray-500">
                (Think: Features and realistic possibilities)
              </span>
            </p>
            <p>
              <strong>
                6. One good and one concerning thing about AI becoming more
                common:
              </strong>
              <br />
              ____________________________________________ <br />
              <span className="text-gray-500">
                (Think: Benefits and problems)
              </span>
            </p>
            <p>
              <strong>
                7. How might AI change schools and learning in the next 5 years?
              </strong>
              <br />
              ____________________________________________ <br />
              <span className="text-gray-500">
                (Think: What’s already happening and what’s next)
              </span>
            </p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-lg space-y-4 border border-blue-200">
          <h2 className="text-2xl font-semibold text-blue-600">
            🎯 Practical Application Tasks
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>
              <strong>AI Detective:</strong> Find 5 AI features on your
              phone/computer. What does each one do?
            </li>
            <li>
              <strong>AI Comparison:</strong> Compare two AI systems (e.g., Siri
              vs. Google Assistant). Which is better and why?
            </li>
            <li>
              <strong>AI Problem Solving:</strong> Choose a problem in
              school/community and design a simple AI to solve it.
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-lg space-y-6 border border-purple-200">
          <h2 className="text-2xl font-semibold text-purple-600">
            🏆 Mastery Levels
          </h2>
          <div className="text-lg space-y-2">
            <p>
              🥉 <strong>Bronze Level (Basic Understanding):</strong>
              <br />
              • Can identify AI in daily life
              <br />
              • Understands basic AI concepts
              <br />• Knows the difference between AI and regular computers
            </p>
            <p>
              🥈 <strong>Silver Level (Applied Knowledge):</strong>
              <br />
              • Explains how AI learns and improves
              <br />
              • Compares different types of AI
              <br />• Designs simple AI solutions
            </p>
            <p>
              🥇 <strong>Gold Level (Advanced Thinking):</strong>
              <br />
              • Analyzes AI’s impact on society
              <br />
              • Thinks critically about limitations and ethics
              <br />• Creates innovative AI concepts
            </p>
            <p>
              💎 <strong>Diamond Level (AI Expert):</strong>
              <br />
              • Connects AI to real-world applications
              <br />
              • Evaluates AI solutions ethically and effectively
              <br />• Shows deep understanding of AI’s future potential
            </p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-lg space-y-4 border border-green-200">
          <h2 className="text-2xl font-semibold text-green-600">
            🎊 Celebration Activity
          </h2>
          <p className="text-lg">
            <strong>AI Showcase:</strong> Present your Module 6 AI project to
            classmates, friends, or family. Explain:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>What problem it solves</li>
            <li>How it works</li>
            <li>Why it’s useful</li>
          </ul>
        </section>

        <div className="text-center text-2xl font-bold text-yellow-700 mt-10">
          🏅 Final Badge Earned:{" "}
          <span className="text-yellow-900">🏆 AI Master Champion</span>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default TestUrSkills;
