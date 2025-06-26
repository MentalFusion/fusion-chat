import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
    subsets: ["latin"],
    variable: "--font-public-sans",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Fusion Chat",
    description: "This is a simple chat application built with Next.js.",
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${publicSans.variable} antialiased`}>{children}</body>
        </html>
    );
}
