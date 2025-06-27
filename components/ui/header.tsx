"use client";

import { useState } from "react";
import { ChannelsButton, SettingsButton, UsersButton } from "@/components/ui/buttons";
import Channels from "@/components/ui/channels";

export default function Header() {
    const [isChannelsOpen, setIsChannelsOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isUsersOpen, setIsUsersOpen] = useState(false);

    const handleChannelsClick = () => setIsChannelsOpen(!isChannelsOpen);
    const handleSettingsClick = () => setIsSettingsOpen(!isSettingsOpen);
    const handleUsersClick = () => setIsUsersOpen(!isUsersOpen);

    return (
        <header className="w-full p-4 bg-gray-800 text-white flex items-center content-start gap-4 lg:gap-5 select-none">
            <ChannelsButton onClick={handleChannelsClick} />

            {isChannelsOpen &&
                <Channels
                    onClose={() => setIsChannelsOpen(false)}
                />}

            <h1 className="text-2xl font-bold flex-1">Fusion Chat</h1>

            <UsersButton onClick={handleUsersClick} />
            <SettingsButton onClick={handleSettingsClick} />
        </header>
    );
}