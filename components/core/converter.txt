"use client";
import { useEffect, useState } from "react";
import ShadcnChart from "./ShadcnCharts";
import Link from "next/link";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

const Converter = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [currentDate, setCurrentDate] = useState(getDate());

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSelectChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const showTime =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      setTime(showTime);
    };

    // Update the time every second
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mx-auto w-full space-y-4 px-4">
      <div className="text-sm text-gray-600">
        <h5 className="mb-2 text-2xl">Exchange rate calculator</h5>

        <p>
          {currentDate} - {time}{" "}
          <span className="cursor-pointer text-amber-500">
            <Link href="/disclaimer">Disclaimer</Link>
          </span>
        </p>
      </div>

      <div className="border p-1">
        {/* Input Field */}
        <div className="gap-5 md:flex">
          <div className="flex-1">
            <input
              id="input"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 md:py-[5px]"
            />
          </div>
          <label htmlFor="label">In Currency</label>

          {/* Select Box */}
          <div className="flex-1 pt-2 sm:pt-0">
            <select
              id="select"
              value={selectedOption}
              onChange={handleSelectChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="bdt">BDT</option>
              <option value="dollar">Dollar</option>
              <option value="gold22">22K GOLD</option>
              <option value="gold18">18K GOLD</option>
            </select>
          </div>
        </div>
      </div>

      <div className="border p-1">
        <div className="gap-5 md:flex">
          <div className="flex-1">
            <input
              id="input"
              type="text"
              // value={inputValue}
              // onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 md:py-[5px]"
            />
          </div>

          <label htmlFor="label">In Grams</label>
          {/* Select Box */}
          <div className="flex-1 pt-2 sm:pt-0">
            <select
              id="select"
              value={selectedOption}
              onChange={handleSelectChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="bdt1">BDT</option>
              <option value="dollar2">Dollar</option>
              <option value="gold223">22K GOLD</option>
              <option value="gold184">18K GOLD</option>
            </select>
          </div>
        </div>
      </div>

      <ShadcnChart />
    </div>
  );
};

export default Converter;
