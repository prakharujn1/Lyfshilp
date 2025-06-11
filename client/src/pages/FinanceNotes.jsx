// import { useEffect, useRef, useState } from "react";
// import { Menu } from "lucide-react";

// import Section1 from "../FinanceDesignForNotes/Section-1/Section1";
// import Section2 from "../FinanceDesignForNotes/Section-2/Section2";
// import Section3 from "../FinanceDesignForNotes/Section-3/Section3";
// import Section4 from "../FinanceDesignForNotes/Section-4/Section4";
// import Section5 from "../FinanceDesignForNotes/Section-5/Section5";
// import Section6 from "../FinanceDesignForNotes/Section-6/Section6";

// const notesSidebar = [
//   {
//     id: "section-1",
//     title: "Section 1: Banking Basics",
//     topics: [
//       { id: "1-1", title: "Introduction" },
//       { id: "1-2", title: "Banking Basics" },
//       { id: "1-3", title: "Account Types" },
//       { id: "1-4", title: "Digital Tools" },
//       { id: "1-5", title: "Comparison" },
//       { id: "1-6", title: "Example" },
//       { id: "1-7", title: "Reflection" },
//     ],
//   },
//   {
//     id: "section-2",
//     title: "Section 2: Budgeting",
//     topics: [
//       { id: "2-1", title: "Header" },
//       { id: "2-2", title: "Intro" },
//       { id: "2-3", title: "Budget Formula" },
//       { id: "2-4", title: "Example Budget" },
//       { id: "2-5", title: "Budget Rule" },
//       { id: "2-6", title: "Budget Tools" },
//       { id: "2-7", title: "Scenario" },
//       { id: "2-8", title: "Reflection" },
//     ],
//   },
//   {
//     id: "section-3",
//     title: "Section 3: Credit",
//     topics: [
//       { id: "3-1", title: "Header" },
//       { id: "3-2", title: "What is Credit?" },
//       { id: "3-3", title: "Example" },
//       { id: "3-4", title: "Types of Credit" },
//       { id: "3-5", title: "Tricky Credit" },
//       { id: "3-6", title: "Credit Score" },
//       { id: "3-7", title: "Reflection" },
//     ],
//   },
//   {
//     id: "section-4",
//     title: "Section 4: Stock Market",
//     topics: [
//       { id: "4-1", title: "Header" },
//       { id: "4-2", title: "Intro" },
//       { id: "4-3", title: "Stock Life Example" },
//       { id: "4-4", title: "Where to Buy" },
//       { id: "4-5", title: "Price Fluctuation" },
//       { id: "4-6", title: "Gambling vs Stock" },
//       { id: "4-7", title: "Key Terms" },
//       { id: "4-8", title: "Reflection" },
//     ],
//   },
//   {
//     id: "section-5",
//     title: "Section 5: Investing",
//     topics: [
//       { id: "5-1", title: "Intro" },
//       { id: "5-2", title: "Example" },
//       { id: "5-3", title: "Compound Interest" },
//       { id: "5-4", title: "Table" },
//       { id: "5-5", title: "Why Time Matters" },
//       { id: "5-6", title: "Tips" },
//       { id: "5-7", title: "Reflection" },
//     ],
//   },
//   {
//     id: "section-6",
//     title: "Section 6: Spending Habits",
//     topics: [
//       { id: "6-1", title: "Spending Intro" },
//       { id: "6-2", title: "Example" },
//       { id: "6-3", title: "Wants vs Needs" },
//       { id: "6-4", title: "Questions" },
//       { id: "6-5", title: "Tips" },
//       { id: "6-6", title: "Bad Habits" },
//       { id: "6-7", title: "Reflection" },
//     ],
//   },
// ];

// const FinanceFullNotes = () => {
//   const [activeId, setActiveId] = useState(null);
//   const [showSidebar, setShowSidebar] = useState(false);
//   const topicRefs = useRef({});
//   const visibleTopics = useRef(new Set());

//   useEffect(() => {
//     const container = document.getElementById("main-content");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const id = entry.target.id;
//           if (entry.isIntersecting) {
//             visibleTopics.current.add(id);
//           } else {
//             visibleTopics.current.delete(id);
//           }
//         });

//         const sorted = Array.from(visibleTopics.current).sort((a, b) => {
//           const aTop = topicRefs.current[a]?.getBoundingClientRect().top ?? 0;
//           const bTop = topicRefs.current[b]?.getBoundingClientRect().top ?? 0;
//           return aTop - bTop;
//         });

