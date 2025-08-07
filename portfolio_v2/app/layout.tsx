import type { Metadata } from "next";
import { Lekton } from "next/font/google";
import "./globals.css";

const lekton = Lekton({
  variable: "--font-lekton",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mika's Portfolio",
  description: "Created a personal portfolio using Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lekton.variable} antialiased`}>{children}</body>
    </html>
  );
}
