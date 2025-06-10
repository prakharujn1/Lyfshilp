import React from "react";
import { Link } from "react-router-dom";

const modules = [
  {
    title: "Module 1: What is Artificial Intelligence (AI)?",
    path: "/computer/notes/module-1",
  },
  {
    title: "Module 2: How Does AI Work?",
    path: "/computer/notes/module-2",
  },
  {
    title: "Module 3: Types and Uses of AI",
    path: "/computer/notes/module-3",
  },
  {
    title: "Module 4: What AI Can and Can't Do",
    path: "/computer/notes/module-4",
  },
  {
    title: "Module 5: AI Words You Should Know",
    path: "/computer/notes/module-5",
  },
  {
    title: "Module 6: Let's Build an AI!",
    path: "/computer/notes/module-6",
  },
  {
    title: "Module 7: Test Your AI Skills (Comprehensive Quiz)",
    path: "/computer/notes/module-7",
  },
  {
    title: "Module 8: Importance of Using AI Judiciously",
    path: "/computer/notes/module-8",
  },
];

const ComputerNotes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-10">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 mb-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 leading-snug">
            Unlock the Power of <span className="text-blue-500">AI</span>
            <br /> with <span className="text-pink-500">Computer Notes</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            Designed especially for students of <strong>Class 6 to 8</strong>,
            our AI-powered computer notes simplify complex topics like coding,
            AI, robotics, and more in fun, interactive ways!
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
            <li>Understand Artificial Intelligence in a kid-friendly way</li>
            <li>Explore basic programming concepts visually</li>
            <li>Interactive notes, quizzes, and mini-projects</li>
          </ul>
        </div>
        <div className="flex-1">
          <img
            src="https://images.pexels.com/photos/8294826/pexels-photo-8294826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="AI Learning for Kids"
            className="w-full max-w-md mx-auto rounded-3xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Module Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {modules.map((mod, index) => (
          <Link
            to={mod.path}
            key={index}
            className="bg-white hover:bg-indigo-50 shadow-lg rounded-2xl p-6 transition duration-300 border border-indigo-100"
          >
            <div className="text-indigo-700 font-semibold text-lg mb-2">
              📘 {mod.title}
            </div>
            <p className="text-gray-600 text-sm">
              Click to explore this module in detail.
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ComputerNotes;
