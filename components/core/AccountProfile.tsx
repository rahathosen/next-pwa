import Image from "next/image";
import Link from "next/link";
import React from "react";

export function AccountProfile(){
  return (
    <div className="bg-white px-4 py-6 rounded-md drop-shadow-lg m-4">
      {/* Mobile Profile Section */}
      <section className=" flex items-center justify-between">
        <div className="mr-4 h-16 w-16 rounded-full bg-[#D3BA89]"></div>
        <div>
          <h1 className="text-2xl font-bold">Aakib Hasan</h1>
          <h2 className="text-sm text-zinc-600">Gold Member</h2>
        </div>
      </section>
      <div className="pt-4">
          {/* Gold Details */}
          <div className="my-4 flex items-center justify-between bg-gradient-to-r from-white via-zinc-50 to-sand-lite p-4 shadow-inner rounded-md">
            <p className="text-sm font-medium text-sand-deep">
              <span className="font-bold text-black">22k</span> Gold
            </p>
            <p className="text-lg font-bold text-zinc-800">2 Gram</p>
          </div>
          
          {/* Total Balance */}
          <p className="flex items-center gap-2 text-sm font-medium text-zinc-900">
            Your total balance: ৳5000
            <Link href="/market-rate">
              <svg
                width="16"
                height="16"
                fill="currentColor"
                className="text-zinc-600 transition-colors hover:text-zinc-800"
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
      {/* Balance and Details Section */}
      <div className=" flex flex-col-reverse justify-stretch">
      
      </div>
    </div>
  );
};

