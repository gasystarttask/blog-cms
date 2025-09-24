import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/dist/client/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog CMS",
  description: "Next.js 15 + React 19 + Tailwind v4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50`}
      >
        <nav className="bg-white text-gray-900 shadow p-4 flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
