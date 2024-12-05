import { format } from "date-fns";

const transactions = [
  {
    id: 1,
    name: "John Doe",
    image: "https://i.pravatar.cc/150?img=7",
    invoiceId: "INV-12345",
    date: "2024-10-10",
    description: "Payment to John",
    amount: -50,
    status: "Completed",
    account: "Credit Card",
  },
  {
    id: 2,
    name: "Alice Smith",
    image: "https://i.pravatar.cc/150?img=8",
    invoiceId: "INV-12346",
    date: "2024-10-09",
    description: "Payment from Alice",
    amount: 150,
    status: "Pending",
    account: "Credit Card",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    image: "https://i.pravatar.cc/150?img=9",
    invoiceId: "INV-12347",
    date: "2024-10-08",
    description: "Payment to Sarah",
    amount: -30,
    status: "Completed",
    account: "Credit Card",
  },
  {
    id: 1,
    name: "John Doe",
    image: "https://i.pravatar.cc/150?img=7",
    invoiceId: "INV-12345",
    date: "2024-10-10",
    description: "Payment to John",
    amount: -50,
    status: "Completed",
    account: "Credit Card",
  },
  {
    id: 2,
    name: "Alice Smith",
    image: "https://i.pravatar.cc/150?img=8",
    invoiceId: "INV-12346",
    date: "2024-10-09",
    description: "Payment from Alice",
    amount: 150,
    status: "Pending",
    account: "Credit Card",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    image: "https://i.pravatar.cc/150?img=9",
    invoiceId: "INV-12347",
    date: "2024-10-08",
    description: "Payment to Sarah",
    amount: -30,
    status: "Completed",
    account: "Credit Card",
  },
  {
    id: 1,
    name: "John Doe",
    image: "https://i.pravatar.cc/150?img=7",
    invoiceId: "INV-12345",
    date: "2024-10-10",
    description: "Payment to John",
    amount: -50,
    status: "Completed",
    account: "Credit Card",
  },
  {
    id: 2,
    name: "Alice Smith",
    image: "https://i.pravatar.cc/150?img=8",
    invoiceId: "INV-12346",
    date: "2024-10-09",
    description: "Payment from Alice",
    amount: 150,
    status: "Pending",
    account: "Credit Card",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    image: "https://i.pravatar.cc/150?img=9",
    invoiceId: "INV-12347",
    date: "2024-10-08",
    description: "Payment to Sarah",
    amount: -30,
    status: "Completed",
    account: "Credit Card",
  },
  {
    id: 1,
    name: "John Doe",
    image: "https://i.pravatar.cc/150?img=7",
    invoiceId: "INV-12345",
    date: "2024-10-10",
    description: "Payment to John",
    amount: -50,
    status: "Completed",
    account: "Credit Card",
  },
  {
    id: 2,
    name: "Alice Smith",
    image: "https://i.pravatar.cc/150?img=8",
    invoiceId: "INV-12346",
    date: "2024-10-09",
    description: "Payment from Alice",
    amount: 150,
    status: "Pending",
    account: "Credit Card",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    image: "https://i.pravatar.cc/150?img=9",
    invoiceId: "INV-12347",
    date: "2024-10-08",
    description: "Payment to Sarah",
    amount: -30,
    status: "Completed",
    account: "Credit Card",
  },
];

const transactionColumns = [
  { label: "Name", key: "name" },
  { label: "Date", key: "date" },
  { label: "Transaction", key: "description" },
  { label: "Invoice ID", key: "invoiceId" },
  { label: "Amount", key: "amount" },
  { label: "Account", key: "account" },
  { label: "Status", key: "status" },
  { label: "Action", key: "action" },
];

const TransactionsHistory = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-semibold text-gray-800">
          Transaction History
        </h1>
        <p className="text-gray-600">Your recent financial activities</p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg bg-white shadow-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              {transactionColumns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-3 text-left text-sm font-medium text-gray-600"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="transition-all duration-300 ease-in-out hover:bg-slate-200 hover:bg-gradient-to-r"
              >
                {/* Name, Image, and ID */}
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                  <div className="flex items-center space-x-4">
                    <img
                      src={transaction.image}
                      alt={transaction.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{transaction.name}</p>
                      <span className="text-sm text-gray-500">
                        ID: {transaction.id}
                      </span>
                    </div>
                  </div>
                </td>

                {/* Date */}
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                  {format(new Date(transaction.date), "MMM dd, yyyy")}
                </td>

                {/* Transaction Description */}
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                  {transaction.description}
                </td>

                {/* Invoice ID */}
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                  {transaction.invoiceId}
                </td>

                {/* Amount */}
                <td className="whitespace-nowrap px-6 py-4 text-right text-sm">
                  <p
                    className={`font-semibold ${
                      transaction.amount < 0 ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    {transaction.amount < 0 ? "-" : "+"} $
                    {Math.abs(transaction.amount)}
                  </p>
                </td>

                {/* Status */}
                <td className="whitespace-nowrap px-6 py-4 text-center text-sm">
                  <span
                    className={`px-2 py-1 text-xs font-semibold ${
                      transaction.status === "Completed"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>

                {/* Action Button */}
                <td className="whitespace-nowrap px-6 py-4 text-center text-sm">
                  <button className="text-blue-600 hover:underline">
                    Details
                  </button>
                </td>

                {/* Account */}
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                  {transaction.account}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsHistory;
