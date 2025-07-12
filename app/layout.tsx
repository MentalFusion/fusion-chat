import { Public_Sans } from "next/font/google";
import "./globals.css";

import type { Metadata } from "next";

const publicSans = Public_Sans({
    subsets: ["latin"],
    variable: "--font-public-sans",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Fusion Chat",
    description: "This is a simple chat application built with Next.js.",
};

const materialSymbols = {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link {...materialSymbols} />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body className={`${publicSans.variable} antialiased bg-gray-100 text-gray-900 flex flex-col h-screen`}>
                {children}
            </body>
        </html>
    );
}
