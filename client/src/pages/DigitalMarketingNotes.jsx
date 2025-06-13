import { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";

import Section1dm from "../pages/DMsections/Section1dm";
import Section2dm from "../pages/DMsections/Section2dm";
import Section3dm from "../pages/DMsections/Section3dm";
import Section4dm from "../pages/DMsections/Section4dm";
import Section5dm from "../pages/DMsections/Section5dm";
import Section6dm from "../pages/DMsections/Section6dm";
import Section7dm from "../pages/DMsections/Section7dm";
import Section8dm from "../pages/DMsections/Section8dm";

const notesSidebar = [
  { id: "1", title: "Section 1: Types" },
  { id: "2", title: "Section 2: Target Audience" },
  { id: "3", title: "Section 3: Branding and Identity" },
  { id: "4", title: "Section 4: Creating Content" },
  { id: "5", title: "Section 5: Digital Platforms " },
  { id: "6", title: "Section 6: Spending Smartly" },
  { id: "7", title: "Section 7: Campaign Strategy" },
  { id: "8", title: "Section 8: Analytics" },
];

const DigitalMarketingFullNotes = () => {
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
        className={`fixed md:static z-30 top-[4.5rem] md:top-0 left-0 h-full md:h-auto min-w-[260px] max-w-[280px] bg-white p-4 border-r shadow-lg overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          showSidebar ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h2 className="text-xl font-bold text-blue-800 mb-6 px-2">
          Digital Marketing
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
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-600">
          📱💻 Welcome to the World of Digital Marketing! 🎯✨
        </h1>

        <section className="bg-blue-50 p-6 rounded-2xl shadow-md mb-6 overflow-x-auto">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            What <em>is</em> Digital Marketing?
          </h2>
          <p className="text-lg leading-relaxed">
            Let’s imagine <strong>you’ve created the coolest robotic pet ever!</strong> 🐾🤖 It
            walks, talks, and even dances to music! 🕺🎶 Now you want <strong>everyone</strong> to know about it — not just your friends at school.
          </p>
          <p className="mt-4 text-lg">
            How do you do that? You use the <strong>internet</strong> to spread
            the word! 🌐 That means posting videos on YouTube, sharing pictures on
            Instagram, making a fun website, or even sending cool messages to
            people’s phones.
          </p>
          <p className="mt-4 text-lg font-medium text-green-700">
            👉 That’s called <strong>Digital Marketing</strong>!
          </p>
          <p className="mt-4 text-lg">
            It’s all about using <strong>phones, computers, and the internet</strong> to tell people
            about your product, idea, or anything awesome you want to share.
          </p>
        </section>

        <section className="bg-green-50 p-6 rounded-2xl shadow-md mb-6 overflow-x-auto">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            📢 Why Should You Learn This?
          </h2>
          <p className="text-lg leading-relaxed">
            Because today, almost everything is online! From games and gadgets to
            clothes and music — people learn about them <strong>through digital marketing</strong>.
          </p>
          <p className="mt-4 text-lg">
            And guess what? With the right tools and ideas, <strong>you</strong>
            can become a digital marketer too — and share your own cool creations
            with the world! 🌍✨
          </p>
        </section>

        <section className="bg-yellow-50 p-6 rounded-2xl shadow-md overflow-x-auto">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-700">
            📘 What You'll Learn in This Class:
          </h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>How to grab people’s attention online 🧠💡</li>
            <li>Where to share your message (like websites, apps, or social media) 📲</li>
            <li>What makes people click, like, or buy 👀🛟️</li>
            <li>How to be safe and smart while doing it 🛡️🔐</li>
          </ul>
        </section>

        <div className="text-center mt-10 mb-12">
          <p className="text-xl font-semibold text-purple-700">
            🚀 Ready to explore the exciting world of digital marketing? Let’s get started!
          </p>
        </div>

        <div className="space-y-10">
          <div className="overflow-x-auto"><Section1dm topicRefs={topicRefs} /></div>
          <div className="overflow-x-auto"><Section2dm topicRefs={topicRefs} /></div>
          <div className="overflow-x-auto"><Section3dm topicRefs={topicRefs} /></div>
          <div className="overflow-x-auto"><Section4dm topicRefs={topicRefs} /></div>
          <div className="overflow-x-auto"><Section5dm topicRefs={topicRefs} /></div>
          <div className="overflow-x-auto"><Section6dm topicRefs={topicRefs} /></div>
          <div className="overflow-x-auto"><Section7dm topicRefs={topicRefs} /></div>
          <div className="overflow-x-auto"><Section8dm topicRefs={topicRefs} /></div>
        </div>
      </main>
    </div>
  );
};

export default DigitalMarketingFullNotes;
