import FAQ from "../FinanceDesign/FAQ";

const subjects = [
  {
    title: "Fundamentals of Finance",
    subtitle: "Personal finance, markets, money management",
    icon: "https://cdn-icons-png.flaticon.com/512/2920/2920298.png",
  },
  {
    title: "Computers",
    subtitle: "AI, Machine Learning, neural networks, full stack development",
    icon: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
  },
  {
    title: "Fundamentals of Law",
    subtitle: "Criminal & civil law",
    icon: "https://cdn-icons-png.flaticon.com/512/4324/4324655.png",
  },
  {
    title: "Communication Skills",
    subtitle: "Public speaking, negotiation, persuasion",
    icon: "https://cdn-icons-png.flaticon.com/512/4959/4959559.png",
  },
  {
    title: "Entrepreneurship",
    subtitle: "",
    icon: "https://cdn-icons-png.flaticon.com/512/3011/3011270.png",
  },
  {
    title: "Digital Marketing",
    subtitle: "SEO, analytics, campaigns",
    icon: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
  },
  {
    title: "Leadership & Adaptability",
    subtitle: "",
    icon: "https://cdn-icons-png.flaticon.com/512/4380/4380955.png",
  },
  {
    title: "Environmental & Sustainability Awareness",
    subtitle: "",
    icon: "https://cdn-icons-png.flaticon.com/512/3817/3817045.png",
  },
  {
    title: "Social-Emotional Learning + Physical & Mental Health",
    subtitle: "",
    icon: "https://cdn-icons-png.flaticon.com/512/3641/3641364.png",
  },
];

