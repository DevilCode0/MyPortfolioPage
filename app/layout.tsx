import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Saad Alkathiri",
    template: "%s | Saad Alkathiri",
  },
  description: "Portfolio page for Saad",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(inter.className, "bg-gray-900 text-white")}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
