"use client";

import React, { useEffect, useRef } from "react";
import twemoji from "@twemoji/api";
import * as emoji from "node-emoji";

export default function ReactionBar({
    onReaction,
    onReply,
}: {
    onReaction: (reaction: string) => void;
    onReply: () => void;
}) {
    const reactionBarRef = useRef<HTMLDivElement>(null);
    const recentReactions = [":+1:", ":heart:", ":joy:"].map((r) => emoji.emojify(r));
    const reactionButtonStyles = "flex flex-col justify-center hover:bg-gray-700 rounded p-1 cursor-pointer";

    useEffect(() => {
        if (reactionBarRef.current) {
            twemoji.parse(reactionBarRef.current, {
                folder: "svg",
                ext: ".svg",
                className: "inline-block align-middle h-5",
            });
        }
    }, [recentReactions]);

    return (
        <div
            ref={reactionBarRef}
            className="flex space-x-1 p-1 bg-gray-800 rounded-md border-gray-500 border select-none"
        >
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
                className={reactionButtonStyles}
                onMouseDown={() => console.log("Adding a reaction")}
                onTouchEnd={() => console.log("Adding a reaction")}
            >
                <span className="material-symbols-outlined">add_reaction</span>
            </button>

            <div className="text-gray-500 border-r-[1px]"></div>

            <button
                className={reactionButtonStyles}
                onMouseDown={onReply}
                onTouchEnd={onReply}
            >
                <span className="material-symbols-outlined">reply</span>
            </button>
        </div>
    );
}