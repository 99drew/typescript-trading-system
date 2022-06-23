import { Trading } from "../models/trading.js";
import { Tradings } from "../models/tradings.js";
import { TradingsView } from "../views/tradings-view.js";
import { messageView } from "../views/message-view.js";
export class negociacaoController {
    constructor() {
        this.tradings = new Tradings();
        this.tradingsView = new TradingsView();
        this.messageView = new messageView();
        this.inputDate = document.querySelector('#data');
        this.inputAmount = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
        this.tradingsView.update(this.tradings);
    }
    addTrading() {
        const trading = this.createTrading();
        this.tradings.add(trading);
        this.clearForm();
        this.updateView();
    }
    createTrading() {
        const exp = /-/g;
        const data = new Date(this.inputDate.value.replace(exp, ','));
        const qtd = parseInt(this.inputAmount.value);
        const valor = parseFloat(this.inputValue.value);
        return new Trading(data, qtd, valor);
    }
    clearForm() {
        this.inputDate.value = '';
        this.inputAmount.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
    updateView() {
        this.tradingsView.update(this.tradings);
        this.messageView.update('Negociação adicionada com sucesso!');
    }
}
