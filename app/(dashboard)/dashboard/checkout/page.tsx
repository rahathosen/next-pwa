"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { BellAlertIcon } from "@heroicons/react/20/solid";

const Checkout = () => {
  // State management for the payment method and inputs
  const [paymentMethod, setPaymentMethod] = useState("digital");
  const [promoCode, setPromoCode] = useState("");
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  // Example values (these could be dynamic)
  const itemName = "10 Gram 22k Gold";
  const itemPrice = 120000;
  const vat = 0.15; // 15% VAT
  const fee = 5000; // Transaction fee
  const discount = 10000; // Promo/discount
  const total = itemPrice + fee + itemPrice * vat - discount;

  const handlePaymentMethodChange = (e: any) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <section className="container mx-auto p-4 pb-20 sm:p-6 md:p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Checkout</h1>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <Link href={"buy"}>
          <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-sand-deep px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sand-lite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-deep"
          >
            <ArrowLeftIcon
              aria-hidden="true"
              className="-ml-0.5 h-5 w-5"
            />
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

      <div className="space-y-6 rounded-lg bg-white p-6 shadow-lg">
        {/* Item Info */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">{itemName}</h2>
          <p className="text-lg text-gray-600">{`Price: $${itemPrice}`}</p>
        </div>

        {/* Subtotal, Fees, and Totals */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <p className="text-sm text-gray-600">Subtotal</p>
            <p className="font-medium text-gray-800">{`$${itemPrice}`}</p>
          </div>

          <div className="flex justify-between">
            <p className="text-sm text-gray-600">Fee (Vault Charge)</p>
            <p className="font-medium text-gray-800">{`$${fee}`}</p>
          </div>

          <div className="flex justify-between">
            <p className="text-sm text-gray-600">VAT (15%)</p>
            <p className="font-medium text-gray-800">{`$${(itemPrice * vat).toFixed(2)}`}</p>
          </div>

          <div className="flex justify-between">
            <p className="text-sm text-gray-600">Transaction Fee</p>
            <p className="font-medium text-gray-800">{`$${(itemPrice * vat).toFixed(2)}`}</p>
          </div>
        </div>

        {/* Promo Code Input */}
        <div className="space-y-2">
          <Label htmlFor="promoCode">Enter Promo Code</Label>
          <Input
            type="text"
            id="promoCode"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Promo code (optional)"
          />
        </div>

        <div className="flex justify-between">
          <p className="text-sm text-gray-600">Promo/Discount</p>
          <p className="font-medium text-gray-800">- ${discount}</p>
        </div>

        <div className="flex justify-between font-semibold">
          <p>Total (including taxes)</p>
          <p>{`$${total.toFixed(2)}`}</p>
        </div>

        {/* Payment Method */}
        <div>
          <h3 className="text-lg font-semibold">Select Payment Method</h3>
          <div className="mt-4 space-y-2">
            <div>
              <input
                type="radio"
                id="digitalPayment"
                name="paymentMethod"
                value="digital"
                checked={paymentMethod === "digital"}
                onChange={handlePaymentMethodChange}
                className="mr-2"
              />
              <label htmlFor="digitalPayment" className="text-sm text-gray-600">
                Digital Payment
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="paymentCode"
                name="paymentMethod"
                value="code"
                checked={paymentMethod === "code"}
                onChange={handlePaymentMethodChange}
                className="mr-2"
              />
              <label htmlFor="paymentCode" className="text-sm text-gray-600">
                Payment by Code
              </label>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            checked={isTermsChecked}
            onChange={() => setIsTermsChecked(!isTermsChecked)}
            className="mr-2"
          />
          <label htmlFor="terms" className="text-sm text-gray-600">
            I agree to the{" "}
            <a href="/terms" className="text-blue-600">
              Terms and Conditions
            </a>
          </label>
        </div>

        {/* Checkout Buttons */}
        <Link href="/dashboard/success">
          <div className="my-2 flex justify-between gap-4">
            <Button className="w-full text-white bg-sand-deep hover:bg-sand-lite">
              Confirm
            </Button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Checkout;
