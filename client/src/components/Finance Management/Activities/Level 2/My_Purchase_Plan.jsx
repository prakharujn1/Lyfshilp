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

const APIKEY = "AIzaSyDxF9hs4z0ZvCNOFGNBqhZmCfccstydH4k";

const My_Purchase_Plan = () => {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [months, setMonths] = useState("");

  const [emiAvailable, setEmiAvailable] = useState(false);
  const [interestRate, setInterestRate] = useState("2");

  const [discountAvailable, setDiscountAvailable] = useState(false);
  const [discountPercent, setDiscountPercent] = useState("10");

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

${emiAvailable ? `2. Suggest an EMI plan with ${interestRate}% monthly interest for ${months} months. 
Explain simply: Multiply monthly EMI without interest and add interest to each month.` : "2. EMI is not available."}

${discountAvailable ? `3. Show the discounted price if there's a ${discountPercent}% discount.
Explain it in a very simple way: Multiply price by ${discountPercent}%, subtract that from original price.` : "3. Discount is not available."}

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

      const aiReply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
      const parsed = parsePossiblyStringifiedJSON(aiReply);
      setResult(parsed);
    } catch (err) {
      console.error(err);
      setError("Error generating plan. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const getChartData = () => {
    if (!result?.monthlySavings) return [];
    return result.monthlySavings.map((val, i) => {
      const numericAmount = Number(val.replace(/[₹,]/g, ""));
      return {
        month: `Month ${i + 1}`,
        amount: numericAmount,
        label: `₹${numericAmount.toLocaleString("en-IN")}`,
      };
    });
  };

  const numericPrice = Number(price) || 0;
  const numericMonths = Number(months) || 1;
  const numericInterest = Number(interestRate) || 0;
  const numericDiscount = Number(discountPercent) || 0;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">My Purchase Plan</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
        <input
          type="text"
          placeholder="Product name"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Estimated price (INR)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 rounded"
          min={0}
        />
        <input
          type="number"
          placeholder="Plan duration (months)"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
          className="border p-2 rounded"
          min={1}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* EMI Section: checkbox + input side-by-side always */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={emiAvailable}
            onChange={() => setEmiAvailable(!emiAvailable)}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            id="emiAvailable"
          />
          <label htmlFor="emiAvailable" className="font-medium text-gray-700 cursor-pointer">
            EMI Available?
          </label>

          <div className="flex items-center ml-4 space-x-2 border border-gray-300 rounded-md p-2 w-32">
            <input
              type="number"
              placeholder="EMI Interest Rate"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full outline-none"
              min={0}
              step="0.01"
              aria-label="EMI Interest Rate"
              disabled={!emiAvailable}
            />
            <span className={`text-gray-600 font-semibold ${!emiAvailable ? "opacity-50" : ""}`}>%</span>
          </div>
        </div>

        {/* Discount Section: checkbox + input side-by-side always */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={discountAvailable}
            onChange={() => setDiscountAvailable(!discountAvailable)}
            className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
            id="discountAvailable"
          />
          <label htmlFor="discountAvailable" className="font-medium text-gray-700 cursor-pointer">
            Discount Available?
          </label>

          <div className="flex items-center ml-4 space-x-2 border border-gray-300 rounded-md p-2 w-32">
            <input
              type="number"
              placeholder="Discount"
              value={discountPercent}
              onChange={(e) => setDiscountPercent(e.target.value)}
              className="w-full outline-none"
              min={0}
              max={100}
              step="0.01"
              aria-label="Discount Percentage"
              disabled={!discountAvailable}
            />
            <span className={`text-gray-600 font-semibold ${!discountAvailable ? "opacity-50" : ""}`}>%</span>
          </div>
        </div>
      </div>

      {emiAvailable && (
        <p className="text-sm text-gray-600 mb-2">
          <b>EMI:</b> EMI means you pay monthly with added interest. For example, ₹5000 over 5 months
          with 2% interest means you pay a little more than ₹1000 each month.
        </p>
      )}

      <button
        onClick={generatePlan}
        className="bg-blue-600 text-white w-full py-2 rounded font-semibold"
        disabled={loading}
      >
        {loading ? "Generating..." : "Get Plan"}
      </button>

      {error && (
        <div className="mt-4 text-red-600 flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          {error}
        </div>
      )}

      {result && !result.error && (
        <div className="bg-white shadow-md rounded mt-6 p-4 space-y-4 border">
          <div className="text-green-700 font-semibold flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Plan generated successfully!
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-center">Monthly Savings Report</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={getChartData()}
                  margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month">
                    <Label value="Month" offset={-10} position="insideBottom" />
                  </XAxis>
                  <YAxis>
                    <Label value="Savings (₹)" angle={-90} position="insideLeft" />
                  </YAxis>
                  <Tooltip
                    formatter={(value) => [
                      `₹${Number(value).toLocaleString("en-IN")}`,
                      "Amount",
                    ]}
                  />
                  <Legend verticalAlign="top" height={36} />
                  <Bar dataKey="amount" name="Monthly Savings" fill="#2563eb">
                    <LabelList dataKey="label" position="top" fill="#000" fontSize={12} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {emiAvailable &&
            <div className=" mx-auto p-4 bg-white rounded-md border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">📆 EMI Option:</h4>

              {/* Step 1: Interest Calculation */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-blue-700 mb-1 uppercase tracking-wide">
                  Step 1: Calculate Total Interest
                </p>
                <code className="block bg-blue-100 text-blue-900 rounded-md px-3 py-1 text-xs font-mono mb-2 select-text shadow-sm">
                  Interest = Principal × (Interest Rate / 100) × Months
                </code>
                <p className="text-sm font-semibold text-gray-800">
                  Interest = <span className="text-blue-600">₹{price.toLocaleString("en-IN")}</span> × <span className="text-blue-600">({interestRate} / 100)</span> × <span className="text-blue-600">{months}</span> = <span className="font-bold text-green-700">₹{Math.round(price * (interestRate / 100) * months).toLocaleString("en-IN")}</span>
                </p>
              </div>

              {/* Step 2: Total Payment */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-blue-700 mb-1 uppercase tracking-wide">
                  Step 2: Calculate Total Payment
                </p>
                <code className="block bg-blue-100 text-blue-900 rounded-md px-3 py-1 text-xs font-mono mb-2 select-text shadow-sm">
                  Total Payment = Principal + Total Interest
                </code>
                <p className="text-sm font-semibold text-gray-800">
                  Total Payment = <span className="text-blue-600">₹{price.toLocaleString("en-IN")}</span> + <span className="text-blue-600">₹{Math.round(price * (interestRate / 100) * months).toLocaleString("en-IN")}</span> = <span className="font-bold text-green-700">{result.emiOption.totalPayment.toLocaleString("en-IN")}</span>
                </p>
              </div>

              {/* Step 3: Monthly EMI */}
              <div>
                <p className="text-sm font-semibold text-blue-700 mb-1 uppercase tracking-wide">
                  Step 3: Calculate Monthly EMI
                </p>
                <code className="block bg-blue-100 text-blue-900 rounded-md px-3 py-1 text-xs font-mono mb-2 select-text shadow-sm">
                  EMI = Total Payment / Months
                </code>
                <p className="text-sm font-semibold text-gray-800">
                  EMI = <span className="text-blue-600">{result.emiOption.totalPayment.toLocaleString("en-IN")}</span> / <span className="text-blue-600">{months}</span> = <span className="font-bold text-green-700">{result.emiOption.monthlyPayment.toLocaleString("en-IN")}</span>
                </p>
              </div>
            </div>
          }

          {discountAvailable &&
            <div className=" mx-auto p-4 bg-white rounded-md border border-gray-200">
              <h4 className="font-bold text-gray-700 mb-4">🏷️ Discounted Price:</h4>

              {/* Step 1: Calculate Discount Amount */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-blue-700 mb-1 uppercase tracking-wide">
                  Step 1: Calculate Discount Amount
                </p>
                <code className="block bg-blue-100 text-blue-900 rounded-md px-3 py-1 text-xs font-mono mb-2 select-text shadow-sm">
                  Discount = Original Price × (Discount% / 100)
                </code>
                <p className="text-sm font-semibold text-gray-800">
                  Discount = <span className="text-blue-600">₹{price.toLocaleString("en-IN")}</span> × <span className="text-blue-600">({discountPercent} / 100)</span> = <span className="font-bold text-green-700">₹{Math.round(price * (discountPercent / 100)).toLocaleString("en-IN")}</span>
                </p>
              </div>

              {/* Step 2: Calculate Final Discounted Price */}
              <div>
                <p className="text-sm font-semibold text-blue-700 mb-1 uppercase tracking-wide">
                  Step 2: Calculate Final Price After Discount
                </p>
                <code className="block bg-blue-100 text-blue-900 rounded-md px-3 py-1 text-xs font-mono mb-2 select-text shadow-sm">
                  Discounted Price = Original Price - Discount
                </code>
                <p className="text-sm font-semibold text-gray-800">
                  Discounted Price = <span className="text-blue-600">₹{price.toLocaleString("en-IN")}</span> - <span className="text-blue-600">₹{Math.round(price * (discountPercent / 100)).toLocaleString("en-IN")}</span> = <span className="font-bold text-green-700">{result.discountedPrice.toLocaleString("en-IN")}</span>
                </p>
              </div>
            </div>

          }


          <div>
            <h4 className="font-bold text-gray-700">💡 Cheaper Alternatives:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {(result.alternatives || []).map((alt, idx) => (
                <li key={idx}>{alt}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {result?.error && (
        <div className="mt-4 text-red-600 font-semibold">{result.error}</div>
      )}
    </div>
  );
};

export default My_Purchase_Plan;
