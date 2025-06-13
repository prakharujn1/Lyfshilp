import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";

import Section1dm from "../pages/SocialLearningNotes/KnowingMyself";
import Section2dm from "../pages/SocialLearningNotes/BuildPositiveRel";
import Section3dm from "../pages/SocialLearningNotes/HandlingStress";
import Section4dm from "../pages/SocialLearningNotes/SelfDiscipline";
import Section5dm from "../pages/SocialLearningNotes/DecisionMaking";

const notesSidebar = [
  { id: "1", title: "Section 1: Knowing Myself" },
  { id: "2", title: `Section 2: Building Relationships` },
  { id: "3", title: "Section 3: Handling Stress" },
  { id: "4", title: "Section 4: Self-Discipline" },
  { id: "5", title: "Section 5: Decision Making" },
];

const SocialLearningNotes = () => {
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
      { root: container, threshold: 0.3 }
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
        className={`fixed md:static z-30 top-[4.5rem] md:top-0 left-0 h-full md:h-auto min-w-[260px] max-w-[280px] bg-white p-4 border-r shadow-lg overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          showSidebar ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h2 className="text-xl font-bold text-blue-800 mb-6 px-2">
          📘 Social Learning
        </h2>
        <ul className="space-y-3">
          {notesSidebar.map((section) => (
            <li
              key={section.id}
              data-scroll-id={section.id}
              className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-200 text-sm shadow-sm ${
                activeId === section.id
                  ? "bg-blue-100 text-blue-800 font-semibold border-l-4 border-blue-500"
                  : "hover:bg-blue-50 text-gray-800"
              }`}
              onClick={() => scrollTo(section.id)}
              title={section.title} 
            >
              <div className="text-[14px] font-medium leading-5 break-words whitespace-normal">
                {section.title}
              </div>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main
        id="main-content"
        className="flex-1 overflow-y-auto p-4 md:p-6 space-y-10 scroll-smooth"
      >
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
            <li>
              Learning to say “please” and “thank you” by watching parents.
            </li>
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
        </div>
      </main>
    </div>
  );
};

export default SocialLearningNotes;
