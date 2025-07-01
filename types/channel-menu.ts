export interface Channel {
    name: string;
    type: "group" | "direct";
};

export type DirectChannel = Channel & {
    type: "direct";
    user: {
        active: boolean;
        online: boolean;
    };
};

export type GroupChannel = Channel & {
    type: "group";
    private: boolean;
};

export type AnyChannel = DirectChannel | GroupChannel;