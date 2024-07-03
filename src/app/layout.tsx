import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {FloatingNavDemo} from '../components/Navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wema Parcels",
  description: "Taking your parcel to every corner of Kenya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <FloatingNavDemo/>
        <main className={inter.className}>{children}</main>
      </body>
      
    </html>
  );
}
