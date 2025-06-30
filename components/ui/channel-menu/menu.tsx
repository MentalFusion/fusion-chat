export default function Channels({ onClose }: { onClose: () => void }) {
    // this should be a full height sidebar that appears on all devices
    // but on mobile it should be a full screen overlay
    // on medium screens it should be a sidebar that appears on the left side of the screen
    // on large screens it should be a sidebar that appears on the left side of the screen
    // on medium and large screens, it should animate in from the left side of the screen
    return (
        <>
            {/* overlay for easier closing */}
            <div
                className="fixed inset-0 bg-black opacity-50 z-40 h-full w-full fade-in fade-out"
                onClick={onClose}
            />

            {/* sidebar */}
            <div className="fixed top-0 left-0 h-full pb-6 bg-gray-800 text-white shadow-lg z-50
                            transform transition-transform duration-300 ease-in-out
                            w-full md:w-80 lg:w-96
                            animate-in slide-in-from-left-300">

                <div className="flex flex-col h-full overflow-y-auto">
                    <div className="flex flex-none items-center justify-between px-4 py-2 sticky top-0 bg-gray-800 z-50">
                        <h2 className="text-2xl font-bold">Channels</h2>

                        <CloseButton onClick={onClose} />
                    </div>


This is broken on purpose; had to call it. It's already after 5. Will fix either tonight or tomorrow.