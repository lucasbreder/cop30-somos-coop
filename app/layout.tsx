import type { Metadata } from "next";
import "./globals.css";
import { BaseLayout } from "@/components/BaseLayout";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Coop na Coop 30",
};

const intro = localFont({
  src: [
    {
      path: "../fonts/Intro-Light-Alt.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/Intro-Light-Italic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../fonts/Intro-Regular-Alt.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Intro-Regular-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/Intro-Bold-Alt.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Intro-Bold-Italic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/Intro-Black-Alt.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/Intro-Black-Italic.otf",
      weight: "900",
      style: "italic",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body className={`${intro.className} antialiased h-full`}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
