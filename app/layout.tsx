import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarSimple } from "@/components/main/Navbar";
import StarsCanvas from "@/components/main/StarBackground";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio",
  description: "este es mi portafolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-none">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden scrollbar-none`}>
        <StarsCanvas/>
        <NavbarSimple/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
