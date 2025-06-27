import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  UserCircle,
  Paintbrush,
  MapPin,
  Sparkles,
  PartyPopper,
  Gauge,
  Flame,
  TrendingUp,
  Coins,
  BarChart3,
  Info,
  Clock4, Smartphone, TimerReset, Target, SlidersHorizontal,
  ArrowRight,
  RotateCcw
} from "lucide-react"


const AnimatedMetricBar = ({ icon, label, value, max, ideal, type }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <ProgressBar
      value={value}
      max={max}
      label={
        <span className="text-sm font-bold text-gray-800 flex items-center gap-1">
          {icon} {label}
        </span>
      }
      ideal={ideal}
      type={type}
    />
  </motion.div>
);



const ProgressBar = ({ value, max, label, ideal, type }) => {
  const percent = Math.min((value / max) * 100, 100);
  const isIdeal =
    (type === "currency"
      ? value >= 2.5 && value <= 3.0
      : type
        ? false
        : percent >= 70);

  let barColor = "bg-red-400";
  if (percent >= 70) barColor = "bg-green-400";
  else if (percent >= 40) barColor = "bg-yellow-300";

  return (
    <div className="mb-4">
      {/* Label Row */}
      <div className="flex justify-between text-sm font-semibold text-gray-800 mb-1">
        <span>{label}</span>
        <span>{type === "currency" ? `₹${value}` : value}</span>
      </div>

      {/* Progress Bar */}
      {type !== "currency" && (
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
          <motion.div
            className={`h-full ${barColor} ${isIdeal ? "animate-pulse shadow-lg shadow-green-300" : ""
              }`}
            style={{ width: `${percent}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ duration: 0.6 }}
          />
        </div>
      )}

      {/* Ideal Indicator */}
      {ideal && (
        <div className="mt-2 flex items-center gap-2 text-xs text-gray-600 font-medium">
          <span className="text-green-500 text-sm">🎯</span>
          <span className="rounded-full px-2 py-[2px] bg-green-100 text-green-700 font-semibold">
            Target Range: {ideal}
          </span>
        </div>
      )}
    </div>
  );
};

const TargetingStage = ({ onNext, addScore ,onRestart}) => {
  const [age, setAge] = useState("13–18");
  const [interest, setInterest] = useState("Eco-friendly");
  const [location, setLocation] = useState("Tier 2 towns");
  const [platform, setPlatform] = useState("Stories");
  const [duration, setDuration] = useState(3);
  const [timing, setTiming] = useState("Morning");

  const [audienceMetrics, setAudienceMetrics] = useState({ reach: 0, relevance: 0, ctr: 0, isMatch: false });
  const [budgetMetrics, setBudgetMetrics] = useState({ cpc: 0, conversions: 0, reachPerRupee: 0 });
  const [gonextStage, setGonextStage] = useState(false);

  const ageInterestCompatibility = {
    "13–18": "Influencer fans",
    "19–25": "Skincare",
    "26–35": "Eco-friendly",
  };

  // 1️⃣ Calculate metrics when inputs change
  useEffect(() => {
    const audience = getAudienceMetrics(age, interest, location);
    const budget = getBudgetMetrics(platform, duration, timing);

    setAudienceMetrics(audience);
    setBudgetMetrics(budget);
  }, [age, interest, location, platform, duration, timing]);

  // 2️⃣ Check success only after state updates
  useEffect(() => {
    const isSuccess =
      audienceMetrics.reach >= 1200 &&
      audienceMetrics.relevance >= 4.0 &&
      parseFloat(audienceMetrics.ctr) >= 3.5 &&
      parseFloat(budgetMetrics.cpc) >= 2.5 &&
      parseFloat(budgetMetrics.cpc) <= 3.0 &&
      budgetMetrics.conversions > 400 &&
      budgetMetrics.reachPerRupee > 2400;

    // console.log("new");
    // console.log(audienceMetrics.reach >= 1200);
    // console.log(audienceMetrics.relevance >= 4.0);
    // console.log(parseFloat(audienceMetrics.ctr) >= 3.5);
    // console.log(parseFloat(budgetMetrics.cpc) >= 2.5);
    // console.log(parseFloat(budgetMetrics.cpc) <= 3.0);
    // console.log(budgetMetrics.conversions > 400);
    // console.log(budgetMetrics.reachPerRupee > 2400);
    // console.log("gonextStage", gonextStage);




    if (isSuccess) {
      toast.success("🎉 All Ideal Metrics Achieved!", { position: "top-center" });
      setGonextStage(true);
    } else {
      setGonextStage(false);
    }
  }, [audienceMetrics, budgetMetrics]);


  const getAudienceMetrics = (age, interest, location) => {
    const locationBonus = { "Tier 1 cities": 1.3, "Tier 2 towns": 0.8, "Pan-India": 1.1 };
    const interestBonus = { Skincare: 1.2, "Eco-friendly": 1.0, "Influencer fans": 1.1 };
    const ageCTR = { "13–18": 1.0, "19–25": 1.1, "26–35": 1.2 };
    const isMatch = interest === ageInterestCompatibility[age];
    const compatibilityMultiplier = isMatch ? 1.6 : 0.6;

    return {
      reach: Math.floor(1200 * locationBonus[location] * compatibilityMultiplier),
      relevance: (5.0 * interestBonus[interest] * compatibilityMultiplier).toFixed(1),
      ctr: (3.0 * ageCTR[age] * compatibilityMultiplier).toFixed(1),
      isMatch,
    };
  };

  const getBudgetMetrics = (platform, duration, timing) => {
    const platformCPC = { Reels: 2.5, Feed: 2.6, Stories: 3.0 };
    const timingMultiplier = { Morning: 1.4, Evening: 1.6, "All Day": 1.8 };

    const baseCPC = platformCPC[platform];
    const cpc = (baseCPC * timingMultiplier[timing] - 1.6).toFixed(2);
    const conversionBoost = platform === "Feed" && duration === 7 && timing === "All Day" ? 2.0 : 1;
    const conversions = Math.floor((8000 / cpc) * 0.13 * conversionBoost);
    const reachPerRupee = Math.floor((4000 * timingMultiplier[timing]) / baseCPC);

    return { cpc, conversions, reachPerRupee };
  };

  const handleCompleteStage2 = () => {
    let points = 5;

    addScore(points);
    onNext();
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-pink-100 via-yellow-50 to-blue-100 p-6  shadow-2xl space-y-8 "
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >

      <motion.div
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* 🌟 Floating Emoji Background */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >

        </motion.div>

        {/* 🌈 Animated Heading */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center gap-3 items-center mb-2">
            <Target className="w-8 h-8 text-pink-400 animate-bounce" />
            <motion.h2
              className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-yellow-400 to-lime-400 drop-shadow-lg animate-glow pb-3"
              animate={{ scale: [1, 1.05, 1], rotate: [-1, 1, -1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              🎮 STAGE 2: <br />
              Targeting & Budget simulator
            </motion.h2>
            <Coins className="w-8 h-8 text-yellow-500 animate-spin-slow" />
          </div>

          <div className="flex justify-center gap-2 items-center text-base font-semibold text-pink-600 italic">
            <SlidersHorizontal className="w-5 h-5 text-yellow-500 animate-bounce" />
            <span className="leading-snug">
              🎯 <span className="underline decoration-wavy decoration-pink-400">Tweak. Tune. Triumph.</span> 💡 Let your strategy sparkle! 🌟 <br />
              Finish this task to unlock the next stage! 🚀
            </span>
          </div>
        </motion.div>

        {/* ✨ Animated Paragraph */}
        <motion.p
          className="text-center text-lg text-gray-800 font-semibold mt-4 max-w-2xl mx-auto leading-relaxed"

        >
          🧩 <span className="text-indigo-500 font-bold">Your Mission:</span> Mix & match settings like a strategy wizard 🧙‍♂️! Reach for the stars 🌟 by turning all bars 🟩 green and winning the marketing game 🏆!
        </motion.p>
      </motion.div>


      <div className="grid md:grid-cols-3 gap-8">
        {/* 🎯 Audience Card */}
        <motion.div
          className="bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100 p-6 rounded-[2rem] shadow-xl border-4 border-dashed border-purple-300 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* 🎉 Floating Background Emoji */}
          <motion.div
            className="absolute text-3xl top-3 right-4"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <PartyPopper className="w-6 h-6 text-pink-400" />
          </motion.div>

          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-7 h-7 text-purple-500" />
            <h3 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 drop-shadow">
              👥 Set Your Cool Audience!
            </h3>
          </div>

          {[
            {
              label: "🎂 Choose Age Group",
              value: age,
              setter: setAge,
              icon: <UserCircle className="w-5 h-5 inline mr-1 text-purple-400" />,
              options: ["13–18", "19–25", "26–35"],
            },
            {
              label: "🎨 Select Interest",
              value: interest,
              setter: setInterest,
              icon: <Paintbrush className="w-5 h-5 inline mr-1 text-pink-400" />,
              options: ["Skincare", "Eco-friendly", "Influencer fans"],
            },
            {
              label: "📍 Pick Location",
              value: location,
              setter: setLocation,
              icon: <MapPin className="w-5 h-5 inline mr-1 text-yellow-400" />,
              options: ["Tier 1 cities", "Tier 2 towns", "Pan-India"],
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="mb-5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <label className="block mb-1 text-md font-bold text-gray-700 tracking-wide">
                {item.icon}
                {item.label}
              </label>
              <select
                value={item.value}
                onChange={(e) => item.setter(e.target.value)}
                className="w-full p-3 rounded-xl bg-white border border-purple-200 shadow-inner text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              >
                {item.options.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </motion.div>
          ))}
        </motion.div>


        {/* 📊 Metrics Card */}
        <motion.div
          className="bg-gradient-to-br from-blue-100 via-white to-pink-100 p-6 rounded-[2.5rem] shadow-2xl border-l-[10px] border-blue-400 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* 🎊 Floating Celebration Icon */}
          <motion.div
            className="absolute top-4 right-4 text-blue-400 "
            animate={{ y: [0, -6, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <PartyPopper className="w-6 h-6 " />
          </motion.div>

          {/* 📊 Title with Animation */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <BarChart3 className="w-7 h-7 text-blue-500 animate-pulse" />
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 drop-shadow-sm tracking-wide">
              Live Campaign Metrics
            </h3>
          </motion.div>

          {/* 📈 Metric Bars */}
          <div className="space-y-4">
            <AnimatedMetricBar
              icon={<Gauge className="w-5 h-5 text-blue-500 inline" />}
              label="Reach"
              value={audienceMetrics.reach}
              max={1500}
              ideal="1200–1500"
            />
            <AnimatedMetricBar
              icon={<Sparkles className="w-5 h-5 text-purple-400 inline" />}
              label="Relevance"
              value={parseFloat(audienceMetrics.relevance)}
              max={5}
              ideal="4.0–5.0"
            />
            <AnimatedMetricBar
              icon={<Flame className="w-5 h-5 text-orange-400 inline" />}
              label="CTR (%)"
              value={parseFloat(audienceMetrics.ctr)}
              max={5}
              ideal="> 3.5%"
            />
            <AnimatedMetricBar
              icon={<Coins className="w-5 h-5 text-yellow-400 inline" />}
              label="CPC (₹)"
              value={parseFloat(budgetMetrics.cpc)}
              max={3.5}
              ideal="₹2.50–₹3.00"
              type="currency"
            />
            <AnimatedMetricBar
              icon={<TrendingUp className="w-5 h-5 text-green-500 inline" />}
              label="Conversions"
              value={budgetMetrics.conversions}
              max={500}
              ideal="> 400"
            />
            <AnimatedMetricBar
              icon={<BarChart3 className="w-5 h-5 text-pink-500 inline" />}
              label="Reach per ₹"
              value={budgetMetrics.reachPerRupee}
              max={3500}
              ideal="> 2400"
            />
          </div>

          {/* ⚠️ Tip Message */}
          {!audienceMetrics.isMatch && (
            <motion.p
              className="text-sm italic text-red-500 mt-4 flex items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Info className="w-4 h-4 text-red-400" />
              ⚠️ Tip: This age group prefers “{ageInterestCompatibility[age]}” for better results!
            </motion.p>
          )}
        </motion.div>


        <motion.div
          className="bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-100 p-6 rounded-[2rem] shadow-xl border-4 border-dashed border-yellow-300 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* 🎉 Floating Emoji */}
          <motion.div
            className="absolute text-3xl top-3 right-4"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <PartyPopper className="w-6 h-6 text-yellow-400" />
          </motion.div>

          {/* Header */}
          <div className="flex items-center text-center justify-center gap-2 mb-5">
            <Sparkles className="w-7 h-7 text-yellow-500 animate-pulse" />
            <h3 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-orange-400 to-pink-400 drop-shadow tracking-wide">
              🧮 Budget Planner
            </h3>
          </div>

          {/* Inputs */}
          {[
            {
              label: "📱 Choose Platform",
              icon: <Smartphone className="w-5 h-5 inline mr-1 text-yellow-500" />,
              value: platform,
              setter: setPlatform,
              options: ["Reels", "Feed", "Stories"],
            },
            {
              label: "⏳ Campaign Duration",
              icon: <TimerReset className="w-5 h-5 inline mr-1 text-orange-400" />,
              value: duration,
              setter: (val) => setDuration(Number(val)),
              options: ["3 Days", "5 Days", "7 Days"],
              values: [3, 5, 7],
            },
            {
              label: "⏰ Best Timing",
              icon: <Clock4 className="w-5 h-5 inline mr-1 text-pink-400" />,
              value: timing,
              setter: setTiming,
              options: ["Morning", "Evening", "All Day"],
            },
          ].map(({ label, icon, value, setter, options, values }, i) => (
            <motion.div
              key={i}
              className="mb-5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <label className="block mb-1 text-md font-bold text-gray-700 tracking-wide">
                {icon} {label}
              </label>
              <select
                value={value}
                onChange={(e) =>
                  setter(values ? values[e.target.selectedIndex] : e.target.value)
                }
                className="w-full p-3 rounded-xl bg-white border border-yellow-200 shadow-inner text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
              >
                {options.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </motion.div>
          ))}
        </motion.div>

      </div>
      {/* 🚀 Next Stage Button */}
      <div className="flex justify-center gap-4 mt-10">
  {/* ✅ Next Stage Button */}
  <button
    disabled={!gonextStage}
    className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-lg shadow-xl transition-all duration-300 ${
      gonextStage
        ? "bg-gradient-to-r from-green-400 to-lime-500 hover:scale-105"
        : "bg-gray-300 cursor-not-allowed"
    }`}
    onClick={handleCompleteStage2}
  >
    Next Stage
    <ArrowRight className="w-5 h-5" />
  </button>

  {/* ✅ Restart Button (Styled to match) */}
  <button
    onClick={onRestart}
    className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-lg shadow-xl bg-pink-500 hover:bg-pink-600 transition-all duration-300"
  >
    <RotateCcw className="w-5 h-5" />
    Restart Game
  </button>
</div>


    </motion.div>
  );
};

export default TargetingStage;
