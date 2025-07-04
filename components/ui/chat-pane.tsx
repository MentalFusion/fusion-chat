import ChatForm from "./chat-pane/chat-form";
import ChatHeader from "./chat-pane/chat-header";
import ChatMessages from "./chat-pane/chat-messages";


export default function ChatPane() {
    return (
        <>
            <ChatHeader />
            <ChatMessages />
            <ChatForm />
        </>
    );
}