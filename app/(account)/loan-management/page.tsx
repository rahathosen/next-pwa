"use client";

import { useState } from "react";

export default function GoldLoans() {
  const [holdings, setHoldings] = useState(100); // Example holdings in grams
  const [loanEligibility, setLoanEligibility] = useState(0);
  const [emiSchedule, setEmiSchedule] = useState([
    { date: "2024-12-01", amount: 5000 },
    { date: "2025-01-01", amount: 5000 },
    { date: "2025-02-01", amount: 5000 },
    { date: "2025-03-01", amount: 5000 },
  ]);

  const loanRate = 0.6; // Loan eligibility: 60% of holdings' value
  const goldRatePerGram = 5000; // Example: 1 gram = 5000 Taka
  const interestRate = 0.05; // 5% interest per month

  // Calculate loan eligibility
const calculateEligibility = () => {
  const loanableValue = holdings * goldRatePerGram * loanRate;
  setLoanEligibility(Number(loanableValue.toFixed(2)));
  };

  const [goldCollateral, setGoldCollateral] = useState(0);
  const [loanTenure, setLoanTenure] = useState(6); // Default: 6 months
  interface LoanDetails {
    principal: string;
    interest: string;
    totalRepayment: string;
    monthlyEMI: string;
  }

  const [loanDetails, setLoanDetails] = useState<LoanDetails | null>(null);


  const calculateLoanDetails = () => {
  const principal = goldCollateral * goldRatePerGram * loanRate;
  const interest = principal * interestRate * loanTenure;
  const totalRepayment = principal + interest;

  setLoanDetails({
      principal: principal.toFixed(2),
      interest: interest.toFixed(2),
      totalRepayment: totalRepayment.toFixed(2),
      monthlyEMI: (totalRepayment / loanTenure).toFixed(2),
    });
  };

  const resetLoanForm = () => {
    setGoldCollateral(0);
    setLoanTenure(6);
    setLoanDetails(null);
  };


  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Eligibility Card */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Loan Eligibility
          </h2>
          <div className="space-y-4">
            <p className="text-sm font-medium text-gray-700">
              Current Holdings:{" "}
              <span className="font-bold">{holdings} grams</span>
            </p>
            <p className="text-sm font-medium text-gray-700">
              Gold Rate:{" "}
              <span className="font-bold">{goldRatePerGram} Taka/gram</span>
            </p>
            <button
              onClick={calculateEligibility}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Calculate Loan Eligibility
            </button>
            {loanEligibility > 0 && (
              <div className="mt-4 text-gray-800">
                <p>
                  Loanable Amount:{" "}
                  <span className="font-bold text-green-600">
                    {loanEligibility} Taka
                  </span>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Repayment Schedule */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Repayment Schedule
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left text-sm font-semibold text-gray-700">
                    Date
                  </th>
                  <th className="p-3 text-left text-sm font-semibold text-gray-700">
                    Amount (Taka)
                  </th>
                </tr>
              </thead>
              <tbody>
                {emiSchedule.map((emi, index) => (
                  <tr key={index} className="even:bg-gray-50">
                    <td className="p-3 text-sm text-gray-700">{emi.date}</td>
                    <td className="p-3 text-sm text-gray-700">
                      {emi.amount.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        
        {/* Loan Details Summary */}
        {loanDetails && (
          <section className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Loan Details
            </h2>
            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-700">
                Principal Amount:{" "}
                <span className="font-bold text-green-600">
                  {loanDetails.principal} Taka
                </span>
              </p>
              <p className="text-sm font-medium text-gray-700">
                Total Interest:{" "}
                <span className="font-bold text-red-600">
                  {loanDetails.interest} Taka
                </span>
              </p>
              <p className="text-sm font-medium text-gray-700">
                Total Repayment:{" "}
                <span className="font-bold text-blue-600">
                  {loanDetails.totalRepayment} Taka
                </span>
              </p>
              <p className="text-sm font-medium text-gray-700">
                Monthly EMI:{" "}
                <span className="font-bold text-purple-600">
                  {loanDetails.monthlyEMI} Taka
                </span>
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={resetLoanForm}
                  className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
                >
                  Reset
                </button>
                <button
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
                >
                  Confirm Loan
                </button>
              </div>
            </div>
          </section>
        )}


        {/* Loan Application Form */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Apply for a Gold Loan
          </h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="goldCollateral"
                className="block text-sm font-medium text-gray-700"
              >
                Gold Collateral (grams)
              </label>
              <input
                type="number"
                id="goldCollateral"
                value={goldCollateral}
                onChange={(e) => setGoldCollateral(Number(e.target.value))}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                placeholder="Enter gold quantity in grams"
              />
            </div>

            <div>
              <label
                htmlFor="loanTenure"
                className="block text-sm font-medium text-gray-700"
              >
                Loan Tenure (months)
              </label>
              <select
                id="loanTenure"
                value={loanTenure}
                onChange={(e) => setLoanTenure(Number(e.target.value))}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              >
                {[6, 12, 18, 24].map((tenure) => (
                  <option key={tenure} value={tenure}>
                    {tenure} months
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={calculateLoanDetails}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Calculate Loan Details
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}

