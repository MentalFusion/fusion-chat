import type { UserInfo } from "./user-info";

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