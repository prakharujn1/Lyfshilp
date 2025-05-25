import { useState } from "react";
import BarChart from "../../../charts/BarChart";
import PieChart from "../../../charts/PieChart";

const InvestmentSimulator = () => {
  const [allocations, setAllocations] = useState({
    fixedDeposits: 0,
    gold: 0,
    mutualFunds: 0,
    stocks: 0,
    savings: 0,
  });

  const [returnRate, setReturnRate] = useState({
    fixedDeposits: 0,
    gold: 0,
    mutualFunds: 0,
    stocks: 0,
    savings: 0,
  });

  const [randomReturnRate, setRandomReturnRate] = useState({
    fixedDeposits: 0,
    gold: 0,
    mutualFunds: 0,
    stocks: 0,
    savings: 0,
  });

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f7f", "#8dd1e1"];

  const names = ["Fixed Deposits", "Gold", "Mutual Funds", "Stocks", "Savings"];

  const [result, setResult] = useState(null);
  const [total, setTotal] = useState(1000);
  const [years, setYears] = useState(1);
  const [finalAmount, setFinalAmount] = useState([]);
  const [randomRate, setRandomRate] = useState(false);

  const simulate = (returnRate, years) => {
    const getRandom = (max, min) => Math.random() * (max - min) + min;
    const amount = (percent) => (total * percent) / 100;

    const getRandomReturns = {
      fixedDeposits: getRandom(0.05, 0.07),
      gold: getRandom(0.08, 0.1),
      mutualFunds: getRandom(0.1, 0.15),
      stocks: getRandom(0.12, 0.18),
      savings: getRandom(0.03, 0.04),
    };

    const rate = randomRate ? getRandomReturns : returnRate;

    console.log(randomRate);
    console.log(rate);

    setRandomReturnRate(getRandomReturns);

    return [
      {
        name: "Fixed Deposits",
        value:
          amount(allocations.fixedDeposits) *
          Math.pow(1 + rate.fixedDeposits, years),
      },
      {
        name: "Gold",
        value: amount(allocations.gold) * Math.pow(1 + rate.gold, years),
      },
      {
        name: "Mutual Funds",
        value:
          amount(allocations.mutualFunds) *
          Math.pow(1 + rate.mutualFunds, years),
      },
      {
        name: "Stocks",
        value: amount(allocations.stocks) * Math.pow(1 + rate.stocks, years),
      },
      {
        name: "Savings",
        value: amount(allocations.savings) * Math.pow(1 + rate.savings, years),
      },
    ];
  };

  const handleSimulate = () => {
    const res = simulate(returnRate, years);
    console.log(res);
    setResult(res);

    const invested = total;
    const finalAmount = res.reduce((acc, item) => acc + item.value, 0);
    const returns = finalAmount - invested;
    setFinalAmount([
      {
        name: "Investment",
        value: invested,
      },
      {
        name: "Returns",
        value: returns,
      },
    ]);
  };

  return (
    <div className="bg-white rounded-2xl min-w-[400px] p-8 min-h-[500px]">
      <div>
        <h1 className="text-2xl font-medium">Investment Simulator</h1>
      </div>

      <div className="flex flex-col lg:flex-row mt-4 gap-2">
        <div className="space-x-3">
          <span>Total Amount</span>
          <input
            type="number"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            className="border-black border-2"
            placeholder="Enter the amount"
          />
        </div>
        <div className="space-x-3">
          <span>For Years : </span>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="border-black border-2"
            placeholder="Enter the amount"
          />
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-xl font-medium mb-3">Distributions : </h2>
        <ul className=" mb-4 list-disc list-inside space-y-1">
          <li>
            <strong>Fixed Deposits:</strong> A safe investment option offering
            fixed interest over a set period.
          </li>
          <li>
            <strong>Gold:</strong> A traditional store of value, often used as a
            hedge against inflation.
          </li>
          <li>
            <strong>Mutual Funds:</strong> Diversified investments managed by
            professionals to balance risk and return.
          </li>
          <li>
            <strong>Stocks:</strong> Shares in companies that can yield high
            returns, but carry market risks.
          </li>
          <li>
            <strong>Savings:</strong> Funds kept in a bank account, offering
            high liquidity with minimal returns.
          </li>
        </ul>
        <span>
          Rate of Return :{" "}
          <input
            type="checkbox"
            checked={randomRate}
            onChange={(e) => {
              setRandomRate(e.target.checked);
              console.log(e.target.checked);
            }}
          />
          Random
        </span>
        <p className="mt-2">
          Remaining Allocation:{" "}
          {100 - Object.values(allocations).reduce((a, b) => a + b, 0)}%
        </p>

        <div className="max-w-[450px] p-5">
          <div className="mt-5 max-w-[400px] grid grid-cols-2 gap-4 font-semibold">
            <span className="text-center">Asset</span>
            <span className="text-center">
              {randomRate ? "Rate of Return" : "Choose custom rate"}
            </span>
          </div>

          <div className="mt-4 space-y-3">
            {Object.keys(allocations).map((key, index) => {
              const totalAllocated = Object.values(allocations).reduce(
                (a, b) => a + b,
                0
              );
              const remaining = 100 - totalAllocated + allocations[key];
              const safeMax = Math.max(0, Math.min(100, remaining));

              return (
                <div
                  key={key}
                  className="max-w-[450px] grid grid-cols-2 gap-8 lg:gap-4  items-center"
                >
                  {/* Asset Section */}
                  <div>
                    <span>{names[index]}</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min={0}
                        max={safeMax}
                        value={allocations[key]}
                        onChange={(e) =>
                          setAllocations((prev) => ({
                            ...prev,
                            [key]: Number(e.target.value),
                          }))
                        }
                      />
                      <span>{allocations[key]}%</span>
                    </div>
                  </div>

                  {/* Rate of Return Section */}
                  {randomRate ? (
                    <div className="flex items-center justify-center gap-1">
                      {/* <span>Rate of Return:</span> */}
                      <strong>
                        {(randomReturnRate[key] * 100).toFixed(2)}%
                      </strong>
                    </div>
                  ) : (
                    <div className="flex justify-center items-center gap-2">
                      <input
                        type="number"
                        value={returnRate[key]}
                        className="border-black border-2 w-24"
                        placeholder="Enter rate"
                        onChange={(e) =>
                          setReturnRate((prev) => ({
                            ...prev,
                            [key]: e.target.value,
                          }))
                        }
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <button
          onClick={handleSimulate}
          className="bg-blue-600 p-3 text-white rounded-2xl"
        >
          Simulate Returns
        </button>
      </div>

      {result && (
        <div className="mt-5 flex flex-col lg:flex-row  justify-center sm:items-center md:space-x-4 ">
          <div className="">
            {/* <h2>Returns</h2> */}
            <div className=" bg-sky-300 max-w-[400px] p-5 flex justify-center items-center shadow-2xl rounded-lg">
              <BarChart
                data={result.map((item) => item.value)}
                colors={COLORS}
                labels={result.map((item) => item.name)}
              />
            </div>
          </div>
          <div className="p-3">
            {/* <h2>Returns</h2> */}
            <div className="bg-sky-300 p-5 max-w-[400px] flex justify-center items-center shadow-2xl rounded-lg">
              <PieChart
                values={result.map((item) => item.value)}
                colors={COLORS}
                labels={result.map((item) => item.name)}
              />
            </div>
          </div>
          <div className="p-3">
            {/* <h2>Returns</h2> */}
            <div className="bg-sky-300 p-5 max-w-[400px] flex justify-center items-center shadow-2xl rounded-lg">
              <PieChart
                values={finalAmount.map((item) => item.value)}
                colors={COLORS}
                labels={finalAmount.map((item) => item.name)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestmentSimulator;
