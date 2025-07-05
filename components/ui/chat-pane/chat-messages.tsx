import { useEffect, useState } from "react";

import ChatMessage from "./chat-message";
import ReactionBar from "./reaction-bar";

import type { Message } from "@/types/message";

const placeholderMessages = [
    {
        id: 1,
        user: { name: "Alice", online: true, active: true, avatarUrl: "abc123" },
        content: "Hello everyone! How's it going?",
        timestamp: "10:15 AM",
    },
    {
        id: 2,
        user: { name: "Bob", online: false, active: false, avatarUrl: "abc123" },
        content: "Hey Alice! I'm doing well, thanks!",
        timestamp: "10:16 AM",
    },
    {
        id: 3,
        user: { name: "Charlie", online: true, active: true, avatarUrl: "abc123" },
        content: "Hi everyone! Just joined the channel.",
        timestamp: "10:17 AM",
    },
    {
        id: 4,
        user: { name: "Charlie", online: true, active: true, avatarUrl: "abc123" },
        content: "Second message from the same user.",
        timestamp: "10:18 AM",
    },
    {
        id: 5,
        user: { name: "Michael", online: true, active: true, avatarUrl: "abc123" },
        content: "Hey team, any updates on the project?",
        timestamp: "10:19 AM",
    },
];

export default function ChatMessages() {
    const {
        hoveredMessageId,
        handleMouseEnter,
        handleMouseLeave,
        handleReaction,
        handleReply,
        handleTouchEnd,
        handleTouchStart,
        setHoveredMessageId,
    } = useChatMessagesHooks();

    return (
        <div
            className="flex flex-col justify-end flex-1 overflow-y-auto"
            onClick={() => setHoveredMessageId(null)}
        >
            {placeholderMessages.map((message, index) => (
                <div
                    key={message.id}
                    className="relative"
                    onMouseDown={() => handleMouseEnter(message.id)}
                    onMouseEnter={() => handleMouseEnter(message.id)}
                    onMouseLeave={handleMouseLeave}
                    onTouchMove={handleTouchEnd}
                    onTouchEnd={handleTouchEnd}
                    onTouchStart={() => handleTouchStart(message.id)}
                >
                    <ChatMessage
                        isHovered={hoveredMessageId === message.id}
                        message={message}
                        prevUser={placeholderMessages[index - 1]?.user}
                    />

                    {hoveredMessageId === message.id && (
                        <div className="absolute right-2 top-[-30%] z-10">
                            <ReactionBar
                                onReaction={(reaction: string) => handleReaction(message, reaction)}
                                onReply={() => handleReply(message)}
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

function useChatMessagesHooks() {
    const [hoveredMessageId, setHoveredMessageId] = useState<number | null>(null);
    const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
    const [touchTimer, setTouchTimer] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setIsTouchDevice("ontouchstart" in window);
    }, []);

    const handleMouseEnter = (messageId: number) => {
        if (!isTouchDevice) {
            setHoveredMessageId(messageId);
        }
    }

    const handleMouseLeave = () => {
        if (!isTouchDevice) {
            setHoveredMessageId(null);
        }
    }

    const handleReaction = (message: Message, reaction: string) => {
        // handle adding a reaction to the message
        console.log(`Reacted to message ${message.id} with ${reaction}`);
    }

    const handleReply = (message: Message) => {
        // focus the input box and add prefix
        console.log(`Replying to ${message.user.name}: `);
    }

    const handleTouchEnd = () => {
        console.log("Touch end detected", touchTimer);

        if (touchTimer) {
            clearTimeout(touchTimer);
            setTouchTimer(null);
        }
    }

    const handleTouchStart = (messageId: number) => {
        if (isTouchDevice) {
            const timer = setTimeout(() => {
                console.log("Touch start detected");

                // add haptic feedback
                navigator.vibrate?.(50);
                console.log("Touch start detectedasd");
                setHoveredMessageId(messageId);
                console.log("Touch start detectefdsafsd");
            }, 300);

            setTouchTimer(timer);
        }
    }

    return {
        hoveredMessageId,
        handleMouseEnter,
        handleMouseLeave,
        handleReaction,
        handleReply,
        handleTouchEnd,
        handleTouchStart,
        setHoveredMessageId,
    };
}
