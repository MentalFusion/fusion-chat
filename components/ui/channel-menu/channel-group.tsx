import { AddButton } from "@/components/ui/buttons";
import { DirectChannelIcon, GroupChannelIcon } from "./channel-icons";

import type { AnyChannel } from "@/types/channel-menu";

export default function ChannelGroup({ channels }: { channels: AnyChannel[] }) {
    return (
        <div className="mx-4 flex-1 space-y-2 rounded-md bg-gray-600 py-2 px-4">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Group Channels</h3>

                <AddButton onClick={() => console.log("Join / create channel")} />
            </div>

            <ul className="space-y-1">
                {channels.map((channel, index) => (
                    <li key={index} className="flex items-center p-2 rounded cursor-pointer hover:bg-gray-700">
                        {channel.type === "direct" ? (
                            <DirectChannelIcon channel={channel} />
                        ) : (
                            <GroupChannelIcon channel={channel} />
                        )}

                        {/* always the same no matter the type */}
                        <span>{channel.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}