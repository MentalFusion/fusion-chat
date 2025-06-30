import clsx from "clsx";
import { AddButton, CloseButton } from "@/components/ui/buttons";

const placeholderGroups = [
    { name: "General", private: false },
    { name: "Development", private: true },
    { name: "Design", private: false },
];

const placeholderDirectMessages = [
    { name: "Alice", online: true },
    { name: "Bob", online: false },
    { name: "Charlie", online: true },
];

const channelGroupStyles = "space-y-2 rounded-md bg-gray-600 py-2 px-4";
const groupEntryStyles = "flex items-center p-2 rounded cursor-pointer hover:bg-gray-700";

export default function Channels({ onClose }: { onClose: () => void }) {
    // this should be a full height sidebar that appears on all devices
    // but on mobile it should be a full screen overlay
    // on medium screens it should be a sidebar that appears on the left side of the screen
    // on large screens it should be a sidebar that appears on the left side of the screen
    // on medium and large screens, it should animate in from the left side of the screen
    return (
        <>
            <div
                className="fixed inset-0 bg-black opacity-50 z-40 h-full w-full fade-in fade-out"
                onClick={onClose}
            />

            {/* Sidebar */}
            <div className="fixed top-0 left-0 h-full pb-6 bg-gray-800 text-white shadow-lg z-50
                            transform transition-transform duration-300 ease-in-out
                            w-full md:w-80 lg:w-96
                            animate-in slide-in-from-left-300">

                <div className="flex flex-col h-full overflow-y-auto">
                    <div className="flex flex-none items-center justify-between px-4 py-2 sticky top-0 bg-gray-800 z-50">
                        <h2 className="text-2xl font-bold">Channels</h2>

                        <CloseButton onClick={onClose} />
                    </div>

                    {/* group channels */}
                    <div className={`mx-4 flex-1 ${channelGroupStyles}`}>
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">Group Channels</h3>

                            <AddButton onClick={() => console.log("Join / create channel")} />
                        </div>

                        <ul className="space-y-1">
                            {placeholderGroups.map((group, index) => (
                                <li key={index} className={groupEntryStyles}>
                                    <div className="relative w-8 h-8 flex items-center justify-center">
                                        <span className="material-symbols-outlined mr-2">
                                            {group.private ? "lock" : "tag"}
                                        </span>
                                    </div>
                                    <span>{group.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* direct channels */}
                    <div className={`flex-1 mt-6 mx-4 ${channelGroupStyles}`}>
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">Direct Messages</h3>

                            <AddButton onClick={() => console.log("Add direct message")} />
                        </div>

                        <ul className="space-y-1">
                            {placeholderDirectMessages.map((user, index) => (
                                <li key={index} className={groupEntryStyles}>
                                    <div className="relative w-8 h-8 flex items-center justify-center bg-gray-500 rounded-full mr-2">
                                        <span className="material-symbols-outlined text-white">person</span>
                                        <div className={clsx([
                                            "absolute bottom-0 right-0 w-2 h-2 rounded-full border border-gray-800",
                                            user.online ? "bg-green-500" : "bg-orange-500"
                                        ])}></div>
                                    </div>

                                    <span>{user.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}