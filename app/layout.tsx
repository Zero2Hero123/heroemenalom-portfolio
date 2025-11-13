import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Hero Emenalom",
  description: "Hero's portfolio",
  icons: {
    icon: "/HE.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
