import { PanelTopOpen } from "lucide-react";
import Link from "next/link";
export default function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 z-10 h-16 w-full border-t border-gray-200 bg-white md:hidden">
      <div className="mx-auto grid h-full max-w-lg grid-cols-5 font-medium">
        <Link
          href={"/dashboard"}
          className="group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <svg
            className="mb-1 h-6 w-6 text-gray-700 group-hover:text-[#D3BA89] dark:text-gray-400 dark:group-hover:text-amber-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
          </svg>
          <span className="text-xs text-gray-700 group-hover:text-[#D3BA89] dark:text-gray-400 dark:group-hover:text-amber-500">
            Home
          </span>
        </Link>
        <Link
          href={"/explore"}
          className="group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <svg
            className="mb-1 h-6 w-6 text-gray-700 group-hover:text-[#D3BA89] dark:text-gray-400 dark:group-hover:text-amber-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
            ></path>
          </svg>
          <span className="text-xs text-gray-700 group-hover:text-[#D3BA89] dark:text-gray-400 dark:group-hover:text-amber-500">
            Explore
          </span>
        </Link>
        <Link
          href={"/offers"}
          className="group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <svg
            className="mb-1 h-6 w-6 text-gray-700 group-hover:text-[#D3BA89] dark:text-gray-400 dark:group-hover:text-amber-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
          </svg>
          <span className="text-xs text-gray-700 group-hover:text-[#D3BA89] dark:text-gray-400 dark:group-hover:text-amber-500">
            Offers
          </span>
        </Link>
        <Link
          href={"/services"}
          className="group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <PanelTopOpen className="text-gray-800" />
          <span className="text-xs mt-1 text-gray-700 group-hover:text-[#D3BA89] dark:text-gray-400 dark:group-hover:text-amber-500">
            Services
          </span>
        </Link>
        <Link
          href={"/account"}
          className="group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          <svg
            className="mb-1 h-6 w-6 text-gray-700 group-hover:text-[#D3BA89] dark:text-gray-400 dark:group-hover:text-amber-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            ></path>
          </svg>
          <span className="text-xs text-gray-700 group-hover:text-[#D3BA89] dark:text-gray-400 dark:group-hover:text-amber-500">
            Account
          </span>
        </Link>
      </div>
    </div>
  );
}
