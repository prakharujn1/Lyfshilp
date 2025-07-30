import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useComputers } from "@/contexts/ComputersContext";
import { usePerformance } from "@/contexts/PerformanceContext"; //for performance
const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const gridSize = 5;

function createGrid(rows, cols) {
  return Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) => ({
      row: r,
      col: c,
      visited: false,
      isStart: false,
    }))
  );
}

function bfs(grid, start) {
  const queue = [start];
  const visited = new Set();
  const levels = [];
  const key = (r, c) => `${r}-${c}`;

  visited.add(key(start.row, start.col));

  while (queue.length) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const { row, col } = queue.shift();
      currentLevel.push({ row, col });

      for (const [dr, dc] of directions) {
        const nr = row + dr;
        const nc = col + dc;

        if (
          nr >= 0 &&
          nc >= 0 &&
          nr < grid.length &&
          nc < grid[0].length &&
          !visited.has(key(nr, nc))
        ) {
          queue.push({ row: nr, col: nc });
          visited.add(key(nr, nc));
        }
      }
    }

    levels.push(currentLevel); // push all contacts at current level
  }

  return levels;
}

function dfs(grid, start) {
  const stack = [start];
  const visited = new Set();
  const order = [];
  const key = (r, c) => `${r}-${c}`;

  while (stack.length) {
    const { row, col } = stack.pop();
    if (visited.has(key(row, col))) continue;

    visited.add(key(row, col));
    order.push({ row, col });

    // push neighbors in reverse to maintain natural left/right/up/down DFS
    for (let i = directions.length - 1; i >= 0; i--) {
      const [dr, dc] = directions[i];
      const nr = row + dr;
      const nc = col + dc;

      if (
        nr >= 0 &&
        nc >= 0 &&
        nr < grid.length &&
        nc < grid[0].length &&
        !visited.has(key(nr, nc))
      ) {
        stack.push({ row: nr, col: nc });
      }
    }
  }

  return order;
}

