import React from "react";

const Mod1 = () => {
  return (
    <div className="px-4 py-8 md:px-16 bg-blue-50 min-h-screen text-gray-800">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-700 mb-2">
          🧏‍♀️ Listen to Understand
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Real communication starts with great listening. Let’s learn how to
          listen with our ears, eyes, and heart!
        </p>
      </div>

      {/* Section: What is Active Listening */}
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-8 flex flex-col md:flex-row gap-6">
        <img
          src="https://t10589978.p.clickup-attachments.com/t10589978/67108fcc-df7a-4e77-9581-c0d1e9fe6b67/6225106.jpg"
          alt="Listening Illustration"
          className="w-32 h-32 md:w-48 md:h-48 mx-auto"
        />
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">
            🎧 What is Active Listening?
          </h2>
          <p className="text-base md:text-lg mb-3">
            Active listening means giving your full attention when someone is
            talking. You're not just hearing their words—you’re trying to
            *understand* what they really feel.
          </p>
          <p className="text-base md:text-lg">
            It’s about listening with your ears and your heart. Even if someone
            says “I’m fine,” active listening helps you notice their tone and
            feelings.
          </p>
        </div>
      </div>

      {/* Section: Example */}
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          📌 Example:
        </h2>
        <p className="text-base md:text-lg mb-2">
          Your friend says,{" "}
          <strong>“It’s okay, I guess I’ll go alone to the fair.”</strong>
        </p>
        <p className="text-base md:text-lg mb-2">
          A distracted listener might say, “Okay, cool.” 😐
        </p>
        <p className="text-base md:text-lg">
          But an <strong>active listener</strong> might say, “Do you really want
          me to come with you?” because they *noticed* the disappointment.
        </p>
      </div>

      {/* Section: Why Tone Matters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
          <img
            src="https://www.affinityhealth.co.za/wp-content/uploads/2024/09/Practices-To-Set-A-Positive-Tone-For-Your-Day.jpg"
            alt="Tone Icon"
            className="w-32 h-32 mx-auto rounded-2xl"
          />
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-1 text-center">
              🗣️ Happy Tone
            </h2>
            <p className="text-base text-center">
              A happy tone makes others feel welcome and excited to talk. It's
              full of energy and smiles!
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
          <img
            src="https://media.istockphoto.com/id/931756524/photo/emotions-stress-madness-and-people-concept-crazy-shouting-man-rending-his-hair-in-white-shirt.jpg?s=612x612&w=0&k=20&c=xpNEDnInGUxj_FzfMjvsQ5xAGXmWKqGexlqCeyc0Xt4="
            alt="Tone Icon"
            className="w-32 h-32 mx-auto rounded-2xl"
          />
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-1 text-center">
              😠 Angry Tone
            </h2>
            <p className="text-base text-center">
              An angry tone can make others feel scared or uncomfortable—even if
              you didn’t mean to be rude.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
          <img
            src="https://www.yourtango.com/sites/default/files/image_blog/how-to-stop-being-sarcastic_0.png"
            alt="Tone Icon"
            className="w-32 h-32 mx-auto rounded-2xl"
          />
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-1 text-center">
              😏 Sarcastic Tone
            </h2>
            <p className="text-base text-center">
              Sarcasm can confuse people. It sounds like you're joking, but it
              might hurt someone’s feelings.
            </p>
          </div>
        </div>
      </div>

      {/* Section: Listening Tips */}
      <div className="bg-white rounded-xl shadow-md p-6 md:p-10 mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          ✅ How Can We Listen Better?
        </h2>
        <ul className="list-disc list-inside text-base md:text-lg space-y-2">
          <li>👀 Make eye contact</li>
          <li>📵 Put away distractions (like phones!)</li>
          <li>👍 Nod or say “Hmm” to show you're listening</li>
          <li>❓ Ask questions if you’re confused</li>
          <li>🧠 Focus on the speaker—not on what you’ll say next</li>
        </ul>
      </div>

      {/* Try This Activity */}
      <div className="bg-yellow-100 border-l-4 border-yellow-400 p-6 rounded-md shadow">
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-yellow-800">
          🎯 Try This:
        </h2>
        <p className="text-base md:text-lg text-yellow-900">
          Next time you talk to a friend, don’t interrupt. Look at them and
          really listen. When they’re done, repeat what they said in your own
          words.
        </p>
        <p className="mt-2 text-sm text-yellow-800 italic">
          Example: “So, you’re feeling a little left out because no one picked
          you for the game?”
        </p>
      </div>
    </div>
  );
};

export default Mod1;
