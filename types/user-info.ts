export interface UserInfo {
    name: string;
    online: boolean;
    active: boolean;
    avatarUrl?: string; // external URL for an avatar
    statusMsg?: string; // user-defined status message
};