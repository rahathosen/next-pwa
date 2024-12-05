import Link from "next/link";

const RecurringBuyDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-lg sm:p-8">
        {/* Header */}
        <h1 className="mb-4 text-2xl font-semibold text-gray-800">
          Recurring Buy Details
        </h1>
        <p className="text-sm text-gray-500">
          Subscription ID:{" "}
          <span className="font-medium text-gray-800">123456790</span>
        </p>

        {/* Details Table */}
        <div className="mt-6 overflow-hidden rounded-lg border">
          <table className="w-full table-auto text-left">
            <thead className="bg-gray-100 text-sm text-gray-600">
              <tr>
                <th className="px-4 py-2">Details</th>
                <th className="px-4 py-2">Value</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              <tr className="border-t">
                <td className="px-4 py-2 font-medium">Started At</td>
                <td className="px-4 py-2">10 Apr, 2024, 11:15 AM</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-medium">Frequency</td>
                <td className="px-4 py-2">Monthly</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-medium">Payment Cycle</td>
                <td className="px-4 py-2">2</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-medium">Type</td>
                <td className="px-4 py-2">Buy gold</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-medium">Next Payment</td>
                <td className="px-4 py-2">10 Apr, 2024, 11:15 AM</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-medium">Amount</td>
                <td className="px-4 py-2 text-green-600">+2,000 oz</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-medium">Fee</td>
                <td className="px-4 py-2">20 oz</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-medium">VAT</td>
                <td className="px-4 py-2">5 oz</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2 font-medium">Total Amount</td>
                <td className="px-4 py-2 font-semibold text-yellow-600">
                  2,025 oz
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Back Button */}
        <div className="mt-6">
          <Link
            href="/payment-scheduling"
            className="rounded-lg bg-yellow-600 px-6 py-2 text-white shadow hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          >
            Back to Recurring Buys
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecurringBuyDetails;
