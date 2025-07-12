"use client";

import clsx from "clsx";
import { useState } from "react";

import { AddButton, ExpandButton } from "../buttons";
import { GroupChannelIcon, UserIcon } from "../icons";

import type { AnyChannel } from "~/types/channel-menu";

interface ChannelGroupProps {
    title: string;
    activeChannel: AnyChannel | null;
    channels: AnyChannel[];
    onChannelClick: (channel: AnyChannel) => void;
}

export default function ChannelGroup({
    title,
    activeChannel,
    channels,
    onChannelClick,
}: ChannelGroupProps) {
    const [isGroupExpanded, setIsGroupExpanded] = useState(true);

    return (
        <div className={clsx([
            "mx-4 space-y-2 rounded-md bg-gray-600 py-2 px-4 flex flex-col min-h-0 select-none gap-2",
            isGroupExpanded ? "flex-1" : "flex-none"
        ])}>
            <div className="flex items-center gap-3 flex-shrink-0 mb-0">
                <ExpandButton expanded={isGroupExpanded} onClick={() => setIsGroupExpanded(!isGroupExpanded)} />

                <h3 className="flex-1 text-lg font-semibold">{title}</h3>

                <AddButton onClick={() => console.log("Join / create channel")} />
            </div>

            <ul className={clsx([
                "space-y-1 overflow-y-auto min-h-0 flex-1",
                isGroupExpanded ? "max-h-96" : "max-h-0 overflow-hidden"
            ])}>
                {channels.map((channel, index) => (
                    <li
                        key={index}
                        className={clsx([
                            "flex items-center py-1 px-2 rounded cursor-pointer hover:bg-gray-700",
                            activeChannel?.name === channel.name ? "bg-gray-800" : "bg-gray-600"
                        ])}
                        onClick={() => onChannelClick(channel)}
                    >
                        {channel.type === "direct" ? (
                            <UserIcon user={channel.user} />
                        ) : (
                            <GroupChannelIcon channel={channel} />
                        )}

                        {/* always the same no matter the type */}
                        <span className="truncate">{channel.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}