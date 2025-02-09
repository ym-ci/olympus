import localFont from "next/font/local";

export const satoshi = localFont({
  display: "swap",
  variable: "--font-satoshi",
  src: [
    {
      path: "./Satoshi-Light.woff2",
      weight: "300",
    },
    {
      path: "./Satoshi-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./Satoshi-Regular.woff2",
      weight: "400",
    },
    {
      path: "./Satoshi-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Satoshi-Medium.woff2",
      weight: "500",
    },
    {
      path: "./Satoshi-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./Satoshi-Bold.woff2",
      weight: "700",
    },
    {
      path: "./Satoshi-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./Satoshi-Black.woff2",
      weight: "900",
    },
    {
      path: "./Satoshi-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
    {
      path: "./Satoshi-Variable.woff2",
      weight: "300 900",
    },
    {
      path: "./Satoshi-VariableItalic.woff2",
      weight: "300 900",
      style: "italic",
    },
  ],
});
