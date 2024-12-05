"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export function AccountNav (){
  const [isToggle, setIsToggle] = useState(true);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <section className="flex items-center justify-between px-4 py-5 md:hidden">
      <h1 className="text-[18px] font-medium">My Account</h1>
      <div className="flex items-center gap-2">
        <div
          className="cursor-pointer rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={handleToggle}
        >
          {isToggle ? (
            <Moon className="text-xl text-gray-800 dark:text-gray-100" />
          ) : (
            <Sun className="text-xl text-yellow-500" />
          )}
        </div>
      </div>
    </section>
  );
};


