import { Public_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${publicSans.variable} antialiased bg-gray-100 text-gray-900 flex flex-col min-h-screen`}>
                <Header />

                {children}

                <Footer />
            </body>
        </html>
    );
}
