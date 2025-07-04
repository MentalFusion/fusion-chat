export default function ChatForm() {
    return (
        <div className="p-4 border-t border-gray-600">
            <form className="flex space-x-2">
                <input
                    type="text"
                    placeholder="Type your message here..."
                    className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Send
                </button>
            </form>
        </div>
    );
}