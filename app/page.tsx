"use client";

import { useCallback, useEffect, useState } from "react";

import ChannelMenu from "@/components/ui/channel-menu";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
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

            <div className="flex flex-1 w-full min-h-0">
                {isChannelMenuOpen && <ChannelMenu onClose={() => setIsChannelMenuOpen(false)} />}

                <main className="flex flex-col flex-1 bg-gray-700 lg:rounded-l-lg lg:rounded-br">
                    {/* the chat header shows the current channel name and an abbreviated user list */}
                    <div className="mb-4 p-4 pb-2 flex justify-between items-center border-b border-gray-600">
                        <h1 className="text-2xl font-bold text-white"># Current Channel</h1>
                        <p className="text-gray-300">4 members online</p>
                    </div>

                    {/* messages list; messages should be scrollable and start at the bottom */}
                    <div className="flex-1 overflow-y-auto">
                        {/* example messages; messages should have the username, timestamp, and message content */}
                        {/* the chat should resemble other chatroom style apps like Slack, HipChat, etc. */}
                        <div className="space-y-2">
                            <div className="flex items-start space-x-3 group hover:bg-gray-600 px-4 py-1">
                                <UserIcon
                                    user={{ name: "Alice", online: true, active: true, avatarUrl: "abc123" }}
                                    size="large"
                                    hideStatus={true}
                                />
                                <div>
                                    <div className="font-semibold">
                                        <span className="inline-block mr-2">Alice</span>
                                        <span className="text-sm text-gray-400">10:15 AM</span>
                                    </div>

                                    <p>Hello everyone! How&apos;s it going?</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 group hover:bg-gray-600 px-4 py-1">
                                <UserIcon
                                    user={{ name: "Bob", online: false, active: false, avatarUrl: "abc123" }}
                                    size="large"
                                    hideStatus={true}
                                />
                                <div>
                                    <div className="font-semibold">
                                        <span className="inline-block mr-2">Bob</span>
                                        <span className="text-sm text-gray-400">10:16 AM</span>
                                    </div>
                                    <p>Hey Alice! I&apos;m doing well, thanks!</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 group hover:bg-gray-600 px-4 py-1">
                                <UserIcon
                                    user={{ name: "Charlie", online: true, active: true, avatarUrl: "abc123" }}
                                    size="large"
                                    hideStatus={true}
                                />
                                <div>
                                    <div className="font-semibold">
                                        <span className="inline-block mr-2">Charlie</span>
                                        <span className="text-sm text-gray-400">10:17 AM</span>
                                    </div>
                                    <p>Hi everyone! Just joined the channel.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 group hover:bg-gray-600 px-4 py-1">
                                {/* only include a timesatmp if the message was sent by the previous user */}
                                <div className={`invisible flex-0 ${userIconStylesLg} h-auto min-h-auto text-right group-hover:visible`}>
                                    <div className="font-semibold">
                                        <span className="text-[0.65em] text-gray-400">10:18 AM</span>
                                    </div>
                                </div>
                                <div>
                                    <p>Second message from the same user.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3 group hover:bg-gray-600 px-4 py-1">
                                <UserIcon
                                    user={{ name: "Michael", online: true, active: true, avatarUrl: "abc123" }}
                                    size="large"
                                    hideStatus={true}
                                />
                                <div>
                                    <div className="font-semibold">
                                        <span className="inline-block mr-2">You</span>
                                        <span className="text-sm text-gray-400">10:20 AM</span>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper euismod
                                        pellentesque. Donec pretium leo turpis, sed varius mi posuere finibus. Fusce
                                        consectetur metus sem, eget aliquam quam gravida et. Sed blandit odio eu ex
                                        mattis porttitor. Vivamus ac urna elit. Cras eget mauris mauris. Ut lacinia
                                        venenatis augue, nec euismod sem efficitur vel. Praesent hendrerit ut dolor non
                                        semper. Pellentesque eros libero, rutrum sed arcu et, volutpat tincidunt orci.
                                        Aenean ac dapibus tellus. Maecenas lacinia sapien at efficitur fringilla.
                                        Vestibulum egestas auctor quam in porttitor. Pellentesque tincidunt ligula a
                                        lorem condimentum, at pellentesque tellus dignissim. Suspendisse quis risus sem.
                                        Nullam fringilla lacinia luctus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <Footer />
        </>
    );
}
