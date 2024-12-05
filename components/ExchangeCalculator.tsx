"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Link2Icon, CoinsIcon, DollarSignIcon, WeightIcon } from "lucide-react";
import Link from "next/link";

export default function ExchangeCalculator() {
  const [isGrams, setIsGrams] = useState(false);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  // Fake conversion rates
  const GOLD_RATE = 12008; // price per gram
  const VAT = 0.03; // 3% VAT

  const calculateResult = (value: string, inGrams: boolean) => {
    const numValue = parseFloat(value) || 0;
    if (inGrams) {
      // Converting from grams to BDT
      const bdt = numValue * GOLD_RATE * (1 + VAT);
      setResult(
        bdt.toLocaleString("en-IN", { maximumFractionDigits: 2 }) + " TK"
      );
    } else {
      // Converting from BDT to grams
      const grams = numValue / (GOLD_RATE * (1 + VAT));
      setResult(grams.toFixed(4) + " grams");
    }
  };

  const handleAmountChange = (value: string) => {
    setAmount(value);
    calculateResult(value, isGrams);
  };

  const handleQuickAdd = (addAmount: number) => {
    const newAmount = (parseFloat(amount) || 0) + addAmount;
    setAmount(newAmount.toString());
    calculateResult(newAmount.toString(), isGrams);
  };

  const handleToggle = (checked: boolean) => {
    setIsGrams(checked);
    calculateResult(amount, checked);
  };

  useEffect(() => {
    calculateResult(amount, isGrams);
  }, [isGrams]);

  return (
    <div className="rounded-xl bg-white p-6 text-black">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <DollarSignIcon className="h-4 w-4 text-[#D3BA89]" />
          <span className={isGrams ? "text-gray-500" : "text-black"}>BDT</span>
        </div>
        <Switch
          checked={isGrams}
          onCheckedChange={handleToggle}
          className="bg-gray-200"
        />
        <div className="flex items-center gap-2">
          <WeightIcon className="h-4 w-4 text-[#D3BA89]" />
          <span className={!isGrams ? "text-gray-500" : "text-black"}>
            In Grams
          </span>
        </div>
      </div>

      <input
        type="number"
        value={amount}
        onChange={(e) => handleAmountChange(e.target.value)}
        className="mb-4 w-full rounded-lg bg-gray-100 py-2 text-center text-base text-zinc-400"
        placeholder={isGrams ? "Enter grams" : "Enter amount in BDT"}
      />

      <div className="mb-4 text-center text-2xl">=</div>

      <div className="mb-6 text-center text-2xl font-bold text-[#D3BA89]">
        {result || (isGrams ? "0.00 TK" : "0.0000 grams")}
      </div>

      <div className="mb-6 flex gap-2">
        <Button
          onClick={() => handleQuickAdd(isGrams ? 1 : 1000)}
          variant="outline"
          className="flex-1 bg-gray-100 text-black hover:bg-gray-200"
        >
          + {isGrams ? "1.00" : "1,00.00"}
        </Button>
        <Button
          onClick={() => handleQuickAdd(isGrams ? 3 : 3000)}
          variant="outline"
          className="flex-1 bg-gray-100 text-black hover:bg-gray-200"
        >
          + {isGrams ? "3.00" : "3,00.00"}
        </Button>
        {/* <Button
          onClick={() => handleQuickAdd(isGrams ? 5 : 5000)}
          variant="outline"
          className="flex-1 bg-gray-100 text-black hover:bg-gray-200"
        >
          + {isGrams ? '5.00' : '5,000.00'}
        </Button> */}
      </div>

      <div className="mb-6 text-center text-sm text-gray-500">
        (Includes 3% VAT)
      </div>

      <Link href="dashboard/buy">
        <Button className="w-full bg-[#D3BA89] py-6 text-white hover:bg-[#C1A677]">
          <CoinsIcon className="mr-2 h-4 w-4" />
          BUY GOLD
        </Button>
      </Link>

      {/* <div className="mt-4 text-center text-sm text-gray-500">
        Buy 24K, 999.9 purity guaranteed by AL-Hasan 
      </div> */}
    </div>
  );
}
