import React from "react";
import { useNavigate } from "react-router-dom";

const modules = [
  {
    title: "Listen to Understand",
    description:
      "Learn how real listening—not just hearing—builds stronger connections.",
    image: "https://cdn-icons-png.flaticon.com/512/2920/2920259.png",
    path: "listen-to-understand",
  },
  {
    title: "Feelings Explorer",
    description:
      "Understand emotions and how to express them without causing conflict.",
    image: "https://cdn-icons-png.flaticon.com/512/4089/4089717.png",
    path: "feelings-explorer",
  },
  {
    title: "Speak with Purpose",
    description:
      "Use words thoughtfully to encourage, express, and solve problems.",
    image: "https://cdn-icons-png.flaticon.com/512/4956/4956290.png",
    path: "speak-with-purpose",
  },
  {
    title: "Fixing Conflicts the Smart Way",
    description:
      "Discover peaceful ways to resolve disagreements and move forward.",
    image: "https://cdn-icons-png.flaticon.com/512/5357/5357518.png",
    path: "conflict-resolution",
  },
  {
    title: "Communicating Online and in Real Life",
    description:
      "Learn how communication changes across platforms—and how to stay respectful everywhere.",
    image: "https://cdn-icons-png.flaticon.com/512/706/706830.png",
    path: "online-vs-real",
  },
];

const CommunicationsNotes = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 md:p-10 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Communication Skills
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl">
          Great communication starts with listening and ends with understanding.
          This Edumaniax module helps you navigate conversations in the real and
          digital world—with confidence, kindness, and clarity.
        </p>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer"
            onClick={() => navigate(`/communications/notes/${mod.path}`)}
          >
            <img
              src={mod.image}
              alt={mod.title}
              className="w-20 h-20 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-center text-blue-600">
              {mod.title}
            </h2>
            <p className="text-gray-600 text-center mt-2">{mod.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunicationsNotes;
