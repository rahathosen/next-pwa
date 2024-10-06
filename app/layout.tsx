import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import SplashScreens from "@/lib/splash-screens";
import HeaderNavigation from "@/components/core/headerNavigation";
import BottomNavigation from "@/components/core/bottomNavigation";

export const metadata: Metadata = {
  metadataBase: siteConfig.url,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: siteConfig.authors,
  generator: "Next.js",
  keywords: siteConfig.keywords,
  creator: siteConfig.creator,
  publisher: "Vercel",
  robots: "index,follow",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.name,
    startupImage: SplashScreens,
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  // Uncomment the following line to prevent zooming on mobile devices. Disallowing user scaling is not considered 'accessible', but could arguably lead to a better user experience.
  // userScalable: false,
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overscroll-none mx-auto">
        <div className="hidden md:block mb-24">
          <HeaderNavigation />
        </div>
        <div className="my-4">{children}</div>
        <div className="md:mt:0 mt-24">
          <BottomNavigation />
        </div>
      </body>
    </html>
  );
}
