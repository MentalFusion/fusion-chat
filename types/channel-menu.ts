import type { UserInfo } from "./users";

interface Channel {
    name: string;
    type: "group" | "direct";
};

export type DirectChannel = Channel & {
    type: "direct";
    user: UserInfo;
};

export type GroupChannel = Channel & {
    type: "group";
    private: boolean;
};

export type AnyChannel = DirectChannel | GroupChannel;