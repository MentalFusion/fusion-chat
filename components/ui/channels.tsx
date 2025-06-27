import { AddButton, CloseButton } from "@/components/ui/buttons";

export default function Channels({ onClose }: { onClose: () => void }) {
    // this should be a full height sidebar that appears on all devices
    // but on mobile it should be a full screen overlay
    // on medium screens it should be a sidebar that appears on the left side of the screen
    // on large screens it should be a sidebar that appears on the left side of the screen
    // on medium and large screens, it should animate in from the left side of the screen
    return (
        <>
            {/* Mobile: Full-screen overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={onClose} />

            {/* Sidebar */}
            <div className="fixed top-0 left-0 h-full bg-gray-800 text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
                            w-full md:w-80 lg:w-96
                            animate-in slide-in-from-left-300">

                <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold">Channels</h2>

                        <CloseButton onClick={onClose} />
                    </div>

                    {/* Example channel list, replace with actual data */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">Group Channels</h3>

                            <AddButton onClick={() => console.log("Join / create channel")} />
                        </div>

                        <ul className="space-y-1">
                            <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">General</li>
                            <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Development</li>
                            <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Design</li>
                        </ul>
                    </div>

                    {/* direct channels */}
                    <div className="mt-6 space-y-2">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">Direct Messages</h3>

                            <AddButton onClick={() => console.log("Add direct message")} />
                        </div>

                        <ul className="space-y-1">
                            <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Alice</li>
                            <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Bob</li>
                            <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Charlie</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}