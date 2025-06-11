
import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";

import Module1 from "../pages/LegalAwareness/Module1";
import Module2 from "../pages/LegalAwareness/Module2";
import Module3 from "../pages/LegalAwareness/Module3";
import Module4 from "../pages/LegalAwareness/Module4";
import Module5 from "../pages/LegalAwareness/Module5";
import Module6 from "../pages/LegalAwareness/Module6";

const notesSidebar = [
  { id: "1", title: "Module 1" },
  { id: "2", title: "Module 2" },
  { id: "3", title: "Module 3" },
  { id: "4", title: "Module 4" },
  { id: "5", title: "Module 5" },
  { id: "6", title: "Module 6" },
];

const LegalAwarenessNotes = () => {
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
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          Fundamentals of Law
        </h2>
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
              remedies—you’ll gain real-world insights and tools to become a
              more informed citizen.
            </p>
            <ul className="list-disc list-inside text-left text-gray-700 mb-6">
              <li>Know your Fundamental Rights & Duties</li>
              <li>
                Learn about cyber laws, consumer rights, and workplace law
              </li>
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

        <div className="space-y-10">
          <div className="overflow-x-auto">
            <Module1 topicRefs={topicRefs} />
          </div>
          <div className="overflow-x-auto">
            <Module2 topicRefs={topicRefs} />
          </div>
          <div className="overflow-x-auto">
            <Module3 topicRefs={topicRefs} />
          </div>
          <div className="overflow-x-auto">
            <Module4 topicRefs={topicRefs} />
          </div>
          <div className="overflow-x-auto">
            <Module5 topicRefs={topicRefs} />
          </div>
          <div className="overflow-x-auto">
            <Module6 topicRefs={topicRefs} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LegalAwarenessNotes;
