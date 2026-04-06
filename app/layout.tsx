import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PostHogProvider } from "@/components/PostHogProvider";
import { PostHogPageView } from "@/components/PostHogPageView";
import { Suspense } from "react";

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
        <PostHogProvider>
          <Analytics />
          <SpeedInsights />
          <Suspense fallback={null}>
            <PostHogPageView />
          </Suspense>
          <Navbar />
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
