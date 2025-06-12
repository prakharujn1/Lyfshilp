import React, { useRef } from "react";
import { motion } from "framer-motion";
// import domtoimage from 'dom-to-image-more';
// import jsPDF from "jspdf";
import {
  Rocket,
  Target,
  Settings,
  AlertTriangle,
  Puzzle,
  Shield,
  Undo,
  // Download,
} from "lucide-react";

const Poster = ({ data, onBack }) => {
  const posterRef = useRef();

  // Optional: Poster download logic (commented for now)
  // const handleDownload = async () => {
  //   const node = posterRef.current;
  //   try {
  //     const dataUrl = await domtoimage.toPng(node);
  //     const pdf = new jsPDF("landscape", "px", [node.offsetWidth, node.offsetHeight]);
  //     pdf.addImage(dataUrl, 'PNG', 0, 0, node.offsetWidth, node.offsetHeight);
  //     pdf.save('AI_Poster.pdf');
  //   } catch (error) {
  //     console.error("Failed to generate image", error);
  //   }
  // };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      {/* Poster */}
      <motion.div
        ref={posterRef}
        className="relative text-cyan-300 font-orbitron rounded-[3rem] shadow-2xl w-[80vw] h-[95vh] mx-auto overflow-hidden"
        style={{
          backgroundImage: "url('./poster.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "rgb(0, 240, 255)", // Ensures color is always safe
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <motion.h1
          className="text-center text-4xl md:text-5xl font-black pt-6 flex items-center justify-center gap-2"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Rocket className="w-8 h-8" /> FUTURE AI ARCHITECT
        </motion.h1>

        {/* Design Objective */}
        <div className="absolute top-[15%] left-[5%] w-60">
          <h3 className="text-2xl font-extrabold mb-2 flex items-center gap-2">
            <Target className="w-6 h-6" /> Design Goal
          </h3>
          <p className="text-base font-medium">{data.problem}</p>
        </div>

        {/* Technical Workflow */}
        <div className="absolute top-[53%] left-[5%] w-60">
          <h3 className="text-2xl font-extrabold mb-2 flex items-center gap-2">
            <Settings className="w-6 h-6" /> Tech Used
          </h3>
          <p className="text-base font-medium">{data.name}</p>
        </div>

        {/* Risk Assessment */}
        <div className="absolute bottom-[13%] left-[5%] w-60">
          <h3 className="text-2xl font-extrabold mb-2 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6" /> Risks
          </h3>
          <p className="text-base font-medium">{data.risks}</p>
        </div>

        {/* System Architecture */}
        <div className="absolute top-[18%] right-[6%] w-60 text-right">
          <h3 className="text-2xl font-extrabold mb-2 flex justify-end items-center gap-2">
            AI Name <Puzzle className="w-6 h-6" />
          </h3>
          <p className="text-base font-medium">{data.how}</p>
        </div>

        {/* Functional Impact */}
        <div className="absolute top-[45%] right-[6%] w-60 text-right">
          <h3 className="text-2xl font-extrabold mb-2 flex justify-end items-center gap-2">
            Impact <Target className="w-6 h-6" />
          </h3>
          <p className="text-base font-medium">{data.benefits}</p>
        </div>

        {/* Mitigation Strategies */}
        <div className="absolute bottom-[10%] right-[6%] w-60 text-right">
          <h3 className="text-2xl font-extrabold mb-2 flex justify-end items-center gap-2">
            Safety <Shield className="w-6 h-6" />
          </h3>
          <p className="text-base font-medium">{data.safety}</p>
        </div>
      </motion.div>

      {/* Controls below poster */}
      <div className="flex flex-col items-center gap-6 mt-6">
        

        {/* Footer Instructions */}
        <div className="mt-4 max-w-3xl mx-auto text-center text-base text-gray-700">
          <h3 className="text-xl font-semibold mb-2">🎤 Ready to Share Your Creation?</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>Show off your AI poster to your friends, class, or even your teacher!</li>
            <li>Tell everyone how your AI idea solves a real problem in a cool new way</li>
            <li>Talk about what could go wrong — and how you’d keep things safe and fair</li>
          </ul>
          <p className="mt-3 text-gray-600 italic">
            Remember, you're the <span className="font-semibold text-cyan-600">AI Architect</span> — your ideas could shape the future! 🚀
          </p>
        </div>

        <button
          onClick={onBack}
          className="px-6 py-2 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-full shadow text-base flex items-center gap-2"
        >
          <Undo className="w-4 h-4" /> Back to Edit
        </button>
      </div>
    </div>
  );
};

export default Poster;
