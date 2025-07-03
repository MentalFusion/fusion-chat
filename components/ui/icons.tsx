import clsx from "clsx";

import type { GroupChannel } from "@/types/channel-menu";
import type { UserInfo } from "@/types/users";

const baseIconStyles = "relative flex items-center justify-center";

export const GroupChannelIcon = ({ channel }: { channel: GroupChannel }) => {
    return (
        <div className={`${baseIconStyles} w-6 h-6`}>
            <span className="material-symbols-outlined font-serif mr-2">
                {channel.private ? "lock" : "tag"}
            </span>
        </div>
    );
};

export const UserIcon = ({ user, size, hideStatus }: {
    user: UserInfo,
    size?: "small" | "large",
    hideStatus?: boolean
}) => {
    return (
        <div className={clsx([
            baseIconStyles,
            "bg-gray-500 mr-2",
            size === "large" ? "rounded-lg w-10 h-10" : "rounded-sm w-6 h-6"
        ])}>
            <span className="material-symbols-outlined">person</span>
            {!hideStatus && (
                <div className={clsx([
                    "absolute bottom-0 right-0 w-2 h-2 rounded-full border border-gray-800",
                    user.online ? "bg-green-500" : "bg-orange-500"
                ])}></div>
            )}
        </div>
    );
};