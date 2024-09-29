import Image from "next/image";
import { NotificationManager } from "./_components/notification-manager";
import { GithubIcon } from "./_icons/other-icons";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import HeaderNavigation from "@/components/core/headerNavigation";
import BottomNavigation from "@/components/core/bottomNavigation";

export default function Home() {
  return (
   <>
    <main>
      <HeaderNavigation/>
       <Link href={'/mobile_feature'} >Mobile Feature</Link>
       <BottomNavigation/>
    </main>
   </>
  );
}
