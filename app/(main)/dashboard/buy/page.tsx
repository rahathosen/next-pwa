"use client";

import { AreaChart } from "@/components/AreaChart";
import ShadcnChart from "@/components/core/shadcnchart";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input"
import {
  ArrowLeftCircleIcon,
  BackspaceIcon,
  BellAlertIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  ClockIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Buy = () => {
  return (
    <>
      {/* Stock Info */}
      <section className="p-4">
        <div className="flex justify-between items-center mb-4">
          <Link href={"/dashboard"}>
            <button
              type="button"
              className="inline-flex items-center gap-x-1.5 rounded-md bg-yellow-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            >
              <ArrowLeftCircleIcon
                aria-hidden="true"
                className="-ml-0.5 h-5 w-5"
              />
              Back
            </button>
          </Link>

          <h1 className="text-yellow-500 text-md font-bold">Buy Gold</h1>
          <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-yellow-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            <BellAlertIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
          </button>
        </div>

        {/* header card */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <div className="flex flex-row justify-between pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <h2 className="text-sm font-semibold">Live Price</h2>
            </div>
            <div>
              {" "}
              <div className=" flex w-full flex-none gap-x-2 items-center">
                <div className="flex-none">
                  <span className="sr-only">Due date</span>
                  <ClockIcon
                    aria-hidden="true"
                    className="h-6 w-5 text-gray-400"
                  />
                </div>
                <span className="text-sm leading-6 text-gray-500">
                  <p>price update 6 min ago</p>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex felx-col justify-between">
              <div className="flex flex-col justify-start">
                <p className="my-4 text-left text-4xl font-bold text-gray-700">
                  5,22.20
                  <span className="text-sm"> /g </span>
                </p>
                <div className="flex items-center text-sm text-green-500">
                  <span className=" text-gray-400 mr-2">
                    {" "}
                    This price include{" "}
                  </span>
                  <span> 15% </span>
                  <span className="ml-2 text-gray-400"> Vat </span>
                </div>
              </div>
              <Image
                src="/gold2.jpeg"
                width={100}
                height={50}
                alt="Picture of the author"
                className=""
              />
            </div>
          </div>
          <Separator className="my-4" />
          <div className="right-0">
            <p className="text-sm text-muted-foreground ">
              Your Current Gold Balance is:{" "}
              <span className="font-bold text-base">11.730g</span>
            </p>
          </div>
        </div>

        <div className="p-4 mt-4 bg-white rounded-lg shadow-md">
          <div>
          <p className="font-medium mb-1 text-gray-500">Buy 2434k, 999 pursuit Digital GOLD</p>
          <div className="flex gap-x-4">
            <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
              <input
                className="peer hidden"
                type="radio"
                name="radio"
                id="radio1"
                checked
                readOnly
              />
              <label
                className="peer-checked:border-yellow-400 peer-checked:bg-yellow-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border"
                htmlFor="radio1"
              >
                {" "}
              </label>
              <div className="peer-checked:border-transparent peer-checked:bg-yellow-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-yellow-400 ring-offset-2"></div>
              <span className="pointer-events-none z-10">BDT</span>
            </div>
            <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
              <input
                className="peer hidden"
                type="radio"
                name="radio"
                id="radio3"
                checked
                readOnly
              />
              <label
                className="peer-checked:border-yellow-400 peer-checked:bg-yellow-200 absolute top-0 h-full w-full cursor-pointer rounded-xl border"
                htmlFor="radio3"
              >
                {" "}
              </label>
              <div className="peer-checked:border-transparent peer-checked:bg-yellow-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-yellow-400 ring-offset-2"></div>
              <span className="pointer-events-none z-10">In Grams</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between py-2">
          <div>
          <Input type="text" placeholder="Price" />
          </div> <div>
          <Label>= 0.11123g</Label>
          </div>
          </div>
          <Button className="w-full mt-4">Buy</Button>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Buy;
