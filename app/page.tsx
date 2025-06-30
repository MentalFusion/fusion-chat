"use client";

import Channels from "@/components/ui/channel-menu/channels";

export default function Home() {
    return (
        <div className="flex flex-1 w-full">
            {/* <Channels /> */}

            <main className="flex-1 p-4 bg-gray-700">
                {/* Chat Area */}
            </main>

            <aside className="hidden lg:block w-1/8 p-4 bg-gray-200">
                {/* Right Sidebar */}
            </aside>
        </div>
    );
}
