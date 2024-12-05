import Link from "next/link";

const ComingSoon = () => {
  return (
    <div className="flex min-h-[90vh] items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800 sm:text-5xl">
          🚧 Coming Soon!
        </h1>
        <p className="mb-6 text-lg text-gray-600 sm:text-xl">
          We’re working hard to get this page ready. Stay tuned!
        </p>
        <Link href="/dashboard">
          <button className="rounded-lg bg-amber-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition duration-200 hover:bg-amber-600 sm:w-auto">
            Back to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
