"use client";

import { useState } from "react";
import RecurringBuyTable from "@/components/core/RecurringBuyTable";

export default function PaymentScheduling() {
  const [activeTab, setActiveTab] = useState("loanPayment");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <h1 className="text-2xl font-semibold text-gray-800">Payment Scheduling</h1>

        {/* Tab Navigation */}
        <div className="flex space-x-4 border-b pb-2">
          <button
            onClick={() => setActiveTab("loanPayment")}
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === "loanPayment" ? "bg-white text-blue-600 border-t border-x border-b-0" : "text-gray-600"
            }`}
          >
            Loan Payment Schedule
          </button>
          <button
            onClick={() => setActiveTab("goldPurchase")}
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === "goldPurchase" ? "bg-white text-blue-600 border-t border-x border-b-0" : "text-gray-600"
            }`}
          >
            Schedule Buy Gold
          </button>
          <button
            onClick={() => setActiveTab("newRent")}
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === "newRent" ? "bg-white text-blue-600 border-t border-x border-b-0" : "text-gray-600"
            }`}
          >
            Schedule New Rent Gold
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white shadow rounded-lg p-6">
          {activeTab === "loanPayment" && <LoanPaymentSchedule />}
          {activeTab === "goldPurchase" && <GoldPurchaseSchedule />}
          {activeTab === "newRent" && <NewRentSchedule />}
        </div>
      </div>
      {/* Recurring Buy */}
       <RecurringBuyTable />
    </div>
  );
}

function LoanPaymentSchedule() {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Loan Payment Schedule</h2>
      <table className="min-w-full border-collapse border border-gray-200 text-sm text-gray-700">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2 text-left">Date</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Amount (BDT)</th>
            <th className="border border-gray-200 px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {[
            { date: "2024-12-01", amount: "5,000", status: "Pending" },
            { date: "2024-12-15", amount: "5,000", status: "Pending" },
          ].map((payment, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-200 px-4 py-2">{payment.date}</td>
              <td className="border border-gray-200 px-4 py-2">{payment.amount}</td>
              <td className="border border-gray-200 px-4 py-2">{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function GoldPurchaseSchedule() {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Schedule Buy Gold</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Quantity (grams)</label>
          <input
            type="number"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="e.g., 10"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Schedule Date</label>
          <input
            type="date"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 focus:ring focus:ring-blue-300"
        >
          Schedule Purchase
        </button>
      </form>
    </div>
  );
}

function NewRentSchedule() {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Schedule New Rent Gold</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Quantity (grams)</label>
          <input
            type="number"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="e.g., 15"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Duration (Months)</label>
          <input
            type="number"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="e.g., 6"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 focus:ring focus:ring-blue-300"
        >
          Schedule Rental
        </button>
      </form>
    </div>
  );
}



// import Buy from "@/app/(dashboard)/dashboard/buy/page";
// import Checkout from "@/app/(dashboard)/dashboard/checkout/page";
// import Header from "@/components/core/Header";
// import RecurringBuyTable from "@/components/core/RecurringBuyTable";
// import React from "react";

// const page = () => {
//   return (
//     <>
//       <div className="p-4 md:hidden">
//         <Header title="Payment Scheduling" />
//       </div>
//       {/* Buy */}
//       <Buy />
//       {/* Checkout */}
//       <Checkout />
//       {/* Recurring Buy */}
//       <RecurringBuyTable />
//     </>
//   );
// };

// export default page;
