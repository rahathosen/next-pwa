"use client";

import Link from "next/link";

export default function Registration() {
  return (
    <>
     <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full md:w-1/2 lg:w-1/3 mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Registration</h1>
        <form className="flex flex-col mt-4">
            <input
              type="text"
              name="name"
              className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Enter Your Name"
            />
            <input
              type="number"
              name="phone"
              className="px-4 py-3 w-full mt-4 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Phone Number"
            />
            <input
              type="password"
              name="password"
              className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              placeholder="Password"
            />
           <Link href={'/otp'}>
           <button
              type="submit"
              className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent  bg-black text-amber-100 hover:text-white focus:ring-2 focus:ring-black focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center font-medium focus:outline-none"
            >
              Registration
            </button>
           </Link>
            <div className="flex flex-col items-center mt-5">
              <p className="mt-1 text-xs font-light text-gray-500">
                Already have an account?
                <Link
                  href={"/login"}
                  className="ml-1 font-medium text-black"
                >
                  LogIn Now
                </Link>
              </p>
            </div>
          </form>
      </div>
    </div>

     
    </>
  );
}
