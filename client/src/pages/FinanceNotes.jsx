import { useEffect, useRef, useState } from "react";

import Section1 from "../FinanceDesignForNotes/Section-1";
import Section2 from "../FinanceDesignForNotes/Section-2";
import Section3 from "../FinanceDesignForNotes/Section-3";
import Section4 from "../FinanceDesignForNotes/Section-4";
import Section5 from "../FinanceDesignForNotes/Section-5";
import Section6 from "../FinanceDesignForNotes/Section-6";

const notesSidebar = [
  {
    id: "section-1",
    title: "Section 1: Banking Basics",
    topics: [
      { id: "1-1", title: "Introduction" },
      { id: "1-2", title: "Banking Basics" },
      { id: "1-3", title: "Account Types" },
      { id: "1-4", title: "Digital Tools" },
      { id: "1-5", title: "Comparison" },
      { id: "1-6", title: "Example" },
      { id: "1-7", title: "Reflection" },
    ],
  },
  {
    id: "section-2",
    title: "Section 2: Budgeting",
    topics: [
      { id: "2-1", title: "Intro" },
      { id: "2-2", title: "Header" },
      { id: "2-3", title: "Budget Rule" },
      { id: "2-4", title: "Budget Formula" },
      { id: "2-5", title: "Budget Tools" },
      { id: "2-6", title: "Example Budget" },
      { id: "2-7", title: "Scenario" },
      { id: "2-8", title: "Reflection" },
    ],
  },
  {
    id: "section-3",
    title: "Section 3: Credit",
    topics: [
      { id: "3-1", title: "Header" },
      { id: "3-2", title: "What is Credit?" },
      { id: "3-3", title: "Types of Credit" },
      { id: "3-4", title: "Credit Score" },
      { id: "3-5", title: "Tricky Credit" },
      { id: "3-6", title: "Example" },
      { id: "3-7", title: "Reflection" },
    ],
  },
  {
    id: "section-4",
    title: "Section 4: Stock Market",
    topics: [
      { id: "4-1", title: "Header" },
      { id: "4-2", title: "Intro" },
      { id: "4-3", title: "Key Terms" },
      { id: "4-4", title: "Price Fluctuation" },
      { id: "4-5", title: "Stock Life Example" },
      { id: "4-6", title: "Gambling vs Stock" },
      { id: "4-7", title: "Where to Buy" },
      { id: "4-8", title: "Reflection" },
    ],
  },
  {
    id: "section-5",
    title: "Section 5: Investing",
    topics: [
      { id: "5-1", title: "Intro" },
      { id: "5-2", title: "Why Time Matters" },
      { id: "5-3", title: "Compound Interest" },
      { id: "5-4", title: "Example" },
      { id: "5-5", title: "Table" },
      { id: "5-6", title: "Tips" },
      { id: "5-7", title: "Reflection" },
    ],
  },
  {
    id: "section-6",
    title: "Section 6: Spending Habits",
    topics: [
      { id: "6-1", title: "Spending Intro" },
      { id: "6-2", title: "Wants vs Needs" },
      { id: "6-3", title: "Tips" },
      { id: "6-4", title: "Bad Habits" },
      { id: "6-5", title: "Example" },
      { id: "6-6", title: "Questions" },
      { id: "6-7", title: "Reflection" },
    ],
  },
];

const FinanceFullNotes = () => {
  const [activeId, setActiveId] = useState(null);
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

        // sort visible topics by vertical position
        const sorted = Array.from(visibleTopics.current).sort((a, b) => {
          const aTop = topicRefs.current[a]?.getBoundingClientRect().top ?? 0;
          const bTop = topicRefs.current[b]?.getBoundingClientRect().top ?? 0;
          return aTop - bTop;
        });

        if (sorted.length > 0) {
          setActiveId(sorted[0]);
        }
      },
      {
        root: container,
        threshold: 0.1,
      }
    );

    Object.entries(topicRefs.current).forEach(([id, el]) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    topicRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4 overflow-y-auto sticky top-0 h-screen border-r">
        {notesSidebar.map((section) => (
          <div key={section.id} className="mb-4">
            <h2 className="text-md font-bold text-gray-800">{section.title}</h2>
            <ul className="ml-2 mt-1 space-y-1">
              {section.topics.map((topic) => (
                <li
                  key={topic.id}
                  className={`text-sm cursor-pointer transition-all duration-300 px-2 py-1 rounded ${
                    activeId === topic.id
                      ? "text-blue-700 font-semibold bg-blue-100 border-l-4 border-blue-500"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => scrollTo(topic.id)}
                >
                  • {topic.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      {/* Main Content */}
      <main
        id="main-content"
        className="flex-1 overflow-y-auto p-6 space-y-10 scroll-smooth"
      >
        <Section1 topicRefs={topicRefs} />
        <Section2 topicRefs={topicRefs} />
        <Section3 topicRefs={topicRefs} />
        <Section4 topicRefs={topicRefs} />
        <Section5 topicRefs={topicRefs} />
        <Section6 topicRefs={topicRefs} />
      </main>
    </div>
  );
};

export default FinanceFullNotes;
