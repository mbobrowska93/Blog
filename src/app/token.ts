export class Token {
    constructor(
        public aud: string,
        public exp: string,
        public iss: string,
        public role: string,
    ) {}
}
