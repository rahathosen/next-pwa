"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RecurringBuyTable = () => {
  const router = useRouter();
  const handleLink = (idx: any) => {
    router.push(`/payment-scheduling/${idx}`);
  };
  const data = [
    {
      id: "123456790",
      startedAt: "10 Apr, 2024, 11:15 AM",
      frequency: "Monthly",
      paymentCycle: 2,
      type: "Buy gold",
      nextPayment: "10 Apr, 2024, 11:15 AM",
      lastPaymentStatus: { status: "Active", color: "text-blue-600" },
      amount: "+2,000 oz",
    },
    {
      id: "123456790",
      startedAt: "10 Apr, 2024, 11:15 AM",
      frequency: "Every 2 weeks",
      paymentCycle: 4,
      type: "Buy gold",
      nextPayment: "10 Apr, 2024, 11:15 AM",
      lastPaymentStatus: { status: "Paused", color: "text-yellow-500" },
      amount: "+2,000 oz",
    },
    {
      id: "123456790",
      startedAt: "10 Apr, 2024, 11:15 AM",
      frequency: "Every 2 weeks",
      paymentCycle: 4,
      type: "Buy gold",
      nextPayment: "10 Apr, 2024, 11:15 AM",
      lastPaymentStatus: { status: "Completed", color: "text-green-600" },
      amount: "+2,000 oz",
    },
  ];

  // State to handle dropdown visibility for each row
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id: any) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <div className="container mx-auto p-4 pb-20">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 bg-white">
          <thead className="bg-gray-100">
            <tr>
              {[
                "Subscription ID",
                "Started at",
                "Frequency",
                "Payment cycle",
                "Type",
                "Next payment",
                "Last payment status",
                "Amount",
                "Manage",
              ].map((header) => (
                <th
                  key={header}
                  className="border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                onClick={() => handleLink(idx)}
                key={idx}
                className="hover:bg-gray-50 cursor-pointer"
              >
                <td className="border border-gray-300 px-4 py-2 text-blue-500">
                  {row.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.startedAt}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.frequency}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.paymentCycle}
                </td>
                <td className="border border-gray-300 px-4 py-2">{row.type}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.nextPayment}
                </td>
                <td
                  className={`border border-gray-300 px-4 py-2 ${row.lastPaymentStatus.color}`}
                >
                  {row.lastPaymentStatus.status}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.amount}
                </td>
                <td className="relative border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => toggleDropdown(idx)}
                    className="text-gray-600 hover:text-gray-800 focus:outline-none"
                  >
                    ⋮
                  </button>
                  {openDropdown === idx && (
                    <div className="absolute right-0 z-10 mt-2 w-32 rounded border border-gray-200 bg-white shadow-lg">
                      <ul>
                        {["Charge", "Pause", "Cancel"].map((action) => (
                          <li
                            key={action}
                            className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecurringBuyTable;
