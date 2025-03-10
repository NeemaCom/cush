import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const UserStats = () => {
  const progressData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Daily Progress",
        data: [65, 72, 68, 85, 75, 80, 70],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };
  return (
    <div className='mt-6 bg-white shadow rounded-lg p-6'>
      <h3 className='text-lg font-medium text-gray-900'>Weekly Progress</h3>
      <div className='mt-2'>
        <Line data={progressData} options={options} />
      </div>
      <div className='mt-6 grid grid-cols-2 gap-4'>
        <div className='bg-green-50 p-4 rounded-lg'>
          <p className='text-sm font-medium text-green-600'>Tasks Completed</p>
          <p className='mt-2 text-3xl font-semibold text-green-900'>24</p>
        </div>
        <div className='bg-blue-50 p-4 rounded-lg'>
          <p className='text-sm font-medium text-blue-600'>Hours Logged</p>
          <p className='mt-2 text-3xl font-semibold text-blue-900'>37.5</p>
        </div>
      </div>
    </div>
  );
};
export default UserStats;
