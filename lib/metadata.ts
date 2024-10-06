import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  icons = "/public/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      "Next.js",
      "React",
      "shadcn ui",
      "DocumentViewer",
      "File Viewer",
      "Docs",
    ],
    authors: [
      {
        name: "avalynndev",
      },
    ],
    creator: "avalynndev",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title,
      description,
      siteName: title,
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    manifest: `${siteConfig.url}/manifest.json`,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
