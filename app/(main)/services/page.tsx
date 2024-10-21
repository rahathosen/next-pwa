"use client";

import React, { useState } from 'react';

interface Loan {
  amount: string; // Assuming you want amount to be a string for user input
  status: string;
  collateral: string;
  documentation: File | null;
}

interface Rental {
  name: string;
  income: number;
  rentalPrice: string; // Assuming you want this to be a string for user input
  duration: string; // Assuming you want this to be a string for user input
  terms: string;
}

interface Payment {
  type: string;
  date: string;
  recurring: boolean;
  reminder: boolean;
}

interface Asset {
  id: number;
  name: string;
  value: string;
  history: any[];
  transactions: any[];
}

interface NewAsset {
  name: string;
  value: string;
  document: File | null;
}

const Services: React.FC = () => {
  const [loanStatus, setLoanStatus] = useState<Loan[]>([]);
  const [rentedAssets, setRentedAssets] = useState<Rental[]>([]);
  const [paymentHistory, setPaymentHistory] = useState<Payment[]>([]);
  const [selectedLoan, setSelectedLoan] = useState<Loan | null>(null);
  const [selectedRental, setSelectedRental] = useState<Rental | null>(null);

  const [assets, setAssets] = useState<Asset[]>([
    {
      id: 1,
      name: "Gold Necklace",
      value: "৳ 50,000",
      history: [],
      transactions: [],
    },
    {
      id: 2,
      name: "Silver Ring",
      value: "৳ 15,000",
      history: [],
      transactions: [],
    },
  ]);

  const [newAsset, setNewAsset] = useState<NewAsset>({
    name: "",
    value: "",
    document: null,
  });
  const [isAddingAsset, setIsAddingAsset] = useState<boolean>(false);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  // Loan Management state
  const [loanAmount, setLoanAmount] = useState<string>("");
  const [loanCollateral, setLoanCollateral] = useState<string>("");
  const [loanDocumentation, setLoanDocumentation] = useState<File | null>(null);
  const [isViewingLoan, setIsViewingLoan] = useState<boolean>(false);

  // Rental Management state
  const [rentalAsset, setRentalAsset] = useState<Rental>({
    name: "",
    rentalPrice: "",
    duration: "",
    income: 0, // Add income if needed
    terms: "", // Add terms if needed
  });
  const [isViewingRentalAgreement, setIsViewingRentalAgreement] = useState<boolean>(false);

  // Payment Scheduling state
  const [paymentType, setPaymentType] = useState<string>("Loan");
  const [paymentDate, setPaymentDate] = useState<string>("");
  const [recurring, setRecurring] = useState<boolean>(false);
  const [reminder, setReminder] = useState<boolean>(false);

  const handleAddAsset = () => {
    setAssets([
      ...assets,
      { id: assets.length + 1, ...newAsset, history: [], transactions: [] },
    ]);
    setNewAsset({ name: "", value: "", document: null });
    setIsAddingAsset(false);
  };

  const handleLoanApplication = () => {
    if (loanAmount && loanCollateral) {
      const newLoan: Loan = {
        amount: loanAmount,
        collateral: loanCollateral,
        documentation: loanDocumentation,
        status: "Pending",
      };
      setLoanStatus([...loanStatus, newLoan]);
      setLoanAmount("");
      setLoanCollateral("");
      setLoanDocumentation(null);
    }
  };

  const handleRentalAgreement = () => {
    const newRental = { ...rentalAsset };
    setRentedAssets([...rentedAssets, newRental]);
    setRentalAsset({ name: "", rentalPrice: "", duration: "" });
  };

  const handleSchedulePayment = () => {
    const paymentDetails: Payment = {
      type: paymentType,
      date: paymentDate,
      recurring,
      reminder,
    };
    setPaymentHistory([...paymentHistory, paymentDetails]);
    // Reset fields
    setPaymentType("Loan");
    setPaymentDate("");
    setRecurring(false);
    setReminder(false);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Loan Management Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Loan Management</h2>

        {/* Loan Status Overview Screen */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-4">
          <h3 className="text-xl font-semibold mb-4">Loan Status Overview</h3>
          <ul className="space-y-2">
            {loanStatus.map((loan, index) => (
              <li key={index} className="border-b py-2 flex justify-between items-center">
                <span className="text-gray-900 dark:text-white">{loan.amount} - Status: {loan.status}</span>
                <button
                  onClick={() => setSelectedLoan(loan)}
                  className="text-blue-500 hover:underline"
                >
                  View Details
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Loan Details Screen */}
        {selectedLoan && (
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold mb-4">Loan Details</h3>
            <p className="text-gray-900 dark:text-white">Loan Amount: {selectedLoan.amount}</p>
            <p className="text-gray-900 dark:text-white">Collateral: {selectedLoan.collateral}</p>
            <p className="text-gray-900 dark:text-white">Status: {selectedLoan.status}</p>
            {/* Ensure interestRate and repaymentSchedule are included in Loan interface if needed */}
            <button
              onClick={() => setSelectedLoan(null)}
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-500"
            >
              Close
            </button>
          </div>
        )}
      </section>

      {/* Rental Management Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Rental Management</h2>

        {/* Rental Overview Screen */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-4">
          <h3 className="text-xl font-semibold mb-4">Rental Overview</h3>
          <ul className="space-y-2">
            {rentedAssets.map((rental, index) => (
              <li key={index} className="border-b py-2 flex justify-between items-center">
                <span className="text-gray-900 dark:text-white">{rental.name} - Income: {rental.income}</span>
                <button
                  onClick={() => handleRentalAgreement(rental)}
                  className="text-blue-500 hover:underline"
                >
                  View Agreement
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Rental Agreement Screen */}
        {selectedRental && (
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold mb-4">Rental Agreement</h3>
            <p className="text-gray-900 dark:text-white">Asset: {selectedRental.name}</p>
            <p className="text-gray-900 dark:text-white">Rental Price: {selectedRental.rentalPrice}</p>
            <p className="text-gray-900 dark:text-white">Duration: {selectedRental.duration} days</p>
            <p className="text-gray-900 dark:text-white">Terms: {selectedRental.terms}</p>
            <button
              onClick={() => setSelectedRental(null)}
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-500"
            >
              Close
            </button>
          </div>
        )}
      </section>

      {/* Payment Scheduling Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Payment Scheduling</h2>

        {/* Payment Schedule Setup Screen */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-4">
          <h3 className="text-xl font-semibold mb-4">Payment Schedule Setup</h3>
          <select
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
            className="border p-2 rounded w-full mb-4"
          >
            <option value="Loan">Loan</option>
            <option value="Asset Purchase">Asset Purchase</option>
          </select>
          <input
            type="date"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
            className="border p-2 rounded w-full mb-4"
          />
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={recurring}
              onChange={() => setRecurring(!recurring)}
              className="mr-2"
            />
            <label>Recurring Payment</label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={reminder}
              onChange={() => setReminder(!reminder)}
              className="mr-2"
            />
            <label>Set Reminder</label>
          </div>
          <button
            onClick={handleSchedulePayment}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500"
          >
            Schedule Payment
          </button>
        </div>

        {/* Payment History Screen */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-4">
          <h3 className="text-xl font-semibold mb-4">Payment History</h3>
          <ul className="space-y-2">
            {paymentHistory.map((payment, index) => (
              <li key={index} className="border-b py-2">
                <span className="text-gray-900 dark:text-white">
                  {payment.type} - Date: {payment.date} - Recurring: {payment.recurring ? "Yes" : "No"} - Reminder: {payment.reminder ? "Yes" : "No"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Services;
