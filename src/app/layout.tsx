import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextFund",
  description:
    "NextFund is a decentralized crowdfunding platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <ClerkProvider>
        <ThirdwebProvider>
          {children}
          </ThirdwebProvider>
        </ClerkProvider>
        
      </body>
    </html>
  );
}