//         if (sorted.length > 0) {
//           setActiveId(sorted[0]);
//         }
//       },
//       { root: container, threshold: 0 }
//     );

//     Object.entries(topicRefs.current).forEach(([id, el]) => {
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const el = document.querySelector(`[data-scroll-id="${activeId}"]`);
//     if (el) {
//       el.scrollIntoView({ block: "nearest", behavior: "smooth" });
//     }
//   }, [activeId]);

//   const scrollTo = (id) => {
//     topicRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
//     setShowSidebar(false);
//   };

//   return (
//     <div className="flex h-screen overflow-hidden relative pt-[4.5rem] md:pt-0">

//       {/* Toggle Button */}
//       <button
//         onClick={() => setShowSidebar(!showSidebar)}
//         className="md:hidden fixed top-[4.5rem] left-4 z-40 p-2 bg-blue-600 text-white rounded shadow-lg"
//       >
//         <Menu />
//       </button>

//       {/* Sidebar */}
//       <aside
//         className={`fixed md:static z-30 top-[4.5rem] md:top-0 left-0 h-full md:h-auto w-64 bg-gray-100 p-4 border-r overflow-y-auto transform transition-transform duration-300 ease-in-out ${
//           showSidebar ? "translate-x-0" : "-translate-x-full md:translate-x-0"
//         }`}
//       >
//         {notesSidebar.map((section) => (
//           <div key={section.id} className="mb-4">
//             <h2 className="text-md font-bold text-gray-800">{section.title}</h2>
//             <ul className="ml-2 mt-1 space-y-1">
//               {section.topics.map((topic) => (
//                 <li
//                   key={topic.id}
//                   data-scroll-id={topic.id}
//                   className={`text-sm cursor-pointer transition-all duration-300 px-2 py-1 rounded ${
//                     activeId === topic.id
//                       ? "text-blue-700 font-semibold bg-blue-100 border-l-4 border-blue-500"
//                       : "text-gray-700 hover:bg-gray-200"
//                   }`}
//                   onClick={() => scrollTo(topic.id)}
//                 >
//                   • {topic.title}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </aside>

//       {/* Main Content */}
//       <main
//         id="main-content"
//         className="flex-1 overflow-y-auto p-4 md:p-6 space-y-10 scroll-smooth"
//       >
//         <div className="space-y-10">
//           <div className="overflow-x-auto"><Section1 topicRefs={topicRefs} /></div>
//           <div className="overflow-x-auto"><Section2 topicRefs={topicRefs} /></div>
//           <div className="overflow-x-auto"><Section3 topicRefs={topicRefs} /></div>
//           <div className="overflow-x-auto"><Section4 topicRefs={topicRefs} /></div>
//           <div className="overflow-x-auto"><Section5 topicRefs={topicRefs} /></div>
//           <div className="overflow-x-auto"><Section6 topicRefs={topicRefs} /></div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default FinanceFullNotes;


import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";

import Section1dm from "../FinanceDesignForNotes/Section-1/Section1";
import Section2dm from "../FinanceDesignForNotes/Section-2/Section2";
import Section3dm from "../FinanceDesignForNotes/Section-3/Section3";
import Section4dm from "../FinanceDesignForNotes/Section-4/Section4";
import Section5dm from "../FinanceDesignForNotes/Section-5/Section5";
import Section6dm from "../FinanceDesignForNotes/Section-6/Section6";


const notesSidebar = [
  { id: "1", title: "Section 1" },
  { id: "2", title: "Section 2" },
  { id: "3", title: "Section 3" },
  { id: "4", title: "Section 4" },
  { id: "5", title: "Section 5" },
  { id: "6", title: "Section 6" },
  
];

const FinanceFullNotes = () => {
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
        <h2 className="text-lg font-bold text-gray-800 mb-4">Finance</h2>
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
        

        <div className="space-y-10">
          <div className="overflow-x-auto"><Section1dm topicRefs={topicRefs} /></div>
          <div className="overflow-x-auto"><Section2dm topicRefs={topicRefs} /></div>
          <div className="overflow-x-auto"><Section3dm topicRefs={topicRefs} /></div>
          <div className="overflow-x-auto"><Section4dm topicRefs={topicRefs} /></div>
          <div className="overflow-x-auto"><Section5dm topicRefs={topicRefs} /></div>
          <div className="overflow-x-auto"><Section6dm topicRefs={topicRefs} /></div>
        </div>
      </main>
    </div>
  );
};

export default FinanceFullNotes;

