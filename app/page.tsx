"use client";

import { useCallback, useEffect, useState } from "react";

import ChannelMenu from "@/components/ui/channel-menu";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function Home() {
    const [isChannelMenuOpen, setIsChannelMenuOpen] = useState(false);

    const handleChannelMenuOpen = useCallback(() => {
        setIsChannelMenuOpen(true);
    }, []);

    useEffect(() => {
        let wasPreviouslyDesktop = window.innerWidth >= 1024;

        const handleResize = () => {
            const isCurrentlyDesktop = window.innerWidth >= 1024;

            if (isCurrentlyDesktop && !wasPreviouslyDesktop) {
                setIsChannelMenuOpen(true);
            } else if (!isCurrentlyDesktop && wasPreviouslyDesktop) {
                setIsChannelMenuOpen(false);
            }

            wasPreviouslyDesktop = isCurrentlyDesktop;
        };

        if (wasPreviouslyDesktop) setIsChannelMenuOpen(true);

        window.addEventListener("resize", handleResize);

        // cleanup function to remove the event listener
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <Header
                channelMenuOpen={isChannelMenuOpen}
                onChannelMenuOpen={handleChannelMenuOpen}
            />

            <div className="flex flex-1 w-full h-full">
                {isChannelMenuOpen && <ChannelMenu onClose={() => setIsChannelMenuOpen(false)} />}

                <main className="flex-1 p-4 bg-gray-700">
                    {/* Chat Area */}
                </main>

                <aside className="hidden lg:block w-1/8 p-4 bg-gray-200">
                    {/* Right Sidebar */}
                </aside>
            </div>

            <Footer />
        </>
    );
}
