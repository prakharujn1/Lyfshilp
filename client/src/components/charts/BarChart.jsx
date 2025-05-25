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
      },
    ],
  };

  const options = {
    responsive: true,
    layout: {
      padding: 0,
    },

    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: "end",
        // align: "end",
        formatter: (value) => `₹${value.toFixed(2)}`,
        color: "#000",
        font: {
          weight: "bold",
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `₹${context.raw.toFixed(2)}`,
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
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="w-[400px] h-[350px]  flex items-center">
      <Bar data={chartData} options={options} plugins={[ChartDataLabels]} />
      {/* 👆 Important: pass ChartDataLabels plugin here too */}
    </div>
  );
};

export default BarChart;
