import React from "react";

const WorkOfAi = ({ topicRefs }) => {
  return (
    <div
      id="2"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["2"] = el;
        }
      }}
      className="mb-10"
    >
      <div className="bg-gradient-to-b from-green-50 to-white min-h-screen px-4 py-10 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6 text-center">
          🤖 Module 2: How Does AI Work?
        </h1>

        {/* Section: How AI Learns */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            🔍 How AI Learns (Like a Student!)
          </h2>
          <p className="text-lg leading-relaxed">
            AI learns just like you do when preparing for an exam — by seeing
            many examples and practicing. This is called{" "}
            <strong>"training with data."</strong>
          </p>
          <p className="mt-4 text-lg">
            Imagine teaching a baby the word "dog":
          </p>
          <ul className="list-decimal ml-6 text-lg mt-2 space-y-1">
            <li>Show many dog pictures and say "dog"</li>
            <li>Correct them when they say "dog" for a cat</li>
            <li>Eventually, they learn to tell the difference</li>
          </ul>
          <div className="mt-6 flex justify-center">
            <img
              src="https://miro.medium.com/v2/resize:fit:1024/1*h1buV91bPg_RzBWQR9o7gw.jpeg"
              alt="Dog example"
              className="w-full max-w-md rounded-xl shadow-md"
            />
          </div>
        </section>

        {/* Section: 3-Step AI Process */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            🔄 How AI Works in 3 Steps
          </h2>

          <div className="text-lg space-y-6">
            <div>
              <strong>Step 1: Input (Getting Information)</strong>
              <p>
                🖼️ Example: Taking a photo — AI sees colored dots (pixels), like
                how we see shapes and objects in a painting.
              </p>
            </div>

            <div>
              <strong>Step 2: Processing (Understanding)</strong>
              <p>
                🧠 Example: AI compares the photo with millions it has seen
                before using smart algorithms — like your brain recognizing
                faces.
              </p>
            </div>

            <div>
              <strong>Step 3: Output (Giving Answer)</strong>
              <p>
                ✅ Example: AI says, “This is a dog in a park!” — just like you
                telling someone what’s in a picture.
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <img
              src="https://d1le3ohiuslpz1.cloudfront.net/skillcrush/wp-content/uploads/2023/09/Frame-62-3.png.webp"
              alt="AI Steps"
              className="w-full max-w-xl rounded-xl shadow-md"
            />
          </div>
        </section>

        {/* Section: Dog Example */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            🎯 Detailed Example: How AI Recognizes Your Pet Dog
          </h2>

          <div className="text-lg space-y-2">
            <p>
              <strong>Training Phase:</strong>
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>AI sees 1 million dog photos labeled as "dog"</li>
              <li>It also sees many non-dog photos labeled as "not dog"</li>
              <li>
                AI learns the common features of dogs: fur, 4 legs, tail, etc.
              </li>
            </ul>

            <p>
              <strong>Recognition Phase:</strong>
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>You upload a photo of your pet dog</li>
              <li>AI checks if it matches what it learned</li>
              <li>It confidently says: "That's a dog!" 🐶</li>
            </ul>
          </div>

          <div className="mt-6 flex justify-center">
            <img
              src="https://compote.slate.com/images/ca61f102-33b2-488a-9151-35fe0e95d407.jpeg?crop=1560%2C1040%2Cx0%2Cy0"
              alt="Dog Recognition"
              className="w-full max-w-md rounded-xl shadow-md"
            />
          </div>
        </section>

        {/* Section: Types of AI */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            🧠 Types of AI Explained
          </h2>

          <div className="text-lg space-y-6">
            <div>
              <strong>Rule-based AI (Like Following a Recipe)</strong>
              <p>🔸 Example: Traffic lights, ATMs — follow fixed steps only</p>
              <p>🔹 Limitation: Can’t handle surprises</p>
            </div>

            <div>
              <strong>Learning AI (Like Practicing a Game)</strong>
              <p>🔸 Example: Gmail filtering spam, Netflix suggestions</p>
              <p>🔹 Learns from examples and improves with data</p>
            </div>

            <div>
              <strong>Smart AI (Like Human Thinking)</strong>
              <p>🔸 Example: ChatGPT, Self-driving cars</p>
              <p>🔹 Can make decisions but still being perfected</p>
            </div>
          </div>
        </section>

        {/* Section: Table */}
        <section className="overflow-x-auto">
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            📊 AI Types Summary Table
          </h2>

          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm text-sm md:text-base">
            <thead className="bg-green-100">
              <tr>
                <th className="px-4 py-2 border">Type</th>
                <th className="px-4 py-2 border">What It Means</th>
                <th className="px-4 py-2 border">Real Example</th>
                <th className="px-4 py-2 border">How It Works</th>
                <th className="px-4 py-2 border">Limitations</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Rule-based AI</td>
                <td className="px-4 py-2 border">Follows fixed steps</td>
                <td className="px-4 py-2 border">Calculator, ATM</td>
                <td className="px-4 py-2 border">Predefined instructions</td>
                <td className="px-4 py-2 border">Can’t learn or adapt</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-2 border">Learning AI</td>
                <td className="px-4 py-2 border">Improves with practice</td>
                <td className="px-4 py-2 border">Netflix, Gmail spam filter</td>
                <td className="px-4 py-2 border">Learns from examples</td>
                <td className="px-4 py-2 border">Needs lots of data</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Smart AI</td>
                <td className="px-4 py-2 border">Thinks like a human</td>
                <td className="px-4 py-2 border">ChatGPT, Self-driving cars</td>
                <td className="px-4 py-2 border">Understands context</td>
                <td className="px-4 py-2 border">Still developing</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
    </div>
    
  );
};

export default WorkOfAi;
