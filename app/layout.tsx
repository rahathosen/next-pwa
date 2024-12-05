import type { Metadata, Viewport } from "next";
import { Bodoni_Moda,Old_Standard_TT, Unna } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import SplashScreens from "@/lib/splash-screens";
import HeaderNavigation from "@/components/core/headerNavigation";
import BottomNavigation from "@/components/core/bottomNavigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Import Bodoni Moda font
const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni-moda",
  weight: ["400", "700"],
});

const unna = Unna({
  subsets: ["latin"],
  variable: "--font-unna",
  weight: ["400", "700"],
});

const oldStandardTT = Old_Standard_TT({
  subsets: ["latin"],
  variable: "--font-old-standard-tt",
  weight: "700", 
});


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
      <body
  className={`overscroll-none mx-auto  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 ${geistSans.variable} ${geistMono.variable} ${bodoniModa.variable} ${unna.variable} ${oldStandardTT.variable} antialiased`}
  style={{ fontFamily: 'var(--font-geist-sans), var(--font-geist-mono), var(--font-bodoni-moda),var(--font-unna), var(--font-old-standard-tt)' }}
>
        <div>{children}</div>
      </body>
    </html>
  );
}
