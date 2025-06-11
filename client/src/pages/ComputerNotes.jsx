
import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";


import Section1dm from "../pages/CompNotes/WhatIsAi";
import Section2dm from "../pages/CompNotes/WorkOfAi";
import Section3dm from "../pages/CompNotes/TypesAndUseOfAi";
import Section4dm from "../pages/CompNotes/WhatCantAiDo";
import Section5dm from "../pages/CompNotes/ImpAIWords";
import Section6dm from "../pages/CompNotes/BuildAi";
import Section7dm from "../pages/CompNotes/TestUrSkills";
import Section8dm from "../pages/CompNotes/ImportanceOfAi";


const notesSidebar = [
  { id: "1", title: "Section 1" },
  { id: "2", title: "Section 2" },
  { id: "3", title: "Section 3" },
  { id: "4", title: "Section 4" },
  { id: "5", title: "Section 5" },
  { id: "6", title: "Section 6" },
  { id: "7", title: "Section 7" },
  { id: "8", title: "Section 8" },
];


const ComputerNotes = () => {
  const [activeId, setActiveId] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const topicRefs = useRef({});
  const visibleTopics = useRef(new Set());

  useEffect(() => {
    const container = document.getElementById("main-content");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visibleTopics.current.add(id);
          } else {
            visibleTopics.current.delete(id);
          }
        });

        const sorted = Array.from(visibleTopics.current).sort((a, b) => {
          const aTop = topicRefs.current[a]?.getBoundingClientRect().top ?? 0;
          const bTop = topicRefs.current[b]?.getBoundingClientRect().top ?? 0;
          return aTop - bTop;
        });

        if (sorted.length > 0) {
          setActiveId(sorted[0]);
        }
      },
      { root: container, threshold: 0.1 }
    );

    Object.entries(topicRefs.current).forEach(([id, el]) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = document.querySelector(`[data-scroll-id="${activeId}"]`);
    if (el) {
      el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [activeId]);

  const scrollTo = (id) => {
    topicRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setShowSidebar(false);
  };

  return (
    <div className="flex h-screen overflow-hidden relative pt-[4.5rem] md:pt-0">
      {/* Toggle Button */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="md:hidden fixed top-[4.5rem] left-4 z-40 p-2 bg-blue-600 text-white rounded shadow-lg"
      >
        <Menu />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-30 top-[4.5rem] md:top-0 left-0 h-full md:h-auto w-64 bg-gray-100 p-4 border-r overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          showSidebar ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h2 className="text-lg font-bold text-gray-800 mb-4">Computers</h2>
        <ul className="space-y-2">
          {notesSidebar.map((section) => (
            <li
              key={section.id}
              data-scroll-id={section.id}
              className={`cursor-pointer px-3 py-2 rounded transition text-sm ${
                activeId === section.id
                  ? "bg-blue-100 text-blue-700 font-semibold border-l-4 border-blue-500"
                  : "hover:bg-gray-200 text-gray-700"
              }`}
              onClick={() => scrollTo(section.id)}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main
        id="main-content"
        className="flex-1 overflow-y-auto p-4 md:p-6 space-y-10 scroll-smooth"
      >
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

        <div className="space-y-10">
          <div className="overflow-x-auto">
            <Section1dm topicRefs={topicRefs} />
          </div>
          <div className="overflow-x-auto">
            <Section2dm topicRefs={topicRefs} />
          </div>
          <div className="overflow-x-auto">
            <Section3dm topicRefs={topicRefs} />
          </div>
          <div className="overflow-x-auto">
            <Section4dm topicRefs={topicRefs} />
          </div>
          <div className="overflow-x-auto">
            <Section5dm topicRefs={topicRefs} />
          </div>
          <div className="overflow-x-auto">
            <Section6dm topicRefs={topicRefs} />
          </div>
          <div className="overflow-x-auto">
            <Section7dm topicRefs={topicRefs} />
          </div>
          <div className="overflow-x-auto">
            <Section8dm topicRefs={topicRefs} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ComputerNotes;