const Home = () => {
  return (
    <div className="px-4 py-10">
      {/* Top Banner */}
      <div className="bg-cyan-700 text-white rounded-xl flex justify-between items-center px-6 py-4 w-full max-w-6xl mx-auto">
        <span className="text-3xl font-extrabold">
          24/7 dedicated support team for customers
        </span>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVhbXdvcmt8ZW58MHx8MHx8fDA%3D"
          alt="Customer Support"
          className="h-24 w-24 rounded-xl object-cover"
        />
      </div>

      {/* Subject Overview Section */}
      <div className="mt-20 max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Beyond Textbooks: Real Skills. Real Impact.
          </h2>
          <p className="text-gray-600 text-lg mt-6">
            Empower yourself with future-ready skills across finance, law, tech,
            health, and communication. LyfShilp’s personalized curriculum,
            crafted by industry professionals, adapts to your unique learning
            pace and interests, ensuring you stay motivated and engaged.
            Experience a flexible approach that closes learning gaps, builds
            confidence, and nurtures essential skills for the modern world.
            Start your journey with LyfShilp and unlock your full potential—both
            personally and professionally—in today’s ever-evolving landscape
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-12 items-stretch">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center w-full min-h-[220px] min-w-[260px] h-[240px]"
            >
              <img
                src={subject.icon}
                alt={subject.title}
                className="h-20 w-20 object-contain mb-4"
              />
              <div className="flex flex-col w-full items-center text-center">
                <h4 className="text-lg font-semibold text-gray-800 whitespace-normal break-words">
                  {subject.title}
                </h4>
                <p className="text-base text-gray-600 whitespace-normal break-words mt-1">
                  {subject.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Platform <span className="text-blue-700">Key Features</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-center text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3159/3159066.png"
                alt="Levels & Challenges"
                className="h-20 w-20 mb-4"
              />
              <div className="font-semibold text-lg mb-2">
                Proper Levels & Challenges
              </div>
              <p className="text-gray-600">
                Each subject offers structured levels and engaging challenges to
                help you master concepts step by step.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-center text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                alt="Progress Analysis"
                className="h-20 w-20 mb-4"
              />
              <div className="font-semibold text-lg mb-2">
                Progress Report Analysis
              </div>
              <p className="text-gray-600">
                Get detailed analysis of your progress reports to track your
                growth and identify areas for improvement.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-center text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" // person with a lightbulb
                alt="Personalized Suggestions"
                className="h-20 w-20 mb-4"
              />

              <div className="font-semibold text-lg mb-2">
                Personalized Suggestions
              </div>
              <p className="text-gray-600">
                Receive tailored suggestions and resources to help you overcome
                challenges and accelerate your learning.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-center text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png" // graduation cap
                alt="Best Guidance from Top Educators"
                className="h-20 w-20 mb-4"
              />

              <div className="font-semibold text-lg mb-2">
                Best Guidance from Top Educators
              </div>
              <p className="text-gray-600">
                Learn from the best—our top educators provide expert guidance
                and mentorship throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust and Join Section */}
      <section className="relative py-16 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Join LyfShilp to Develop Your
          </h2>
          <div className="relative inline-block w-full">
            {/* Left background image behind "Real-World" */}
            <span className="relative z-20">
              <span className="relative">
                <img
                  src="https://images.pexels.com/photos/3830752/pexels-photo-3830752.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Teamwork"
                  className="absolute -left-16 -top-10 w-32 h-32 object-cover rounded-2xl opacity-60 hidden md:block"
                  style={{ zIndex: 5 }}
                />
                <span className="text-3xl md:text-5xl font-bold">
                  Real-World
                </span>
              </span>
              <span className="text-3xl md:text-5xl font-bold ml-2 mr-2">
                Skills &
              </span>
              {/* Right background image behind "Confidence" */}
              <span className="relative">
                <img
                  src="https://images.pexels.com/photos/3779427/pexels-photo-3779427.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Success"
                  className="absolute -right-16 -bottom-8 w-32 h-32 object-cover rounded-2xl opacity-60 hidden md:block"
                  style={{ zIndex: 5 }}
                />
                <span className="text-3xl md:text-5xl font-bold">
                  Confidence.
                </span>
              </span>
            </span>
          </div>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            We build trust—because we know you’ll trust us to help you grow!
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mt-20 bg-white flex flex-col items-center">
        <div className="max-w-5xl w-full mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Your Pathway to Success{" "}
            <span className="text-blue-700">with LyfShilp!</span>
          </h2>

          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Enroll */}
            <div className="flex flex-col items-center text-center flex-1 min-w-[220px]">
              <div className="w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center mb-4 shadow-md">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4202/4202843.png"
                  alt="Enroll"
                  className="w-28 h-28 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Enroll</h3>
              <p className="text-gray-600">
                Choose your likeable course and proceed.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex flex-col items-center">
              <img
                src="https://a.storyblok.com/f/114532/401x313/673568ba17/plane1.png/m/400x312"
                alt="Plane Arrow"
                className="max-w-[200px] max-h-[156px] object-cover"
                style={{ aspectRatio: "1.28205" }} // Optional: for precise aspect ratio
              />
            </div>

            {/* Get Trained */}
            <div className="flex flex-col items-center text-center flex-1 min-w-[220px]">
              <div className="w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center mb-4 shadow-md">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                  alt="Get Trained"
                  className="w-28 h-28 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Get Trained</h3>
              <p className="text-gray-600">
                Learn from our educators and industry experts to gain practical
                skills.
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex flex-col items-center">
              <img
                src="https://a.storyblok.com/f/114532/401x313/673568ba17/plane1.png/m/400x312"
                alt="Plane Arrow"
                className="max-w-[200px] max-h-[156px] object-cover"
                style={{ aspectRatio: "1.28205" }} // Optional: for precise aspect ratio
              />
            </div>

            {/* Excel */}
            <div className="flex flex-col items-center text-center flex-1 min-w-[220px]">
              <div className="w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center mb-4 shadow-md">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
                  alt="Excel"
                  className="w-28 h-28 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Excel</h3>
              <p className="text-gray-600">
                Apply your skills in real-world scenarios and excel in your
                career.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
};

export default Home;
