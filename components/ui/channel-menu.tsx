import { ClickToCloseOverlay } from "@/components/ui/overlays";
import { CloseButton } from "@/components/ui/buttons";
import ChannelGroup from "./channel-menu/channel-group";

import type { DirectChannel, GroupChannel } from "@/types/channel-menu";

const placeholderGroups = [
    { name: "General", private: false, type: "group" },
    { name: "Development", private: true, type: "group" },
    { name: "Design", private: false, type: "group" },
] as GroupChannel[];

const placeholderDirectMessages = [
    { name: "Alice", user: { active: false, online: true }, type: "direct" },
    { name: "Bob", user: { active: false, online: false }, type: "direct" },
    { name: "Charlie", user: { active: true, online: true }, type: "direct" },
] as DirectChannel[];

export default function ChannelMenu({ onClose }: { onClose?: () => void }) {
    return (
        <>
            {/* overlay only shows on mobile/tablet */}
            {onClose !== undefined && (
                <div className="lg:hidden">
                    <ClickToCloseOverlay onClick={onClose} />
                </div>
            )}

            {/* Sidebar */}
            <div className="fixed top-0 left-0 pb-6 bg-gray-800 text-white shadow-lg z-50
                            transform transition-transform duration-300 ease-in-out
                            w-full md:w-80
                            h-full lg:h-auto
                            animate-in slide-in-from-left-300
                            lg:static lg:transform-none lg:animate-none"
            >
                <div className="flex flex-col gap-5 h-full overflow-y-auto">
                    <div className="lg:hidden flex flex-none items-center justify-between
                        px-4 py-2 sticky top-0 bg-gray-800 z-50"
                    >
                        <h2 className="text-2xl font-bold">Channels</h2>

                        {/* close button only shows on mobile/tablet */}
                        {onClose && <CloseButton onClick={onClose} />}
                    </div>

                    {/* group channels */}
                    <ChannelGroup channels={placeholderGroups} />

                    {/* direct messages */}
                    <ChannelGroup channels={placeholderDirectMessages} />
                </div>
            </div>
        </>
    );
}