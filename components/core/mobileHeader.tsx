"use client"

import Image from "next/image";
import Link from "next/link";
import {
  Bars3Icon,
  BellIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function MobileHeader() {
  return (
    <>
      <div className="sticky top-0 bg-white shadow md:hidden  rounded-md">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <div className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <div className="relative mr-3">
                  <div>
                    <div className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="absolute -inset-1.5" />
                      <img
                        alt=""
                        src="/user.png"
                        className="h-10 w-10 rounded-full"
                      />
                      <div className="pl-2 flex flex-col">
                        <h1 className="text-sm font-semibold">Hello</h1>
                        <h1 className="text-sm font-semibold">Rahat Hosen</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex gap-2 items-center pr-2">
              <button
                type="button"
                className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Search</span>
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="block h-6 w-6"
                />
              </button>
              <button
                type="button"
                className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