export default function SocialMediaDetective() {
  const { completeComputersChallenge } = useComputers();
  const [showGame, setShowGame] = useState(false);
  const [grid, setGrid] = useState([]);
  const [visitedOrder, setVisitedOrder] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [start, setStart] = useState(null);
  const [mode, setMode] = useState("");
  const [stats, setStats] = useState(null);
  const [guessInput, setGuessInput] = useState("");
  const [result, setResult] = useState(null);
  const [showInput, setShowInput] = useState(false);
  const [gameReady, setGameReady] = useState(false);
  const intervalRef = useRef(null);
  const [gridKey, setGridKey] = useState(0); // for forcing remount
  const animationCancelledRef = useRef(false);

  //for performance
  const { updatePerformance } = usePerformance();
  const [startTime] = useState(Date.now());


  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // ✅ Stop animation
      intervalRef.current = null;
    }

    setVisitedOrder([]);
    setCurrentIndex(-1);
    setMode("");
    setStats(null);
    setGuessInput("");
    setResult(null);
    setShowInput(false);
    setGameReady(false);

    const newGrid = createGrid(gridSize, 10);
    const randomRow = Math.floor(Math.random() * gridSize);
    const randomCol = Math.floor(Math.random() * 10);
    newGrid[randomRow][randomCol].isStart = true;

    setGrid(newGrid);
    setStart({ row: randomRow, col: randomCol });
    setGridKey(prev => prev + 1); // 👈 force re-render
    setTimeout(() => {
      setGameReady(true);
    }, 0);
  };


  const runSearch = async (type) => {
    const algo = type === "BFS" ? bfs : dfs;
    const t0 = performance.now();
    const result = algo(grid, start); // BFS returns levels, DFS returns flat
    const t1 = performance.now();

    const flatOrder = type === "BFS" ? result.flat() : result;

    setVisitedOrder(flatOrder);
    setCurrentIndex(-1);
    setMode(type);
    setStats({ time: (t1 - t0).toFixed(2), nodes: flatOrder.length });

    let i = 0;
    intervalRef.current = setInterval(() => {
      if (i >= flatOrder.length) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setShowInput(true); // ✅ Only after animation is done
        return;
      }
      setCurrentIndex(i);
      i++;
    }, 1200);
  };


  const handleGuessSubmit = () => {
    const guess = parseInt(guessInput);
    if (isNaN(guess) || guess < 0 || guess >= 50) return;
    const row = Math.floor(guess / 10);
    const col = guess % 10;
    const isCorrect = start.row === row && start.col === col;
    setResult(isCorrect);
    setShowInput(false);


    if (isCorrect) {
      completeComputersChallenge(0, 0); // 🔐 Mark challenge as complete

      // 🧠 Update performance
      const endTime = Date.now();
      const totalTimeSec = ((endTime - startTime) / 1000).toFixed(2);

      updatePerformance({
        moduleName: "Computers",
        topicName: "exploringSmartStrategiesInAI",
        score: 10,
        accuracy: 100,
        avgResponseTimeSec: parseFloat((totalTimeSec / stats.nodes).toFixed(2)),
        studyTimeMinutes: parseFloat((totalTimeSec / 60).toFixed(2)),
        completed: true,
    
      });
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-indigo-100 p-6">

      {!showGame ? (
        <>
          {/* 🎓 Instruction Section */}
          <motion.h1
            animate={{
              y: [0, -5, 0], // subtle bounce
              color: ["#ec4899", "#8b5cf6", "#ec4899"], // pink → purple → pink
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-5xl font-extrabold text-center drop-shadow-lg tracking-wide"
          >
            🕵️‍♀️ Social Media Detective
          </motion.h1>

          <motion.div
            animate={{
              boxShadow: [
                "0 0 15px #facc15", // yellow
                "0 0 25px #f472b6", // pink
                "0 0 15px #facc15"
              ]
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
            className="bg-white rounded-2xl p-6 max-w-5xl mx-auto mt-5 mb-6 text-center border-4 border-yellow-300"
          >
            <p className="text-2xl font-extrabold text-fuchsia-600 mb-4 animate-pulse">
              🚨 Fake News Alert!
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-3">
              Someone in this colorful network of <span className="font-bold text-blue-500">50 contacts</span> has started a fake story 📰. <br />
              It’s spreading fast — and it’s your mission to stop it!
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-3">
              💚 <span className="font-semibold text-green-600">Green circles</span> mean the contact got the fake news. <br />
              ⚪ <span className="font-semibold text-gray-500">Grey circles</span> haven’t seen it yet.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-3">
              Choose your detective tool: <br />
              🌀 <strong>BFS</strong> (bubble out) or 🎯 <strong>DFS</strong> (deep dive) to trace the path!
            </p>

            <p className="text-lg font-bold text-purple-600 mt-2">
              🎯 When the news stops spreading, guess who started it by typing their number!
            </p>

            <motion.button
              whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowGame(true)}
              className="mt-6 px-10 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full shadow-lg text-xl transition-all"
            >
              🚀 Start Now!
            </motion.button>
          </motion.div>

        </>
      ) : (
        <>
          {/* 🧩 Game Interface */}
          <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-indigo-100 p-6">
            <motion.h1
              animate={{
                y: [0, -5, 0], // subtle bounce
                color: ["#ec4899", "#8b5cf6", "#ec4899"], // pink → purple → pink
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-5xl font-extrabold text-center drop-shadow-lg tracking-wide mt-1 mb-7 "
            >
              🕵️‍♀️ Social Media Detective
            </motion.h1>


            {!mode && (
              <div className="flex justify-center gap-6 mb-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => gameReady && runSearch("BFS")}
                  disabled={!gameReady}
                  className={`px-6 py-3 text-white font-bold rounded-full shadow-md transition-all duration-300 ${gameReady ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}
                >
                  🔍 Use BFS Mode
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => gameReady && runSearch("DFS")}
                  disabled={!gameReady}
                  className={`px-6 py-3 text-white font-bold rounded-full shadow-md transition-all duration-300 ${gameReady ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"}`}
                >
                  🧭 Use DFS Mode
                </motion.button>
              </div>
            )}

            <div key={gridKey} className="grid grid-cols-10 gap-2 max-w-3xl mx-auto mb-6">
              {grid.map((rowArr, rIdx) =>
                rowArr.map((_, cIdx) => {
                  const visited = visitedOrder.findIndex(v => v.row === rIdx && v.col === cIdx) <= currentIndex;
                  const contactIndex = rIdx * 10 + cIdx;

                  return (
                    <motion.div
                      key={`${rIdx}-${cIdx}`}
                      className={`h-10 w-10 rounded-full text-center text-xs font-bold flex items-center justify-center shadow-md transition-all duration-300
            ${visited ? "bg-emerald-500 text-white" : "bg-gray-200 text-gray-800"}`}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      {contactIndex}
                    </motion.div>
                  );
                })
              )}
            </div>


            <div className="text-center">
              {showInput && result === null && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p className="text-lg font-bold text-fuchsia-700 mb-2">🧐 All done! Enter the number of the contact you think started the fake news:</p>
                  <input
                    type="number"
                    value={guessInput}
                    onChange={(e) => setGuessInput(e.target.value)}
                    placeholder="e.g. 17"
                    className="px-4 py-2 rounded-md border border-gray-400 mr-2 text-center"
                    min="0"
                    max="49"
                  />
                  <button
                    onClick={handleGuessSubmit}
                    className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md"
                  >
                    ✅ Check My Guess
                  </button>
                </motion.div>
              )}

              {result !== null && (
                <motion.div className="mt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {result ? (
                    <>
                      <p className="text-lg font-semibold text-green-700">🎯 Nailed it! That contact was the starting point!</p>
                      <p className="text-sm text-gray-700 mt-1">
                        {mode === "BFS" ? "BFS spreads level by level – super for finding shortest paths." : "DFS digs deep – great for tracing long chains."}
                      </p>
                    </>
                  ) : (
                    <p className="text-lg font-semibold text-red-600">❌ Oops! That wasn’t the right contact. Try again!</p>
                  )}
                </motion.div>
              )}

              {stats && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mt-6 text-sm text-center bg-indigo-50 border border-indigo-300 rounded-lg p-4 max-w-xs mx-auto shadow-sm"
                >
                  <p className="text-purple-700 font-semibold mb-1">
                    📍 <span className="text-indigo-700">Contacts Traced:</span> {stats.nodes}
                  </p>
                  <p className="text-purple-700 font-semibold">
                    ⏱️ <span className="text-indigo-700">Time Taken:</span> {stats.time} ms
                  </p>
                </motion.div>
              )}


              {mode && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetGame}
                  className="mt-6 px-6 py-2 bg-pink-400 hover:bg-pink-500 text-white font-bold rounded-full shadow-md"
                >
                  🔁 Start New Case
                </motion.button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
