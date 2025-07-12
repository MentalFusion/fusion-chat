"use client";

import { KeyboardEvent, ChangeEvent, RefObject } from "react";

interface MessageInputProps {
    message: string;
    textareaRef: RefObject<HTMLTextAreaElement | null>;
    onMessageChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    onKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
    onSubmit: () => void;
}

export default function MessageInput({
    message,
    textareaRef,
    onMessageChange,
    onKeyDown,
    onSubmit,
}: MessageInputProps) {
    return (
        <>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="flex space-x-2">
                <div className="flex-1 relative">
                    <textarea
                        ref={textareaRef}
                        value={message}
                        onChange={onMessageChange}
                        onKeyDown={onKeyDown}
                        placeholder="Type your message here... (Shift+Enter for new line)"
                        className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none min-h-[40px] max-h-32"
                        rows={1}
                        style={{
                            height: "auto",
                            minHeight: "40px",
                            maxHeight: "128px",
                            overflowY: message.split("\n").length > 3 ? "scroll" : "hidden"
                        }}
                        onInput={(e) => {
                            const target = e.target as HTMLTextAreaElement;
                            target.style.height = "auto";
                            target.style.height = Math.min(target.scrollHeight, 128) + "px";
                        }}
                    />
                    {message.startsWith("/") && (
                        <div className="absolute right-2 top-2 text-xs text-gray-500">
                            Type slash command
                        </div>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={!message.trim()}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors flex items-center justify-center min-w-[44px]"
                >
                    <span className="material-symbols-outlined">send</span>
                </button>
            </form>

            <div className="mt-2 text-xs text-gray-500">
                Use <kbd className="bg-gray-700 px-1 rounded">Shift+Enter</kbd> for new line, <kbd className="bg-gray-700 px-1 rounded">Enter</kbd> to send
            </div>
        </>
    );
}