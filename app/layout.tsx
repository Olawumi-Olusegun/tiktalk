import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import LeftSidebar from "@/components/left-sidebar";
import { ThemeProvider } from "@/context/theme-provider";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tiktalk",
  description: "TikTalk Web Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      >
        <body className={urbanist.className}>
          <div className="h-dvh flex flex-col bg-white dark:bg-black">
            <Navbar />
            <main className="relative h-dvh flex items-center justify-between w-[100vw] max-w-default mx-auto">
              <LeftSidebar />
              <div className="flex-1 h-dvh pt-[70px] ">{children}</div>
            </main>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
