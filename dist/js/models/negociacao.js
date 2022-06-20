export class Negociacao {
    constructor(_data, qtd, valor) {
        this._data = _data;
        this.qtd = qtd;
        this.valor = valor;
    }
    get data() {
        const copiaData = new Date(this._data.getTime());
        return copiaData;
    }
    get volume() {
        return this.qtd * this.valor;
    }
}
