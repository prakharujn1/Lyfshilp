// BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  layouts,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels"; // 👈 Import plugin

// Register everything
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels // 👈 Register plugin
);

const BarChart = ({ labels, data, colors }) => {
  const chartData = {
    labels,
    datasets: [
      {
        // label: "",
        data,
        backgroundColor: colors,
        // barPercentage : 0.7,
        // categoryPercentage: 0.7,
      },
    ],
  };

  const options = {
    responsive: true,
    //  maintainAspectRatio: false,
    layout: {
      padding: 0,
    },

    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: "end",
        align: "center",
        formatter: (value) => `₹${Number(value)}`,
        color: "#000",
        // offset : 9,
        font: {
          size : 12,
          weight: "bold",
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `₹${context.raw}`,
        },
      },

      title: {
        display: true,
        text: "Returns Chart",
      },
    },
    scales: {
      x: {
        maxBarThickness: 50, // increase max width of bars
        barPercentage: 0.9,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-sky-200 shadow-xl rounded-2xl p-3 w-[300px] h-full
     md:w-[350px] lg:aspect-square flex justify-center items-center">
      <Bar data={chartData} options={options} plugins={[ChartDataLabels]} />
      {/* 👆 Important: pass ChartDataLabels plugin here too */}
    </div>
  );
};

export default BarChart;
