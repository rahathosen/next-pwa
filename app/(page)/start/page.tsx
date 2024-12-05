import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const StartPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center">
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="mb-2 text-5xl font-[var(--font-unna)] text-stone-900">
          WAYS GOLD<sup>®</sup>
        </h1>
        <p className="text-xs text-zinc-600">
          Powered by{" "}
          <span className="font-bold">&apos;AL-HASQAN GOLD BANK&apos;</span>
        </p>
      </div>
      <br />

      <Link href={"/login"}>
        <Button
          variant="default"
          className="relative z-10 w-full bg-sand-lite font-medium text-black duration-300 hover:bg-sand-deep hover:text-black sm:w-auto"
        >
          Get started
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </Link>

      <div className="absolute bottom-0 left-0 flex space-x-2 p-4">
        <div className="h-2 w-2 animate-pulse rounded-full bg-sand-deep"></div>
        <div className="h-3 w-3 animate-pulse rounded-full bg-sand-deep delay-200"></div>
        <div className="delay-400 h-1 w-1 animate-pulse rounded-full bg-sand-lite"></div>
      </div>
    </div>
  );
};

export default StartPage;
