import Image from "next/image";
import { NotificationManager } from "./_components/notification-manager";
import { GithubIcon } from "./_icons/other-icons";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import HeaderNavigation from "@/components/core/headerNavigation";
import BottomNavigation from "@/components/core/bottomNavigation";

export default function Home() {
  return (
    < main>
      <HeaderNavigation />
      <div className="flex flex-row min-h-screen justify-center items-center mt-20">
        <Link href={"/mobile_feature"}>Mobile Feature</Link>
      </div>
      
      <BottomNavigation />
    </main>
  );
}
