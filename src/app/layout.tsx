import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeProvider } from 'next-themes'

import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "YMCI - Tech Clubs",
  description: "York Mills Collegiate Institute Technology Clubs",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute={"class"} defaultTheme={"dark"}>
          <TRPCReactProvider>
            {children}
          </TRPCReactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
