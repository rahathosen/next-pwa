"use client";
import { useState } from "react";
import { ArrowDownLeft, ChevronLeft } from "lucide-react";
import Link from "next/link";

interface Transaction {
  id: string;
  date: string;
  time: string;
  amount: string;
}

interface Transactions {
  last30: Transaction[];
  last7: Transaction[];
  yesterday: Transaction[];
}

const transactions: Transactions = {
  last30: [
    { id: "#00000001", date: "Oct 1, 2024", time: "10:00 AM", amount: "$120" },
    { id: "#00000002", date: "Oct 2, 2024", time: "11:00 AM", amount: "$130" },
    { id: "#00000003", date: "Oct 5, 2024", time: "2:30 PM", amount: "$250" },
  ],
  last7: [
    { id: "#00000004", date: "Oct 25, 2024", time: "3:00 PM", amount: "$150" },
    { id: "#00000005", date: "Oct 26, 2024", time: "9:30 AM", amount: "$175" },
  ],
  yesterday: [
    { id: "#00000006", date: "Oct 29, 2024", time: "5:33 PM", amount: "$100" },
  ],
};

const TransactionHistory = () => {
  const [selected, setSelected] = useState<"last30" | "last7" | "yesterday">(
    "last30",
  );

  const currentTransactions: Transaction[] = transactions[selected];

  return (
    <div className="p-4">
      <div className="flex items-center gap-2">
        <Link href="/account" className="rounded-full bg-gray-100 p-2">
          <ChevronLeft />
        </Link>
        <h1 className="text-[18px] font-medium">Loan Management</h1>
      </div>

      <div className="flex items-center gap-2 py-5">
        {/* Last 30 Days */}
        <div
          className={`cursor-pointer rounded-full border px-3 py-1 ${selected === "last30" ? "border-2 bg-gray-300 text-black" : "border"}`}
          onClick={() => setSelected("last30")}
        >
          <h1 className="text-[14px] font-medium">Last 30 Days</h1>
        </div>

        {/* Last 7 Days */}
        <div
          className={`cursor-pointer rounded-full border px-3 py-1 ${selected === "last7" ? "border-2 bg-gray-300 text-black" : "border"}`}
          onClick={() => setSelected("last7")}
        >
          <h1 className="text-[14px] font-medium">Last 7 Days</h1>
        </div>

        {/* Yesterday */}
        <div
          className={`cursor-pointer rounded-full border px-3 py-1 ${selected === "yesterday" ? "border-2 bg-gray-300 text-black" : "border"}`}
          onClick={() => setSelected("yesterday")}
        >
          <h1 className="text-[14px] font-medium">Yesterday</h1>
        </div>
      </div>

      <div>
        {/* Header Section */}
        <div className="my-5 flex items-center justify-between gap-4 rounded-lg bg-white p-4 shadow-md">
          <h1 className="text-xl font-semibold text-gray-800">Transactions</h1>
          <span className="text-lg font-medium text-green-600">$12,001</span>
        </div>

        {/* Transaction List */}
        <div className="space-y-4">
          {currentTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Icon and Text */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                    <ArrowDownLeft size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {transaction.id}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {transaction.date} . {transaction.time}
                    </p>
                  </div>
                </div>
                {/* Amount */}
                <div className="text-lg font-semibold text-red-600">
                  {transaction.amount}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
