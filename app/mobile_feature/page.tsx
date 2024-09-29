import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { GithubIcon } from "../_icons/other-icons";
import { NotificationManager } from "../_components/notification-manager";
export default function Offline() {
  return (
    <main className="flex flex-auto flex-col items-center pt-24">
       <Link href={'/'} >back to Home</Link>
      <Link
        className="flex flex-col gap-2 items-center"
        href="https://github.com/rahathosen/nextjs-pwa-webpush-template"
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
  );
}
