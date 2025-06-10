import React from "react";

const KnowingMyself = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-10 space-y-10">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-4">
        🌟 Module 1: Knowing Myself
      </h1>
      <p className="text-center text-gray-700 text-lg mb-8">
        Let’s explore the amazing person you are!
      </p>

      {/* Section 1: Emotions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-700">
          🌈 1. What Are Emotions?
        </h2>
        <p className="text-gray-700">
          Emotions are like colors — they can be bright (like joy), calm (like
          peace), stormy (like anger), or cloudy (like sadness). Everyone feels
          emotions, even grown-ups!
        </p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {[
            {
              label: "😊 Happy",
              src: "https://s36370.pcdn.co/wp-content/uploads/2016/03/Happiness-Habits-10-Things-Happy-People-Do-Before-Bed-800x450.jpg",
            },
            {
              label: "😟 Worried",
              src: "https://divethru.com/wp-content/uploads/2020/12/feeling-worried.jpg",
            },
            {
              label: "😡 Angry",
              src: "https://www.themeadows.com/wp-content/uploads/2024/12/0445f454d93c4fcc0efc1c70de029529.jpg",
            },
            {
              label: "😢 Sad",
              src: "https://cdn2.psychologytoday.com/assets/styles/manual_crop_4_3_1200x900/public/field_blog_entry_teaser_image/2020-10/sadness.jpg?itok=nLjAS20l",
            },
            {
              label: "🛌 Tired",
              src: "https://images.squarespace-cdn.com/content/v1/59e6c6ead7bdce9ebbc705fe/1592968087150-IYI713OOOXXI4G22TISU/Why+You%27re+Always+Tired.png",
            },
            {
              label: "😍 Excited",
              src: "https://divethru.com/wp-content/uploads/2021/04/feeling-excited-1024x576.jpg",
            },
          ].map((emotion, index) => (
            <div key={index} className="text-center">
              <img
                src={emotion.src}
                alt={emotion.label}
                className="w-24 h-24 mx-auto rounded-full shadow-lg"
              />
              <p className="text-sm mt-2">{emotion.label}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-700">
          <strong>Example:</strong> If your best friend shares their chocolate
          with someone else and not you, you might feel left out or jealous —
          and that’s okay. Emotions aren’t good or bad; they just are.
        </p>
      </section>

      {/* Section 2: Self-Awareness */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-700">
          🪞 2. What Is Self-Awareness?
        </h2>
        <p className="text-gray-700">
          Self-awareness means knowing what you’re feeling and why. It’s like
          being a detective of your own thoughts and feelings!
        </p>
        <div className="bg-yellow-50 p-4 rounded-xl shadow">
          <p className="italic">
            🕵️ Try This: <br />
            "When I didn’t get picked for the team, I felt{" "}
            <span className="font-bold underline">___</span> because{" "}
            <span className="font-bold underline">__</span>."
          </p>
          <p className="mt-2 text-gray-700">
            Example: “When I didn’t get picked for the team, I felt{" "}
            <strong>sad</strong> because I had really practiced hard.”
          </p>
        </div>
      </section>

      {/* Section 3: Self-Talk */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-700">
          💬 3. What Is Self-Talk?
        </h2>
        <p className="text-gray-700">
          Self-talk is that little voice inside your head. Sometimes it cheers
          you on, sometimes it brings you down.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-xl shadow">
            <h3 className="font-semibold text-green-700">
              ✅ Helpful Self-Talk
            </h3>
            <p>“I made a mistake, but I can try again.”</p>
          </div>
          <div className="bg-red-50 p-4 rounded-xl shadow">
            <h3 className="font-semibold text-red-700">
              ❌ Unhelpful Self-Talk
            </h3>
            <p>“I’m so dumb, I can never do anything right.”</p>
          </div>
        </div>

        <p className="text-gray-700">
          <strong>Example:</strong> You forgot your homework. Helpful self-talk
          says, “Okay, I’ll remember next time — maybe I need a reminder.”
          Unhelpful talk says, “I’m the worst!” <br />
          Which one would you rather listen to?
        </p>
      </section>

      {/* Section 4: What Makes You You */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-700">
          🌟 4. What Makes You You?
        </h2>
        <p className="text-gray-700">
          You are a mix of your likes, dislikes, hobbies, and dreams.
        </p>
        <div className="bg-blue-50 p-4 rounded-xl space-y-2 shadow">
          <p>✏️ My favorite thing to do: __________</p>
          <p>✏️ Something I’m really good at: __________</p>
          <p>✏️ Something I want to get better at: __________</p>
        </div>
      </section>

      {/* Section 5: Everyone Has Strengths */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-blue-700">
          🧽 5. Everyone Has Strengths
        </h2>
        <p className="text-gray-700">
          Strengths are things that come easily to you — like being a good
          friend, solving puzzles, or making people laugh.
        </p>
        <p className="text-gray-700">
          <strong>Example:</strong> Maya is shy but always notices when
          someone’s sad and comforts them. That’s empathy — a super strength!
        </p>
      </section>

      {/* Reflection */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-purple-700">
          💡 Mini Reflection
        </h2>
        <div className="bg-purple-50 p-4 rounded-xl shadow space-y-2">
          <p>📝 What emotion do you feel most often during the school day?</p>
          <p>
            📝 What is one thing you say to yourself that helps you feel better?
          </p>
          <p>
            📝 What’s a strength someone else might not see in you, but you know
            you have?
          </p>
        </div>
      </section>
    </div>
  );
};

export default KnowingMyself;
