import { AlignJustify, Bell } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-start space-x-5">
        <div className="pt-1.5">
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        </div>
      </div>
      <div className="flex gap-2 md:hidden">
        <Link href="/notification">
          <Bell />
        </Link>
        <AlignJustify />
      </div>
    </div>
  );
};

export default Header;
