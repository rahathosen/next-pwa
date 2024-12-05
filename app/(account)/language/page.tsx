"use client";

import Header from "@/components/core/Header";
import { useState } from "react";

const page = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };
  return (
    <>
      <div className="p-4">
        <Header title="Language" />
      </div>
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex items-center gap-1 rounded-full bg-gray-200">
          <div
            className={`${
              isEnglish ? "bg-gray-400" : "bg-transparent"
            } cursor-pointer rounded-full px-4 py-2 transition-colors`}
            onClick={toggleLanguage}
          >
            <h2 className={`${isEnglish ? "text-white" : "text-gray-600"}`}>
              English
            </h2>
          </div>

          {/* বাংলা Language Option */}
          <div
            className={`${
              !isEnglish ? "bg-gray-400" : "bg-transparent"
            } cursor-pointer rounded-full px-4 py-2 transition-colors`}
            onClick={toggleLanguage}
          >
            <h2 className={`${!isEnglish ? "text-white" : "text-gray-600"}`}>
              বাংলা
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
