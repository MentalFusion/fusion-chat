"use client";

import { useEffect, useState } from "react";
import { ChannelsButton, SettingsButton, UsersButton } from "@/components/ui/buttons";

export default function Header({
    onChannelMenuOpen,
    channelMenuOpen = false,
}: {
    onChannelMenuOpen?: () => void;
    channelMenuOpen?: boolean;
}) {
    const [isChannelMenuOpen, setIsChannelMenuOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isUsersOpen, setIsUsersOpen] = useState(false);

    const handleSettingsClick = () => setIsSettingsOpen(!isSettingsOpen);
    const handleUsersClick = () => setIsUsersOpen(!isUsersOpen);

    const handleChannelsClick = () => {
        const newState = !isChannelMenuOpen;

        setIsChannelMenuOpen(newState);

        if (newState && onChannelMenuOpen) {
            onChannelMenuOpen();
        }
    };

    useEffect(() => {
        setIsChannelMenuOpen(channelMenuOpen);
    }, [channelMenuOpen]);

    return (
        <header className="w-full p-4 bg-gray-800 text-white flex items-center content-start gap-4 lg:gap-5 select-none">
            <div className="lg:hidden">
                <ChannelsButton onClick={handleChannelsClick} />
            </div>

            <h1 className="text-2xl font-bold flex-1">Fusion Chat</h1>

            <UsersButton onClick={handleUsersClick} />
            <SettingsButton onClick={handleSettingsClick} />
        </header>
    );
}