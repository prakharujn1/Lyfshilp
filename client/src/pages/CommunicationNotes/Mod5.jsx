import React from "react";

const Mod5 = ({ topicRefs }) => {
  return (
    <div
      id="5"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["5"] = el;
        }
      }}
      className="mb-10"
    >
      <div className="px-4 py-8 md:px-16 bg-blue-50 min-h-screen text-gray-800">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-700 mb-2">
          💬 Communicating Online and in Real Life
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Whether you're chatting in person or texting on a screen—your words
          matter. Let's learn how to use them kindly and clearly!
        </p>
      </div>

      {/* Digital Communication */}
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-8 flex flex-col md:flex-row gap-6">
        <img
          src="https://img.freepik.com/premium-vector/digital-communication-design_24911-43103.jpg"
          alt="Digital communication"
          className="w-32 h-32 md:w-44 md:h-44 mx-auto"
        />
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            🌐 What is Digital Communication?
          </h2>
          <p className="text-base md:text-lg mb-3">
            Digital communication means messages sent by text, email, or chat
            apps. Since people can’t hear your voice or see your face, it’s easy
            for messages to be misunderstood.
          </p>
          <p className="text-base md:text-lg italic">Example:</p>
          <p className="text-base md:text-lg font-medium mt-2 text-blue-800">
            ❌ “Why didn’t you invite me 😡??”
            <br />✅ “Hey! I saw the party pics—looked fun. Wish I was there too
            😊”
          </p>
        </div>
      </div>

      {/* Tone in Texting */}
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-8 flex flex-col md:flex-row gap-6">
        <img
          src="https://thedigitalprojectmanager.com/wp-content/uploads/2017/06/DPM-tone-in-writte-communication-featured-image-1200x630.png"
          alt="Tone in texting"
          className="w-32 h-32 md:w-44 md:h-44 mx-auto"
        />
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            😊 What is Tone in Texting?
          </h2>
          <p className="text-base md:text-lg mb-3">
            Even when texting, your words can sound kind or cold depending on
            how you write them. Emojis and tone tags help others understand how
            you feel.
          </p>
          <ul className="text-base md:text-lg text-blue-800 space-y-2">
            <li>“Okay.” → sounds cold or annoyed</li>
            <li>“Okay 😊” → feels friendly and warm</li>
            <li>“Sure [excited]” → shows positive emotion</li>
          </ul>
        </div>
      </div>

      {/* STAR Method */}
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-8 flex flex-col md:flex-row gap-6">
        <img
          src="https://blog.jostle.me/hubfs/Communication_Styles_and_How_They_Affect_the_Workplace.png"
          alt="STAR method"
          className="w-32 h-32 md:w-44 md:h-44 mx-auto"
        />
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            ⭐ What is the STAR Method?
          </h2>
          <p className="text-base md:text-lg mb-3">
            The STAR method helps you give compliments that feel real and make
            someone smile.
          </p>
          <ul className="list-disc list-inside text-blue-800 space-y-1">
            <li>
              <strong>S</strong>pecific – Mention exactly what they did
            </li>
            <li>
              <strong>T</strong>rue – Be honest
            </li>
            <li>
              <strong>A</strong>ppreciative – Show you’re thankful
            </li>
            <li>
              <strong>R</strong>elated to action – Focus on something they did
            </li>
          </ul>
          <p className="text-base md:text-lg font-medium mt-3 text-blue-800 italic">
            Example:
            <br />
            “Thanks for helping with my science chart yesterday. You were
            patient, and I really needed that.”
          </p>
        </div>
      </div>

      {/* Try This Activity */}
      <div className="bg-yellow-100 border-l-4 border-yellow-400 p-6 rounded-md shadow">
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-yellow-800">
          🎯 Try This:
        </h2>
        <p className="text-base md:text-lg text-yellow-900">
          Send a kind message to someone today. Use a friendly tone and an emoji
          to show how you feel.
        </p>
        <div className="bg-white shadow-md p-4 mt-3 rounded-md border border-yellow-300 text-yellow-900 text-base md:text-lg">
          “Hey [friend’s name], just wanted to say thanks for helping me today
          😊. You’re awesome!”
        </div>
        <p className="text-sm mt-2 italic text-yellow-800">
          You never know how much a nice message can brighten someone’s day!
        </p>
      </div>
    </div>
    </div>
    
  );
};

export default Mod5;
