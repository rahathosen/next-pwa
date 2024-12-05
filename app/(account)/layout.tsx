import BottomNavigation from "@/components/core/bottomNavigation";
import HeaderNavigation from "@/components/core/headerNavigation";

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pb-20 pt-5 md:py-0">
        <header className="mb-24 hidden md:block">
          <HeaderNavigation />
        </header>
        {children}
        <BottomNavigation />
      </body>
    </html>
  );
}
