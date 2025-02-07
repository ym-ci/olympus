import "@/styles/globals.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import Script from "next/script";
import { satoshi } from "@/app/font/satoshi";

export const metadata: Metadata = {
  title: "York Mills Collegiate Institute",
  description: "York Mills Collegiate Institute",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={satoshi.variable} suppressHydrationWarning>
      <Script
        src="https://assets.onedollarstats.com/tracker.js"
        data-site-id="ymci.ca"
      />
      <body>
        <TRPCReactProvider>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
