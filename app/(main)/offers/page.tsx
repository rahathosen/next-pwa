"use client";

import { useState } from "react";

export default function ManagementDashboard() {
  // Asset Management state
  const [assets, setAssets] = useState([
    { id: 1, name: "Gold Necklace", value: "৳ 50,000", history: [], transactions: [] },
    { id: 2, name: "Silver Ring", value: "৳ 15,000", history: [], transactions: [] },
  ]);
  const [newAsset, setNewAsset] = useState({ name: "", value: "", document: null });
  const [isAddingAsset, setIsAddingAsset] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);

  // Loan Management state
  const [loanAmount, setLoanAmount] = useState("");
  const [loanCollateral, setLoanCollateral] = useState("");
  const [loanDocumentation, setLoanDocumentation] = useState(null);
  const [loanStatus, setLoanStatus] = useState([]);
  const [isViewingLoan, setIsViewingLoan] = useState(false);

  // Rental Management state
  const [rentalAsset, setRentalAsset] = useState({ name: "", rentalPrice: "", duration: "" });
  const [rentedAssets, setRentedAssets] = useState([]);
  const [isViewingRentalAgreement, setIsViewingRentalAgreement] = useState(false);

  // Payment Scheduling state
  const [paymentType, setPaymentType] = useState("Loan");
  const [paymentDate, setPaymentDate] = useState("");
  const [recurring, setRecurring] = useState(false);
  const [reminder, setReminder] = useState(false);
  const [paymentHistory, setPaymentHistory] = useState([]);

  const handleAddAsset = () => {
    setAssets([...assets, { id: assets.length + 1, ...newAsset, history: [], transactions: [] }]);
    setNewAsset({ name: "", value: "", document: null });
    setIsAddingAsset(false);
  };

  const handleLoanApplication = () => {
    if (loanAmount && loanCollateral) {
      const newLoan = { amount: loanAmount, collateral: loanCollateral, documentation: loanDocumentation, status: "Pending" };
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
    const paymentDetails = { type: paymentType, date: paymentDate, recurring, reminder };
    setPaymentHistory([...paymentHistory, paymentDetails]);
    // Reset fields
    setPaymentType("Loan");
    setPaymentDate("");
    setRecurring(false);
    setReminder(false);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Management Dashboard</h1>

      {/* Asset Management Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Asset Management</h2>

        {/* Asset Overview Screen */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-4">
          <h3 className="text-xl font-semibold mb-4">Asset Overview</h3>
          <ul className="space-y-2">
            {assets.map((asset) => (
              <li key={asset.id} className="flex justify-between items-center border-b py-2">
                <span className="text-gray-900 dark:text-white">{asset.name} - {asset.value}</span>
                <div>
                  <button onClick={() => setSelectedAsset(asset)} className="text-blue-500 hover:underline">View</button>
                  <button className="text-yellow-500 hover:underline ml-2">Edit</button>
                  <button className="text-red-500 hover:underline ml-2">Delete</button>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={() => setIsAddingAsset(true)} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500">
            Add New Asset
          </button>
        </div>

        {/* Add New Asset Screen */}
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
              onChange={(e) => setNewAsset({ ...newAsset, document: e.target.files[0] })}
              className="border p-2 rounded mt-2 w-full"
            />
            <button onClick={handleAddAsset} className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-500">
              Submit
            </button>
          </div>
        )}

        {/* Asset Details Screen */}
        {selectedAsset && (
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold mb-4">Asset Details: {selectedAsset.name}</h3>
            <p className="text-gray-900 dark:text-white">Value: {selectedAsset.value}</p>
            <p className="text-gray-900 dark:text-white">Transaction History: {JSON.stringify(selectedAsset.transactions)}</p>
            <p className="text-gray-900 dark:text-white">Historical Value: {JSON.stringify(selectedAsset.history)}</p>
            <button onClick={() => setSelectedAsset(null)} className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-500">
              Close
            </button>
          </div>
        )}
      </section>

      {/* Loan Management Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Loan Management</h2>

        {/* Loan Application Screen */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-4">
          <h3 className="text-xl font-semibold mb-4">Loan Application Form</h3>
          <input
            type="number"
            placeholder="Loan Amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="border p-2 rounded w-full mb-4"
          />
          <select
            value={loanCollateral}
            onChange={(e) => setLoanCollateral(e.target.value)}
            className="border p-2 rounded w-full mb-4"
          >
            <option value="">Select Asset for Collateral</option>
            {assets.map((asset) => (
              <option key={asset.id} value={asset.name}>{asset.name}</option>
            ))}
          </select>
          <input
            type="file"
            onChange={(e) => setLoanDocumentation(e.target.files[0])}
            className="border p-2 rounded mt-2 w-full"
          />
          <button onClick={handleLoanApplication} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500">
            Apply for Loan
          </button>
        </div>

        {/* Loan Status Screen */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-4">
          <h3 className="text-xl font-semibold mb-4">Loan Status Overview</h3>
          <ul className="space-y-2">
            {loanStatus.map((loan, index) => (
              <li key={index} className="border-b py-2">
                <span className="text-gray-900 dark:text-white">Loan Amount: {loan.amount} - Status: {loan.status}</span>
                <button onClick={() => { setIsViewingLoan(true); }} className="text-blue-500 hover:underline ml-2">View Details</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Loan Details Screen */}
        {isViewingLoan && (
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold mb-4">Loan Details</h3>
            {/* Assuming we display details of the last loan for demo purpose */}
            <p className="text-gray-900 dark:text-white">Loan Amount: {loanStatus[loanStatus.length - 1]?.amount}</p>
            <p className="text-gray-900 dark:text-white">Collateral: {loanStatus[loanStatus.length - 1]?.collateral}</p>
            <p className="text-gray-900 dark:text-white">Status: {loanStatus[loanStatus.length - 1]?.status}</p>
            <button onClick={() => setIsViewingLoan(false)} className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-500">
              Close
            </button>
          </div>
        )}
      </section>

      {/* Rental Management Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Rental Management</h2>

        {/* Rent Asset Screen */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-4">
          <h3 className="text-xl font-semibold mb-4">Rent Out Asset</h3>
          <select
            value={rentalAsset.name}
            onChange={(e) => setRentalAsset({ ...rentalAsset, name: e.target.value })}
            className="border p-2 rounded w-full mb-4"
          >
            <option value="">Select Asset to Rent</option>
            {assets.map((asset) => (
              <option key={asset.id} value={asset.name}>{asset.name}</option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Rental Price"
            value={rentalAsset.rentalPrice}
            onChange={(e) => setRentalAsset({ ...rentalAsset, rentalPrice: e.target.value })}
            className="border p-2 rounded w-full mb-4"
          />
          <input
            type="text"
            placeholder="Rental Duration (days)"
            value={rentalAsset.duration}
            onChange={(e) => setRentalAsset({ ...rentalAsset, duration: e.target.value })}
            className="border p-2 rounded w-full mb-4"
          />
          <button onClick={handleRentalAgreement} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500">
            Submit Rental Agreement
          </button>
        </div>

        {/* Rental Overview Screen */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-4">
          <h3 className="text-xl font-semibold mb-4">Rental Overview</h3>
          <ul className="space-y-2">
            {rentedAssets.map((rental, index) => (
              <li key={index} className="border-b py-2">
                <span className="text-gray-900 dark:text-white">{rental.name} - Price: {rental.rentalPrice} - Duration: {rental.duration} days</span>
                <button onClick={() => setIsViewingRentalAgreement(true)} className="text-blue-500 hover:underline ml-2">View Agreement</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Rental Agreement Screen */}
        {isViewingRentalAgreement && (
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold mb-4">Rental Agreement</h3>
            {/* Assuming we display details of the last rental for demo purpose */}
            <p className="text-gray-900 dark:text-white">Asset: {rentedAssets[rentedAssets.length - 1]?.name}</p>
            <p className="text-gray-900 dark:text-white">Rental Price: {rentedAssets[rentedAssets.length - 1]?.rentalPrice}</p>
            <p className="text-gray-900 dark:text-white">Duration: {rentedAssets[rentedAssets.length - 1]?.duration} days</p>
            <button onClick={() => setIsViewingRentalAgreement(false)} className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-500">
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
}
