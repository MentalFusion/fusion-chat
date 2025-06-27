export default function Home() {
    return (
        <div className="flex flex-1 w-full">
            <aside className="hidden lg:block w-1/8 p-4 bg-gray-200">
                {/* Left Sidebar */}
            </aside>

            <main className="flex-1 p-4 bg-gray-700">
                {/* Chat Area */}
            </main>

            <aside className="hidden lg:block w-1/8 p-4 bg-gray-200">
                {/* Right Sidebar */}
            </aside>
        </div>
    );
}
