import type { Metadata } from "next";
import { Inter, Iceland } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const iceland = Iceland({
  variable: "--font-iceland",
  subsets: ["latin"],
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "Hollow-Games.cz | Domovská stránka",
  description: "Webová stránka pro Minecraftový server Hollow-Games.cz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${iceland.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>

        <Toaster />
      </body>
    </html>
  );
}
