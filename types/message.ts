import type { UserInfo } from "./user-info";

export type Message = {
    id: number; // simple number for now, can be changed to string later
    user: UserInfo;
    content: string;
    timestamp: string;
};