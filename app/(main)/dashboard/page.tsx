"use client";
// components/Dashboard.js
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { ButtonIcon } from "@radix-ui/react-icons";

// Register necessary components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Legend,
);

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
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
    <div
      className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <button
        onClick={toggleTheme}
        className={`absolute top-4 right-4 px-4 py-2 rounded-lg transition-all duration-300 ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-gray-900"}`}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* User Info */}
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <img
            className="h-12 w-12 rounded-full"
            src="/path/to/user-avatar.jpg"
            alt="Avatar"
          />
          <div>
            <p className="text-lg">Hello</p>
            <p className="font-bold text-2xl">Al Hasan</p>
          </div>
        </div>

        {/* Total Balance */}
        <div className="mt-4 p-4 bg-gray-800 rounded-lg">
          <p className="text-lg">Your total balance </p>
          <div className="p-4 bg-gray-800 rounded-lg flex justify-between items-center">
            <p className="text-yellow-500 text-lg">24k Gold</p>
            <p className="text-lg font-bold">৳800</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg flex justify-between items-center">
            <p className="text-yellow-500 text-lg">21k Gold</p>
            <p className="text-lg font-bold">৳600</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg flex justify-between items-center">
            <p className="text-yellow-500 text-lg">18k Gold</p>
            <p className="text-lg font-bold">৳400</p>
          </div>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="bg-gray-800 shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold">Financial Overview</h2>
        <div className="h-48">
          <Line data={financialData} />
        </div>
      </div>

      {/* Stock Info */}
      <section className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl">Offers</h2>
          <button className="text-blue-400">See all</button>
        </div>

        {/* Stock Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-800 rounded-lg">
            <p className="text-yellow-500 text-lg">22k 10gm Gold</p>
            <p className="text-lg font-bold">৳7000</p>
            <p className="text-green-500">(-0.72%)</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <p className="text-yellow-500 text-lg">Traditional 10gm Gold</p>
            <p className="text-lg font-bold">৳5000</p>
            <p className="text-green-500">(-0.72%)</p>
          </div>
        </div>

        {/* Market Price */}
        <div className="mt-4">
          <h2 className="text-xl">Today Market Price (in GRAM)</h2>

          <div className="p-4 bg-gray-800 rounded-lg flex justify-between items-center">
            <p className="text-lg">Product</p>
            <p className="text-lg">Price</p>
            <p className="text-lg">Value</p>
          </div>
          <br />
          <p className="text-sm">CADMIUM (HALLMARKED)</p>
          <hr />
          <br />
          {[
            { product: "22 KARAT Gold", price: "৳12,008", value: "+0.25%" },
            { product: "21 KARAT Gold", price: "৳11,463", value: "+0.25%" },
            { product: "18 KARAT Gold", price: "৳9,825", value: "+0.25%" },
            { product: "22 KARAT Silver", price: "৳180", value: "+0.25%" },
            { product: "21 KARAT Silver", price: "৳172", value: "+0.25%" },
            { product: "18 KARAT Silver", price: "৳147", value: "+0.25%" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 bg-gray-800 rounded-lg flex justify-between items-center"
            >
              <p className="text-yellow-500 text-sm">{item.product}</p>
              <p className="text-sm">{item.price}</p>
              <p className="text-green-500 text-sm">{item.value}</p>
              <button className="text-blue-400">Buy | Sell | Gift</button>
            </div>
          ))}
          <br />
          <p className="text-sm">(NO HALLMARKED)</p>
          <hr />
          <br />
          {[
            { product: "TRADITIONAL Gold", price: "৳8,069", value: "+0.25%" },
            { product: "TRADITIONAL Silver", price: "৳110", value: "+0.25%" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 bg-gray-800 rounded-lg flex justify-between items-center"
            >
              <p className="text-yellow-500 text-sm">{item.product}</p>
              <p className="text-sm">{item.price}</p>
              <p className="text-green-500 text-sm">{item.value}</p>
              <button className="text-blue-400">Buy | Sell | Gift</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
