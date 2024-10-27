"use client";

import { AreaChart } from "@/components/AreaChart";
import ShadcnChart from "@/components/core/shadcnchart";
import Link from "next/link";


const Dashboard = () => {
  return (
    <>
      <div className="md:flex md:items-center md:justify-between md:space-x-5 px-4">
        <div className="flex items-start space-x-5">
          <div className="flex-shrink-0">
            <div className="relative">
              <img alt="" src="/user.png" className="h-16 w-16 rounded-full" />
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full shadow-inner"
              />
            </div>
          </div>

          <div className="pt-1.5">
            <h1 className="text-2xl font-bold text-gray-900">Welcome, Hasan</h1>
            <p className="text-sm font-medium text-gray-500">
              something is there
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
          <div className="mt-4 p-4 bg-white shadow-md rounded-lg">
            <p className="text-lg font-medium text-zinc-950">
              Your total balance{" "}
            </p>
            <div className="p-4 my-2 bg-zinc-50 rounded-lg flex justify-between items-center">
              <p className="text-amber-500 text-sm">
                <span className="text-black font-medium">24k</span> Gold
              </p>
              <p className="text-lg font-bold">৳800</p>
            </div>
            <div className="p-4 my-2 bg-zinc-50 rounded-lg flex justify-between items-center">
              <p className="text-amber-500 text-sm">
                <span className="text-black font-medium">24k</span> Gold
              </p>
              <p className="text-lg font-bold">৳600</p>
            </div>
            <div className="p-4 my-2 bg-zinc-50 rounded-lg flex justify-between items-center">
              <p className="text-amber-500 text-sm">
                <span className="text-black font-medium">24k</span> Gold
              </p>
              <p className="text-lg font-bold">৳400</p>
            </div>
          </div>
        </div>
      </div>
  
      <ShadcnChart />
    
        {/* Stock Info */}
        <section className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-zinc-950">Offers</h2>
          <button className="text-blue-400">See all</button>
        </div>

        {/* Stock Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <p className="text-yellow-500 text-md font-bold">22k 10gm Gold</p>
            <p className="text-lg font-bold">৳7000</p>
            <p className="text-green-500">(-0.72%)</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <p className="text-yellow-500 text-md font-bold">Traditional 10gm Gold</p>
            <p className="text-lg font-bold">৳5000</p>
            <p className="text-green-500">(-0.72%)</p>
          </div>
        </div>

        {/* Market Price */}
        <div className="mt-4">
          <h2 className="text-lg font-medium text-zinc-950">Today Market Price (in GRAM)</h2>

          {/* <div className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center">
            <p className="text-lg">Product</p>
            <p className="text-lg">Price</p>
            <p className="text-lg">Value</p>
          </div> */}
          <br />
          <p className="text-sm">CADMIUM (HALLMARKED)</p>
          <hr />
          <br />
          {[
            { product: "22 KARAT Gold", price: "৳12,008", value: "+0.25%" },
            { product: "21 KARAT Gold", price: "৳11,463", value: "+0.25%" },
            { product: "18 KARAT Gold", price: "৳9,825", value: "+0.25%" },
            { product: "22 KARAT Silver", price: "৳180", value: "+0.25%" },
            { product: "21 KARAT Silver", price: "৳172", value: "+0.25%" },
            { product: "18 KARAT Silver", price: "৳147", value: "+0.25%" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center"
            >
              <p className="text-yellow-500 text-sm">{item.product}</p>
              <p className="text-sm">{item.price}</p>
              <p className="text-green-500 text-sm">{item.value}</p>
              <button className="text-blue-400"><Link href={"/dashboard/buy"}>Buy</Link> | Sell | Gift</button>
            </div>
          ))}
          <br />
          <p className="text-sm">(NO HALLMARKED)</p>
          <hr />
          <br />
          {[
            { product: "TRADITIONAL Gold", price: "৳8,069", value: "+0.25%" },
            { product: "TRADITIONAL Silver", price: "৳110", value: "+0.25%" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center"
            >
              <p className="text-yellow-500 text-sm">{item.product}</p>
              <p className="text-sm">{item.price}</p>
              <p className="text-green-500 text-sm">{item.value}</p>
              <button className="text-blue-400">Buy | Sell | Gift</button>
            </div>
          ))}
        </div>
      </section>
    
    </>
  );
};

export default Dashboard;
