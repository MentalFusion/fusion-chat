import React from "react";

export default function ReactionBar({
    onReaction,
    onReply,
}: {
    onReaction: (reaction: string) => void;
    onReply: () => void;
}) {
    const recentReactions = ["👍", "❤️", "😂"];
    const reactionButtonStyles = "text-xl hover:bg-gray-700 rounded p-1 cursor-pointer";

    return (
        <div className="flex space-x-1 p-1 bg-gray-800 rounded-md border-gray-500 border select-none">
            {recentReactions.map((reaction) => (
                <button
                    key={reaction}
                    className={reactionButtonStyles}
                    title={`React with ${reaction}`}
                    onMouseDown={() => onReaction(reaction)}
                    onTouchEnd={() => onReaction(reaction)}
                >
                    {reaction}
                </button>
            ))}

            <button
                className={`flex flex-col justify-center ${reactionButtonStyles}`}
                onMouseDown={() => console.log("Adding a reaction")}
                onTouchEnd={() => console.log("Adding a reaction")}
            >
                <span className="material-symbols-outlined">add_reaction</span>
            </button>

            <div className="text-gray-500 border-r-[1px]"></div>

            <button
                className={`flex flex-col justify-center ${reactionButtonStyles}`}
                onMouseDown={onReply}
                onTouchEnd={onReply}
            >
                <span className="material-symbols-outlined">reply</span>
            </button>
        </div>
    );
}