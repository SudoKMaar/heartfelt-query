import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Love_Light } from "next/font/google";
import "./globals.css";

const font = Love_Light({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://heartfelt.vercel.app"),
  title: "Heartfelt Query",
  description:
    "Experience the thrill of a heartfelt query with our unique web app, Heartfelt Query. Engage in a fun and interactive way of expressing your feelings. Our app is designed with love and simplicity, making it easy for everyone to use. Dive into the world of emotions with Heartfelt Query today!",
  twitter: {
    card: "summary_large_image",
  },

  verification: {
    google: "w3roI87t-dIyKe7ReAdSWUVpWCe7K1pP_EXUidsZ3xI",
    me: "KMaar",
  },
  keywords: [
    "Heartfelt Query",
    "Abhishek KMaar",
    "Abhishek Kumar",
    "KMaar",
    "KMaar Miscellaneous Studio",
    "Web App",
    "Interactive",
    "Emotions",
    "Express Feelings",
    "User Engagement",
    "Fun",
    "Simplicity",
    "Unique Experience",
    "Love",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
