"use client";

import { useCallback, useEffect, useState } from "react";

import ChannelMenu from "@/components/ui/channel-menu";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { UserIcon } from "@/components/ui/icons";

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

            <div className="flex flex-1 w-full min-h-0">
                {isChannelMenuOpen && <ChannelMenu onClose={() => setIsChannelMenuOpen(false)} />}

                <main className="flex flex-col flex-1 p-4 bg-gray-700">
                    {/* chat header, messages, input, etc. */}

                    {/* the chat header shows the current channel name and an abbreviated user list */}
                    <div className="mb-4 flex justify-between items-center border-b border-gray-600 pb-2">
                        <h1 className="text-2xl font-bold text-white"># Current Channel</h1>
                        <p className="text-gray-300">4 members online</p>
                    </div>

                    {/* messages list; messages should be scrollable and start at the bottom */}
                    <div className="flex-1 overflow-y-auto">
                        {/* example messages; messages should have the username, timestamp, and message content */}
                        {/* the chat should resemble other chatroom style apps like Slack, HipChat, etc. */}
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <UserIcon
                                    user={{ name: "Alice", online: true, active: true }}
                                    size="large"
                                    hideStatus={true}
                                />
                                <div className="bg-gray-800 text-white p-3 rounded-lg max-w-md">
                                    <div className="font-semibold">
                                        <span className="inline-block mr-2">Alice</span>
                                        <span className="text-sm text-gray-400">10:15 AM</span>
                                    </div>
                                    <p>Hello everyone! How&apos;s it going?</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <UserIcon
                                    user={{ name: "Bob", online: false, active: false }}
                                    size="large"
                                    hideStatus={true}
                                />
                                <div className="bg-gray-800 text-white p-3 rounded-lg max-w-md">
                                    <div className="font-semibold">
                                        <span className="inline-block mr-2">Bob</span>
                                        <span className="text-sm text-gray-400">10:16 AM</span>
                                    </div>
                                    <p>Hey Alice! I&apos;m doing well, thanks!</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <UserIcon
                                    user={{ name: "Charlie", online: true, active: true }}
                                    size="large"
                                    hideStatus={true}
                                />
                                <div className="bg-gray-800 text-white p-3 rounded-lg max-w-md">
                                    <div className="font-semibold">
                                        <span className="inline-block mr-2">Charlie</span>
                                        <span className="text-sm text-gray-400">10:17 AM</span>
                                    </div>
                                    <p>Hi everyone! Just joined the channel.</p>
                                </div>
                            </div>

                            {/* senders own messages should be aligned to the right */}
                            <div className="flex items-start space-x-3 justify-end">
                                <div className="bg-blue-600 text-white p-3 rounded-lg max-w-md">
                                    <div className="font-semibold">
                                        <span className="inline-block mr-2">You</span>
                                        <span className="text-sm text-gray-400">10:18 AM</span>
                                    </div>
                                    <p>Hi everyone! I&apos;m here too.</p>
                                </div>
                                <UserIcon
                                    user={{ name: "You", online: true, active: true }}
                                    size="large"
                                    hideStatus={true}
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <Footer />
        </>
    );
}
