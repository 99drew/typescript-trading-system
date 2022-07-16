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
    static createFrom(strDate, strAmount, strValue) {
        const exp = /-/g;
        const tDate = new Date(strDate.replace(exp, ','));
        const tAmount = parseInt(strAmount);
        const tValue = parseFloat(strValue);
        return new Trading(tDate, tAmount, tValue);
    }
}
