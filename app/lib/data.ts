export const COMMON_EMOJIS = [
    "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇",
    "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚",
    "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🤩",
    "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣",
    "👍", "👎", "👌", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉",
    "👆", "🖕", "👇", "☝️", "👋", "🤚", "🖐️", "✋", "🖖", "👏",
    "🔥", "💯", "💪", "💚", "💙", "💜", "🖤", "🤍", "🤎", "❤️"
];

export function fetchRecentEmojis() {
    // determine the latest 3 emojis used by the user
}

export const SLASH_COMMANDS = [
    {
        command: "/shrug",
        description: "Add ¯\\_(ツ)_/¯ to your message",
        replacement: "¯\\_(ツ)_/¯"
    },
    {
        command: "/tableflip",
        description: "Add (╯°□°）╯︵ ┻━┻ to your message",
        replacement: "(╯°□°）╯︵ ┻━┻"
    },
    {
        command: "/unflip",
        description: "Add ┬─┬ ノ( ゜-゜ノ) to your message",
        replacement: "┬─┬ ノ( ゜-゜ノ)"
    },
    {
        command: "/lenny",
        description: "Add ( ͡° ͜ʖ ͡°) to your message",
        replacement: "( ͡° ͜ʖ ͡°)"
    },
];