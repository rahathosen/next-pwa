import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { GithubIcon } from "../../_icons/other-icons";
import { NotificationManager } from "../../_components/notification-manager";
import { ArrowLeftIcon } from "lucide-react";
export default function MobileFeature() {
  return (
    <>
   <div className="pl-4">
   <Link href={"/dashboard"}>
            <button
              type="button"
              className="inline-flex items-center gap-x-1.5 rounded-md bg-sand-deep px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sand-lite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-deep"
            >
              <ArrowLeftIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
              Back
            </button>
          </Link>
   </div>
    <main className="flex flex-auto flex-col items-center">
        <div className="mb-4 flex items-center justify-between">
          

          {/* <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-sand-deep px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sand-lite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sand-deep"
          >
            <BellAlertIcon aria-hidden="true" className="-ml-0.5 h-5 w-5" />
          </button> */}
        </div>
      <Link
        className="flex flex-col gap-2 items-center"
        href="https://github.com/rahathosen/next-pwa"
      >
        <Image
          src="/icon/icon_xl"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
       
      </Link>
      <NotificationManager vapidPublicKey={process.env.VAPID_PUBLIC_KEY} />
    </main>
    </>
    
  );
}
