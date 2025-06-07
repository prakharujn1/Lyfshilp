import React from "react";
import { Link } from "react-router-dom";

const modules = [
  {
    title: "Module 1: What Is Law?",
    desc: "Understand how laws work and why they matter in your life.",
    path: "/law/notes/module-1",
  },
  {
    title: "Module 2: You Have Rights Too!",
    desc: "Explore the rights every child has—and the responsibilities that come with them.",
    path: "/law/notes/module-2",
  },
  {
    title: "Module 3: Laws That Protect Children",
    desc: "Learn about special laws made to keep children safe from harm and injustice.",
    path: "/law/notes/module-3",
  },
  {
    title: "Module 4: Law in Daily Life",
    desc: "Discover everyday rules—from traffic to shopping—that make society work.",
    path: "/law/notes/module-4",
  },
  {
    title: "Module 5: Digital World, Real Laws",
    desc: "Stay safe online by knowing what’s legal—and what’s not.",
    path: "/law/notes/module-5",
  },
  {
    title: "Module 6: Courts, Justice, and You",
    desc: "Peek inside the justice system and how you can be part of positive change.",
    path: "/law/notes/module-6",
  },
];

const LegalAwarenessNotes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 px-4 py-12">
      {/* Introductory Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-12 flex flex-col md:flex-row gap-10 items-center mb-16">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            alt="Legal Awareness"
            className="rounded-2xl shadow-lg w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-navy-900 mb-4 leading-tight">
            Legal Awareness with{" "}
            <span className="text-blue-600">Edumaniax</span>
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Welcome to the <strong>Legal Awareness Module</strong> – a crucial
            step toward empowering yourself with knowledge about your rights,
            responsibilities, and the legal frameworks that shape society.
          </p>
          <p className="text-gray-600 mb-6">
            This module is designed to make legal concepts approachable and
            practical. Whether it's understanding basic laws, knowing your
            rights in everyday situations, or becoming aware of legal
            remedies—you’ll gain real-world insights and tools to become a more
            informed citizen.
          </p>
          <ul className="list-disc list-inside text-left text-gray-700 mb-6">
            <li>Know your Fundamental Rights & Duties</li>
            <li>Learn about cyber laws, consumer rights, and workplace law</li>
            <li>Understand how to seek legal aid when needed</li>
          </ul>
          <a
            href="#modules"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Explore Modules
          </a>
        </div>
      </div>

      {/* Modules Section */}
      <div id="modules" className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Choose a Module to Begin
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod, idx) => (
            <Link
              to={mod.path}
              key={idx}
              className="block bg-white shadow-md rounded-xl p-6 hover:shadow-xl hover:scale-[1.02] transition duration-300 cursor-pointer border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {mod.title}
              </h3>
              <p className="text-gray-600 text-sm">{mod.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalAwarenessNotes;
