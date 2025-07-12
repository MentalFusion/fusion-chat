"use client";

import { useState, useRef, KeyboardEvent, ChangeEvent } from "react";
import { SLASH_COMMANDS } from "@/lib/data";
import SlashCommandsDropdown from "./chat-form/slash-commands-dropdown";
import EmojiPicker from "./chat-form/emoji-picker";
import FormattingToolbar from "./chat-form/formatting-toolbar";
import MessageInput from "./chat-form/message-input";

export default function ChatForm() {
    const [message, setMessage] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [showSlashCommands, setShowSlashCommands] = useState(false);
    const [selectedCommandIndex, setSelectedCommandIndex] = useState(0);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const insertTextAtCursor = (text: string) => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const newMessage = message.substring(0, start) + text + message.substring(end);

        setMessage(newMessage);

        setTimeout(() => {
            textarea.selectionStart = textarea.selectionEnd = start + text.length;
            textarea.focus();
        }, 0);
    };

    const applyFormatting = (format: string) => {
        const textarea = textareaRef.current;

        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = message.substring(start, end);

        let formattedText = "";

        switch (format) {
            case "bold":
                formattedText = `**${selectedText}**`;
                break;
            case "italic":
                formattedText = `*${selectedText}*`;
                break;
            case "underline":
                formattedText = `<u>${selectedText}</u>`;
                break;
            case "strikethrough":
                formattedText = `~~${selectedText}~~`;
                break;
            case "code":
                formattedText = `\`${selectedText}\``;
                break;
            case "codeblock":
                formattedText = `\`\`\`\n${selectedText}\n\`\`\``;
                break;
        }

        const newMessage = message.substring(0, start) + formattedText + message.substring(end);

        setMessage(newMessage);

        setTimeout(() => {
            const offset = format === "codeblock" ? 4 : (format === "underline" ? 3 : 2);
            textarea.selectionStart = textarea.selectionEnd = start + offset;
            textarea.focus();
        }, 0);
    };

    const getFilteredCommands = () => {
        const currentWord = message.split(" ")[0];
        return SLASH_COMMANDS.filter(cmd => cmd.command.startsWith(currentWord));
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (showSlashCommands) {
            const filteredCommands = getFilteredCommands();

            if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelectedCommandIndex(prev =>
                    prev < filteredCommands.length - 1 ? prev + 1 : 0
                );
                return;
            }

            if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelectedCommandIndex(prev =>
                    prev > 0 ? prev - 1 : filteredCommands.length - 1
                );
                return;
            }

            if (e.key === "Tab") {
                e.preventDefault();
                const selectedCommand = filteredCommands[selectedCommandIndex];
                if (selectedCommand) {
                    handleSlashCommand(selectedCommand.command);
                }
                return;
            }

            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                const selectedCommand = filteredCommands[selectedCommandIndex];
                if (selectedCommand) {
                    handleSlashCommand(selectedCommand.command);
                } else {
                    handleSubmit();
                }
                return;
            }

            if (e.key === "Escape") {
                e.preventDefault();
                setShowSlashCommands(false);
                setSelectedCommandIndex(0);
                return;
            }
        }

        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }

        if (!["ArrowUp", "ArrowDown", "Enter", "Tab", "Escape"].includes(e.key)) {
            if (showSlashCommands && !message.startsWith("/")) {
                setShowSlashCommands(false);
                setSelectedCommandIndex(0);
            }
        }
    };

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setMessage(value);

        if (value.startsWith("/")) {
            setShowSlashCommands(true);
            setSelectedCommandIndex(0);
        } else {
            setShowSlashCommands(false);
            setSelectedCommandIndex(0);
        }
    };

    const handleSlashCommand = (command: string) => {
        const replacement = SLASH_COMMANDS.find(cmd => cmd.command === command)?.replacement || "";

        if (!replacement) return;

        const commandEnd = message.indexOf(" ") > -1 ? message.indexOf(" ") : message.length;
        const newMessage = replacement + message.substring(commandEnd);

        setMessage(newMessage);
        setShowSlashCommands(false);
        setSelectedCommandIndex(0);

        setTimeout(() => {
            textareaRef.current?.focus();
        }, 0);
    };

    const handleSubmit = () => {
        if (message.trim()) {
            console.log("Form submitted with message:", message);
            console.log("Message length:", message.length);
            console.log("Contains markdown:", /[*_~`]/.test(message));
            setMessage("");
        }
    };

    const handleEmojiSelect = (emoji: string) => {
        insertTextAtCursor(emoji);
        setShowEmojiPicker(false);
    };

    const handleToggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    return (
        <div className="p-4 border-t border-gray-600 relative">
            {showSlashCommands && (
                <SlashCommandsDropdown
                    message={message}
                    selectedCommandIndex={selectedCommandIndex}
                    onSlashCommand={handleSlashCommand}
                />
            )}

            {showEmojiPicker && (
                <EmojiPicker onEmojiSelect={handleEmojiSelect} />
            )}

            <FormattingToolbar
                onApplyFormatting={applyFormatting}
                onToggleEmojiPicker={handleToggleEmojiPicker}
            />

            <MessageInput
                message={message}
                textareaRef={textareaRef}
                onMessageChange={handleChange}
                onKeyDown={handleKeyDown}
                onSubmit={handleSubmit}
            />
        </div>
    );
}