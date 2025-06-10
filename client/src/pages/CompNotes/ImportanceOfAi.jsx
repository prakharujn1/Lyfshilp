import React from "react";

const ImportanceOfAi = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-100 min-h-screen py-10 px-4 sm:px-10 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 text-center mb-6">
          🌟 Importance of Using AI Judiciously
        </h1>

        <p className="text-lg text-center text-gray-700 mb-10">
          Discover how to use AI responsibly to become a smart, ethical, and
          empowered digital learner.
        </p>

        {/* Judicious Use */}
        <section className="bg-white shadow-xl rounded-2xl p-6 sm:p-10 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">
            🎯 What Does "Using AI Judiciously" Mean?
          </h2>
          <p className="mb-4">
            Using AI judiciously means thinking carefully about when and how to
            use it. Just like candy isn't a meal, AI shouldn't be your only
            brain!
          </p>
          <img
            src="https://cdn.magzter.com/1378978220/1723188546/articles/XkbyaNC5S1723197482069/JUDICIOUS-USE-OF-ARTIFICIAL-INTELLIGENCE-AI-IS-POISED-TO-MAKE-GIANT-STRIDES-IN-THE-HEALTHCARE-SECTOR.jpg"
            alt="Judicious AI"
            className="w-32 h-32 mx-auto"
          />
        </section>

        {/* Balance Example Cards */}
        <section className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-green-100 border border-green-300 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-green-700 mb-2">
              ✅ AI as a Helper
            </h3>
            <p>
              Use Grammarly to fix grammar, then write the essay yourself. Learn
              & grow!
            </p>
          </div>
          <div className="bg-red-100 border border-red-300 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-red-700 mb-2">
              ❌ AI as a Replacement
            </h3>
            <p>
              Letting AI write the full essay? You miss the learning and the fun
              of doing it yourself.
            </p>
          </div>
        </section>

        {/* Real-World Scenarios */}
        <section className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            📘 Real-World Scenarios
          </h2>
          <ul className="space-y-4">
            <li>
              <strong>Math:</strong> Use AI to check your solution, not to solve
              it directly.
            </li>
            <li>
              <strong>Creativity:</strong> Let AI suggest ideas, then make your
              own art or story.
            </li>
          </ul>
        </section>

        {/* Dangers Section */}
        <section className="bg-red-50 border border-red-200 p-6 rounded-2xl mb-10 shadow-md">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            🚨 Dangers of Over-Relying on AI
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-red-700">
            <li>📉 Losing skills like mental math and writing</li>
            <li>🧠 Missing out on learning by letting AI do the work</li>
            <li>❗ Believing wrong or biased AI outputs</li>
          </ul>
        </section>

        {/* 3-Step Method */}
        <section className="bg-blue-50 p-6 sm:p-10 rounded-2xl shadow-xl mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            🛡️ The 3-Step Judicious AI Method
          </h2>
          <ol className="list-decimal ml-6 space-y-2">
            <li>
              <strong>ASK:</strong> Do I need AI for this, or can I learn it
              better myself?
            </li>
            <li>
              <strong>USE:</strong> Apply AI thoughtfully – combine its help
              with your own thinking.
            </li>
            <li>
              <strong>LEARN:</strong> Reflect on how AI helped you grow.
            </li>
          </ol>
        </section>

        {/* Real-Life Examples */}
        <section className="grid sm:grid-cols-3 gap-6 mb-10">
          {[
            {
              name: "Alex",
              role: "Smart Student",
              img: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
              desc: "Checks science explanations, solves math himself, and writes essays independently.",
            },
            {
              name: "Maya",
              role: "Creative Artist",
              img: "https://cdn-icons-png.flaticon.com/512/3159/3159602.png",
              desc: "Uses AI for color ideas and techniques but paints original art herself.",
            },
            {
              name: "David",
              role: "Future Programmer",
              img: "https://cdn-icons-png.flaticon.com/512/2721/2721611.png",
              desc: "Uses AI to debug and learn, but writes his own code first.",
            },
          ].map((student, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md text-center"
            >
              <img
                src={student.img}
                alt={student.name}
                className="w-24 h-24 mx-auto mb-3"
              />
              <h3 className="text-xl font-semibold text-blue-700">
                {student.name}
              </h3>
              <p className="text-sm font-medium text-gray-500 mb-2">
                {student.role}
              </p>
              <p className="text-sm text-gray-600">{student.desc}</p>
            </div>
          ))}
        </section>

        {/* Checklist */}
        <section className="bg-white p-6 rounded-2xl shadow-xl mb-10">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            📝 Judicious AI Use Checklist
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <ul className="list-disc ml-6">
              <li>✓ Am I using AI to learn or just get answers?</li>
              <li>✓ Will I gain a new skill from this?</li>
              <li>✓ Can I explain the result myself?</li>
            </ul>
            <ul className="list-disc ml-6">
              <li>✓ Can I do this without AI?</li>
              <li>✓ Is this ethical and honest?</li>
              <li>✓ Did I give credit where needed?</li>
            </ul>
          </div>
        </section>

        {/* Conclusion */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            🌍 Be AI-Wise, Stay Human
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            The best future belongs to those who know how to use AI responsibly,
            ethically, and creatively.
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2166/2166822.png"
            alt="AI Thinking"
            className="w-28 h-28 mx-auto"
          />
          <p className="mt-6 text-md text-gray-600">
            🚀 Keep questioning, keep learning, and always be the master of your
            technology — not the other way around!
          </p>
        </section>
      </div>
    </div>
  );
};

export default ImportanceOfAi;
