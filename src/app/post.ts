export class Post {
    public id: number;
    public created: Date;
    constructor(
        public title: string,
        public content: string,
    ) {}
}
