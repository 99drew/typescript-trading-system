export class Negociacao {
    constructor(
        private _data: Date,
        public readonly qtd: number,
        public readonly valor: number
    ){}

    get data(): Date {
        const copiaData = new Date(this._data.getTime());
        return copiaData;
    }

    get volume(): Number {
        return this.qtd * this.valor;
    }
}