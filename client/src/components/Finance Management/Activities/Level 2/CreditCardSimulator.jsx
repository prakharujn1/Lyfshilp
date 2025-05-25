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
    <div className="max-w-3xl mx-auto p-6 mt-8 bg-white rounded shadow">
      <h1 className="text-2xl font-bold text-blue-700 text-center mb-6">
        💳 Credit Card Simulator
      </h1>

      {!selectedItem ? (
        <>
          <p className="mb-4 text-gray-700 text-center">
            Choose an item to simulate purchase:
          </p>
          <div className="grid grid-cols-2 gap-4">
            {items.map((item) => (
              <button
                key={item.name}
                onClick={() => handlePurchase(item)}
                className="border border-blue-500 rounded p-4 hover:bg-blue-100"
              >
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p>₹{item.cost.toLocaleString()}</p>
              </button>
            ))}
          </div>
        </>
      ) : !paymentMethod ? (
        <>
          <p className="text-center mt-6">How would you like to pay?</p>
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => chooseMethod("min")}
              className="bg-yellow-400 px-6 py-2 rounded text-white font-semibold"
            >
              Credit Card (Minimum Due)
            </button>
            <button
              onClick={() => chooseMethod("emi")}
              className="bg-green-500 px-6 py-2 rounded text-white font-semibold"
            >
              EMI Plan (6 months)
            </button>
          </div>
        </>
      ) : !done ? (
        <>
          <p className="text-lg font-medium mb-2">📅 Month {month}</p>

          {paymentMethod === "min" ? (
            <>
              <p className="mb-4">
                <div>
                  <span className="font-semibold">Outstanding Debt:</span> ₹
                  {debt.toFixed(2)}
                </div>
                <div>
                  Min Due Amount : ₹{(0.05 * debt).toFixed(2)} (5% of
                  Outstanding Debt)
                </div>
                <div>Interest Rate : {(interestRate * 100).toFixed(2)}% </div>
                <div>
                  After this payment, amount to be paid :{" "}
                  {(0.95 * debt + interestRate * 0.95 * debt).toFixed(2)}{" "}
                </div>
                <div className="mt-5">
                  <button
                    onClick={() => setShowCalc(!showCalc)}
                    className="bg-pink-400 mb-3 text-yellow-50 p-3 rounded-lg"
                  >
                    {showCalc ? "Hide Calculation" : "Show Calculation"}
                  </button>
                  {showCalc && (
                    <div>
                      <div>
                        Outstanding Amount after this payment :{" "}
                        {`${debt.toFixed(2)} - ${(
                          minPaymentRate * debt
                        ).toFixed(2)}`}{" "}
                        = {(0.95 * debt).toFixed(2)}
                      </div>
                      <div>
                        Interest on Outstanding Amount :{` ${interestRate} * `}{" "}
                        {debt.toFixed(2) - (minPaymentRate * debt).toFixed(2)} ={" "}
                        {(interestRate * 0.95 * debt).toFixed(2)}
                      </div>
                      <div>
                        Total :{" "}
                        {`${(0.95 * debt).toFixed(2)} + ${(
                          interestRate *
                          0.95 *
                          debt
                        ).toFixed(2)}`}{" "}
                        ={" "}
                        {(0.95 * debt + interestRate * 0.95 * debt).toFixed(2)}
                      </div>
                    </div>
                  )}
                </div>
              </p>
              <button
                onClick={handleMinPayment}
                className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded text-white font-semibold"
              >
                Pay Minimum Due (10%) + Interest
              </button>
            </>
          ) : (
            <>
              <p className="mb-4">
                <span className="font-semibold">Remaining Principal:</span> ₹
                {remainingPrincipal.toLocaleString()}
              </p>
              <p className="mb-4">Monthly EMI: ₹{Math.round(emiAmount)}</p>
              <button
                onClick={handleEMIPayment}
                className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded text-white font-semibold"
              >
                Pay EMI
              </button>
            </>
          )}
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold text-center text-green-700 mb-4">
            📊 Payment Summary
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-4 text-center">
            <p className="text-gray-700">
              <strong>Total Paid:</strong> ₹{totalPaid.toLocaleString()}
            </p>
            <p className="text-gray-700 mt-1">
              <strong>Extra Paid Over Item Price:</strong> ₹
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
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Try Another Purchase
            </button>
          </div>
        </>
      )}
    </div>
  );
}
