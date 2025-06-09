import React from "react";

const Mod2 = () => {
  return (
    <div className="px-4 py-8 md:px-16 bg-pink-50 min-h-screen text-gray-800">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-pink-700 mb-2">
          🧠 Feelings Explorer
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Feelings are part of every conversation. Let’s learn how to talk about
          them calmly and kindly.
        </p>
      </div>

      {/* What is NVC */}
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-6 items-start">
        <img
          src="https://insightfulcounselling.com/wp-content/uploads/2023/03/word-image-4299-1.jpeg"
          alt="NVC"
          className="w-40 h-40 md:w-56 md:h-56 mx-auto rounded-xl"
        />

        <div>
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">
            💬 What is Non-Violent Communication (NVC)?
          </h2>
          <p className="text-base md:text-lg mb-3">
            Non-violent communication is a way of speaking that avoids yelling,
            blaming, or hurting feelings.
          </p>
          <p className="text-base md:text-lg">
            It helps you say how you feel and what you need — in a calm and
            respectful way.
          </p>
        </div>
      </div>

      {/* Example: NVC in Action */}
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-8">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">
          📌 Example:
        </h2>
        <p className="text-base md:text-lg mb-2">
          ❌ Instead of yelling: <strong>“Give that back!”</strong>
        </p>
        <p className="text-base md:text-lg">
          ✅ Try:{" "}
          <strong>
            “I feel upset when you take my pen without asking. Can we take
            turns?”
          </strong>
        </p>
      </div>

      {/* Why Turn-Taking Matters */}
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-8 flex flex-col md:flex-row gap-6">
        <img
          src="https://avazapp.com/wp-content/uploads/2020/09/myanmar-5207930_1280-768x952-1.png"
          alt="Turn taking"
          className="w-32 h-32 md:w-44 md:h-44 mx-auto"
        />
        <div>
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">
            🔄 Why is Turn-Taking Important?
          </h2>
          <p className="text-base md:text-lg mb-2">
            Taking turns means waiting your turn to talk, and not interrupting.
          </p>
          <p className="text-base md:text-lg">
            It shows you respect others and makes sure everyone gets to speak.
          </p>
          <p className="text-base md:text-lg mt-3 italic">
            Example: Let your friend finish their story before sharing yours.
          </p>
        </div>
      </div>

      {/* Emotion Recognition */}
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-8 flex flex-col md:flex-row gap-6">
        <img
          src="https://relaxifyapp.com/wordpress/wp-content/uploads/2021/11/Frame-18-3-1.png"
          alt="Emotion Recognition"
          className="w-32 h-32 md:w-44 md:h-44 mx-auto rounded-2xl"
        />
        <div>
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">
            😊 What is Emotion Recognition?
          </h2>
          <p className="text-base md:text-lg mb-2">
            Emotion recognition is about noticing how someone feels—by watching
            their face, body language, and listening to their voice.
          </p>
          <p className="text-base md:text-lg">
            Example: If someone looks down and quiet, they might be sad. You
            could ask, <strong>“Are you okay?”</strong>
          </p>
        </div>
      </div>

      {/* Try This Activity */}
      <div className="bg-yellow-100 border-l-4 border-yellow-400 p-6 rounded-md shadow">
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-yellow-800">
          🎯 Try This:
        </h2>
        <p className="text-base md:text-lg text-yellow-900">
          The next time you talk to someone, look at their face and listen to
          their tone. What emotion do you think they’re feeling? Then ask them
          kindly how they’re doing.
        </p>
      </div>
    </div>
  );
};

export default Mod2;
