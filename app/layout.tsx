import { constructMetadata } from "@/lib/metadata";
import "@/styles/globals.css";
import { Grandstander } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
const grandstander = Grandstander({
  subsets: ["vietnamese"],
  weight: ["400"],
});

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${grandstander.className} min-h-screen bg-background antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <main className="flex-1">{children}</main>
            <TailwindIndicator />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
