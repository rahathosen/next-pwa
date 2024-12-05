import Header from "@/components/core/Header";

const page = () => {
  return (
    <>
      <div className="p-4 md:hidden">
        <Header title="Account" />
      </div>
      <div className="flex min-h-[80vh] items-center justify-center px-4 py-6">
        <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-md">
          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Account Details
            </h1>
            <p className="text-sm text-gray-500">
              Manage your account information
            </p>
          </div>

          {/* Account Info */}
          <div className="space-y-4">
            {/* Account Holder Name */}
            <div className="flex justify-between text-sm text-gray-700">
              <span className="font-medium">Account Holder</span>
              <span className="text-gray-600">John Doe</span>
            </div>

            {/* Account Number */}
            <div className="flex justify-between text-sm text-gray-700">
              <span className="font-medium">Account Number</span>
              <span className="text-gray-600">123456789</span>
            </div>

            {/* Email Address */}
            <div className="flex justify-between text-sm text-gray-700">
              <span className="font-medium">Email Address</span>
              <span className="text-gray-600">johndoe@example.com</span>
            </div>

            {/* Phone Number */}
            <div className="flex justify-between text-sm text-gray-700">
              <span className="font-medium">Phone Number</span>
              <span className="text-gray-600">+1 234 567 890</span>
            </div>

            {/* Account Type */}
            <div className="flex justify-between text-sm text-gray-700">
              <span className="font-medium">Account Type</span>
              <span className="text-gray-600">Savings</span>
            </div>

            {/* Account Status */}
            <div className="flex justify-between text-sm text-gray-700">
              <span className="font-medium">Account Status</span>
              <span className="text-green-600">Active</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex justify-between gap-4">
            <button className="w-full rounded-md bg-yellow-500 py-2 text-sm font-semibold text-white shadow hover:bg-yellow-600">
              Edit Details
            </button>
            <button className="w-full rounded-md bg-red-500 py-2 text-sm font-semibold text-white shadow hover:bg-red-600">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
