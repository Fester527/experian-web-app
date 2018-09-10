export class FormTemplate{
    constructor(
        public name: string,
        public email: string,
        public mobile: string,
        public zipcode: number,
        public singleFamily: boolean,
        public multiFamily: boolean,
        public poBox: boolean
    ) {}
}