import clsx from "clsx";

import Image from "next/image";
import type { GroupChannel } from "@/types/channel-menu";
import type { UserInfo } from "@/types/user-info";

const baseIconStyles = "relative flex flex-0-0 items-center justify-center";

export const userIconStylesLg = "mr-2 w-12 h-12 min-w-12 min-h-12";
export const userIconStylesSm = "mr-2 w-6 h-6 min-w-6 min-h-6";

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
    const tmpImage = "/images/whisper-avatar.png"; // Temporary image path for testing

    return (
        <div className={clsx([
            baseIconStyles,
            "bg-gray-500 overflow-hidden",
            size === "large" ? `rounded-lg ${userIconStylesLg}` : `rounded-sm ${userIconStylesSm}`,
        ])}>
            {user.avatarUrl ? (
                <Image
                    src={tmpImage}
                    alt={user.name}
                    width={size === "large" ? 48 : 24}
                    height={size === "large" ? 48 : 24}
                />
            ) : (
                <span className="material-symbols-outlined">person</span>
            )}
            {!hideStatus && (
                <div className={clsx([
                    "absolute bottom-0 right-0 w-2 h-2 rounded-full border border-gray-800",
                    user.online ? "bg-green-500" : "bg-orange-500"
                ])}></div>
            )}
        </div>
    );
};