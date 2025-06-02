import React from "react";

const audienceData = [
  {
    product: "🎨 Coloring Markers Set",
    audience: "Kids aged 6–10",
    note: "Perfect for school projects, doodles, and artsy fun!",
  },
  {
    product: "🤖 Coding Toy Robot",
    audience: "Curious learners aged 10–14",
    note: "For those who love solving puzzles and techy stuff!",
  },
  {
    product: "💃 Dance Workout App",
    audience: "Teens & fitness-loving adults",
    note: "Great for people who love to groove and move!",
  },
  {
    product: "🐶 Pet Care Tracker App",
    audience: "Pet owners (kids & parents)",
    note: "Helps families keep their furry friends happy and healthy!",
  },
];

const Section2dm = () => {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-6">
        🎯 Target Audience – Who Are You Talking To?
      </h2>

      <p className="text-lg md:text-xl text-center mb-8 max-w-3xl mx-auto">
        Not every product is made for *everyone*. Smart marketers focus on the
        group of people who will{" "}
        <span className="font-semibold text-indigo-500">love</span> the product
        the most. 👉 That group is called your <strong>Target Audience</strong>.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-indigo-100 rounded-2xl shadow-sm">
          <thead className="bg-indigo-100 text-indigo-700 text-left text-md">
            <tr>
              <th className="p-4">🛍️ Product</th>
              <th className="p-4">🎯 Best Audience</th>
              <th className="p-4">💡 Why It Fits</th>
            </tr>
          </thead>
          <tbody>
            {audienceData.map((item, index) => (
              <tr
                key={index}
                className="border-t border-indigo-50 hover:bg-indigo-50 transition"
              >
                <td className="p-4 font-medium">{item.product}</td>
                <td className="p-4">{item.audience}</td>
                <td className="p-4 text-gray-600">{item.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-400 shadow-md">
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            🧠 Why It Matters #1: Make Better Content
          </h3>
          <p className="text-md text-gray-700">
            If you know who you're talking to, you can use the right colors,
            language, jokes, and ideas. Talking to kids? Make it fun and simple!
            Talking to adults? Keep it smart and helpful.
          </p>
        </div>

        <div className="bg-yellow-50 p-6 rounded-2xl border-l-4 border-yellow-400 shadow-md">
          <h3 className="text-xl font-semibold text-yellow-700 mb-2">
            📱 Why It Matters #2: Pick the Right Platform
          </h3>
          <p className="text-md text-gray-700">
            Younger people might be on TikTok or YouTube. Adults? Maybe Facebook
            or email. You save time and money by showing your product where your
            audience already hangs out.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-xl md:text-2xl font-semibold text-purple-700">
          💭 Quick Quiz: Who’s the perfect audience for a “homework helper” app?
          Students? Parents? Teachers?
        </p>
      </div>
    </div>
  );
};

export default Section2dm;
