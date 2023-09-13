
export default class Shortcut {

    private key: string;
    private title: string;
    private marked: string;
    private message: string;

    constructor(key?: string, title?: string, marked?: string, message?: string) {
        this.key = key || '';
        this.title = title || '';
        this.marked = marked || '';
        this.message = message || "@user, você está sendo chamado por @owner!";
    }

    public getKey(): string {
        return this.key;
    }

    public getTitle(): string {
        return this.title;
    }

    public getMarked(): string {
        return this.marked;
    }

    public getMessage(): string {
        return this.message;
    }
    
}