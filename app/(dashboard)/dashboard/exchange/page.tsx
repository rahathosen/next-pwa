import Link from "next/link";
import { Input } from "@/components/ui/input";
import { ArrowLeftIcon, BellAlertIcon } from "@heroicons/react/20/solid";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { BuyDropdown } from "@/components/core/BuyDropdown";
import { Separator } from "@/components/ui/separator";
import { ClockIcon } from "lucide-react";
import Converter from "@/components/core/Converter";

const Exchange = () => {
  return (
    <>
      {/* Stock Info */}
      <section className="container mx-auto p-4">
        <div className="mb-4 flex items-center justify-between">
        <Link href={"/dashboard"}>
            <button
              type="button"
              className="inline-flex items-center gap-x-1.5 rounded-md bg-sand-deep px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sand-lite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-deep"
            >
              <ArrowLeftIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
              Back
            </button>
          </Link>

         
        </div>

        <div className="mt-4 rounded-lg bg-white p-4 shadow-md">
          {/* Live Price */}
          <div className="rounded-lg bg-white">
            <div className="flex cursor-pointer flex-wrap items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
              </span>
              <h2 className="text-sm font-semibold">Live Price</h2>
            </div>
            <div className="flex flex-row justify-between pb-4 pt-4">
              <div className="flex items-center gap-x-2">
                <ClockIcon
                  aria-hidden="true"
                  className="h-6 w-5 text-gray-400"
                />
                <span className="text-sm leading-6 text-gray-500">
                  <p>Price updated 6 min ago</p>
                </span>
              </div>
            </div>

            {/* Price Information */}
            <div className="my-5 flex flex-col items-center justify-center gap-4 rounded bg-white px-4 py-3 shadow-md md:flex-row md:items-start md:justify-between md:p-6">
              <p className="w-full text-center text-sm font-semibold text-sand-lite sm:w-1/3 sm:text-left">
                22 KARAT Gold
              </p>
              <p className="w-full text-center text-sm sm:w-1/3 sm:text-left">
                ৳12,008
              </p>
              <div className="w-full text-center text-sm text-green-500 sm:w-1/3 sm:text-left">
                <div className="flex items-center justify-center text-sm text-green-500 md:justify-start">
                  <span className="mr-2 text-gray-400">
                    This price includes
                  </span>
                  <span> 15% </span>
                  <span className="ml-2 text-gray-400"> VAT </span>
                </div>
              </div>
            </div>

            <Separator className="my-4" />
          </div>
          <div>
            {/* Converter */}
            <Converter />
            <Link href="/dashboard/checkout" className="pb-28">
            <button
                type="button"
                className="inline-flex items-center justify-center gap-x-1.5 rounded-md bg-sand-deep px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sand-lite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-deep mt-4 w-full"
              >
                Exchange
                
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Exchange;
