import { useState } from "react";

import { ClickToCloseOverlay } from "@/components/ui/overlays";
import { CloseButton } from "@/components/ui/buttons";
import ChannelGroup from "./channel-menu/channel-group";

import type { AnyChannel, DirectChannel, GroupChannel } from "@/types/channel-menu";

const placeholderGroups = [
    { name: "General", private: false, type: "group" },
    { name: "Development - thisisareallylongnamethatprobablywontwrapcorrectly", private: true, type: "group" },
    { name: "Design", private: false, type: "group" },
    { name: "Marketing", private: true, type: "group" },
    { name: "Sales", private: false, type: "group" },
    { name: "Support", private: true, type: "group" },
    { name: "Random", private: false, type: "group" },
] as GroupChannel[];

const placeholderDirectMessages = [
    { name: "Alice", user: { name: "Alice", active: false, online: true, avatarUrl: "abc123" }, type: "direct" },
    { name: "Bob", user: { name: "Bob", active: false, online: false, avatarUrl: "abc123" }, type: "direct" },
    { name: "Charlie", user: { name: "Charlie", active: true, online: true, avatarUrl: "abc123" }, type: "direct" },
    { name: "Diana", user: { name: "Diana", active: true, online: false, avatarUrl: "abc123" }, type: "direct" },
    { name: "Ethan", user: { name: "Ethan", active: false, online: true, avatarUrl: "abc123" }, type: "direct" },
    { name: "Fiona", user: { name: "Fiona", active: true, online: true, avatarUrl: "abc123" }, type: "direct" },
    { name: "George", user: { name: "George", active: false, online: false, avatarUrl: "abc123" }, type: "direct" },
    { name: "Hannah", user: { name: "Hannah", active: true, online: true, avatarUrl: "abc123" }, type: "direct" },
    { name: "Ian", user: { name: "Ian", active: false, online: true, avatarUrl: "abc123" }, type: "direct" },
    { name: "Jasmine", user: { name: "Jasmine", active: true, online: false, avatarUrl: "abc123" }, type: "direct" },
] as DirectChannel[];

export default function ChannelMenu({ onClose }: { onClose?: () => void }) {
    const [activeChannel, setActiveChannel] = useState<AnyChannel | null>(null);

    const handleChannelClick = (channel: AnyChannel) => setActiveChannel(channel);

    return (
        <>
            {/* overlay only shows on mobile/tablet */}
            {onClose !== undefined && (
                <div className="lg:hidden">
                    <ClickToCloseOverlay onClick={onClose} />
                </div>
            )}

            {/* Sidebar */}
            <div className="fixed top-0 left-0 pb-6 lg:pb-0 bg-gray-800 text-white shadow-lg z-50
                            transform transition-transform duration-300 ease-in-out
                            w-full md:min-w-80 md:w-80
                            h-full lg:h-auto
                            animate-in slide-in-from-left-300
                            lg:static lg:transform-none lg:animate-none"
            >
                <div className="flex flex-col gap-5 h-full">
                    <div className="lg:hidden flex flex-none items-center justify-between
                        px-4 py-2 sticky top-0 bg-gray-800 z-50"
                    >
                        <h2 className="text-2xl font-bold">Channels</h2>

                        {/* close button only shows on mobile/tablet */}
                        {onClose && <CloseButton onClick={onClose} />}
                    </div>

                    {/* group channels */}
                    <ChannelGroup
                        title="Group Channels"
                        activeChannel={activeChannel}
                        channels={placeholderGroups}
                        onChannelClick={handleChannelClick}
                    />

                    {/* direct messages */}
                    <ChannelGroup
                        title="Direct Messages"
                        activeChannel={activeChannel}
                        channels={placeholderDirectMessages}
                        onChannelClick={handleChannelClick}
                    />
                </div>
            </div>
        </>
    );
}