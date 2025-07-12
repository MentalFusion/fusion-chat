"use client";

const BUTTON_CLASS = "p-2 hover:cursor-pointer hover:bg-gray-600 rounded transition-colors flex flex-col items-center justify-center";
const ICON_CLASS = "material-symbols-outlined text-sm";

interface FormattingToolbarProps {
    onApplyFormatting: (format: string) => void;
    onToggleEmojiPicker: () => void;
}

export default function FormattingToolbar({
    onApplyFormatting,
    onToggleEmojiPicker,
}: FormattingToolbarProps) {
    return (
        <div className="mb-1 flex items-center border-b border-gray-700">
            <button
                onClick={() => onApplyFormatting("bold")}
                className={BUTTON_CLASS}
                title="Bold (Ctrl+B)"
            >
                <span className={ICON_CLASS}>format_bold</span>
            </button>
            <button
                onClick={() => onApplyFormatting("italic")}
                className={BUTTON_CLASS}
                title="Italic (Ctrl+I)"
            >
                <span className={ICON_CLASS}>format_italic</span>
            </button>
            <button
                onClick={() => onApplyFormatting("underline")}
                className={BUTTON_CLASS}
                title="Underline (Ctrl+U)"
            >
                <span className={ICON_CLASS}>format_underlined</span>
            </button>
            <button
                onClick={() => onApplyFormatting("strikethrough")}
                className={BUTTON_CLASS}
                title="Strikethrough"
            >
                <span className={ICON_CLASS}>strikethrough_s</span>
            </button>
            <button
                onClick={() => onApplyFormatting("code")}
                className={BUTTON_CLASS}
                title="Inline Code"
            >
                <span className={ICON_CLASS}>code</span>
            </button>
            <button
                onClick={() => onApplyFormatting("codeblock")}
                className={BUTTON_CLASS}
                title="Code Block"
            >
                <span className={ICON_CLASS}>code_blocks</span>
            </button>
            <div className="flex-1"></div>
            <button
                onClick={onToggleEmojiPicker}
                className={BUTTON_CLASS}
                title="Add Emoji"
            >
                <span className={ICON_CLASS}>sentiment_satisfied</span>
            </button>
        </div>
    );
}