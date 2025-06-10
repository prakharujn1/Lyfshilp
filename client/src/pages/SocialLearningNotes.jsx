import React from "react";
import { Link } from "react-router-dom";

const modules = [
  {
    title: "Module 1: Knowing Myself",
    description:
      "Understand your feelings, thoughts, and strengths. Learn to express who you are with confidence.",
    path: "/social-learning/module-1",
  },
  {
    title: "Module 2: Building Positive Relationships",
    description:
      "Learn how to make friends, be respectful, show kindness, and work well with others.",
    path: "/social-learning/module-2",
  },
  {
    title: "Module 3: Handling Stress and Conflict",
    description:
      "Find healthy ways to stay calm during stressful times and resolve disagreements peacefully.",
    path: "/social-learning/module-3",
  },
  {
    title: "Module 4: Self-Discipline and Setting Goals",
    description:
      "Learn how to manage your time, stay focused, and set goals to achieve your dreams.",
    path: "/social-learning/module-4",
  },
  {
    title: "Module 5: Decision Making and Responsibility",
    description:
      "Make good choices and understand the importance of being responsible for your actions.",
    path: "/social-learning/module-5",
  },
];

const SocialLearningNotes = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-8 space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
        Social Learning – Notes for Classes 6 to 8
      </h1>

      {/* Introduction */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          🌍 What is Social Learning?
        </h2>
        <p className="text-gray-700">
          Social learning is how we learn by watching others. We observe,
          listen, imitate, and understand things through our interactions with
          family, friends, teachers, and society.
        </p>
      </section>

      {/* Importance */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          💡 Why is Social Learning Important?
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Helps us learn manners and good behavior.</li>
          <li>Builds strong relationships with others.</li>
          <li>Encourages teamwork and cooperation.</li>
          <li>Improves communication and problem-solving skills.</li>
        </ul>
      </section>

      {/* Examples */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          🧠 Examples of Social Learning
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Learning to say “please” and “thank you” by watching parents.</li>
          <li>Helping classmates because your teacher praises kindness.</li>
          <li>Following school rules after seeing others respect them.</li>
          <li>Playing fair in games by watching friends take turns.</li>
        </ul>
      </section>

      {/* Key Concepts */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          📚 Key Concepts
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            <strong>Observation:</strong> Watching others to learn behavior.
          </li>
          <li>
            <strong>Imitation:</strong> Copying actions and words of others.
          </li>
          <li>
            <strong>Role Models:</strong> People we look up to and learn from.
          </li>
          <li>
            <strong>Reinforcement:</strong> Rewards or praise that make us
            repeat good actions.
          </li>
        </ul>
      </section>

      {/* How to Practice */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          🚀 How Can You Practice Social Learning?
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Be respectful to others.</li>
          <li>Help classmates and share things.</li>
          <li>Learn from mistakes and ask questions.</li>
          <li>Follow good examples from teachers, parents, and friends.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          📘 Modules Covered
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module, index) => (
            <Link
              to={module.path}
              key={index}
              className="block border border-gray-200 shadow-sm rounded-xl p-5 bg-blue-50 hover:shadow-md hover:bg-blue-100 transition"
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {module.title}
              </h3>
              <p className="text-gray-700">{module.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SocialLearningNotes;
