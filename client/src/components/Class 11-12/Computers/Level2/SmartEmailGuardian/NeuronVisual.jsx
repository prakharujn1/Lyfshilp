import React from "react";
import { motion } from "framer-motion";

const NeuronVisual = ({ weights = [], hiddenOutputs = [], output = 0 }) => {
  return (
    <div className="p-4 bg-white rounded-xl shadow-xl mt-6">
      <h2 className="text-lg font-bold mb-3 text-purple-700">🧠 Neural Network Visual</h2>
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        
        {/* Input Layer */}
        <div className="text-center">
          <p className="font-semibold text-blue-600 mb-2">🔹 Input Layer</p>
          {weights?.map((w, i) => (
            <motion.div
              key={i}
              className="w-10 h-10 bg-blue-300 rounded-full my-1 flex items-center justify-center text-sm font-bold text-white"
            >
              {w.toFixed(1)}
            </motion.div>
          ))}
        </div>

        {/* Hidden Layer */}
        <div className="text-center">
          <p className="font-semibold text-indigo-600 mb-2">🔸 Hidden Layer</p>
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="w-10 h-10 bg-indigo-400 rounded-full my-2 flex items-center justify-center text-white text-sm font-bold"
            >
              {hiddenOutputs?.[i] !== undefined ? hiddenOutputs[i].toFixed(2) : "–"}
            </motion.div>
          ))}
        </div>

        {/* Output Layer */}
        <div className="text-center">
          <p className="font-semibold text-red-600 mb-2">🔺 Output</p>
          <motion.div
            className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center text-white text-sm font-bold mt-6"
          >
            {(output * 100).toFixed(0)}%
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NeuronVisual;
