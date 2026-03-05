import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dver Dashboard",
  description: "Dver Agent Dashboard & Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100 flex h-screen overflow-hidden`}>
        <Sidebar />
        <main className="flex-1 overflow-auto bg-zinc-900/50">
          {children}
        </main>
      </body>
    </html>
  );
}
