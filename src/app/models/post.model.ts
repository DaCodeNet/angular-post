export class Post {
    createAt: Date;
    constructor(public title: string, public content: string, public loveits: number) {
        this.createAt = new Date();
    }
}
