const page = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-6">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        {/* Logo and Header */}
        <div className="mb-6 text-center">
          <h1 className="text-lg font-bold text-gray-800">Ways Gold</h1>
          <p className="text-xs text-gray-400">A trusted platform</p>
        </div>

        <div className="mb-4 text-center">
          <h2 className="text-xl font-medium text-gray-800">Hello, John!</h2>
          <p className="text-sm text-gray-600">
            Your Argo balance was deposited.
          </p>
        </div>

        {/* Deposit Details Section */}
        <div className="rounded-lg bg-gray-100 p-4">
          <h3 className="mb-4 text-center text-sm font-semibold text-gray-700">
            Deposit details:
          </h3>

          <div className="space-y-2">
            {/* Transaction ID */}
            <div className="flex justify-between text-sm text-gray-700">
              <span>Transaction ID</span>
              <span className="font-medium">123456789</span>
            </div>

            {/* Method */}
            <div className="flex justify-between text-sm text-gray-700">
              <span>Method</span>
              <span className="font-medium">EFT</span>
            </div>

            {/* Deposit Amount */}
            <div className="flex justify-between text-sm text-gray-700">
              <span>Deposit amount</span>
              <span className="font-medium">$1,234.00 CAD</span>
            </div>

            {/* Fee */}
            <div className="flex justify-between text-sm text-gray-700">
              <span>Fee</span>
              <span className="font-medium">$123.00</span>
            </div>

            {/* Total */}
            <div className="flex justify-between text-sm text-gray-700">
              <span>Total</span>
              <span className="font-medium">$1,234.00 CAD</span>
            </div>

            {/* Date */}
            <div className="flex justify-between text-sm text-gray-700">
              <span>Date</span>
              <span className="font-medium">20 Jan, 2024 10:30</span>
            </div>

            {/* Status */}
            <div className="flex justify-between text-sm text-gray-700">
              <span>Status</span>
              <span className="font-medium text-green-600">Completed</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 text-center">
          <button className="w-full rounded-md bg-yellow-500 py-2 text-sm font-semibold text-white shadow hover:bg-yellow-600">
            View balance
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
