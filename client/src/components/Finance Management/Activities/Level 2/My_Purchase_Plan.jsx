import { useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Legend,
  Label,
} from "recharts";
import { CheckCircle, AlertCircle } from "lucide-react";

const APIKEY = import.meta.env.VITE_API_KEY;

const My_Purchase_Plan = () => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [months, setMonths] = useState("");
  const [emiAvailable, setEmiAvailable] = useState(false);
  const [interestRate, setInterestRate] = useState("");
  const [discountAvailable, setDiscountAvailable] = useState(false);
  const [discountPercent, setDiscountPercent] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const parsePossiblyStringifiedJSON = (text) => {
    try {
      return typeof text === "string" ? JSON.parse(text) : text;
    } catch {
      try {
        const jsonMatch = text.match(/{[\s\S]*}/);
        if (jsonMatch) return JSON.parse(jsonMatch[0]);
      } catch (e) {
        console.error("Fallback JSON parse failed:", e);
      }
      return { error: "Failed to parse Gemini output." };
    }
  };

  const generatePlan = async () => {
    if (!product.trim() || !price || !months) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    const prompt = `
I want to buy "${product}" priced approximately at ₹${price}.
Please help with:
1. Break down a ${months}-month saving plan showing savings for each month.
${
  emiAvailable
    ? `2. Suggest an EMI plan with ${interestRate}% monthly interest for ${months} months.`
    : "2. EMI is not available."
}
${
  discountAvailable
    ? `3. Show the discounted price if there's a ${discountPercent}% discount.`
    : "3. Discount is not available."
}
4. Suggest 5 alternatives: all cheaper.

