"use client";

import { useState } from "react";

export default function RentGold() {
  const [goldQuantity, setGoldQuantity] = useState(0);
  const [rentalPeriod, setRentalPeriod] = useState(3); // Default: 3 months
  const [estimatedEarnings, setEstimatedEarnings] = useState(0);

  const rentalRatePerGramPerMonth = 50; // Example: 50 Taka per gram per month

  const calculateEarnings = () => {
    const earnings = goldQuantity * rentalRatePerGramPerMonth * rentalPeriod;
    setEstimatedEarnings(parseFloat(earnings.toFixed(2)));
  };

  const handleFormSubmit = () => {
    alert("Gold rented successfully!");
    setGoldQuantity(0);
    setRentalPeriod(3);
    setEstimatedEarnings(0);
  };

  const activeRentals = [
    { quantity: 10, period: 6, earnings: 3000 },
    { quantity: 5, period: 3, earnings: 750 },
  ]; // Example data for active rentals

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Rent Gold Form */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Rent Your Gold
          </h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="goldQuantity"
                className="block text-sm font-medium text-gray-700"
              >
                Gold Quantity (grams)
              </label>
              <input
                type="number"
                id="goldQuantity"
                value={goldQuantity}
                onChange={(e) => setGoldQuantity(Number(e.target.value))}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                placeholder="Enter gold quantity in grams"
              />
            </div>

            <div>
              <label
                htmlFor="rentalPeriod"
                className="block text-sm font-medium text-gray-700"
              >
                Rental Period (months)
              </label>
              <select
                id="rentalPeriod"
                value={rentalPeriod}
                onChange={(e) => setRentalPeriod(Number(e.target.value))}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              >
                {[3, 6, 12].map((period) => (
                  <option key={period} value={period}>
                    {period} months
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={calculateEarnings}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Calculate Earnings
            </button>

            {estimatedEarnings > 0 && (
              <p className="text-sm font-medium text-gray-700">
                Estimated Earnings:{" "}
                <span className="font-bold text-green-600">
                  {estimatedEarnings} Taka
                </span>
              </p>
            )}
          </div>

          <button
            onClick={handleFormSubmit}
            className="w-full mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
          >
            Confirm Rental
          </button>
        </section>

        {/* Active Rentals */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Active Rentals
          </h2>
          <div className="space-y-4">
            {activeRentals.map((rental, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-md"
              >
                <p className="text-sm font-medium text-gray-700">
                  <span className="font-bold">{rental.quantity}g</span> for{" "}
                  <span className="font-bold">{rental.period} months</span>
                </p>
                <p className="text-sm font-medium text-green-600">
                  Earnings: {rental.earnings} Taka
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
