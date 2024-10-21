"use client";

import { useState } from 'react';
import { Pie, Line } from 'react-chartjs-2'; // using Chart.js for data visualization
import {
  ArcElement, LineElement, PointElement, Chart,
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
} from 'chart.js';

// Register the necessary Chart.js components
Chart.register(ArcElement, LineElement, PointElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Explore() {
  const [darkMode, setDarkMode] = useState(true); // Set darkMode to true by default

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Placeholder data for charts
  const assetsData = {
    labels: ['Gold', 'Silver', 'Traditional'],
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

  // Mock assets data to simulate asset details
  const [assets, setAssets] = useState([
    { id: 1, name: 'Gold', value: '7000', transactions: [], history: [] },
    { id: 2, name: 'Silver', value: '5000', transactions: [], history: [] },
  ]);

  const [selectedAsset, setSelectedAsset] = useState(null);
  const [isAddingAsset, setIsAddingAsset] = useState(false);
  const [newAsset, setNewAsset] = useState({ name: '', value: '', document: null });

  const handleAddAsset = () => {
    // Mock function to add a new asset
    setAssets([...assets, { id: assets.length + 1, ...newAsset, transactions: [], history: [] }]);
    setIsAddingAsset(false);
    setNewAsset({ name: '', value: '', document: null });
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen p-4 bg-gray-50 dark:bg-gray-900">
        {/* Dashboard Header */}
        <header className="flex justify-between items-center p-6 bg-gold dark:bg-darkGold">
         
          <button
            onClick={toggleDarkMode}
            className="text-sm px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md shadow"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>

        {/* Stock Info */}
        <section className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid grid-cols-2 gap-4">
            {/* Stock Card 1 */}
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <p className="text-yellow-600 dark:text-yellow-500 text-lg">22k 10gm Gold</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">৳7000</p>
              <p className="text-green-600 dark:text-green-400">(-0.72%)</p>
            </div>

            {/* Stock Card 2 */}
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <p className="text-yellow-600 dark:text-yellow-500 text-lg">Traditional 10gm Gold</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">৳5000</p>
              <p className="text-green-600 dark:text-green-400">(-0.72%)</p>
            </div>
          </div>
        </section>

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
        </section>

        {/* Asset Management */}
        <section className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Asset Management</h2>

          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold mb-4">Asset Overview</h3>
            <ul className="space-y-2">
              {assets.map((asset) => (
                <li
                  key={asset.id}
                  className="flex justify-between items-center border-b py-2"
                >
                  <span className="text-gray-900 dark:text-white">
                    {asset.name} - {asset.value}
                  </span>
                  <div>
                    <button
                      onClick={() => setSelectedAsset(asset)}
                      className="text-blue-500 hover:underline"
                    >
                      View
                    </button>
                    <button className="text-yellow-500 hover:underline ml-2">
                      Edit
                    </button>
                    <button className="text-red-500 hover:underline ml-2">
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsAddingAsset(true)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500"
            >
              Add New Asset
            </button>
          </div>

          {isAddingAsset && (
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-4">
              <h4 className="font-semibold">Add New Asset</h4>
              <input
                type="text"
                placeholder="Asset Name"
                value={newAsset.name}
                onChange={(e) => setNewAsset({ ...newAsset, name: e.target.value })}
                className="border p-2 rounded mt-2 w-full"
              />
              <input
                type="text"
                placeholder="Asset Value"
                value={newAsset.value}
                onChange={(e) => setNewAsset({ ...newAsset, value: e.target.value })}
                className="border p-2 rounded mt-2 w-full"
              />
              <input
                type="file"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setNewAsset({ ...newAsset, document: e.target.files[0] });
                  }
                }}
                className="border p-2 rounded mt-2 w-full"
              />
              <button
                onClick={handleAddAsset}
                className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-500"
              >
                Add Asset
              </button>
            </div>
          )}

          {selectedAsset && (
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <h4 className="font-semibold">{selectedAsset.name} Details</h4>
              <p className="mt-2">Value: {selectedAsset.value}</p>
              {/* Add more details about the asset */}
              <button
                onClick={() => setSelectedAsset(null)}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-500"
              >
                Close
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
