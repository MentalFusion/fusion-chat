"use client";

import clsx from "clsx";
import twemoji from "@twemoji/api";
import * as emoji from "node-emoji";
import { useEffect, useRef } from "react";

import { UserIcon, userIconStylesLg } from "../icons";

import type { Message } from "~/types/message";
import type { UserInfo } from "~/types/user-info";

export default function ChatMessage({
    isHovered,
    message,
    prevUser,
}: {
    isHovered: boolean,
    message: Message,
    prevUser?: UserInfo,
}) {
    const isRepeated = prevUser && prevUser.name === message.user.name;

    const messageRef = useRef<HTMLParagraphElement>(null);
    const parsedMessage = emoji.emojify(message.content);

    useEffect(() => {
        if (messageRef.current) {
            twemoji.parse(messageRef.current, {
                folder: "svg",
                ext: ".svg",
                className: "inline-block align-middle h-5",
            });
        }
    }, [parsedMessage]);

    return (
        <div className={clsx([
            "flex items-start space-x-3 group hover:bg-gray-600 px-4 py-1",
            isHovered ? "bg-gray-600" : "initial",
        ])}>
            {isRepeated ? (
                <div className={`invisible flex-0 ${userIconStylesLg} h-auto min-h-auto text-right group-hover:visible`}>
                    <div className="font-semibold">
                        <span className="text-[0.65em] text-gray-400">{message.timestamp}</span>
                    </div>
                </div>
            ) : (
                <UserIcon
                    user={message.user}
                    size="large"
                    hideStatus={true}
                />
            )}

            <div>
                {!isRepeated && (
                    <div className="font-semibold">
                        <span className="inline-block mr-2">{message.user.name}</span>
                        <span className="text-sm text-gray-400">{message.timestamp}</span>
                    </div>
                )}
                <p ref={messageRef}>{parsedMessage}</p>
            </div>
        </div>
    );
}
