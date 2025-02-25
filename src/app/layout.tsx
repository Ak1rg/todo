import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ProviderStore from "@/components/StoreProvider/StoreProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo List",
  description: "Created by Alibek",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <ProviderStore>
          {children}
        </ProviderStore>
      </body>
    </html>
  );
}
