import { ArrowDownRight, ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const StartPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 to-black">
      {/* Logo and Tagline */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-yellow-500 mb-2">
          GOLD WAYS<sup>®</sup>
        </h1>
        <p className="text-sm text-gray-400">
          Powered by &apos;AL-HASQAN GOLD BANK&apos;
        </p>
      </div>
      <br />

      <Link href={"/login"}>
        <Button variant="default" className="w-full sm:w-auto">
          Get started
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </Link>
      {/* Gold sparkles (Optional: if you want small decorations) */}
      <div className="absolute bottom-0 left-0 p-4 flex space-x-2">
        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default StartPage;
