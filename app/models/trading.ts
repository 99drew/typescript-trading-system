export class Trading {
    constructor(
        private _date: Date,
        public readonly amount: number,
        public readonly value: number
    ){}

    get tDate(): Date {
        const copyDate = new Date(this._date.getTime());
        return copyDate;
    }

    get tVolumn(): Number {
        return this.amount * this.value;
    }
}