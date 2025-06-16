// SixToEightNotes.jsx
import React from 'react';
import Section1dm from './Section1dm';
import Section2dm from './Section2dm';
import Section3dm from './Section3dm';
import Section4dm from './Section4dm';
import Section5dm from './Section5dm';
import Section6dm from './Section6dm';
import Section7dm from './Section7dm';
import Section8dm from './Section8dm';


const SixToEightNotes = ({ topicRefs }) => {
  return (
    <>
      <section className="bg-blue-50 p-6 rounded-2xl shadow-md mb-6 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">
          What <em>is</em> Digital Marketing?
        </h2>
        <p className="text-lg leading-relaxed">
          Let's imagine <strong>you've created the coolest robotic pet ever!</strong> 🐾🤖 It
          walks, talks, and even dances to music! 🕺🎶 Now you want <strong>everyone</strong> to know about it — not just your friends at school.
        </p>
        <p className="mt-4 text-lg">
          How do you do that? You use the <strong>internet</strong> to spread
          the word! 🌐 That means posting videos on YouTube, sharing pictures on
          Instagram, making a fun website, or even sending cool messages to
          people's phones.
        </p>
        <p className="mt-4 text-lg font-medium text-green-700">
          👉 That's called <strong>Digital Marketing</strong>!
        </p>
        <p className="mt-4 text-lg">
          It's all about using <strong>phones, computers, and the internet</strong> to tell people
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

      <section className="bg-yellow-50 p-6 rounded-2xl shadow-md overflow-x-auto mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-700">
          📘 What You'll Learn in This Class:
        </h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>How to grab people's attention online 🧠💡</li>
          <li>Where to share your message (like websites, apps, or social media) 📲</li>
          <li>What makes people click, like, or buy 👀🛟️</li>
          <li>How to be safe and smart while doing it 🛡️🔐</li>
        </ul>
      </section>

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
    </>
  );
};

export default SixToEightNotes;