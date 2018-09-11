export class FormTemplate{
    constructor(
        public name: string,
        public email: string,
        public mobile: string,
        public zipcode: number,
        public singleFamily: boolean,
        public multiFamily: boolean,
        public startDate: Date,
        public endDate: Date,
        public married: boolean,
        public single: boolean,
        public unknownStatus: boolean,
        public male: boolean,
        public female: boolean,
        public unknownGender: boolean
    ) {}
}