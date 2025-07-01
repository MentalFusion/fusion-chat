import clsx from "clsx";

import type { DirectChannel, GroupChannel } from "@/types/channel-menu";

const baseIconStyles = "relative w-8 h-8 flex items-center justify-center";

export const GroupChannelIcon = ({ channel }: { channel: GroupChannel }) => {
    return (
        <div className={baseIconStyles}>
            <span className="material-symbols-outlined mr-2">
                {channel.private ? "lock" : "tag"}
            </span>
        </div>
    );
};

export const DirectChannelIcon = ({ channel }: { channel: DirectChannel }) => {
    return (
        <div className={`${baseIconStyles} bg-gray-500 rounded-full mr-2`}>
            <span className="material-symbols-outlined">person</span>
            <div className={clsx([
                "absolute bottom-0 right-0 w-2 h-2 rounded-full border border-gray-800",
                channel.user.online ? "bg-green-500" : "bg-orange-500"
            ])}></div>
        </div>
    );
};