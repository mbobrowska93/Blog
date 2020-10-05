export class User {
    public isAdmin: boolean;
    constructor(
        public login: string,
        public password: string,
    ) {}
}
