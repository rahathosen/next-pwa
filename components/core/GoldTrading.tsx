"use client";

import { useState } from "react";
import { Pie, Line } from "react-chartjs-2";
import {
  ArcElement,
  LineElement,
  PointElement,
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function GoldTrading() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Placeholder data for charts
  const assetsData = {
    labels: ["Gold", "Silver", "Platinum"],
    datasets: [
      {
        label: "Assets",
        data: [50, 30, 20],
        backgroundColor: ["#FFD700", "#C0C0C0", "#E5E4E2"],
        borderWidth: 1,
      },
    ],
  };

  const financialData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        label: "Financial Overview",
        data: [
          100000, 120000, 110000, 140000, 150000, 160000, 155000, 170000,
          175000, 180000,
        ],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
        tension: 0.2,
      },
    ],
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="container mx-auto min-h-screen p-4 dark:bg-gray-900">
        {/* Dashboard Header */}
        <header className="bg-gold dark:bg-darkGold flex items-center justify-between p-6">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Gold Trading Dashboard
          </h1>
          <button
            onClick={toggleDarkMode}
            className="rounded-md bg-white px-4 py-2 text-sm text-gray-900 shadow dark:bg-gray-800 dark:text-white"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>

        {/* Overview Section */}
        <section className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
          {/* Total Assets */}
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Total Assets
            </h2>
            <div className="h-48">
              <Pie data={assetsData} />
            </div>
          </div>

          {/* Financial Overview */}
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Financial Overview
            </h2>
            <div className="h-48">
              <Line data={financialData} />
            </div>
          </div>

          {/* Active Loans */}
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Active Loans
            </h2>
            <p className="mt-4 text-2xl text-red-500 dark:text-red-400">
              ৳ 50,000
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Next payment due: 20 Oct 2024
            </p>
          </div>

          {/* Rental Income */}
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Rental Income
            </h2>
            <p className="mt-4 text-2xl text-green-500 dark:text-green-400">
              ৳ 15,000
            </p>
            <p className="mt-2 text-sm text-gray-500">This month</p>
          </div>

          {/* Upcoming Payments */}
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800 md:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Upcoming Scheduled Payments
            </h2>
            <table className="mt-4 w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead>
                <tr>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">20 Oct 2024</td>
                  <td className="px-4 py-2">৳ 5,000</td>
                  <td className="px-4 py-2 text-yellow-500">Pending</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">25 Oct 2024</td>
                  <td className="px-4 py-2">৳ 10,000</td>
                  <td className="px-4 py-2 text-yellow-500">Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Quick Access Buttons */}
        <section className="p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <button className="rounded-lg bg-yellow-400 px-4 py-2 text-black shadow-lg hover:bg-yellow-500">
              Asset Management
            </button>
            <button className="rounded-lg bg-yellow-400 px-4 py-2 text-black shadow-lg hover:bg-yellow-500">
              Loan Management
            </button>
            <button className="rounded-lg bg-yellow-400 px-4 py-2 text-black shadow-lg hover:bg-yellow-500">
              Rental Management
            </button>
            <button className="rounded-lg bg-yellow-400 px-4 py-2 text-black shadow-lg hover:bg-yellow-500">
              Payment Scheduling
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
