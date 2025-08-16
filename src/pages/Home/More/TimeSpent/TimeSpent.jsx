// TimeSpent.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required components for the chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TimeSpent = () => {
  // Data for the bar graph representing average time spent on each day
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Average Time Spent (hrs)',
        data: [1.5, 2, 1.8, 2.2, 1.7, 2.5, 3], // Example data; adjust as needed
        backgroundColor: '#6366f1', // Indigo color
        borderRadius: 5,
        barPercentage: 0.6,
      },
    ],
  };

  // Options for customizing the chart appearance
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hides the legend to keep the design clean
      },
      tooltip: {
        backgroundColor: '#1f2937', // Dark background for tooltip
        bodyColor: '#fff',
        displayColors: false,
        borderColor: '#6366f1', // Matching the bar color
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#d1d5db', // Light text color for readability
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: '#374151', // Dark gray grid lines
        },
        ticks: {
          color: '#d1d5db',
          stepSize: 1, // Steps in the y-axis
        },
      },
    },
  };

  return (
    <div className="w-full h-auto bg-black text-white p-4 lg:px-6 md:px-4 sm:px-3">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Your Activity</h1>
        <p className="text-gray-400 text-sm">Time Spent on App</p>
      </header>

      {/* Bar Graph */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <Bar data={data} options={options} />
      </div>

      {/* Additional Text */}
      <div className="mt-4">
        <p className="text-sm text-gray-400">
          This chart shows the average time you spent on the app each day.
        </p>
      </div>
    </div>
  );
};

export default TimeSpent;
