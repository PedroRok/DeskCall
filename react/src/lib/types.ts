export type Shortcut = {
    key: string;
    title: string;
    marked: string;
    message: string;
}

export type DiscordProps = {
    webhook: string;
    owner: string;
    sound: boolean;
}