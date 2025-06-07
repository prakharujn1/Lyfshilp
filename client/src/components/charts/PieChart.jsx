// src/components/PieChart.js
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels"; // ✅ Import plugin
import { color } from "chart.js/helpers";

// ✅ Register plugin and chart types
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = ({ values, labels, colors }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Returns (₹)",
        data: values,
        backgroundColor: colors,
        borderWidth: 5,
        hoverOffset: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    // aspectRatio: 2,
    plugins: {
      datalabels: {
        formatter: (value) => `₹${Number(value)}`,
        color: "#070707", // Change if background is light
        font: {
          // size : 1,
          weight: "bold",
          // color : "black"
        },
        anchor: "end", // positions label outside the slice
        align: "center", // aligns the label relative to anchor
        // offset: 10, // moves the label away from the arc edge
        clamp: true,
        clip: false,
        // offset : 5
      },
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Returns",
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
    },
  };

  return (
    <div className="bg-sky-200 shadow-xl rounded-2xl p-3 w-[300px]  md:w-[350px] lg:aspect-square flex justify-center items-center">
      <Pie data={data} options={options} plugins={[ChartDataLabels]} />
      {/* ✅ Include plugin here */}
    </div>
  );
};

export default PieChart;
