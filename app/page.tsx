"use client";

import { useCallback, useEffect, useState } from "react";

import ChannelMenu from "@/components/ui/channel-menu";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ChatPane from "@/components/ui/chat-pane";
import { UserIcon, userIconStylesLg } from "@/components/ui/icons";

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

            <main className="flex flex-1 w-full min-h-0">
                {isChannelMenuOpen && <ChannelMenu onClose={() => setIsChannelMenuOpen(false)} />}

                <div className="flex flex-col flex-1 bg-gray-700 lg:rounded-l-lg lg:rounded-br">
                    <ChatPane />
                </div>
            </main>

            <Footer />
        </>
    );
}
