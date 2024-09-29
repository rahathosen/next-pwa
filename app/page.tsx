import Image from "next/image";
import { NotificationManager } from "./_components/notification-manager";
import { GithubIcon } from "./_icons/other-icons";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import HeaderNavigation from "@/components/core/headerNavigation";

export default function Home() {
  return (
    <main className="flex flex-auto flex-col items-center pt-24">
      <HeaderNavigation/>
       <Link href={'/mobile_feature'} >Mobile Feature</Link>
    </main>
  );
}
