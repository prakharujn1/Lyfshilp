import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { CardSpotlight } from "../components/ui/card-spotlight";
import { useNavigate } from "react-router-dom";

// const sliderImages = [
//   "/logo.jpg",
//   "https://images.pexels.com/photos/9783353/pexels-photo-9783353.jpeg",
//   "https://images.pexels.com/photos/7821487/pexels-photo-7821487.jpeg",
//   "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
//   "https://images.pexels.com/photos/7688173/pexels-photo-7688173.jpeg",
//   "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg",
// ];

const featureItems = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/3159/3159066.png",
    alt: "Levels & Challenges",
    title: "Progressive Levels & Real-World Challenges",
    desc: "Every module is designed with step-by-step levels and hands-on challenges that help you apply what you learn from solving real problems to building your own ideas.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4", // sample video
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
    alt: "Progress Analysis",
    title: "Personalized Growth Tracker",
    desc: "Get actionable insights into your performance, helping you understand what you’ve mastered and what needs more focus.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    alt: "Personalized Suggestions",
    title: "Personalized Learning Paths",
    desc: "Receive smart, tailored suggestions and curated resources that adapt to your progress helping you overcome challenges and unlock your full potential",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const Home = () => {
  const [isHovered] = useState(false);
  const marqueeRef = useRef(null);
  const controls = useAnimation();
  const navigate = useNavigate();

  const items = [
    {
      title: "Fundamentals of Finance",
      subtitle: "Personal finance, markets, money management",
      icon: "https://cdn-icons-png.flaticon.com/512/2920/2920298.png",
    },
    {
      title: "Computers",
      subtitle: "AI, Machine Learning, neural networks, full stack development",
      icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    },
    {
      title: "Fundamentals of Law",
      subtitle: "Criminal & civil law",
      icon: "/law.png",
    },
    {
      title: "Communication Skills",
      subtitle: "Public speaking, negotiation, persuasion",
      icon: "/discussion.png",
    },
    {
      title: "Entrepreneurship",
      subtitle: "",
      icon: "/entrepreneurship.png",
    },
    {
      title: "Digital Marketing",
      subtitle: "SEO, analytics, campaigns",
      icon: "/marketing.png",
    },
    {
      title: "Leadership & Adaptability",
      subtitle: "",
      icon: "/leadership.png",
    },
    {
      title: "Environmental & Sustainability Awareness",
      subtitle: "",
      icon: "/save-the-planet.png",
    },
    {
      title: "Social-Emotional Learning + Physical & Mental Health",
      subtitle: "",
      icon: "https://cdn-icons-png.flaticon.com/512/2784/2784403.png",
    },
  ];

  useEffect(() => {
    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  }, [isHovered, controls]);

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-10 overflow-x-hidden">
      {/* Intro Section */}
      <div className="w-full flex flex-col-reverse lg:flex-row gap-10 mb-16">
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-black">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Real Skills <span style={{ color: "#184802" }}>Fun Learning</span>
          </h1>
          <p className="mt-4 text-lg text-black-500 max-w-md">
            Master finance, law, communication, coding & more through exciting
            notes, challenges & games designed for students from Grade 6 to 12.
          </p>
          <div className="mt-6 flex gap-4">
            <button
              className="bg-[#184802] text-white font-semibold px-5 py-2 rounded-md hover:bg-[#57B87C] hover:text-white transition duration-300"
              onClick={() => navigate("/courses")}
            >
              Start Learning
            </button>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="bg-[#333301] text-white font-semibold px-5 py-2 rounded-full hover:bg-[#4A4A01] transition duration-300">
              <span className="text-yellow-300">🎮</span> Game-Based Learning
            </div>
            <div className="bg-[#333301] text-white font-semibold px-5 py-2 rounded-full hover:bg-[#4A4A01] transition duration-300">
              <span className="text-yellow-300">📚</span> Interactive Notes
            </div>
            <div className="bg-[#333301] text-white font-semibold px-5 py-2 rounded-full hover:bg-[#4A4A01] transition duration-300">
              <span className="text-yellow-300">💡</span> Real-Life Skills
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-[500px] h-[280px] sm:h-[360px] md:h-[420px] lg:h-[470px] overflow-hidden rounded-xl">
            <img
              src="/intro-v.gif"
              alt="Intro GIF"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Subjects Marquee */}
      <style>
        {`
          @keyframes marqueeScroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            animation: marqueeScroll 20s linear infinite;
          }
          .marquee-wrapper:hover .marquee-track {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto mb-10 overflow-hidden">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Beyond Textbooks: Real Skills Real Impact
        </h2>
        <div
          className="marquee-wrapper overflow-hidden w-full"
          ref={marqueeRef}
        >
          <div className="marquee-track flex gap-6 w-max">
            {[...items, ...items].map((item, index) => (
              <div
                key={index}
                className="bg-gray-300 mt-5 rounded-xl p-6 shadow-md flex flex-col items-center w-[260px] h-[240px] shrink-0"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-20 w-20 object-contain mb-4"
                />
                <div className="flex flex-col w-full items-center text-center">
                  <h4 className="text-lg font-semibold text-gray-800 break-words">
                    {item.title}
                  </h4>
                  <p className="text-base text-gray-600 break-words mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NEW FEATURES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
            What Makes <span className="text-[#129990]">Edumaniax</span> Stand
            Out
          </h2>

          <div className="space-y-24">
            {featureItems.map((feature, index) => (
              <motion.div
                key={index}
                className={`flex bg-white flex-col-reverse md:flex-row ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } items-center gap-10`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* 🟢 Text Section */}
                <div className="flex-1 bg-gradient-to-br from-[#f0fdfa] to-white rounded-2xl shadow-xl p-8 md:p-10 text-center md:text-left space-y-4 transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
                  <h3 className="text-2xl font-bold text-[#129990] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {feature.desc}
                  </p>
                </div>

                {/* 🔵 Video Section */}
                <div className="flex-1">
                  <motion.div
                    className="w-full max-w-[500px] aspect-video mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <video
                      src={feature.video}
                      controls
                      muted
                      playsInline
                      autoPlay
                      className="w-full h-full object-cover rounded-xl shadow-lg"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust and Join Section */}
      <section className="relative w-full bg-white overflow-hidden rounded-2xl min-h-[360px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[520px]">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-30"
        >
          <source src="/Bb-Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Foreground Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black leading-tight mb-2">
            Join EduManiax to Develop Your
          </h2>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black leading-snug mb-4">
            Real-World Skills & Confidence.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-[90%] sm:max-w-[80%] mx-auto">
            We build trust—because we know you’ll trust us to help you grow!
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mt-20 relative overflow-hidden bg-gradient-to-br from-[#f0fcfa] via-[#e0f7f4] to-white py-20 px-4">
        <div className="absolute top-[-50px] left-[-50px] w-[300px] h-[300px] bg-[#12999033] rounded-full blur-3xl opacity-50 z-0 animate-pulse"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-[300px] h-[300px] bg-[#12999033] rounded-full blur-3xl opacity-50 z-0 animate-pulse"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Your Pathway to Success{" "}
            <span className="text-[#129990]">with EduManiax!</span>
          </h2>

          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {},
            }}
          >
            {[
              {
                title: "Start Your Journey",
                desc: "Find the course that excites you and begin learning at your own pace.",
                icon: "https://cdn-icons-png.flaticon.com/512/4202/4202843.png",
              },
              {
                title: "Learn with Gamified Challenges",
                desc: "Grasp complex concepts through smart AI tools, interactive games, and immersive simulations.",
                icon: "challenge.png",
              },
              {
                title: "Apply & Succeed",
                desc: "Turn your learning into action and shine in your projects and career.",
                icon: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-70 backdrop-blur-md rounded-3xl p-6 shadow-xl flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="w-32 h-32 rounded-full bg-white flex items-center justify-center mb-6 shadow-md border"
                >
                  <img src={step.icon} alt={step.title} className="w-20 h-20" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
