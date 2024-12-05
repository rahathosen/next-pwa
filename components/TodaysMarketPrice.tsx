import React from "react";
import {
  ArrowUpIcon,
  TrendingUpIcon,
  TrendingDownIcon,
  ShoppingCartIcon,
  BanknoteIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface PriceData {
  karat: string;
  price: number;
  previousPrice: number;
}

const PriceRow: React.FC<PriceData & { prevKaratPrice?: number }> = ({
  karat,
  price,
  previousPrice,
  prevKaratPrice,
}) => {
  const priceDiff = price - previousPrice;
  const isUp = priceDiff >= 0;
  const karatDiff = prevKaratPrice ? price - prevKaratPrice : null;

  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow-md">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="font-semibold">{karat}</span>
          {isUp ? (
            <TrendingUpIcon className="h-4 w-4 text-green-500" />
          ) : (
            <TrendingDownIcon className="h-4 w-4 text-red-500" />
          )}
        </div>
        <div className="text-right">
          <div className="font-bold">৳{price.toLocaleString()}/gm</div>
          <div
            className={`text-xs ${isUp ? "text-green-500" : "text-red-500"}`}
          >
            {isUp ? "+" : "-"}৳{Math.abs(priceDiff).toLocaleString()}
          </div>
          {karatDiff !== null && (
            <div className="text-xs text-gray-500">
              {karatDiff > 0 ? "+" : "-"}৳{Math.abs(karatDiff).toLocaleString()}{" "}
              from previous karat
            </div>
          )}
        </div>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <Button
          variant="outline"
          className="flex items-center justify-center bg-[#D3BA89] text-white hover:bg-[#C1A677]"
        >
          <ShoppingCartIcon className="mr-2 h-4 w-4" />
          Buy
        </Button>
        <Button
          variant="outline"
          className="flex items-center justify-center bg-[#D3BA89] text-white hover:bg-[#C1A677]"
        >
          <BanknoteIcon className="mr-2 h-4 w-4" />
          Sell
        </Button>
      </div>
    </div>
  );
};

export default function TodaysMarketPrice() {
  const priceData: PriceData[] = [
    { karat: "24 KARAT Gold", price: 13100, previousPrice: 13050 },
    { karat: "22 KARAT Gold", price: 12008, previousPrice: 11950 },
    { karat: "18 KARAT Gold", price: 9825, previousPrice: 9800 },
  ];

  return (
    <div className="rounded-lg bg-[#EDD7AE] p-6 shadow-md">
      <h2 className="mb-4 flex items-center text-xl font-semibold">
        <ArrowUpIcon className="mr-2 h-6 w-6" />
        Today&apos;s Market Price
      </h2>
      <div className="space-y-4">
        {priceData.map((data, index) => (
          <PriceRow
            key={index}
            {...data}
            prevKaratPrice={index > 0 ? priceData[index - 1].price : undefined}
          />
        ))}
      </div>
      <div className="mt-4 text-sm text-gray-600">
        Last updated: {new Date().toLocaleString()}
      </div>
    </div>
  );
}
