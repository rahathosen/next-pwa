"use client";
import UserPortfolioGraph from "@/components/UserPortfolioGraph";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";


const Service = () => {
  const portfolioData = {
    dates: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    goldValues: [1000, 1200, 1300, 1250, 1400, 1500],
    silverValues: [500, 600, 650, 630, 700, 750],
    totalValues: [1500, 1800, 1950, 1880, 2100, 2250],
  };
  // State for exchange preview and history
  const [exchangeInput, setExchangeInput] = useState("");
  const [exchangeOutput, setExchangeOutput] = useState(0); // Change to 0 (number)
  const [exchangeHistory, setExchangeHistory] = useState([
    { type: "BDT to USD", rate: 0.012, input: 1000, output: 12, fee: 0.5 },
    {
      type: "Gold 22k to Silver 18k",
      rate: 1.2,
      input: 5,
      output: 6,
      fee: 0.7,
    },
  ]);

  // State for loan and rental
  const [loanAmount, setLoanAmount] = useState("");
  const [rentalInput, setRentalInput] = useState({
    quantity: "",
    duration: "",
  });
  const [rentalIncome, setRentalIncome] = useState(0);

  // Mock data for rates
  const exchangeRate = 0.013;
  const loanRate = 0.05;
  const rentalRate = 0.02;

  const handleExchange = () => {
    // Mock exchange logic
    setExchangeOutput(parseFloat(exchangeInput) * exchangeRate); // Ensure exchangeInput is a number
  };

  const handleLoanCalculation = () => {
    setLoanAmount((loanRate * parseFloat(loanAmount)) as any); // Ensure loanAmount is a number
  };

  const handleRental = () => {
    setRentalIncome(parseFloat(rentalInput.quantity) * rentalRate); // Ensure rentalInput.quantity is a number
  };

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "reminder",
      message: "Your payment of 500 BDT is due in 3 days.",
      isRead: false,
    },
    {
      id: 2,
      type: "offer",
      message: "Special Offer: Get 10% off on Gold exchanges this week!",
      isRead: false,
    },
    {
      id: 3,
      type: "rate-alert",
      message: "Gold rate has increased by 0.5%.",
      isRead: false,
    },
  ]);

  // Mark a notification as read
  const markAsRead = (id: any) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification,
      ),
    );
  };

  // Remove notification
  const removeNotification = (id: any) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id),
    );
  };

  return (
    <div className="container mx-auto p-6 ">
      <div className="container mx-auto p-6">
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">User Portfolio</h2>
          <UserPortfolioGraph portfolioData={portfolioData} />
        </section>
      </div>
      {/* Asset & Currency Exchange */}
      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">
          Asset & Currency Exchange Rate
        </h2>

        {/* Exchange Interface */}
        <div className="mb-4 rounded-lg bg-neutral-100 p-4 shadow-md ">
          <h3 className="mb-2 text-lg font-semibold">
            Exchange Rate Interface
          </h3>
          <input
            type="number"
            value={exchangeInput}
            onChange={(e) => setExchangeInput(e.target.value)}
            placeholder="Enter amount"
            className="mb-2 w-full rounded-lg border border-neutral-300 px-4 py-2 "
          />
          <p className="text-sm">Rate Preview: {exchangeRate} | Fee: 0.5%</p>
        </div>

        {/* Conversion Preview */}
        <div className="mb-4 rounded-lg bg-neutral-100 p-4 shadow-md ">
          <h3 className="mb-2 text-lg font-semibold">Conversion Preview</h3>
          <p>Input: {exchangeInput}</p>
          <p>Output: {exchangeOutput ? exchangeOutput.toFixed(2) : "0.00"}</p>
          <p>
            Fees:{" "}
            {exchangeOutput ? (exchangeOutput * 0.005).toFixed(2) : "0.00"}
          </p>
        </div>

        {/* Exchange History */}
        <div className="rounded-lg bg-neutral-100 p-4 shadow-md ">
          <h3 className="mb-2 text-lg font-semibold">Exchange History</h3>
          <ul>
            {exchangeHistory.map((exchange, index) => (
              <li
                key={index}
                className="border-b border-neutral-300 py-2 "
              >
                <p>Type: {exchange.type}</p>
                <p>Rate: {exchange.rate}</p>
                <p>
                  Input: {exchange.input} | Output: {exchange.output} | Fee:{" "}
                  {exchange.fee}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* notification  */}

      <div className="container mx-auto p-6 ">
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Notifications & Alerts</h2>

          {/* Notification List */}
          <div className="rounded-lg bg-neutral-100 p-4 shadow-md ">
            <h3 className="mb-2 text-lg font-semibold">Your Notifications</h3>
            <ul>
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className={`border-b border-neutral-300 py-2  ${notification.isRead ? "bg-neutral-200 " : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`text-sm ${notification.type === "reminder" ? "text-red-500" : notification.type === "offer" ? "text-green-500" : "text-yellow-500"}`}
                    >
                      {notification.message}
                    </div>
                    <div className="ml-4">
                      {!notification.isRead && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="rounded-md bg-blue-600 px-2 py-1 text-xs text-white"
                        >
                          Mark as Read
                        </button>
                      )}
                      <button
                        onClick={() => removeNotification(notification.id)}
                        className="ml-2 text-xs text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* Other sections remain the same... */}
    </div>
  );
};

export default Service;
