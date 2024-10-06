import { SiteConfig } from "@/types";

const site_url = process.env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Document Viewer",
  description:
    "View wide range of file formats to view seamlessly on this platform.",
  url: site_url || "https://docs-viewer.vercel.app/",
  links: {
    twitter: "https://twitter.com/avalynndev",
    github: "https://github.com/avalynndev/document-viewer",
  },
  mailSupport: "avalynndev@gmail.com",
};
