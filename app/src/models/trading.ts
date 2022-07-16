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

    public static createFrom(strDate: string, strAmount: string, strValue: string): Trading {
        const exp = /-/g;
        const tDate = new Date(strDate.replace(exp, ','));
        const tAmount = parseInt(strAmount);
        const tValue = parseFloat(strValue);

        return new Trading(tDate, tAmount, tValue);
    }
}