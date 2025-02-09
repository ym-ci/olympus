import { ThemeProvider } from "next-themes";

export default function DarkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute={"class"} defaultTheme={"dark"}>
      {children}
    </ThemeProvider>
  );
}
