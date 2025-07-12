"use client";

import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles = "flex items-center p-2 rounded hover:bg-gray-700 hover:cursor-pointer focus:outline-none focus:ring-gray-600";

export const AddButton = ({ onClick, ...props }: ButtonProps) => (
    <button className={baseStyles} onClick={onClick} {...props}>
        <span className="material-symbols-outlined bg-test">
            add
        </span>
    </button>
);

export const CloseButton = ({ onClick, ...props }: ButtonProps) => (
    <button className={baseStyles} onClick={onClick} {...props}>
        <span className="material-symbols-outlined">
            close
        </span>
    </button>
);

export const ExpandButton = ({ expanded, onClick, ...props }: { expanded: boolean } & ButtonProps) => (
    <button className={baseStyles} onClick={onClick} {...props}>
        <span className="material-symbols-outlined">
            {expanded ? "expand_less" : "expand_more"}
        </span>
    </button>
);

export const ChannelsButton = ({ onClick, ...props }: ButtonProps) => (
    <button className={baseStyles} onClick={onClick} {...props}>
        <span className="material-symbols-outlined">
            chat
        </span>
    </button>
);

export const SettingsButton = ({ onClick, ...props }: ButtonProps) => (
    <button className={baseStyles} onClick={onClick} {...props}>
        <span className="material-symbols-outlined">
            settings
        </span>
    </button>
);

export const UsersButton = ({ onClick, ...props }: ButtonProps) => (
    <button className={`lg:hidden ${baseStyles}`} onClick={onClick} {...props}>
        <span className="material-symbols-outlined">
            group
        </span>
    </button>
);
