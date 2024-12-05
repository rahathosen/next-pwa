"use client";

import { useEffect, useState } from "react";
import ShadcnChart from "./ShadcnCharts";
import Link from "next/link";

// Helper function to get the current date
function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

const Converter = () => {
  const [inputValue, setInputValue] = useState(""); // User input value
  const [selectedCurrency, setSelectedCurrency] = useState("bdt"); // Selected currency
  const [grams, setGrams] = useState(""); // Computed grams
  const [currentDate, setCurrentDate] = useState(getDate()); // Current date
  const [time, setTime] = useState(""); // Current time

  // Conversion rates
  const conversionRates: { [key: string]: number } = {
    bdt: 200, // Example rate: 1 gram = 200 BDT
    dollar: 50, // Example rate: 1 gram = 50 USD
  };

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const showTime =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      setTime(showTime);
    };

    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // Calculate grams if the input is valid
    if (!isNaN(Number(value)) && selectedCurrency in conversionRates) {
      setGrams(
        (parseFloat(value) / conversionRates[selectedCurrency]).toFixed(2),
      );
    } else {
      setGrams("");
    }
  };

  // Handle currency selection change
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currency = e.target.value;
    setSelectedCurrency(currency);

    // Recalculate grams when currency changes
    if (!isNaN(Number(inputValue)) && currency in conversionRates) {
      setGrams((parseFloat(inputValue) / conversionRates[currency]).toFixed(2));
    } else {
      setGrams("");
    }
  };

  return (
    <div className="mx-auto w-full space-y-4 px-4">
      {/* Header Section */}
      <div className="text-sm text-gray-600">
        <h5 className="mb-2 text-2xl">Exchange Rate Calculator</h5>
        <p>
          {currentDate} - {time}{" "}
          <span className="cursor-pointer text-amber-500">
            <Link href="/disclaimer">Disclaimer</Link>
          </span>
        </p>
      </div>

      {/* Conversion Section */}
      <div className="space-y-4 p-4">
        {/* Currency Input */}
        <div className="rounded-lg border p-4">
          <div className="gap-5 md:flex">
            <div className="flex-1">
              <label htmlFor="grams" className="self-center">
                Amount
              </label>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter amount"
                className="mb-3 block w-full mt-1 rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex-1">
              <label htmlFor="currency" className="self-center">
                In Currency
              </label>
              <select
                id="currency"
                value={selectedCurrency}
                onChange={handleSelectChange}
                className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="bdt">BDT</option>
                <option value="dollar">Dollar</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grams Output */}
        <div className="flex items-center gap-5 rounded-lg border p-4">
          <div className="flex-1">
            <label htmlFor="grams" className="self-center">
              In Grams
            </label>
            <input
              type="text"
              value={grams}
              readOnly
              placeholder="Quantity in grams"
              className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="currency" className="self-center">
              In Currency
            </label>
            <div className="flex-1">
              <select
                id="currency"
                value={selectedCurrency}
                onChange={handleSelectChange}
                className="mt-2 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="bdt">BDT</option>
                <option value="dollar">Dollar</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Component */}
      <ShadcnChart />
    </div>
  );
};

export default Converter;
