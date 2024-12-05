"use client";

import { useState } from "react";
import { ArrowLeftCircleIcon, BellAlertIcon } from "@heroicons/react/20/solid";
export function AccountNav (){
  const [isToggle, setIsToggle] = useState(true);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <section className="flex items-center justify-between px-4 py-5 md:hidden">
      <h1 className="text-[18px] font-medium">My Account</h1>
      <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-sand-deep px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sand-lite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-deep"
          >
            <BellAlertIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
          </button>
    </section>
  );
};


