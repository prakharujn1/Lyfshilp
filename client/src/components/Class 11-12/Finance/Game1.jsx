import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  PieChart,
  BarChart3,
  Trophy, 
  Star,
  RefreshCw,
  Play,
  Settings,
  Award,
  Target,
  Shield,
  Zap,
  Activity,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useFinance } from "@/contexts/FinanceContext";  

const InvestoQuestPro = () => {
  const { completeFinanceChallenge } = useFinance();
  const [currentPage, setCurrentPage] = useState("intro");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [riskScore, setRiskScore] = useState(0);

  const [gameData, setGameData] = useState({
    capital: 100000,
    allocations: {
      fd: 0,
      bonds: 0,
      largeCap: 0,
      midCap: 0,
      equity: 0,
      gold: 0,
    },
    sipEnabled: false,
    currentYear: 0,
    yearlyData: [],
    totalWealth: 100000,
    events: [],
    badges: [],
    assetGrowth: {},
  });

  const assetTypes = {
    fd: {
      name: "Fixed Deposit",
      return: 6,
      variance: 0,
      risk: "Low",
      color: "bg-green-400",
      chartColor: "#10B981",
      icon: "🏦",
      tax: 10,
    },
    bonds: {
      name: "Govt Bonds",
      return: 7,
      variance: 1,
      risk: "Low",
      color: "bg-blue-400",
      chartColor: "#3B82F6",
      icon: "📊",
      tax: 0,
    },
    largeCap: {
      name: "Large Cap MF",
      return: 10,
      variance: 2,
      risk: "Medium",
      color: "bg-purple-400",
      chartColor: "#8B5CF6",
      icon: "📈",
      tax: 0,
    },
    midCap: {
      name: "Mid Cap MF",
      return: 13,
      variance: 4,
      risk: "Medium-High",
      color: "bg-orange-400",
      chartColor: "#F97316",
      icon: "🚀",
      tax: 0,
    },
    equity: {
      name: "Equity Market",
      return: 15,
      variance: 10,
      risk: "High",
      color: "bg-red-400",
      chartColor: "#EF4444",
      icon: "💎",
      tax: 0,
    },
    gold: {
      name: "Gold ETF",
      return: 8,
      variance: 4,
      risk: "Medium",
      color: "bg-yellow-400",
      chartColor: "#EAB308",
      icon: "🏅",
      tax: 0,
    },
  };

  const marketEvents = [
    {
      year: 2,
      event: "Tech Boom! 🚀",
      description: "Technology stocks surge dramatically!",
      effects: { equity: 25, largeCap: 15, midCap: 20 },
      type: "positive",
    },
    {
      year: 3,
      event: "Recession Hits! 📉",
      description: "Market crashes, safe havens rise",
      effects: { equity: -20, largeCap: -15, midCap: -25, gold: 10, bonds: 5 },
      type: "negative",
    },
    {
      year: 5,
      event: "Inflation Spike! 📈",
      description: "Rising prices affect returns",
      effects: { fd: -2, bonds: -3, gold: 15 },
      type: "mixed",
    },
    {
      year: 7,
      event: "Recovery Rally! 🎯",
      description: "Markets bounce back strong",
      effects: { equity: 30, largeCap: 20, midCap: 35 },
      type: "positive",
    },
    {
      year: 9,
      event: "Interest Rate Cut! 💰",
      description: "Low rates boost markets",
      effects: { equity: 15, largeCap: 12, midCap: 18, fd: -1 },
      type: "positive",
    },
  ];

  const calculateReturns = (year) => {
    let returns = {};
    const marketEvent = marketEvents.find((e) => e.year === year);

    Object.keys(assetTypes).forEach((asset) => {
      const baseReturn = assetTypes[asset].return;
      const variance = assetTypes[asset].variance;
      const randomFactor = (Math.random() - 0.5) * 2 * variance;
      let eventEffect = 0;

      if (marketEvent && marketEvent.effects[asset]) {
        eventEffect = marketEvent.effects[asset];
      }

      returns[asset] = baseReturn + randomFactor + eventEffect;
    });

    return { returns, event: marketEvent };
  };

  const runSimulation = async () => {
    setIsLoading(true);
    setLoadingProgress(0);

    // Simulate loading progress
    for (let i = 0; i <= 100; i += 10) {
      setLoadingProgress(i);
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    const yearlyResults = [];
    let currentWealth = { ...gameData.allocations };
    const events = [];
    const assetGrowthData = {};

    // Initialize asset growth tracking
    Object.keys(assetTypes).forEach((asset) => {
      assetGrowthData[asset] = [
        { year: 0, value: gameData.allocations[asset], return: 0, event: null },
      ];
    });

    for (let year = 1; year <= 10; year++) {
      const { returns, event } = calculateReturns(year);

      if (event) {
        events.push({ year, ...event });
      }

      // Apply returns and track growth
      Object.keys(currentWealth).forEach((asset) => {
        if (currentWealth[asset] > 0) {
          let growth = currentWealth[asset] * (returns[asset] / 100);
          if (assetTypes[asset].tax > 0) {
            growth *= 1 - assetTypes[asset].tax / 100;
          }
          currentWealth[asset] += growth;
        }
      });

      // Add SIP if enabled
      if (gameData.sipEnabled) {
        const sipAmount = 24000; // ₹2000 * 12 months
        const activeAssets = Object.keys(currentWealth).filter(
          (asset) => gameData.allocations[asset] > 0
        );
        if (activeAssets.length > 0) {
          const sipPerAsset = sipAmount / activeAssets.length;
          activeAssets.forEach((asset) => {
            currentWealth[asset] += sipPerAsset;
          });
        }
      }

      // Record asset growth
      Object.keys(currentWealth).forEach((asset) => {
        assetGrowthData[asset].push({
          year,
          value: currentWealth[asset],
          return: returns[asset],
          event: event && event.effects[asset] ? event.effects[asset] : null,
          eventType: event ? event.type : null,
        });
      });

      const totalWealth = Object.values(currentWealth).reduce(
        (sum, val) => sum + val,
        0
      );
      yearlyResults.push({
        year,
        wealth: totalWealth,
        returns,
        event,
        breakdown: { ...currentWealth },
      });
    }

    const finalWealth = yearlyResults[yearlyResults.length - 1].wealth;
    const cagr = Math.pow(finalWealth / 100000, 1 / 10) - 1;

    // Calculate badges
    const badges = [];
    if (cagr > 0.12) badges.push("Wealth Master 🏆");
    if (
      Object.keys(gameData.allocations).filter(
        (k) => gameData.allocations[k] > 0
      ).length >= 4
    )
      badges.push("Diversification Champion 🌟");
    if (gameData.sipEnabled) badges.push("SIP Superstar 💫");
    if (finalWealth > 300000) badges.push("Millionaire Mindset 💎");

    setGameData((prev) => ({
      ...prev,
      yearlyData: yearlyResults,
      totalWealth: finalWealth,
      events,
      badges,
      cagr,
      assetGrowth: assetGrowthData,
    }));

    setIsLoading(false);
    setCurrentPage("results");
    completeFinanceChallenge(0,0); // ✅ Mark challenge as complete
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const LoadingScreen = () => (
    <div className="fixed inset-10 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="animate-spin text-6xl mb-8">⚡</div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Running 10-Year Simulation...
        </h2>
        <div className="w-80 mx-auto bg-white/20 rounded-full h-4 mb-4">
          <div
            className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full transition-all duration-300"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
        <p className="text-xl text-blue-200 mb-4">
          {loadingProgress}% Complete
        </p>
        <div className="grid grid-cols-3 gap-4 text-white">
          <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
            <div className="text-2xl mb-1">📊</div>
            <div className="text-sm">Calculating Returns</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
            <div className="text-2xl mb-1">🎯</div>
            <div className="text-sm">Processing Events</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
            <div className="text-2xl mb-1">🏆</div>
            <div className="text-sm">Generating Report</div>
          </div>
        </div>
      </div>
    </div>
  );

  const IntroPage = () => (
    <div className="min-h-screen w-[90%] mt-5 mb-5 mx-auto rounded-xl bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-bounce mt-5 mb-8">
          <div className="text-8xl md:text-9xl mb-4">💰</div>
        </div>
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 animate-pulse">
          InvestoQuest Pro
        </h1>
        <p className="text-xl md:text-2xl text-blue-200 mb-8 animate-fade-in">
          Build a winning portfolio over the next 10 years! 🚀
        </p>

        {/* Game Instructions */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            📋 Game Rules & Instructions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
            <div>
              <h3 className="text-lg font-semibold text-yellow-300 mb-2">
                🎯 Objective
              </h3>
              <ul className="text-sm space-y-1 text-blue-200">
                <li>• Start with ₹1,00,000 capital</li>
                <li>• Allocate across 6 asset types</li>
                <li>• Survive 10 years of market volatility</li>
                <li>• Maximize your final wealth</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-300 mb-2">
                📊 Asset Types & Returns
              </h3>
              <ul className="text-sm space-y-1 text-blue-200">
                <li>• Fixed Deposit: 6% (Low Risk, 10% tax)</li>
                <li>• Govt Bonds: 7% (Low Risk)</li>
                <li>• Large Cap MF: 10% (Medium Risk)</li>
                <li>• Mid Cap MF: 13% (Medium-High Risk)</li>
                <li>• Equity Market: 15% (High Risk)</li>
                <li>• Gold ETF: 8% (Medium Risk)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-yellow-300 mb-2">
                🎲 Market Events
              </h3>
              <div className="text-sm space-y-1 text-blue-200">
                Sudden market events can dramatically impact associated assets
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-yellow-300 mb-2">
                📈 Risk Metrics
              </h3>
              <ul className="text-sm space-y-1 text-blue-200">
                <li>• Risk Score: 0-10 (based on variance)</li>
                <li>• Diversification: 0-100%</li>
                <li>• Must allocate 80%+ to start</li>
                <li>• Returns vary with market volatility</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-white">
          {Object.values(assetTypes).map((asset, i) => (
            <div
              key={i}
              className="bg-white/10 rounded-lg p-4 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-3xl mb-2">{asset.icon}</div>
              <div className="text-sm font-semibold">{asset.name}</div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage("setup")}
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full text-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
        >
          <Play className="w-6 h-6" />
          Start Investment Journey
        </button>
      </div>
    </div>
  );

  const SetupPage = () => {
    const totalAllocation = Object.values(gameData.allocations).reduce(
      (sum, val) => sum + val,
      0
    );
    const remainingCapital = gameData.capital - totalAllocation;

    const updateAllocation = (asset, value) => {
      setGameData((prev) => ({
        ...prev,
        allocations: {
          ...prev.allocations,
          [asset]: Math.max(
            0,
            Math.min(value, remainingCapital + prev.allocations[asset])
          ),
        },
      }));
    };

    const getRiskScore = () => {
      let riskScore = 0;

      Object.keys(gameData.allocations).forEach((asset) => {
        const weight = gameData.allocations[asset] / totalAllocation;
        const variance = assetTypes[asset].variance;
        riskScore += weight * variance;
      });

      setRiskScore(Math.round(riskScore * 10) / 10);
      // return Math.round(riskScore * 10) / 10;
    };

    const getDiversificationScore = () => {
      const nonZeroAssets = Object.values(gameData.allocations).filter(
        (val) => val > 0
      ).length;
      return Math.round((nonZeroAssets / Object.keys(assetTypes).length) * 100);
    };

    return (
      <div className="min-h-screen w-[90%] mt-5 mb-5 mx-auto rounded-xl bg-gradient-to-br from-green-100 to-blue-100 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Portfolio Setup 🎯
            </h1>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-green-100 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600">
                    ₹{gameData.capital.toLocaleString()}
                  </div>
                  <div className="text-green-700">Starting Capital</div>
                </div>
                <div className="bg-blue-100 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">
                    ₹{remainingCapital.toLocaleString()}
                  </div>
                  <div className="text-blue-700">Remaining</div>
                </div>
                <div className="bg-purple-100 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-600">
                    {`${riskScore ? riskScore : "0"}`}
                  </div>
                  <div className="text-purple-700">Risk Score</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {Object.entries(assetTypes).map(([key, asset]) => (
              <div
                key={key}
                className={`${asset.color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{asset.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold">{asset.name}</h3>
                      <p className="text-sm opacity-90">
                        {asset.return}% avg return • {asset.risk} risk
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">
                      ₹{gameData.allocations[key].toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max={remainingCapital + gameData.allocations[key]}
                    step="1000"
                    value={gameData.allocations[key]}
                    onChange={(e) =>
                      updateAllocation(key, parseInt(e.target.value))
                    }
                    className="w-full h-3 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm">
                    <span>₹0</span>
                    <span>
                      ₹
                      {(
                        remainingCapital + gameData.allocations[key]
                      ).toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="number"
                    value={gameData.allocations[key]}
                    onChange={(e) =>
                      updateAllocation(key, parseInt(e.target.value) || 0)
                    }
                    className="w-full p-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30"
                    placeholder="Enter amount"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-500" />
                SIP Investment
              </h3>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={gameData.sipEnabled}
                  onChange={(e) =>
                    setGameData((prev) => ({
                      ...prev,
                      sipEnabled: e.target.checked,
                    }))
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <p className="text-gray-600">
              Enable monthly SIP of ₹2,000 across your portfolio for better
              compounding! 📈
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-500" />
                Risk Meter
              </h3>
              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(getRiskScore() * 10, 100)}%` }}
                  ></div>
                </div>
                <div className="text-center mt-2 font-bold text-gray-700">
                  {/* Risk Score: {getRiskScore()}/10 */}
                  Risk Score: {`${riskScore ? riskScore : "0"}`}/10
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-green-500" />
                Diversification
              </h3>
              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-gradient-to-r from-blue-400 to-green-400 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${getDiversificationScore()}%` }}
                  ></div>
                </div>
                <div className="text-center mt-2 font-bold text-gray-700">
                  Diversification: {getDiversificationScore()}%
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={runSimulation}
              disabled={totalAllocation < gameData.capital * 0.8}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-full text-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
            >
              <BarChart3 className="w-6 h-6" />
              Start 10-Year Simulation
            </button>
            {totalAllocation < gameData.capital * 0.8 && (
              <p className="text-red-500 mt-2">
                Allocate at least 80% of your capital to start!
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };

  const ResultsPage = () => {
    const cagr = ((gameData.totalWealth / 100000) ** (1 / 10) - 1) * 100;
    const totalReturn = ((gameData.totalWealth - 100000) / 100000) * 100;
    const [selectedAsset, setSelectedAsset] = useState("all");

    const AssetGrowthChart = () => {
      const [selectedAsset, setSelectedAsset] = useState("all");

      // Transform data for Recharts
      const chartData = [];
      for (let year = 0; year <= 10; year++) {
        const yearData = { year: `Year ${year}` };

        Object.entries(gameData.assetGrowth).forEach(([assetKey, data]) => {
          if (data && data[year] && data[year].value > 0) {
            yearData[assetKey] = Math.round(data[year].value);
            yearData[`${assetKey}_return`] = data[year].return;
            yearData[`${assetKey}_event`] = data[year].event;
          }
        });

        chartData.push(yearData);
      }

      // Get assets to display
      const assetsToShow =
        selectedAsset === "all"
          ? Object.keys(assetTypes).filter(
              (key) =>
                gameData.assetGrowth[key] &&
                gameData.assetGrowth[key][0].value > 0
            )
          : [selectedAsset];

      // Custom tooltip
      const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-lg">
              <p className="font-bold text-gray-800">{label}</p>
              {payload.map((entry, index) => (
                <div key={index} className="flex items-center gap-2 mt-1">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-sm">
                    {assetTypes[entry.dataKey]?.name}: ₹
                    {entry.value?.toLocaleString()}
                  </span>
                  {chartData.find((d) => d.year === label)?.[
                    `${entry.dataKey}_return`
                  ] && (
                    <span className="text-xs text-gray-500 ml-2">
                      (
                      {chartData
                        .find((d) => d.year === label)
                        ?.[`${entry.dataKey}_return`]?.toFixed(1)}
                      %)
                    </span>
                  )}
                </div>
              ))}
            </div>
          );
        }
        return null;
      };

      return (
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
              Asset Growth Over 10 Years 📊
            </h3>
            <select
              value={selectedAsset}
              onChange={(e) => setSelectedAsset(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Assets</option>
              {Object.entries(assetTypes)
                .filter(
                  ([key]) =>
                    gameData.assetGrowth[key] &&
                    gameData.assetGrowth[key][0].value > 0
                )
                .map(([key, asset]) => (
                  <option key={key} value={key}>
                    {asset.name}
                  </option>
                ))}
            </select>
          </div>

          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="year" stroke="#6B7280" fontSize={12} />
                <YAxis
                  stroke="#6B7280"
                  fontSize={12}
                  tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}K`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  formatter={(value) => (
                    <span className="flex items-center gap-2">
                      {assetTypes[value]?.icon} {assetTypes[value]?.name}
                    </span>
                  )}
                />

                {assetsToShow.map((assetKey) => (
                  <Line
                    key={assetKey}
                    type="monotone"
                    dataKey={assetKey}
                    stroke={assetTypes[assetKey].chartColor}
                    strokeWidth={3}
                    dot={{
                      fill: assetTypes[assetKey].chartColor,
                      strokeWidth: 2,
                      r: 4,
                    }}
                    activeDot={{
                      r: 6,
                      stroke: assetTypes[assetKey].chartColor,
                      strokeWidth: 2,
                      fill: "#fff",
                    }}
                    connectNulls={false}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Legend with performance summary */}
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            {assetsToShow.map((key) => {
              const asset = assetTypes[key];
              const finalValue =
                gameData.assetGrowth[key]?.[
                  gameData.assetGrowth[key].length - 1
                ]?.value || 0;
              const initialValue = gameData.assetGrowth[key]?.[0]?.value || 1;
              const growth =
                ((finalValue / initialValue) ** (1 / 10) - 1) * 100;

              return (
                <div
                  key={key}
                  className="flex items-center gap-2 bg-gray-50 rounded-lg p-3"
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: asset.chartColor }}
                  />
                  <div>
                    <span className="text-sm font-medium text-gray-700">
                      {asset.icon} {asset.name}
                    </span>
                    <div className="text-xs text-gray-500">
                      CAGR: {growth.toFixed(1)}%
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    };

    return (
      <div className="min-h-screen w-[90%] mt-5 mb-5 mx-auto rounded-xl bg-gradient-to-br from-yellow-100 to-orange-100 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              🎉 Your Investment Journey Results! 🎉
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-xl p-6 text-white shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold">
                  ₹{gameData.totalWealth.toLocaleString()}
                </div>
                <div className="text-green-100">Final Wealth</div>
              </div>
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl p-6 text-white shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold">{cagr.toFixed(1)}%</div>
                <div className="text-blue-100">CAGR</div>
              </div>
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl p-6 text-white shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold">
                  {totalReturn.toFixed(1)}%
                </div>
                <div className="text-purple-100">Total Return</div>
              </div>
            </div>
          </div>

          {/* Enhanced Asset Growth Chart */}
          <AssetGrowthChart />

          {/* Market Events Timeline */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Activity className="w-6 h-6 text-red-500" />
              Market Events Timeline 📅
            </h3>
            <div className="space-y-4">
              {gameData.events.map((event, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4 ${
                    event.type === "positive"
                      ? "bg-green-50 border-green-400"
                      : event.type === "negative"
                      ? "bg-red-50 border-red-400"
                      : "bg-yellow-50 border-yellow-400"
                  }`}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">
                        Year {event.year}: {event.event}
                      </h4>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                    <div className="mt-2 md:mt-0 flex flex-wrap gap-2">
                      {Object.entries(event.effects).map(([asset, effect]) => (
                        <span
                          key={asset}
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            effect > 0
                              ? "bg-green-200 text-green-800"
                              : "bg-red-200 text-red-800"
                          }`}
                        >
                          {assetTypes[asset].icon} {effect > 0 ? "+" : ""}
                          {effect}%
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Portfolio Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <PieChart className="w-6 h-6 text-blue-500" />
                Final Portfolio Value
              </h3>
              <div className="space-y-4">
                {Object.entries(
                  gameData.yearlyData[gameData.yearlyData.length - 1]
                    ?.breakdown || {}
                ).map(([asset, value]) => {
                  if (value > 1000) {
                    const percentage = (
                      (value / gameData.totalWealth) *
                      100
                    ).toFixed(1);
                    return (
                      <div
                        key={asset}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">
                            {assetTypes[asset].icon}
                          </span>
                          <div>
                            <div className="font-semibold text-gray-800">
                              {assetTypes[asset].name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {percentage}% of portfolio
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-800">
                            ₹{value.toLocaleString()}
                          </div>
                          <div className="text-sm text-green-600">
                            +₹
                            {(
                              value - gameData.allocations[asset]
                            ).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-500" />
                Achievements & Badges
              </h3>
              <div className="space-y-3">
                {gameData.badges.map((badge, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-2xl">
                      {badge.includes("Master")
                        ? "🏆"
                        : badge.includes("Champion")
                        ? "🌟"
                        : badge.includes("Superstar")
                        ? "💫"
                        : "💎"}
                    </div>
                    <span className="font-semibold text-gray-800">{badge}</span>
                  </div>
                ))}
                {gameData.badges.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <div className="text-4xl mb-2">🎯</div>
                    <p>No badges earned yet. Try different strategies!</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* SIP Impact Analysis */}
          {gameData.sipEnabled && (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-500" />
                SIP Power Analysis ⚡
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    ₹2,40,000
                  </div>
                  <div className="text-gray-600">Total SIP Investment</div>
                  <div className="text-sm text-gray-500">
                    (₹2,000 × 120 months)
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">
                    ₹{(gameData.totalWealth - 100000 - 240000).toLocaleString()}
                  </div>
                  <div className="text-gray-600">SIP Returns</div>
                  <div className="text-sm text-gray-500">
                    Power of compounding!
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {(
                      ((gameData.totalWealth - 100000) / 240000 - 1) *
                      100
                    ).toFixed(1)}
                    %
                  </div>
                  <div className="text-gray-600">SIP CAGR</div>
                  <div className="text-sm text-gray-500">
                    Systematic investing wins!
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setCurrentPage("setup");
                setGameData((prev) => ({
                  ...prev,
                  allocations: {
                    fd: 0,
                    bonds: 0,
                    largeCap: 0,
                    midCap: 0,
                    equity: 0,
                    gold: 0,
                  },
                  yearlyData: [],
                  events: [],
                  badges: [],
                  assetGrowth: {},
                }));
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
            >
              <RefreshCw className="w-5 h-5" />
              Try New Strategy
            </button>
            <button
              onClick={() => {
                setCurrentPage("intro");
                setGameData((prev) => ({
                  ...prev,
                  allocations: {
                    fd: 0,
                    bonds: 0,
                    largeCap: 0,
                    midCap: 0,
                    equity: 0,
                    gold: 0,
                  },
                  yearlyData: [],
                  events: [],
                  badges: [],
                  assetGrowth: {},
                }));
              }}
              className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
            >
              <Play className="w-5 h-5" />
              Start Over
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {isLoading && <LoadingScreen />}
      {currentPage === "intro" && <IntroPage />}
      {currentPage === "setup" && <SetupPage />}
      {currentPage === "results" && <ResultsPage />}
    </div>
  );
};

export default InvestoQuestPro;
