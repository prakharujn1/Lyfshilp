import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const generateGraph = (nodes = 50, edgesPerNode = 2) => {
  const graph = {};
  for (let i = 0; i < nodes; i++) graph[i] = [];

  for (let i = 0; i < nodes; i++) {
    for (let j = 0; j < edgesPerNode; j++) {
      const target = Math.floor(Math.random() * nodes);
      if (target !== i && !graph[i].includes(target)) {
        graph[i].push(target);
        graph[target].push(i);
      }
    }
  }
  return graph;
};

const bfs = (graph, start) => {
  const visited = new Set();
  const queue = [[start]];
  while (queue.length) {
    const path = queue.shift();
    const node = path[path.length - 1];
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbor of graph[node]) {
        queue.push([...path, neighbor]);
      }
    }
  }
  return Array.from(visited);
};

const dfs = (graph, start) => {
  const visited = new Set();
  const stack = [[start]];
  while (stack.length) {
    const path = stack.pop();
    const node = path[path.length - 1];
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbor of graph[node]) {
        stack.push([...path, neighbor]);
      }
    }
  }
  return Array.from(visited);
};

export default function SocialMediaDetective() {
  const [graph, setGraph] = useState({});
  const [mode, setMode] = useState(null);
  const [result, setResult] = useState([]);
  const [startNode, setStartNode] = useState(0);

  useEffect(() => {
    setGraph(generateGraph(50));
  }, []);

  const handleStart = (type) => {
    setMode(type);
    const start = Math.floor(Math.random() * 50);
    setStartNode(start);
    const t0 = performance.now();
    const traversal = type === "BFS" ? bfs(graph, start) : dfs(graph, start);
    const t1 = performance.now();
    setResult({
      type,
      nodes: traversal,
      time: (t1 - t0).toFixed(2),
      length: traversal.length
    });
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-purple-700 mb-4"
      >
        🕵️ Social Media Detective
      </motion.h1>

      <p className="text-center mb-6 text-gray-700 text-lg">
        Track how fake news spreads using <strong>BFS</strong> and <strong>DFS</strong>.
        Start tracing from a random user and see how the algorithm unfolds!
      </p>

      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => handleStart("BFS")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow font-bold"
        >
          🔍 Investigate with BFS
        </button>
        <button
          onClick={() => handleStart("DFS")}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full shadow font-bold"
        >
          🔎 Investigate with DFS
        </button>
      </div>

      {result?.nodes?.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-xl shadow border border-purple-200"
        >
          <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">
            🔍 {result.type} Investigation Complete
          </h2>
          <p className="text-center text-gray-700 mb-4">
            Start Node: <strong>{startNode}</strong> | Time:{" "}
            <strong>{result.time} ms</strong> | Total Users Traced:{" "}
            <strong>{result.length}</strong>
          </p>
          <div className="grid grid-cols-5 gap-2">
            {result.nodes.map((id) => (
              <div
                key={id}
                className="bg-gradient-to-r from-pink-100 via-yellow-100 to-purple-100 text-center p-2 rounded-xl shadow text-sm font-semibold"
              >
                User #{id}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
