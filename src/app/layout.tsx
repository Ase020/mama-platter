import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Notification from "../components/Notification";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mama's Platter",
  description: "The best place on the web to find your next delicious meal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Notification />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