### FINAL INSTRUCTION ###
Return ONLY raw JSON (no markdown or text).
Format:
{
  "monthlySavings": ["₹1000", "₹1000", ...],
  "emiOption": {
    "monthlyPayment": "₹...",
    "totalPayment": "₹..."
  },
  "discountedPrice": "₹...",
  "alternatives": ["...", "..."]
}`;

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${APIKEY}`,
        {
          contents: [{ parts: [{ text: prompt }] }],
        }
      );

      const aiReply =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
      const parsed = parsePossiblyStringifiedJSON(aiReply);
      setResult(parsed);
      console.log(parsed);
    } catch (err) {
      console.error(err);
      setError("Error generating plan. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const getChartData = () => {
    if (!result?.monthlySavings) return [];
    const rainbow = [
      "#FF6B6B",
      "#FFD93D",
      "#6BCB77",
      "#4D96FF",
      "#A66DD4",
      "#FF9CEE",
    ];
    return result.monthlySavings.map((val, i) => {
      const numericAmount = Number(val.replace(/[₹,]/g, ""));
      return {
        month: `Month ${i + 1}`,
        amount: numericAmount,
        label: `₹${numericAmount.toLocaleString("en-IN")}`,
        fill: rainbow[i % rainbow.length],
      };
    });
  };

  console.log(discountPercent, typeof discountPercent);

  return (
    <div className="w-[90%] mx-auto p-5">
      <div
        className="bg-gradient-to-tr  from-yellow-100 via-pink-100 to-blue-100 p-6 flex flex-col items-center rounded-lg "
        style={{ fontFamily: "'Comic Neue', cursive" }}
      >
        <div className="w-full max-w-3xl relative bg-white rounded-3xl shadow-2xl p-8 border-4 border-pink-300">
          <h2 className="text-4xl text-center font-extrabold text-pink-600 mb-8 animate-bounce">
            🎮 My Purchase Plan 🛍️
          </h2>

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <input
              type="text"
              placeholder="🎁 Product name"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="rounded-xl border-2 border-pink-400 p-4 text-lg shadow-md focus:outline-none focus:ring-4 focus:ring-pink-300 transition-all"
            />
            <input
              type="number"
              placeholder="💰 Price (₹)"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="rounded-xl border-2 border-yellow-400 p-4 text-lg shadow-md focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all"
            />
            <input
              type="number"
              placeholder="📅 Duration (months)"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              className="rounded-xl border-2 border-blue-400 p-4 text-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
            />
          </div>

          {/* EMI & Discount Checkboxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center flex-wrap gap-3 bg-pink-50 p-4 rounded-xl shadow">
              <input
                type="checkbox"
                checked={emiAvailable}
                onChange={() => setEmiAvailable(!emiAvailable)}
                className="w-6 h-6 accent-green-500"
                id="emiAvailable"
              />
              <label
                htmlFor="emiAvailable"
                className="cursor-pointer text-pink-700 font-semibold"
              >
                ✅ EMI Available?
              </label>
              <input
                type="text"
                placeholder="Interest %"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="ml-4 border-2 border-green-300 rounded-lg px-4 py-2 w-28"
                disabled={!emiAvailable}
              />
            </div>

            <div className="flex items-center flex-wrap gap-3 bg-yellow-50 p-4 rounded-xl shadow">
              <input
                type="checkbox"
                checked={discountAvailable}
                onChange={() => setDiscountAvailable(!discountAvailable)}
                className="w-6 h-6 accent-yellow-400"
                id="discountAvailable"
              />
              <label
                htmlFor="discountAvailable"
                className="cursor-pointer text-yellow-700 font-semibold"
              >
                🎁 Discount Available?
              </label>
              <input
                type="text"
                placeholder="Discount %"
                value={discountPercent}
                onChange={(e) => setDiscountPercent(e.target.value)}
                className="ml-4 border-2 border-yellow-300 rounded-lg px-4 py-2 w-28"
                disabled={!discountAvailable}
              />
            </div>
          </div>

          {/* Button */}
          <button
            onClick={generatePlan}
            disabled={loading}
            className={`w-full py-4 text-white text-xl rounded-full font-bold transition-all duration-300 shadow-lg ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 hover:brightness-110 hover:scale-105"
            }`}
          >
            {loading ? "Generating..." : "✨ Get My Fun Plan! ✨"}
          </button>

          {/* Error Message */}
          {error && (
            <div className="mt-4 text-red-600 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              {error}
            </div>
          )}

          {/* Results Section */}
          {result && !result.error && (
            <div className="bg-white border-4 border-yellow-300 mt-8 rounded-2xl shadow-xl p-6 space-y-6 animate-fade-in">
              <div className="text-green-700 font-bold flex items-center gap-2 text-xl">
                <CheckCircle className="w-6 h-6" />
                Plan generated successfully! 🎉
              </div>

              {/* Chart Section */}
              <div>
                <h3 className="text-2xl font-bold text-purple-700 mb-4">
                  📊 Monthly Savings
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={getChartData()}
                      margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                    >
                      <CartesianGrid strokeDasharray="4 4" />
                      <XAxis dataKey="month">
                        <Label value="" offset={-5} position="insideBottom" />
                      </XAxis>
                      <YAxis>
                        <Label
                          value="₹ Saved"
                          angle={-90}
                          position="insideLeft"
                        />
                      </YAxis>
                      <Tooltip
                        formatter={(value) => [
                          `₹${Number(value).toLocaleString("en-IN")}`,
                          "Saved",
                        ]}
                      />
                      <Legend />
                      <Bar
                        dataKey="amount"
                        name="Savings"
                        fill="url(#colorPink)"
                        isAnimationActive={true}
                        animationDuration={1500}
                        onMouseEnter={(e) => {
                          e.target.style.fill = "#ff1493";
                          e.target.style.filter =
                            "drop-shadow(0 0 6px #ff69b4)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.fill = "url(#colorPink)";
                          e.target.style.filter = "none";
                        }}
                      >
                        <LabelList
                          dataKey="label"
                          position="top"
                          fontSize={14}
                          fill="#ff1493"
                          // style={{ animation: "bounce 1s infinite" }}
                        />
                      </Bar>

                      <defs>
                        <linearGradient
                          id="colorPink"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#ff69b4"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#ff1493"
                            stopOpacity={0.2}
                          />
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* EMI Section */}
              {result.emiOption && (
                <div>
                  <h3 className="text-2xl font-bold text-purple-700 mb-2">
                    📈 EMI Plan
                  </h3>
                  <p className="bg-red-200 font-semibold text-xl p-3 mr-5 inline-block rounded-lg">
                    <strong>Monthly:</strong> {result.emiOption.monthlyPayment}
                  </p>
                  <p className="bg-blue-200 font-semibold mr-5 text-xl p-3 inline-block rounded-lg">
                    <strong>Total:</strong> {result.emiOption.totalPayment}
                  </p>
                  <p className="bg-green-200 font-semibold text-xl p-3 inline-block rounded-lg">
                    <strong>Extra: </strong>
                    {`${result?.emiOption?.totalPayment - price}`}
                  </p>
                </div>
              )}

              {/* Discount Section */}
              {discountAvailable && (
                <div>
                  <h3 className="text-2xl font-bold text-purple-700 mb-2">
                    🎉 Discounted Price
                  </h3>
                  <p>
                    <strong>{discountPercent}% off:</strong>{" "}
                    {result.discountedPrice}
                  </p>
                </div>
              )}

              {/* Alternatives Section */}
              {result.alternatives?.length > 0 && (
                <div className="bg-gradient-to-br from-pink-100 to-yellow-100 rounded-2xl p-6 border-4 border-purple-300 shadow-2xl">
                  <h3 className="text-3xl text-center font-extrabold text-purple-700 mb-6 drop-shadow-md">
                    🌈 Cheaper & Fun Alternatives 🎉
                  </h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
                    {result.alternatives.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl p-4 border-2 border-yellow-300 shadow-lg transform transition-all hover:scale-105 hover:rotate-1 hover:bg-yellow-50 text-center"
                      >
                        <h4 className="text-lg font-bold text-blue-600 mb-2">
                          🧸 Option {idx + 1}
                        </h4>
                        <p className="text-gray-800 font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-center mt-6 text-pink-600 font-semibold">
                    ✨ Pick one that saves money & still brings joy! ✨
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default My_Purchase_Plan;
