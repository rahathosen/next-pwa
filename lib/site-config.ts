import { Metadata, MetadataRoute } from "next";

export const siteConfig: SiteConfig = {
  name: "WAYS GOLD",
  shortName: "WAYS GOLD",
  themeColor: "#18181b", // status or title bar color
  backgroundColor: "#18181b", // background color before stylesheets have loaded
  textColor: "#d4d4d8", // text color for opengraph images and splash screens
  description: ` "WAYS GOLD" by AL-HASAN GOLD`,
  authors: [{ name: "Rahathosen", url: "https://github.com/rahathosen" }],
  creator: "rahathosen",
  url: new URL(
    process.env.NODE_ENV === "development"
      ? "https://localhost:3000"
      : "https://thenext-pwa.vercel.app"
  ),
  keywords: [
    "nextjs",
    "pwa",
    "webpush",
    "notifications",
    "template",
    "example",
    "progressive",
    "web",
    "app",
  ],
};

interface SiteConfig {
  name: string;
  shortName: MetadataRoute.Manifest["short_name"];
  themeColor: MetadataRoute.Manifest["theme_color"];
  backgroundColor: MetadataRoute.Manifest["background_color"];
  textColor: string;
  description?: MetadataRoute.Manifest["description"];
  authors: Metadata["authors"];
  creator: Metadata["creator"];
  url: Metadata["metadataBase"];
  keywords: Metadata["keywords"];
}
