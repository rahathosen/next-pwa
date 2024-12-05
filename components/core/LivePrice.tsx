import { Separator } from "../ui/separator";
import { ClockIcon } from "lucide-react";

const LivePrice = () => {
  return (
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
          <ClockIcon aria-hidden="true" className="h-6 w-5 text-gray-400" />
          <span className="text-sm leading-6 text-gray-500">
            <p>Price updated 6 min ago</p>
          </span>
        </div>
      </div>

      {/* Price Information */}
      <div className="my-5 flex flex-col items-center justify-center gap-4 rounded bg-white px-4 py-3 shadow-md md:flex-row md:items-start md:justify-between md:p-6">
        <p className="w-full text-center text-sm font-semibold text-yellow-500 sm:w-1/3 sm:text-left">
          22 KARAT Gold
        </p>
        <p className="w-full text-center text-sm sm:w-1/3 sm:text-left">
          ৳12,008
        </p>
        <div className="w-full text-center text-sm text-green-500 sm:w-1/3 sm:text-left">
          <div className="flex items-center justify-center text-sm text-green-500 md:justify-start">
            <span className="mr-2 text-gray-400">This price includes</span>
            <span> 15% </span>
            <span className="ml-2 text-gray-400"> VAT </span>
          </div>
        </div>
      </div>

      <Separator className="my-4" />

      <div>
        <p className="text-sm text-muted-foreground">
          Your Current Gold Balance is:
          <span className="text-base font-bold"> 11.730g</span>
        </p>
      </div>
    </div>
  );
};

export default LivePrice;
