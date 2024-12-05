import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BellAlertIcon,
} from "@heroicons/react/20/solid";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { BuyDropdown } from "@/components/core/BuyDropdown";
import LivePrice from "@/components/core/LivePrice";

const Page = () => {
  return (
    <>
      {/* Stock Info */}
      <section className="container mx-auto p-4">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Buy</h1>
      </div>
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

          {/* <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-sand-deep px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sand-lite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-deep"
          >
            <BellAlertIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
          </button> */}
        </div>

        <div className="mt-4 rounded-lg bg-white p-4 shadow-md">
          <LivePrice />
          <div>
            <p className="mb-1 font-medium text-gray-500">
              Buy 2434k, 999 pursuit Digital GOLD
            </p>

            {/* <div className="flex flex-col items-center justify-between gap-2 py-2 sm:flex-row">
              <div className="flex w-full gap-x-4 sm:w-auto">
                <BuyDropdown />
              </div>
              <div className="w-full sm:w-auto">
                <Input type="text" placeholder="Price" />
              </div>
              <div className="w-full text-right sm:w-auto sm:text-left">
                <Label>= 0.11123g</Label>
              </div>
            </div> */}

            <Link href="/dashboard/checkout">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-x-1.5 rounded-md bg-sand-deep px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sand-lite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-deep mt-4 w-full"
              >
                Sell
                
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
