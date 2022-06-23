export class Trading {
    constructor(_date, amount, value) {
        this._date = _date;
        this.amount = amount;
        this.value = value;
    }
    get tDate() {
        const copyDate = new Date(this._date.getTime());
        return copyDate;
    }
    get tVolumn() {
        return this.amount * this.value;
    }
}
