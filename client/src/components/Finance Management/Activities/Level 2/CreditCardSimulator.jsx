import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const items = [
  { name: "Smartphone", cost: 9000 },
  { name: "Gaming Console", cost: 10000 },
  { name: "Headphones", cost: 4000 },
  { name: "Dinner Party", cost: 3000 },
];

const interestRate = 0.035; // 3.5% monthly interest
const minPaymentRate = 0.05; // 5% minimum due
const totalMonths = 6;

const calculateEMI = (principal, rate, months) => {
  const r = rate;
  const n = months;
  return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
};

export default function CreditCardSimulator() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [debt, setDebt] = useState(0);
  const [userPayments, setUserPayments] = useState([]);
  const [month, setMonth] = useState(1);
  const [done, setDone] = useState(false);
  const [showCalc, setShowCalc] = useState(false);
  const [emiAmount, setEmiAmount] = useState(0);
  const [remainingPrincipal, setRemainingPrincipal] = useState(0);

  const handlePurchase = (item) => {
    setSelectedItem(item);
    setDebt(item.cost);
    setRemainingPrincipal(item.cost);
    setUserPayments([]);
    setMonth(1);
    setDone(false);
    setPaymentMethod(null);
  };

  const chooseMethod = (method) => {
    setPaymentMethod(method);
    if (method === "emi") {
      const emi = calculateEMI(debt, interestRate, totalMonths);
      setEmiAmount(emi);
    }
  };

  const handleMinPayment = () => {
    const minDue = Math.max(debt * minPaymentRate, 100);
    const interest = (debt - minDue) * interestRate;
    const newDebt = debt - minDue + interest;

    setUserPayments([
      ...userPayments,
      {
        month,
        type: "Min Due",
        interest: Math.round(interest),
        payment:
          month === totalMonths ? Math.round(newDebt) : Math.round(minDue),
        remaining: Math.round(newDebt),
      },
    ]);

    if (month === totalMonths || newDebt <= 0) {
      setDone(true);
    } else {
      setDebt(newDebt);
      setMonth(month + 1);
    }
  };

  const handleEMIPayment = () => {
    const interest = remainingPrincipal * interestRate;
    const principalComponent = emiAmount - interest;
    const newPrincipal = remainingPrincipal - principalComponent;

    setUserPayments([
      ...userPayments,
      {
        month,
        type: "EMI",
        interest: Math.round(interest),
        payment: Math.round(emiAmount),
        remaining: Math.round(newPrincipal),
      },
    ]);

    if (month === totalMonths || newPrincipal <= 0) {
      setDone(true);
    } else {
      setRemainingPrincipal(newPrincipal);
      setMonth(month + 1);
    }
  };

  const totalPaid = userPayments.reduce((sum, p) => sum + p.payment, 0);

  const chartData = selectedItem
    ? [
        { name: "Original Price", amount: selectedItem.cost },
        { name: "Total Paid", amount: totalPaid },
      ]
    : [];

  return (
    <div className="w-[90%] mx-auto">
      <div
        className="max-w-3xl mx-auto p-6 mt-8 bg-gradient-to-br from-purple-200 to-blue-100 rounded-3xl shadow-2xl border-4 border-pink-300"
        style={{ fontFamily: "'Comic Neue', cursive" }}
      >
        <h1 className="text-4xl font-extrabold text-pink-600 text-center mb-6">
          🎮 KidzPay - Spend Smart!
        </h1>

        {!selectedItem ? (
          <>
            <p className="mb-4 text-purple-800 text-center text-lg font-semibold">
              🛍️ Pick something fun to buy!
            </p>
            <div className="grid grid-cols-2 gap-4">
              {items.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handlePurchase(item)}
                  className="border-2 border-purple-400 rounded-xl p-4 bg-white hover:bg-purple-100 transform hover:scale-105 transition font-bold text-lg text-blue-700 shadow-md"
                >
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p>₹{item.cost.toLocaleString()}</p>
                </button>
              ))}
            </div>
          </>
        ) : !paymentMethod ? (
          <>
            <p className="text-center mt-6 text-lg text-purple-800 font-semibold">
              💰 How would you like to pay?
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => chooseMethod("min")}
                className="bg-yellow-300 text-purple-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transform hover:scale-105 transition shadow-lg"
              >
                Credit Card (Min Due)
              </button>
              <button
                onClick={() => chooseMethod("emi")}
                className="bg-green-300 text-blue-900 px-6 py-3 rounded-full font-bold hover:bg-green-400 transform hover:scale-105 transition shadow-lg"
              >
                EMI Plan (6 Months)
              </button>
            </div>
          </>
        ) : !done ? (
          <>
            <p className="text-xl font-bold mb-3 text-blue-800">
              📅 Month {month}
            </p>

            {paymentMethod === "min" ? (
              <>
                <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                  <div>
                    <strong>💳 Outstanding:</strong> ₹{debt.toFixed(2)}
                  </div>
                  <div>🧾 Min Due: ₹{(0.05 * debt).toFixed(2)}</div>
                  <div>
                    📈 Interest Rate: {(interestRate * 100).toFixed(2)}%
                  </div>
                  <div>
                    💸 After Payment:{" "}
                    {(0.95 * debt + interestRate * 0.95 * debt).toFixed(2)}
                  </div>
                </div>

                <div className="mt-3">
                  <button
                    onClick={() => setShowCalc(!showCalc)}
                    className="bg-pink-400 mb-3 text-white p-3 rounded-full font-semibold hover:bg-pink-500 shadow"
                  >
                    {showCalc ? "🙈 Hide Math" : "🧠 Show Math"}
                  </button>

                  {showCalc && (
                    <div className="bg-white p-3 rounded shadow-sm text-sm">
                      <div>
                        {`${debt.toFixed(2)} - ${(
                          minPaymentRate * debt
                        ).toFixed(2)} = ${(0.95 * debt).toFixed(2)}`}
                      </div>
                      <div>
                        Interest:{" "}
                        {`${interestRate} * ${(0.95 * debt).toFixed(2)} = ${(
                          interestRate *
                          0.95 *
                          debt
                        ).toFixed(2)}`}
                      </div>
                      <div>
                        Total:{" "}
                        {(0.95 * debt + interestRate * 0.95 * debt).toFixed(2)}
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={handleMinPayment}
                  className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-full text-white font-bold mt-4 transition transform hover:scale-105 shadow-lg"
                >
                  ✅ Pay Min Due + Interest
                </button>
              </>
            ) : (
              <>
                <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                  <div>
                    <strong>🏦 Remaining Principal:</strong> ₹
                    {remainingPrincipal.toLocaleString()}
                  </div>
                  <div>📆 Monthly EMI: ₹{Math.round(emiAmount)}</div>
                </div>

                <button
                  onClick={handleEMIPayment}
                  className="bg-green-400 hover:bg-green-500 px-6 py-3 rounded-full text-white font-bold transition transform hover:scale-105 shadow-lg"
                >
                  🚀 Pay EMI
                </button>
              </>
            )}
          </>
        ) : (
          <>
            <h2 className="text-2xl font-extrabold text-center text-green-700 mb-4">
              🎉 Payment Summary
            </h2>
            <div className="bg-white p-4 rounded-xl shadow-lg border border-yellow-300">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={chartData}
                  barCategoryGap={40}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="5 5" stroke="#ffd6e8" />
                  <XAxis
                    dataKey="name"
                    tick={{
                      fill: "#ff69b4",
                      fontSize: 16,
                      fontFamily: "'Comic Neue', cursive",
                    }}
                  />
                  <YAxis
                    tick={{
                      fill: "#00bcd4",
                      fontSize: 14,
                      fontFamily: "'Comic Neue', cursive",
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff3f7",
                      border: "2px solid #ff80ab",
                      borderRadius: "12px",
                      fontFamily: "'Comic Neue', cursive",
                    }}
                    formatter={(value) => [
                      `₹${value.toLocaleString()}`,
                      "💰 Money",
                    ]}
                  />
                  <Legend
                    formatter={(value) => `🧾 ${value}`}
                    wrapperStyle={{
                      fontFamily: "'Comic Neue', cursive",
                      fontSize: 16,
                    }}
                  />
                  <Bar
                    dataKey="amount"
                    fill="#ff80ab"
                    isAnimationActive={true}
                    animationDuration={1000}
                    animationEasing="ease-out"
                    radius={[10, 10, 0, 0]}
                    label={{
                      position: "top",
                      fill: "#ff1493",
                      fontSize: 14,
                      fontFamily: "'Comic Neue', cursive",
                      formatter: (value) => `₹${value}`,
                    }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 text-center text-lg">
              <p className="text-blue-800">
                <strong>💵 Total Paid:</strong> ₹{totalPaid.toLocaleString()}
              </p>
              <p className="text-pink-700 mt-2">
                <strong>😲 Extra Paid:</strong> ₹
                {(totalPaid - selectedItem.cost).toLocaleString()}
              </p>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setSelectedItem(null);
                  setUserPayments([]);
                  setDebt(0);
                  setMonth(1);
                  setDone(false);
                  setPaymentMethod(null);
                  setRemainingPrincipal(0);
                }}
                className="bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition font-bold shadow-lg"
              >
                🔁 Try Another Purchase
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
