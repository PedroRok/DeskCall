export type Shortcut = {
    key: string;
    title: string;
    marked: string;
    message: string;
}

export type DiscordProps = {
    token: string;
    owner: string;
    channel: string;
    sound: boolean;
    response: boolean;
}