import Link from "next/link";
import {
  Bars3Icon,
  CalendarDaysIcon,
  EnvelopeIcon,
  PhoneIcon,
  EllipsisVerticalIcon,
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  XMarkIcon as XMarkIconMini,
} from "@heroicons/react/20/solid";
import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  FingerPrintIcon,
  UserCircleIcon,
  UsersIcon,
  XMarkIcon,
  IdentificationIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { MobileIcon } from "@radix-ui/react-icons";
const secondaryNavigation = [
  { name: "General", href: "#", icon: CubeIcon, current: true },
  { name: "Change PIN", href: "#", icon: FingerPrintIcon, current: false },
  { name: "Change Mobile Operator", href: "#", icon: MobileIcon, current: false },
  { name: "Resubmit KYC", href: "#", icon: CreditCardIcon, current: false },
  { name: "Authorized Marchant", href: "#", icon: IdentificationIcon, current: false },
  { name: "Privacy Policy ", href: "#", icon: ShieldCheckIcon, current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Profile() {
  return (
    <>
      <div className="container mx-auto px-4 bg-white">
        <div className="w-full md:w-1/2 lg:w-1/3 mx-auto ">
          <div className="lg:col-start-3 lg:row-end-1">
            <h2 className="sr-only">Summary</h2>
            <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5 pb-4">
              <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
                <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
                  <div className="ml-4 mt-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          alt=""
                          src="user.png"
                          className="h-12 w-12 rounded-full"
                        />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-base font-semibold leading-6 text-gray-900">
                          Rahat Hosen
                        </h3>
                        <p className="text-sm text-gray-500">
                          <a href="#">01723728496</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 mt-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <PhoneIcon
                        aria-hidden="true"
                        className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                      />
                      <span>Phone</span>
                    </button>
                    <button
                      type="button"
                      className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <EnvelopeIcon
                        aria-hidden="true"
                        className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                      />
                      <span>Message</span>
                    </button>
                  </div>
                  <dl className="flex flex-wrap">
                    <div className="flex-auto pl-6 pt-6">
                      {/* <dt className="text-sm font-semibold leading-6 text-gray-900">
                    Balance
                  </dt> */}
                      <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">
                        ৳10,560.00
                      </dd>
                    </div>
                    <div className="flex-none self-end px-6 pt-4">
                      <dt className="sr-only">Status</dt>
                      <dd className="rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-amber-600 ring-1 ring-inset ring-amber-600/20">
                        GOLD
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              <aside className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20">
                <nav className="flex-none px-4 sm:px-6 lg:px-0">
                  <ul
                    role="list"
                    className="flex gap-x-3 gap-y-1 whitespace-nowrap flex-col"
                  >
                    {secondaryNavigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-50 text-amber-600"
                              : "text-gray-700 hover:bg-gray-50 hover:text-amber-600",
                            "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm font-semibold leading-6"
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
                              item.current
                                ? "text-amber-600"
                                : "text-gray-400 group-hover:text-amber-600",
                              "h-6 w-6 shrink-0"
                            )}
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
