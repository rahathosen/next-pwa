"use client";

import { useState } from 'react';
import { Pie, Line } from 'react-chartjs-2'; // using Chart.js for data visualization
import { ArcElement, LineElement, PointElement, Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the ArcElement, LineElement, PointElement, and other components
Chart.register(ArcElement, LineElement, PointElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Placeholder data for charts
  const assetsData = {
    labels: ['Gold', 'Silver', 'Platinum'],
    datasets: [
      {
        label: 'Assets',
        data: [50, 30, 20],
        backgroundColor: ['#FFD700', '#C0C0C0', '#E5E4E2'],
        borderWidth: 1,
      },
    ],
  };

  const financialData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Financial Overview',
        data: [100000, 120000, 110000, 140000, 150000, 160000, 155000, 170000, 175000, 180000],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
        tension: 0.2,
      },
    ],
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen p-4 bg-gray-50 dark:bg-gray-900">
        {/* Dashboard Header */}
        <header className="flex justify-between items-center p-6 bg-gold dark:bg-darkGold">
          <h1 className="text-3xl font-bold text-white">Gold Trading Dashboard</h1>
          <button
            onClick={toggleDarkMode}
            className="text-sm px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md shadow"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>

        {/* Overview Section */}
        <section className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Total Assets */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Total Assets</h2>
            <div className="h-48">
              <Pie data={assetsData} />
            </div>
          </div>

          {/* Financial Overview */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Financial Overview</h2>
            <div className="h-48">
              <Line data={financialData} />
            </div>
          </div>

          {/* Active Loans */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Active Loans</h2>
            <p className="text-2xl text-red-500 dark:text-red-400 mt-4">৳ 50,000</p>
            <p className="text-sm text-gray-500 mt-2">Next payment due: 20 Oct 2024</p>
          </div>

          {/* Rental Income */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Rental Income</h2>
            <p className="text-2xl text-green-500 dark:text-green-400 mt-4">৳ 15,000</p>
            <p className="text-sm text-gray-500 mt-2">This month</p>
          </div>

          {/* Upcoming Payments */}
          <div className="md:col-span-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Upcoming Scheduled Payments</h2>
            <table className="w-full mt-4 text-left text-sm text-gray-500 dark:text-gray-400">
              <thead>
                <tr>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Amount</th>
                  <th className="py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4">20 Oct 2024</td>
                  <td className="py-2 px-4">৳ 5,000</td>
                  <td className="py-2 px-4 text-yellow-500">Pending</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">25 Oct 2024</td>
                  <td className="py-2 px-4">৳ 10,000</td>
                  <td className="py-2 px-4 text-yellow-500">Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Quick Access Buttons */}
        <section className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500">
              Asset Management
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500">
              Loan Management
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500">
              Rental Management
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500">
              Payment Scheduling
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
