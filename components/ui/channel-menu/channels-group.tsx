import { AddButton } from "@/components/ui/buttons";

const channelGroupStyles = "space-y-2 rounded-md bg-gray-600 py-2 px-4";
const groupEntryStyles = "flex items-center p-2 rounded cursor-pointer hover:bg-gray-700";
const iconStyles = "relative w-8 h-8 flex items-center justify-center";

// DirectChannel and GroupChannel are assumed to be types defined elsewhere
// import type { DirectChannel, GroupChannel } from "@/types/channel"; // doesn't exist yet

// should accept a channels prop that is an array of channel components
export const ChannelsGroup = ({ channels, extraStyles }: {
    channels: (DirectChannel|GroupChannel)[],
    extraStyles?: string
}) => {
    <div className={`mx-4 flex-1 ${channelGroupStyles}`}>
        <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Group Channels</h3>

            <AddButton onClick={() => console.log("Join / create channel")} />
        </div>

        <ul className="space-y-1">
            {channels.map((channel, index) => (
                <li key={index} className={groupEntryStyles}>
                    {/* icon is always the same size, but can be different based on channel type */}
                    {/* should probably make a ChannelIcon component */}
                    <div className={`${iconStyles}${extraStyles ? ` ${extraStyles}` : ""}`}>
                        <span className="material-symbols-outlined mr-2">
                            {channel.private ? "lock" : "tag"}
                        </span>
                    </div>

                    {/* always the same no matter the type */}
                    <span>{channel.name}</span>
                </li>
            ))}
        </ul>
    </div>
}