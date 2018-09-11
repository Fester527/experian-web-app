export class FormTemplate{
    constructor(
        public name: string,
        public email: string,
        public mobile: string,
        public zipcode: number,
        public housing: string,
        public startDate: Date,
        public endDate: Date
    ) {}
}