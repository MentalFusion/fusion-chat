"use client";

import { SLASH_COMMANDS } from "@/lib/data";
import clsx from "clsx";

interface SlashCommandsDropdownProps {
    message: string;
    selectedCommandIndex: number;
    onSlashCommand: (command: string) => void;
}

export default function SlashCommandsDropdown({
    message,
    selectedCommandIndex,
    onSlashCommand,
}: SlashCommandsDropdownProps) {
    const getFilteredCommands = () => {
        const currentWord = message.split(" ")[0];
        return SLASH_COMMANDS.filter(cmd => cmd.command.startsWith(currentWord));
    };

    const filteredCommands = getFilteredCommands();

    if (filteredCommands.length === 0) {
        return null;
    }

    return (
        <div className="absolute bottom-full left-4 right-4 mb-2 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-10">
            <div className="p-2 border-b border-gray-600 text-sm text-gray-400">
                Slash Commands
            </div>
            {filteredCommands.map((cmd, index) => (
                <button
                    key={cmd.command}
                    onClick={() => onSlashCommand(cmd.command)}
                    className={clsx(
                        "w-full px-3 py-2 text-left flex justify-between items-center transition-colors",
                        index === selectedCommandIndex
                            ? "bg-blue-600 text-white"
                            : "hover:bg-gray-700"
                    )}
                >
                    <span className={clsx(
                        "font-mono",
                        index === selectedCommandIndex ? "text-white" : "text-blue-400"
                    )}>{cmd.command}</span>
                    <span className={clsx(
                        "text-sm",
                        index === selectedCommandIndex ? "text-blue-100" : "text-gray-500"
                    )}>{cmd.description}</span>
                </button>
            ))}
        </div>
    );
}