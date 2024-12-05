
import { AccountNav } from "@/components/core/AccountNav";
import { AccountProfile } from "@/components/core/AccountProfile";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import {
  CubeIcon,
  UserGroupIcon,
  FingerPrintIcon,
  BellIcon,
  IdentificationIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  DevicePhoneMobileIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

import { ChevronRight, ReceiptText } from "lucide-react";

const secondaryNavigation = [
  {
    name: "Account details",
    href: "/account-details",
    icon: CubeIcon,
    current: true,
  },
  {
    name: "Loan Management",
    href: "/loan-management",
    icon: UserGroupIcon,
    current: false,
  },
  {
    name: "Rental Management",
    href: "/rental-management",
    icon: UserGroupIcon,
    current: false,
  },
  {
    name: "Payment Scheduling",
    href: "/payment-scheduling",
    icon: CalendarDaysIcon,
    current: false,
  },
  {
    name: "Payment History",
    href: "/payment-history",
    icon: CalendarDaysIcon,
    current: false,
  },
  {
    name: "Change PIN",
    href: "/change-pin",
    icon: FingerPrintIcon,
    current: false,
  },
  {
    name: "Notification",
    href: "/notification",
    icon: BellIcon,
    current: false,
  },

  {
    name: "Transactions",
    href: "/transactions",
    icon: ReceiptText,
    current: false,
  },
  {
    name: "Resubmit KYC",
    href: "/resubmit-kyc",
    icon: IdentificationIcon,
    current: false,
  },
  {
    name: "Authorized Merchant",
    href: "/authorized-merchant",
    icon: IdentificationIcon,
    current: false,
  },
  { name: "Language", href: "/language", icon: GlobeAltIcon, current: false },
  {
    name: "Terms and condition",
    href: "/terms-condition",
    icon: DocumentTextIcon,
    current: false,
  },
  { name: "Help", href: "/help", icon: QuestionMarkCircleIcon, current: false },
  { name: "App Feature", href: "/mobile_feature", icon: DevicePhoneMobileIcon, current: false },
  {
    name: "Log out from this device",
    href: "#",
    icon: ArrowLeftOnRectangleIcon,
    current: false,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Page() {
  return (
    <>
      <AccountNav />

      <AccountProfile />

   
      <div className="hidden pb-20 pt-10 md:block">
        <nav className="flex-none pl-4 pr-4 sm:px-6 lg:px-0">
          <ul
            role="list"
            className="flex max-w-[300px] flex-col gap-x-3 gap-y-1 whitespace-nowrap"
          >
            {secondaryNavigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-zinc-50 text-sand-deep"
                      : "text-zinc-700 hover:bg-zinc-50 hover:text-sand-deep",
                    "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm font-semibold leading-6",
                  )}
                >
                  <item.icon
                    aria-hidden="true"
                    className={classNames(
                      item.current
                        ? "text-sand-deep"
                        : "text-zinc-400 group-hover:text-sand-deep",
                      "h-6 w-6 shrink-0",
                    )}
                  />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

     
      </div>

      {/* mobile design */}
      <div className="block pb-20 pt-10 md:hidden">
        <nav className="flex-none pl-4 pr-4 sm:px-6 lg:px-0">
          <ul
            role="list"
            className="flex flex-col gap-x-3 gap-y-1 whitespace-nowrap"
          >
            {secondaryNavigation.map((item) => (
              <li
                key={item.name}
                className="my-1 rounded-md bg-zinc-50 "
              >
                <a
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-zinc-100 text-sand-deep"
                      : "text-zinc-700 hover:bg-zinc-100 hover:text-sand-deep",
                    "group flex justify-between gap-x-3 rounded-md py-3 pl-3 pr-4 text-sm font-semibold leading-6",
                  )}
                >
                  <div className="flex gap-3">
                    <item.icon
                      aria-hidden="true"
                      className={classNames(
                        item.current
                          ? "text-sand-deep"
                          : "text-zinc-400 group-hover:text-sand-deep",
                        "h-6 w-6 shrink-0",
                      )}
                    />
                    {item.name}
                  </div>
                  <ChevronRight size={18} />
                </a>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </>
  );
}
