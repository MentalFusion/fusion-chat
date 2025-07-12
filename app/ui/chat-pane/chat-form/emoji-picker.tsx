"use client";

import { useEffect, useRef } from "react";
import twemoji from "@twemoji/api";

import { COMMON_EMOJIS } from "@/lib/data";

interface EmojiPickerProps {
    onEmojiSelect: (emoji: string) => void;
}

export default function EmojiPicker({ onEmojiSelect }: EmojiPickerProps) {
    const emojiGridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (emojiGridRef.current) {
            twemoji.parse(emojiGridRef.current, {
                folder: "svg",
                ext: ".svg"
            });
        }
    }, []);

    return (
        <div className="absolute bottom-full left-4 right-4 mb-2 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
            <div className="p-2 border-b border-gray-600 text-sm text-gray-400">
                Select Emoji
            </div>
            <div ref={emojiGridRef} className="p-2 grid grid-cols-10 gap-1">
                {COMMON_EMOJIS.map((emoji, index) => (
                    <button
                        key={index}
                        onClick={() => onEmojiSelect(emoji)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-700 rounded text-lg"
                    >
                        {emoji}
                    </button>
                ))}
            </div>
        </div>
    );
}