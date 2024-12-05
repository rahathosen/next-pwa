import Image from "next/image";
import Link from "next/link";
import React from "react";

export function AccountProfile(){
  return (
    <div className="bg-gradient-to-r from-white via-gray-100 to-gray-200 px-4 py-6">
      {/* Mobile Profile Section */}
      <div className="flex items-center justify-between rounded-2xl border border-gray-300 bg-white p-4 shadow-lg transition-transform duration-300   md:hidden">
        <div className="relative">
          <Image
            src="/user.png"
            alt="Profile"
            className="h-14 w-14 transform rounded-full border-4 border-indigo-600 shadow-md transition-all duration-300 hover:scale-110"
            width={56}
            height={56}
          />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-indigo-800">John Doe</h1>
        </div>
      </div>

      {/* Balance and Details Section */}
      <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
        <div className="mt-4 rounded-2xl bg-white p-6 shadow-lg transition-transform duration-300  ">
          {/* Gold Details */}
          <div className="my-4 flex items-center justify-between rounded-lg bg-gradient-to-r from-zinc-50 via-gray-100 to-gray-200 p-4 shadow-inner">
            <p className="text-sm font-medium text-amber-600">
              <span className="font-bold text-black">24k</span> Gold
            </p>
            <p className="text-lg font-bold text-gray-800">2 Gram</p>
          </div>
          <div className="my-4 flex items-center justify-between rounded-lg bg-gradient-to-r from-zinc-50 via-gray-100 to-gray-200 p-4 shadow-inner">
            <p className="text-sm font-medium text-amber-600">
              <span className="font-bold text-black">18k</span> Gold
            </p>
            <p className="text-lg font-bold text-gray-800">2 Gram</p>
          </div>
          {/* Total Balance */}
          <p className="flex items-center gap-2 text-lg font-medium text-gray-900">
            Your total balance: ৳5000
            <Link href="/market-rate">
              <svg
                width="16"
                height="16"
                fill="currentColor"
                className="text-indigo-600 transition-colors hover:text-indigo-800"
              >
                <path d="M9 11a1 1 0 11-2 0 1 1 0 012 0zM10.443 4.8A2.3 2.3 0 007.3 3.96L5.136 5.21l.8 1.385L8.1 5.345a.7.7 0 01.7 1.212l-2.165 1.25.8 1.386L9.6 7.943a2.3 2.3 0 00.842-3.142z"></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 16A8 8 0 108 0a8 8 0 000 16zm0-1.6A6.4 6.4 0 108 1.6a6.4 6.4 0 000 12.8z"
                ></path>
              </svg>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

