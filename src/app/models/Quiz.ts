export class Quiz {
    constructor(public id: number, 
        public question: string,
        public options: string[],
        public correctIndex: number) { }
}
