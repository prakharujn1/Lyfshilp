// import React from "react";
// import { useNavigate } from "react-router-dom";

// const modules = [
//   {
//     title: "Listen to Understand",
//     description:
//       "Learn how real listening—not just hearing—builds stronger connections.",
//     image: "https://cdn-icons-png.flaticon.com/512/2920/2920259.png",
//     path: "listen-to-understand",
//   },
//   {
//     title: "Feelings Explorer",
//     description:
//       "Understand emotions and how to express them without causing conflict.",
//     image: "https://cdn-icons-png.flaticon.com/512/4089/4089717.png",
//     path: "feelings-explorer",
//   },
//   {
//     title: "Speak with Purpose",
//     description:
//       "Use words thoughtfully to encourage, express, and solve problems.",
//     image: "https://cdn-icons-png.flaticon.com/512/4956/4956290.png",
//     path: "speak-with-purpose",
//   },
//   {
//     title: "Fixing Conflicts the Smart Way",
//     description:
//       "Discover peaceful ways to resolve disagreements and move forward.",
//     image: "https://cdn-icons-png.flaticon.com/512/5357/5357518.png",
//     path: "conflict-resolution",
//   },
//   {
//     title: "Communicating Online and in Real Life",
//     description:
//       "Learn how communication changes across platforms—and how to stay respectful everywhere.",
//     image: "https://cdn-icons-png.flaticon.com/512/706/706830.png",
//     path: "online-vs-real",
//   },
// ];

// const CommunicationsNotes = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="p-4 md:p-10 bg-gray-50 min-h-screen">
//       {/* Hero Section */}
//       <div className="text-center mb-10">
//         <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
//           Communication Skills
//         </h1>
//         <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl">
//           Great communication starts with listening and ends with understanding.
//           This Edumaniax module helps you navigate conversations in the real and
//           digital world—with confidence, kindness, and clarity.
//         </p>
//       </div>

//       {/* Modules Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {modules.map((mod, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer"
//             onClick={() => navigate(`/communications/notes/${mod.path}`)}
//           >
//             <img
//               src={mod.image}
//               alt={mod.title}
//               className="w-20 h-20 mx-auto mb-4"
//             />
//             <h2 className="text-xl font-semibold text-center text-blue-600">
//               {mod.title}
//             </h2>
//             <p className="text-gray-600 text-center mt-2">{mod.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CommunicationsNotes;



import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";

import Mod1 from "../pages/CommunicationNotes/Mod1";
import Mod2 from "../pages/CommunicationNotes/Mod2";
import Mod3 from "../pages/CommunicationNotes/Mod3";
import Mod4 from "../pages/CommunicationNotes/Mod4";
import Mod5 from "../pages/CommunicationNotes/Mod5";

const notesSidebar = [
  { id: "1", title: "Section 1" },
  { id: "2", title: "Section 2" },
  { id: "3", title: "Section 3" },
  { id: "4", title: "Section 4" },
  { id: "5", title: "Section 5" },
  
];

const CommunicationsNotes = () => {
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
    topicRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
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
        <h2 className="text-lg font-bold text-gray-800 mb-4">Communication</h2>
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

        <div className="space-y-10">
          <div className="overflow-x-auto"><Mod1 topicRefs={topicRefs} /></div>
          <div className="overflow-x-auto"><Mod2 topicRefs={topicRefs} /></div>
          <div className="overflow-x-auto"><Mod3 topicRefs={topicRefs} /></div>
          <div className="overflow-x-auto"><Mod4 topicRefs={topicRefs} /></div>
          <div className="overflow-x-auto"><Mod5 topicRefs={topicRefs} /></div>
          
        </div>
      </main>
    </div>
  );
};

export default CommunicationsNotes;

