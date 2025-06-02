import React from "react";
import SectionCard from "../components/SectionCard"; // Make sure this exists

const sections = [
  {
    title: "Section 1: Types of Digital Ads 🖼️",
    path: "/digitalmarketing/notes/section-1",
  },
  {
    title: "Section 2: Target Audience 🎯",
    path: "/digitalmarketing/notes/section-2",
  },
  {
    title: "Section 3: Brand Identity 🧸",
    path: "/digitalmarketing/notes/section-3",
  },
  {
    title: "Section 4: Content Creation ✨",
    path: "/digitalmarketing/notes/section-4",
  },
  {
    title: "Section 5: Digital Platforms 🌐",
    path: "/digitalmarketing/notes/section-5",
  },
  {
    title: "Section 6: Budgeting 💰",
    path: "/digitalmarketing/notes/section-6",
  },
  {
    title: "Section 7: Campaign Strategy 📝",
    path: "/digitalmarketing/notes/section-7",
  },
  {
    title: "Section 8: Analytics & Reflection 📊",
    path: "/digitalmarketing/notes/section-8",
  },
];

const DigitalMarketingNotes = () => {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto text-gray-800">
      {/* === Intro Content === */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-600">
        📱💻 Welcome to the World of Digital Marketing! 🎯✨
      </h1>

      <section className="bg-blue-50 p-6 rounded-2xl shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          What <em>is</em> Digital Marketing?
        </h2>
        <p className="text-lg leading-relaxed">
          Let’s imagine{" "}
          <strong>you’ve created the coolest robotic pet ever!</strong> 🐾🤖 It
          walks, talks, and even dances to music! 🕺🎶 Now you want{" "}
          <strong>everyone</strong> to know about it — not just your friends at
          school.
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
          It’s all about using{" "}
          <strong>phones, computers, and the internet</strong> to tell people
          about your product, idea, or anything awesome you want to share.
        </p>
      </section>

      <section className="bg-green-50 p-6 rounded-2xl shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">
          📢 Why Should You Learn This?
        </h2>
        <p className="text-lg leading-relaxed">
          Because today, almost everything is online! From games and gadgets to
          clothes and music — people learn about them{" "}
          <strong>through digital marketing</strong>.
        </p>
        <p className="mt-4 text-lg">
          And guess what? With the right tools and ideas, <strong>you</strong>{" "}
          can become a digital marketer too — and share your own cool creations
          with the world! 🌍✨
        </p>
      </section>

      <section className="bg-yellow-50 p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-700">
          📘 What You'll Learn in This Class:
        </h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>How to grab people’s attention online 🧠💡</li>
          <li>
            Where to share your message (like websites, apps, or social media)
            📲
          </li>
          <li>What makes people click, like, or buy 👀🛍️</li>
          <li>How to be safe and smart while doing it 🛡️🔐</li>
        </ul>
      </section>

      <div className="text-center mt-10 mb-12">
        <p className="text-xl font-semibold text-purple-700">
          🚀 Ready to explore the exciting world of digital marketing? Let’s get
          started!
        </p>
      </div>

      {/* === Card Grid Section === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <SectionCard key={section.path} {...section} />
        ))}
      </div>
    </div>
  );
};

export default DigitalMarketingNotes;
