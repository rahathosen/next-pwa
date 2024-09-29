import Image from "next/image";
import { NotificationManager } from "./_components/notification-manager";
import { GithubIcon } from "./_icons/other-icons";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    < main>
      <div className="flex flex-row min-h-screen justify-center items-center">
        <Link href={"/mobile_feature"}>Mobile Feature</Link>
      </div>
    </main>
  );
}
