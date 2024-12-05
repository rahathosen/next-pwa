"use client";

import { useState } from "react";
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

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Explore() {
  const [goldPrice, setGoldPrice] = useState([1800, 1820, 1850, 1830, 1870]); // Example prices
  const [selectedCurrency, setSelectedCurrency] = useState("BDT");
  const [alerts, setAlerts] = useState<string[]>([]);

  const handleSetAlert = (newAlert: string) => {
    setAlerts([...alerts, newAlert]);
  };

  // Example Chart Data
  const goldChartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Gold Price (USD)",
        data: goldPrice,
        borderColor: "#f59e0b",
        backgroundColor: "rgba(245, 158, 11, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Market Overview */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Market Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Gold Price Trends</h3>
              <Line data={goldChartData} />
            </div>
          </div>
        </section>

        {/* Portfolio Insights */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Portfolio Insights</h2>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium text-gray-700">Portfolio Value Over Time</h3>
              <Line data={goldChartData} />
            </div>
          </div>
        </section>

        {/* Exchange Rate Tracker */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Exchange Rates</h2>
          <div className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Search currency pair"
                className="flex-1 p-2 border border-gray-300 rounded-md"
              />
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="p-2 border border-gray-300 rounded-md"
              >
                <option value="BDT">BDT</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-100 rounded-md">
                <p className="text-sm font-medium text-gray-700">BDT to USD</p>
                <p className="text-xl font-bold text-blue-600">1.00</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-md">
                <p className="text-sm font-medium text-gray-700">USD to EUR</p>
                <p className="text-xl font-bold text-blue-600">0.85</p>
              </div>
              {/* More rates... */}
            </div>
          </div>
        </section>

        {/* Alerts */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Price Alerts</h2>
          <div className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Set alert for..."
                className="flex-1 p-2 border border-gray-300 rounded-md"
              />
              <button
                onClick={() => handleSetAlert("Alert set!")}
                className="bg-green-600 text-white py-2 px-4 rounded-lg"
              >
                Add Alert
              </button>
            </div>
            <div className="space-y-2">
              {alerts.map((alert, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-100 rounded-md flex justify-between items-center"
                >
                  <p className="text-sm font-medium text-gray-700">{alert}</p>
                  <button className="text-red-600">Remove</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
