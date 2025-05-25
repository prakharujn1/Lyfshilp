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
    plugins: {
      datalabels: {
        formatter: (value) => `₹${Number(value).toFixed(2)}`,
        color: "#070707", // Change if background is light
        font: {
          // size : 1,
          weight: "bold",
          // color : "black"
        },
        anchor: "end", // positions label outside the slice
        align: "start", // aligns the label relative to anchor
        // offset: 10, // moves the label away from the arc edge
        clamp: true,
        clip : false
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
    <div className="w-[400px] h-[400px]">
      <Pie data={data} options={options} plugins={[ChartDataLabels]} />
      {/* ✅ Include plugin here */}
    </div>
  );
};

export default PieChart;
