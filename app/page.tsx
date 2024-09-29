import Image from "next/image";
import { NotificationManager } from "./_components/notification-manager";
import { GithubIcon } from "./_icons/other-icons";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    < main>
      <div className="flex flex-row min-h-screen justify-center items-center">
        <Link href={"/mobile_feature"}>
        <Button>Check Mobile Feature</Button>
        </Link>
      </div>
    </main>
  );
}
