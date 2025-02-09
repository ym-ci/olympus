import { ThemeProvider } from "next-themes";

export default function LightLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute={"class"} defaultTheme={"light"}>
      {children}
    </ThemeProvider>
  );
}
