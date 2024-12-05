"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {saveAs} from "file-saver"
import { jsPDF } from "jspdf";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { BellAlertIcon } from "@heroicons/react/20/solid";

const Success = () => {
  const [loading, setLoading] = useState(false);

  const downloadInvoiceText = () => {
    setLoading(true);

    const invoiceData = `Invoice for 10 Gram 22k Gold\nSubtotal: ₹120000\nFee: ₹5000\nVAT: ₹18000\nTotal: ₹135000`;

    const blob = new Blob([invoiceData], { type: "text/plain" });
    saveAs(blob, "Invoice_Transaction.txt");

    setLoading(false);
  };

  const downloadInvoicePDF = () => {
    setLoading(true);

    const doc = new jsPDF();

    // Add text to the PDF
    doc.text("Invoice for 10 Gram 22k Gold", 20, 20);
    doc.text(`Subtotal: ₹120000`, 20, 30);
    doc.text(`Fee: ₹5000`, 20, 40);
    doc.text(`VAT: ₹18000`, 20, 50);
    doc.text(`Total: ₹135000`, 20, 60);

    // Save PDF file
    doc.save("Invoice_Transaction.pdf");

    setLoading(false);
  };

  return (
    <section className="container mx-auto p-6">
      <div className="mb-4 flex items-center justify-between">
        <Link href={"checkout"}>
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
      <div className="rounded-lg bg-zinc-100 p-6 text-center shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold text-zinc-800">
          Transaction Successful!
        </h2>
        <p className="mb-6 text-lg text-gray-600">
          Your payment has been successfully processed. Thank you for your
          purchase!
        </p>

        {/* Invoice download buttons */}
        <div className="mt-6">
          <Button
            className="rounded-lg bg-sand-deep px-6 py-2 text-white hover:bg-sand-lite"
            onClick={downloadInvoicePDF}
            disabled={loading}
          >
            {loading ? "Generating..." : "Download Invoice (PDF)"}
          </Button>
        </div>

        {/* Alternative: Text file download */}
        <div className="mt-4">
          <Button
            className="rounded-lg bg-sand-deep px-6 py-2 text-white hover:bg-sand-lite"
            onClick={downloadInvoiceText}
            disabled={loading}
          >
            {loading ? "Generating..." : "Download Invoice (Text File)"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Success;
